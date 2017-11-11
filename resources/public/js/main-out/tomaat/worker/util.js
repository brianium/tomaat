// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.worker.util');
goog.require('cljs.core');
tomaat.worker.util.node$module$electron = require('electron');
tomaat.worker.util.BrowserWindow = tomaat.worker.util.node$module$electron.remote.BrowserWindow;
/**
 * Get the webContents of a browser window identified by id
 */
tomaat.worker.util.web_contents = (function tomaat$worker$util$web_contents(id){
return tomaat.worker.util.BrowserWindow.fromId(id).webContents;
});
/**
 * Register an event handler with the electron ipcRenderer
 */
tomaat.worker.util.on = (function tomaat$worker$util$on(event_name,handler){
return tomaat.worker.util.node$module$electron.ipcRenderer.on(event_name,handler);
});

//# sourceMappingURL=util.js.map?rel=1510360379045
