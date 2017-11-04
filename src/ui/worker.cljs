(ns ui.worker
  (:require [electron :refer [remote ipcRenderer]]))

(def BrowserWindow (.-BrowserWindow remote))

(defn current-window-id []
  (->> BrowserWindow
      .getFocusedWindow
      .-id))

(defn create-worker
  "Creates a worker and calls the given on-load handler. Returns the
  created worker."
  [on-load & rest]
  (let [path   (str "file://" js/__dirname "/worker.html")
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
