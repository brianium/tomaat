(ns tomaat.worker.timer
  (:require [tomaat.util :refer [web-contents]]
            [tomaat.worker.slack :refer [complete-pomodoro]]))

;;; 1500 seconds = 25 minutes
(def timer-length 1500)
(defonce *time (atom timer-length))
(defonce *interval (atom nil))

(defn tick
  "Decrement the current time by one second"
  [*time]
  (swap! *time dec))

(defn minutes-and-seconds
  "Given the time in seconds returns a minute value and a seconds value
  as a vector"
  [time]
  (let [minutes (Math/floor (/ time 60))
        seconds (- time (* minutes 60))]
    [minutes seconds]))

(defn clear-interval
  "Clears the interval being used to 'tick' the timer"
  []
  (js/clearInterval @*interval)
  (reset! *interval nil))

(defn stop
  "Stops the timer by clearing the interval, resetting the timer, and clearing
  the watcher notifying the renderer process"
  ([]
   (clear-interval)
   (reset! *time timer-length)
   (remove-watch *time :time-changed))
  ([event id] (stop)))

(defn time-changed
  "Monitors changes to time state. Notifies the renderer process when time has changed.
  When the timer is complete - the interval is cleared and a small timeout is issued
  before resetting time state"
  [contents time]
  (.send contents "time-changed" (clj->js (minutes-and-seconds time)))
  (when (= 0 time)
    (.send contents "timer-complete")
    (complete-pomodoro)
    (clear-interval)
    (js/setTimeout stop 2500)))

(defn start
  "Starts the timer interval and adds a watch that notifies the renderer process"
  [event id]
  (let [contents (web-contents id)]
    (add-watch *time :time-changed #(time-changed contents %4))
    (reset! *interval (js/setInterval #(tick *time) 1000))))
