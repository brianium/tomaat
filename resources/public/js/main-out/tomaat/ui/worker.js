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
var len__31349__auto___31827 = arguments.length;
var i__31350__auto___31828 = (0);
while(true){
if((i__31350__auto___31828 < len__31349__auto___31827)){
args__31356__auto__.push((arguments[i__31350__auto___31828]));

var G__31831 = (i__31350__auto___31828 + (1));
i__31350__auto___31828 = G__31831;
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

tomaat.ui.worker.create_worker.cljs$lang$applyTo = (function (seq31799){
var G__31801 = cljs.core.first.call(null,seq31799);
var seq31799__$1 = cljs.core.next.call(null,seq31799);
return tomaat.ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic(G__31801,seq31799__$1);
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
var len__31349__auto___31856 = arguments.length;
var i__31350__auto___31857 = (0);
while(true){
if((i__31350__auto___31857 < len__31349__auto___31856)){
args__31356__auto__.push((arguments[i__31350__auto___31857]));

var G__31858 = (i__31350__auto___31857 + (1));
i__31350__auto___31857 = G__31858;
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

tomaat.ui.worker.send.cljs$lang$applyTo = (function (seq31846){
var G__31847 = cljs.core.first.call(null,seq31846);
var seq31846__$1 = cljs.core.next.call(null,seq31846);
var G__31848 = cljs.core.first.call(null,seq31846__$1);
var seq31846__$2 = cljs.core.next.call(null,seq31846__$1);
return tomaat.ui.worker.send.cljs$core$IFn$_invoke$arity$variadic(G__31847,G__31848,seq31846__$2);
});

/**
 * Sends a message to the remote worker. This function calls the send function - but
 *   it manages the *worker atom - creating it if it does not exist, otherwise reusing it
 */
tomaat.ui.worker.message_BANG_ = (function tomaat$ui$worker$message_BANG_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___31878 = arguments.length;
var i__31350__auto___31879 = (0);
while(true){
if((i__31350__auto___31879 < len__31349__auto___31878)){
args__31356__auto__.push((arguments[i__31350__auto___31879]));

var G__31883 = (i__31350__auto___31879 + (1));
i__31350__auto___31879 = G__31883;
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

tomaat.ui.worker.message_BANG_.cljs$lang$applyTo = (function (seq31868){
var G__31869 = cljs.core.first.call(null,seq31868);
var seq31868__$1 = cljs.core.next.call(null,seq31868);
return tomaat.ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31869,seq31868__$1);
});


//# sourceMappingURL=worker.js.map?rel=1510360378330
