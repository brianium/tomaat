(ns worker.electron
  (:require [electron :refer [remote ipcRenderer]]))

(def BrowserWindow (.-BrowserWindow remote))

(defn web-contents
  "Get the webContents of a browser window identified by id"
  [id]
  (->> id
       (.fromId BrowserWindow)
       .-webContents))

(defn on [event-name handler]
  (.on ipcRenderer event-name handler))
