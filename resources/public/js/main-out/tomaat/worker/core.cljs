(ns tomaat.worker.core
  (:require [tomaat.worker.util :refer [on]]
            [tomaat.worker.timer :as timer]
            [tomaat.worker.settings :as settings]
            [tomaat.worker.slack :as slack]))

(def start
  (juxt timer/start slack/start-pomodoro))

(def stop
  (juxt timer/stop slack/stop-pomodoro))

(defn -main []
  (on "start-timer" start)
  (on "stop-timer" stop)
  (on "update-settings" settings/update-settings))

(set! *main-cli-fn* -main)
