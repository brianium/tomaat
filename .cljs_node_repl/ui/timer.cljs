(ns ui.timer
  (:require [ui.worker :refer [send create-worker]]))

(defonce *worker (atom nil))

(defn send-start-timer
  [worker]
  (send worker "start-timer"))

(defn start-timer []
  (reset! *worker (create-worker send-start-timer)))

(defn stop-timer []
  (send @*worker "stop-timer"))
