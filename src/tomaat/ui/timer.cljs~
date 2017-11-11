(ns ui.timer
  (:require [ui.worker :as worker]))

(defn start-timer
  "Starts the timer in the worker process"
  []
  (worker/message! "start-timer"))

(defn stop-timer
  "Stops the timer in the worker process"
  []
  (worker/message! "stop-timer"))
