(ns worker.core
  (:require [cljs.nodejs :as nodejs]
            [electron :refer [ipcRenderer remote]]))

(def BrowserWindow (.-BrowserWindow remote))

(defonce *time (atom 1500))
(defonce *interval (atom nil))

(defn tick
  [*time]
  (swap! *time dec))

(defn minutes-and-seconds
  "Given the time in seconds returns a minute value and a seconds value
  as a vector"
  [time]
  (let [minutes (Math/floor (/ time 60))
        seconds (- time (* minutes 60))]
    [minutes seconds]))

(defn time-changed
  [contents time]
  (.send contents "time-changed"
    (clj->js (minutes-and-seconds time))))

(defn web-contents
  "Get the webContents of a browser window identified by id"
  [id]
  (->> id
       (.fromId BrowserWindow)
       .-webContents))

(defn start-timer
  [event id]
  (let [contents (web-contents id)]
    (add-watch *time :time-changed #(time-changed contents %4))
    (reset! *interval (js/setInterval #(tick *time) 1000))))

(defn stop-timer
  [event id]
  (let [contents (web-contents id)]
    (js/clearInterval @*interval)
    (reset! *interval nil)
    (reset! *time 1500)
    (remove-watch *time :time-changed)
    (.close js/window)))

(.on ipcRenderer "start-timer" start-timer)
(.on ipcRenderer "stop-timer"  stop-timer)
