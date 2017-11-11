(ns worker.core
  (:require [worker.util :refer [on]]
            [worker.timer :as timer]
            [worker.settings :as settings]
            [worker.slack :as slack]))

(def start
  (juxt timer/start slack/start-pomodoro))

(def stop
  (juxt timer/stop slack/stop-pomodoro))

(defn -main []
  (on "start-timer" start)
  (on "stop-timer" stop)
  (on "update-settings" settings/update-settings))

(set! *main-cli-fn* -main)
