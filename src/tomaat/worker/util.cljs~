(ns worker.util
  (:require [electron :refer [remote ipcRenderer]]))

(def BrowserWindow (.-BrowserWindow remote))

(defn web-contents
  "Get the webContents of a browser window identified by id"
  [id]
  (->> id
       (.fromId BrowserWindow)
       .-webContents))

(defn on
  "Register an event handler with the electron ipcRenderer"
  [event-name handler]
  (.on ipcRenderer event-name handler))
