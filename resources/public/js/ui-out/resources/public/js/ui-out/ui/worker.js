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
ui.worker.worker_url = (function ui$worker$worker_url(){
return ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.worker.node$module$path.resolve.call(null,ui.worker.node$module$path.join.call(null,__dirname,"../../../","worker.html")))].join('');
});
/**
 * Creates a worker and calls the given on-load handler. Returns the
 *   created worker.
 */
ui.worker.create_worker = (function ui$worker$create_worker(var_args){
var args__31356__auto__ = [];
var len__31349__auto___40523 = arguments.length;
var i__31350__auto___40524 = (0);
while(true){
if((i__31350__auto___40524 < len__31349__auto___40523)){
args__31356__auto__.push((arguments[i__31350__auto___40524]));

var G__40525 = (i__31350__auto___40524 + (1));
i__31350__auto___40524 = G__40525;
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

ui.worker.create_worker.cljs$lang$applyTo = (function (seq40521){
var G__40522 = cljs.core.first.call(null,seq40521);
var seq40521__$1 = cljs.core.next.call(null,seq40521);
return ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic(G__40522,seq40521__$1);
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
var len__31349__auto___40529 = arguments.length;
var i__31350__auto___40530 = (0);
while(true){
if((i__31350__auto___40530 < len__31349__auto___40529)){
args__31356__auto__.push((arguments[i__31350__auto___40530]));

var G__40531 = (i__31350__auto___40530 + (1));
i__31350__auto___40530 = G__40531;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((2) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((2)),(0),null)):null);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31357__auto__);
});

ui.worker.send.cljs$core$IFn$_invoke$arity$variadic = (function (worker,event_name,rest){
var id = ui.worker.current_window_id.call(null);
var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_name,id], null),rest);
return cljs.core.apply.call(null,worker.webContents.send,args);
});

ui.worker.send.cljs$lang$maxFixedArity = (2);

ui.worker.send.cljs$lang$applyTo = (function (seq40526){
var G__40527 = cljs.core.first.call(null,seq40526);
var seq40526__$1 = cljs.core.next.call(null,seq40526);
var G__40528 = cljs.core.first.call(null,seq40526__$1);
var seq40526__$2 = cljs.core.next.call(null,seq40526__$1);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic(G__40527,G__40528,seq40526__$2);
});

/**
 * Sends a message to the remote worker
 */
ui.worker.message_BANG_ = (function ui$worker$message_BANG_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___40534 = arguments.length;
var i__31350__auto___40535 = (0);
while(true){
if((i__31350__auto___40535 < len__31349__auto___40534)){
args__31356__auto__.push((arguments[i__31350__auto___40535]));

var G__40536 = (i__31350__auto___40535 + (1));
i__31350__auto___40535 = G__40536;
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
return cljs.core.reset_BANG_.call(null,ui.worker._STAR_worker,ui.worker.create_worker.call(null,(function (worker){
return cljs.core.apply.call(null,ui.worker.send,worker,event_name,rest);
})));
} else {
return cljs.core.apply.call(null,ui.worker.send,cljs.core.deref.call(null,ui.worker._STAR_worker),event_name,rest);
}
});

ui.worker.message_BANG_.cljs$lang$maxFixedArity = (1);

ui.worker.message_BANG_.cljs$lang$applyTo = (function (seq40532){
var G__40533 = cljs.core.first.call(null,seq40532);
var seq40532__$1 = cljs.core.next.call(null,seq40532);
return ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40533,seq40532__$1);
});


//# sourceMappingURL=worker.js.map?rel=1510088589485
