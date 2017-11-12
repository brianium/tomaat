(ns tomaat.ui.worker
  (:require [tomaat.util :as u]))

;;; Maintain a single reference to a worker window
(defonce *worker (atom nil))

(defn create-worker
  "Creates a worker and calls the given on-load handler. Returns the
  created worker."
  [on-load & rest]
  (let [worker (u/browser-window {:width 400 :height 400 :show false})
        args   (concat [worker] rest)]
    (u/load-url worker "worker.html")
    (-> worker
        .-webContents
        (u/on "did-finish-load" #(apply on-load args)))
    worker))

(defn send
  "Send a message to a worker window"
  [worker event-name & rest]
  (let [id   (u/current-window-id)
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
