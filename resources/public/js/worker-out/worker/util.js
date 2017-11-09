// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('worker.util');
goog.require('cljs.core');
worker.util.node$module$electron = require('electron');
worker.util.BrowserWindow = worker.util.node$module$electron.remote.BrowserWindow;
/**
 * Get the webContents of a browser window identified by id
 */
worker.util.web_contents = (function worker$util$web_contents(id){
return worker.util.BrowserWindow.fromId(id).webContents;
});
/**
 * Register an event handler with the electron ipcRenderer
 */
worker.util.on = (function worker$util$on(event_name,handler){
return worker.util.node$module$electron.ipcRenderer.on(event_name,handler);
});

//# sourceMappingURL=util.js.map?rel=1510229222009
