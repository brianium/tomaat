(ns data.core
  (:require [electron :refer [remote app]]
            [path :refer [join]]
            [fs :refer [writeFileSync readFileSync]]))

(defn db-path []
  (-> (or app (.-app remote))
      (.getPath "userData")
      (join "tomaat.json")))

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
