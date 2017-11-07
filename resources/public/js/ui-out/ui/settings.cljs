(ns ui.settings
  (:require [ui.worker :as worker]))

(defn update-setting
  [k v]
  (->> [[k v]]
       (into {})
       clj->js
       (worker/message! "update-settings")))
