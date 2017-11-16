(ns tomaat.ui.tray
  "Handles generating a data url for the tomaat tray"
  (:require [tomaat.util :as u]
            [tomaat.ui.timer :refer [time->string]]))

(defn- make-canvas [width height]
  (let [canvas (.createElement js/document "canvas")]
    (set! (.-width canvas) width)
    (set! (.-height canvas) height)
    canvas))

(defonce *canvas (atom (make-canvas 40 14)))

(defn- data-uri
  [canvas]
  (let [url     (.toDataURL canvas)
        context (.getContext canvas "2d")]
    (.clearRect context 0 0 (.-width canvas) (.-height canvas))
    url))

(defn- write-text
  [canvas text]
  (let [ctx (.getContext canvas "2d")]
    (set! (.-font ctx) "14px Lato")
    (set! (.-fillStyle ctx) "#444")
    (set! (.-textAlign ctx) "start")
    (set! (.-textBaseline ctx) "middle")
    (.fillText ctx text 2 7)
    (data-uri canvas)))

(defn time->url
  "Given a time vector - generate a data url for it"
  [time]
  (->> (time->string time)
       (write-text @*canvas)))

(defn update!
  "Update the tray with a new time value"
  [time]
  (->> time
       time->url
       (u/send-ipc "update-tray")))
