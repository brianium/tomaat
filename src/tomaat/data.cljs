(ns tomaat.data
  (:require [fs :refer [writeFileSync readFileSync]]
            [tomaat.util :refer [get-path]]))

(defn db-path []
  (get-path "userData" "tomaat.json"))

(defn json-parse
  [string]
  (.parse js/JSON string))

(defn json-stringify
  [data]
  (.stringify js/JSON data))

(defn read []
  (try
    (-> (db-path)
        readFileSync
        json-parse
        (js->clj :keywordize-keys true))
    (catch js/Object e
      {})))

(defn- write-file-sync
  [data path]
  (writeFileSync path data))

(defn write
  [data]
  (-> (read)
      (merge data)
      clj->js
      json-stringify
      (write-file-sync (db-path))))
