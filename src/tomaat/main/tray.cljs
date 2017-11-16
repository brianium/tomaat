(ns tomaat.main.tray
  (:require [electron :refer [Tray nativeImage]]
            [tomaat.util :as u]))

(defonce *tray (atom nil))

(defn update-tray!
  [event url]
  (let [img (.createFromDataURL nativeImage url)]
    (when (nil? @*tray)
      (reset! *tray (Tray. img)))
    (.setImage @*tray img)))

(defn remove-tray!
  [event]
  (when @*tray
    (.destroy @*tray)
    (reset! *tray nil)))

(defn listen! []
  (u/on-ipc-main "update-tray" update-tray!)
  (u/on-ipc-main "remove-tray" remove-tray!)
  (u/on-app "window-all-closed" remove-tray!))

