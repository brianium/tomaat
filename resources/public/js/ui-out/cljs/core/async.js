// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47302 = arguments.length;
switch (G__47302) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async47303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47303 = (function (f,blockable,meta47304){
this.f = f;
this.blockable = blockable;
this.meta47304 = meta47304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47305,meta47304__$1){
var self__ = this;
var _47305__$1 = this;
return (new cljs.core.async.t_cljs$core$async47303(self__.f,self__.blockable,meta47304__$1));
});

cljs.core.async.t_cljs$core$async47303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47305){
var self__ = this;
var _47305__$1 = this;
return self__.meta47304;
});

cljs.core.async.t_cljs$core$async47303.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47303.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47303.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47303.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47304","meta47304",1587941444,null)], null);
});

cljs.core.async.t_cljs$core$async47303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47303";

cljs.core.async.t_cljs$core$async47303.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async47303");
});

cljs.core.async.__GT_t_cljs$core$async47303 = (function cljs$core$async$__GT_t_cljs$core$async47303(f__$1,blockable__$1,meta47304){
return (new cljs.core.async.t_cljs$core$async47303(f__$1,blockable__$1,meta47304));
});

}

return (new cljs.core.async.t_cljs$core$async47303(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47311 = arguments.length;
switch (G__47311) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47328 = arguments.length;
switch (G__47328) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47341 = arguments.length;
switch (G__47341) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_47347 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47347);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47347,ret){
return (function (){
return fn1.call(null,val_47347);
});})(val_47347,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47354 = arguments.length;
switch (G__47354) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31115__auto___47367 = n;
var x_47368 = (0);
while(true){
if((x_47368 < n__31115__auto___47367)){
(a[x_47368] = (0));

var G__47369 = (x_47368 + (1));
x_47368 = G__47369;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__47370 = (i + (1));
i = G__47370;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47373 = (function (flag,meta47374){
this.flag = flag;
this.meta47374 = meta47374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47375,meta47374__$1){
var self__ = this;
var _47375__$1 = this;
return (new cljs.core.async.t_cljs$core$async47373(self__.flag,meta47374__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47375){
var self__ = this;
var _47375__$1 = this;
return self__.meta47374;
});})(flag))
;

cljs.core.async.t_cljs$core$async47373.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47373.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47374","meta47374",2139463255,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47373";

cljs.core.async.t_cljs$core$async47373.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async47373");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47373 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47373(flag__$1,meta47374){
return (new cljs.core.async.t_cljs$core$async47373(flag__$1,meta47374));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47373(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47390 = (function (flag,cb,meta47391){
this.flag = flag;
this.cb = cb;
this.meta47391 = meta47391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47392,meta47391__$1){
var self__ = this;
var _47392__$1 = this;
return (new cljs.core.async.t_cljs$core$async47390(self__.flag,self__.cb,meta47391__$1));
});

cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47392){
var self__ = this;
var _47392__$1 = this;
return self__.meta47391;
});

cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47391","meta47391",-1596838841,null)], null);
});

cljs.core.async.t_cljs$core$async47390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47390";

cljs.core.async.t_cljs$core$async47390.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async47390");
});

cljs.core.async.__GT_t_cljs$core$async47390 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47390(flag__$1,cb__$1,meta47391){
return (new cljs.core.async.t_cljs$core$async47390(flag__$1,cb__$1,meta47391));
});

}

return (new cljs.core.async.t_cljs$core$async47390(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47406_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47406_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47407_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47407_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30072__auto__ = wport;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47410 = (i + (1));
i = G__47410;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30072__auto__ = ret;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__30060__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30060__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___47420 = arguments.length;
var i__31350__auto___47421 = (0);
while(true){
if((i__31350__auto___47421 < len__31349__auto___47420)){
args__31356__auto__.push((arguments[i__31350__auto___47421]));

var G__47423 = (i__31350__auto___47421 + (1));
i__31350__auto___47421 = G__47423;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47417){
var map__47418 = p__47417;
var map__47418__$1 = ((((!((map__47418 == null)))?((((map__47418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47418):map__47418);
var opts = map__47418__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47415){
var G__47416 = cljs.core.first.call(null,seq47415);
var seq47415__$1 = cljs.core.next.call(null,seq47415);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47416,seq47415__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47426 = arguments.length;
switch (G__47426) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33952__auto___47489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___47489){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___47489){
return (function (state_47452){
var state_val_47453 = (state_47452[(1)]);
if((state_val_47453 === (7))){
var inst_47448 = (state_47452[(2)]);
var state_47452__$1 = state_47452;
var statearr_47456_47490 = state_47452__$1;
(statearr_47456_47490[(2)] = inst_47448);

(statearr_47456_47490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47453 === (1))){
var state_47452__$1 = state_47452;
var statearr_47457_47491 = state_47452__$1;
(statearr_47457_47491[(2)] = null);

(statearr_47457_47491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47453 === (4))){
var inst_47431 = (state_47452[(7)]);
var inst_47431__$1 = (state_47452[(2)]);
var inst_47432 = (inst_47431__$1 == null);
var state_47452__$1 = (function (){var statearr_47459 = state_47452;
(statearr_47459[(7)] = inst_47431__$1);

return statearr_47459;
})();
if(cljs.core.truth_(inst_47432)){
var statearr_47461_47494 = state_47452__$1;
(statearr_47461_47494[(1)] = (5));

} else {
var statearr_47462_47495 = state_47452__$1;
(statearr_47462_47495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47453 === (13))){
var state_47452__$1 = state_47452;
var statearr_47463_47496 = state_47452__$1;
(statearr_47463_47496[(2)] = null);

(statearr_47463_47496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47453 === (6))){
var inst_47431 = (state_47452[(7)]);
var state_47452__$1 = state_47452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47452__$1,(11),to,inst_47431);
} else {
if((state_val_47453 === (3))){
var inst_47450 = (state_47452[(2)]);
var state_47452__$1 = state_47452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47452__$1,inst_47450);
} else {
if((state_val_47453 === (12))){
var state_47452__$1 = state_47452;
var statearr_47464_47499 = state_47452__$1;
(statearr_47464_47499[(2)] = null);

(statearr_47464_47499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47453 === (2))){
var state_47452__$1 = state_47452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47452__$1,(4),from);
} else {
if((state_val_47453 === (11))){
var inst_47441 = (state_47452[(2)]);
var state_47452__$1 = state_47452;
if(cljs.core.truth_(inst_47441)){
var statearr_47465_47500 = state_47452__$1;
(statearr_47465_47500[(1)] = (12));

} else {
var statearr_47466_47501 = state_47452__$1;
(statearr_47466_47501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47453 === (9))){
var state_47452__$1 = state_47452;
var statearr_47467_47502 = state_47452__$1;
(statearr_47467_47502[(2)] = null);

(statearr_47467_47502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47453 === (5))){
var state_47452__$1 = state_47452;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47468_47503 = state_47452__$1;
(statearr_47468_47503[(1)] = (8));

} else {
var statearr_47469_47504 = state_47452__$1;
(statearr_47469_47504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47453 === (14))){
var inst_47446 = (state_47452[(2)]);
var state_47452__$1 = state_47452;
var statearr_47470_47505 = state_47452__$1;
(statearr_47470_47505[(2)] = inst_47446);

(statearr_47470_47505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47453 === (10))){
var inst_47438 = (state_47452[(2)]);
var state_47452__$1 = state_47452;
var statearr_47471_47506 = state_47452__$1;
(statearr_47471_47506[(2)] = inst_47438);

(statearr_47471_47506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47453 === (8))){
var inst_47435 = cljs.core.async.close_BANG_.call(null,to);
var state_47452__$1 = state_47452;
var statearr_47472_47507 = state_47452__$1;
(statearr_47472_47507[(2)] = inst_47435);

(statearr_47472_47507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___47489))
;
return ((function (switch__33607__auto__,c__33952__auto___47489){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_47474 = [null,null,null,null,null,null,null,null];
(statearr_47474[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_47474[(1)] = (1));

return statearr_47474;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_47452){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_47452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e47475){if((e47475 instanceof Object)){
var ex__33611__auto__ = e47475;
var statearr_47476_47510 = state_47452;
(statearr_47476_47510[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47511 = state_47452;
state_47452 = G__47511;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_47452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_47452);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___47489))
})();
var state__33954__auto__ = (function (){var statearr_47481 = f__33953__auto__.call(null);
(statearr_47481[(6)] = c__33952__auto___47489);

return statearr_47481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___47489))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__47512){
var vec__47513 = p__47512;
var v = cljs.core.nth.call(null,vec__47513,(0),null);
var p = cljs.core.nth.call(null,vec__47513,(1),null);
var job = vec__47513;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33952__auto___47742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___47742,res,vec__47513,v,p,job,jobs,results){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___47742,res,vec__47513,v,p,job,jobs,results){
return (function (state_47520){
var state_val_47521 = (state_47520[(1)]);
if((state_val_47521 === (1))){
var state_47520__$1 = state_47520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47520__$1,(2),res,v);
} else {
if((state_val_47521 === (2))){
var inst_47517 = (state_47520[(2)]);
var inst_47518 = cljs.core.async.close_BANG_.call(null,res);
var state_47520__$1 = (function (){var statearr_47522 = state_47520;
(statearr_47522[(7)] = inst_47517);

return statearr_47522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47520__$1,inst_47518);
} else {
return null;
}
}
});})(c__33952__auto___47742,res,vec__47513,v,p,job,jobs,results))
;
return ((function (switch__33607__auto__,c__33952__auto___47742,res,vec__47513,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_47526 = [null,null,null,null,null,null,null,null];
(statearr_47526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_47526[(1)] = (1));

return statearr_47526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_47520){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_47520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e47527){if((e47527 instanceof Object)){
var ex__33611__auto__ = e47527;
var statearr_47528_47751 = state_47520;
(statearr_47528_47751[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47752 = state_47520;
state_47520 = G__47752;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_47520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_47520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___47742,res,vec__47513,v,p,job,jobs,results))
})();
var state__33954__auto__ = (function (){var statearr_47529 = f__33953__auto__.call(null);
(statearr_47529[(6)] = c__33952__auto___47742);

return statearr_47529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___47742,res,vec__47513,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47530){
var vec__47531 = p__47530;
var v = cljs.core.nth.call(null,vec__47531,(0),null);
var p = cljs.core.nth.call(null,vec__47531,(1),null);
var job = vec__47531;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31115__auto___47754 = n;
var __47755 = (0);
while(true){
if((__47755 < n__31115__auto___47754)){
var G__47534_47756 = type;
var G__47534_47757__$1 = (((G__47534_47756 instanceof cljs.core.Keyword))?G__47534_47756.fqn:null);
switch (G__47534_47757__$1) {
case "compute":
var c__33952__auto___47759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47755,c__33952__auto___47759,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (__47755,c__33952__auto___47759,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async){
return (function (state_47548){
var state_val_47549 = (state_47548[(1)]);
if((state_val_47549 === (1))){
var state_47548__$1 = state_47548;
var statearr_47554_47760 = state_47548__$1;
(statearr_47554_47760[(2)] = null);

(statearr_47554_47760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (2))){
var state_47548__$1 = state_47548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47548__$1,(4),jobs);
} else {
if((state_val_47549 === (3))){
var inst_47546 = (state_47548[(2)]);
var state_47548__$1 = state_47548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47548__$1,inst_47546);
} else {
if((state_val_47549 === (4))){
var inst_47538 = (state_47548[(2)]);
var inst_47539 = process.call(null,inst_47538);
var state_47548__$1 = state_47548;
if(cljs.core.truth_(inst_47539)){
var statearr_47556_47763 = state_47548__$1;
(statearr_47556_47763[(1)] = (5));

} else {
var statearr_47557_47764 = state_47548__$1;
(statearr_47557_47764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (5))){
var state_47548__$1 = state_47548;
var statearr_47558_47765 = state_47548__$1;
(statearr_47558_47765[(2)] = null);

(statearr_47558_47765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (6))){
var state_47548__$1 = state_47548;
var statearr_47565_47766 = state_47548__$1;
(statearr_47565_47766[(2)] = null);

(statearr_47565_47766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (7))){
var inst_47544 = (state_47548[(2)]);
var state_47548__$1 = state_47548;
var statearr_47566_47767 = state_47548__$1;
(statearr_47566_47767[(2)] = inst_47544);

(statearr_47566_47767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47755,c__33952__auto___47759,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async))
;
return ((function (__47755,switch__33607__auto__,c__33952__auto___47759,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_47567 = [null,null,null,null,null,null,null];
(statearr_47567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_47567[(1)] = (1));

return statearr_47567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_47548){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_47548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e47568){if((e47568 instanceof Object)){
var ex__33611__auto__ = e47568;
var statearr_47569_47768 = state_47548;
(statearr_47569_47768[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47769 = state_47548;
state_47548 = G__47769;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_47548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_47548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(__47755,switch__33607__auto__,c__33952__auto___47759,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_47573 = f__33953__auto__.call(null);
(statearr_47573[(6)] = c__33952__auto___47759);

return statearr_47573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(__47755,c__33952__auto___47759,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async))
);


break;
case "async":
var c__33952__auto___47770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47755,c__33952__auto___47770,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (__47755,c__33952__auto___47770,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async){
return (function (state_47587){
var state_val_47588 = (state_47587[(1)]);
if((state_val_47588 === (1))){
var state_47587__$1 = state_47587;
var statearr_47589_47771 = state_47587__$1;
(statearr_47589_47771[(2)] = null);

(statearr_47589_47771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47588 === (2))){
var state_47587__$1 = state_47587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47587__$1,(4),jobs);
} else {
if((state_val_47588 === (3))){
var inst_47585 = (state_47587[(2)]);
var state_47587__$1 = state_47587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47587__$1,inst_47585);
} else {
if((state_val_47588 === (4))){
var inst_47577 = (state_47587[(2)]);
var inst_47578 = async.call(null,inst_47577);
var state_47587__$1 = state_47587;
if(cljs.core.truth_(inst_47578)){
var statearr_47590_47776 = state_47587__$1;
(statearr_47590_47776[(1)] = (5));

} else {
var statearr_47591_47777 = state_47587__$1;
(statearr_47591_47777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47588 === (5))){
var state_47587__$1 = state_47587;
var statearr_47598_47778 = state_47587__$1;
(statearr_47598_47778[(2)] = null);

(statearr_47598_47778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47588 === (6))){
var state_47587__$1 = state_47587;
var statearr_47599_47780 = state_47587__$1;
(statearr_47599_47780[(2)] = null);

(statearr_47599_47780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47588 === (7))){
var inst_47583 = (state_47587[(2)]);
var state_47587__$1 = state_47587;
var statearr_47600_47786 = state_47587__$1;
(statearr_47600_47786[(2)] = inst_47583);

(statearr_47600_47786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47755,c__33952__auto___47770,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async))
;
return ((function (__47755,switch__33607__auto__,c__33952__auto___47770,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_47601 = [null,null,null,null,null,null,null];
(statearr_47601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_47601[(1)] = (1));

return statearr_47601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_47587){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_47587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e47602){if((e47602 instanceof Object)){
var ex__33611__auto__ = e47602;
var statearr_47603_47792 = state_47587;
(statearr_47603_47792[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47793 = state_47587;
state_47587 = G__47793;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_47587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_47587);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(__47755,switch__33607__auto__,c__33952__auto___47770,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_47604 = f__33953__auto__.call(null);
(statearr_47604[(6)] = c__33952__auto___47770);

return statearr_47604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(__47755,c__33952__auto___47770,G__47534_47756,G__47534_47757__$1,n__31115__auto___47754,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47534_47757__$1)].join('')));

}

var G__47796 = (__47755 + (1));
__47755 = G__47796;
continue;
} else {
}
break;
}

var c__33952__auto___47797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___47797,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___47797,jobs,results,process,async){
return (function (state_47629){
var state_val_47630 = (state_47629[(1)]);
if((state_val_47630 === (1))){
var state_47629__$1 = state_47629;
var statearr_47631_47798 = state_47629__$1;
(statearr_47631_47798[(2)] = null);

(statearr_47631_47798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47630 === (2))){
var state_47629__$1 = state_47629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47629__$1,(4),from);
} else {
if((state_val_47630 === (3))){
var inst_47627 = (state_47629[(2)]);
var state_47629__$1 = state_47629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47629__$1,inst_47627);
} else {
if((state_val_47630 === (4))){
var inst_47610 = (state_47629[(7)]);
var inst_47610__$1 = (state_47629[(2)]);
var inst_47611 = (inst_47610__$1 == null);
var state_47629__$1 = (function (){var statearr_47638 = state_47629;
(statearr_47638[(7)] = inst_47610__$1);

return statearr_47638;
})();
if(cljs.core.truth_(inst_47611)){
var statearr_47639_47802 = state_47629__$1;
(statearr_47639_47802[(1)] = (5));

} else {
var statearr_47640_47803 = state_47629__$1;
(statearr_47640_47803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47630 === (5))){
var inst_47613 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47629__$1 = state_47629;
var statearr_47641_47804 = state_47629__$1;
(statearr_47641_47804[(2)] = inst_47613);

(statearr_47641_47804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47630 === (6))){
var inst_47610 = (state_47629[(7)]);
var inst_47615 = (state_47629[(8)]);
var inst_47615__$1 = cljs.core.async.chan.call(null,(1));
var inst_47616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47617 = [inst_47610,inst_47615__$1];
var inst_47618 = (new cljs.core.PersistentVector(null,2,(5),inst_47616,inst_47617,null));
var state_47629__$1 = (function (){var statearr_47642 = state_47629;
(statearr_47642[(8)] = inst_47615__$1);

return statearr_47642;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47629__$1,(8),jobs,inst_47618);
} else {
if((state_val_47630 === (7))){
var inst_47625 = (state_47629[(2)]);
var state_47629__$1 = state_47629;
var statearr_47643_47811 = state_47629__$1;
(statearr_47643_47811[(2)] = inst_47625);

(statearr_47643_47811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47630 === (8))){
var inst_47615 = (state_47629[(8)]);
var inst_47620 = (state_47629[(2)]);
var state_47629__$1 = (function (){var statearr_47644 = state_47629;
(statearr_47644[(9)] = inst_47620);

return statearr_47644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47629__$1,(9),results,inst_47615);
} else {
if((state_val_47630 === (9))){
var inst_47622 = (state_47629[(2)]);
var state_47629__$1 = (function (){var statearr_47645 = state_47629;
(statearr_47645[(10)] = inst_47622);

return statearr_47645;
})();
var statearr_47646_47813 = state_47629__$1;
(statearr_47646_47813[(2)] = null);

(statearr_47646_47813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___47797,jobs,results,process,async))
;
return ((function (switch__33607__auto__,c__33952__auto___47797,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_47647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_47647[(1)] = (1));

return statearr_47647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_47629){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_47629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e47648){if((e47648 instanceof Object)){
var ex__33611__auto__ = e47648;
var statearr_47649_47814 = state_47629;
(statearr_47649_47814[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47816 = state_47629;
state_47629 = G__47816;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_47629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_47629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___47797,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_47650 = f__33953__auto__.call(null);
(statearr_47650[(6)] = c__33952__auto___47797);

return statearr_47650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___47797,jobs,results,process,async))
);


var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__,jobs,results,process,async){
return (function (state_47688){
var state_val_47689 = (state_47688[(1)]);
if((state_val_47689 === (7))){
var inst_47684 = (state_47688[(2)]);
var state_47688__$1 = state_47688;
var statearr_47690_47818 = state_47688__$1;
(statearr_47690_47818[(2)] = inst_47684);

(statearr_47690_47818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (20))){
var state_47688__$1 = state_47688;
var statearr_47692_47819 = state_47688__$1;
(statearr_47692_47819[(2)] = null);

(statearr_47692_47819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (1))){
var state_47688__$1 = state_47688;
var statearr_47693_47820 = state_47688__$1;
(statearr_47693_47820[(2)] = null);

(statearr_47693_47820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (4))){
var inst_47653 = (state_47688[(7)]);
var inst_47653__$1 = (state_47688[(2)]);
var inst_47654 = (inst_47653__$1 == null);
var state_47688__$1 = (function (){var statearr_47694 = state_47688;
(statearr_47694[(7)] = inst_47653__$1);

return statearr_47694;
})();
if(cljs.core.truth_(inst_47654)){
var statearr_47695_47822 = state_47688__$1;
(statearr_47695_47822[(1)] = (5));

} else {
var statearr_47697_47823 = state_47688__$1;
(statearr_47697_47823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (15))){
var inst_47666 = (state_47688[(8)]);
var state_47688__$1 = state_47688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47688__$1,(18),to,inst_47666);
} else {
if((state_val_47689 === (21))){
var inst_47679 = (state_47688[(2)]);
var state_47688__$1 = state_47688;
var statearr_47698_47824 = state_47688__$1;
(statearr_47698_47824[(2)] = inst_47679);

(statearr_47698_47824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (13))){
var inst_47681 = (state_47688[(2)]);
var state_47688__$1 = (function (){var statearr_47699 = state_47688;
(statearr_47699[(9)] = inst_47681);

return statearr_47699;
})();
var statearr_47700_47825 = state_47688__$1;
(statearr_47700_47825[(2)] = null);

(statearr_47700_47825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (6))){
var inst_47653 = (state_47688[(7)]);
var state_47688__$1 = state_47688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47688__$1,(11),inst_47653);
} else {
if((state_val_47689 === (17))){
var inst_47674 = (state_47688[(2)]);
var state_47688__$1 = state_47688;
if(cljs.core.truth_(inst_47674)){
var statearr_47701_47826 = state_47688__$1;
(statearr_47701_47826[(1)] = (19));

} else {
var statearr_47702_47827 = state_47688__$1;
(statearr_47702_47827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (3))){
var inst_47686 = (state_47688[(2)]);
var state_47688__$1 = state_47688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47688__$1,inst_47686);
} else {
if((state_val_47689 === (12))){
var inst_47663 = (state_47688[(10)]);
var state_47688__$1 = state_47688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47688__$1,(14),inst_47663);
} else {
if((state_val_47689 === (2))){
var state_47688__$1 = state_47688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47688__$1,(4),results);
} else {
if((state_val_47689 === (19))){
var state_47688__$1 = state_47688;
var statearr_47705_47828 = state_47688__$1;
(statearr_47705_47828[(2)] = null);

(statearr_47705_47828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (11))){
var inst_47663 = (state_47688[(2)]);
var state_47688__$1 = (function (){var statearr_47706 = state_47688;
(statearr_47706[(10)] = inst_47663);

return statearr_47706;
})();
var statearr_47708_47830 = state_47688__$1;
(statearr_47708_47830[(2)] = null);

(statearr_47708_47830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (9))){
var state_47688__$1 = state_47688;
var statearr_47709_47831 = state_47688__$1;
(statearr_47709_47831[(2)] = null);

(statearr_47709_47831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (5))){
var state_47688__$1 = state_47688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47710_47832 = state_47688__$1;
(statearr_47710_47832[(1)] = (8));

} else {
var statearr_47711_47833 = state_47688__$1;
(statearr_47711_47833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (14))){
var inst_47666 = (state_47688[(8)]);
var inst_47668 = (state_47688[(11)]);
var inst_47666__$1 = (state_47688[(2)]);
var inst_47667 = (inst_47666__$1 == null);
var inst_47668__$1 = cljs.core.not.call(null,inst_47667);
var state_47688__$1 = (function (){var statearr_47712 = state_47688;
(statearr_47712[(8)] = inst_47666__$1);

(statearr_47712[(11)] = inst_47668__$1);

return statearr_47712;
})();
if(inst_47668__$1){
var statearr_47714_47834 = state_47688__$1;
(statearr_47714_47834[(1)] = (15));

} else {
var statearr_47715_47836 = state_47688__$1;
(statearr_47715_47836[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (16))){
var inst_47668 = (state_47688[(11)]);
var state_47688__$1 = state_47688;
var statearr_47716_47837 = state_47688__$1;
(statearr_47716_47837[(2)] = inst_47668);

(statearr_47716_47837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (10))){
var inst_47660 = (state_47688[(2)]);
var state_47688__$1 = state_47688;
var statearr_47717_47838 = state_47688__$1;
(statearr_47717_47838[(2)] = inst_47660);

(statearr_47717_47838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (18))){
var inst_47671 = (state_47688[(2)]);
var state_47688__$1 = state_47688;
var statearr_47718_47839 = state_47688__$1;
(statearr_47718_47839[(2)] = inst_47671);

(statearr_47718_47839[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47689 === (8))){
var inst_47657 = cljs.core.async.close_BANG_.call(null,to);
var state_47688__$1 = state_47688;
var statearr_47719_47840 = state_47688__$1;
(statearr_47719_47840[(2)] = inst_47657);

(statearr_47719_47840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto__,jobs,results,process,async))
;
return ((function (switch__33607__auto__,c__33952__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_47722 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_47722[(1)] = (1));

return statearr_47722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_47688){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_47688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e47728){if((e47728 instanceof Object)){
var ex__33611__auto__ = e47728;
var statearr_47729_47842 = state_47688;
(statearr_47729_47842[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47843 = state_47688;
state_47688 = G__47843;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_47688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_47688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_47730 = f__33953__auto__.call(null);
(statearr_47730[(6)] = c__33952__auto__);

return statearr_47730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__,jobs,results,process,async))
);

return c__33952__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47850 = arguments.length;
switch (G__47850) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47855 = arguments.length;
switch (G__47855) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47858 = arguments.length;
switch (G__47858) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33952__auto___47916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___47916,tc,fc){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___47916,tc,fc){
return (function (state_47886){
var state_val_47887 = (state_47886[(1)]);
if((state_val_47887 === (7))){
var inst_47882 = (state_47886[(2)]);
var state_47886__$1 = state_47886;
var statearr_47888_47921 = state_47886__$1;
(statearr_47888_47921[(2)] = inst_47882);

(statearr_47888_47921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (1))){
var state_47886__$1 = state_47886;
var statearr_47889_47922 = state_47886__$1;
(statearr_47889_47922[(2)] = null);

(statearr_47889_47922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (4))){
var inst_47863 = (state_47886[(7)]);
var inst_47863__$1 = (state_47886[(2)]);
var inst_47864 = (inst_47863__$1 == null);
var state_47886__$1 = (function (){var statearr_47890 = state_47886;
(statearr_47890[(7)] = inst_47863__$1);

return statearr_47890;
})();
if(cljs.core.truth_(inst_47864)){
var statearr_47891_47925 = state_47886__$1;
(statearr_47891_47925[(1)] = (5));

} else {
var statearr_47892_47926 = state_47886__$1;
(statearr_47892_47926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (13))){
var state_47886__$1 = state_47886;
var statearr_47893_47927 = state_47886__$1;
(statearr_47893_47927[(2)] = null);

(statearr_47893_47927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (6))){
var inst_47863 = (state_47886[(7)]);
var inst_47869 = p.call(null,inst_47863);
var state_47886__$1 = state_47886;
if(cljs.core.truth_(inst_47869)){
var statearr_47894_47931 = state_47886__$1;
(statearr_47894_47931[(1)] = (9));

} else {
var statearr_47895_47932 = state_47886__$1;
(statearr_47895_47932[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (3))){
var inst_47884 = (state_47886[(2)]);
var state_47886__$1 = state_47886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47886__$1,inst_47884);
} else {
if((state_val_47887 === (12))){
var state_47886__$1 = state_47886;
var statearr_47898_47933 = state_47886__$1;
(statearr_47898_47933[(2)] = null);

(statearr_47898_47933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (2))){
var state_47886__$1 = state_47886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47886__$1,(4),ch);
} else {
if((state_val_47887 === (11))){
var inst_47863 = (state_47886[(7)]);
var inst_47873 = (state_47886[(2)]);
var state_47886__$1 = state_47886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47886__$1,(8),inst_47873,inst_47863);
} else {
if((state_val_47887 === (9))){
var state_47886__$1 = state_47886;
var statearr_47899_47934 = state_47886__$1;
(statearr_47899_47934[(2)] = tc);

(statearr_47899_47934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (5))){
var inst_47866 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47867 = cljs.core.async.close_BANG_.call(null,fc);
var state_47886__$1 = (function (){var statearr_47900 = state_47886;
(statearr_47900[(8)] = inst_47866);

return statearr_47900;
})();
var statearr_47901_47935 = state_47886__$1;
(statearr_47901_47935[(2)] = inst_47867);

(statearr_47901_47935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (14))){
var inst_47880 = (state_47886[(2)]);
var state_47886__$1 = state_47886;
var statearr_47902_47940 = state_47886__$1;
(statearr_47902_47940[(2)] = inst_47880);

(statearr_47902_47940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (10))){
var state_47886__$1 = state_47886;
var statearr_47903_47941 = state_47886__$1;
(statearr_47903_47941[(2)] = fc);

(statearr_47903_47941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (8))){
var inst_47875 = (state_47886[(2)]);
var state_47886__$1 = state_47886;
if(cljs.core.truth_(inst_47875)){
var statearr_47904_47942 = state_47886__$1;
(statearr_47904_47942[(1)] = (12));

} else {
var statearr_47905_47943 = state_47886__$1;
(statearr_47905_47943[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___47916,tc,fc))
;
return ((function (switch__33607__auto__,c__33952__auto___47916,tc,fc){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_47906 = [null,null,null,null,null,null,null,null,null];
(statearr_47906[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_47906[(1)] = (1));

return statearr_47906;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_47886){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_47886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e47907){if((e47907 instanceof Object)){
var ex__33611__auto__ = e47907;
var statearr_47908_47946 = state_47886;
(statearr_47908_47946[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47947 = state_47886;
state_47886 = G__47947;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_47886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_47886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___47916,tc,fc))
})();
var state__33954__auto__ = (function (){var statearr_47910 = f__33953__auto__.call(null);
(statearr_47910[(6)] = c__33952__auto___47916);

return statearr_47910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___47916,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__){
return (function (state_47970){
var state_val_47971 = (state_47970[(1)]);
if((state_val_47971 === (7))){
var inst_47966 = (state_47970[(2)]);
var state_47970__$1 = state_47970;
var statearr_47972_48009 = state_47970__$1;
(statearr_47972_48009[(2)] = inst_47966);

(statearr_47972_48009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (1))){
var inst_47950 = init;
var state_47970__$1 = (function (){var statearr_47973 = state_47970;
(statearr_47973[(7)] = inst_47950);

return statearr_47973;
})();
var statearr_47974_48014 = state_47970__$1;
(statearr_47974_48014[(2)] = null);

(statearr_47974_48014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (4))){
var inst_47953 = (state_47970[(8)]);
var inst_47953__$1 = (state_47970[(2)]);
var inst_47954 = (inst_47953__$1 == null);
var state_47970__$1 = (function (){var statearr_47975 = state_47970;
(statearr_47975[(8)] = inst_47953__$1);

return statearr_47975;
})();
if(cljs.core.truth_(inst_47954)){
var statearr_47976_48019 = state_47970__$1;
(statearr_47976_48019[(1)] = (5));

} else {
var statearr_47977_48020 = state_47970__$1;
(statearr_47977_48020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (6))){
var inst_47950 = (state_47970[(7)]);
var inst_47953 = (state_47970[(8)]);
var inst_47957 = (state_47970[(9)]);
var inst_47957__$1 = f.call(null,inst_47950,inst_47953);
var inst_47958 = cljs.core.reduced_QMARK_.call(null,inst_47957__$1);
var state_47970__$1 = (function (){var statearr_47978 = state_47970;
(statearr_47978[(9)] = inst_47957__$1);

return statearr_47978;
})();
if(inst_47958){
var statearr_47979_48029 = state_47970__$1;
(statearr_47979_48029[(1)] = (8));

} else {
var statearr_47980_48030 = state_47970__$1;
(statearr_47980_48030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (3))){
var inst_47968 = (state_47970[(2)]);
var state_47970__$1 = state_47970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47970__$1,inst_47968);
} else {
if((state_val_47971 === (2))){
var state_47970__$1 = state_47970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47970__$1,(4),ch);
} else {
if((state_val_47971 === (9))){
var inst_47957 = (state_47970[(9)]);
var inst_47950 = inst_47957;
var state_47970__$1 = (function (){var statearr_47981 = state_47970;
(statearr_47981[(7)] = inst_47950);

return statearr_47981;
})();
var statearr_47983_48031 = state_47970__$1;
(statearr_47983_48031[(2)] = null);

(statearr_47983_48031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (5))){
var inst_47950 = (state_47970[(7)]);
var state_47970__$1 = state_47970;
var statearr_47985_48032 = state_47970__$1;
(statearr_47985_48032[(2)] = inst_47950);

(statearr_47985_48032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (10))){
var inst_47964 = (state_47970[(2)]);
var state_47970__$1 = state_47970;
var statearr_47986_48033 = state_47970__$1;
(statearr_47986_48033[(2)] = inst_47964);

(statearr_47986_48033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (8))){
var inst_47957 = (state_47970[(9)]);
var inst_47960 = cljs.core.deref.call(null,inst_47957);
var state_47970__$1 = state_47970;
var statearr_47987_48034 = state_47970__$1;
(statearr_47987_48034[(2)] = inst_47960);

(statearr_47987_48034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto__))
;
return ((function (switch__33607__auto__,c__33952__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33608__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33608__auto____0 = (function (){
var statearr_47988 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47988[(0)] = cljs$core$async$reduce_$_state_machine__33608__auto__);

(statearr_47988[(1)] = (1));

return statearr_47988;
});
var cljs$core$async$reduce_$_state_machine__33608__auto____1 = (function (state_47970){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_47970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e47993){if((e47993 instanceof Object)){
var ex__33611__auto__ = e47993;
var statearr_47994_48035 = state_47970;
(statearr_47994_48035[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48037 = state_47970;
state_47970 = G__48037;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33608__auto__ = function(state_47970){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33608__auto____1.call(this,state_47970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33608__auto____0;
cljs$core$async$reduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33608__auto____1;
return cljs$core$async$reduce_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_48000 = f__33953__auto__.call(null);
(statearr_48000[(6)] = c__33952__auto__);

return statearr_48000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__))
);

return c__33952__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__,f__$1){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__,f__$1){
return (function (state_48052){
var state_val_48053 = (state_48052[(1)]);
if((state_val_48053 === (1))){
var inst_48047 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_48052__$1 = state_48052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48052__$1,(2),inst_48047);
} else {
if((state_val_48053 === (2))){
var inst_48049 = (state_48052[(2)]);
var inst_48050 = f__$1.call(null,inst_48049);
var state_48052__$1 = state_48052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48052__$1,inst_48050);
} else {
return null;
}
}
});})(c__33952__auto__,f__$1))
;
return ((function (switch__33607__auto__,c__33952__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33608__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33608__auto____0 = (function (){
var statearr_48061 = [null,null,null,null,null,null,null];
(statearr_48061[(0)] = cljs$core$async$transduce_$_state_machine__33608__auto__);

(statearr_48061[(1)] = (1));

return statearr_48061;
});
var cljs$core$async$transduce_$_state_machine__33608__auto____1 = (function (state_48052){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_48052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e48063){if((e48063 instanceof Object)){
var ex__33611__auto__ = e48063;
var statearr_48068_48071 = state_48052;
(statearr_48068_48071[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48072 = state_48052;
state_48052 = G__48072;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33608__auto__ = function(state_48052){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33608__auto____1.call(this,state_48052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33608__auto____0;
cljs$core$async$transduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33608__auto____1;
return cljs$core$async$transduce_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,f__$1))
})();
var state__33954__auto__ = (function (){var statearr_48069 = f__33953__auto__.call(null);
(statearr_48069[(6)] = c__33952__auto__);

return statearr_48069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__,f__$1))
);

return c__33952__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48074 = arguments.length;
switch (G__48074) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__){
return (function (state_48102){
var state_val_48103 = (state_48102[(1)]);
if((state_val_48103 === (7))){
var inst_48084 = (state_48102[(2)]);
var state_48102__$1 = state_48102;
var statearr_48106_48137 = state_48102__$1;
(statearr_48106_48137[(2)] = inst_48084);

(statearr_48106_48137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48103 === (1))){
var inst_48076 = cljs.core.seq.call(null,coll);
var inst_48077 = inst_48076;
var state_48102__$1 = (function (){var statearr_48107 = state_48102;
(statearr_48107[(7)] = inst_48077);

return statearr_48107;
})();
var statearr_48108_48138 = state_48102__$1;
(statearr_48108_48138[(2)] = null);

(statearr_48108_48138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48103 === (4))){
var inst_48077 = (state_48102[(7)]);
var inst_48082 = cljs.core.first.call(null,inst_48077);
var state_48102__$1 = state_48102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48102__$1,(7),ch,inst_48082);
} else {
if((state_val_48103 === (13))){
var inst_48096 = (state_48102[(2)]);
var state_48102__$1 = state_48102;
var statearr_48109_48140 = state_48102__$1;
(statearr_48109_48140[(2)] = inst_48096);

(statearr_48109_48140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48103 === (6))){
var inst_48087 = (state_48102[(2)]);
var state_48102__$1 = state_48102;
if(cljs.core.truth_(inst_48087)){
var statearr_48110_48142 = state_48102__$1;
(statearr_48110_48142[(1)] = (8));

} else {
var statearr_48111_48143 = state_48102__$1;
(statearr_48111_48143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48103 === (3))){
var inst_48100 = (state_48102[(2)]);
var state_48102__$1 = state_48102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48102__$1,inst_48100);
} else {
if((state_val_48103 === (12))){
var state_48102__$1 = state_48102;
var statearr_48112_48144 = state_48102__$1;
(statearr_48112_48144[(2)] = null);

(statearr_48112_48144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48103 === (2))){
var inst_48077 = (state_48102[(7)]);
var state_48102__$1 = state_48102;
if(cljs.core.truth_(inst_48077)){
var statearr_48114_48148 = state_48102__$1;
(statearr_48114_48148[(1)] = (4));

} else {
var statearr_48115_48149 = state_48102__$1;
(statearr_48115_48149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48103 === (11))){
var inst_48093 = cljs.core.async.close_BANG_.call(null,ch);
var state_48102__$1 = state_48102;
var statearr_48116_48151 = state_48102__$1;
(statearr_48116_48151[(2)] = inst_48093);

(statearr_48116_48151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48103 === (9))){
var state_48102__$1 = state_48102;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48119_48152 = state_48102__$1;
(statearr_48119_48152[(1)] = (11));

} else {
var statearr_48121_48153 = state_48102__$1;
(statearr_48121_48153[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48103 === (5))){
var inst_48077 = (state_48102[(7)]);
var state_48102__$1 = state_48102;
var statearr_48122_48154 = state_48102__$1;
(statearr_48122_48154[(2)] = inst_48077);

(statearr_48122_48154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48103 === (10))){
var inst_48098 = (state_48102[(2)]);
var state_48102__$1 = state_48102;
var statearr_48123_48155 = state_48102__$1;
(statearr_48123_48155[(2)] = inst_48098);

(statearr_48123_48155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48103 === (8))){
var inst_48077 = (state_48102[(7)]);
var inst_48089 = cljs.core.next.call(null,inst_48077);
var inst_48077__$1 = inst_48089;
var state_48102__$1 = (function (){var statearr_48126 = state_48102;
(statearr_48126[(7)] = inst_48077__$1);

return statearr_48126;
})();
var statearr_48128_48156 = state_48102__$1;
(statearr_48128_48156[(2)] = null);

(statearr_48128_48156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto__))
;
return ((function (switch__33607__auto__,c__33952__auto__){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_48129 = [null,null,null,null,null,null,null,null];
(statearr_48129[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_48129[(1)] = (1));

return statearr_48129;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_48102){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_48102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e48130){if((e48130 instanceof Object)){
var ex__33611__auto__ = e48130;
var statearr_48131_48157 = state_48102;
(statearr_48131_48157[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48158 = state_48102;
state_48102 = G__48158;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_48102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_48102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_48133 = f__33953__auto__.call(null);
(statearr_48133[(6)] = c__33952__auto__);

return statearr_48133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__))
);

return c__33952__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30805__auto__ = (((_ == null))?null:_);
var m__30806__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,_);
} else {
var m__30806__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30805__auto__ = (((m == null))?null:m);
var m__30806__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30806__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30805__auto__ = (((m == null))?null:m);
var m__30806__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,m,ch);
} else {
var m__30806__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30805__auto__ = (((m == null))?null:m);
var m__30806__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,m);
} else {
var m__30806__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48163 = (function (ch,cs,meta48164){
this.ch = ch;
this.cs = cs;
this.meta48164 = meta48164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48165,meta48164__$1){
var self__ = this;
var _48165__$1 = this;
return (new cljs.core.async.t_cljs$core$async48163(self__.ch,self__.cs,meta48164__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48165){
var self__ = this;
var _48165__$1 = this;
return self__.meta48164;
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48164","meta48164",2113419025,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48163";

cljs.core.async.t_cljs$core$async48163.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async48163");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48163 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48163(ch__$1,cs__$1,meta48164){
return (new cljs.core.async.t_cljs$core$async48163(ch__$1,cs__$1,meta48164));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48163(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33952__auto___48394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___48394,cs,m,dchan,dctr,done){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___48394,cs,m,dchan,dctr,done){
return (function (state_48306){
var state_val_48307 = (state_48306[(1)]);
if((state_val_48307 === (7))){
var inst_48301 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48308_48397 = state_48306__$1;
(statearr_48308_48397[(2)] = inst_48301);

(statearr_48308_48397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (20))){
var inst_48201 = (state_48306[(7)]);
var inst_48213 = cljs.core.first.call(null,inst_48201);
var inst_48214 = cljs.core.nth.call(null,inst_48213,(0),null);
var inst_48215 = cljs.core.nth.call(null,inst_48213,(1),null);
var state_48306__$1 = (function (){var statearr_48309 = state_48306;
(statearr_48309[(8)] = inst_48214);

return statearr_48309;
})();
if(cljs.core.truth_(inst_48215)){
var statearr_48310_48400 = state_48306__$1;
(statearr_48310_48400[(1)] = (22));

} else {
var statearr_48311_48401 = state_48306__$1;
(statearr_48311_48401[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (27))){
var inst_48246 = (state_48306[(9)]);
var inst_48253 = (state_48306[(10)]);
var inst_48248 = (state_48306[(11)]);
var inst_48170 = (state_48306[(12)]);
var inst_48253__$1 = cljs.core._nth.call(null,inst_48246,inst_48248);
var inst_48254 = cljs.core.async.put_BANG_.call(null,inst_48253__$1,inst_48170,done);
var state_48306__$1 = (function (){var statearr_48312 = state_48306;
(statearr_48312[(10)] = inst_48253__$1);

return statearr_48312;
})();
if(cljs.core.truth_(inst_48254)){
var statearr_48313_48402 = state_48306__$1;
(statearr_48313_48402[(1)] = (30));

} else {
var statearr_48314_48403 = state_48306__$1;
(statearr_48314_48403[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (1))){
var state_48306__$1 = state_48306;
var statearr_48315_48404 = state_48306__$1;
(statearr_48315_48404[(2)] = null);

(statearr_48315_48404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (24))){
var inst_48201 = (state_48306[(7)]);
var inst_48222 = (state_48306[(2)]);
var inst_48223 = cljs.core.next.call(null,inst_48201);
var inst_48179 = inst_48223;
var inst_48180 = null;
var inst_48181 = (0);
var inst_48182 = (0);
var state_48306__$1 = (function (){var statearr_48316 = state_48306;
(statearr_48316[(13)] = inst_48179);

(statearr_48316[(14)] = inst_48182);

(statearr_48316[(15)] = inst_48180);

(statearr_48316[(16)] = inst_48222);

(statearr_48316[(17)] = inst_48181);

return statearr_48316;
})();
var statearr_48318_48405 = state_48306__$1;
(statearr_48318_48405[(2)] = null);

(statearr_48318_48405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (39))){
var state_48306__$1 = state_48306;
var statearr_48323_48406 = state_48306__$1;
(statearr_48323_48406[(2)] = null);

(statearr_48323_48406[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (4))){
var inst_48170 = (state_48306[(12)]);
var inst_48170__$1 = (state_48306[(2)]);
var inst_48171 = (inst_48170__$1 == null);
var state_48306__$1 = (function (){var statearr_48324 = state_48306;
(statearr_48324[(12)] = inst_48170__$1);

return statearr_48324;
})();
if(cljs.core.truth_(inst_48171)){
var statearr_48325_48407 = state_48306__$1;
(statearr_48325_48407[(1)] = (5));

} else {
var statearr_48326_48408 = state_48306__$1;
(statearr_48326_48408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (15))){
var inst_48179 = (state_48306[(13)]);
var inst_48182 = (state_48306[(14)]);
var inst_48180 = (state_48306[(15)]);
var inst_48181 = (state_48306[(17)]);
var inst_48197 = (state_48306[(2)]);
var inst_48198 = (inst_48182 + (1));
var tmp48320 = inst_48179;
var tmp48321 = inst_48180;
var tmp48322 = inst_48181;
var inst_48179__$1 = tmp48320;
var inst_48180__$1 = tmp48321;
var inst_48181__$1 = tmp48322;
var inst_48182__$1 = inst_48198;
var state_48306__$1 = (function (){var statearr_48327 = state_48306;
(statearr_48327[(13)] = inst_48179__$1);

(statearr_48327[(14)] = inst_48182__$1);

(statearr_48327[(18)] = inst_48197);

(statearr_48327[(15)] = inst_48180__$1);

(statearr_48327[(17)] = inst_48181__$1);

return statearr_48327;
})();
var statearr_48328_48409 = state_48306__$1;
(statearr_48328_48409[(2)] = null);

(statearr_48328_48409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (21))){
var inst_48227 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48333_48410 = state_48306__$1;
(statearr_48333_48410[(2)] = inst_48227);

(statearr_48333_48410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (31))){
var inst_48253 = (state_48306[(10)]);
var inst_48257 = done.call(null,null);
var inst_48258 = cljs.core.async.untap_STAR_.call(null,m,inst_48253);
var state_48306__$1 = (function (){var statearr_48334 = state_48306;
(statearr_48334[(19)] = inst_48257);

return statearr_48334;
})();
var statearr_48335_48412 = state_48306__$1;
(statearr_48335_48412[(2)] = inst_48258);

(statearr_48335_48412[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (32))){
var inst_48247 = (state_48306[(20)]);
var inst_48246 = (state_48306[(9)]);
var inst_48245 = (state_48306[(21)]);
var inst_48248 = (state_48306[(11)]);
var inst_48260 = (state_48306[(2)]);
var inst_48261 = (inst_48248 + (1));
var tmp48330 = inst_48247;
var tmp48331 = inst_48246;
var tmp48332 = inst_48245;
var inst_48245__$1 = tmp48332;
var inst_48246__$1 = tmp48331;
var inst_48247__$1 = tmp48330;
var inst_48248__$1 = inst_48261;
var state_48306__$1 = (function (){var statearr_48336 = state_48306;
(statearr_48336[(22)] = inst_48260);

(statearr_48336[(20)] = inst_48247__$1);

(statearr_48336[(9)] = inst_48246__$1);

(statearr_48336[(21)] = inst_48245__$1);

(statearr_48336[(11)] = inst_48248__$1);

return statearr_48336;
})();
var statearr_48337_48415 = state_48306__$1;
(statearr_48337_48415[(2)] = null);

(statearr_48337_48415[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (40))){
var inst_48273 = (state_48306[(23)]);
var inst_48277 = done.call(null,null);
var inst_48278 = cljs.core.async.untap_STAR_.call(null,m,inst_48273);
var state_48306__$1 = (function (){var statearr_48338 = state_48306;
(statearr_48338[(24)] = inst_48277);

return statearr_48338;
})();
var statearr_48339_48417 = state_48306__$1;
(statearr_48339_48417[(2)] = inst_48278);

(statearr_48339_48417[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (33))){
var inst_48264 = (state_48306[(25)]);
var inst_48266 = cljs.core.chunked_seq_QMARK_.call(null,inst_48264);
var state_48306__$1 = state_48306;
if(inst_48266){
var statearr_48340_48418 = state_48306__$1;
(statearr_48340_48418[(1)] = (36));

} else {
var statearr_48341_48419 = state_48306__$1;
(statearr_48341_48419[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (13))){
var inst_48191 = (state_48306[(26)]);
var inst_48194 = cljs.core.async.close_BANG_.call(null,inst_48191);
var state_48306__$1 = state_48306;
var statearr_48342_48420 = state_48306__$1;
(statearr_48342_48420[(2)] = inst_48194);

(statearr_48342_48420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (22))){
var inst_48214 = (state_48306[(8)]);
var inst_48219 = cljs.core.async.close_BANG_.call(null,inst_48214);
var state_48306__$1 = state_48306;
var statearr_48343_48421 = state_48306__$1;
(statearr_48343_48421[(2)] = inst_48219);

(statearr_48343_48421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (36))){
var inst_48264 = (state_48306[(25)]);
var inst_48268 = cljs.core.chunk_first.call(null,inst_48264);
var inst_48269 = cljs.core.chunk_rest.call(null,inst_48264);
var inst_48270 = cljs.core.count.call(null,inst_48268);
var inst_48245 = inst_48269;
var inst_48246 = inst_48268;
var inst_48247 = inst_48270;
var inst_48248 = (0);
var state_48306__$1 = (function (){var statearr_48344 = state_48306;
(statearr_48344[(20)] = inst_48247);

(statearr_48344[(9)] = inst_48246);

(statearr_48344[(21)] = inst_48245);

(statearr_48344[(11)] = inst_48248);

return statearr_48344;
})();
var statearr_48345_48422 = state_48306__$1;
(statearr_48345_48422[(2)] = null);

(statearr_48345_48422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (41))){
var inst_48264 = (state_48306[(25)]);
var inst_48280 = (state_48306[(2)]);
var inst_48281 = cljs.core.next.call(null,inst_48264);
var inst_48245 = inst_48281;
var inst_48246 = null;
var inst_48247 = (0);
var inst_48248 = (0);
var state_48306__$1 = (function (){var statearr_48346 = state_48306;
(statearr_48346[(20)] = inst_48247);

(statearr_48346[(27)] = inst_48280);

(statearr_48346[(9)] = inst_48246);

(statearr_48346[(21)] = inst_48245);

(statearr_48346[(11)] = inst_48248);

return statearr_48346;
})();
var statearr_48347_48426 = state_48306__$1;
(statearr_48347_48426[(2)] = null);

(statearr_48347_48426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (43))){
var state_48306__$1 = state_48306;
var statearr_48348_48427 = state_48306__$1;
(statearr_48348_48427[(2)] = null);

(statearr_48348_48427[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (29))){
var inst_48289 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48349_48428 = state_48306__$1;
(statearr_48349_48428[(2)] = inst_48289);

(statearr_48349_48428[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (44))){
var inst_48298 = (state_48306[(2)]);
var state_48306__$1 = (function (){var statearr_48350 = state_48306;
(statearr_48350[(28)] = inst_48298);

return statearr_48350;
})();
var statearr_48351_48429 = state_48306__$1;
(statearr_48351_48429[(2)] = null);

(statearr_48351_48429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (6))){
var inst_48237 = (state_48306[(29)]);
var inst_48236 = cljs.core.deref.call(null,cs);
var inst_48237__$1 = cljs.core.keys.call(null,inst_48236);
var inst_48238 = cljs.core.count.call(null,inst_48237__$1);
var inst_48239 = cljs.core.reset_BANG_.call(null,dctr,inst_48238);
var inst_48244 = cljs.core.seq.call(null,inst_48237__$1);
var inst_48245 = inst_48244;
var inst_48246 = null;
var inst_48247 = (0);
var inst_48248 = (0);
var state_48306__$1 = (function (){var statearr_48352 = state_48306;
(statearr_48352[(20)] = inst_48247);

(statearr_48352[(9)] = inst_48246);

(statearr_48352[(21)] = inst_48245);

(statearr_48352[(30)] = inst_48239);

(statearr_48352[(29)] = inst_48237__$1);

(statearr_48352[(11)] = inst_48248);

return statearr_48352;
})();
var statearr_48353_48433 = state_48306__$1;
(statearr_48353_48433[(2)] = null);

(statearr_48353_48433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (28))){
var inst_48264 = (state_48306[(25)]);
var inst_48245 = (state_48306[(21)]);
var inst_48264__$1 = cljs.core.seq.call(null,inst_48245);
var state_48306__$1 = (function (){var statearr_48354 = state_48306;
(statearr_48354[(25)] = inst_48264__$1);

return statearr_48354;
})();
if(inst_48264__$1){
var statearr_48355_48436 = state_48306__$1;
(statearr_48355_48436[(1)] = (33));

} else {
var statearr_48356_48438 = state_48306__$1;
(statearr_48356_48438[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (25))){
var inst_48247 = (state_48306[(20)]);
var inst_48248 = (state_48306[(11)]);
var inst_48250 = (inst_48248 < inst_48247);
var inst_48251 = inst_48250;
var state_48306__$1 = state_48306;
if(cljs.core.truth_(inst_48251)){
var statearr_48357_48441 = state_48306__$1;
(statearr_48357_48441[(1)] = (27));

} else {
var statearr_48358_48443 = state_48306__$1;
(statearr_48358_48443[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (34))){
var state_48306__$1 = state_48306;
var statearr_48359_48445 = state_48306__$1;
(statearr_48359_48445[(2)] = null);

(statearr_48359_48445[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (17))){
var state_48306__$1 = state_48306;
var statearr_48360_48446 = state_48306__$1;
(statearr_48360_48446[(2)] = null);

(statearr_48360_48446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (3))){
var inst_48303 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48306__$1,inst_48303);
} else {
if((state_val_48307 === (12))){
var inst_48232 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48361_48447 = state_48306__$1;
(statearr_48361_48447[(2)] = inst_48232);

(statearr_48361_48447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (2))){
var state_48306__$1 = state_48306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48306__$1,(4),ch);
} else {
if((state_val_48307 === (23))){
var state_48306__$1 = state_48306;
var statearr_48362_48448 = state_48306__$1;
(statearr_48362_48448[(2)] = null);

(statearr_48362_48448[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (35))){
var inst_48287 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48363_48451 = state_48306__$1;
(statearr_48363_48451[(2)] = inst_48287);

(statearr_48363_48451[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (19))){
var inst_48201 = (state_48306[(7)]);
var inst_48205 = cljs.core.chunk_first.call(null,inst_48201);
var inst_48206 = cljs.core.chunk_rest.call(null,inst_48201);
var inst_48207 = cljs.core.count.call(null,inst_48205);
var inst_48179 = inst_48206;
var inst_48180 = inst_48205;
var inst_48181 = inst_48207;
var inst_48182 = (0);
var state_48306__$1 = (function (){var statearr_48364 = state_48306;
(statearr_48364[(13)] = inst_48179);

(statearr_48364[(14)] = inst_48182);

(statearr_48364[(15)] = inst_48180);

(statearr_48364[(17)] = inst_48181);

return statearr_48364;
})();
var statearr_48365_48453 = state_48306__$1;
(statearr_48365_48453[(2)] = null);

(statearr_48365_48453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (11))){
var inst_48179 = (state_48306[(13)]);
var inst_48201 = (state_48306[(7)]);
var inst_48201__$1 = cljs.core.seq.call(null,inst_48179);
var state_48306__$1 = (function (){var statearr_48366 = state_48306;
(statearr_48366[(7)] = inst_48201__$1);

return statearr_48366;
})();
if(inst_48201__$1){
var statearr_48367_48455 = state_48306__$1;
(statearr_48367_48455[(1)] = (16));

} else {
var statearr_48368_48456 = state_48306__$1;
(statearr_48368_48456[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (9))){
var inst_48234 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48369_48457 = state_48306__$1;
(statearr_48369_48457[(2)] = inst_48234);

(statearr_48369_48457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (5))){
var inst_48177 = cljs.core.deref.call(null,cs);
var inst_48178 = cljs.core.seq.call(null,inst_48177);
var inst_48179 = inst_48178;
var inst_48180 = null;
var inst_48181 = (0);
var inst_48182 = (0);
var state_48306__$1 = (function (){var statearr_48370 = state_48306;
(statearr_48370[(13)] = inst_48179);

(statearr_48370[(14)] = inst_48182);

(statearr_48370[(15)] = inst_48180);

(statearr_48370[(17)] = inst_48181);

return statearr_48370;
})();
var statearr_48371_48460 = state_48306__$1;
(statearr_48371_48460[(2)] = null);

(statearr_48371_48460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (14))){
var state_48306__$1 = state_48306;
var statearr_48372_48461 = state_48306__$1;
(statearr_48372_48461[(2)] = null);

(statearr_48372_48461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (45))){
var inst_48295 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48373_48462 = state_48306__$1;
(statearr_48373_48462[(2)] = inst_48295);

(statearr_48373_48462[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (26))){
var inst_48237 = (state_48306[(29)]);
var inst_48291 = (state_48306[(2)]);
var inst_48292 = cljs.core.seq.call(null,inst_48237);
var state_48306__$1 = (function (){var statearr_48374 = state_48306;
(statearr_48374[(31)] = inst_48291);

return statearr_48374;
})();
if(inst_48292){
var statearr_48375_48464 = state_48306__$1;
(statearr_48375_48464[(1)] = (42));

} else {
var statearr_48376_48465 = state_48306__$1;
(statearr_48376_48465[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (16))){
var inst_48201 = (state_48306[(7)]);
var inst_48203 = cljs.core.chunked_seq_QMARK_.call(null,inst_48201);
var state_48306__$1 = state_48306;
if(inst_48203){
var statearr_48377_48467 = state_48306__$1;
(statearr_48377_48467[(1)] = (19));

} else {
var statearr_48378_48468 = state_48306__$1;
(statearr_48378_48468[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (38))){
var inst_48284 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48379_48470 = state_48306__$1;
(statearr_48379_48470[(2)] = inst_48284);

(statearr_48379_48470[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (30))){
var state_48306__$1 = state_48306;
var statearr_48380_48471 = state_48306__$1;
(statearr_48380_48471[(2)] = null);

(statearr_48380_48471[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (10))){
var inst_48182 = (state_48306[(14)]);
var inst_48180 = (state_48306[(15)]);
var inst_48190 = cljs.core._nth.call(null,inst_48180,inst_48182);
var inst_48191 = cljs.core.nth.call(null,inst_48190,(0),null);
var inst_48192 = cljs.core.nth.call(null,inst_48190,(1),null);
var state_48306__$1 = (function (){var statearr_48381 = state_48306;
(statearr_48381[(26)] = inst_48191);

return statearr_48381;
})();
if(cljs.core.truth_(inst_48192)){
var statearr_48382_48472 = state_48306__$1;
(statearr_48382_48472[(1)] = (13));

} else {
var statearr_48383_48473 = state_48306__$1;
(statearr_48383_48473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (18))){
var inst_48230 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48384_48476 = state_48306__$1;
(statearr_48384_48476[(2)] = inst_48230);

(statearr_48384_48476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (42))){
var state_48306__$1 = state_48306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48306__$1,(45),dchan);
} else {
if((state_val_48307 === (37))){
var inst_48264 = (state_48306[(25)]);
var inst_48273 = (state_48306[(23)]);
var inst_48170 = (state_48306[(12)]);
var inst_48273__$1 = cljs.core.first.call(null,inst_48264);
var inst_48274 = cljs.core.async.put_BANG_.call(null,inst_48273__$1,inst_48170,done);
var state_48306__$1 = (function (){var statearr_48385 = state_48306;
(statearr_48385[(23)] = inst_48273__$1);

return statearr_48385;
})();
if(cljs.core.truth_(inst_48274)){
var statearr_48386_48478 = state_48306__$1;
(statearr_48386_48478[(1)] = (39));

} else {
var statearr_48387_48481 = state_48306__$1;
(statearr_48387_48481[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (8))){
var inst_48182 = (state_48306[(14)]);
var inst_48181 = (state_48306[(17)]);
var inst_48184 = (inst_48182 < inst_48181);
var inst_48185 = inst_48184;
var state_48306__$1 = state_48306;
if(cljs.core.truth_(inst_48185)){
var statearr_48388_48482 = state_48306__$1;
(statearr_48388_48482[(1)] = (10));

} else {
var statearr_48389_48483 = state_48306__$1;
(statearr_48389_48483[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___48394,cs,m,dchan,dctr,done))
;
return ((function (switch__33607__auto__,c__33952__auto___48394,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33608__auto__ = null;
var cljs$core$async$mult_$_state_machine__33608__auto____0 = (function (){
var statearr_48390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48390[(0)] = cljs$core$async$mult_$_state_machine__33608__auto__);

(statearr_48390[(1)] = (1));

return statearr_48390;
});
var cljs$core$async$mult_$_state_machine__33608__auto____1 = (function (state_48306){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_48306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e48391){if((e48391 instanceof Object)){
var ex__33611__auto__ = e48391;
var statearr_48392_48484 = state_48306;
(statearr_48392_48484[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48485 = state_48306;
state_48306 = G__48485;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33608__auto__ = function(state_48306){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33608__auto____1.call(this,state_48306);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33608__auto____0;
cljs$core$async$mult_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33608__auto____1;
return cljs$core$async$mult_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___48394,cs,m,dchan,dctr,done))
})();
var state__33954__auto__ = (function (){var statearr_48393 = f__33953__auto__.call(null);
(statearr_48393[(6)] = c__33952__auto___48394);

return statearr_48393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___48394,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48487 = arguments.length;
switch (G__48487) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30805__auto__ = (((m == null))?null:m);
var m__30806__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,m,ch);
} else {
var m__30806__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30805__auto__ = (((m == null))?null:m);
var m__30806__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,m,ch);
} else {
var m__30806__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30805__auto__ = (((m == null))?null:m);
var m__30806__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,m);
} else {
var m__30806__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30805__auto__ = (((m == null))?null:m);
var m__30806__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,m,state_map);
} else {
var m__30806__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30805__auto__ = (((m == null))?null:m);
var m__30806__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,m,mode);
} else {
var m__30806__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___48529 = arguments.length;
var i__31350__auto___48530 = (0);
while(true){
if((i__31350__auto___48530 < len__31349__auto___48529)){
args__31356__auto__.push((arguments[i__31350__auto___48530]));

var G__48531 = (i__31350__auto___48530 + (1));
i__31350__auto___48530 = G__48531;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((3) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48520){
var map__48521 = p__48520;
var map__48521__$1 = ((((!((map__48521 == null)))?((((map__48521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48521):map__48521);
var opts = map__48521__$1;
var statearr_48523_48532 = state;
(statearr_48523_48532[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__48521,map__48521__$1,opts){
return (function (val){
var statearr_48525_48534 = state;
(statearr_48525_48534[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48521,map__48521__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_48527_48536 = state;
(statearr_48527_48536[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48514){
var G__48515 = cljs.core.first.call(null,seq48514);
var seq48514__$1 = cljs.core.next.call(null,seq48514);
var G__48516 = cljs.core.first.call(null,seq48514__$1);
var seq48514__$2 = cljs.core.next.call(null,seq48514__$1);
var G__48517 = cljs.core.first.call(null,seq48514__$2);
var seq48514__$3 = cljs.core.next.call(null,seq48514__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48515,G__48516,G__48517,seq48514__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48543 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta48544){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta48544 = meta48544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48545,meta48544__$1){
var self__ = this;
var _48545__$1 = this;
return (new cljs.core.async.t_cljs$core$async48543(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta48544__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48545){
var self__ = this;
var _48545__$1 = this;
return self__.meta48544;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48543.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48543.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48543.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48543.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48543.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48543.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48543.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48543.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48543.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta48544","meta48544",-963045844,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48543";

cljs.core.async.t_cljs$core$async48543.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async48543");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48543 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48543(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48544){
return (new cljs.core.async.t_cljs$core$async48543(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48544));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48543(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33952__auto___48749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___48749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___48749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48648){
var state_val_48649 = (state_48648[(1)]);
if((state_val_48649 === (7))){
var inst_48563 = (state_48648[(2)]);
var state_48648__$1 = state_48648;
var statearr_48651_48755 = state_48648__$1;
(statearr_48651_48755[(2)] = inst_48563);

(statearr_48651_48755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (20))){
var inst_48575 = (state_48648[(7)]);
var state_48648__$1 = state_48648;
var statearr_48652_48756 = state_48648__$1;
(statearr_48652_48756[(2)] = inst_48575);

(statearr_48652_48756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (27))){
var state_48648__$1 = state_48648;
var statearr_48653_48757 = state_48648__$1;
(statearr_48653_48757[(2)] = null);

(statearr_48653_48757[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (1))){
var inst_48550 = (state_48648[(8)]);
var inst_48550__$1 = calc_state.call(null);
var inst_48552 = (inst_48550__$1 == null);
var inst_48553 = cljs.core.not.call(null,inst_48552);
var state_48648__$1 = (function (){var statearr_48654 = state_48648;
(statearr_48654[(8)] = inst_48550__$1);

return statearr_48654;
})();
if(inst_48553){
var statearr_48655_48758 = state_48648__$1;
(statearr_48655_48758[(1)] = (2));

} else {
var statearr_48656_48759 = state_48648__$1;
(statearr_48656_48759[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (24))){
var inst_48599 = (state_48648[(9)]);
var inst_48622 = (state_48648[(10)]);
var inst_48608 = (state_48648[(11)]);
var inst_48622__$1 = inst_48599.call(null,inst_48608);
var state_48648__$1 = (function (){var statearr_48657 = state_48648;
(statearr_48657[(10)] = inst_48622__$1);

return statearr_48657;
})();
if(cljs.core.truth_(inst_48622__$1)){
var statearr_48658_48764 = state_48648__$1;
(statearr_48658_48764[(1)] = (29));

} else {
var statearr_48659_48766 = state_48648__$1;
(statearr_48659_48766[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (4))){
var inst_48566 = (state_48648[(2)]);
var state_48648__$1 = state_48648;
if(cljs.core.truth_(inst_48566)){
var statearr_48660_48767 = state_48648__$1;
(statearr_48660_48767[(1)] = (8));

} else {
var statearr_48661_48768 = state_48648__$1;
(statearr_48661_48768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (15))){
var inst_48593 = (state_48648[(2)]);
var state_48648__$1 = state_48648;
if(cljs.core.truth_(inst_48593)){
var statearr_48662_48771 = state_48648__$1;
(statearr_48662_48771[(1)] = (19));

} else {
var statearr_48663_48773 = state_48648__$1;
(statearr_48663_48773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (21))){
var inst_48598 = (state_48648[(12)]);
var inst_48598__$1 = (state_48648[(2)]);
var inst_48599 = cljs.core.get.call(null,inst_48598__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48600 = cljs.core.get.call(null,inst_48598__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48601 = cljs.core.get.call(null,inst_48598__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48648__$1 = (function (){var statearr_48664 = state_48648;
(statearr_48664[(13)] = inst_48600);

(statearr_48664[(9)] = inst_48599);

(statearr_48664[(12)] = inst_48598__$1);

return statearr_48664;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48648__$1,(22),inst_48601);
} else {
if((state_val_48649 === (31))){
var inst_48630 = (state_48648[(2)]);
var state_48648__$1 = state_48648;
if(cljs.core.truth_(inst_48630)){
var statearr_48665_48777 = state_48648__$1;
(statearr_48665_48777[(1)] = (32));

} else {
var statearr_48667_48778 = state_48648__$1;
(statearr_48667_48778[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (32))){
var inst_48607 = (state_48648[(14)]);
var state_48648__$1 = state_48648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48648__$1,(35),out,inst_48607);
} else {
if((state_val_48649 === (33))){
var inst_48598 = (state_48648[(12)]);
var inst_48575 = inst_48598;
var state_48648__$1 = (function (){var statearr_48668 = state_48648;
(statearr_48668[(7)] = inst_48575);

return statearr_48668;
})();
var statearr_48669_48779 = state_48648__$1;
(statearr_48669_48779[(2)] = null);

(statearr_48669_48779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (13))){
var inst_48575 = (state_48648[(7)]);
var inst_48582 = inst_48575.cljs$lang$protocol_mask$partition0$;
var inst_48583 = (inst_48582 & (64));
var inst_48584 = inst_48575.cljs$core$ISeq$;
var inst_48585 = (cljs.core.PROTOCOL_SENTINEL === inst_48584);
var inst_48586 = (inst_48583) || (inst_48585);
var state_48648__$1 = state_48648;
if(cljs.core.truth_(inst_48586)){
var statearr_48670_48785 = state_48648__$1;
(statearr_48670_48785[(1)] = (16));

} else {
var statearr_48672_48786 = state_48648__$1;
(statearr_48672_48786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (22))){
var inst_48607 = (state_48648[(14)]);
var inst_48608 = (state_48648[(11)]);
var inst_48606 = (state_48648[(2)]);
var inst_48607__$1 = cljs.core.nth.call(null,inst_48606,(0),null);
var inst_48608__$1 = cljs.core.nth.call(null,inst_48606,(1),null);
var inst_48609 = (inst_48607__$1 == null);
var inst_48610 = cljs.core._EQ_.call(null,inst_48608__$1,change);
var inst_48611 = (inst_48609) || (inst_48610);
var state_48648__$1 = (function (){var statearr_48673 = state_48648;
(statearr_48673[(14)] = inst_48607__$1);

(statearr_48673[(11)] = inst_48608__$1);

return statearr_48673;
})();
if(cljs.core.truth_(inst_48611)){
var statearr_48674_48787 = state_48648__$1;
(statearr_48674_48787[(1)] = (23));

} else {
var statearr_48675_48788 = state_48648__$1;
(statearr_48675_48788[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (36))){
var inst_48598 = (state_48648[(12)]);
var inst_48575 = inst_48598;
var state_48648__$1 = (function (){var statearr_48678 = state_48648;
(statearr_48678[(7)] = inst_48575);

return statearr_48678;
})();
var statearr_48679_48789 = state_48648__$1;
(statearr_48679_48789[(2)] = null);

(statearr_48679_48789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (29))){
var inst_48622 = (state_48648[(10)]);
var state_48648__$1 = state_48648;
var statearr_48680_48790 = state_48648__$1;
(statearr_48680_48790[(2)] = inst_48622);

(statearr_48680_48790[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (6))){
var state_48648__$1 = state_48648;
var statearr_48682_48791 = state_48648__$1;
(statearr_48682_48791[(2)] = false);

(statearr_48682_48791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (28))){
var inst_48618 = (state_48648[(2)]);
var inst_48619 = calc_state.call(null);
var inst_48575 = inst_48619;
var state_48648__$1 = (function (){var statearr_48683 = state_48648;
(statearr_48683[(7)] = inst_48575);

(statearr_48683[(15)] = inst_48618);

return statearr_48683;
})();
var statearr_48684_48792 = state_48648__$1;
(statearr_48684_48792[(2)] = null);

(statearr_48684_48792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (25))){
var inst_48644 = (state_48648[(2)]);
var state_48648__$1 = state_48648;
var statearr_48685_48793 = state_48648__$1;
(statearr_48685_48793[(2)] = inst_48644);

(statearr_48685_48793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (34))){
var inst_48642 = (state_48648[(2)]);
var state_48648__$1 = state_48648;
var statearr_48688_48800 = state_48648__$1;
(statearr_48688_48800[(2)] = inst_48642);

(statearr_48688_48800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (17))){
var state_48648__$1 = state_48648;
var statearr_48689_48801 = state_48648__$1;
(statearr_48689_48801[(2)] = false);

(statearr_48689_48801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (3))){
var state_48648__$1 = state_48648;
var statearr_48690_48805 = state_48648__$1;
(statearr_48690_48805[(2)] = false);

(statearr_48690_48805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (12))){
var inst_48646 = (state_48648[(2)]);
var state_48648__$1 = state_48648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48648__$1,inst_48646);
} else {
if((state_val_48649 === (2))){
var inst_48550 = (state_48648[(8)]);
var inst_48555 = inst_48550.cljs$lang$protocol_mask$partition0$;
var inst_48556 = (inst_48555 & (64));
var inst_48557 = inst_48550.cljs$core$ISeq$;
var inst_48558 = (cljs.core.PROTOCOL_SENTINEL === inst_48557);
var inst_48559 = (inst_48556) || (inst_48558);
var state_48648__$1 = state_48648;
if(cljs.core.truth_(inst_48559)){
var statearr_48694_48806 = state_48648__$1;
(statearr_48694_48806[(1)] = (5));

} else {
var statearr_48695_48807 = state_48648__$1;
(statearr_48695_48807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (23))){
var inst_48607 = (state_48648[(14)]);
var inst_48613 = (inst_48607 == null);
var state_48648__$1 = state_48648;
if(cljs.core.truth_(inst_48613)){
var statearr_48696_48808 = state_48648__$1;
(statearr_48696_48808[(1)] = (26));

} else {
var statearr_48697_48809 = state_48648__$1;
(statearr_48697_48809[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (35))){
var inst_48633 = (state_48648[(2)]);
var state_48648__$1 = state_48648;
if(cljs.core.truth_(inst_48633)){
var statearr_48699_48811 = state_48648__$1;
(statearr_48699_48811[(1)] = (36));

} else {
var statearr_48700_48812 = state_48648__$1;
(statearr_48700_48812[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (19))){
var inst_48575 = (state_48648[(7)]);
var inst_48595 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48575);
var state_48648__$1 = state_48648;
var statearr_48704_48813 = state_48648__$1;
(statearr_48704_48813[(2)] = inst_48595);

(statearr_48704_48813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (11))){
var inst_48575 = (state_48648[(7)]);
var inst_48579 = (inst_48575 == null);
var inst_48580 = cljs.core.not.call(null,inst_48579);
var state_48648__$1 = state_48648;
if(inst_48580){
var statearr_48706_48815 = state_48648__$1;
(statearr_48706_48815[(1)] = (13));

} else {
var statearr_48707_48816 = state_48648__$1;
(statearr_48707_48816[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (9))){
var inst_48550 = (state_48648[(8)]);
var state_48648__$1 = state_48648;
var statearr_48708_48817 = state_48648__$1;
(statearr_48708_48817[(2)] = inst_48550);

(statearr_48708_48817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (5))){
var state_48648__$1 = state_48648;
var statearr_48710_48818 = state_48648__$1;
(statearr_48710_48818[(2)] = true);

(statearr_48710_48818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (14))){
var state_48648__$1 = state_48648;
var statearr_48711_48819 = state_48648__$1;
(statearr_48711_48819[(2)] = false);

(statearr_48711_48819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (26))){
var inst_48608 = (state_48648[(11)]);
var inst_48615 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48608);
var state_48648__$1 = state_48648;
var statearr_48713_48820 = state_48648__$1;
(statearr_48713_48820[(2)] = inst_48615);

(statearr_48713_48820[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (16))){
var state_48648__$1 = state_48648;
var statearr_48714_48821 = state_48648__$1;
(statearr_48714_48821[(2)] = true);

(statearr_48714_48821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (38))){
var inst_48638 = (state_48648[(2)]);
var state_48648__$1 = state_48648;
var statearr_48715_48822 = state_48648__$1;
(statearr_48715_48822[(2)] = inst_48638);

(statearr_48715_48822[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (30))){
var inst_48600 = (state_48648[(13)]);
var inst_48599 = (state_48648[(9)]);
var inst_48608 = (state_48648[(11)]);
var inst_48625 = cljs.core.empty_QMARK_.call(null,inst_48599);
var inst_48626 = inst_48600.call(null,inst_48608);
var inst_48627 = cljs.core.not.call(null,inst_48626);
var inst_48628 = (inst_48625) && (inst_48627);
var state_48648__$1 = state_48648;
var statearr_48719_48823 = state_48648__$1;
(statearr_48719_48823[(2)] = inst_48628);

(statearr_48719_48823[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (10))){
var inst_48550 = (state_48648[(8)]);
var inst_48571 = (state_48648[(2)]);
var inst_48572 = cljs.core.get.call(null,inst_48571,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48573 = cljs.core.get.call(null,inst_48571,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48574 = cljs.core.get.call(null,inst_48571,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48575 = inst_48550;
var state_48648__$1 = (function (){var statearr_48720 = state_48648;
(statearr_48720[(7)] = inst_48575);

(statearr_48720[(16)] = inst_48573);

(statearr_48720[(17)] = inst_48572);

(statearr_48720[(18)] = inst_48574);

return statearr_48720;
})();
var statearr_48721_48828 = state_48648__$1;
(statearr_48721_48828[(2)] = null);

(statearr_48721_48828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (18))){
var inst_48590 = (state_48648[(2)]);
var state_48648__$1 = state_48648;
var statearr_48722_48830 = state_48648__$1;
(statearr_48722_48830[(2)] = inst_48590);

(statearr_48722_48830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (37))){
var state_48648__$1 = state_48648;
var statearr_48723_48831 = state_48648__$1;
(statearr_48723_48831[(2)] = null);

(statearr_48723_48831[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48649 === (8))){
var inst_48550 = (state_48648[(8)]);
var inst_48568 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48550);
var state_48648__$1 = state_48648;
var statearr_48724_48832 = state_48648__$1;
(statearr_48724_48832[(2)] = inst_48568);

(statearr_48724_48832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___48749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33607__auto__,c__33952__auto___48749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33608__auto__ = null;
var cljs$core$async$mix_$_state_machine__33608__auto____0 = (function (){
var statearr_48727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48727[(0)] = cljs$core$async$mix_$_state_machine__33608__auto__);

(statearr_48727[(1)] = (1));

return statearr_48727;
});
var cljs$core$async$mix_$_state_machine__33608__auto____1 = (function (state_48648){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_48648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e48728){if((e48728 instanceof Object)){
var ex__33611__auto__ = e48728;
var statearr_48729_48833 = state_48648;
(statearr_48729_48833[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48834 = state_48648;
state_48648 = G__48834;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33608__auto__ = function(state_48648){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33608__auto____1.call(this,state_48648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33608__auto____0;
cljs$core$async$mix_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33608__auto____1;
return cljs$core$async$mix_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___48749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33954__auto__ = (function (){var statearr_48730 = f__33953__auto__.call(null);
(statearr_48730[(6)] = c__33952__auto___48749);

return statearr_48730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___48749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30805__auto__ = (((p == null))?null:p);
var m__30806__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30806__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30805__auto__ = (((p == null))?null:p);
var m__30806__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,p,v,ch);
} else {
var m__30806__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48845 = arguments.length;
switch (G__48845) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30805__auto__ = (((p == null))?null:p);
var m__30806__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,p);
} else {
var m__30806__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30805__auto__ = (((p == null))?null:p);
var m__30806__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,p,v);
} else {
var m__30806__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48862 = arguments.length;
switch (G__48862) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30072__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30072__auto__,mults){
return (function (p1__48860_SHARP_){
if(cljs.core.truth_(p1__48860_SHARP_.call(null,topic))){
return p1__48860_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48860_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30072__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48873 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48874){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48874 = meta48874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48875,meta48874__$1){
var self__ = this;
var _48875__$1 = this;
return (new cljs.core.async.t_cljs$core$async48873(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48874__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48875){
var self__ = this;
var _48875__$1 = this;
return self__.meta48874;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48873.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48873.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48873.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48873.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48874","meta48874",-599130365,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48873";

cljs.core.async.t_cljs$core$async48873.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async48873");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48873 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48873(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48874){
return (new cljs.core.async.t_cljs$core$async48873(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48874));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48873(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33952__auto___49077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___49077,mults,ensure_mult,p){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___49077,mults,ensure_mult,p){
return (function (state_48989){
var state_val_48990 = (state_48989[(1)]);
if((state_val_48990 === (7))){
var inst_48981 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
var statearr_48997_49078 = state_48989__$1;
(statearr_48997_49078[(2)] = inst_48981);

(statearr_48997_49078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (20))){
var state_48989__$1 = state_48989;
var statearr_49002_49079 = state_48989__$1;
(statearr_49002_49079[(2)] = null);

(statearr_49002_49079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (1))){
var state_48989__$1 = state_48989;
var statearr_49006_49080 = state_48989__$1;
(statearr_49006_49080[(2)] = null);

(statearr_49006_49080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (24))){
var inst_48964 = (state_48989[(7)]);
var inst_48973 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48964);
var state_48989__$1 = state_48989;
var statearr_49007_49081 = state_48989__$1;
(statearr_49007_49081[(2)] = inst_48973);

(statearr_49007_49081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (4))){
var inst_48909 = (state_48989[(8)]);
var inst_48909__$1 = (state_48989[(2)]);
var inst_48910 = (inst_48909__$1 == null);
var state_48989__$1 = (function (){var statearr_49012 = state_48989;
(statearr_49012[(8)] = inst_48909__$1);

return statearr_49012;
})();
if(cljs.core.truth_(inst_48910)){
var statearr_49013_49082 = state_48989__$1;
(statearr_49013_49082[(1)] = (5));

} else {
var statearr_49014_49083 = state_48989__$1;
(statearr_49014_49083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (15))){
var inst_48958 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
var statearr_49015_49084 = state_48989__$1;
(statearr_49015_49084[(2)] = inst_48958);

(statearr_49015_49084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (21))){
var inst_48978 = (state_48989[(2)]);
var state_48989__$1 = (function (){var statearr_49016 = state_48989;
(statearr_49016[(9)] = inst_48978);

return statearr_49016;
})();
var statearr_49017_49085 = state_48989__$1;
(statearr_49017_49085[(2)] = null);

(statearr_49017_49085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (13))){
var inst_48937 = (state_48989[(10)]);
var inst_48942 = cljs.core.chunked_seq_QMARK_.call(null,inst_48937);
var state_48989__$1 = state_48989;
if(inst_48942){
var statearr_49018_49086 = state_48989__$1;
(statearr_49018_49086[(1)] = (16));

} else {
var statearr_49019_49087 = state_48989__$1;
(statearr_49019_49087[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (22))){
var inst_48970 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
if(cljs.core.truth_(inst_48970)){
var statearr_49021_49088 = state_48989__$1;
(statearr_49021_49088[(1)] = (23));

} else {
var statearr_49022_49089 = state_48989__$1;
(statearr_49022_49089[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (6))){
var inst_48966 = (state_48989[(11)]);
var inst_48909 = (state_48989[(8)]);
var inst_48964 = (state_48989[(7)]);
var inst_48964__$1 = topic_fn.call(null,inst_48909);
var inst_48965 = cljs.core.deref.call(null,mults);
var inst_48966__$1 = cljs.core.get.call(null,inst_48965,inst_48964__$1);
var state_48989__$1 = (function (){var statearr_49023 = state_48989;
(statearr_49023[(11)] = inst_48966__$1);

(statearr_49023[(7)] = inst_48964__$1);

return statearr_49023;
})();
if(cljs.core.truth_(inst_48966__$1)){
var statearr_49024_49090 = state_48989__$1;
(statearr_49024_49090[(1)] = (19));

} else {
var statearr_49025_49091 = state_48989__$1;
(statearr_49025_49091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (25))){
var inst_48975 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
var statearr_49027_49092 = state_48989__$1;
(statearr_49027_49092[(2)] = inst_48975);

(statearr_49027_49092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (17))){
var inst_48937 = (state_48989[(10)]);
var inst_48949 = cljs.core.first.call(null,inst_48937);
var inst_48950 = cljs.core.async.muxch_STAR_.call(null,inst_48949);
var inst_48951 = cljs.core.async.close_BANG_.call(null,inst_48950);
var inst_48952 = cljs.core.next.call(null,inst_48937);
var inst_48919 = inst_48952;
var inst_48920 = null;
var inst_48921 = (0);
var inst_48922 = (0);
var state_48989__$1 = (function (){var statearr_49029 = state_48989;
(statearr_49029[(12)] = inst_48951);

(statearr_49029[(13)] = inst_48921);

(statearr_49029[(14)] = inst_48919);

(statearr_49029[(15)] = inst_48922);

(statearr_49029[(16)] = inst_48920);

return statearr_49029;
})();
var statearr_49030_49093 = state_48989__$1;
(statearr_49030_49093[(2)] = null);

(statearr_49030_49093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (3))){
var inst_48983 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48989__$1,inst_48983);
} else {
if((state_val_48990 === (12))){
var inst_48960 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
var statearr_49032_49094 = state_48989__$1;
(statearr_49032_49094[(2)] = inst_48960);

(statearr_49032_49094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (2))){
var state_48989__$1 = state_48989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48989__$1,(4),ch);
} else {
if((state_val_48990 === (23))){
var state_48989__$1 = state_48989;
var statearr_49036_49098 = state_48989__$1;
(statearr_49036_49098[(2)] = null);

(statearr_49036_49098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (19))){
var inst_48966 = (state_48989[(11)]);
var inst_48909 = (state_48989[(8)]);
var inst_48968 = cljs.core.async.muxch_STAR_.call(null,inst_48966);
var state_48989__$1 = state_48989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48989__$1,(22),inst_48968,inst_48909);
} else {
if((state_val_48990 === (11))){
var inst_48919 = (state_48989[(14)]);
var inst_48937 = (state_48989[(10)]);
var inst_48937__$1 = cljs.core.seq.call(null,inst_48919);
var state_48989__$1 = (function (){var statearr_49037 = state_48989;
(statearr_49037[(10)] = inst_48937__$1);

return statearr_49037;
})();
if(inst_48937__$1){
var statearr_49038_49103 = state_48989__$1;
(statearr_49038_49103[(1)] = (13));

} else {
var statearr_49039_49105 = state_48989__$1;
(statearr_49039_49105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (9))){
var inst_48962 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
var statearr_49041_49106 = state_48989__$1;
(statearr_49041_49106[(2)] = inst_48962);

(statearr_49041_49106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (5))){
var inst_48916 = cljs.core.deref.call(null,mults);
var inst_48917 = cljs.core.vals.call(null,inst_48916);
var inst_48918 = cljs.core.seq.call(null,inst_48917);
var inst_48919 = inst_48918;
var inst_48920 = null;
var inst_48921 = (0);
var inst_48922 = (0);
var state_48989__$1 = (function (){var statearr_49043 = state_48989;
(statearr_49043[(13)] = inst_48921);

(statearr_49043[(14)] = inst_48919);

(statearr_49043[(15)] = inst_48922);

(statearr_49043[(16)] = inst_48920);

return statearr_49043;
})();
var statearr_49044_49108 = state_48989__$1;
(statearr_49044_49108[(2)] = null);

(statearr_49044_49108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (14))){
var state_48989__$1 = state_48989;
var statearr_49048_49109 = state_48989__$1;
(statearr_49048_49109[(2)] = null);

(statearr_49048_49109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (16))){
var inst_48937 = (state_48989[(10)]);
var inst_48944 = cljs.core.chunk_first.call(null,inst_48937);
var inst_48945 = cljs.core.chunk_rest.call(null,inst_48937);
var inst_48946 = cljs.core.count.call(null,inst_48944);
var inst_48919 = inst_48945;
var inst_48920 = inst_48944;
var inst_48921 = inst_48946;
var inst_48922 = (0);
var state_48989__$1 = (function (){var statearr_49050 = state_48989;
(statearr_49050[(13)] = inst_48921);

(statearr_49050[(14)] = inst_48919);

(statearr_49050[(15)] = inst_48922);

(statearr_49050[(16)] = inst_48920);

return statearr_49050;
})();
var statearr_49051_49113 = state_48989__$1;
(statearr_49051_49113[(2)] = null);

(statearr_49051_49113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (10))){
var inst_48921 = (state_48989[(13)]);
var inst_48919 = (state_48989[(14)]);
var inst_48922 = (state_48989[(15)]);
var inst_48920 = (state_48989[(16)]);
var inst_48931 = cljs.core._nth.call(null,inst_48920,inst_48922);
var inst_48932 = cljs.core.async.muxch_STAR_.call(null,inst_48931);
var inst_48933 = cljs.core.async.close_BANG_.call(null,inst_48932);
var inst_48934 = (inst_48922 + (1));
var tmp49045 = inst_48921;
var tmp49046 = inst_48919;
var tmp49047 = inst_48920;
var inst_48919__$1 = tmp49046;
var inst_48920__$1 = tmp49047;
var inst_48921__$1 = tmp49045;
var inst_48922__$1 = inst_48934;
var state_48989__$1 = (function (){var statearr_49052 = state_48989;
(statearr_49052[(13)] = inst_48921__$1);

(statearr_49052[(14)] = inst_48919__$1);

(statearr_49052[(17)] = inst_48933);

(statearr_49052[(15)] = inst_48922__$1);

(statearr_49052[(16)] = inst_48920__$1);

return statearr_49052;
})();
var statearr_49053_49117 = state_48989__$1;
(statearr_49053_49117[(2)] = null);

(statearr_49053_49117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (18))){
var inst_48955 = (state_48989[(2)]);
var state_48989__$1 = state_48989;
var statearr_49054_49119 = state_48989__$1;
(statearr_49054_49119[(2)] = inst_48955);

(statearr_49054_49119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48990 === (8))){
var inst_48921 = (state_48989[(13)]);
var inst_48922 = (state_48989[(15)]);
var inst_48928 = (inst_48922 < inst_48921);
var inst_48929 = inst_48928;
var state_48989__$1 = state_48989;
if(cljs.core.truth_(inst_48929)){
var statearr_49055_49122 = state_48989__$1;
(statearr_49055_49122[(1)] = (10));

} else {
var statearr_49056_49123 = state_48989__$1;
(statearr_49056_49123[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___49077,mults,ensure_mult,p))
;
return ((function (switch__33607__auto__,c__33952__auto___49077,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_49057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49057[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_49057[(1)] = (1));

return statearr_49057;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_48989){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_48989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e49058){if((e49058 instanceof Object)){
var ex__33611__auto__ = e49058;
var statearr_49059_49135 = state_48989;
(statearr_49059_49135[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49136 = state_48989;
state_48989 = G__49136;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_48989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_48989);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___49077,mults,ensure_mult,p))
})();
var state__33954__auto__ = (function (){var statearr_49063 = f__33953__auto__.call(null);
(statearr_49063[(6)] = c__33952__auto___49077);

return statearr_49063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___49077,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49143 = arguments.length;
switch (G__49143) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49155 = arguments.length;
switch (G__49155) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49171 = arguments.length;
switch (G__49171) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33952__auto___49317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___49317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___49317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49219){
var state_val_49220 = (state_49219[(1)]);
if((state_val_49220 === (7))){
var state_49219__$1 = state_49219;
var statearr_49222_49319 = state_49219__$1;
(statearr_49222_49319[(2)] = null);

(statearr_49222_49319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (1))){
var state_49219__$1 = state_49219;
var statearr_49223_49320 = state_49219__$1;
(statearr_49223_49320[(2)] = null);

(statearr_49223_49320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (4))){
var inst_49180 = (state_49219[(7)]);
var inst_49182 = (inst_49180 < cnt);
var state_49219__$1 = state_49219;
if(cljs.core.truth_(inst_49182)){
var statearr_49226_49325 = state_49219__$1;
(statearr_49226_49325[(1)] = (6));

} else {
var statearr_49227_49326 = state_49219__$1;
(statearr_49227_49326[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (15))){
var inst_49215 = (state_49219[(2)]);
var state_49219__$1 = state_49219;
var statearr_49228_49327 = state_49219__$1;
(statearr_49228_49327[(2)] = inst_49215);

(statearr_49228_49327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (13))){
var inst_49208 = cljs.core.async.close_BANG_.call(null,out);
var state_49219__$1 = state_49219;
var statearr_49229_49331 = state_49219__$1;
(statearr_49229_49331[(2)] = inst_49208);

(statearr_49229_49331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (6))){
var state_49219__$1 = state_49219;
var statearr_49234_49335 = state_49219__$1;
(statearr_49234_49335[(2)] = null);

(statearr_49234_49335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (3))){
var inst_49217 = (state_49219[(2)]);
var state_49219__$1 = state_49219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49219__$1,inst_49217);
} else {
if((state_val_49220 === (12))){
var inst_49205 = (state_49219[(8)]);
var inst_49205__$1 = (state_49219[(2)]);
var inst_49206 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49205__$1);
var state_49219__$1 = (function (){var statearr_49235 = state_49219;
(statearr_49235[(8)] = inst_49205__$1);

return statearr_49235;
})();
if(cljs.core.truth_(inst_49206)){
var statearr_49242_49336 = state_49219__$1;
(statearr_49242_49336[(1)] = (13));

} else {
var statearr_49243_49337 = state_49219__$1;
(statearr_49243_49337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (2))){
var inst_49179 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49180 = (0);
var state_49219__$1 = (function (){var statearr_49244 = state_49219;
(statearr_49244[(7)] = inst_49180);

(statearr_49244[(9)] = inst_49179);

return statearr_49244;
})();
var statearr_49249_49338 = state_49219__$1;
(statearr_49249_49338[(2)] = null);

(statearr_49249_49338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (11))){
var inst_49180 = (state_49219[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49219,(10),Object,null,(9));
var inst_49192 = chs__$1.call(null,inst_49180);
var inst_49193 = done.call(null,inst_49180);
var inst_49194 = cljs.core.async.take_BANG_.call(null,inst_49192,inst_49193);
var state_49219__$1 = state_49219;
var statearr_49257_49340 = state_49219__$1;
(statearr_49257_49340[(2)] = inst_49194);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (9))){
var inst_49180 = (state_49219[(7)]);
var inst_49196 = (state_49219[(2)]);
var inst_49197 = (inst_49180 + (1));
var inst_49180__$1 = inst_49197;
var state_49219__$1 = (function (){var statearr_49263 = state_49219;
(statearr_49263[(7)] = inst_49180__$1);

(statearr_49263[(10)] = inst_49196);

return statearr_49263;
})();
var statearr_49264_49341 = state_49219__$1;
(statearr_49264_49341[(2)] = null);

(statearr_49264_49341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (5))){
var inst_49203 = (state_49219[(2)]);
var state_49219__$1 = (function (){var statearr_49265 = state_49219;
(statearr_49265[(11)] = inst_49203);

return statearr_49265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49219__$1,(12),dchan);
} else {
if((state_val_49220 === (14))){
var inst_49205 = (state_49219[(8)]);
var inst_49210 = cljs.core.apply.call(null,f,inst_49205);
var state_49219__$1 = state_49219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49219__$1,(16),out,inst_49210);
} else {
if((state_val_49220 === (16))){
var inst_49212 = (state_49219[(2)]);
var state_49219__$1 = (function (){var statearr_49278 = state_49219;
(statearr_49278[(12)] = inst_49212);

return statearr_49278;
})();
var statearr_49285_49348 = state_49219__$1;
(statearr_49285_49348[(2)] = null);

(statearr_49285_49348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (10))){
var inst_49187 = (state_49219[(2)]);
var inst_49188 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49219__$1 = (function (){var statearr_49291 = state_49219;
(statearr_49291[(13)] = inst_49187);

return statearr_49291;
})();
var statearr_49292_49355 = state_49219__$1;
(statearr_49292_49355[(2)] = inst_49188);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (8))){
var inst_49201 = (state_49219[(2)]);
var state_49219__$1 = state_49219;
var statearr_49295_49356 = state_49219__$1;
(statearr_49295_49356[(2)] = inst_49201);

(statearr_49295_49356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___49317,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33607__auto__,c__33952__auto___49317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_49304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49304[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_49304[(1)] = (1));

return statearr_49304;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_49219){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_49219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e49310){if((e49310 instanceof Object)){
var ex__33611__auto__ = e49310;
var statearr_49311_49359 = state_49219;
(statearr_49311_49359[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49361 = state_49219;
state_49219 = G__49361;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_49219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_49219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___49317,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33954__auto__ = (function (){var statearr_49312 = f__33953__auto__.call(null);
(statearr_49312[(6)] = c__33952__auto___49317);

return statearr_49312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___49317,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49371 = arguments.length;
switch (G__49371) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33952__auto___49443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___49443,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___49443,out){
return (function (state_49403){
var state_val_49404 = (state_49403[(1)]);
if((state_val_49404 === (7))){
var inst_49382 = (state_49403[(7)]);
var inst_49383 = (state_49403[(8)]);
var inst_49382__$1 = (state_49403[(2)]);
var inst_49383__$1 = cljs.core.nth.call(null,inst_49382__$1,(0),null);
var inst_49384 = cljs.core.nth.call(null,inst_49382__$1,(1),null);
var inst_49385 = (inst_49383__$1 == null);
var state_49403__$1 = (function (){var statearr_49405 = state_49403;
(statearr_49405[(7)] = inst_49382__$1);

(statearr_49405[(8)] = inst_49383__$1);

(statearr_49405[(9)] = inst_49384);

return statearr_49405;
})();
if(cljs.core.truth_(inst_49385)){
var statearr_49406_49451 = state_49403__$1;
(statearr_49406_49451[(1)] = (8));

} else {
var statearr_49407_49452 = state_49403__$1;
(statearr_49407_49452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (1))){
var inst_49372 = cljs.core.vec.call(null,chs);
var inst_49373 = inst_49372;
var state_49403__$1 = (function (){var statearr_49408 = state_49403;
(statearr_49408[(10)] = inst_49373);

return statearr_49408;
})();
var statearr_49409_49453 = state_49403__$1;
(statearr_49409_49453[(2)] = null);

(statearr_49409_49453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (4))){
var inst_49373 = (state_49403[(10)]);
var state_49403__$1 = state_49403;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49403__$1,(7),inst_49373);
} else {
if((state_val_49404 === (6))){
var inst_49399 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
var statearr_49413_49455 = state_49403__$1;
(statearr_49413_49455[(2)] = inst_49399);

(statearr_49413_49455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (3))){
var inst_49401 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49403__$1,inst_49401);
} else {
if((state_val_49404 === (2))){
var inst_49373 = (state_49403[(10)]);
var inst_49375 = cljs.core.count.call(null,inst_49373);
var inst_49376 = (inst_49375 > (0));
var state_49403__$1 = state_49403;
if(cljs.core.truth_(inst_49376)){
var statearr_49418_49456 = state_49403__$1;
(statearr_49418_49456[(1)] = (4));

} else {
var statearr_49419_49458 = state_49403__$1;
(statearr_49419_49458[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (11))){
var inst_49373 = (state_49403[(10)]);
var inst_49392 = (state_49403[(2)]);
var tmp49416 = inst_49373;
var inst_49373__$1 = tmp49416;
var state_49403__$1 = (function (){var statearr_49420 = state_49403;
(statearr_49420[(10)] = inst_49373__$1);

(statearr_49420[(11)] = inst_49392);

return statearr_49420;
})();
var statearr_49421_49462 = state_49403__$1;
(statearr_49421_49462[(2)] = null);

(statearr_49421_49462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (9))){
var inst_49383 = (state_49403[(8)]);
var state_49403__$1 = state_49403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49403__$1,(11),out,inst_49383);
} else {
if((state_val_49404 === (5))){
var inst_49397 = cljs.core.async.close_BANG_.call(null,out);
var state_49403__$1 = state_49403;
var statearr_49423_49463 = state_49403__$1;
(statearr_49423_49463[(2)] = inst_49397);

(statearr_49423_49463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (10))){
var inst_49395 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
var statearr_49424_49464 = state_49403__$1;
(statearr_49424_49464[(2)] = inst_49395);

(statearr_49424_49464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (8))){
var inst_49382 = (state_49403[(7)]);
var inst_49373 = (state_49403[(10)]);
var inst_49383 = (state_49403[(8)]);
var inst_49384 = (state_49403[(9)]);
var inst_49387 = (function (){var cs = inst_49373;
var vec__49378 = inst_49382;
var v = inst_49383;
var c = inst_49384;
return ((function (cs,vec__49378,v,c,inst_49382,inst_49373,inst_49383,inst_49384,state_val_49404,c__33952__auto___49443,out){
return (function (p1__49365_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49365_SHARP_);
});
;})(cs,vec__49378,v,c,inst_49382,inst_49373,inst_49383,inst_49384,state_val_49404,c__33952__auto___49443,out))
})();
var inst_49388 = cljs.core.filterv.call(null,inst_49387,inst_49373);
var inst_49373__$1 = inst_49388;
var state_49403__$1 = (function (){var statearr_49425 = state_49403;
(statearr_49425[(10)] = inst_49373__$1);

return statearr_49425;
})();
var statearr_49426_49466 = state_49403__$1;
(statearr_49426_49466[(2)] = null);

(statearr_49426_49466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___49443,out))
;
return ((function (switch__33607__auto__,c__33952__auto___49443,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_49427 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49427[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_49427[(1)] = (1));

return statearr_49427;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_49403){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_49403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e49430){if((e49430 instanceof Object)){
var ex__33611__auto__ = e49430;
var statearr_49432_49467 = state_49403;
(statearr_49432_49467[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49474 = state_49403;
state_49403 = G__49474;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_49403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_49403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___49443,out))
})();
var state__33954__auto__ = (function (){var statearr_49435 = f__33953__auto__.call(null);
(statearr_49435[(6)] = c__33952__auto___49443);

return statearr_49435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___49443,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49480 = arguments.length;
switch (G__49480) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33952__auto___49546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___49546,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___49546,out){
return (function (state_49507){
var state_val_49508 = (state_49507[(1)]);
if((state_val_49508 === (7))){
var inst_49487 = (state_49507[(7)]);
var inst_49487__$1 = (state_49507[(2)]);
var inst_49489 = (inst_49487__$1 == null);
var inst_49490 = cljs.core.not.call(null,inst_49489);
var state_49507__$1 = (function (){var statearr_49509 = state_49507;
(statearr_49509[(7)] = inst_49487__$1);

return statearr_49509;
})();
if(inst_49490){
var statearr_49510_49549 = state_49507__$1;
(statearr_49510_49549[(1)] = (8));

} else {
var statearr_49511_49550 = state_49507__$1;
(statearr_49511_49550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49508 === (1))){
var inst_49481 = (0);
var state_49507__$1 = (function (){var statearr_49512 = state_49507;
(statearr_49512[(8)] = inst_49481);

return statearr_49512;
})();
var statearr_49513_49554 = state_49507__$1;
(statearr_49513_49554[(2)] = null);

(statearr_49513_49554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49508 === (4))){
var state_49507__$1 = state_49507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49507__$1,(7),ch);
} else {
if((state_val_49508 === (6))){
var inst_49502 = (state_49507[(2)]);
var state_49507__$1 = state_49507;
var statearr_49516_49555 = state_49507__$1;
(statearr_49516_49555[(2)] = inst_49502);

(statearr_49516_49555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49508 === (3))){
var inst_49504 = (state_49507[(2)]);
var inst_49505 = cljs.core.async.close_BANG_.call(null,out);
var state_49507__$1 = (function (){var statearr_49517 = state_49507;
(statearr_49517[(9)] = inst_49504);

return statearr_49517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49507__$1,inst_49505);
} else {
if((state_val_49508 === (2))){
var inst_49481 = (state_49507[(8)]);
var inst_49483 = (inst_49481 < n);
var state_49507__$1 = state_49507;
if(cljs.core.truth_(inst_49483)){
var statearr_49518_49559 = state_49507__$1;
(statearr_49518_49559[(1)] = (4));

} else {
var statearr_49519_49560 = state_49507__$1;
(statearr_49519_49560[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49508 === (11))){
var inst_49481 = (state_49507[(8)]);
var inst_49493 = (state_49507[(2)]);
var inst_49494 = (inst_49481 + (1));
var inst_49481__$1 = inst_49494;
var state_49507__$1 = (function (){var statearr_49522 = state_49507;
(statearr_49522[(10)] = inst_49493);

(statearr_49522[(8)] = inst_49481__$1);

return statearr_49522;
})();
var statearr_49524_49561 = state_49507__$1;
(statearr_49524_49561[(2)] = null);

(statearr_49524_49561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49508 === (9))){
var state_49507__$1 = state_49507;
var statearr_49525_49564 = state_49507__$1;
(statearr_49525_49564[(2)] = null);

(statearr_49525_49564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49508 === (5))){
var state_49507__$1 = state_49507;
var statearr_49529_49566 = state_49507__$1;
(statearr_49529_49566[(2)] = null);

(statearr_49529_49566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49508 === (10))){
var inst_49499 = (state_49507[(2)]);
var state_49507__$1 = state_49507;
var statearr_49531_49567 = state_49507__$1;
(statearr_49531_49567[(2)] = inst_49499);

(statearr_49531_49567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49508 === (8))){
var inst_49487 = (state_49507[(7)]);
var state_49507__$1 = state_49507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49507__$1,(11),out,inst_49487);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___49546,out))
;
return ((function (switch__33607__auto__,c__33952__auto___49546,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_49536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49536[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_49536[(1)] = (1));

return statearr_49536;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_49507){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_49507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e49538){if((e49538 instanceof Object)){
var ex__33611__auto__ = e49538;
var statearr_49539_49571 = state_49507;
(statearr_49539_49571[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49572 = state_49507;
state_49507 = G__49572;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_49507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_49507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___49546,out))
})();
var state__33954__auto__ = (function (){var statearr_49544 = f__33953__auto__.call(null);
(statearr_49544[(6)] = c__33952__auto___49546);

return statearr_49544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___49546,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49577 = (function (f,ch,meta49578){
this.f = f;
this.ch = ch;
this.meta49578 = meta49578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49579,meta49578__$1){
var self__ = this;
var _49579__$1 = this;
return (new cljs.core.async.t_cljs$core$async49577(self__.f,self__.ch,meta49578__$1));
});

cljs.core.async.t_cljs$core$async49577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49579){
var self__ = this;
var _49579__$1 = this;
return self__.meta49578;
});

cljs.core.async.t_cljs$core$async49577.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49577.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49577.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49577.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49577.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49580 = (function (f,ch,meta49578,_,fn1,meta49581){
this.f = f;
this.ch = ch;
this.meta49578 = meta49578;
this._ = _;
this.fn1 = fn1;
this.meta49581 = meta49581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49582,meta49581__$1){
var self__ = this;
var _49582__$1 = this;
return (new cljs.core.async.t_cljs$core$async49580(self__.f,self__.ch,self__.meta49578,self__._,self__.fn1,meta49581__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49582){
var self__ = this;
var _49582__$1 = this;
return self__.meta49581;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49580.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49580.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49576_SHARP_){
return f1.call(null,(((p1__49576_SHARP_ == null))?null:self__.f.call(null,p1__49576_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49580.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49578","meta49578",788399041,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49577","cljs.core.async/t_cljs$core$async49577",745334093,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49581","meta49581",-288097725,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49580";

cljs.core.async.t_cljs$core$async49580.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async49580");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async49580 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49580(f__$1,ch__$1,meta49578__$1,___$2,fn1__$1,meta49581){
return (new cljs.core.async.t_cljs$core$async49580(f__$1,ch__$1,meta49578__$1,___$2,fn1__$1,meta49581));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49580(self__.f,self__.ch,self__.meta49578,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30060__auto__ = ret;
if(cljs.core.truth_(and__30060__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30060__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async49577.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49577.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49578","meta49578",788399041,null)], null);
});

cljs.core.async.t_cljs$core$async49577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49577";

cljs.core.async.t_cljs$core$async49577.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async49577");
});

cljs.core.async.__GT_t_cljs$core$async49577 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49577(f__$1,ch__$1,meta49578){
return (new cljs.core.async.t_cljs$core$async49577(f__$1,ch__$1,meta49578));
});

}

return (new cljs.core.async.t_cljs$core$async49577(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49607 = (function (f,ch,meta49608){
this.f = f;
this.ch = ch;
this.meta49608 = meta49608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49609,meta49608__$1){
var self__ = this;
var _49609__$1 = this;
return (new cljs.core.async.t_cljs$core$async49607(self__.f,self__.ch,meta49608__$1));
});

cljs.core.async.t_cljs$core$async49607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49609){
var self__ = this;
var _49609__$1 = this;
return self__.meta49608;
});

cljs.core.async.t_cljs$core$async49607.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49607.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49607.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49608","meta49608",1967083431,null)], null);
});

cljs.core.async.t_cljs$core$async49607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49607";

cljs.core.async.t_cljs$core$async49607.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async49607");
});

cljs.core.async.__GT_t_cljs$core$async49607 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49607(f__$1,ch__$1,meta49608){
return (new cljs.core.async.t_cljs$core$async49607(f__$1,ch__$1,meta49608));
});

}

return (new cljs.core.async.t_cljs$core$async49607(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49622 = (function (p,ch,meta49623){
this.p = p;
this.ch = ch;
this.meta49623 = meta49623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49624,meta49623__$1){
var self__ = this;
var _49624__$1 = this;
return (new cljs.core.async.t_cljs$core$async49622(self__.p,self__.ch,meta49623__$1));
});

cljs.core.async.t_cljs$core$async49622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49624){
var self__ = this;
var _49624__$1 = this;
return self__.meta49623;
});

cljs.core.async.t_cljs$core$async49622.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49622.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49622.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49622.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49622.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49622.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49622.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49623","meta49623",-986470716,null)], null);
});

cljs.core.async.t_cljs$core$async49622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49622";

cljs.core.async.t_cljs$core$async49622.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async49622");
});

cljs.core.async.__GT_t_cljs$core$async49622 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49622(p__$1,ch__$1,meta49623){
return (new cljs.core.async.t_cljs$core$async49622(p__$1,ch__$1,meta49623));
});

}

return (new cljs.core.async.t_cljs$core$async49622(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49637 = arguments.length;
switch (G__49637) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33952__auto___49682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___49682,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___49682,out){
return (function (state_49658){
var state_val_49659 = (state_49658[(1)]);
if((state_val_49659 === (7))){
var inst_49654 = (state_49658[(2)]);
var state_49658__$1 = state_49658;
var statearr_49660_49683 = state_49658__$1;
(statearr_49660_49683[(2)] = inst_49654);

(statearr_49660_49683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49659 === (1))){
var state_49658__$1 = state_49658;
var statearr_49661_49684 = state_49658__$1;
(statearr_49661_49684[(2)] = null);

(statearr_49661_49684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49659 === (4))){
var inst_49640 = (state_49658[(7)]);
var inst_49640__$1 = (state_49658[(2)]);
var inst_49641 = (inst_49640__$1 == null);
var state_49658__$1 = (function (){var statearr_49663 = state_49658;
(statearr_49663[(7)] = inst_49640__$1);

return statearr_49663;
})();
if(cljs.core.truth_(inst_49641)){
var statearr_49664_49686 = state_49658__$1;
(statearr_49664_49686[(1)] = (5));

} else {
var statearr_49665_49689 = state_49658__$1;
(statearr_49665_49689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49659 === (6))){
var inst_49640 = (state_49658[(7)]);
var inst_49645 = p.call(null,inst_49640);
var state_49658__$1 = state_49658;
if(cljs.core.truth_(inst_49645)){
var statearr_49666_49690 = state_49658__$1;
(statearr_49666_49690[(1)] = (8));

} else {
var statearr_49667_49693 = state_49658__$1;
(statearr_49667_49693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49659 === (3))){
var inst_49656 = (state_49658[(2)]);
var state_49658__$1 = state_49658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49658__$1,inst_49656);
} else {
if((state_val_49659 === (2))){
var state_49658__$1 = state_49658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49658__$1,(4),ch);
} else {
if((state_val_49659 === (11))){
var inst_49648 = (state_49658[(2)]);
var state_49658__$1 = state_49658;
var statearr_49668_49695 = state_49658__$1;
(statearr_49668_49695[(2)] = inst_49648);

(statearr_49668_49695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49659 === (9))){
var state_49658__$1 = state_49658;
var statearr_49669_49696 = state_49658__$1;
(statearr_49669_49696[(2)] = null);

(statearr_49669_49696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49659 === (5))){
var inst_49643 = cljs.core.async.close_BANG_.call(null,out);
var state_49658__$1 = state_49658;
var statearr_49670_49697 = state_49658__$1;
(statearr_49670_49697[(2)] = inst_49643);

(statearr_49670_49697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49659 === (10))){
var inst_49651 = (state_49658[(2)]);
var state_49658__$1 = (function (){var statearr_49673 = state_49658;
(statearr_49673[(8)] = inst_49651);

return statearr_49673;
})();
var statearr_49674_49699 = state_49658__$1;
(statearr_49674_49699[(2)] = null);

(statearr_49674_49699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49659 === (8))){
var inst_49640 = (state_49658[(7)]);
var state_49658__$1 = state_49658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49658__$1,(11),out,inst_49640);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___49682,out))
;
return ((function (switch__33607__auto__,c__33952__auto___49682,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_49676 = [null,null,null,null,null,null,null,null,null];
(statearr_49676[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_49676[(1)] = (1));

return statearr_49676;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_49658){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_49658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e49678){if((e49678 instanceof Object)){
var ex__33611__auto__ = e49678;
var statearr_49679_49703 = state_49658;
(statearr_49679_49703[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49704 = state_49658;
state_49658 = G__49704;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_49658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_49658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___49682,out))
})();
var state__33954__auto__ = (function (){var statearr_49680 = f__33953__auto__.call(null);
(statearr_49680[(6)] = c__33952__auto___49682);

return statearr_49680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___49682,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49706 = arguments.length;
switch (G__49706) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__){
return (function (state_49778){
var state_val_49779 = (state_49778[(1)]);
if((state_val_49779 === (7))){
var inst_49774 = (state_49778[(2)]);
var state_49778__$1 = state_49778;
var statearr_49780_49827 = state_49778__$1;
(statearr_49780_49827[(2)] = inst_49774);

(statearr_49780_49827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (20))){
var inst_49744 = (state_49778[(7)]);
var inst_49755 = (state_49778[(2)]);
var inst_49756 = cljs.core.next.call(null,inst_49744);
var inst_49729 = inst_49756;
var inst_49730 = null;
var inst_49731 = (0);
var inst_49732 = (0);
var state_49778__$1 = (function (){var statearr_49781 = state_49778;
(statearr_49781[(8)] = inst_49755);

(statearr_49781[(9)] = inst_49731);

(statearr_49781[(10)] = inst_49730);

(statearr_49781[(11)] = inst_49732);

(statearr_49781[(12)] = inst_49729);

return statearr_49781;
})();
var statearr_49782_49830 = state_49778__$1;
(statearr_49782_49830[(2)] = null);

(statearr_49782_49830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (1))){
var state_49778__$1 = state_49778;
var statearr_49784_49831 = state_49778__$1;
(statearr_49784_49831[(2)] = null);

(statearr_49784_49831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (4))){
var inst_49718 = (state_49778[(13)]);
var inst_49718__$1 = (state_49778[(2)]);
var inst_49719 = (inst_49718__$1 == null);
var state_49778__$1 = (function (){var statearr_49785 = state_49778;
(statearr_49785[(13)] = inst_49718__$1);

return statearr_49785;
})();
if(cljs.core.truth_(inst_49719)){
var statearr_49786_49833 = state_49778__$1;
(statearr_49786_49833[(1)] = (5));

} else {
var statearr_49787_49834 = state_49778__$1;
(statearr_49787_49834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (15))){
var state_49778__$1 = state_49778;
var statearr_49791_49835 = state_49778__$1;
(statearr_49791_49835[(2)] = null);

(statearr_49791_49835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (21))){
var state_49778__$1 = state_49778;
var statearr_49792_49836 = state_49778__$1;
(statearr_49792_49836[(2)] = null);

(statearr_49792_49836[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (13))){
var inst_49731 = (state_49778[(9)]);
var inst_49730 = (state_49778[(10)]);
var inst_49732 = (state_49778[(11)]);
var inst_49729 = (state_49778[(12)]);
var inst_49739 = (state_49778[(2)]);
var inst_49741 = (inst_49732 + (1));
var tmp49788 = inst_49731;
var tmp49789 = inst_49730;
var tmp49790 = inst_49729;
var inst_49729__$1 = tmp49790;
var inst_49730__$1 = tmp49789;
var inst_49731__$1 = tmp49788;
var inst_49732__$1 = inst_49741;
var state_49778__$1 = (function (){var statearr_49793 = state_49778;
(statearr_49793[(9)] = inst_49731__$1);

(statearr_49793[(10)] = inst_49730__$1);

(statearr_49793[(11)] = inst_49732__$1);

(statearr_49793[(14)] = inst_49739);

(statearr_49793[(12)] = inst_49729__$1);

return statearr_49793;
})();
var statearr_49795_49838 = state_49778__$1;
(statearr_49795_49838[(2)] = null);

(statearr_49795_49838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (22))){
var state_49778__$1 = state_49778;
var statearr_49796_49839 = state_49778__$1;
(statearr_49796_49839[(2)] = null);

(statearr_49796_49839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (6))){
var inst_49718 = (state_49778[(13)]);
var inst_49727 = f.call(null,inst_49718);
var inst_49728 = cljs.core.seq.call(null,inst_49727);
var inst_49729 = inst_49728;
var inst_49730 = null;
var inst_49731 = (0);
var inst_49732 = (0);
var state_49778__$1 = (function (){var statearr_49797 = state_49778;
(statearr_49797[(9)] = inst_49731);

(statearr_49797[(10)] = inst_49730);

(statearr_49797[(11)] = inst_49732);

(statearr_49797[(12)] = inst_49729);

return statearr_49797;
})();
var statearr_49798_49841 = state_49778__$1;
(statearr_49798_49841[(2)] = null);

(statearr_49798_49841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (17))){
var inst_49744 = (state_49778[(7)]);
var inst_49748 = cljs.core.chunk_first.call(null,inst_49744);
var inst_49749 = cljs.core.chunk_rest.call(null,inst_49744);
var inst_49750 = cljs.core.count.call(null,inst_49748);
var inst_49729 = inst_49749;
var inst_49730 = inst_49748;
var inst_49731 = inst_49750;
var inst_49732 = (0);
var state_49778__$1 = (function (){var statearr_49799 = state_49778;
(statearr_49799[(9)] = inst_49731);

(statearr_49799[(10)] = inst_49730);

(statearr_49799[(11)] = inst_49732);

(statearr_49799[(12)] = inst_49729);

return statearr_49799;
})();
var statearr_49801_49843 = state_49778__$1;
(statearr_49801_49843[(2)] = null);

(statearr_49801_49843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (3))){
var inst_49776 = (state_49778[(2)]);
var state_49778__$1 = state_49778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49778__$1,inst_49776);
} else {
if((state_val_49779 === (12))){
var inst_49764 = (state_49778[(2)]);
var state_49778__$1 = state_49778;
var statearr_49802_49844 = state_49778__$1;
(statearr_49802_49844[(2)] = inst_49764);

(statearr_49802_49844[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (2))){
var state_49778__$1 = state_49778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49778__$1,(4),in$);
} else {
if((state_val_49779 === (23))){
var inst_49772 = (state_49778[(2)]);
var state_49778__$1 = state_49778;
var statearr_49806_49846 = state_49778__$1;
(statearr_49806_49846[(2)] = inst_49772);

(statearr_49806_49846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (19))){
var inst_49759 = (state_49778[(2)]);
var state_49778__$1 = state_49778;
var statearr_49807_49847 = state_49778__$1;
(statearr_49807_49847[(2)] = inst_49759);

(statearr_49807_49847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (11))){
var inst_49744 = (state_49778[(7)]);
var inst_49729 = (state_49778[(12)]);
var inst_49744__$1 = cljs.core.seq.call(null,inst_49729);
var state_49778__$1 = (function (){var statearr_49808 = state_49778;
(statearr_49808[(7)] = inst_49744__$1);

return statearr_49808;
})();
if(inst_49744__$1){
var statearr_49809_49849 = state_49778__$1;
(statearr_49809_49849[(1)] = (14));

} else {
var statearr_49810_49850 = state_49778__$1;
(statearr_49810_49850[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (9))){
var inst_49766 = (state_49778[(2)]);
var inst_49767 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49778__$1 = (function (){var statearr_49812 = state_49778;
(statearr_49812[(15)] = inst_49766);

return statearr_49812;
})();
if(cljs.core.truth_(inst_49767)){
var statearr_49813_49851 = state_49778__$1;
(statearr_49813_49851[(1)] = (21));

} else {
var statearr_49814_49852 = state_49778__$1;
(statearr_49814_49852[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (5))){
var inst_49721 = cljs.core.async.close_BANG_.call(null,out);
var state_49778__$1 = state_49778;
var statearr_49815_49854 = state_49778__$1;
(statearr_49815_49854[(2)] = inst_49721);

(statearr_49815_49854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (14))){
var inst_49744 = (state_49778[(7)]);
var inst_49746 = cljs.core.chunked_seq_QMARK_.call(null,inst_49744);
var state_49778__$1 = state_49778;
if(inst_49746){
var statearr_49816_49855 = state_49778__$1;
(statearr_49816_49855[(1)] = (17));

} else {
var statearr_49817_49856 = state_49778__$1;
(statearr_49817_49856[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (16))){
var inst_49762 = (state_49778[(2)]);
var state_49778__$1 = state_49778;
var statearr_49818_49861 = state_49778__$1;
(statearr_49818_49861[(2)] = inst_49762);

(statearr_49818_49861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (10))){
var inst_49730 = (state_49778[(10)]);
var inst_49732 = (state_49778[(11)]);
var inst_49737 = cljs.core._nth.call(null,inst_49730,inst_49732);
var state_49778__$1 = state_49778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49778__$1,(13),out,inst_49737);
} else {
if((state_val_49779 === (18))){
var inst_49744 = (state_49778[(7)]);
var inst_49753 = cljs.core.first.call(null,inst_49744);
var state_49778__$1 = state_49778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49778__$1,(20),out,inst_49753);
} else {
if((state_val_49779 === (8))){
var inst_49731 = (state_49778[(9)]);
var inst_49732 = (state_49778[(11)]);
var inst_49734 = (inst_49732 < inst_49731);
var inst_49735 = inst_49734;
var state_49778__$1 = state_49778;
if(cljs.core.truth_(inst_49735)){
var statearr_49820_49865 = state_49778__$1;
(statearr_49820_49865[(1)] = (10));

} else {
var statearr_49821_49866 = state_49778__$1;
(statearr_49821_49866[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto__))
;
return ((function (switch__33607__auto__,c__33952__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_49822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49822[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__);

(statearr_49822[(1)] = (1));

return statearr_49822;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____1 = (function (state_49778){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_49778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e49823){if((e49823 instanceof Object)){
var ex__33611__auto__ = e49823;
var statearr_49824_49868 = state_49778;
(statearr_49824_49868[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49869 = state_49778;
state_49778 = G__49869;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__ = function(state_49778){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____1.call(this,state_49778);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_49825 = f__33953__auto__.call(null);
(statearr_49825[(6)] = c__33952__auto__);

return statearr_49825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__))
);

return c__33952__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49872 = arguments.length;
switch (G__49872) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49879 = arguments.length;
switch (G__49879) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49883 = arguments.length;
switch (G__49883) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33952__auto___49946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___49946,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___49946,out){
return (function (state_49911){
var state_val_49912 = (state_49911[(1)]);
if((state_val_49912 === (7))){
var inst_49906 = (state_49911[(2)]);
var state_49911__$1 = state_49911;
var statearr_49914_49948 = state_49911__$1;
(statearr_49914_49948[(2)] = inst_49906);

(statearr_49914_49948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49912 === (1))){
var inst_49886 = null;
var state_49911__$1 = (function (){var statearr_49915 = state_49911;
(statearr_49915[(7)] = inst_49886);

return statearr_49915;
})();
var statearr_49916_49950 = state_49911__$1;
(statearr_49916_49950[(2)] = null);

(statearr_49916_49950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49912 === (4))){
var inst_49889 = (state_49911[(8)]);
var inst_49889__$1 = (state_49911[(2)]);
var inst_49890 = (inst_49889__$1 == null);
var inst_49891 = cljs.core.not.call(null,inst_49890);
var state_49911__$1 = (function (){var statearr_49918 = state_49911;
(statearr_49918[(8)] = inst_49889__$1);

return statearr_49918;
})();
if(inst_49891){
var statearr_49919_49954 = state_49911__$1;
(statearr_49919_49954[(1)] = (5));

} else {
var statearr_49920_49955 = state_49911__$1;
(statearr_49920_49955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49912 === (6))){
var state_49911__$1 = state_49911;
var statearr_49921_49956 = state_49911__$1;
(statearr_49921_49956[(2)] = null);

(statearr_49921_49956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49912 === (3))){
var inst_49908 = (state_49911[(2)]);
var inst_49909 = cljs.core.async.close_BANG_.call(null,out);
var state_49911__$1 = (function (){var statearr_49923 = state_49911;
(statearr_49923[(9)] = inst_49908);

return statearr_49923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49911__$1,inst_49909);
} else {
if((state_val_49912 === (2))){
var state_49911__$1 = state_49911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49911__$1,(4),ch);
} else {
if((state_val_49912 === (11))){
var inst_49889 = (state_49911[(8)]);
var inst_49900 = (state_49911[(2)]);
var inst_49886 = inst_49889;
var state_49911__$1 = (function (){var statearr_49926 = state_49911;
(statearr_49926[(10)] = inst_49900);

(statearr_49926[(7)] = inst_49886);

return statearr_49926;
})();
var statearr_49927_49961 = state_49911__$1;
(statearr_49927_49961[(2)] = null);

(statearr_49927_49961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49912 === (9))){
var inst_49889 = (state_49911[(8)]);
var state_49911__$1 = state_49911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49911__$1,(11),out,inst_49889);
} else {
if((state_val_49912 === (5))){
var inst_49889 = (state_49911[(8)]);
var inst_49886 = (state_49911[(7)]);
var inst_49894 = cljs.core._EQ_.call(null,inst_49889,inst_49886);
var state_49911__$1 = state_49911;
if(inst_49894){
var statearr_49929_49968 = state_49911__$1;
(statearr_49929_49968[(1)] = (8));

} else {
var statearr_49930_49969 = state_49911__$1;
(statearr_49930_49969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49912 === (10))){
var inst_49903 = (state_49911[(2)]);
var state_49911__$1 = state_49911;
var statearr_49931_49972 = state_49911__$1;
(statearr_49931_49972[(2)] = inst_49903);

(statearr_49931_49972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49912 === (8))){
var inst_49886 = (state_49911[(7)]);
var tmp49928 = inst_49886;
var inst_49886__$1 = tmp49928;
var state_49911__$1 = (function (){var statearr_49933 = state_49911;
(statearr_49933[(7)] = inst_49886__$1);

return statearr_49933;
})();
var statearr_49934_49975 = state_49911__$1;
(statearr_49934_49975[(2)] = null);

(statearr_49934_49975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___49946,out))
;
return ((function (switch__33607__auto__,c__33952__auto___49946,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_49935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49935[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_49935[(1)] = (1));

return statearr_49935;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_49911){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_49911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e49937){if((e49937 instanceof Object)){
var ex__33611__auto__ = e49937;
var statearr_49939_49980 = state_49911;
(statearr_49939_49980[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49981 = state_49911;
state_49911 = G__49981;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_49911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_49911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___49946,out))
})();
var state__33954__auto__ = (function (){var statearr_49941 = f__33953__auto__.call(null);
(statearr_49941[(6)] = c__33952__auto___49946);

return statearr_49941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___49946,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49990 = arguments.length;
switch (G__49990) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33952__auto___50076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___50076,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___50076,out){
return (function (state_50029){
var state_val_50030 = (state_50029[(1)]);
if((state_val_50030 === (7))){
var inst_50025 = (state_50029[(2)]);
var state_50029__$1 = state_50029;
var statearr_50034_50078 = state_50029__$1;
(statearr_50034_50078[(2)] = inst_50025);

(statearr_50034_50078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50030 === (1))){
var inst_49991 = (new Array(n));
var inst_49992 = inst_49991;
var inst_49993 = (0);
var state_50029__$1 = (function (){var statearr_50035 = state_50029;
(statearr_50035[(7)] = inst_49993);

(statearr_50035[(8)] = inst_49992);

return statearr_50035;
})();
var statearr_50036_50080 = state_50029__$1;
(statearr_50036_50080[(2)] = null);

(statearr_50036_50080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50030 === (4))){
var inst_49996 = (state_50029[(9)]);
var inst_49996__$1 = (state_50029[(2)]);
var inst_49998 = (inst_49996__$1 == null);
var inst_49999 = cljs.core.not.call(null,inst_49998);
var state_50029__$1 = (function (){var statearr_50037 = state_50029;
(statearr_50037[(9)] = inst_49996__$1);

return statearr_50037;
})();
if(inst_49999){
var statearr_50038_50084 = state_50029__$1;
(statearr_50038_50084[(1)] = (5));

} else {
var statearr_50039_50085 = state_50029__$1;
(statearr_50039_50085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50030 === (15))){
var inst_50019 = (state_50029[(2)]);
var state_50029__$1 = state_50029;
var statearr_50041_50086 = state_50029__$1;
(statearr_50041_50086[(2)] = inst_50019);

(statearr_50041_50086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50030 === (13))){
var state_50029__$1 = state_50029;
var statearr_50042_50088 = state_50029__$1;
(statearr_50042_50088[(2)] = null);

(statearr_50042_50088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50030 === (6))){
var inst_49993 = (state_50029[(7)]);
var inst_50015 = (inst_49993 > (0));
var state_50029__$1 = state_50029;
if(cljs.core.truth_(inst_50015)){
var statearr_50043_50089 = state_50029__$1;
(statearr_50043_50089[(1)] = (12));

} else {
var statearr_50044_50090 = state_50029__$1;
(statearr_50044_50090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50030 === (3))){
var inst_50027 = (state_50029[(2)]);
var state_50029__$1 = state_50029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50029__$1,inst_50027);
} else {
if((state_val_50030 === (12))){
var inst_49992 = (state_50029[(8)]);
var inst_50017 = cljs.core.vec.call(null,inst_49992);
var state_50029__$1 = state_50029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50029__$1,(15),out,inst_50017);
} else {
if((state_val_50030 === (2))){
var state_50029__$1 = state_50029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50029__$1,(4),ch);
} else {
if((state_val_50030 === (11))){
var inst_50009 = (state_50029[(2)]);
var inst_50010 = (new Array(n));
var inst_49992 = inst_50010;
var inst_49993 = (0);
var state_50029__$1 = (function (){var statearr_50048 = state_50029;
(statearr_50048[(7)] = inst_49993);

(statearr_50048[(8)] = inst_49992);

(statearr_50048[(10)] = inst_50009);

return statearr_50048;
})();
var statearr_50049_50095 = state_50029__$1;
(statearr_50049_50095[(2)] = null);

(statearr_50049_50095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50030 === (9))){
var inst_49992 = (state_50029[(8)]);
var inst_50007 = cljs.core.vec.call(null,inst_49992);
var state_50029__$1 = state_50029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50029__$1,(11),out,inst_50007);
} else {
if((state_val_50030 === (5))){
var inst_49993 = (state_50029[(7)]);
var inst_49992 = (state_50029[(8)]);
var inst_49996 = (state_50029[(9)]);
var inst_50002 = (state_50029[(11)]);
var inst_50001 = (inst_49992[inst_49993] = inst_49996);
var inst_50002__$1 = (inst_49993 + (1));
var inst_50003 = (inst_50002__$1 < n);
var state_50029__$1 = (function (){var statearr_50051 = state_50029;
(statearr_50051[(12)] = inst_50001);

(statearr_50051[(11)] = inst_50002__$1);

return statearr_50051;
})();
if(cljs.core.truth_(inst_50003)){
var statearr_50053_50104 = state_50029__$1;
(statearr_50053_50104[(1)] = (8));

} else {
var statearr_50054_50106 = state_50029__$1;
(statearr_50054_50106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50030 === (14))){
var inst_50022 = (state_50029[(2)]);
var inst_50023 = cljs.core.async.close_BANG_.call(null,out);
var state_50029__$1 = (function (){var statearr_50056 = state_50029;
(statearr_50056[(13)] = inst_50022);

return statearr_50056;
})();
var statearr_50057_50108 = state_50029__$1;
(statearr_50057_50108[(2)] = inst_50023);

(statearr_50057_50108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50030 === (10))){
var inst_50013 = (state_50029[(2)]);
var state_50029__$1 = state_50029;
var statearr_50058_50112 = state_50029__$1;
(statearr_50058_50112[(2)] = inst_50013);

(statearr_50058_50112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50030 === (8))){
var inst_49992 = (state_50029[(8)]);
var inst_50002 = (state_50029[(11)]);
var tmp50055 = inst_49992;
var inst_49992__$1 = tmp50055;
var inst_49993 = inst_50002;
var state_50029__$1 = (function (){var statearr_50061 = state_50029;
(statearr_50061[(7)] = inst_49993);

(statearr_50061[(8)] = inst_49992__$1);

return statearr_50061;
})();
var statearr_50062_50113 = state_50029__$1;
(statearr_50062_50113[(2)] = null);

(statearr_50062_50113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___50076,out))
;
return ((function (switch__33607__auto__,c__33952__auto___50076,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_50064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50064[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_50064[(1)] = (1));

return statearr_50064;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_50029){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_50029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e50065){if((e50065 instanceof Object)){
var ex__33611__auto__ = e50065;
var statearr_50067_50118 = state_50029;
(statearr_50067_50118[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50119 = state_50029;
state_50029 = G__50119;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_50029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_50029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___50076,out))
})();
var state__33954__auto__ = (function (){var statearr_50071 = f__33953__auto__.call(null);
(statearr_50071[(6)] = c__33952__auto___50076);

return statearr_50071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___50076,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50125 = arguments.length;
switch (G__50125) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33952__auto___50202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___50202,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___50202,out){
return (function (state_50168){
var state_val_50169 = (state_50168[(1)]);
if((state_val_50169 === (7))){
var inst_50164 = (state_50168[(2)]);
var state_50168__$1 = state_50168;
var statearr_50170_50204 = state_50168__$1;
(statearr_50170_50204[(2)] = inst_50164);

(statearr_50170_50204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50169 === (1))){
var inst_50126 = [];
var inst_50127 = inst_50126;
var inst_50128 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50168__$1 = (function (){var statearr_50171 = state_50168;
(statearr_50171[(7)] = inst_50127);

(statearr_50171[(8)] = inst_50128);

return statearr_50171;
})();
var statearr_50172_50205 = state_50168__$1;
(statearr_50172_50205[(2)] = null);

(statearr_50172_50205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50169 === (4))){
var inst_50131 = (state_50168[(9)]);
var inst_50131__$1 = (state_50168[(2)]);
var inst_50132 = (inst_50131__$1 == null);
var inst_50133 = cljs.core.not.call(null,inst_50132);
var state_50168__$1 = (function (){var statearr_50174 = state_50168;
(statearr_50174[(9)] = inst_50131__$1);

return statearr_50174;
})();
if(inst_50133){
var statearr_50175_50207 = state_50168__$1;
(statearr_50175_50207[(1)] = (5));

} else {
var statearr_50176_50208 = state_50168__$1;
(statearr_50176_50208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50169 === (15))){
var inst_50158 = (state_50168[(2)]);
var state_50168__$1 = state_50168;
var statearr_50177_50209 = state_50168__$1;
(statearr_50177_50209[(2)] = inst_50158);

(statearr_50177_50209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50169 === (13))){
var state_50168__$1 = state_50168;
var statearr_50178_50210 = state_50168__$1;
(statearr_50178_50210[(2)] = null);

(statearr_50178_50210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50169 === (6))){
var inst_50127 = (state_50168[(7)]);
var inst_50153 = inst_50127.length;
var inst_50154 = (inst_50153 > (0));
var state_50168__$1 = state_50168;
if(cljs.core.truth_(inst_50154)){
var statearr_50179_50212 = state_50168__$1;
(statearr_50179_50212[(1)] = (12));

} else {
var statearr_50180_50213 = state_50168__$1;
(statearr_50180_50213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50169 === (3))){
var inst_50166 = (state_50168[(2)]);
var state_50168__$1 = state_50168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50168__$1,inst_50166);
} else {
if((state_val_50169 === (12))){
var inst_50127 = (state_50168[(7)]);
var inst_50156 = cljs.core.vec.call(null,inst_50127);
var state_50168__$1 = state_50168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50168__$1,(15),out,inst_50156);
} else {
if((state_val_50169 === (2))){
var state_50168__$1 = state_50168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50168__$1,(4),ch);
} else {
if((state_val_50169 === (11))){
var inst_50131 = (state_50168[(9)]);
var inst_50135 = (state_50168[(10)]);
var inst_50146 = (state_50168[(2)]);
var inst_50147 = [];
var inst_50148 = inst_50147.push(inst_50131);
var inst_50127 = inst_50147;
var inst_50128 = inst_50135;
var state_50168__$1 = (function (){var statearr_50183 = state_50168;
(statearr_50183[(11)] = inst_50146);

(statearr_50183[(7)] = inst_50127);

(statearr_50183[(12)] = inst_50148);

(statearr_50183[(8)] = inst_50128);

return statearr_50183;
})();
var statearr_50184_50215 = state_50168__$1;
(statearr_50184_50215[(2)] = null);

(statearr_50184_50215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50169 === (9))){
var inst_50127 = (state_50168[(7)]);
var inst_50144 = cljs.core.vec.call(null,inst_50127);
var state_50168__$1 = state_50168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50168__$1,(11),out,inst_50144);
} else {
if((state_val_50169 === (5))){
var inst_50131 = (state_50168[(9)]);
var inst_50128 = (state_50168[(8)]);
var inst_50135 = (state_50168[(10)]);
var inst_50135__$1 = f.call(null,inst_50131);
var inst_50137 = cljs.core._EQ_.call(null,inst_50135__$1,inst_50128);
var inst_50138 = cljs.core.keyword_identical_QMARK_.call(null,inst_50128,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50139 = (inst_50137) || (inst_50138);
var state_50168__$1 = (function (){var statearr_50186 = state_50168;
(statearr_50186[(10)] = inst_50135__$1);

return statearr_50186;
})();
if(cljs.core.truth_(inst_50139)){
var statearr_50187_50217 = state_50168__$1;
(statearr_50187_50217[(1)] = (8));

} else {
var statearr_50188_50218 = state_50168__$1;
(statearr_50188_50218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50169 === (14))){
var inst_50161 = (state_50168[(2)]);
var inst_50162 = cljs.core.async.close_BANG_.call(null,out);
var state_50168__$1 = (function (){var statearr_50190 = state_50168;
(statearr_50190[(13)] = inst_50161);

return statearr_50190;
})();
var statearr_50191_50220 = state_50168__$1;
(statearr_50191_50220[(2)] = inst_50162);

(statearr_50191_50220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50169 === (10))){
var inst_50151 = (state_50168[(2)]);
var state_50168__$1 = state_50168;
var statearr_50192_50221 = state_50168__$1;
(statearr_50192_50221[(2)] = inst_50151);

(statearr_50192_50221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50169 === (8))){
var inst_50127 = (state_50168[(7)]);
var inst_50131 = (state_50168[(9)]);
var inst_50135 = (state_50168[(10)]);
var inst_50141 = inst_50127.push(inst_50131);
var tmp50189 = inst_50127;
var inst_50127__$1 = tmp50189;
var inst_50128 = inst_50135;
var state_50168__$1 = (function (){var statearr_50193 = state_50168;
(statearr_50193[(7)] = inst_50127__$1);

(statearr_50193[(14)] = inst_50141);

(statearr_50193[(8)] = inst_50128);

return statearr_50193;
})();
var statearr_50195_50225 = state_50168__$1;
(statearr_50195_50225[(2)] = null);

(statearr_50195_50225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto___50202,out))
;
return ((function (switch__33607__auto__,c__33952__auto___50202,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_50196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50196[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_50196[(1)] = (1));

return statearr_50196;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_50168){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_50168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e50197){if((e50197 instanceof Object)){
var ex__33611__auto__ = e50197;
var statearr_50198_50227 = state_50168;
(statearr_50198_50227[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50228 = state_50168;
state_50168 = G__50228;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_50168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_50168);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___50202,out))
})();
var state__33954__auto__ = (function (){var statearr_50199 = f__33953__auto__.call(null);
(statearr_50199[(6)] = c__33952__auto___50202);

return statearr_50199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___50202,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510360405783
