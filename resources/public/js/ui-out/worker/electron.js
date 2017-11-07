// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('worker.electron');
goog.require('cljs.core');
worker.electron.node$module$electron = require('electron');
worker.electron.BrowserWindow = worker.electron.node$module$electron.remote.BrowserWindow;
/**
 * Get the webContents of a browser window identified by id
 */
worker.electron.web_contents = (function worker$electron$web_contents(id){
return worker.electron.BrowserWindow.fromId(id).webContents;
});
worker.electron.on = (function worker$electron$on(event_name,handler){
return worker.electron.node$module$electron.ipcRenderer.on(event_name,handler);
});
