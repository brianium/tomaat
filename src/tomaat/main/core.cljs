(ns tomaat.main.core
  (:require [cljs.nodejs :as nodejs]
            [electron :refer [app Menu shell]]
            [electron-default-menu]
            [tomaat.util :as u]))

(nodejs/enable-util-print!)

(defonce *main-window (atom nil))

(defn default-menu []
  (let [menu (electron-default-menu app shell)]
    (->> menu
         (.buildFromTemplate Menu)
         (.setApplicationMenu Menu))))

(defn create-window []
  (reset! *main-window (u/browser-window {:width     300
                                          :height    500
                                          :resizable false}))
  (u/load-url @*main-window "index.html")
  (u/on @*main-window "closed" #(reset! *main-window nil))
  (default-menu))

(defn quit-app []
  (when-not (= "darwin" (.-platform js/process))
    (u/quit)))

(defn activate []
  (when (nil? @*main-window)
    (create-window)))

(defn reload []
  (when-not (nil? @*main-window)
    (u/relaunch)
    (u/quit)))

(defn -main []
  (u/on-app "ready" create-window)
  (u/on-app "window-all-closed" quit-app)
  (u/on-app "activate" activate))

(set! *main-cli-fn* -main)
