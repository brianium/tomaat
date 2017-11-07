(ns worker.slack
  (:require [https :refer [get]]
            [goog.uri.utils :as uri]
            [data.core :as data]))

(defn query
  [params]
  (->> params
       clj->js
       (uri/appendParamsFromMap "")))

(defn encode-json
  [data]
  (.stringify js/JSON (clj->js data)))

(defn url
  [action params]
  (-> "https://slack.com/api/"
      (str action)
      (str (query params))))

(defn request
  [action params]
  (get (url action params)))

(defn update-profile
  [text emoji]
  (let [settings (data/read)]
    (when-let [token (:token settings)]
      (request "users.profile.set" {:profile (encode-json {:status_text  text
                                                           :status_emoji emoji})
                                    :token   token}))))

(defn start-pomodoro
  [event id]
  (update-profile "pom party" ":tomato:"))

(defn stop-pomodoro
  [event id]
  (update-profile "" ""))
