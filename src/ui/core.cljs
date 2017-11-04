(ns ui.core
  (:require [reagent.core :as reagent]
            [ui.worker :as worker]
            [ui.timer :refer [start-timer stop-timer]]
            [ui.config :refer [config-screen]]
            [ui.main :refer [main-screen]]))

(enable-console-print!)

(defonce *state
  (reagent/atom {:flipped? false
                 :started? false
                 :time [25 0]}))

(defn toggle-screen [e]
  (let [flipped? (:flipped? @*state)]
    (.preventDefault e)
    (if flipped?
      (swap! *state assoc :flipped? false)
      (swap! *state assoc :flipped? true))))

(defn start []
  (swap! *state assoc :started? true)
  (start-timer))

(defn stop []
  (swap! *state assoc :started? false)
  (stop-timer))

(defn app []
  (let [state @*state]
    [:div.container
     [:div {:class (str
                     "screen"
                     (when (:flipped? state) " screen--flipped"))}
      [main-screen
       {:toggle   toggle-screen
        :start    start
        :stop     stop
        :started? (:started? state)
        :time     (:time state)}]
      [config-screen {:toggle toggle-screen}]]]))

(worker/on "time-changed" #(swap! *state assoc :time (js->clj %2)))

(reagent/render
  [app]
  (.-body js/document))
