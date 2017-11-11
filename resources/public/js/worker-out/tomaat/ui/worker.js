// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.ui.worker');
goog.require('cljs.core');
tomaat.ui.worker.node$module$electron = require('electron');
tomaat.ui.worker.node$module$path = require('path');
tomaat.ui.worker.BrowserWindow = tomaat.ui.worker.node$module$electron.remote.BrowserWindow;
if(typeof tomaat.ui.worker._STAR_worker !== 'undefined'){
} else {
tomaat.ui.worker._STAR_worker = cljs.core.atom.call(null,null);
}
tomaat.ui.worker.current_window_id = (function tomaat$ui$worker$current_window_id(){
return tomaat.ui.worker.BrowserWindow.getFocusedWindow().id;
});
/**
 * We want a boss development environment. :asset-path settings
 *   jack with live reloading, so this function will help us determine
 *   the url of the worker document based on environment
 */
tomaat.ui.worker.worker_url = (function tomaat$ui$worker$worker_url(){
return ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tomaat.ui.worker.node$module$path.resolve.call(null,tomaat.ui.worker.node$module$path.join.call(null,__dirname,"../../../../","worker.html")))].join('');
});
/**
 * Creates a worker and calls the given on-load handler. Returns the
 *   created worker.
 */
tomaat.ui.worker.create_worker = (function tomaat$ui$worker$create_worker(var_args){
var args__31356__auto__ = [];
var len__31349__auto___40124 = arguments.length;
var i__31350__auto___40125 = (0);
while(true){
if((i__31350__auto___40125 < len__31349__auto___40124)){
args__31356__auto__.push((arguments[i__31350__auto___40125]));

var G__40127 = (i__31350__auto___40125 + (1));
i__31350__auto___40125 = G__40127;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return tomaat.ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

tomaat.ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic = (function (on_load,rest){
var path = tomaat.ui.worker.worker_url.call(null);
var worker = (new tomaat.ui.worker.BrowserWindow(({"width": (400), "height": (400), "show": false})));
var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [worker], null),rest);
worker.loadURL(path);

worker.webContents.on("did-finish-load",((function (path,worker,args){
return (function (){
return cljs.core.apply.call(null,on_load,args);
});})(path,worker,args))
);

return worker;
});

tomaat.ui.worker.create_worker.cljs$lang$maxFixedArity = (1);

tomaat.ui.worker.create_worker.cljs$lang$applyTo = (function (seq40114){
var G__40115 = cljs.core.first.call(null,seq40114);
var seq40114__$1 = cljs.core.next.call(null,seq40114);
return tomaat.ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic(G__40115,seq40114__$1);
});

/**
 * Handles an ipc renderer event
 */
tomaat.ui.worker.on = (function tomaat$ui$worker$on(event_name,handler){
return tomaat.ui.worker.node$module$electron.ipcRenderer.on(event_name,handler);
});
/**
 * Send a message to a worker window
 */
tomaat.ui.worker.send = (function tomaat$ui$worker$send(var_args){
var args__31356__auto__ = [];
var len__31349__auto___40135 = arguments.length;
var i__31350__auto___40136 = (0);
while(true){
if((i__31350__auto___40136 < len__31349__auto___40135)){
args__31356__auto__.push((arguments[i__31350__auto___40136]));

var G__40137 = (i__31350__auto___40136 + (1));
i__31350__auto___40136 = G__40137;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((2) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((2)),(0),null)):null);
return tomaat.ui.worker.send.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31357__auto__);
});

tomaat.ui.worker.send.cljs$core$IFn$_invoke$arity$variadic = (function (worker,event_name,rest){
var id = tomaat.ui.worker.current_window_id.call(null);
var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_name,id], null),rest);
return cljs.core.apply.call(null,worker.webContents.send,args);
});

tomaat.ui.worker.send.cljs$lang$maxFixedArity = (2);

tomaat.ui.worker.send.cljs$lang$applyTo = (function (seq40128){
var G__40129 = cljs.core.first.call(null,seq40128);
var seq40128__$1 = cljs.core.next.call(null,seq40128);
var G__40130 = cljs.core.first.call(null,seq40128__$1);
var seq40128__$2 = cljs.core.next.call(null,seq40128__$1);
return tomaat.ui.worker.send.cljs$core$IFn$_invoke$arity$variadic(G__40129,G__40130,seq40128__$2);
});

/**
 * Sends a message to the remote worker. This function calls the send function - but
 *   it manages the *worker atom - creating it if it does not exist, otherwise reusing it
 */
tomaat.ui.worker.message_BANG_ = (function tomaat$ui$worker$message_BANG_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___40145 = arguments.length;
var i__31350__auto___40146 = (0);
while(true){
if((i__31350__auto___40146 < len__31349__auto___40145)){
args__31356__auto__.push((arguments[i__31350__auto___40146]));

var G__40147 = (i__31350__auto___40146 + (1));
i__31350__auto___40146 = G__40147;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return tomaat.ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

tomaat.ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (event_name,rest){
if((cljs.core.deref.call(null,tomaat.ui.worker._STAR_worker) == null)){
return cljs.core.reset_BANG_.call(null,tomaat.ui.worker._STAR_worker,tomaat.ui.worker.create_worker.call(null,(function (worker){
return cljs.core.apply.call(null,tomaat.ui.worker.send,worker,event_name,rest);
})));
} else {
return cljs.core.apply.call(null,tomaat.ui.worker.send,cljs.core.deref.call(null,tomaat.ui.worker._STAR_worker),event_name,rest);
}
});

tomaat.ui.worker.message_BANG_.cljs$lang$maxFixedArity = (1);

tomaat.ui.worker.message_BANG_.cljs$lang$applyTo = (function (seq40141){
var G__40142 = cljs.core.first.call(null,seq40141);
var seq40141__$1 = cljs.core.next.call(null,seq40141);
return tomaat.ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40142,seq40141__$1);
});


//# sourceMappingURL=worker.js.map?rel=1510360392893
