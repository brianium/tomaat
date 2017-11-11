(ns ui.worker
  (:require [electron :refer [remote ipcRenderer]]
            [path]))

(def BrowserWindow (.-BrowserWindow remote))

;;; Maintain a single reference to a worker window
(defonce *worker (atom nil))

(defn current-window-id []
  (->> BrowserWindow
      .getFocusedWindow
      .-id))

(defn worker-url
  "We want a boss development environment. :asset-path settings
  jack with live reloading, so this function will help us determine
  the url of the worker document based on environment"
  []
  (->> (path/join js/__dirname "../../../" "worker.html")
       (path/resolve)
       (str "file://")))

(defn create-worker
  "Creates a worker and calls the given on-load handler. Returns the
  created worker."
  [on-load & rest]
  (let [path   (worker-url)
        worker (BrowserWindow. #js {:width 400 :height 400 :show false})
        args   (concat [worker] rest)]
    (.loadURL worker path)
    (-> worker
        .-webContents
        (.on "did-finish-load" #(apply on-load args)))
    worker))

(defn on
  "Handles an ipc renderer event"
  [event-name handler]
  (.on ipcRenderer event-name handler))

(defn send
  "Send a message to a worker window"
  [worker event-name & rest]
  (let [id   (current-window-id)
        args (concat [event-name id] rest)]
    (-> worker
        .-webContents
        .-send
        (apply args))))

(defn message!
  "Sends a message to the remote worker. This function calls the send function - but
  it manages the *worker atom - creating it if it does not exist, otherwise reusing it"
  [event-name & rest]
  (if (nil? @*worker)
    (reset!
      *worker
      (create-worker
        (fn [worker]
          (apply send worker event-name rest))))
    (apply send @*worker event-name rest)))
