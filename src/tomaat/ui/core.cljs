(ns tomaat.ui.core
  "Houses application state and defines actions and the main application component"
  (:require [reagent.core :as reagent]
            [goog.dom :refer [getElement]]
            [tomaat.data :as data]
            [tomaat.util :refer [on-ipc get-url]]
            [tomaat.ui.timer :refer [start-timer stop-timer]]
            [tomaat.ui.settings :as settings]
            [tomaat.ui.config :refer [config-screen]]
            [tomaat.ui.main :refer [main-screen]]
            [tomaat.ui.tray :as tray]))

(enable-console-print!)

(defonce *state
  (reagent/atom {:flipped? false
                 :started? false
                 :time [25 0]
                 :data {}}))

;;; Actions
(defn toggle-screen
  "Changes the focused screen between the main and config screen"
  [e]
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

(defn update-setting
  [k v]
  (swap! *state assoc-in [:data k] v)
  (settings/update-setting k v))

(defn time-changed
  [event time]
  (let [time-vec (js->clj time)]
    (swap! *state assoc :time time-vec)
    (tray/update! time-vec)))

(defn timer-complete []
  (let [data (:data @*state)]
    (swap! *state assoc :started? false)
    (when (:play-sound data)
      (-> (get-url "musicbox.wav")
          js/Audio.
          .play))))

;;; Application Component
(defn tomaat []
  (let [state    @*state
        started? (:started? state)]
    [:div.container
     [:div {:class (str
                     "screen"
                     (when (:flipped? state) " screen--flipped"))}
      [main-screen
       {:toggle   toggle-screen
        :start    start
        :stop     stop
        :started? started?
        :time     (:time state)}]
      
      [config-screen
       {:toggle   toggle-screen
        :started? started?
        :update   update-setting
        :data     (:data state)}]]]))

(def app (with-meta tomaat
           {:component-did-mount #(swap! *state assoc :data (data/read))}))

;;; Render Tomaat as node application
(defn -main []
  (reagent/render
    [app]
    (getElement "tomaat"))
  (on-ipc "time-changed" time-changed)
  (on-ipc "timer-complete" timer-complete))

(set! *main-cli-fn* -main)
