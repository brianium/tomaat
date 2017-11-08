// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.worker');
goog.require('cljs.core');
ui.worker.node$module$electron = require('electron');
ui.worker.node$module$path = require('path');
ui.worker.BrowserWindow = ui.worker.node$module$electron.remote.BrowserWindow;
if(typeof ui.worker._STAR_worker !== 'undefined'){
} else {
ui.worker._STAR_worker = cljs.core.atom.call(null,null);
}
ui.worker.current_window_id = (function ui$worker$current_window_id(){
return ui.worker.BrowserWindow.getFocusedWindow().id;
});
/**
 * We want a boss development environment. :asset-path settings
 *   jack with live reloading, so this function will help us determine
 *   the url of the worker document based on environment
 */
ui.worker.worker_url = (function ui$worker$worker_url(){
return ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.worker.node$module$path.resolve.call(null,ui.worker.node$module$path.join.call(null,__dirname,"../../../","worker.html")))].join('');
});
/**
 * Creates a worker and calls the given on-load handler. Returns the
 *   created worker.
 */
ui.worker.create_worker = (function ui$worker$create_worker(var_args){
var args__31356__auto__ = [];
var len__31349__auto___54495 = arguments.length;
var i__31350__auto___54496 = (0);
while(true){
if((i__31350__auto___54496 < len__31349__auto___54495)){
args__31356__auto__.push((arguments[i__31350__auto___54496]));

var G__54497 = (i__31350__auto___54496 + (1));
i__31350__auto___54496 = G__54497;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic = (function (on_load,rest){
var path = ui.worker.worker_url.call(null);
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

ui.worker.create_worker.cljs$lang$applyTo = (function (seq54493){
var G__54494 = cljs.core.first.call(null,seq54493);
var seq54493__$1 = cljs.core.next.call(null,seq54493);
return ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic(G__54494,seq54493__$1);
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
var args__31356__auto__ = [];
var len__31349__auto___54501 = arguments.length;
var i__31350__auto___54502 = (0);
while(true){
if((i__31350__auto___54502 < len__31349__auto___54501)){
args__31356__auto__.push((arguments[i__31350__auto___54502]));

var G__54503 = (i__31350__auto___54502 + (1));
i__31350__auto___54502 = G__54503;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((2) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((2)),(0),null)):null);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31357__auto__);
});

ui.worker.send.cljs$core$IFn$_invoke$arity$variadic = (function (worker__$1,event_name,rest){
var id = ui.worker.current_window_id.call(null);
var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_name,id], null),rest);
return cljs.core.apply.call(null,worker__$1.webContents.send,args);
});

ui.worker.send.cljs$lang$maxFixedArity = (2);

ui.worker.send.cljs$lang$applyTo = (function (seq54498){
var G__54499 = cljs.core.first.call(null,seq54498);
var seq54498__$1 = cljs.core.next.call(null,seq54498);
var G__54500 = cljs.core.first.call(null,seq54498__$1);
var seq54498__$2 = cljs.core.next.call(null,seq54498__$1);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic(G__54499,G__54500,seq54498__$2);
});

/**
 * Sends a message to the remote worker. This function calls the send function - but
 *   it manages the *worker atom - creating it if it does not exist, otherwise reusing it
 */
ui.worker.message_BANG_ = (function ui$worker$message_BANG_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___54506 = arguments.length;
var i__31350__auto___54507 = (0);
while(true){
if((i__31350__auto___54507 < len__31349__auto___54506)){
args__31356__auto__.push((arguments[i__31350__auto___54507]));

var G__54508 = (i__31350__auto___54507 + (1));
i__31350__auto___54507 = G__54508;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (event_name,rest){
if((cljs.core.deref.call(null,ui.worker._STAR_worker) == null)){
return cljs.core.reset_BANG_.call(null,ui.worker._STAR_worker,ui.worker.create_worker.call(null,(function (worker__$1){
return cljs.core.apply.call(null,ui.worker.send,worker__$1,event_name,rest);
})));
} else {
return cljs.core.apply.call(null,ui.worker.send,cljs.core.deref.call(null,ui.worker._STAR_worker),event_name,rest);
}
});

ui.worker.message_BANG_.cljs$lang$maxFixedArity = (1);

ui.worker.message_BANG_.cljs$lang$applyTo = (function (seq54504){
var G__54505 = cljs.core.first.call(null,seq54504);
var seq54504__$1 = cljs.core.next.call(null,seq54504);
return ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54505,seq54504__$1);
});


//# sourceMappingURL=worker.js.map?rel=1510147378906
