(ns tomaat.main.core
  (:require [cljs.nodejs :as nodejs]
            [electron :refer [BrowserWindow app]]
            [path]))

(nodejs/enable-util-print!)

(defonce *main-window (atom nil))

(defn index-url
  "We want a boss development environment. :asset-path settings
  jack with live reloading, so this function will help us determine
  the url of the worker document based on environment"
  []
  (let [env (.. js/process -env -NODE_ENV)]
    (if (= env "production")
      (str "file://" js/__dirname "/public/index.html")
      (->> (path/join js/__dirname "../../../../" "index.html")
        (path/resolve)
        (str "file://")))))

(defn create-window []
  (reset! *main-window (BrowserWindow. #js {:width          300
                                            :height         500
                                            :resizable      false}))
  (.loadURL @*main-window (index-url))
  (.on @*main-window "closed" #(reset! *main-window nil)))

(defn quit-app []
  (when-not (= "darwin" (.-platform js/process))
    (.quit app)))

(defn activate []
  (when (nil? @*main-window)
    (create-window)))

(defn reload []
  (when-not (nil? @*main-window)
    (.relaunch app)
    (.quit app)))

(defn -main []
  (.on app "ready" create-window)
  (.on app "window-all-closed" quit-app)
  (.on app "activate" activate))

(set! *main-cli-fn* -main)
