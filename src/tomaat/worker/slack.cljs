(ns tomaat.worker.slack
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [goog.uri.utils :as uri]
            [tomaat.data :as data]))

(defn query
  "Creates encoded query string params from a hash map"
  [params]
  (->> params
       clj->js
       (uri/appendParamsFromMap "")))

(defn encode-json
  "Converts a hash map to json and encodes the whole structure"
  [data]
  (.stringify js/JSON (clj->js data)))

(defn url
  "Create a slack api url"
  [action params]
  (-> "https://slack.com/api/"
      (str action)
      (str (query params))))

(defn request
  "Performs an http get request and returns a core.async channel"
  [action params]
  (http/get (url action params)))

(defn with-token
  "Executes the given function if a slack token has been stored"
  [fn-request]
  (let [settings (data/read)]
    (when-let [token (:token settings)]
      (fn-request token))))

(defn update-profile
  "Updates token user's profile with the given text and emoji"
  [text emoji]
  (with-token
    #(request
       "users.profile.set"
       {:profile (encode-json {:status_text  text
                               :status_emoji emoji})
        :token   %})))

(defn start-pomodoro
  "Updates the token user's profile with pom text and a tomato!"
  [event id]
  (update-profile "pom party" ":tomato:"))

(defn stop-pomodoro
  "Stopping the pomodoro clears the user profile of any pom related business"
  ([]
   (update-profile "" ""))
  ([event id]
   (stop-pomodoro)))

(defn notify
  "Notifies the user's slackbot channel that the pom is complete and it's time
  to take a break from all their labors."
  []
  (with-token
    (fn [token]
      (go (let [response (<! (request "auth.test" {:token token}))
                user-id  (get-in response [:body :user_id])]
            (request
              "chat.postMessage"
              {:token      token
               :channel    user-id
               :as_user    false
               :icon_emoji ":tomato:"
               :text       "Pom complete! Time to take a break :sweat_smile:"}))))))

;;; Completing a pomodoro involves stopping it and notifiying the user
(def complete-pomodoro
  (juxt stop-pomodoro notify))
