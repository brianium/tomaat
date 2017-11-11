(ns worker.settings
  (:require [data.core :as data]))

(defn update-settings
  "Merge the given settings into stored settings for Tomaat"
  [event id settings]
  (-> settings
      (js->clj :keywordize-keys true)
      data/write))
