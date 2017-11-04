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
var args__41960__auto__ = [];
var len__41953__auto___43745 = arguments.length;
var i__41954__auto___43746 = (0);
while(true){
if((i__41954__auto___43746 < len__41953__auto___43745)){
args__41960__auto__.push((arguments[i__41954__auto___43746]));

var G__43747 = (i__41954__auto___43746 + (1));
i__41954__auto___43746 = G__43747;
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

ui.worker.create_worker.cljs$lang$applyTo = (function (seq43743){
var G__43744 = cljs.core.first.call(null,seq43743);
var seq43743__$1 = cljs.core.next.call(null,seq43743);
return ui.worker.create_worker.cljs$core$IFn$_invoke$arity$variadic(G__43744,seq43743__$1);
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
var args__41960__auto__ = [];
var len__41953__auto___43751 = arguments.length;
var i__41954__auto___43752 = (0);
while(true){
if((i__41954__auto___43752 < len__41953__auto___43751)){
args__41960__auto__.push((arguments[i__41954__auto___43752]));

var G__43753 = (i__41954__auto___43752 + (1));
i__41954__auto___43752 = G__43753;
continue;
} else {
}
break;
}

var argseq__41961__auto__ = ((((2) < args__41960__auto__.length))?(new cljs.core.IndexedSeq(args__41960__auto__.slice((2)),(0),null)):null);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41961__auto__);
});

ui.worker.send.cljs$core$IFn$_invoke$arity$variadic = (function (worker__$1,event_name,rest){
var id = ui.worker.current_window_id.call(null);
var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_name,id], null),rest);
return cljs.core.apply.call(null,worker__$1.webContents.send,args);
});

ui.worker.send.cljs$lang$maxFixedArity = (2);

ui.worker.send.cljs$lang$applyTo = (function (seq43748){
var G__43749 = cljs.core.first.call(null,seq43748);
var seq43748__$1 = cljs.core.next.call(null,seq43748);
var G__43750 = cljs.core.first.call(null,seq43748__$1);
var seq43748__$2 = cljs.core.next.call(null,seq43748__$1);
return ui.worker.send.cljs$core$IFn$_invoke$arity$variadic(G__43749,G__43750,seq43748__$2);
});


//# sourceMappingURL=worker.js.map
