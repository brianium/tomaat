(ns worker.settings
  (:require [data.core :as data]))

(defn update-settings
  [event id settings]
  (-> settings
      (js->clj :keywordize-keys true)
      data/write))
