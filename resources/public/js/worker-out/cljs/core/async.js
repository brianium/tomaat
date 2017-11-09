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
var G__39478 = arguments.length;
switch (G__39478) {
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
if(typeof cljs.core.async.t_cljs$core$async39479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39479 = (function (f,blockable,meta39480){
this.f = f;
this.blockable = blockable;
this.meta39480 = meta39480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39481,meta39480__$1){
var self__ = this;
var _39481__$1 = this;
return (new cljs.core.async.t_cljs$core$async39479(self__.f,self__.blockable,meta39480__$1));
});

cljs.core.async.t_cljs$core$async39479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39481){
var self__ = this;
var _39481__$1 = this;
return self__.meta39480;
});

cljs.core.async.t_cljs$core$async39479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39480","meta39480",906058376,null)], null);
});

cljs.core.async.t_cljs$core$async39479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39479";

cljs.core.async.t_cljs$core$async39479.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async39479");
});

cljs.core.async.__GT_t_cljs$core$async39479 = (function cljs$core$async$__GT_t_cljs$core$async39479(f__$1,blockable__$1,meta39480){
return (new cljs.core.async.t_cljs$core$async39479(f__$1,blockable__$1,meta39480));
});

}

return (new cljs.core.async.t_cljs$core$async39479(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39492 = arguments.length;
switch (G__39492) {
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
var G__39497 = arguments.length;
switch (G__39497) {
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
var G__39500 = arguments.length;
switch (G__39500) {
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
var val_39502 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39502);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39502,ret){
return (function (){
return fn1.call(null,val_39502);
});})(val_39502,ret))
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
var G__39507 = arguments.length;
switch (G__39507) {
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
var n__31115__auto___39517 = n;
var x_39518 = (0);
while(true){
if((x_39518 < n__31115__auto___39517)){
(a[x_39518] = (0));

var G__39519 = (x_39518 + (1));
x_39518 = G__39519;
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

var G__39520 = (i + (1));
i = G__39520;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39527 = (function (flag,meta39528){
this.flag = flag;
this.meta39528 = meta39528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39529,meta39528__$1){
var self__ = this;
var _39529__$1 = this;
return (new cljs.core.async.t_cljs$core$async39527(self__.flag,meta39528__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39529){
var self__ = this;
var _39529__$1 = this;
return self__.meta39528;
});})(flag))
;

cljs.core.async.t_cljs$core$async39527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39527.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39528","meta39528",316897365,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39527";

cljs.core.async.t_cljs$core$async39527.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async39527");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39527 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39527(flag__$1,meta39528){
return (new cljs.core.async.t_cljs$core$async39527(flag__$1,meta39528));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39527(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39536 = (function (flag,cb,meta39537){
this.flag = flag;
this.cb = cb;
this.meta39537 = meta39537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39538,meta39537__$1){
var self__ = this;
var _39538__$1 = this;
return (new cljs.core.async.t_cljs$core$async39536(self__.flag,self__.cb,meta39537__$1));
});

cljs.core.async.t_cljs$core$async39536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39538){
var self__ = this;
var _39538__$1 = this;
return self__.meta39537;
});

cljs.core.async.t_cljs$core$async39536.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39536.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39537","meta39537",1854548334,null)], null);
});

cljs.core.async.t_cljs$core$async39536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39536";

cljs.core.async.t_cljs$core$async39536.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async39536");
});

cljs.core.async.__GT_t_cljs$core$async39536 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39536(flag__$1,cb__$1,meta39537){
return (new cljs.core.async.t_cljs$core$async39536(flag__$1,cb__$1,meta39537));
});

}

return (new cljs.core.async.t_cljs$core$async39536(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39543_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39544_SHARP_,port], null));
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
var G__39550 = (i + (1));
i = G__39550;
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
var len__31349__auto___39564 = arguments.length;
var i__31350__auto___39565 = (0);
while(true){
if((i__31350__auto___39565 < len__31349__auto___39564)){
args__31356__auto__.push((arguments[i__31350__auto___39565]));

var G__39569 = (i__31350__auto___39565 + (1));
i__31350__auto___39565 = G__39569;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39561){
var map__39562 = p__39561;
var map__39562__$1 = ((((!((map__39562 == null)))?((((map__39562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39562):map__39562);
var opts = map__39562__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39556){
var G__39557 = cljs.core.first.call(null,seq39556);
var seq39556__$1 = cljs.core.next.call(null,seq39556);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39557,seq39556__$1);
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
var G__39573 = arguments.length;
switch (G__39573) {
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
var c__33665__auto___39622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___39622){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___39622){
return (function (state_39597){
var state_val_39598 = (state_39597[(1)]);
if((state_val_39598 === (7))){
var inst_39593 = (state_39597[(2)]);
var state_39597__$1 = state_39597;
var statearr_39599_39625 = state_39597__$1;
(statearr_39599_39625[(2)] = inst_39593);

(statearr_39599_39625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39598 === (1))){
var state_39597__$1 = state_39597;
var statearr_39600_39626 = state_39597__$1;
(statearr_39600_39626[(2)] = null);

(statearr_39600_39626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39598 === (4))){
var inst_39576 = (state_39597[(7)]);
var inst_39576__$1 = (state_39597[(2)]);
var inst_39577 = (inst_39576__$1 == null);
var state_39597__$1 = (function (){var statearr_39601 = state_39597;
(statearr_39601[(7)] = inst_39576__$1);

return statearr_39601;
})();
if(cljs.core.truth_(inst_39577)){
var statearr_39602_39631 = state_39597__$1;
(statearr_39602_39631[(1)] = (5));

} else {
var statearr_39603_39632 = state_39597__$1;
(statearr_39603_39632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39598 === (13))){
var state_39597__$1 = state_39597;
var statearr_39604_39634 = state_39597__$1;
(statearr_39604_39634[(2)] = null);

(statearr_39604_39634[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39598 === (6))){
var inst_39576 = (state_39597[(7)]);
var state_39597__$1 = state_39597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39597__$1,(11),to,inst_39576);
} else {
if((state_val_39598 === (3))){
var inst_39595 = (state_39597[(2)]);
var state_39597__$1 = state_39597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39597__$1,inst_39595);
} else {
if((state_val_39598 === (12))){
var state_39597__$1 = state_39597;
var statearr_39605_39635 = state_39597__$1;
(statearr_39605_39635[(2)] = null);

(statearr_39605_39635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39598 === (2))){
var state_39597__$1 = state_39597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39597__$1,(4),from);
} else {
if((state_val_39598 === (11))){
var inst_39586 = (state_39597[(2)]);
var state_39597__$1 = state_39597;
if(cljs.core.truth_(inst_39586)){
var statearr_39606_39636 = state_39597__$1;
(statearr_39606_39636[(1)] = (12));

} else {
var statearr_39607_39637 = state_39597__$1;
(statearr_39607_39637[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39598 === (9))){
var state_39597__$1 = state_39597;
var statearr_39608_39638 = state_39597__$1;
(statearr_39608_39638[(2)] = null);

(statearr_39608_39638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39598 === (5))){
var state_39597__$1 = state_39597;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39609_39639 = state_39597__$1;
(statearr_39609_39639[(1)] = (8));

} else {
var statearr_39610_39640 = state_39597__$1;
(statearr_39610_39640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39598 === (14))){
var inst_39591 = (state_39597[(2)]);
var state_39597__$1 = state_39597;
var statearr_39611_39641 = state_39597__$1;
(statearr_39611_39641[(2)] = inst_39591);

(statearr_39611_39641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39598 === (10))){
var inst_39583 = (state_39597[(2)]);
var state_39597__$1 = state_39597;
var statearr_39612_39642 = state_39597__$1;
(statearr_39612_39642[(2)] = inst_39583);

(statearr_39612_39642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39598 === (8))){
var inst_39580 = cljs.core.async.close_BANG_.call(null,to);
var state_39597__$1 = state_39597;
var statearr_39613_39643 = state_39597__$1;
(statearr_39613_39643[(2)] = inst_39580);

(statearr_39613_39643[(1)] = (10));


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
});})(c__33665__auto___39622))
;
return ((function (switch__33280__auto__,c__33665__auto___39622){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_39614 = [null,null,null,null,null,null,null,null];
(statearr_39614[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_39614[(1)] = (1));

return statearr_39614;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_39597){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_39597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e39615){if((e39615 instanceof Object)){
var ex__33284__auto__ = e39615;
var statearr_39616_39644 = state_39597;
(statearr_39616_39644[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39651 = state_39597;
state_39597 = G__39651;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_39597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_39597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___39622))
})();
var state__33667__auto__ = (function (){var statearr_39617 = f__33666__auto__.call(null);
(statearr_39617[(6)] = c__33665__auto___39622);

return statearr_39617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___39622))
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
return (function (p__39652){
var vec__39653 = p__39652;
var v = cljs.core.nth.call(null,vec__39653,(0),null);
var p = cljs.core.nth.call(null,vec__39653,(1),null);
var job = vec__39653;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33665__auto___39835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___39835,res,vec__39653,v,p,job,jobs,results){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___39835,res,vec__39653,v,p,job,jobs,results){
return (function (state_39660){
var state_val_39661 = (state_39660[(1)]);
if((state_val_39661 === (1))){
var state_39660__$1 = state_39660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39660__$1,(2),res,v);
} else {
if((state_val_39661 === (2))){
var inst_39657 = (state_39660[(2)]);
var inst_39658 = cljs.core.async.close_BANG_.call(null,res);
var state_39660__$1 = (function (){var statearr_39662 = state_39660;
(statearr_39662[(7)] = inst_39657);

return statearr_39662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39660__$1,inst_39658);
} else {
return null;
}
}
});})(c__33665__auto___39835,res,vec__39653,v,p,job,jobs,results))
;
return ((function (switch__33280__auto__,c__33665__auto___39835,res,vec__39653,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_39663 = [null,null,null,null,null,null,null,null];
(statearr_39663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_39663[(1)] = (1));

return statearr_39663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_39660){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_39660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e39664){if((e39664 instanceof Object)){
var ex__33284__auto__ = e39664;
var statearr_39665_39838 = state_39660;
(statearr_39665_39838[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39839 = state_39660;
state_39660 = G__39839;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_39660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_39660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___39835,res,vec__39653,v,p,job,jobs,results))
})();
var state__33667__auto__ = (function (){var statearr_39667 = f__33666__auto__.call(null);
(statearr_39667[(6)] = c__33665__auto___39835);

return statearr_39667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___39835,res,vec__39653,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39668){
var vec__39669 = p__39668;
var v = cljs.core.nth.call(null,vec__39669,(0),null);
var p = cljs.core.nth.call(null,vec__39669,(1),null);
var job = vec__39669;
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
var n__31115__auto___39840 = n;
var __39841 = (0);
while(true){
if((__39841 < n__31115__auto___39840)){
var G__39672_39842 = type;
var G__39672_39843__$1 = (((G__39672_39842 instanceof cljs.core.Keyword))?G__39672_39842.fqn:null);
switch (G__39672_39843__$1) {
case "compute":
var c__33665__auto___39845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39841,c__33665__auto___39845,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (__39841,c__33665__auto___39845,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async){
return (function (state_39685){
var state_val_39686 = (state_39685[(1)]);
if((state_val_39686 === (1))){
var state_39685__$1 = state_39685;
var statearr_39687_39846 = state_39685__$1;
(statearr_39687_39846[(2)] = null);

(statearr_39687_39846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (2))){
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39685__$1,(4),jobs);
} else {
if((state_val_39686 === (3))){
var inst_39683 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39685__$1,inst_39683);
} else {
if((state_val_39686 === (4))){
var inst_39675 = (state_39685[(2)]);
var inst_39676 = process.call(null,inst_39675);
var state_39685__$1 = state_39685;
if(cljs.core.truth_(inst_39676)){
var statearr_39688_39847 = state_39685__$1;
(statearr_39688_39847[(1)] = (5));

} else {
var statearr_39689_39848 = state_39685__$1;
(statearr_39689_39848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (5))){
var state_39685__$1 = state_39685;
var statearr_39690_39850 = state_39685__$1;
(statearr_39690_39850[(2)] = null);

(statearr_39690_39850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (6))){
var state_39685__$1 = state_39685;
var statearr_39691_39851 = state_39685__$1;
(statearr_39691_39851[(2)] = null);

(statearr_39691_39851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (7))){
var inst_39681 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39692_39852 = state_39685__$1;
(statearr_39692_39852[(2)] = inst_39681);

(statearr_39692_39852[(1)] = (3));


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
});})(__39841,c__33665__auto___39845,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async))
;
return ((function (__39841,switch__33280__auto__,c__33665__auto___39845,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_39693 = [null,null,null,null,null,null,null];
(statearr_39693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_39693[(1)] = (1));

return statearr_39693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_39685){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_39685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e39694){if((e39694 instanceof Object)){
var ex__33284__auto__ = e39694;
var statearr_39695_39853 = state_39685;
(statearr_39695_39853[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39854 = state_39685;
state_39685 = G__39854;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_39685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_39685);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(__39841,switch__33280__auto__,c__33665__auto___39845,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_39696 = f__33666__auto__.call(null);
(statearr_39696[(6)] = c__33665__auto___39845);

return statearr_39696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(__39841,c__33665__auto___39845,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async))
);


break;
case "async":
var c__33665__auto___39855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39841,c__33665__auto___39855,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (__39841,c__33665__auto___39855,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async){
return (function (state_39709){
var state_val_39710 = (state_39709[(1)]);
if((state_val_39710 === (1))){
var state_39709__$1 = state_39709;
var statearr_39711_39856 = state_39709__$1;
(statearr_39711_39856[(2)] = null);

(statearr_39711_39856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (2))){
var state_39709__$1 = state_39709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39709__$1,(4),jobs);
} else {
if((state_val_39710 === (3))){
var inst_39707 = (state_39709[(2)]);
var state_39709__$1 = state_39709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39709__$1,inst_39707);
} else {
if((state_val_39710 === (4))){
var inst_39699 = (state_39709[(2)]);
var inst_39700 = async.call(null,inst_39699);
var state_39709__$1 = state_39709;
if(cljs.core.truth_(inst_39700)){
var statearr_39712_39859 = state_39709__$1;
(statearr_39712_39859[(1)] = (5));

} else {
var statearr_39713_39860 = state_39709__$1;
(statearr_39713_39860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (5))){
var state_39709__$1 = state_39709;
var statearr_39715_39861 = state_39709__$1;
(statearr_39715_39861[(2)] = null);

(statearr_39715_39861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (6))){
var state_39709__$1 = state_39709;
var statearr_39716_39862 = state_39709__$1;
(statearr_39716_39862[(2)] = null);

(statearr_39716_39862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (7))){
var inst_39705 = (state_39709[(2)]);
var state_39709__$1 = state_39709;
var statearr_39717_39865 = state_39709__$1;
(statearr_39717_39865[(2)] = inst_39705);

(statearr_39717_39865[(1)] = (3));


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
});})(__39841,c__33665__auto___39855,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async))
;
return ((function (__39841,switch__33280__auto__,c__33665__auto___39855,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_39718 = [null,null,null,null,null,null,null];
(statearr_39718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_39718[(1)] = (1));

return statearr_39718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_39709){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_39709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e39719){if((e39719 instanceof Object)){
var ex__33284__auto__ = e39719;
var statearr_39720_39866 = state_39709;
(statearr_39720_39866[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39867 = state_39709;
state_39709 = G__39867;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_39709){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_39709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(__39841,switch__33280__auto__,c__33665__auto___39855,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_39721 = f__33666__auto__.call(null);
(statearr_39721[(6)] = c__33665__auto___39855);

return statearr_39721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(__39841,c__33665__auto___39855,G__39672_39842,G__39672_39843__$1,n__31115__auto___39840,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39672_39843__$1)].join('')));

}

var G__39868 = (__39841 + (1));
__39841 = G__39868;
continue;
} else {
}
break;
}

var c__33665__auto___39870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___39870,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___39870,jobs,results,process,async){
return (function (state_39743){
var state_val_39744 = (state_39743[(1)]);
if((state_val_39744 === (1))){
var state_39743__$1 = state_39743;
var statearr_39746_39872 = state_39743__$1;
(statearr_39746_39872[(2)] = null);

(statearr_39746_39872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (2))){
var state_39743__$1 = state_39743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39743__$1,(4),from);
} else {
if((state_val_39744 === (3))){
var inst_39741 = (state_39743[(2)]);
var state_39743__$1 = state_39743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39743__$1,inst_39741);
} else {
if((state_val_39744 === (4))){
var inst_39724 = (state_39743[(7)]);
var inst_39724__$1 = (state_39743[(2)]);
var inst_39725 = (inst_39724__$1 == null);
var state_39743__$1 = (function (){var statearr_39747 = state_39743;
(statearr_39747[(7)] = inst_39724__$1);

return statearr_39747;
})();
if(cljs.core.truth_(inst_39725)){
var statearr_39748_39873 = state_39743__$1;
(statearr_39748_39873[(1)] = (5));

} else {
var statearr_39749_39874 = state_39743__$1;
(statearr_39749_39874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (5))){
var inst_39727 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39743__$1 = state_39743;
var statearr_39750_39875 = state_39743__$1;
(statearr_39750_39875[(2)] = inst_39727);

(statearr_39750_39875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (6))){
var inst_39724 = (state_39743[(7)]);
var inst_39729 = (state_39743[(8)]);
var inst_39729__$1 = cljs.core.async.chan.call(null,(1));
var inst_39730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39731 = [inst_39724,inst_39729__$1];
var inst_39732 = (new cljs.core.PersistentVector(null,2,(5),inst_39730,inst_39731,null));
var state_39743__$1 = (function (){var statearr_39751 = state_39743;
(statearr_39751[(8)] = inst_39729__$1);

return statearr_39751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39743__$1,(8),jobs,inst_39732);
} else {
if((state_val_39744 === (7))){
var inst_39739 = (state_39743[(2)]);
var state_39743__$1 = state_39743;
var statearr_39752_39876 = state_39743__$1;
(statearr_39752_39876[(2)] = inst_39739);

(statearr_39752_39876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39744 === (8))){
var inst_39729 = (state_39743[(8)]);
var inst_39734 = (state_39743[(2)]);
var state_39743__$1 = (function (){var statearr_39753 = state_39743;
(statearr_39753[(9)] = inst_39734);

return statearr_39753;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39743__$1,(9),results,inst_39729);
} else {
if((state_val_39744 === (9))){
var inst_39736 = (state_39743[(2)]);
var state_39743__$1 = (function (){var statearr_39754 = state_39743;
(statearr_39754[(10)] = inst_39736);

return statearr_39754;
})();
var statearr_39755_39877 = state_39743__$1;
(statearr_39755_39877[(2)] = null);

(statearr_39755_39877[(1)] = (2));


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
});})(c__33665__auto___39870,jobs,results,process,async))
;
return ((function (switch__33280__auto__,c__33665__auto___39870,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_39756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_39756[(1)] = (1));

return statearr_39756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_39743){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_39743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e39757){if((e39757 instanceof Object)){
var ex__33284__auto__ = e39757;
var statearr_39759_39878 = state_39743;
(statearr_39759_39878[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39879 = state_39743;
state_39743 = G__39879;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_39743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_39743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___39870,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_39760 = f__33666__auto__.call(null);
(statearr_39760[(6)] = c__33665__auto___39870);

return statearr_39760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___39870,jobs,results,process,async))
);


var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__,jobs,results,process,async){
return (function (state_39800){
var state_val_39801 = (state_39800[(1)]);
if((state_val_39801 === (7))){
var inst_39796 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39804_39880 = state_39800__$1;
(statearr_39804_39880[(2)] = inst_39796);

(statearr_39804_39880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (20))){
var state_39800__$1 = state_39800;
var statearr_39805_39881 = state_39800__$1;
(statearr_39805_39881[(2)] = null);

(statearr_39805_39881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (1))){
var state_39800__$1 = state_39800;
var statearr_39806_39883 = state_39800__$1;
(statearr_39806_39883[(2)] = null);

(statearr_39806_39883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (4))){
var inst_39763 = (state_39800[(7)]);
var inst_39763__$1 = (state_39800[(2)]);
var inst_39764 = (inst_39763__$1 == null);
var state_39800__$1 = (function (){var statearr_39807 = state_39800;
(statearr_39807[(7)] = inst_39763__$1);

return statearr_39807;
})();
if(cljs.core.truth_(inst_39764)){
var statearr_39808_39884 = state_39800__$1;
(statearr_39808_39884[(1)] = (5));

} else {
var statearr_39809_39885 = state_39800__$1;
(statearr_39809_39885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (15))){
var inst_39776 = (state_39800[(8)]);
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39800__$1,(18),to,inst_39776);
} else {
if((state_val_39801 === (21))){
var inst_39789 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39810_39886 = state_39800__$1;
(statearr_39810_39886[(2)] = inst_39789);

(statearr_39810_39886[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (13))){
var inst_39793 = (state_39800[(2)]);
var state_39800__$1 = (function (){var statearr_39811 = state_39800;
(statearr_39811[(9)] = inst_39793);

return statearr_39811;
})();
var statearr_39812_39887 = state_39800__$1;
(statearr_39812_39887[(2)] = null);

(statearr_39812_39887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (6))){
var inst_39763 = (state_39800[(7)]);
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39800__$1,(11),inst_39763);
} else {
if((state_val_39801 === (17))){
var inst_39784 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
if(cljs.core.truth_(inst_39784)){
var statearr_39814_39888 = state_39800__$1;
(statearr_39814_39888[(1)] = (19));

} else {
var statearr_39815_39889 = state_39800__$1;
(statearr_39815_39889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (3))){
var inst_39798 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39800__$1,inst_39798);
} else {
if((state_val_39801 === (12))){
var inst_39773 = (state_39800[(10)]);
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39800__$1,(14),inst_39773);
} else {
if((state_val_39801 === (2))){
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39800__$1,(4),results);
} else {
if((state_val_39801 === (19))){
var state_39800__$1 = state_39800;
var statearr_39816_39890 = state_39800__$1;
(statearr_39816_39890[(2)] = null);

(statearr_39816_39890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (11))){
var inst_39773 = (state_39800[(2)]);
var state_39800__$1 = (function (){var statearr_39817 = state_39800;
(statearr_39817[(10)] = inst_39773);

return statearr_39817;
})();
var statearr_39818_39891 = state_39800__$1;
(statearr_39818_39891[(2)] = null);

(statearr_39818_39891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (9))){
var state_39800__$1 = state_39800;
var statearr_39819_39892 = state_39800__$1;
(statearr_39819_39892[(2)] = null);

(statearr_39819_39892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (5))){
var state_39800__$1 = state_39800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39820_39893 = state_39800__$1;
(statearr_39820_39893[(1)] = (8));

} else {
var statearr_39821_39894 = state_39800__$1;
(statearr_39821_39894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (14))){
var inst_39778 = (state_39800[(11)]);
var inst_39776 = (state_39800[(8)]);
var inst_39776__$1 = (state_39800[(2)]);
var inst_39777 = (inst_39776__$1 == null);
var inst_39778__$1 = cljs.core.not.call(null,inst_39777);
var state_39800__$1 = (function (){var statearr_39822 = state_39800;
(statearr_39822[(11)] = inst_39778__$1);

(statearr_39822[(8)] = inst_39776__$1);

return statearr_39822;
})();
if(inst_39778__$1){
var statearr_39823_39895 = state_39800__$1;
(statearr_39823_39895[(1)] = (15));

} else {
var statearr_39824_39896 = state_39800__$1;
(statearr_39824_39896[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (16))){
var inst_39778 = (state_39800[(11)]);
var state_39800__$1 = state_39800;
var statearr_39825_39897 = state_39800__$1;
(statearr_39825_39897[(2)] = inst_39778);

(statearr_39825_39897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (10))){
var inst_39770 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39826_39898 = state_39800__$1;
(statearr_39826_39898[(2)] = inst_39770);

(statearr_39826_39898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (18))){
var inst_39781 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39827_39900 = state_39800__$1;
(statearr_39827_39900[(2)] = inst_39781);

(statearr_39827_39900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (8))){
var inst_39767 = cljs.core.async.close_BANG_.call(null,to);
var state_39800__$1 = state_39800;
var statearr_39828_39901 = state_39800__$1;
(statearr_39828_39901[(2)] = inst_39767);

(statearr_39828_39901[(1)] = (10));


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
});})(c__33665__auto__,jobs,results,process,async))
;
return ((function (switch__33280__auto__,c__33665__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_39829 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_39829[(1)] = (1));

return statearr_39829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_39800){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_39800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e39830){if((e39830 instanceof Object)){
var ex__33284__auto__ = e39830;
var statearr_39831_39904 = state_39800;
(statearr_39831_39904[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39905 = state_39800;
state_39800 = G__39905;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_39800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_39800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_39832 = f__33666__auto__.call(null);
(statearr_39832[(6)] = c__33665__auto__);

return statearr_39832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__,jobs,results,process,async))
);

return c__33665__auto__;
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
var G__39907 = arguments.length;
switch (G__39907) {
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
var G__39910 = arguments.length;
switch (G__39910) {
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
var G__39917 = arguments.length;
switch (G__39917) {
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
var c__33665__auto___39966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___39966,tc,fc){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___39966,tc,fc){
return (function (state_39943){
var state_val_39944 = (state_39943[(1)]);
if((state_val_39944 === (7))){
var inst_39939 = (state_39943[(2)]);
var state_39943__$1 = state_39943;
var statearr_39945_39967 = state_39943__$1;
(statearr_39945_39967[(2)] = inst_39939);

(statearr_39945_39967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (1))){
var state_39943__$1 = state_39943;
var statearr_39946_39968 = state_39943__$1;
(statearr_39946_39968[(2)] = null);

(statearr_39946_39968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (4))){
var inst_39920 = (state_39943[(7)]);
var inst_39920__$1 = (state_39943[(2)]);
var inst_39921 = (inst_39920__$1 == null);
var state_39943__$1 = (function (){var statearr_39947 = state_39943;
(statearr_39947[(7)] = inst_39920__$1);

return statearr_39947;
})();
if(cljs.core.truth_(inst_39921)){
var statearr_39948_39969 = state_39943__$1;
(statearr_39948_39969[(1)] = (5));

} else {
var statearr_39949_39970 = state_39943__$1;
(statearr_39949_39970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (13))){
var state_39943__$1 = state_39943;
var statearr_39950_39971 = state_39943__$1;
(statearr_39950_39971[(2)] = null);

(statearr_39950_39971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (6))){
var inst_39920 = (state_39943[(7)]);
var inst_39926 = p.call(null,inst_39920);
var state_39943__$1 = state_39943;
if(cljs.core.truth_(inst_39926)){
var statearr_39951_39974 = state_39943__$1;
(statearr_39951_39974[(1)] = (9));

} else {
var statearr_39952_39975 = state_39943__$1;
(statearr_39952_39975[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (3))){
var inst_39941 = (state_39943[(2)]);
var state_39943__$1 = state_39943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39943__$1,inst_39941);
} else {
if((state_val_39944 === (12))){
var state_39943__$1 = state_39943;
var statearr_39953_39977 = state_39943__$1;
(statearr_39953_39977[(2)] = null);

(statearr_39953_39977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (2))){
var state_39943__$1 = state_39943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39943__$1,(4),ch);
} else {
if((state_val_39944 === (11))){
var inst_39920 = (state_39943[(7)]);
var inst_39930 = (state_39943[(2)]);
var state_39943__$1 = state_39943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39943__$1,(8),inst_39930,inst_39920);
} else {
if((state_val_39944 === (9))){
var state_39943__$1 = state_39943;
var statearr_39954_39978 = state_39943__$1;
(statearr_39954_39978[(2)] = tc);

(statearr_39954_39978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (5))){
var inst_39923 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39924 = cljs.core.async.close_BANG_.call(null,fc);
var state_39943__$1 = (function (){var statearr_39955 = state_39943;
(statearr_39955[(8)] = inst_39923);

return statearr_39955;
})();
var statearr_39956_39980 = state_39943__$1;
(statearr_39956_39980[(2)] = inst_39924);

(statearr_39956_39980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (14))){
var inst_39937 = (state_39943[(2)]);
var state_39943__$1 = state_39943;
var statearr_39957_39981 = state_39943__$1;
(statearr_39957_39981[(2)] = inst_39937);

(statearr_39957_39981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (10))){
var state_39943__$1 = state_39943;
var statearr_39958_39982 = state_39943__$1;
(statearr_39958_39982[(2)] = fc);

(statearr_39958_39982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (8))){
var inst_39932 = (state_39943[(2)]);
var state_39943__$1 = state_39943;
if(cljs.core.truth_(inst_39932)){
var statearr_39959_39983 = state_39943__$1;
(statearr_39959_39983[(1)] = (12));

} else {
var statearr_39960_39984 = state_39943__$1;
(statearr_39960_39984[(1)] = (13));

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
});})(c__33665__auto___39966,tc,fc))
;
return ((function (switch__33280__auto__,c__33665__auto___39966,tc,fc){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_39961 = [null,null,null,null,null,null,null,null,null];
(statearr_39961[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_39961[(1)] = (1));

return statearr_39961;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_39943){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_39943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e39962){if((e39962 instanceof Object)){
var ex__33284__auto__ = e39962;
var statearr_39963_39985 = state_39943;
(statearr_39963_39985[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39987 = state_39943;
state_39943 = G__39987;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_39943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_39943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___39966,tc,fc))
})();
var state__33667__auto__ = (function (){var statearr_39964 = f__33666__auto__.call(null);
(statearr_39964[(6)] = c__33665__auto___39966);

return statearr_39964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___39966,tc,fc))
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
var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__){
return (function (state_40012){
var state_val_40013 = (state_40012[(1)]);
if((state_val_40013 === (7))){
var inst_40008 = (state_40012[(2)]);
var state_40012__$1 = state_40012;
var statearr_40015_40036 = state_40012__$1;
(statearr_40015_40036[(2)] = inst_40008);

(statearr_40015_40036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40013 === (1))){
var inst_39992 = init;
var state_40012__$1 = (function (){var statearr_40016 = state_40012;
(statearr_40016[(7)] = inst_39992);

return statearr_40016;
})();
var statearr_40017_40037 = state_40012__$1;
(statearr_40017_40037[(2)] = null);

(statearr_40017_40037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40013 === (4))){
var inst_39995 = (state_40012[(8)]);
var inst_39995__$1 = (state_40012[(2)]);
var inst_39996 = (inst_39995__$1 == null);
var state_40012__$1 = (function (){var statearr_40018 = state_40012;
(statearr_40018[(8)] = inst_39995__$1);

return statearr_40018;
})();
if(cljs.core.truth_(inst_39996)){
var statearr_40019_40038 = state_40012__$1;
(statearr_40019_40038[(1)] = (5));

} else {
var statearr_40020_40039 = state_40012__$1;
(statearr_40020_40039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40013 === (6))){
var inst_39992 = (state_40012[(7)]);
var inst_39999 = (state_40012[(9)]);
var inst_39995 = (state_40012[(8)]);
var inst_39999__$1 = f.call(null,inst_39992,inst_39995);
var inst_40000 = cljs.core.reduced_QMARK_.call(null,inst_39999__$1);
var state_40012__$1 = (function (){var statearr_40021 = state_40012;
(statearr_40021[(9)] = inst_39999__$1);

return statearr_40021;
})();
if(inst_40000){
var statearr_40022_40040 = state_40012__$1;
(statearr_40022_40040[(1)] = (8));

} else {
var statearr_40023_40041 = state_40012__$1;
(statearr_40023_40041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40013 === (3))){
var inst_40010 = (state_40012[(2)]);
var state_40012__$1 = state_40012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40012__$1,inst_40010);
} else {
if((state_val_40013 === (2))){
var state_40012__$1 = state_40012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40012__$1,(4),ch);
} else {
if((state_val_40013 === (9))){
var inst_39999 = (state_40012[(9)]);
var inst_39992 = inst_39999;
var state_40012__$1 = (function (){var statearr_40024 = state_40012;
(statearr_40024[(7)] = inst_39992);

return statearr_40024;
})();
var statearr_40025_40042 = state_40012__$1;
(statearr_40025_40042[(2)] = null);

(statearr_40025_40042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40013 === (5))){
var inst_39992 = (state_40012[(7)]);
var state_40012__$1 = state_40012;
var statearr_40026_40043 = state_40012__$1;
(statearr_40026_40043[(2)] = inst_39992);

(statearr_40026_40043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40013 === (10))){
var inst_40006 = (state_40012[(2)]);
var state_40012__$1 = state_40012;
var statearr_40028_40044 = state_40012__$1;
(statearr_40028_40044[(2)] = inst_40006);

(statearr_40028_40044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40013 === (8))){
var inst_39999 = (state_40012[(9)]);
var inst_40002 = cljs.core.deref.call(null,inst_39999);
var state_40012__$1 = state_40012;
var statearr_40030_40045 = state_40012__$1;
(statearr_40030_40045[(2)] = inst_40002);

(statearr_40030_40045[(1)] = (10));


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
});})(c__33665__auto__))
;
return ((function (switch__33280__auto__,c__33665__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33281__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33281__auto____0 = (function (){
var statearr_40031 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40031[(0)] = cljs$core$async$reduce_$_state_machine__33281__auto__);

(statearr_40031[(1)] = (1));

return statearr_40031;
});
var cljs$core$async$reduce_$_state_machine__33281__auto____1 = (function (state_40012){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_40012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e40032){if((e40032 instanceof Object)){
var ex__33284__auto__ = e40032;
var statearr_40033_40046 = state_40012;
(statearr_40033_40046[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40047 = state_40012;
state_40012 = G__40047;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33281__auto__ = function(state_40012){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33281__auto____1.call(this,state_40012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33281__auto____0;
cljs$core$async$reduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33281__auto____1;
return cljs$core$async$reduce_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_40035 = f__33666__auto__.call(null);
(statearr_40035[(6)] = c__33665__auto__);

return statearr_40035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__))
);

return c__33665__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__,f__$1){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__,f__$1){
return (function (state_40053){
var state_val_40054 = (state_40053[(1)]);
if((state_val_40054 === (1))){
var inst_40048 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40053__$1 = state_40053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40053__$1,(2),inst_40048);
} else {
if((state_val_40054 === (2))){
var inst_40050 = (state_40053[(2)]);
var inst_40051 = f__$1.call(null,inst_40050);
var state_40053__$1 = state_40053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40053__$1,inst_40051);
} else {
return null;
}
}
});})(c__33665__auto__,f__$1))
;
return ((function (switch__33280__auto__,c__33665__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33281__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33281__auto____0 = (function (){
var statearr_40055 = [null,null,null,null,null,null,null];
(statearr_40055[(0)] = cljs$core$async$transduce_$_state_machine__33281__auto__);

(statearr_40055[(1)] = (1));

return statearr_40055;
});
var cljs$core$async$transduce_$_state_machine__33281__auto____1 = (function (state_40053){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_40053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e40056){if((e40056 instanceof Object)){
var ex__33284__auto__ = e40056;
var statearr_40057_40059 = state_40053;
(statearr_40057_40059[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40060 = state_40053;
state_40053 = G__40060;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33281__auto__ = function(state_40053){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33281__auto____1.call(this,state_40053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33281__auto____0;
cljs$core$async$transduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33281__auto____1;
return cljs$core$async$transduce_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,f__$1))
})();
var state__33667__auto__ = (function (){var statearr_40058 = f__33666__auto__.call(null);
(statearr_40058[(6)] = c__33665__auto__);

return statearr_40058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__,f__$1))
);

return c__33665__auto__;
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
var G__40062 = arguments.length;
switch (G__40062) {
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
var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__){
return (function (state_40087){
var state_val_40088 = (state_40087[(1)]);
if((state_val_40088 === (7))){
var inst_40069 = (state_40087[(2)]);
var state_40087__$1 = state_40087;
var statearr_40089_40110 = state_40087__$1;
(statearr_40089_40110[(2)] = inst_40069);

(statearr_40089_40110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40088 === (1))){
var inst_40063 = cljs.core.seq.call(null,coll);
var inst_40064 = inst_40063;
var state_40087__$1 = (function (){var statearr_40090 = state_40087;
(statearr_40090[(7)] = inst_40064);

return statearr_40090;
})();
var statearr_40091_40111 = state_40087__$1;
(statearr_40091_40111[(2)] = null);

(statearr_40091_40111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40088 === (4))){
var inst_40064 = (state_40087[(7)]);
var inst_40067 = cljs.core.first.call(null,inst_40064);
var state_40087__$1 = state_40087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40087__$1,(7),ch,inst_40067);
} else {
if((state_val_40088 === (13))){
var inst_40081 = (state_40087[(2)]);
var state_40087__$1 = state_40087;
var statearr_40092_40112 = state_40087__$1;
(statearr_40092_40112[(2)] = inst_40081);

(statearr_40092_40112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40088 === (6))){
var inst_40072 = (state_40087[(2)]);
var state_40087__$1 = state_40087;
if(cljs.core.truth_(inst_40072)){
var statearr_40093_40113 = state_40087__$1;
(statearr_40093_40113[(1)] = (8));

} else {
var statearr_40094_40114 = state_40087__$1;
(statearr_40094_40114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40088 === (3))){
var inst_40085 = (state_40087[(2)]);
var state_40087__$1 = state_40087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40087__$1,inst_40085);
} else {
if((state_val_40088 === (12))){
var state_40087__$1 = state_40087;
var statearr_40095_40115 = state_40087__$1;
(statearr_40095_40115[(2)] = null);

(statearr_40095_40115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40088 === (2))){
var inst_40064 = (state_40087[(7)]);
var state_40087__$1 = state_40087;
if(cljs.core.truth_(inst_40064)){
var statearr_40096_40116 = state_40087__$1;
(statearr_40096_40116[(1)] = (4));

} else {
var statearr_40097_40117 = state_40087__$1;
(statearr_40097_40117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40088 === (11))){
var inst_40078 = cljs.core.async.close_BANG_.call(null,ch);
var state_40087__$1 = state_40087;
var statearr_40098_40118 = state_40087__$1;
(statearr_40098_40118[(2)] = inst_40078);

(statearr_40098_40118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40088 === (9))){
var state_40087__$1 = state_40087;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40099_40119 = state_40087__$1;
(statearr_40099_40119[(1)] = (11));

} else {
var statearr_40100_40120 = state_40087__$1;
(statearr_40100_40120[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40088 === (5))){
var inst_40064 = (state_40087[(7)]);
var state_40087__$1 = state_40087;
var statearr_40101_40121 = state_40087__$1;
(statearr_40101_40121[(2)] = inst_40064);

(statearr_40101_40121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40088 === (10))){
var inst_40083 = (state_40087[(2)]);
var state_40087__$1 = state_40087;
var statearr_40102_40122 = state_40087__$1;
(statearr_40102_40122[(2)] = inst_40083);

(statearr_40102_40122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40088 === (8))){
var inst_40064 = (state_40087[(7)]);
var inst_40074 = cljs.core.next.call(null,inst_40064);
var inst_40064__$1 = inst_40074;
var state_40087__$1 = (function (){var statearr_40103 = state_40087;
(statearr_40103[(7)] = inst_40064__$1);

return statearr_40103;
})();
var statearr_40104_40123 = state_40087__$1;
(statearr_40104_40123[(2)] = null);

(statearr_40104_40123[(1)] = (2));


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
});})(c__33665__auto__))
;
return ((function (switch__33280__auto__,c__33665__auto__){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_40105 = [null,null,null,null,null,null,null,null];
(statearr_40105[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_40105[(1)] = (1));

return statearr_40105;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_40087){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_40087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e40106){if((e40106 instanceof Object)){
var ex__33284__auto__ = e40106;
var statearr_40107_40124 = state_40087;
(statearr_40107_40124[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40125 = state_40087;
state_40087 = G__40125;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_40087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_40087);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_40108 = f__33666__auto__.call(null);
(statearr_40108[(6)] = c__33665__auto__);

return statearr_40108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__))
);

return c__33665__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async40130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40130 = (function (ch,cs,meta40131){
this.ch = ch;
this.cs = cs;
this.meta40131 = meta40131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40132,meta40131__$1){
var self__ = this;
var _40132__$1 = this;
return (new cljs.core.async.t_cljs$core$async40130(self__.ch,self__.cs,meta40131__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40132){
var self__ = this;
var _40132__$1 = this;
return self__.meta40131;
});})(cs))
;

cljs.core.async.t_cljs$core$async40130.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40130.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40130.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40130.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40130.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40130.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40131","meta40131",-1841175535,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40130";

cljs.core.async.t_cljs$core$async40130.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async40130");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40130 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40130(ch__$1,cs__$1,meta40131){
return (new cljs.core.async.t_cljs$core$async40130(ch__$1,cs__$1,meta40131));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40130(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33665__auto___40373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___40373,cs,m,dchan,dctr,done){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___40373,cs,m,dchan,dctr,done){
return (function (state_40272){
var state_val_40273 = (state_40272[(1)]);
if((state_val_40273 === (7))){
var inst_40267 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
var statearr_40274_40374 = state_40272__$1;
(statearr_40274_40374[(2)] = inst_40267);

(statearr_40274_40374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (20))){
var inst_40168 = (state_40272[(7)]);
var inst_40180 = cljs.core.first.call(null,inst_40168);
var inst_40181 = cljs.core.nth.call(null,inst_40180,(0),null);
var inst_40182 = cljs.core.nth.call(null,inst_40180,(1),null);
var state_40272__$1 = (function (){var statearr_40275 = state_40272;
(statearr_40275[(8)] = inst_40181);

return statearr_40275;
})();
if(cljs.core.truth_(inst_40182)){
var statearr_40276_40375 = state_40272__$1;
(statearr_40276_40375[(1)] = (22));

} else {
var statearr_40277_40376 = state_40272__$1;
(statearr_40277_40376[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (27))){
var inst_40219 = (state_40272[(9)]);
var inst_40137 = (state_40272[(10)]);
var inst_40214 = (state_40272[(11)]);
var inst_40212 = (state_40272[(12)]);
var inst_40219__$1 = cljs.core._nth.call(null,inst_40212,inst_40214);
var inst_40220 = cljs.core.async.put_BANG_.call(null,inst_40219__$1,inst_40137,done);
var state_40272__$1 = (function (){var statearr_40278 = state_40272;
(statearr_40278[(9)] = inst_40219__$1);

return statearr_40278;
})();
if(cljs.core.truth_(inst_40220)){
var statearr_40279_40378 = state_40272__$1;
(statearr_40279_40378[(1)] = (30));

} else {
var statearr_40280_40379 = state_40272__$1;
(statearr_40280_40379[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (1))){
var state_40272__$1 = state_40272;
var statearr_40281_40380 = state_40272__$1;
(statearr_40281_40380[(2)] = null);

(statearr_40281_40380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (24))){
var inst_40168 = (state_40272[(7)]);
var inst_40187 = (state_40272[(2)]);
var inst_40188 = cljs.core.next.call(null,inst_40168);
var inst_40146 = inst_40188;
var inst_40147 = null;
var inst_40148 = (0);
var inst_40149 = (0);
var state_40272__$1 = (function (){var statearr_40282 = state_40272;
(statearr_40282[(13)] = inst_40149);

(statearr_40282[(14)] = inst_40147);

(statearr_40282[(15)] = inst_40148);

(statearr_40282[(16)] = inst_40146);

(statearr_40282[(17)] = inst_40187);

return statearr_40282;
})();
var statearr_40283_40382 = state_40272__$1;
(statearr_40283_40382[(2)] = null);

(statearr_40283_40382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (39))){
var state_40272__$1 = state_40272;
var statearr_40288_40385 = state_40272__$1;
(statearr_40288_40385[(2)] = null);

(statearr_40288_40385[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (4))){
var inst_40137 = (state_40272[(10)]);
var inst_40137__$1 = (state_40272[(2)]);
var inst_40138 = (inst_40137__$1 == null);
var state_40272__$1 = (function (){var statearr_40290 = state_40272;
(statearr_40290[(10)] = inst_40137__$1);

return statearr_40290;
})();
if(cljs.core.truth_(inst_40138)){
var statearr_40291_40387 = state_40272__$1;
(statearr_40291_40387[(1)] = (5));

} else {
var statearr_40292_40388 = state_40272__$1;
(statearr_40292_40388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (15))){
var inst_40149 = (state_40272[(13)]);
var inst_40147 = (state_40272[(14)]);
var inst_40148 = (state_40272[(15)]);
var inst_40146 = (state_40272[(16)]);
var inst_40164 = (state_40272[(2)]);
var inst_40165 = (inst_40149 + (1));
var tmp40284 = inst_40147;
var tmp40285 = inst_40148;
var tmp40286 = inst_40146;
var inst_40146__$1 = tmp40286;
var inst_40147__$1 = tmp40284;
var inst_40148__$1 = tmp40285;
var inst_40149__$1 = inst_40165;
var state_40272__$1 = (function (){var statearr_40293 = state_40272;
(statearr_40293[(13)] = inst_40149__$1);

(statearr_40293[(14)] = inst_40147__$1);

(statearr_40293[(18)] = inst_40164);

(statearr_40293[(15)] = inst_40148__$1);

(statearr_40293[(16)] = inst_40146__$1);

return statearr_40293;
})();
var statearr_40294_40390 = state_40272__$1;
(statearr_40294_40390[(2)] = null);

(statearr_40294_40390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (21))){
var inst_40191 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
var statearr_40298_40391 = state_40272__$1;
(statearr_40298_40391[(2)] = inst_40191);

(statearr_40298_40391[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (31))){
var inst_40219 = (state_40272[(9)]);
var inst_40223 = done.call(null,null);
var inst_40224 = cljs.core.async.untap_STAR_.call(null,m,inst_40219);
var state_40272__$1 = (function (){var statearr_40299 = state_40272;
(statearr_40299[(19)] = inst_40223);

return statearr_40299;
})();
var statearr_40300_40394 = state_40272__$1;
(statearr_40300_40394[(2)] = inst_40224);

(statearr_40300_40394[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (32))){
var inst_40214 = (state_40272[(11)]);
var inst_40212 = (state_40272[(12)]);
var inst_40211 = (state_40272[(20)]);
var inst_40213 = (state_40272[(21)]);
var inst_40226 = (state_40272[(2)]);
var inst_40227 = (inst_40214 + (1));
var tmp40295 = inst_40212;
var tmp40296 = inst_40211;
var tmp40297 = inst_40213;
var inst_40211__$1 = tmp40296;
var inst_40212__$1 = tmp40295;
var inst_40213__$1 = tmp40297;
var inst_40214__$1 = inst_40227;
var state_40272__$1 = (function (){var statearr_40301 = state_40272;
(statearr_40301[(11)] = inst_40214__$1);

(statearr_40301[(22)] = inst_40226);

(statearr_40301[(12)] = inst_40212__$1);

(statearr_40301[(20)] = inst_40211__$1);

(statearr_40301[(21)] = inst_40213__$1);

return statearr_40301;
})();
var statearr_40302_40400 = state_40272__$1;
(statearr_40302_40400[(2)] = null);

(statearr_40302_40400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (40))){
var inst_40239 = (state_40272[(23)]);
var inst_40243 = done.call(null,null);
var inst_40244 = cljs.core.async.untap_STAR_.call(null,m,inst_40239);
var state_40272__$1 = (function (){var statearr_40303 = state_40272;
(statearr_40303[(24)] = inst_40243);

return statearr_40303;
})();
var statearr_40304_40402 = state_40272__$1;
(statearr_40304_40402[(2)] = inst_40244);

(statearr_40304_40402[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (33))){
var inst_40230 = (state_40272[(25)]);
var inst_40232 = cljs.core.chunked_seq_QMARK_.call(null,inst_40230);
var state_40272__$1 = state_40272;
if(inst_40232){
var statearr_40306_40403 = state_40272__$1;
(statearr_40306_40403[(1)] = (36));

} else {
var statearr_40307_40404 = state_40272__$1;
(statearr_40307_40404[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (13))){
var inst_40158 = (state_40272[(26)]);
var inst_40161 = cljs.core.async.close_BANG_.call(null,inst_40158);
var state_40272__$1 = state_40272;
var statearr_40308_40406 = state_40272__$1;
(statearr_40308_40406[(2)] = inst_40161);

(statearr_40308_40406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (22))){
var inst_40181 = (state_40272[(8)]);
var inst_40184 = cljs.core.async.close_BANG_.call(null,inst_40181);
var state_40272__$1 = state_40272;
var statearr_40309_40407 = state_40272__$1;
(statearr_40309_40407[(2)] = inst_40184);

(statearr_40309_40407[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (36))){
var inst_40230 = (state_40272[(25)]);
var inst_40234 = cljs.core.chunk_first.call(null,inst_40230);
var inst_40235 = cljs.core.chunk_rest.call(null,inst_40230);
var inst_40236 = cljs.core.count.call(null,inst_40234);
var inst_40211 = inst_40235;
var inst_40212 = inst_40234;
var inst_40213 = inst_40236;
var inst_40214 = (0);
var state_40272__$1 = (function (){var statearr_40310 = state_40272;
(statearr_40310[(11)] = inst_40214);

(statearr_40310[(12)] = inst_40212);

(statearr_40310[(20)] = inst_40211);

(statearr_40310[(21)] = inst_40213);

return statearr_40310;
})();
var statearr_40311_40408 = state_40272__$1;
(statearr_40311_40408[(2)] = null);

(statearr_40311_40408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (41))){
var inst_40230 = (state_40272[(25)]);
var inst_40246 = (state_40272[(2)]);
var inst_40247 = cljs.core.next.call(null,inst_40230);
var inst_40211 = inst_40247;
var inst_40212 = null;
var inst_40213 = (0);
var inst_40214 = (0);
var state_40272__$1 = (function (){var statearr_40312 = state_40272;
(statearr_40312[(27)] = inst_40246);

(statearr_40312[(11)] = inst_40214);

(statearr_40312[(12)] = inst_40212);

(statearr_40312[(20)] = inst_40211);

(statearr_40312[(21)] = inst_40213);

return statearr_40312;
})();
var statearr_40315_40409 = state_40272__$1;
(statearr_40315_40409[(2)] = null);

(statearr_40315_40409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (43))){
var state_40272__$1 = state_40272;
var statearr_40316_40410 = state_40272__$1;
(statearr_40316_40410[(2)] = null);

(statearr_40316_40410[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (29))){
var inst_40255 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
var statearr_40317_40411 = state_40272__$1;
(statearr_40317_40411[(2)] = inst_40255);

(statearr_40317_40411[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (44))){
var inst_40264 = (state_40272[(2)]);
var state_40272__$1 = (function (){var statearr_40318 = state_40272;
(statearr_40318[(28)] = inst_40264);

return statearr_40318;
})();
var statearr_40319_40412 = state_40272__$1;
(statearr_40319_40412[(2)] = null);

(statearr_40319_40412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (6))){
var inst_40201 = (state_40272[(29)]);
var inst_40200 = cljs.core.deref.call(null,cs);
var inst_40201__$1 = cljs.core.keys.call(null,inst_40200);
var inst_40204 = cljs.core.count.call(null,inst_40201__$1);
var inst_40205 = cljs.core.reset_BANG_.call(null,dctr,inst_40204);
var inst_40210 = cljs.core.seq.call(null,inst_40201__$1);
var inst_40211 = inst_40210;
var inst_40212 = null;
var inst_40213 = (0);
var inst_40214 = (0);
var state_40272__$1 = (function (){var statearr_40320 = state_40272;
(statearr_40320[(29)] = inst_40201__$1);

(statearr_40320[(30)] = inst_40205);

(statearr_40320[(11)] = inst_40214);

(statearr_40320[(12)] = inst_40212);

(statearr_40320[(20)] = inst_40211);

(statearr_40320[(21)] = inst_40213);

return statearr_40320;
})();
var statearr_40321_40414 = state_40272__$1;
(statearr_40321_40414[(2)] = null);

(statearr_40321_40414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (28))){
var inst_40230 = (state_40272[(25)]);
var inst_40211 = (state_40272[(20)]);
var inst_40230__$1 = cljs.core.seq.call(null,inst_40211);
var state_40272__$1 = (function (){var statearr_40324 = state_40272;
(statearr_40324[(25)] = inst_40230__$1);

return statearr_40324;
})();
if(inst_40230__$1){
var statearr_40325_40415 = state_40272__$1;
(statearr_40325_40415[(1)] = (33));

} else {
var statearr_40326_40416 = state_40272__$1;
(statearr_40326_40416[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (25))){
var inst_40214 = (state_40272[(11)]);
var inst_40213 = (state_40272[(21)]);
var inst_40216 = (inst_40214 < inst_40213);
var inst_40217 = inst_40216;
var state_40272__$1 = state_40272;
if(cljs.core.truth_(inst_40217)){
var statearr_40327_40417 = state_40272__$1;
(statearr_40327_40417[(1)] = (27));

} else {
var statearr_40328_40418 = state_40272__$1;
(statearr_40328_40418[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (34))){
var state_40272__$1 = state_40272;
var statearr_40329_40419 = state_40272__$1;
(statearr_40329_40419[(2)] = null);

(statearr_40329_40419[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (17))){
var state_40272__$1 = state_40272;
var statearr_40330_40421 = state_40272__$1;
(statearr_40330_40421[(2)] = null);

(statearr_40330_40421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (3))){
var inst_40269 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40272__$1,inst_40269);
} else {
if((state_val_40273 === (12))){
var inst_40196 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
var statearr_40331_40423 = state_40272__$1;
(statearr_40331_40423[(2)] = inst_40196);

(statearr_40331_40423[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (2))){
var state_40272__$1 = state_40272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40272__$1,(4),ch);
} else {
if((state_val_40273 === (23))){
var state_40272__$1 = state_40272;
var statearr_40332_40424 = state_40272__$1;
(statearr_40332_40424[(2)] = null);

(statearr_40332_40424[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (35))){
var inst_40253 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
var statearr_40333_40425 = state_40272__$1;
(statearr_40333_40425[(2)] = inst_40253);

(statearr_40333_40425[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (19))){
var inst_40168 = (state_40272[(7)]);
var inst_40172 = cljs.core.chunk_first.call(null,inst_40168);
var inst_40173 = cljs.core.chunk_rest.call(null,inst_40168);
var inst_40174 = cljs.core.count.call(null,inst_40172);
var inst_40146 = inst_40173;
var inst_40147 = inst_40172;
var inst_40148 = inst_40174;
var inst_40149 = (0);
var state_40272__$1 = (function (){var statearr_40334 = state_40272;
(statearr_40334[(13)] = inst_40149);

(statearr_40334[(14)] = inst_40147);

(statearr_40334[(15)] = inst_40148);

(statearr_40334[(16)] = inst_40146);

return statearr_40334;
})();
var statearr_40335_40426 = state_40272__$1;
(statearr_40335_40426[(2)] = null);

(statearr_40335_40426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (11))){
var inst_40146 = (state_40272[(16)]);
var inst_40168 = (state_40272[(7)]);
var inst_40168__$1 = cljs.core.seq.call(null,inst_40146);
var state_40272__$1 = (function (){var statearr_40336 = state_40272;
(statearr_40336[(7)] = inst_40168__$1);

return statearr_40336;
})();
if(inst_40168__$1){
var statearr_40337_40427 = state_40272__$1;
(statearr_40337_40427[(1)] = (16));

} else {
var statearr_40338_40428 = state_40272__$1;
(statearr_40338_40428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (9))){
var inst_40198 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
var statearr_40339_40430 = state_40272__$1;
(statearr_40339_40430[(2)] = inst_40198);

(statearr_40339_40430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (5))){
var inst_40144 = cljs.core.deref.call(null,cs);
var inst_40145 = cljs.core.seq.call(null,inst_40144);
var inst_40146 = inst_40145;
var inst_40147 = null;
var inst_40148 = (0);
var inst_40149 = (0);
var state_40272__$1 = (function (){var statearr_40340 = state_40272;
(statearr_40340[(13)] = inst_40149);

(statearr_40340[(14)] = inst_40147);

(statearr_40340[(15)] = inst_40148);

(statearr_40340[(16)] = inst_40146);

return statearr_40340;
})();
var statearr_40341_40432 = state_40272__$1;
(statearr_40341_40432[(2)] = null);

(statearr_40341_40432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (14))){
var state_40272__$1 = state_40272;
var statearr_40342_40434 = state_40272__$1;
(statearr_40342_40434[(2)] = null);

(statearr_40342_40434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (45))){
var inst_40261 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
var statearr_40343_40436 = state_40272__$1;
(statearr_40343_40436[(2)] = inst_40261);

(statearr_40343_40436[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (26))){
var inst_40201 = (state_40272[(29)]);
var inst_40257 = (state_40272[(2)]);
var inst_40258 = cljs.core.seq.call(null,inst_40201);
var state_40272__$1 = (function (){var statearr_40344 = state_40272;
(statearr_40344[(31)] = inst_40257);

return statearr_40344;
})();
if(inst_40258){
var statearr_40345_40437 = state_40272__$1;
(statearr_40345_40437[(1)] = (42));

} else {
var statearr_40346_40438 = state_40272__$1;
(statearr_40346_40438[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (16))){
var inst_40168 = (state_40272[(7)]);
var inst_40170 = cljs.core.chunked_seq_QMARK_.call(null,inst_40168);
var state_40272__$1 = state_40272;
if(inst_40170){
var statearr_40347_40439 = state_40272__$1;
(statearr_40347_40439[(1)] = (19));

} else {
var statearr_40348_40440 = state_40272__$1;
(statearr_40348_40440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (38))){
var inst_40250 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
var statearr_40349_40441 = state_40272__$1;
(statearr_40349_40441[(2)] = inst_40250);

(statearr_40349_40441[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (30))){
var state_40272__$1 = state_40272;
var statearr_40350_40442 = state_40272__$1;
(statearr_40350_40442[(2)] = null);

(statearr_40350_40442[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (10))){
var inst_40149 = (state_40272[(13)]);
var inst_40147 = (state_40272[(14)]);
var inst_40157 = cljs.core._nth.call(null,inst_40147,inst_40149);
var inst_40158 = cljs.core.nth.call(null,inst_40157,(0),null);
var inst_40159 = cljs.core.nth.call(null,inst_40157,(1),null);
var state_40272__$1 = (function (){var statearr_40351 = state_40272;
(statearr_40351[(26)] = inst_40158);

return statearr_40351;
})();
if(cljs.core.truth_(inst_40159)){
var statearr_40352_40444 = state_40272__$1;
(statearr_40352_40444[(1)] = (13));

} else {
var statearr_40353_40446 = state_40272__$1;
(statearr_40353_40446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (18))){
var inst_40194 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
var statearr_40354_40447 = state_40272__$1;
(statearr_40354_40447[(2)] = inst_40194);

(statearr_40354_40447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (42))){
var state_40272__$1 = state_40272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40272__$1,(45),dchan);
} else {
if((state_val_40273 === (37))){
var inst_40230 = (state_40272[(25)]);
var inst_40137 = (state_40272[(10)]);
var inst_40239 = (state_40272[(23)]);
var inst_40239__$1 = cljs.core.first.call(null,inst_40230);
var inst_40240 = cljs.core.async.put_BANG_.call(null,inst_40239__$1,inst_40137,done);
var state_40272__$1 = (function (){var statearr_40355 = state_40272;
(statearr_40355[(23)] = inst_40239__$1);

return statearr_40355;
})();
if(cljs.core.truth_(inst_40240)){
var statearr_40356_40452 = state_40272__$1;
(statearr_40356_40452[(1)] = (39));

} else {
var statearr_40357_40453 = state_40272__$1;
(statearr_40357_40453[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (8))){
var inst_40149 = (state_40272[(13)]);
var inst_40148 = (state_40272[(15)]);
var inst_40151 = (inst_40149 < inst_40148);
var inst_40152 = inst_40151;
var state_40272__$1 = state_40272;
if(cljs.core.truth_(inst_40152)){
var statearr_40358_40454 = state_40272__$1;
(statearr_40358_40454[(1)] = (10));

} else {
var statearr_40359_40455 = state_40272__$1;
(statearr_40359_40455[(1)] = (11));

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
});})(c__33665__auto___40373,cs,m,dchan,dctr,done))
;
return ((function (switch__33280__auto__,c__33665__auto___40373,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33281__auto__ = null;
var cljs$core$async$mult_$_state_machine__33281__auto____0 = (function (){
var statearr_40363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40363[(0)] = cljs$core$async$mult_$_state_machine__33281__auto__);

(statearr_40363[(1)] = (1));

return statearr_40363;
});
var cljs$core$async$mult_$_state_machine__33281__auto____1 = (function (state_40272){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_40272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e40364){if((e40364 instanceof Object)){
var ex__33284__auto__ = e40364;
var statearr_40365_40457 = state_40272;
(statearr_40365_40457[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40458 = state_40272;
state_40272 = G__40458;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33281__auto__ = function(state_40272){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33281__auto____1.call(this,state_40272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33281__auto____0;
cljs$core$async$mult_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33281__auto____1;
return cljs$core$async$mult_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___40373,cs,m,dchan,dctr,done))
})();
var state__33667__auto__ = (function (){var statearr_40367 = f__33666__auto__.call(null);
(statearr_40367[(6)] = c__33665__auto___40373);

return statearr_40367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___40373,cs,m,dchan,dctr,done))
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
var G__40460 = arguments.length;
switch (G__40460) {
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
var len__31349__auto___40475 = arguments.length;
var i__31350__auto___40476 = (0);
while(true){
if((i__31350__auto___40476 < len__31349__auto___40475)){
args__31356__auto__.push((arguments[i__31350__auto___40476]));

var G__40477 = (i__31350__auto___40476 + (1));
i__31350__auto___40476 = G__40477;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((3) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40469){
var map__40470 = p__40469;
var map__40470__$1 = ((((!((map__40470 == null)))?((((map__40470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40470):map__40470);
var opts = map__40470__$1;
var statearr_40472_40478 = state;
(statearr_40472_40478[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__40470,map__40470__$1,opts){
return (function (val){
var statearr_40473_40479 = state;
(statearr_40473_40479[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40470,map__40470__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_40474_40480 = state;
(statearr_40474_40480[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40465){
var G__40466 = cljs.core.first.call(null,seq40465);
var seq40465__$1 = cljs.core.next.call(null,seq40465);
var G__40467 = cljs.core.first.call(null,seq40465__$1);
var seq40465__$2 = cljs.core.next.call(null,seq40465__$1);
var G__40468 = cljs.core.first.call(null,seq40465__$2);
var seq40465__$3 = cljs.core.next.call(null,seq40465__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40466,G__40467,G__40468,seq40465__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40484 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40485){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40485 = meta40485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40486,meta40485__$1){
var self__ = this;
var _40486__$1 = this;
return (new cljs.core.async.t_cljs$core$async40484(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40485__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40486){
var self__ = this;
var _40486__$1 = this;
return self__.meta40485;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40484.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40484.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40484.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40484.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40484.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40484.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40484.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40484.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40485","meta40485",2145507339,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40484";

cljs.core.async.t_cljs$core$async40484.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async40484");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40484 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40484(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40485){
return (new cljs.core.async.t_cljs$core$async40484(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40485));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40484(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33665__auto___40772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___40772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___40772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40606){
var state_val_40607 = (state_40606[(1)]);
if((state_val_40607 === (7))){
var inst_40514 = (state_40606[(2)]);
var state_40606__$1 = state_40606;
var statearr_40608_40773 = state_40606__$1;
(statearr_40608_40773[(2)] = inst_40514);

(statearr_40608_40773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (20))){
var inst_40526 = (state_40606[(7)]);
var state_40606__$1 = state_40606;
var statearr_40609_40775 = state_40606__$1;
(statearr_40609_40775[(2)] = inst_40526);

(statearr_40609_40775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (27))){
var state_40606__$1 = state_40606;
var statearr_40610_40776 = state_40606__$1;
(statearr_40610_40776[(2)] = null);

(statearr_40610_40776[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (1))){
var inst_40501 = (state_40606[(8)]);
var inst_40501__$1 = calc_state.call(null);
var inst_40503 = (inst_40501__$1 == null);
var inst_40504 = cljs.core.not.call(null,inst_40503);
var state_40606__$1 = (function (){var statearr_40611 = state_40606;
(statearr_40611[(8)] = inst_40501__$1);

return statearr_40611;
})();
if(inst_40504){
var statearr_40612_40780 = state_40606__$1;
(statearr_40612_40780[(1)] = (2));

} else {
var statearr_40613_40781 = state_40606__$1;
(statearr_40613_40781[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (24))){
var inst_40551 = (state_40606[(9)]);
var inst_40574 = (state_40606[(10)]);
var inst_40560 = (state_40606[(11)]);
var inst_40574__$1 = inst_40551.call(null,inst_40560);
var state_40606__$1 = (function (){var statearr_40614 = state_40606;
(statearr_40614[(10)] = inst_40574__$1);

return statearr_40614;
})();
if(cljs.core.truth_(inst_40574__$1)){
var statearr_40616_40785 = state_40606__$1;
(statearr_40616_40785[(1)] = (29));

} else {
var statearr_40617_40786 = state_40606__$1;
(statearr_40617_40786[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (4))){
var inst_40517 = (state_40606[(2)]);
var state_40606__$1 = state_40606;
if(cljs.core.truth_(inst_40517)){
var statearr_40619_40787 = state_40606__$1;
(statearr_40619_40787[(1)] = (8));

} else {
var statearr_40621_40788 = state_40606__$1;
(statearr_40621_40788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (15))){
var inst_40544 = (state_40606[(2)]);
var state_40606__$1 = state_40606;
if(cljs.core.truth_(inst_40544)){
var statearr_40623_40789 = state_40606__$1;
(statearr_40623_40789[(1)] = (19));

} else {
var statearr_40624_40791 = state_40606__$1;
(statearr_40624_40791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (21))){
var inst_40550 = (state_40606[(12)]);
var inst_40550__$1 = (state_40606[(2)]);
var inst_40551 = cljs.core.get.call(null,inst_40550__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40552 = cljs.core.get.call(null,inst_40550__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40553 = cljs.core.get.call(null,inst_40550__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40606__$1 = (function (){var statearr_40625 = state_40606;
(statearr_40625[(9)] = inst_40551);

(statearr_40625[(12)] = inst_40550__$1);

(statearr_40625[(13)] = inst_40552);

return statearr_40625;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40606__$1,(22),inst_40553);
} else {
if((state_val_40607 === (31))){
var inst_40582 = (state_40606[(2)]);
var state_40606__$1 = state_40606;
if(cljs.core.truth_(inst_40582)){
var statearr_40628_40792 = state_40606__$1;
(statearr_40628_40792[(1)] = (32));

} else {
var statearr_40629_40793 = state_40606__$1;
(statearr_40629_40793[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (32))){
var inst_40559 = (state_40606[(14)]);
var state_40606__$1 = state_40606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40606__$1,(35),out,inst_40559);
} else {
if((state_val_40607 === (33))){
var inst_40550 = (state_40606[(12)]);
var inst_40526 = inst_40550;
var state_40606__$1 = (function (){var statearr_40630 = state_40606;
(statearr_40630[(7)] = inst_40526);

return statearr_40630;
})();
var statearr_40631_40794 = state_40606__$1;
(statearr_40631_40794[(2)] = null);

(statearr_40631_40794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (13))){
var inst_40526 = (state_40606[(7)]);
var inst_40533 = inst_40526.cljs$lang$protocol_mask$partition0$;
var inst_40534 = (inst_40533 & (64));
var inst_40535 = inst_40526.cljs$core$ISeq$;
var inst_40536 = (cljs.core.PROTOCOL_SENTINEL === inst_40535);
var inst_40537 = (inst_40534) || (inst_40536);
var state_40606__$1 = state_40606;
if(cljs.core.truth_(inst_40537)){
var statearr_40632_40795 = state_40606__$1;
(statearr_40632_40795[(1)] = (16));

} else {
var statearr_40633_40797 = state_40606__$1;
(statearr_40633_40797[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (22))){
var inst_40559 = (state_40606[(14)]);
var inst_40560 = (state_40606[(11)]);
var inst_40558 = (state_40606[(2)]);
var inst_40559__$1 = cljs.core.nth.call(null,inst_40558,(0),null);
var inst_40560__$1 = cljs.core.nth.call(null,inst_40558,(1),null);
var inst_40561 = (inst_40559__$1 == null);
var inst_40562 = cljs.core._EQ_.call(null,inst_40560__$1,change);
var inst_40563 = (inst_40561) || (inst_40562);
var state_40606__$1 = (function (){var statearr_40634 = state_40606;
(statearr_40634[(14)] = inst_40559__$1);

(statearr_40634[(11)] = inst_40560__$1);

return statearr_40634;
})();
if(cljs.core.truth_(inst_40563)){
var statearr_40635_40799 = state_40606__$1;
(statearr_40635_40799[(1)] = (23));

} else {
var statearr_40636_40800 = state_40606__$1;
(statearr_40636_40800[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (36))){
var inst_40550 = (state_40606[(12)]);
var inst_40526 = inst_40550;
var state_40606__$1 = (function (){var statearr_40637 = state_40606;
(statearr_40637[(7)] = inst_40526);

return statearr_40637;
})();
var statearr_40638_40802 = state_40606__$1;
(statearr_40638_40802[(2)] = null);

(statearr_40638_40802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (29))){
var inst_40574 = (state_40606[(10)]);
var state_40606__$1 = state_40606;
var statearr_40643_40803 = state_40606__$1;
(statearr_40643_40803[(2)] = inst_40574);

(statearr_40643_40803[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (6))){
var state_40606__$1 = state_40606;
var statearr_40648_40804 = state_40606__$1;
(statearr_40648_40804[(2)] = false);

(statearr_40648_40804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (28))){
var inst_40570 = (state_40606[(2)]);
var inst_40571 = calc_state.call(null);
var inst_40526 = inst_40571;
var state_40606__$1 = (function (){var statearr_40649 = state_40606;
(statearr_40649[(15)] = inst_40570);

(statearr_40649[(7)] = inst_40526);

return statearr_40649;
})();
var statearr_40650_40805 = state_40606__$1;
(statearr_40650_40805[(2)] = null);

(statearr_40650_40805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (25))){
var inst_40596 = (state_40606[(2)]);
var state_40606__$1 = state_40606;
var statearr_40651_40806 = state_40606__$1;
(statearr_40651_40806[(2)] = inst_40596);

(statearr_40651_40806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (34))){
var inst_40594 = (state_40606[(2)]);
var state_40606__$1 = state_40606;
var statearr_40652_40807 = state_40606__$1;
(statearr_40652_40807[(2)] = inst_40594);

(statearr_40652_40807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (17))){
var state_40606__$1 = state_40606;
var statearr_40653_40811 = state_40606__$1;
(statearr_40653_40811[(2)] = false);

(statearr_40653_40811[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (3))){
var state_40606__$1 = state_40606;
var statearr_40654_40812 = state_40606__$1;
(statearr_40654_40812[(2)] = false);

(statearr_40654_40812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (12))){
var inst_40599 = (state_40606[(2)]);
var state_40606__$1 = state_40606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40606__$1,inst_40599);
} else {
if((state_val_40607 === (2))){
var inst_40501 = (state_40606[(8)]);
var inst_40506 = inst_40501.cljs$lang$protocol_mask$partition0$;
var inst_40507 = (inst_40506 & (64));
var inst_40508 = inst_40501.cljs$core$ISeq$;
var inst_40509 = (cljs.core.PROTOCOL_SENTINEL === inst_40508);
var inst_40510 = (inst_40507) || (inst_40509);
var state_40606__$1 = state_40606;
if(cljs.core.truth_(inst_40510)){
var statearr_40656_40816 = state_40606__$1;
(statearr_40656_40816[(1)] = (5));

} else {
var statearr_40657_40817 = state_40606__$1;
(statearr_40657_40817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (23))){
var inst_40559 = (state_40606[(14)]);
var inst_40565 = (inst_40559 == null);
var state_40606__$1 = state_40606;
if(cljs.core.truth_(inst_40565)){
var statearr_40658_40818 = state_40606__$1;
(statearr_40658_40818[(1)] = (26));

} else {
var statearr_40660_40819 = state_40606__$1;
(statearr_40660_40819[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (35))){
var inst_40585 = (state_40606[(2)]);
var state_40606__$1 = state_40606;
if(cljs.core.truth_(inst_40585)){
var statearr_40662_40821 = state_40606__$1;
(statearr_40662_40821[(1)] = (36));

} else {
var statearr_40664_40822 = state_40606__$1;
(statearr_40664_40822[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (19))){
var inst_40526 = (state_40606[(7)]);
var inst_40546 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40526);
var state_40606__$1 = state_40606;
var statearr_40665_40823 = state_40606__$1;
(statearr_40665_40823[(2)] = inst_40546);

(statearr_40665_40823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (11))){
var inst_40526 = (state_40606[(7)]);
var inst_40530 = (inst_40526 == null);
var inst_40531 = cljs.core.not.call(null,inst_40530);
var state_40606__$1 = state_40606;
if(inst_40531){
var statearr_40666_40827 = state_40606__$1;
(statearr_40666_40827[(1)] = (13));

} else {
var statearr_40667_40828 = state_40606__$1;
(statearr_40667_40828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (9))){
var inst_40501 = (state_40606[(8)]);
var state_40606__$1 = state_40606;
var statearr_40668_40829 = state_40606__$1;
(statearr_40668_40829[(2)] = inst_40501);

(statearr_40668_40829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (5))){
var state_40606__$1 = state_40606;
var statearr_40669_40830 = state_40606__$1;
(statearr_40669_40830[(2)] = true);

(statearr_40669_40830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (14))){
var state_40606__$1 = state_40606;
var statearr_40670_40831 = state_40606__$1;
(statearr_40670_40831[(2)] = false);

(statearr_40670_40831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (26))){
var inst_40560 = (state_40606[(11)]);
var inst_40567 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40560);
var state_40606__$1 = state_40606;
var statearr_40671_40835 = state_40606__$1;
(statearr_40671_40835[(2)] = inst_40567);

(statearr_40671_40835[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (16))){
var state_40606__$1 = state_40606;
var statearr_40672_40836 = state_40606__$1;
(statearr_40672_40836[(2)] = true);

(statearr_40672_40836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (38))){
var inst_40590 = (state_40606[(2)]);
var state_40606__$1 = state_40606;
var statearr_40673_40837 = state_40606__$1;
(statearr_40673_40837[(2)] = inst_40590);

(statearr_40673_40837[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (30))){
var inst_40551 = (state_40606[(9)]);
var inst_40560 = (state_40606[(11)]);
var inst_40552 = (state_40606[(13)]);
var inst_40577 = cljs.core.empty_QMARK_.call(null,inst_40551);
var inst_40578 = inst_40552.call(null,inst_40560);
var inst_40579 = cljs.core.not.call(null,inst_40578);
var inst_40580 = (inst_40577) && (inst_40579);
var state_40606__$1 = state_40606;
var statearr_40674_40839 = state_40606__$1;
(statearr_40674_40839[(2)] = inst_40580);

(statearr_40674_40839[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (10))){
var inst_40501 = (state_40606[(8)]);
var inst_40522 = (state_40606[(2)]);
var inst_40523 = cljs.core.get.call(null,inst_40522,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40524 = cljs.core.get.call(null,inst_40522,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40525 = cljs.core.get.call(null,inst_40522,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40526 = inst_40501;
var state_40606__$1 = (function (){var statearr_40675 = state_40606;
(statearr_40675[(16)] = inst_40524);

(statearr_40675[(7)] = inst_40526);

(statearr_40675[(17)] = inst_40525);

(statearr_40675[(18)] = inst_40523);

return statearr_40675;
})();
var statearr_40676_40843 = state_40606__$1;
(statearr_40676_40843[(2)] = null);

(statearr_40676_40843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (18))){
var inst_40541 = (state_40606[(2)]);
var state_40606__$1 = state_40606;
var statearr_40678_40844 = state_40606__$1;
(statearr_40678_40844[(2)] = inst_40541);

(statearr_40678_40844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (37))){
var state_40606__$1 = state_40606;
var statearr_40679_40845 = state_40606__$1;
(statearr_40679_40845[(2)] = null);

(statearr_40679_40845[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40607 === (8))){
var inst_40501 = (state_40606[(8)]);
var inst_40519 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40501);
var state_40606__$1 = state_40606;
var statearr_40680_40847 = state_40606__$1;
(statearr_40680_40847[(2)] = inst_40519);

(statearr_40680_40847[(1)] = (10));


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
});})(c__33665__auto___40772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33280__auto__,c__33665__auto___40772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33281__auto__ = null;
var cljs$core$async$mix_$_state_machine__33281__auto____0 = (function (){
var statearr_40685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40685[(0)] = cljs$core$async$mix_$_state_machine__33281__auto__);

(statearr_40685[(1)] = (1));

return statearr_40685;
});
var cljs$core$async$mix_$_state_machine__33281__auto____1 = (function (state_40606){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_40606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e40686){if((e40686 instanceof Object)){
var ex__33284__auto__ = e40686;
var statearr_40687_40851 = state_40606;
(statearr_40687_40851[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40852 = state_40606;
state_40606 = G__40852;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33281__auto__ = function(state_40606){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33281__auto____1.call(this,state_40606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33281__auto____0;
cljs$core$async$mix_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33281__auto____1;
return cljs$core$async$mix_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___40772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33667__auto__ = (function (){var statearr_40688 = f__33666__auto__.call(null);
(statearr_40688[(6)] = c__33665__auto___40772);

return statearr_40688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___40772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__40870 = arguments.length;
switch (G__40870) {
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
var G__40920 = arguments.length;
switch (G__40920) {
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
return (function (p1__40916_SHARP_){
if(cljs.core.truth_(p1__40916_SHARP_.call(null,topic))){
return p1__40916_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40916_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30072__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40927 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40928){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40928 = meta40928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40929,meta40928__$1){
var self__ = this;
var _40929__$1 = this;
return (new cljs.core.async.t_cljs$core$async40927(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40928__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40929){
var self__ = this;
var _40929__$1 = this;
return self__.meta40928;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40927.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40927.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40927.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40927.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40927.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40927.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40927.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40928","meta40928",1722471761,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40927";

cljs.core.async.t_cljs$core$async40927.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async40927");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40927 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40927(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40928){
return (new cljs.core.async.t_cljs$core$async40927(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40928));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40927(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33665__auto___41085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___41085,mults,ensure_mult,p){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___41085,mults,ensure_mult,p){
return (function (state_41017){
var state_val_41018 = (state_41017[(1)]);
if((state_val_41018 === (7))){
var inst_41011 = (state_41017[(2)]);
var state_41017__$1 = state_41017;
var statearr_41019_41086 = state_41017__$1;
(statearr_41019_41086[(2)] = inst_41011);

(statearr_41019_41086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (20))){
var state_41017__$1 = state_41017;
var statearr_41020_41090 = state_41017__$1;
(statearr_41020_41090[(2)] = null);

(statearr_41020_41090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (1))){
var state_41017__$1 = state_41017;
var statearr_41021_41091 = state_41017__$1;
(statearr_41021_41091[(2)] = null);

(statearr_41021_41091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (24))){
var inst_40994 = (state_41017[(7)]);
var inst_41003 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40994);
var state_41017__$1 = state_41017;
var statearr_41023_41092 = state_41017__$1;
(statearr_41023_41092[(2)] = inst_41003);

(statearr_41023_41092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (4))){
var inst_40941 = (state_41017[(8)]);
var inst_40941__$1 = (state_41017[(2)]);
var inst_40945 = (inst_40941__$1 == null);
var state_41017__$1 = (function (){var statearr_41024 = state_41017;
(statearr_41024[(8)] = inst_40941__$1);

return statearr_41024;
})();
if(cljs.core.truth_(inst_40945)){
var statearr_41025_41094 = state_41017__$1;
(statearr_41025_41094[(1)] = (5));

} else {
var statearr_41026_41095 = state_41017__$1;
(statearr_41026_41095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (15))){
var inst_40988 = (state_41017[(2)]);
var state_41017__$1 = state_41017;
var statearr_41027_41096 = state_41017__$1;
(statearr_41027_41096[(2)] = inst_40988);

(statearr_41027_41096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (21))){
var inst_41008 = (state_41017[(2)]);
var state_41017__$1 = (function (){var statearr_41028 = state_41017;
(statearr_41028[(9)] = inst_41008);

return statearr_41028;
})();
var statearr_41029_41097 = state_41017__$1;
(statearr_41029_41097[(2)] = null);

(statearr_41029_41097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (13))){
var inst_40970 = (state_41017[(10)]);
var inst_40972 = cljs.core.chunked_seq_QMARK_.call(null,inst_40970);
var state_41017__$1 = state_41017;
if(inst_40972){
var statearr_41030_41098 = state_41017__$1;
(statearr_41030_41098[(1)] = (16));

} else {
var statearr_41031_41099 = state_41017__$1;
(statearr_41031_41099[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (22))){
var inst_41000 = (state_41017[(2)]);
var state_41017__$1 = state_41017;
if(cljs.core.truth_(inst_41000)){
var statearr_41032_41101 = state_41017__$1;
(statearr_41032_41101[(1)] = (23));

} else {
var statearr_41033_41102 = state_41017__$1;
(statearr_41033_41102[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (6))){
var inst_40996 = (state_41017[(11)]);
var inst_40994 = (state_41017[(7)]);
var inst_40941 = (state_41017[(8)]);
var inst_40994__$1 = topic_fn.call(null,inst_40941);
var inst_40995 = cljs.core.deref.call(null,mults);
var inst_40996__$1 = cljs.core.get.call(null,inst_40995,inst_40994__$1);
var state_41017__$1 = (function (){var statearr_41034 = state_41017;
(statearr_41034[(11)] = inst_40996__$1);

(statearr_41034[(7)] = inst_40994__$1);

return statearr_41034;
})();
if(cljs.core.truth_(inst_40996__$1)){
var statearr_41035_41106 = state_41017__$1;
(statearr_41035_41106[(1)] = (19));

} else {
var statearr_41036_41107 = state_41017__$1;
(statearr_41036_41107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (25))){
var inst_41005 = (state_41017[(2)]);
var state_41017__$1 = state_41017;
var statearr_41037_41108 = state_41017__$1;
(statearr_41037_41108[(2)] = inst_41005);

(statearr_41037_41108[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (17))){
var inst_40970 = (state_41017[(10)]);
var inst_40979 = cljs.core.first.call(null,inst_40970);
var inst_40980 = cljs.core.async.muxch_STAR_.call(null,inst_40979);
var inst_40981 = cljs.core.async.close_BANG_.call(null,inst_40980);
var inst_40982 = cljs.core.next.call(null,inst_40970);
var inst_40954 = inst_40982;
var inst_40955 = null;
var inst_40956 = (0);
var inst_40957 = (0);
var state_41017__$1 = (function (){var statearr_41038 = state_41017;
(statearr_41038[(12)] = inst_40955);

(statearr_41038[(13)] = inst_40957);

(statearr_41038[(14)] = inst_40956);

(statearr_41038[(15)] = inst_40981);

(statearr_41038[(16)] = inst_40954);

return statearr_41038;
})();
var statearr_41040_41109 = state_41017__$1;
(statearr_41040_41109[(2)] = null);

(statearr_41040_41109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (3))){
var inst_41013 = (state_41017[(2)]);
var state_41017__$1 = state_41017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41017__$1,inst_41013);
} else {
if((state_val_41018 === (12))){
var inst_40990 = (state_41017[(2)]);
var state_41017__$1 = state_41017;
var statearr_41042_41119 = state_41017__$1;
(statearr_41042_41119[(2)] = inst_40990);

(statearr_41042_41119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (2))){
var state_41017__$1 = state_41017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41017__$1,(4),ch);
} else {
if((state_val_41018 === (23))){
var state_41017__$1 = state_41017;
var statearr_41044_41120 = state_41017__$1;
(statearr_41044_41120[(2)] = null);

(statearr_41044_41120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (19))){
var inst_40996 = (state_41017[(11)]);
var inst_40941 = (state_41017[(8)]);
var inst_40998 = cljs.core.async.muxch_STAR_.call(null,inst_40996);
var state_41017__$1 = state_41017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41017__$1,(22),inst_40998,inst_40941);
} else {
if((state_val_41018 === (11))){
var inst_40970 = (state_41017[(10)]);
var inst_40954 = (state_41017[(16)]);
var inst_40970__$1 = cljs.core.seq.call(null,inst_40954);
var state_41017__$1 = (function (){var statearr_41046 = state_41017;
(statearr_41046[(10)] = inst_40970__$1);

return statearr_41046;
})();
if(inst_40970__$1){
var statearr_41047_41122 = state_41017__$1;
(statearr_41047_41122[(1)] = (13));

} else {
var statearr_41048_41123 = state_41017__$1;
(statearr_41048_41123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (9))){
var inst_40992 = (state_41017[(2)]);
var state_41017__$1 = state_41017;
var statearr_41049_41124 = state_41017__$1;
(statearr_41049_41124[(2)] = inst_40992);

(statearr_41049_41124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (5))){
var inst_40951 = cljs.core.deref.call(null,mults);
var inst_40952 = cljs.core.vals.call(null,inst_40951);
var inst_40953 = cljs.core.seq.call(null,inst_40952);
var inst_40954 = inst_40953;
var inst_40955 = null;
var inst_40956 = (0);
var inst_40957 = (0);
var state_41017__$1 = (function (){var statearr_41052 = state_41017;
(statearr_41052[(12)] = inst_40955);

(statearr_41052[(13)] = inst_40957);

(statearr_41052[(14)] = inst_40956);

(statearr_41052[(16)] = inst_40954);

return statearr_41052;
})();
var statearr_41053_41126 = state_41017__$1;
(statearr_41053_41126[(2)] = null);

(statearr_41053_41126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (14))){
var state_41017__$1 = state_41017;
var statearr_41059_41128 = state_41017__$1;
(statearr_41059_41128[(2)] = null);

(statearr_41059_41128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (16))){
var inst_40970 = (state_41017[(10)]);
var inst_40974 = cljs.core.chunk_first.call(null,inst_40970);
var inst_40975 = cljs.core.chunk_rest.call(null,inst_40970);
var inst_40976 = cljs.core.count.call(null,inst_40974);
var inst_40954 = inst_40975;
var inst_40955 = inst_40974;
var inst_40956 = inst_40976;
var inst_40957 = (0);
var state_41017__$1 = (function (){var statearr_41061 = state_41017;
(statearr_41061[(12)] = inst_40955);

(statearr_41061[(13)] = inst_40957);

(statearr_41061[(14)] = inst_40956);

(statearr_41061[(16)] = inst_40954);

return statearr_41061;
})();
var statearr_41062_41133 = state_41017__$1;
(statearr_41062_41133[(2)] = null);

(statearr_41062_41133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (10))){
var inst_40955 = (state_41017[(12)]);
var inst_40957 = (state_41017[(13)]);
var inst_40956 = (state_41017[(14)]);
var inst_40954 = (state_41017[(16)]);
var inst_40962 = cljs.core._nth.call(null,inst_40955,inst_40957);
var inst_40964 = cljs.core.async.muxch_STAR_.call(null,inst_40962);
var inst_40965 = cljs.core.async.close_BANG_.call(null,inst_40964);
var inst_40966 = (inst_40957 + (1));
var tmp41054 = inst_40955;
var tmp41055 = inst_40956;
var tmp41056 = inst_40954;
var inst_40954__$1 = tmp41056;
var inst_40955__$1 = tmp41054;
var inst_40956__$1 = tmp41055;
var inst_40957__$1 = inst_40966;
var state_41017__$1 = (function (){var statearr_41063 = state_41017;
(statearr_41063[(12)] = inst_40955__$1);

(statearr_41063[(17)] = inst_40965);

(statearr_41063[(13)] = inst_40957__$1);

(statearr_41063[(14)] = inst_40956__$1);

(statearr_41063[(16)] = inst_40954__$1);

return statearr_41063;
})();
var statearr_41065_41138 = state_41017__$1;
(statearr_41065_41138[(2)] = null);

(statearr_41065_41138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (18))){
var inst_40985 = (state_41017[(2)]);
var state_41017__$1 = state_41017;
var statearr_41066_41142 = state_41017__$1;
(statearr_41066_41142[(2)] = inst_40985);

(statearr_41066_41142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41018 === (8))){
var inst_40957 = (state_41017[(13)]);
var inst_40956 = (state_41017[(14)]);
var inst_40959 = (inst_40957 < inst_40956);
var inst_40960 = inst_40959;
var state_41017__$1 = state_41017;
if(cljs.core.truth_(inst_40960)){
var statearr_41067_41143 = state_41017__$1;
(statearr_41067_41143[(1)] = (10));

} else {
var statearr_41068_41144 = state_41017__$1;
(statearr_41068_41144[(1)] = (11));

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
});})(c__33665__auto___41085,mults,ensure_mult,p))
;
return ((function (switch__33280__auto__,c__33665__auto___41085,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_41069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41069[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_41069[(1)] = (1));

return statearr_41069;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_41017){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_41017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e41070){if((e41070 instanceof Object)){
var ex__33284__auto__ = e41070;
var statearr_41071_41145 = state_41017;
(statearr_41071_41145[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41147 = state_41017;
state_41017 = G__41147;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_41017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_41017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___41085,mults,ensure_mult,p))
})();
var state__33667__auto__ = (function (){var statearr_41073 = f__33666__auto__.call(null);
(statearr_41073[(6)] = c__33665__auto___41085);

return statearr_41073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___41085,mults,ensure_mult,p))
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
var G__41149 = arguments.length;
switch (G__41149) {
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
var G__41154 = arguments.length;
switch (G__41154) {
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
var G__41160 = arguments.length;
switch (G__41160) {
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
var c__33665__auto___41234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___41234,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___41234,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41203){
var state_val_41204 = (state_41203[(1)]);
if((state_val_41204 === (7))){
var state_41203__$1 = state_41203;
var statearr_41206_41235 = state_41203__$1;
(statearr_41206_41235[(2)] = null);

(statearr_41206_41235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (1))){
var state_41203__$1 = state_41203;
var statearr_41207_41236 = state_41203__$1;
(statearr_41207_41236[(2)] = null);

(statearr_41207_41236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (4))){
var inst_41165 = (state_41203[(7)]);
var inst_41167 = (inst_41165 < cnt);
var state_41203__$1 = state_41203;
if(cljs.core.truth_(inst_41167)){
var statearr_41208_41237 = state_41203__$1;
(statearr_41208_41237[(1)] = (6));

} else {
var statearr_41209_41238 = state_41203__$1;
(statearr_41209_41238[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (15))){
var inst_41199 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
var statearr_41210_41239 = state_41203__$1;
(statearr_41210_41239[(2)] = inst_41199);

(statearr_41210_41239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (13))){
var inst_41192 = cljs.core.async.close_BANG_.call(null,out);
var state_41203__$1 = state_41203;
var statearr_41213_41240 = state_41203__$1;
(statearr_41213_41240[(2)] = inst_41192);

(statearr_41213_41240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (6))){
var state_41203__$1 = state_41203;
var statearr_41214_41241 = state_41203__$1;
(statearr_41214_41241[(2)] = null);

(statearr_41214_41241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (3))){
var inst_41201 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41203__$1,inst_41201);
} else {
if((state_val_41204 === (12))){
var inst_41188 = (state_41203[(8)]);
var inst_41188__$1 = (state_41203[(2)]);
var inst_41189 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41188__$1);
var state_41203__$1 = (function (){var statearr_41215 = state_41203;
(statearr_41215[(8)] = inst_41188__$1);

return statearr_41215;
})();
if(cljs.core.truth_(inst_41189)){
var statearr_41216_41242 = state_41203__$1;
(statearr_41216_41242[(1)] = (13));

} else {
var statearr_41217_41243 = state_41203__$1;
(statearr_41217_41243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (2))){
var inst_41164 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41165 = (0);
var state_41203__$1 = (function (){var statearr_41218 = state_41203;
(statearr_41218[(7)] = inst_41165);

(statearr_41218[(9)] = inst_41164);

return statearr_41218;
})();
var statearr_41219_41244 = state_41203__$1;
(statearr_41219_41244[(2)] = null);

(statearr_41219_41244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (11))){
var inst_41165 = (state_41203[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41203,(10),Object,null,(9));
var inst_41174 = chs__$1.call(null,inst_41165);
var inst_41175 = done.call(null,inst_41165);
var inst_41176 = cljs.core.async.take_BANG_.call(null,inst_41174,inst_41175);
var state_41203__$1 = state_41203;
var statearr_41220_41246 = state_41203__$1;
(statearr_41220_41246[(2)] = inst_41176);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41203__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (9))){
var inst_41165 = (state_41203[(7)]);
var inst_41178 = (state_41203[(2)]);
var inst_41179 = (inst_41165 + (1));
var inst_41165__$1 = inst_41179;
var state_41203__$1 = (function (){var statearr_41221 = state_41203;
(statearr_41221[(7)] = inst_41165__$1);

(statearr_41221[(10)] = inst_41178);

return statearr_41221;
})();
var statearr_41222_41252 = state_41203__$1;
(statearr_41222_41252[(2)] = null);

(statearr_41222_41252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (5))){
var inst_41186 = (state_41203[(2)]);
var state_41203__$1 = (function (){var statearr_41223 = state_41203;
(statearr_41223[(11)] = inst_41186);

return statearr_41223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41203__$1,(12),dchan);
} else {
if((state_val_41204 === (14))){
var inst_41188 = (state_41203[(8)]);
var inst_41194 = cljs.core.apply.call(null,f,inst_41188);
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41203__$1,(16),out,inst_41194);
} else {
if((state_val_41204 === (16))){
var inst_41196 = (state_41203[(2)]);
var state_41203__$1 = (function (){var statearr_41224 = state_41203;
(statearr_41224[(12)] = inst_41196);

return statearr_41224;
})();
var statearr_41225_41254 = state_41203__$1;
(statearr_41225_41254[(2)] = null);

(statearr_41225_41254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (10))){
var inst_41169 = (state_41203[(2)]);
var inst_41170 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41203__$1 = (function (){var statearr_41226 = state_41203;
(statearr_41226[(13)] = inst_41169);

return statearr_41226;
})();
var statearr_41227_41255 = state_41203__$1;
(statearr_41227_41255[(2)] = inst_41170);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41203__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (8))){
var inst_41183 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
var statearr_41228_41256 = state_41203__$1;
(statearr_41228_41256[(2)] = inst_41183);

(statearr_41228_41256[(1)] = (5));


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
});})(c__33665__auto___41234,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33280__auto__,c__33665__auto___41234,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_41229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41229[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_41229[(1)] = (1));

return statearr_41229;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_41203){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_41203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e41230){if((e41230 instanceof Object)){
var ex__33284__auto__ = e41230;
var statearr_41231_41257 = state_41203;
(statearr_41231_41257[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41260 = state_41203;
state_41203 = G__41260;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_41203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_41203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___41234,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33667__auto__ = (function (){var statearr_41232 = f__33666__auto__.call(null);
(statearr_41232[(6)] = c__33665__auto___41234);

return statearr_41232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___41234,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__41269 = arguments.length;
switch (G__41269) {
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
var c__33665__auto___41328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___41328,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___41328,out){
return (function (state_41305){
var state_val_41306 = (state_41305[(1)]);
if((state_val_41306 === (7))){
var inst_41283 = (state_41305[(7)]);
var inst_41284 = (state_41305[(8)]);
var inst_41283__$1 = (state_41305[(2)]);
var inst_41284__$1 = cljs.core.nth.call(null,inst_41283__$1,(0),null);
var inst_41285 = cljs.core.nth.call(null,inst_41283__$1,(1),null);
var inst_41286 = (inst_41284__$1 == null);
var state_41305__$1 = (function (){var statearr_41307 = state_41305;
(statearr_41307[(7)] = inst_41283__$1);

(statearr_41307[(8)] = inst_41284__$1);

(statearr_41307[(9)] = inst_41285);

return statearr_41307;
})();
if(cljs.core.truth_(inst_41286)){
var statearr_41308_41329 = state_41305__$1;
(statearr_41308_41329[(1)] = (8));

} else {
var statearr_41309_41330 = state_41305__$1;
(statearr_41309_41330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41306 === (1))){
var inst_41273 = cljs.core.vec.call(null,chs);
var inst_41274 = inst_41273;
var state_41305__$1 = (function (){var statearr_41310 = state_41305;
(statearr_41310[(10)] = inst_41274);

return statearr_41310;
})();
var statearr_41311_41331 = state_41305__$1;
(statearr_41311_41331[(2)] = null);

(statearr_41311_41331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41306 === (4))){
var inst_41274 = (state_41305[(10)]);
var state_41305__$1 = state_41305;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41305__$1,(7),inst_41274);
} else {
if((state_val_41306 === (6))){
var inst_41301 = (state_41305[(2)]);
var state_41305__$1 = state_41305;
var statearr_41312_41337 = state_41305__$1;
(statearr_41312_41337[(2)] = inst_41301);

(statearr_41312_41337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41306 === (3))){
var inst_41303 = (state_41305[(2)]);
var state_41305__$1 = state_41305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41305__$1,inst_41303);
} else {
if((state_val_41306 === (2))){
var inst_41274 = (state_41305[(10)]);
var inst_41276 = cljs.core.count.call(null,inst_41274);
var inst_41277 = (inst_41276 > (0));
var state_41305__$1 = state_41305;
if(cljs.core.truth_(inst_41277)){
var statearr_41314_41338 = state_41305__$1;
(statearr_41314_41338[(1)] = (4));

} else {
var statearr_41315_41339 = state_41305__$1;
(statearr_41315_41339[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41306 === (11))){
var inst_41274 = (state_41305[(10)]);
var inst_41293 = (state_41305[(2)]);
var tmp41313 = inst_41274;
var inst_41274__$1 = tmp41313;
var state_41305__$1 = (function (){var statearr_41317 = state_41305;
(statearr_41317[(11)] = inst_41293);

(statearr_41317[(10)] = inst_41274__$1);

return statearr_41317;
})();
var statearr_41318_41340 = state_41305__$1;
(statearr_41318_41340[(2)] = null);

(statearr_41318_41340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41306 === (9))){
var inst_41284 = (state_41305[(8)]);
var state_41305__$1 = state_41305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41305__$1,(11),out,inst_41284);
} else {
if((state_val_41306 === (5))){
var inst_41298 = cljs.core.async.close_BANG_.call(null,out);
var state_41305__$1 = state_41305;
var statearr_41319_41341 = state_41305__$1;
(statearr_41319_41341[(2)] = inst_41298);

(statearr_41319_41341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41306 === (10))){
var inst_41296 = (state_41305[(2)]);
var state_41305__$1 = state_41305;
var statearr_41320_41342 = state_41305__$1;
(statearr_41320_41342[(2)] = inst_41296);

(statearr_41320_41342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41306 === (8))){
var inst_41283 = (state_41305[(7)]);
var inst_41284 = (state_41305[(8)]);
var inst_41274 = (state_41305[(10)]);
var inst_41285 = (state_41305[(9)]);
var inst_41288 = (function (){var cs = inst_41274;
var vec__41279 = inst_41283;
var v = inst_41284;
var c = inst_41285;
return ((function (cs,vec__41279,v,c,inst_41283,inst_41284,inst_41274,inst_41285,state_val_41306,c__33665__auto___41328,out){
return (function (p1__41267_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41267_SHARP_);
});
;})(cs,vec__41279,v,c,inst_41283,inst_41284,inst_41274,inst_41285,state_val_41306,c__33665__auto___41328,out))
})();
var inst_41289 = cljs.core.filterv.call(null,inst_41288,inst_41274);
var inst_41274__$1 = inst_41289;
var state_41305__$1 = (function (){var statearr_41321 = state_41305;
(statearr_41321[(10)] = inst_41274__$1);

return statearr_41321;
})();
var statearr_41322_41343 = state_41305__$1;
(statearr_41322_41343[(2)] = null);

(statearr_41322_41343[(1)] = (2));


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
});})(c__33665__auto___41328,out))
;
return ((function (switch__33280__auto__,c__33665__auto___41328,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_41323 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41323[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_41323[(1)] = (1));

return statearr_41323;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_41305){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_41305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e41324){if((e41324 instanceof Object)){
var ex__33284__auto__ = e41324;
var statearr_41325_41345 = state_41305;
(statearr_41325_41345[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41347 = state_41305;
state_41305 = G__41347;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_41305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_41305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___41328,out))
})();
var state__33667__auto__ = (function (){var statearr_41326 = f__33666__auto__.call(null);
(statearr_41326[(6)] = c__33665__auto___41328);

return statearr_41326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___41328,out))
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
var G__41354 = arguments.length;
switch (G__41354) {
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
var c__33665__auto___41411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___41411,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___41411,out){
return (function (state_41379){
var state_val_41380 = (state_41379[(1)]);
if((state_val_41380 === (7))){
var inst_41361 = (state_41379[(7)]);
var inst_41361__$1 = (state_41379[(2)]);
var inst_41362 = (inst_41361__$1 == null);
var inst_41363 = cljs.core.not.call(null,inst_41362);
var state_41379__$1 = (function (){var statearr_41381 = state_41379;
(statearr_41381[(7)] = inst_41361__$1);

return statearr_41381;
})();
if(inst_41363){
var statearr_41386_41412 = state_41379__$1;
(statearr_41386_41412[(1)] = (8));

} else {
var statearr_41387_41413 = state_41379__$1;
(statearr_41387_41413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41380 === (1))){
var inst_41356 = (0);
var state_41379__$1 = (function (){var statearr_41388 = state_41379;
(statearr_41388[(8)] = inst_41356);

return statearr_41388;
})();
var statearr_41389_41414 = state_41379__$1;
(statearr_41389_41414[(2)] = null);

(statearr_41389_41414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41380 === (4))){
var state_41379__$1 = state_41379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41379__$1,(7),ch);
} else {
if((state_val_41380 === (6))){
var inst_41374 = (state_41379[(2)]);
var state_41379__$1 = state_41379;
var statearr_41390_41416 = state_41379__$1;
(statearr_41390_41416[(2)] = inst_41374);

(statearr_41390_41416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41380 === (3))){
var inst_41376 = (state_41379[(2)]);
var inst_41377 = cljs.core.async.close_BANG_.call(null,out);
var state_41379__$1 = (function (){var statearr_41391 = state_41379;
(statearr_41391[(9)] = inst_41376);

return statearr_41391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41379__$1,inst_41377);
} else {
if((state_val_41380 === (2))){
var inst_41356 = (state_41379[(8)]);
var inst_41358 = (inst_41356 < n);
var state_41379__$1 = state_41379;
if(cljs.core.truth_(inst_41358)){
var statearr_41392_41417 = state_41379__$1;
(statearr_41392_41417[(1)] = (4));

} else {
var statearr_41393_41418 = state_41379__$1;
(statearr_41393_41418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41380 === (11))){
var inst_41356 = (state_41379[(8)]);
var inst_41366 = (state_41379[(2)]);
var inst_41367 = (inst_41356 + (1));
var inst_41356__$1 = inst_41367;
var state_41379__$1 = (function (){var statearr_41394 = state_41379;
(statearr_41394[(8)] = inst_41356__$1);

(statearr_41394[(10)] = inst_41366);

return statearr_41394;
})();
var statearr_41395_41419 = state_41379__$1;
(statearr_41395_41419[(2)] = null);

(statearr_41395_41419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41380 === (9))){
var state_41379__$1 = state_41379;
var statearr_41400_41420 = state_41379__$1;
(statearr_41400_41420[(2)] = null);

(statearr_41400_41420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41380 === (5))){
var state_41379__$1 = state_41379;
var statearr_41401_41421 = state_41379__$1;
(statearr_41401_41421[(2)] = null);

(statearr_41401_41421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41380 === (10))){
var inst_41371 = (state_41379[(2)]);
var state_41379__$1 = state_41379;
var statearr_41402_41422 = state_41379__$1;
(statearr_41402_41422[(2)] = inst_41371);

(statearr_41402_41422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41380 === (8))){
var inst_41361 = (state_41379[(7)]);
var state_41379__$1 = state_41379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41379__$1,(11),out,inst_41361);
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
});})(c__33665__auto___41411,out))
;
return ((function (switch__33280__auto__,c__33665__auto___41411,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_41406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41406[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_41406[(1)] = (1));

return statearr_41406;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_41379){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_41379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e41407){if((e41407 instanceof Object)){
var ex__33284__auto__ = e41407;
var statearr_41408_41425 = state_41379;
(statearr_41408_41425[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41426 = state_41379;
state_41379 = G__41426;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_41379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_41379);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___41411,out))
})();
var state__33667__auto__ = (function (){var statearr_41409 = f__33666__auto__.call(null);
(statearr_41409[(6)] = c__33665__auto___41411);

return statearr_41409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___41411,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41428 = (function (f,ch,meta41429){
this.f = f;
this.ch = ch;
this.meta41429 = meta41429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41430,meta41429__$1){
var self__ = this;
var _41430__$1 = this;
return (new cljs.core.async.t_cljs$core$async41428(self__.f,self__.ch,meta41429__$1));
});

cljs.core.async.t_cljs$core$async41428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41430){
var self__ = this;
var _41430__$1 = this;
return self__.meta41429;
});

cljs.core.async.t_cljs$core$async41428.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41428.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41428.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41432 = (function (f,ch,meta41429,_,fn1,meta41433){
this.f = f;
this.ch = ch;
this.meta41429 = meta41429;
this._ = _;
this.fn1 = fn1;
this.meta41433 = meta41433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41434,meta41433__$1){
var self__ = this;
var _41434__$1 = this;
return (new cljs.core.async.t_cljs$core$async41432(self__.f,self__.ch,self__.meta41429,self__._,self__.fn1,meta41433__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41434){
var self__ = this;
var _41434__$1 = this;
return self__.meta41433;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41427_SHARP_){
return f1.call(null,(((p1__41427_SHARP_ == null))?null:self__.f.call(null,p1__41427_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41432.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41429","meta41429",-1475198896,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41428","cljs.core.async/t_cljs$core$async41428",-1094811142,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41433","meta41433",-540789763,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41432";

cljs.core.async.t_cljs$core$async41432.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async41432");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async41432 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41432(f__$1,ch__$1,meta41429__$1,___$2,fn1__$1,meta41433){
return (new cljs.core.async.t_cljs$core$async41432(f__$1,ch__$1,meta41429__$1,___$2,fn1__$1,meta41433));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41432(self__.f,self__.ch,self__.meta41429,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async41428.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41429","meta41429",-1475198896,null)], null);
});

cljs.core.async.t_cljs$core$async41428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41428";

cljs.core.async.t_cljs$core$async41428.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async41428");
});

cljs.core.async.__GT_t_cljs$core$async41428 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41428(f__$1,ch__$1,meta41429){
return (new cljs.core.async.t_cljs$core$async41428(f__$1,ch__$1,meta41429));
});

}

return (new cljs.core.async.t_cljs$core$async41428(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41454 = (function (f,ch,meta41455){
this.f = f;
this.ch = ch;
this.meta41455 = meta41455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41456,meta41455__$1){
var self__ = this;
var _41456__$1 = this;
return (new cljs.core.async.t_cljs$core$async41454(self__.f,self__.ch,meta41455__$1));
});

cljs.core.async.t_cljs$core$async41454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41456){
var self__ = this;
var _41456__$1 = this;
return self__.meta41455;
});

cljs.core.async.t_cljs$core$async41454.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41454.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41454.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41455","meta41455",1369320433,null)], null);
});

cljs.core.async.t_cljs$core$async41454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41454";

cljs.core.async.t_cljs$core$async41454.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async41454");
});

cljs.core.async.__GT_t_cljs$core$async41454 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41454(f__$1,ch__$1,meta41455){
return (new cljs.core.async.t_cljs$core$async41454(f__$1,ch__$1,meta41455));
});

}

return (new cljs.core.async.t_cljs$core$async41454(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41462 = (function (p,ch,meta41463){
this.p = p;
this.ch = ch;
this.meta41463 = meta41463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41464,meta41463__$1){
var self__ = this;
var _41464__$1 = this;
return (new cljs.core.async.t_cljs$core$async41462(self__.p,self__.ch,meta41463__$1));
});

cljs.core.async.t_cljs$core$async41462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41464){
var self__ = this;
var _41464__$1 = this;
return self__.meta41463;
});

cljs.core.async.t_cljs$core$async41462.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41462.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41462.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41462.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41463","meta41463",-865481232,null)], null);
});

cljs.core.async.t_cljs$core$async41462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41462";

cljs.core.async.t_cljs$core$async41462.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async41462");
});

cljs.core.async.__GT_t_cljs$core$async41462 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41462(p__$1,ch__$1,meta41463){
return (new cljs.core.async.t_cljs$core$async41462(p__$1,ch__$1,meta41463));
});

}

return (new cljs.core.async.t_cljs$core$async41462(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41471 = arguments.length;
switch (G__41471) {
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
var c__33665__auto___41521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___41521,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___41521,out){
return (function (state_41493){
var state_val_41494 = (state_41493[(1)]);
if((state_val_41494 === (7))){
var inst_41489 = (state_41493[(2)]);
var state_41493__$1 = state_41493;
var statearr_41495_41523 = state_41493__$1;
(statearr_41495_41523[(2)] = inst_41489);

(statearr_41495_41523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41494 === (1))){
var state_41493__$1 = state_41493;
var statearr_41496_41524 = state_41493__$1;
(statearr_41496_41524[(2)] = null);

(statearr_41496_41524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41494 === (4))){
var inst_41474 = (state_41493[(7)]);
var inst_41474__$1 = (state_41493[(2)]);
var inst_41476 = (inst_41474__$1 == null);
var state_41493__$1 = (function (){var statearr_41497 = state_41493;
(statearr_41497[(7)] = inst_41474__$1);

return statearr_41497;
})();
if(cljs.core.truth_(inst_41476)){
var statearr_41498_41526 = state_41493__$1;
(statearr_41498_41526[(1)] = (5));

} else {
var statearr_41499_41527 = state_41493__$1;
(statearr_41499_41527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41494 === (6))){
var inst_41474 = (state_41493[(7)]);
var inst_41480 = p.call(null,inst_41474);
var state_41493__$1 = state_41493;
if(cljs.core.truth_(inst_41480)){
var statearr_41501_41528 = state_41493__$1;
(statearr_41501_41528[(1)] = (8));

} else {
var statearr_41502_41529 = state_41493__$1;
(statearr_41502_41529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41494 === (3))){
var inst_41491 = (state_41493[(2)]);
var state_41493__$1 = state_41493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41493__$1,inst_41491);
} else {
if((state_val_41494 === (2))){
var state_41493__$1 = state_41493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41493__$1,(4),ch);
} else {
if((state_val_41494 === (11))){
var inst_41483 = (state_41493[(2)]);
var state_41493__$1 = state_41493;
var statearr_41503_41534 = state_41493__$1;
(statearr_41503_41534[(2)] = inst_41483);

(statearr_41503_41534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41494 === (9))){
var state_41493__$1 = state_41493;
var statearr_41504_41535 = state_41493__$1;
(statearr_41504_41535[(2)] = null);

(statearr_41504_41535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41494 === (5))){
var inst_41478 = cljs.core.async.close_BANG_.call(null,out);
var state_41493__$1 = state_41493;
var statearr_41505_41536 = state_41493__$1;
(statearr_41505_41536[(2)] = inst_41478);

(statearr_41505_41536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41494 === (10))){
var inst_41486 = (state_41493[(2)]);
var state_41493__$1 = (function (){var statearr_41506 = state_41493;
(statearr_41506[(8)] = inst_41486);

return statearr_41506;
})();
var statearr_41507_41538 = state_41493__$1;
(statearr_41507_41538[(2)] = null);

(statearr_41507_41538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41494 === (8))){
var inst_41474 = (state_41493[(7)]);
var state_41493__$1 = state_41493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41493__$1,(11),out,inst_41474);
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
});})(c__33665__auto___41521,out))
;
return ((function (switch__33280__auto__,c__33665__auto___41521,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_41513 = [null,null,null,null,null,null,null,null,null];
(statearr_41513[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_41513[(1)] = (1));

return statearr_41513;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_41493){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_41493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e41514){if((e41514 instanceof Object)){
var ex__33284__auto__ = e41514;
var statearr_41516_41540 = state_41493;
(statearr_41516_41540[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41542 = state_41493;
state_41493 = G__41542;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_41493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_41493);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___41521,out))
})();
var state__33667__auto__ = (function (){var statearr_41517 = f__33666__auto__.call(null);
(statearr_41517[(6)] = c__33665__auto___41521);

return statearr_41517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___41521,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41545 = arguments.length;
switch (G__41545) {
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
var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__){
return (function (state_41616){
var state_val_41617 = (state_41616[(1)]);
if((state_val_41617 === (7))){
var inst_41611 = (state_41616[(2)]);
var state_41616__$1 = state_41616;
var statearr_41618_41679 = state_41616__$1;
(statearr_41618_41679[(2)] = inst_41611);

(statearr_41618_41679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (20))){
var inst_41579 = (state_41616[(7)]);
var inst_41592 = (state_41616[(2)]);
var inst_41593 = cljs.core.next.call(null,inst_41579);
var inst_41565 = inst_41593;
var inst_41566 = null;
var inst_41567 = (0);
var inst_41568 = (0);
var state_41616__$1 = (function (){var statearr_41619 = state_41616;
(statearr_41619[(8)] = inst_41568);

(statearr_41619[(9)] = inst_41592);

(statearr_41619[(10)] = inst_41565);

(statearr_41619[(11)] = inst_41566);

(statearr_41619[(12)] = inst_41567);

return statearr_41619;
})();
var statearr_41620_41683 = state_41616__$1;
(statearr_41620_41683[(2)] = null);

(statearr_41620_41683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (1))){
var state_41616__$1 = state_41616;
var statearr_41622_41684 = state_41616__$1;
(statearr_41622_41684[(2)] = null);

(statearr_41622_41684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (4))){
var inst_41554 = (state_41616[(13)]);
var inst_41554__$1 = (state_41616[(2)]);
var inst_41555 = (inst_41554__$1 == null);
var state_41616__$1 = (function (){var statearr_41623 = state_41616;
(statearr_41623[(13)] = inst_41554__$1);

return statearr_41623;
})();
if(cljs.core.truth_(inst_41555)){
var statearr_41624_41686 = state_41616__$1;
(statearr_41624_41686[(1)] = (5));

} else {
var statearr_41625_41687 = state_41616__$1;
(statearr_41625_41687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (15))){
var state_41616__$1 = state_41616;
var statearr_41631_41690 = state_41616__$1;
(statearr_41631_41690[(2)] = null);

(statearr_41631_41690[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (21))){
var state_41616__$1 = state_41616;
var statearr_41632_41692 = state_41616__$1;
(statearr_41632_41692[(2)] = null);

(statearr_41632_41692[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (13))){
var inst_41568 = (state_41616[(8)]);
var inst_41565 = (state_41616[(10)]);
var inst_41566 = (state_41616[(11)]);
var inst_41567 = (state_41616[(12)]);
var inst_41575 = (state_41616[(2)]);
var inst_41576 = (inst_41568 + (1));
var tmp41626 = inst_41565;
var tmp41627 = inst_41566;
var tmp41628 = inst_41567;
var inst_41565__$1 = tmp41626;
var inst_41566__$1 = tmp41627;
var inst_41567__$1 = tmp41628;
var inst_41568__$1 = inst_41576;
var state_41616__$1 = (function (){var statearr_41634 = state_41616;
(statearr_41634[(8)] = inst_41568__$1);

(statearr_41634[(10)] = inst_41565__$1);

(statearr_41634[(11)] = inst_41566__$1);

(statearr_41634[(14)] = inst_41575);

(statearr_41634[(12)] = inst_41567__$1);

return statearr_41634;
})();
var statearr_41635_41699 = state_41616__$1;
(statearr_41635_41699[(2)] = null);

(statearr_41635_41699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (22))){
var state_41616__$1 = state_41616;
var statearr_41636_41701 = state_41616__$1;
(statearr_41636_41701[(2)] = null);

(statearr_41636_41701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (6))){
var inst_41554 = (state_41616[(13)]);
var inst_41563 = f.call(null,inst_41554);
var inst_41564 = cljs.core.seq.call(null,inst_41563);
var inst_41565 = inst_41564;
var inst_41566 = null;
var inst_41567 = (0);
var inst_41568 = (0);
var state_41616__$1 = (function (){var statearr_41638 = state_41616;
(statearr_41638[(8)] = inst_41568);

(statearr_41638[(10)] = inst_41565);

(statearr_41638[(11)] = inst_41566);

(statearr_41638[(12)] = inst_41567);

return statearr_41638;
})();
var statearr_41639_41703 = state_41616__$1;
(statearr_41639_41703[(2)] = null);

(statearr_41639_41703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (17))){
var inst_41579 = (state_41616[(7)]);
var inst_41583 = cljs.core.chunk_first.call(null,inst_41579);
var inst_41584 = cljs.core.chunk_rest.call(null,inst_41579);
var inst_41586 = cljs.core.count.call(null,inst_41583);
var inst_41565 = inst_41584;
var inst_41566 = inst_41583;
var inst_41567 = inst_41586;
var inst_41568 = (0);
var state_41616__$1 = (function (){var statearr_41640 = state_41616;
(statearr_41640[(8)] = inst_41568);

(statearr_41640[(10)] = inst_41565);

(statearr_41640[(11)] = inst_41566);

(statearr_41640[(12)] = inst_41567);

return statearr_41640;
})();
var statearr_41642_41707 = state_41616__$1;
(statearr_41642_41707[(2)] = null);

(statearr_41642_41707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (3))){
var inst_41613 = (state_41616[(2)]);
var state_41616__$1 = state_41616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41616__$1,inst_41613);
} else {
if((state_val_41617 === (12))){
var inst_41601 = (state_41616[(2)]);
var state_41616__$1 = state_41616;
var statearr_41645_41709 = state_41616__$1;
(statearr_41645_41709[(2)] = inst_41601);

(statearr_41645_41709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (2))){
var state_41616__$1 = state_41616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41616__$1,(4),in$);
} else {
if((state_val_41617 === (23))){
var inst_41609 = (state_41616[(2)]);
var state_41616__$1 = state_41616;
var statearr_41646_41714 = state_41616__$1;
(statearr_41646_41714[(2)] = inst_41609);

(statearr_41646_41714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (19))){
var inst_41596 = (state_41616[(2)]);
var state_41616__$1 = state_41616;
var statearr_41647_41715 = state_41616__$1;
(statearr_41647_41715[(2)] = inst_41596);

(statearr_41647_41715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (11))){
var inst_41579 = (state_41616[(7)]);
var inst_41565 = (state_41616[(10)]);
var inst_41579__$1 = cljs.core.seq.call(null,inst_41565);
var state_41616__$1 = (function (){var statearr_41648 = state_41616;
(statearr_41648[(7)] = inst_41579__$1);

return statearr_41648;
})();
if(inst_41579__$1){
var statearr_41650_41717 = state_41616__$1;
(statearr_41650_41717[(1)] = (14));

} else {
var statearr_41651_41718 = state_41616__$1;
(statearr_41651_41718[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (9))){
var inst_41603 = (state_41616[(2)]);
var inst_41604 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41616__$1 = (function (){var statearr_41652 = state_41616;
(statearr_41652[(15)] = inst_41603);

return statearr_41652;
})();
if(cljs.core.truth_(inst_41604)){
var statearr_41653_41722 = state_41616__$1;
(statearr_41653_41722[(1)] = (21));

} else {
var statearr_41654_41723 = state_41616__$1;
(statearr_41654_41723[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (5))){
var inst_41557 = cljs.core.async.close_BANG_.call(null,out);
var state_41616__$1 = state_41616;
var statearr_41655_41724 = state_41616__$1;
(statearr_41655_41724[(2)] = inst_41557);

(statearr_41655_41724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (14))){
var inst_41579 = (state_41616[(7)]);
var inst_41581 = cljs.core.chunked_seq_QMARK_.call(null,inst_41579);
var state_41616__$1 = state_41616;
if(inst_41581){
var statearr_41658_41726 = state_41616__$1;
(statearr_41658_41726[(1)] = (17));

} else {
var statearr_41660_41727 = state_41616__$1;
(statearr_41660_41727[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (16))){
var inst_41599 = (state_41616[(2)]);
var state_41616__$1 = state_41616;
var statearr_41661_41728 = state_41616__$1;
(statearr_41661_41728[(2)] = inst_41599);

(statearr_41661_41728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41617 === (10))){
var inst_41568 = (state_41616[(8)]);
var inst_41566 = (state_41616[(11)]);
var inst_41573 = cljs.core._nth.call(null,inst_41566,inst_41568);
var state_41616__$1 = state_41616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41616__$1,(13),out,inst_41573);
} else {
if((state_val_41617 === (18))){
var inst_41579 = (state_41616[(7)]);
var inst_41589 = cljs.core.first.call(null,inst_41579);
var state_41616__$1 = state_41616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41616__$1,(20),out,inst_41589);
} else {
if((state_val_41617 === (8))){
var inst_41568 = (state_41616[(8)]);
var inst_41567 = (state_41616[(12)]);
var inst_41570 = (inst_41568 < inst_41567);
var inst_41571 = inst_41570;
var state_41616__$1 = state_41616;
if(cljs.core.truth_(inst_41571)){
var statearr_41662_41733 = state_41616__$1;
(statearr_41662_41733[(1)] = (10));

} else {
var statearr_41663_41734 = state_41616__$1;
(statearr_41663_41734[(1)] = (11));

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
});})(c__33665__auto__))
;
return ((function (switch__33280__auto__,c__33665__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_41665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41665[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__);

(statearr_41665[(1)] = (1));

return statearr_41665;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____1 = (function (state_41616){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_41616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e41670){if((e41670 instanceof Object)){
var ex__33284__auto__ = e41670;
var statearr_41671_41738 = state_41616;
(statearr_41671_41738[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41740 = state_41616;
state_41616 = G__41740;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__ = function(state_41616){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____1.call(this,state_41616);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_41676 = f__33666__auto__.call(null);
(statearr_41676[(6)] = c__33665__auto__);

return statearr_41676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__))
);

return c__33665__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41745 = arguments.length;
switch (G__41745) {
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
var G__41752 = arguments.length;
switch (G__41752) {
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
var G__41759 = arguments.length;
switch (G__41759) {
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
var c__33665__auto___41822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___41822,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___41822,out){
return (function (state_41786){
var state_val_41787 = (state_41786[(1)]);
if((state_val_41787 === (7))){
var inst_41780 = (state_41786[(2)]);
var state_41786__$1 = state_41786;
var statearr_41791_41825 = state_41786__$1;
(statearr_41791_41825[(2)] = inst_41780);

(statearr_41791_41825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41787 === (1))){
var inst_41761 = null;
var state_41786__$1 = (function (){var statearr_41792 = state_41786;
(statearr_41792[(7)] = inst_41761);

return statearr_41792;
})();
var statearr_41793_41826 = state_41786__$1;
(statearr_41793_41826[(2)] = null);

(statearr_41793_41826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41787 === (4))){
var inst_41764 = (state_41786[(8)]);
var inst_41764__$1 = (state_41786[(2)]);
var inst_41765 = (inst_41764__$1 == null);
var inst_41766 = cljs.core.not.call(null,inst_41765);
var state_41786__$1 = (function (){var statearr_41794 = state_41786;
(statearr_41794[(8)] = inst_41764__$1);

return statearr_41794;
})();
if(inst_41766){
var statearr_41795_41831 = state_41786__$1;
(statearr_41795_41831[(1)] = (5));

} else {
var statearr_41796_41832 = state_41786__$1;
(statearr_41796_41832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41787 === (6))){
var state_41786__$1 = state_41786;
var statearr_41798_41833 = state_41786__$1;
(statearr_41798_41833[(2)] = null);

(statearr_41798_41833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41787 === (3))){
var inst_41782 = (state_41786[(2)]);
var inst_41783 = cljs.core.async.close_BANG_.call(null,out);
var state_41786__$1 = (function (){var statearr_41799 = state_41786;
(statearr_41799[(9)] = inst_41782);

return statearr_41799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41786__$1,inst_41783);
} else {
if((state_val_41787 === (2))){
var state_41786__$1 = state_41786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41786__$1,(4),ch);
} else {
if((state_val_41787 === (11))){
var inst_41764 = (state_41786[(8)]);
var inst_41774 = (state_41786[(2)]);
var inst_41761 = inst_41764;
var state_41786__$1 = (function (){var statearr_41801 = state_41786;
(statearr_41801[(10)] = inst_41774);

(statearr_41801[(7)] = inst_41761);

return statearr_41801;
})();
var statearr_41803_41836 = state_41786__$1;
(statearr_41803_41836[(2)] = null);

(statearr_41803_41836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41787 === (9))){
var inst_41764 = (state_41786[(8)]);
var state_41786__$1 = state_41786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41786__$1,(11),out,inst_41764);
} else {
if((state_val_41787 === (5))){
var inst_41761 = (state_41786[(7)]);
var inst_41764 = (state_41786[(8)]);
var inst_41768 = cljs.core._EQ_.call(null,inst_41764,inst_41761);
var state_41786__$1 = state_41786;
if(inst_41768){
var statearr_41806_41837 = state_41786__$1;
(statearr_41806_41837[(1)] = (8));

} else {
var statearr_41807_41838 = state_41786__$1;
(statearr_41807_41838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41787 === (10))){
var inst_41777 = (state_41786[(2)]);
var state_41786__$1 = state_41786;
var statearr_41808_41840 = state_41786__$1;
(statearr_41808_41840[(2)] = inst_41777);

(statearr_41808_41840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41787 === (8))){
var inst_41761 = (state_41786[(7)]);
var tmp41805 = inst_41761;
var inst_41761__$1 = tmp41805;
var state_41786__$1 = (function (){var statearr_41809 = state_41786;
(statearr_41809[(7)] = inst_41761__$1);

return statearr_41809;
})();
var statearr_41810_41841 = state_41786__$1;
(statearr_41810_41841[(2)] = null);

(statearr_41810_41841[(1)] = (2));


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
});})(c__33665__auto___41822,out))
;
return ((function (switch__33280__auto__,c__33665__auto___41822,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_41812 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41812[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_41812[(1)] = (1));

return statearr_41812;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_41786){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_41786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e41814){if((e41814 instanceof Object)){
var ex__33284__auto__ = e41814;
var statearr_41816_41849 = state_41786;
(statearr_41816_41849[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41851 = state_41786;
state_41786 = G__41851;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_41786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_41786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___41822,out))
})();
var state__33667__auto__ = (function (){var statearr_41819 = f__33666__auto__.call(null);
(statearr_41819[(6)] = c__33665__auto___41822);

return statearr_41819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___41822,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41853 = arguments.length;
switch (G__41853) {
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
var c__33665__auto___41944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___41944,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___41944,out){
return (function (state_41892){
var state_val_41893 = (state_41892[(1)]);
if((state_val_41893 === (7))){
var inst_41888 = (state_41892[(2)]);
var state_41892__$1 = state_41892;
var statearr_41897_41945 = state_41892__$1;
(statearr_41897_41945[(2)] = inst_41888);

(statearr_41897_41945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (1))){
var inst_41855 = (new Array(n));
var inst_41856 = inst_41855;
var inst_41857 = (0);
var state_41892__$1 = (function (){var statearr_41898 = state_41892;
(statearr_41898[(7)] = inst_41856);

(statearr_41898[(8)] = inst_41857);

return statearr_41898;
})();
var statearr_41899_41947 = state_41892__$1;
(statearr_41899_41947[(2)] = null);

(statearr_41899_41947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (4))){
var inst_41860 = (state_41892[(9)]);
var inst_41860__$1 = (state_41892[(2)]);
var inst_41861 = (inst_41860__$1 == null);
var inst_41862 = cljs.core.not.call(null,inst_41861);
var state_41892__$1 = (function (){var statearr_41901 = state_41892;
(statearr_41901[(9)] = inst_41860__$1);

return statearr_41901;
})();
if(inst_41862){
var statearr_41902_41948 = state_41892__$1;
(statearr_41902_41948[(1)] = (5));

} else {
var statearr_41903_41949 = state_41892__$1;
(statearr_41903_41949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (15))){
var inst_41882 = (state_41892[(2)]);
var state_41892__$1 = state_41892;
var statearr_41904_41951 = state_41892__$1;
(statearr_41904_41951[(2)] = inst_41882);

(statearr_41904_41951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (13))){
var state_41892__$1 = state_41892;
var statearr_41906_41952 = state_41892__$1;
(statearr_41906_41952[(2)] = null);

(statearr_41906_41952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (6))){
var inst_41857 = (state_41892[(8)]);
var inst_41878 = (inst_41857 > (0));
var state_41892__$1 = state_41892;
if(cljs.core.truth_(inst_41878)){
var statearr_41911_41953 = state_41892__$1;
(statearr_41911_41953[(1)] = (12));

} else {
var statearr_41912_41954 = state_41892__$1;
(statearr_41912_41954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (3))){
var inst_41890 = (state_41892[(2)]);
var state_41892__$1 = state_41892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41892__$1,inst_41890);
} else {
if((state_val_41893 === (12))){
var inst_41856 = (state_41892[(7)]);
var inst_41880 = cljs.core.vec.call(null,inst_41856);
var state_41892__$1 = state_41892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41892__$1,(15),out,inst_41880);
} else {
if((state_val_41893 === (2))){
var state_41892__$1 = state_41892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41892__$1,(4),ch);
} else {
if((state_val_41893 === (11))){
var inst_41872 = (state_41892[(2)]);
var inst_41873 = (new Array(n));
var inst_41856 = inst_41873;
var inst_41857 = (0);
var state_41892__$1 = (function (){var statearr_41917 = state_41892;
(statearr_41917[(10)] = inst_41872);

(statearr_41917[(7)] = inst_41856);

(statearr_41917[(8)] = inst_41857);

return statearr_41917;
})();
var statearr_41919_41957 = state_41892__$1;
(statearr_41919_41957[(2)] = null);

(statearr_41919_41957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (9))){
var inst_41856 = (state_41892[(7)]);
var inst_41870 = cljs.core.vec.call(null,inst_41856);
var state_41892__$1 = state_41892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41892__$1,(11),out,inst_41870);
} else {
if((state_val_41893 === (5))){
var inst_41860 = (state_41892[(9)]);
var inst_41865 = (state_41892[(11)]);
var inst_41856 = (state_41892[(7)]);
var inst_41857 = (state_41892[(8)]);
var inst_41864 = (inst_41856[inst_41857] = inst_41860);
var inst_41865__$1 = (inst_41857 + (1));
var inst_41866 = (inst_41865__$1 < n);
var state_41892__$1 = (function (){var statearr_41922 = state_41892;
(statearr_41922[(11)] = inst_41865__$1);

(statearr_41922[(12)] = inst_41864);

return statearr_41922;
})();
if(cljs.core.truth_(inst_41866)){
var statearr_41923_41959 = state_41892__$1;
(statearr_41923_41959[(1)] = (8));

} else {
var statearr_41924_41960 = state_41892__$1;
(statearr_41924_41960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (14))){
var inst_41885 = (state_41892[(2)]);
var inst_41886 = cljs.core.async.close_BANG_.call(null,out);
var state_41892__$1 = (function (){var statearr_41926 = state_41892;
(statearr_41926[(13)] = inst_41885);

return statearr_41926;
})();
var statearr_41928_41962 = state_41892__$1;
(statearr_41928_41962[(2)] = inst_41886);

(statearr_41928_41962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (10))){
var inst_41876 = (state_41892[(2)]);
var state_41892__$1 = state_41892;
var statearr_41929_41964 = state_41892__$1;
(statearr_41929_41964[(2)] = inst_41876);

(statearr_41929_41964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (8))){
var inst_41865 = (state_41892[(11)]);
var inst_41856 = (state_41892[(7)]);
var tmp41925 = inst_41856;
var inst_41856__$1 = tmp41925;
var inst_41857 = inst_41865;
var state_41892__$1 = (function (){var statearr_41931 = state_41892;
(statearr_41931[(7)] = inst_41856__$1);

(statearr_41931[(8)] = inst_41857);

return statearr_41931;
})();
var statearr_41932_41966 = state_41892__$1;
(statearr_41932_41966[(2)] = null);

(statearr_41932_41966[(1)] = (2));


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
});})(c__33665__auto___41944,out))
;
return ((function (switch__33280__auto__,c__33665__auto___41944,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_41937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41937[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_41937[(1)] = (1));

return statearr_41937;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_41892){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_41892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e41938){if((e41938 instanceof Object)){
var ex__33284__auto__ = e41938;
var statearr_41939_41971 = state_41892;
(statearr_41939_41971[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41973 = state_41892;
state_41892 = G__41973;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_41892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_41892);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___41944,out))
})();
var state__33667__auto__ = (function (){var statearr_41940 = f__33666__auto__.call(null);
(statearr_41940[(6)] = c__33665__auto___41944);

return statearr_41940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___41944,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41978 = arguments.length;
switch (G__41978) {
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
var c__33665__auto___42074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___42074,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___42074,out){
return (function (state_42025){
var state_val_42026 = (state_42025[(1)]);
if((state_val_42026 === (7))){
var inst_42021 = (state_42025[(2)]);
var state_42025__$1 = state_42025;
var statearr_42027_42078 = state_42025__$1;
(statearr_42027_42078[(2)] = inst_42021);

(statearr_42027_42078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42026 === (1))){
var inst_41980 = [];
var inst_41982 = inst_41980;
var inst_41983 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42025__$1 = (function (){var statearr_42028 = state_42025;
(statearr_42028[(7)] = inst_41983);

(statearr_42028[(8)] = inst_41982);

return statearr_42028;
})();
var statearr_42029_42080 = state_42025__$1;
(statearr_42029_42080[(2)] = null);

(statearr_42029_42080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42026 === (4))){
var inst_41986 = (state_42025[(9)]);
var inst_41986__$1 = (state_42025[(2)]);
var inst_41987 = (inst_41986__$1 == null);
var inst_41988 = cljs.core.not.call(null,inst_41987);
var state_42025__$1 = (function (){var statearr_42031 = state_42025;
(statearr_42031[(9)] = inst_41986__$1);

return statearr_42031;
})();
if(inst_41988){
var statearr_42032_42082 = state_42025__$1;
(statearr_42032_42082[(1)] = (5));

} else {
var statearr_42033_42084 = state_42025__$1;
(statearr_42033_42084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42026 === (15))){
var inst_42015 = (state_42025[(2)]);
var state_42025__$1 = state_42025;
var statearr_42034_42087 = state_42025__$1;
(statearr_42034_42087[(2)] = inst_42015);

(statearr_42034_42087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42026 === (13))){
var state_42025__$1 = state_42025;
var statearr_42037_42088 = state_42025__$1;
(statearr_42037_42088[(2)] = null);

(statearr_42037_42088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42026 === (6))){
var inst_41982 = (state_42025[(8)]);
var inst_42009 = inst_41982.length;
var inst_42010 = (inst_42009 > (0));
var state_42025__$1 = state_42025;
if(cljs.core.truth_(inst_42010)){
var statearr_42040_42090 = state_42025__$1;
(statearr_42040_42090[(1)] = (12));

} else {
var statearr_42041_42091 = state_42025__$1;
(statearr_42041_42091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42026 === (3))){
var inst_42023 = (state_42025[(2)]);
var state_42025__$1 = state_42025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42025__$1,inst_42023);
} else {
if((state_val_42026 === (12))){
var inst_41982 = (state_42025[(8)]);
var inst_42012 = cljs.core.vec.call(null,inst_41982);
var state_42025__$1 = state_42025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42025__$1,(15),out,inst_42012);
} else {
if((state_val_42026 === (2))){
var state_42025__$1 = state_42025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42025__$1,(4),ch);
} else {
if((state_val_42026 === (11))){
var inst_41990 = (state_42025[(10)]);
var inst_41986 = (state_42025[(9)]);
var inst_42002 = (state_42025[(2)]);
var inst_42003 = [];
var inst_42004 = inst_42003.push(inst_41986);
var inst_41982 = inst_42003;
var inst_41983 = inst_41990;
var state_42025__$1 = (function (){var statearr_42043 = state_42025;
(statearr_42043[(11)] = inst_42002);

(statearr_42043[(7)] = inst_41983);

(statearr_42043[(12)] = inst_42004);

(statearr_42043[(8)] = inst_41982);

return statearr_42043;
})();
var statearr_42045_42096 = state_42025__$1;
(statearr_42045_42096[(2)] = null);

(statearr_42045_42096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42026 === (9))){
var inst_41982 = (state_42025[(8)]);
var inst_42000 = cljs.core.vec.call(null,inst_41982);
var state_42025__$1 = state_42025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42025__$1,(11),out,inst_42000);
} else {
if((state_val_42026 === (5))){
var inst_41983 = (state_42025[(7)]);
var inst_41990 = (state_42025[(10)]);
var inst_41986 = (state_42025[(9)]);
var inst_41990__$1 = f.call(null,inst_41986);
var inst_41991 = cljs.core._EQ_.call(null,inst_41990__$1,inst_41983);
var inst_41993 = cljs.core.keyword_identical_QMARK_.call(null,inst_41983,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41994 = (inst_41991) || (inst_41993);
var state_42025__$1 = (function (){var statearr_42046 = state_42025;
(statearr_42046[(10)] = inst_41990__$1);

return statearr_42046;
})();
if(cljs.core.truth_(inst_41994)){
var statearr_42051_42104 = state_42025__$1;
(statearr_42051_42104[(1)] = (8));

} else {
var statearr_42053_42106 = state_42025__$1;
(statearr_42053_42106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42026 === (14))){
var inst_42018 = (state_42025[(2)]);
var inst_42019 = cljs.core.async.close_BANG_.call(null,out);
var state_42025__$1 = (function (){var statearr_42059 = state_42025;
(statearr_42059[(13)] = inst_42018);

return statearr_42059;
})();
var statearr_42060_42108 = state_42025__$1;
(statearr_42060_42108[(2)] = inst_42019);

(statearr_42060_42108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42026 === (10))){
var inst_42007 = (state_42025[(2)]);
var state_42025__$1 = state_42025;
var statearr_42061_42111 = state_42025__$1;
(statearr_42061_42111[(2)] = inst_42007);

(statearr_42061_42111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42026 === (8))){
var inst_41990 = (state_42025[(10)]);
var inst_41986 = (state_42025[(9)]);
var inst_41982 = (state_42025[(8)]);
var inst_41996 = inst_41982.push(inst_41986);
var tmp42054 = inst_41982;
var inst_41982__$1 = tmp42054;
var inst_41983 = inst_41990;
var state_42025__$1 = (function (){var statearr_42062 = state_42025;
(statearr_42062[(7)] = inst_41983);

(statearr_42062[(14)] = inst_41996);

(statearr_42062[(8)] = inst_41982__$1);

return statearr_42062;
})();
var statearr_42063_42115 = state_42025__$1;
(statearr_42063_42115[(2)] = null);

(statearr_42063_42115[(1)] = (2));


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
});})(c__33665__auto___42074,out))
;
return ((function (switch__33280__auto__,c__33665__auto___42074,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_42065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42065[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_42065[(1)] = (1));

return statearr_42065;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_42025){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_42025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e42066){if((e42066 instanceof Object)){
var ex__33284__auto__ = e42066;
var statearr_42067_42123 = state_42025;
(statearr_42067_42123[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42126 = state_42025;
state_42025 = G__42126;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_42025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_42025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___42074,out))
})();
var state__33667__auto__ = (function (){var statearr_42070 = f__33666__auto__.call(null);
(statearr_42070[(6)] = c__33665__auto___42074);

return statearr_42070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___42074,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510229223286
