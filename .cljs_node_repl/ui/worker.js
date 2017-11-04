// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.worker');
goog.require('cljs.core');
ui.worker.node$module$electron = require('electron');
ui.worker.BrowserWindow = ui.worker.node$module$electron.remote.BrowserWindow;
ui.worker.current_window_id = (function ui$worker$current_window_id(){
return ui.worker.BrowserWindow.getFocusedWindow().id;
});
/**
 * Sends a message to the worker window with the given arguments.
 *   The on-load function will be called with the worker BrowserWindow, the
 *   current window id, and any additional arguments passed in
 */
ui.worker.create_worker = (function ui$worker$create_worker(var_args){
var args__41960__auto__ = [];
var len__41953__auto___43732 = arguments.length;
var i__41954__auto___43733 = (0);
while(true){
if((i__41954__auto___43733 < len__41953__auto___43732)){
args__41960__auto__.push((arguments[i__41954__auto___43733]));

var G__43734 = (i__41954__auto___43733 + (1));
i__41954__auto___43733 = G__43734;
continue;
} else {
}
break;
}

var argseq__41961__auto__ = ((((1) < args__41960__auto__.length))?(new cljs.core.IndexedSeq(args__41960__auto__.slice((1)),(0),null)):null);
return ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41961__auto__);
});

ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic = (function (on_load,rest){
var path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname),"/worker.html"].join('');
var worker__$1 = (new ui.worker.BrowserWindow(({"width": (400), "height": (400), "show": false})));
var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [worker__$1], null),rest);
worker__$1.loadURL(path);

worker__$1.webContents.on("did-finish-load",((function (path,worker__$1,args){
return (function (){
return cljs.core.apply.call(null,on_load,args);
});})(path,worker__$1,args))
);

return worker__$1;
});

ui.worker.create_worker.cljs$lang$maxFixedArity = (1);

ui.worker.create_worker.cljs$lang$applyTo = (function (seq43730){
var G__43731 = cljs.core.first.call(null,seq43730);
var seq43730__$1 = cljs.core.next.call(null,seq43730);
return ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic(G__43731,seq43730__$1);
});

ui.worker.on = (function ui$worker$on(event_name,handler){
return ui.worker.node$module$electron.ipcRenderer.on(event_name,handler);
});
/**
 * Send a message to a worker window
 */
ui.worker.send = (function ui$worker$send(var_args){
var args__41960__auto__ = [];
var len__41953__auto___43738 = arguments.length;
var i__41954__auto___43739 = (0);
while(true){
if((i__41954__auto___43739 < len__41953__auto___43738)){
args__41960__auto__.push((arguments[i__41954__auto___43739]));

var G__43740 = (i__41954__auto___43739 + (1));
i__41954__auto___43739 = G__43740;
continue;
} else {
}
break;
}

var argseq__41961__auto__ = ((((2) < args__41960__auto__.length))?(new cljs.core.IndexedSeq(args__41960__auto__.slice((2)),(0),null)):null);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41961__auto__);
});

ui.worker.send.cljs$core$IFn$_invoke$arity$variadic = (function (worker__$1,event_name,rest){
return cljs.core.apply.call(null,worker__$1.webContents.send,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_name,ui.worker.current_window_id.call(null)], null),rest));
});

ui.worker.send.cljs$lang$maxFixedArity = (2);

ui.worker.send.cljs$lang$applyTo = (function (seq43735){
var G__43736 = cljs.core.first.call(null,seq43735);
var seq43735__$1 = cljs.core.next.call(null,seq43735);
var G__43737 = cljs.core.first.call(null,seq43735__$1);
var seq43735__$2 = cljs.core.next.call(null,seq43735__$1);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic(G__43736,G__43737,seq43735__$2);
});


//# sourceMappingURL=worker.js.map
