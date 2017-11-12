(ns tomaat.util
  "A namespace to hide interop details and electron use. Might be
  a library some day"
  (:require [electron :refer [BrowserWindow remote app ipcRenderer]]
            [path]
            [clojure.string :refer [includes?]]))

(defn get-app []
  (or app (.-app remote)))

(defn get-path
  [path-id filename]
  (-> (get-app)
      (.getPath path-id)
      (path/join filename)))

(defn- browser-window-ctor []
  (or BrowserWindow (.-BrowserWindow remote)))

(defn browser-window
  [options]
  (let [ctor (browser-window-ctor)]
    (ctor. (clj->js options))))

(defn get-url [filename]
  (let [env     (.. js/process -env -NODE_ENV)
        dirname js/__dirname
        public? (includes? dirname "public")
        prefix  (if public? "/" "/public/")]
    (if (= env "production")
      (str "file://" dirname prefix filename)
      (->> (path/join dirname "../../../" filename)
           (path/resolve)
           (str "file://")))))

(defn load-url
  [window filename]
  (.loadURL window (get-url filename)))

(defn on
  [emitter event-name handler]
  (.on emitter event-name handler))

(defn on-app
  [event-name handler]
  (on app event-name handler))

(defn on-ipc
  [event-name handler]
  (on ipcRenderer event-name handler))

(defn quit []
  (.quit app))

(defn relaunch []
  (.relaunch app))

(defn current-window-id []
  (->> (browser-window-ctor)
      .getFocusedWindow
      .-id))

(defn web-contents
  "Get the webContents of a browser window identified by id"
  [id]
  (->> id
       (.fromId (browser-window-ctor))
       .-webContents))
