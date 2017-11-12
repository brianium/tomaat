(ns tomaat.worker.core
  (:require [tomaat.util :refer [on-ipc]]
            [tomaat.worker.timer :as timer]
            [tomaat.worker.settings :as settings]
            [tomaat.worker.slack :as slack]))

(def start
  (juxt timer/start slack/start-pomodoro))

(def stop
  (juxt timer/stop slack/stop-pomodoro))

(defn -main []
  (on-ipc "start-timer" start)
  (on-ipc "stop-timer" stop)
  (on-ipc "update-settings" settings/update-settings))

(set! *main-cli-fn* -main)
