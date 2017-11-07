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
var len__31349__auto___40483 = arguments.length;
var i__31350__auto___40484 = (0);
while(true){
if((i__31350__auto___40484 < len__31349__auto___40483)){
args__31356__auto__.push((arguments[i__31350__auto___40484]));

var G__40485 = (i__31350__auto___40484 + (1));
i__31350__auto___40484 = G__40485;
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

ui.worker.create_worker.cljs$lang$applyTo = (function (seq40481){
var G__40482 = cljs.core.first.call(null,seq40481);
var seq40481__$1 = cljs.core.next.call(null,seq40481);
return ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic(G__40482,seq40481__$1);
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
var len__31349__auto___40489 = arguments.length;
var i__31350__auto___40490 = (0);
while(true){
if((i__31350__auto___40490 < len__31349__auto___40489)){
args__31356__auto__.push((arguments[i__31350__auto___40490]));

var G__40491 = (i__31350__auto___40490 + (1));
i__31350__auto___40490 = G__40491;
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

ui.worker.send.cljs$lang$applyTo = (function (seq40486){
var G__40487 = cljs.core.first.call(null,seq40486);
var seq40486__$1 = cljs.core.next.call(null,seq40486);
var G__40488 = cljs.core.first.call(null,seq40486__$1);
var seq40486__$2 = cljs.core.next.call(null,seq40486__$1);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic(G__40487,G__40488,seq40486__$2);
});

/**
 * Sends a message to the remote worker
 */
ui.worker.message_BANG_ = (function ui$worker$message_BANG_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___40494 = arguments.length;
var i__31350__auto___40495 = (0);
while(true){
if((i__31350__auto___40495 < len__31349__auto___40494)){
args__31356__auto__.push((arguments[i__31350__auto___40495]));

var G__40496 = (i__31350__auto___40495 + (1));
i__31350__auto___40495 = G__40496;
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

ui.worker.message_BANG_.cljs$lang$applyTo = (function (seq40492){
var G__40493 = cljs.core.first.call(null,seq40492);
var seq40492__$1 = cljs.core.next.call(null,seq40492);
return ui.worker.message_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40493,seq40492__$1);
});


//# sourceMappingURL=worker.js.map?rel=1510088587696
