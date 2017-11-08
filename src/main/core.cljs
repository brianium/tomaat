(ns main.core
  (:require [cljs.nodejs :as nodejs]
            [electron :refer [BrowserWindow app]]))

(nodejs/enable-util-print!)

(def *main-window (atom nil))

(defn create-window []
  (reset! *main-window (BrowserWindow. #js {:width          300
                                            :height         500
                                            :resizable      false}))
  (.loadURL @*main-window (str "file://" js/__dirname "/public/index.html"))
  (.on @*main-window "closed" #(reset! *main-window nil)))

(.on app "ready" create-window)

(defn quit-app []
  (when-not (= "darwin" (.-platform js/process))
    (.quit app)))

(.on app "window-all-closed" quit-app)

(defn activate []
  (when (nil? @*main-window)
    (create-window)))

(.on app "activate" activate)
