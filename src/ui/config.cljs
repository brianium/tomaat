(ns ui.config
  "The config screen shows settings for Tomaat"
  (:require [goog.string :as gstring]))

(defn form [{:keys [disabled? update token slack-me]}]
  [:form.form
   [:label.form__label {:htmlFor "user-token"} "Slack Token"]
   [:input#user-token.form__input
    {:type      "text"
     :value     token
     :autoFocus true
     :disabled  disabled?
     :on-change #(update :token (.. % -currentTarget -value))}]
   [:label.form__label.label {:htmlFor "notify"}
    "Slack me when time is up"
    [:input#notify.label__input
     {:type     "checkbox"
      :checked  slack-me
      :disabled disabled?
      :on-change #(update :slack-me (.. % -currentTarget -checked))}]]])

(defn config-screen [{:keys [toggle started? update data]}]
  [:div.screen__config.screen__state
   [:h1 "Settings"]
   [form {:disabled? started?
          :update    update
          :token     (get data :token "")
          :slack-me  (get data :slack-me false)}]
   [:button.link
    {:on-click toggle
     :type     "button"}
    (gstring/unescapeEntities "&laquo; back")]])
