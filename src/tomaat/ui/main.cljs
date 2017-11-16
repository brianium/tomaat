(ns tomaat.ui.main
  "Houses the main screen of Tomaat - that is the timer screen"
  (:require [tomaat.ui.timer :refer [time->string]]))

(defn header []
  [:header.header
   [:h1.header__text "Tomaat!"]])

(defn timer
  [time]
  [:div.timer (time->string time)])

(defn button [{:keys [on-click]} & children]
  [:button.button
   {:type     "button"
    :on-click on-click}
   children])

(defn main-screen [{:keys [toggle start stop time started?]}]
  [:div.screen__main.screen__state
   [header]
   [timer time]
   [button
    {:on-click (if started? stop start)}
    (if started? "Stop Pomodoro" "Start Pomodoro")]
   [:button.link {:type     "button"
                  :on-click toggle} "settings"]])
