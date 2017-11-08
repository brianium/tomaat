(ns ui.settings
  (:require [ui.worker :as worker]))

(defn update-setting
  "Tells the worker process to update a setting value"
  [k v]
  (->> [[k v]]
       (into {})
       clj->js
       (worker/message! "update-settings")))
