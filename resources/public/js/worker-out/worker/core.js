// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('worker.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
worker.core.node$module$electron = require('electron');
worker.core.BrowserWindow = worker.core.node$module$electron.remote.BrowserWindow;
if(typeof worker.core._STAR_time !== 'undefined'){
} else {
worker.core._STAR_time = cljs.core.atom.call(null,(1500));
}
if(typeof worker.core._STAR_interval !== 'undefined'){
} else {
worker.core._STAR_interval = cljs.core.atom.call(null,null);
}
worker.core.tick = (function worker$core$tick(_STAR_time){
return cljs.core.swap_BANG_.call(null,_STAR_time,cljs.core.dec);
});
/**
 * Given the time in seconds returns a minute value and a seconds value
 *   as a vector
 */
worker.core.minutes_and_seconds = (function worker$core$minutes_and_seconds(time){
var minutes = Math.floor((time / (60)));
var seconds = (time - (minutes * (60)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minutes,seconds], null);
});
worker.core.time_changed = (function worker$core$time_changed(contents,time){
return contents.send("time-changed",cljs.core.clj__GT_js.call(null,worker.core.minutes_and_seconds.call(null,time)));
});
/**
 * Get the webContents of a browser window identified by id
 */
worker.core.web_contents = (function worker$core$web_contents(id){
return worker.core.BrowserWindow.fromId(id).webContents;
});
worker.core.start_timer = (function worker$core$start_timer(event,id){
var contents = worker.core.web_contents.call(null,id);
cljs.core.add_watch.call(null,worker.core._STAR_time,new cljs.core.Keyword(null,"time-changed","time-changed",-1355380253),((function (contents){
return (function (p1__45893_SHARP_,p2__45894_SHARP_,p3__45895_SHARP_,p4__45892_SHARP_){
return worker.core.time_changed.call(null,contents,p4__45892_SHARP_);
});})(contents))
);

return cljs.core.reset_BANG_.call(null,worker.core._STAR_interval,setInterval(((function (contents){
return (function (){
return worker.core.tick.call(null,worker.core._STAR_time);
});})(contents))
,(1000)));
});
worker.core.stop_timer = (function worker$core$stop_timer(event,id){
var contents = worker.core.web_contents.call(null,id);
clearInterval(cljs.core.deref.call(null,worker.core._STAR_interval));

cljs.core.reset_BANG_.call(null,worker.core._STAR_interval,null);

cljs.core.reset_BANG_.call(null,worker.core._STAR_time,(1500));

cljs.core.remove_watch.call(null,worker.core._STAR_time,new cljs.core.Keyword(null,"time-changed","time-changed",-1355380253));

return window.close();
});
worker.core.node$module$electron.ipcRenderer.on("start-timer",worker.core.start_timer);
worker.core.node$module$electron.ipcRenderer.on("stop-timer",worker.core.stop_timer);
