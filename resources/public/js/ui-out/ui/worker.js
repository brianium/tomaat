// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.worker');
goog.require('cljs.core');
ui.worker.node$module$electron = require('electron');
ui.worker.BrowserWindow = ui.worker.node$module$electron.remote.BrowserWindow;
ui.worker.current_window_id = (function ui$worker$current_window_id(){
return ui.worker.BrowserWindow.getFocusedWindow().id;
});
/**
 * Creates a worker and calls the given on-load handler. Returns the
 *   created worker.
 */
ui.worker.create_worker = (function ui$worker$create_worker(var_args){
var args__34055__auto__ = [];
var len__34048__auto___46368 = arguments.length;
var i__34049__auto___46369 = (0);
while(true){
if((i__34049__auto___46369 < len__34048__auto___46368)){
args__34055__auto__.push((arguments[i__34049__auto___46369]));

var G__46370 = (i__34049__auto___46369 + (1));
i__34049__auto___46369 = G__46370;
continue;
} else {
}
break;
}

var argseq__34056__auto__ = ((((1) < args__34055__auto__.length))?(new cljs.core.IndexedSeq(args__34055__auto__.slice((1)),(0),null)):null);
return ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34056__auto__);
});

ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic = (function (on_load,rest){
var path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname),"/worker.html"].join('');
var worker = (new ui.worker.BrowserWindow(({"width": (400), "height": (400), "show": false})));
var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [worker], null),rest);
worker.loadURL(path);

worker.webContents.on("did-finish-load",((function (path,worker,args){
return (function (){
return cljs.core.apply.call(null,on_load,args);
});})(path,worker,args))
);

return worker;
});

ui.worker.create_worker.cljs$lang$maxFixedArity = (1);

ui.worker.create_worker.cljs$lang$applyTo = (function (seq46366){
var G__46367 = cljs.core.first.call(null,seq46366);
var seq46366__$1 = cljs.core.next.call(null,seq46366);
return ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic(G__46367,seq46366__$1);
});

/**
 * Handles an ipc renderer event
 */
ui.worker.on = (function ui$worker$on(event_name,handler){
return ui.worker.node$module$electron.ipcRenderer.on(event_name,handler);
});
/**
 * Send a message to a worker window
 */
ui.worker.send = (function ui$worker$send(var_args){
var args__34055__auto__ = [];
var len__34048__auto___46374 = arguments.length;
var i__34049__auto___46375 = (0);
while(true){
if((i__34049__auto___46375 < len__34048__auto___46374)){
args__34055__auto__.push((arguments[i__34049__auto___46375]));

var G__46376 = (i__34049__auto___46375 + (1));
i__34049__auto___46375 = G__46376;
continue;
} else {
}
break;
}

var argseq__34056__auto__ = ((((2) < args__34055__auto__.length))?(new cljs.core.IndexedSeq(args__34055__auto__.slice((2)),(0),null)):null);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__34056__auto__);
});

ui.worker.send.cljs$core$IFn$_invoke$arity$variadic = (function (worker,event_name,rest){
var id = ui.worker.current_window_id.call(null);
var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_name,id], null),rest);
return cljs.core.apply.call(null,worker.webContents.send,args);
});

ui.worker.send.cljs$lang$maxFixedArity = (2);

ui.worker.send.cljs$lang$applyTo = (function (seq46371){
var G__46372 = cljs.core.first.call(null,seq46371);
var seq46371__$1 = cljs.core.next.call(null,seq46371);
var G__46373 = cljs.core.first.call(null,seq46371__$1);
var seq46371__$2 = cljs.core.next.call(null,seq46371__$1);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic(G__46372,G__46373,seq46371__$2);
});

