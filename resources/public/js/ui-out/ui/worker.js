// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.worker');
goog.require('cljs.core');
ui.worker.node$module$electron = require('electron');
ui.worker.BrowserWindow = ui.worker.node$module$electron.remote.BrowserWindow;
if(typeof ui.worker._STAR_worker !== 'undefined'){
} else {
ui.worker._STAR_worker = cljs.core.atom.call(null,null);
}
ui.worker.current_window_id = (function ui$worker$current_window_id(){
return ui.worker.BrowserWindow.getFocusedWindow().id;
});
/**
 * Creates a worker and calls the given on-load handler. Returns the
 *   created worker.
 */
ui.worker.create_worker = (function ui$worker$create_worker(var_args){
var args__12990__auto__ = [];
var len__12983__auto___15408 = arguments.length;
var i__12984__auto___15409 = (0);
while(true){
if((i__12984__auto___15409 < len__12983__auto___15408)){
args__12990__auto__.push((arguments[i__12984__auto___15409]));

var G__15410 = (i__12984__auto___15409 + (1));
i__12984__auto___15409 = G__15410;
continue;
} else {
}
break;
}

var argseq__12991__auto__ = ((((1) < args__12990__auto__.length))?(new cljs.core.IndexedSeq(args__12990__auto__.slice((1)),(0),null)):null);
return ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12991__auto__);
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

ui.worker.create_worker.cljs$lang$applyTo = (function (seq15406){
var G__15407 = cljs.core.first.call(null,seq15406);
var seq15406__$1 = cljs.core.next.call(null,seq15406);
return ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic(G__15407,seq15406__$1);
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
var args__12990__auto__ = [];
var len__12983__auto___15414 = arguments.length;
var i__12984__auto___15415 = (0);
while(true){
if((i__12984__auto___15415 < len__12983__auto___15414)){
args__12990__auto__.push((arguments[i__12984__auto___15415]));

var G__15416 = (i__12984__auto___15415 + (1));
i__12984__auto___15415 = G__15416;
continue;
} else {
}
break;
}

var argseq__12991__auto__ = ((((2) < args__12990__auto__.length))?(new cljs.core.IndexedSeq(args__12990__auto__.slice((2)),(0),null)):null);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12991__auto__);
});

ui.worker.send.cljs$core$IFn$_invoke$arity$variadic = (function (worker,event_name,rest){
var id = ui.worker.current_window_id.call(null);
var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_name,id], null),rest);
return cljs.core.apply.call(null,worker.webContents.send,args);
});

ui.worker.send.cljs$lang$maxFixedArity = (2);

ui.worker.send.cljs$lang$applyTo = (function (seq15411){
var G__15412 = cljs.core.first.call(null,seq15411);
var seq15411__$1 = cljs.core.next.call(null,seq15411);
var G__15413 = cljs.core.first.call(null,seq15411__$1);
var seq15411__$2 = cljs.core.next.call(null,seq15411__$1);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic(G__15412,G__15413,seq15411__$2);
});

/**
 * Sends a message to the remote worker
 */
ui.worker.message_BANG_ = (function ui$worker$message_BANG_(var_args){
var args__12990__auto__ = [];
var len__12983__auto___15419 = arguments.length;
var i__12984__auto___15420 = (0);
while(true){
if((i__12984__auto___15420 < len__12983__auto___15419)){
args__12990__auto__.push((arguments[i__12984__auto___15420]));

var G__15421 = (i__12984__auto___15420 + (1));
i__12984__auto___15420 = G__15421;
continue;
} else {
}
break;
}

var argseq__12991__auto__ = ((((1) < args__12990__auto__.length))?(new cljs.core.IndexedSeq(args__12990__auto__.slice((1)),(0),null)):null);
return ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12991__auto__);
});

ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (event_name,rest){
if((cljs.core.deref.call(null,ui.worker._STAR_worker) == null)){
return cljs.core.reset_BANG_.call(null,ui.worker._STAR_worker,ui.worker.create_worker.call(null,(function (worker){
return cljs.core.apply.call(null,ui.worker.send,worker,event_name,rest);
})));
} else {
return cljs.core.apply.call(null,ui.worker.send,cljs.core.deref.call(null,ui.worker._STAR_worker),event_name,rest);
}
});

ui.worker.message_BANG_.cljs$lang$maxFixedArity = (1);

ui.worker.message_BANG_.cljs$lang$applyTo = (function (seq15417){
var G__15418 = cljs.core.first.call(null,seq15417);
var seq15417__$1 = cljs.core.next.call(null,seq15417);
return ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15418,seq15417__$1);
});

