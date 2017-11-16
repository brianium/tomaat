(ns tomaat.ui.timer
  (:require [tomaat.ui.worker :as worker]
            [goog.string :as gstring]
            goog.string.format))

(defn time->string
  "Takes a vector of form [minutes seconds] and converts
  it into a human readble string"
  [time]
  (->> time
       (mapv #(gstring/format "%02d" %))
       (interpose ":")
       (apply str)))

(defn start-timer
  "Starts the timer in the worker process"
  []
  (worker/message! "start-timer"))

(defn stop-timer
  "Stops the timer in the worker process"
  []
  (worker/message! "stop-timer"))
