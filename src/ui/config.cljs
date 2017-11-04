(ns ui.config
  (:require [goog.string :as gstring]))

(defn form []
  [:form.form
   [:label.form__label {:htmlFor "user-token"} "Slack Token"]
   [:input#user-token.form__input
    {:type "text" :autoFocus true}]
   [:label.form__label.label {:htmlFor "notify"}
    "Slack me when time is up"
    [:input#notify.label__input {:type "checkbox"}]]])

(defn config-screen [{:keys [toggle]}]
  [:div.screen__config.screen__state
   [:h1 "Settings"]
   [form]
   [:button.link
    {:on-click toggle
     :type     "button"}
    (gstring/unescapeEntities "&laquo; back")]])
