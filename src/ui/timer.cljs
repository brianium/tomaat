(ns ui.timer
  (:require [ui.worker :as worker]))

(defn start-timer []
  (worker/message! "start-timer"))

(defn stop-timer []
  (worker/message! "stop-timer"))
