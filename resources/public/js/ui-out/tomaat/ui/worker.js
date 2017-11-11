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
var len__31349__auto___46839 = arguments.length;
var i__31350__auto___46841 = (0);
while(true){
if((i__31350__auto___46841 < len__31349__auto___46839)){
args__31356__auto__.push((arguments[i__31350__auto___46841]));

var G__46842 = (i__31350__auto___46841 + (1));
i__31350__auto___46841 = G__46842;
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

tomaat.ui.worker.create_worker.cljs$lang$applyTo = (function (seq46831){
var G__46832 = cljs.core.first.call(null,seq46831);
var seq46831__$1 = cljs.core.next.call(null,seq46831);
return tomaat.ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic(G__46832,seq46831__$1);
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
var len__31349__auto___46852 = arguments.length;
var i__31350__auto___46853 = (0);
while(true){
if((i__31350__auto___46853 < len__31349__auto___46852)){
args__31356__auto__.push((arguments[i__31350__auto___46853]));

var G__46854 = (i__31350__auto___46853 + (1));
i__31350__auto___46853 = G__46854;
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

tomaat.ui.worker.send.cljs$lang$applyTo = (function (seq46845){
var G__46846 = cljs.core.first.call(null,seq46845);
var seq46845__$1 = cljs.core.next.call(null,seq46845);
var G__46847 = cljs.core.first.call(null,seq46845__$1);
var seq46845__$2 = cljs.core.next.call(null,seq46845__$1);
return tomaat.ui.worker.send.cljs$core$IFn$_invoke$arity$variadic(G__46846,G__46847,seq46845__$2);
});

/**
 * Sends a message to the remote worker. This function calls the send function - but
 *   it manages the *worker atom - creating it if it does not exist, otherwise reusing it
 */
tomaat.ui.worker.message_BANG_ = (function tomaat$ui$worker$message_BANG_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___46862 = arguments.length;
var i__31350__auto___46863 = (0);
while(true){
if((i__31350__auto___46863 < len__31349__auto___46862)){
args__31356__auto__.push((arguments[i__31350__auto___46863]));

var G__46864 = (i__31350__auto___46863 + (1));
i__31350__auto___46863 = G__46864;
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

tomaat.ui.worker.message_BANG_.cljs$lang$applyTo = (function (seq46856){
var G__46857 = cljs.core.first.call(null,seq46856);
var seq46856__$1 = cljs.core.next.call(null,seq46856);
return tomaat.ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46857,seq46856__$1);
});


//# sourceMappingURL=worker.js.map?rel=1510360404478
