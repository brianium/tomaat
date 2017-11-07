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
var G__34184 = arguments.length;
switch (G__34184) {
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
if(typeof cljs.core.async.t_cljs$core$async34185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34185 = (function (f,blockable,meta34186){
this.f = f;
this.blockable = blockable;
this.meta34186 = meta34186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34187,meta34186__$1){
var self__ = this;
var _34187__$1 = this;
return (new cljs.core.async.t_cljs$core$async34185(self__.f,self__.blockable,meta34186__$1));
});

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34187){
var self__ = this;
var _34187__$1 = this;
return self__.meta34186;
});

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34186","meta34186",884509872,null)], null);
});

cljs.core.async.t_cljs$core$async34185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34185";

cljs.core.async.t_cljs$core$async34185.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async34185");
});

cljs.core.async.__GT_t_cljs$core$async34185 = (function cljs$core$async$__GT_t_cljs$core$async34185(f__$1,blockable__$1,meta34186){
return (new cljs.core.async.t_cljs$core$async34185(f__$1,blockable__$1,meta34186));
});

}

return (new cljs.core.async.t_cljs$core$async34185(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34191 = arguments.length;
switch (G__34191) {
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
var G__34194 = arguments.length;
switch (G__34194) {
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
var G__34197 = arguments.length;
switch (G__34197) {
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
var val_34199 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34199);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34199,ret){
return (function (){
return fn1.call(null,val_34199);
});})(val_34199,ret))
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
var G__34201 = arguments.length;
switch (G__34201) {
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
var n__31115__auto___34203 = n;
var x_34204 = (0);
while(true){
if((x_34204 < n__31115__auto___34203)){
(a[x_34204] = (0));

var G__34205 = (x_34204 + (1));
x_34204 = G__34205;
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

var G__34206 = (i + (1));
i = G__34206;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34207 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34207 = (function (flag,meta34208){
this.flag = flag;
this.meta34208 = meta34208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34209,meta34208__$1){
var self__ = this;
var _34209__$1 = this;
return (new cljs.core.async.t_cljs$core$async34207(self__.flag,meta34208__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34209){
var self__ = this;
var _34209__$1 = this;
return self__.meta34208;
});})(flag))
;

cljs.core.async.t_cljs$core$async34207.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34207.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34207.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34208","meta34208",1925667509,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34207.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34207";

cljs.core.async.t_cljs$core$async34207.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async34207");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34207 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34207(flag__$1,meta34208){
return (new cljs.core.async.t_cljs$core$async34207(flag__$1,meta34208));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34207(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34210 = (function (flag,cb,meta34211){
this.flag = flag;
this.cb = cb;
this.meta34211 = meta34211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34212,meta34211__$1){
var self__ = this;
var _34212__$1 = this;
return (new cljs.core.async.t_cljs$core$async34210(self__.flag,self__.cb,meta34211__$1));
});

cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34212){
var self__ = this;
var _34212__$1 = this;
return self__.meta34211;
});

cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34211","meta34211",-365008376,null)], null);
});

cljs.core.async.t_cljs$core$async34210.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34210";

cljs.core.async.t_cljs$core$async34210.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async34210");
});

cljs.core.async.__GT_t_cljs$core$async34210 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34210(flag__$1,cb__$1,meta34211){
return (new cljs.core.async.t_cljs$core$async34210(flag__$1,cb__$1,meta34211));
});

}

return (new cljs.core.async.t_cljs$core$async34210(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34213_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34213_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34214_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34214_SHARP_,port], null));
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
var G__34215 = (i + (1));
i = G__34215;
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
var len__31349__auto___34221 = arguments.length;
var i__31350__auto___34222 = (0);
while(true){
if((i__31350__auto___34222 < len__31349__auto___34221)){
args__31356__auto__.push((arguments[i__31350__auto___34222]));

var G__34223 = (i__31350__auto___34222 + (1));
i__31350__auto___34222 = G__34223;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34218){
var map__34219 = p__34218;
var map__34219__$1 = ((((!((map__34219 == null)))?((((map__34219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34219):map__34219);
var opts = map__34219__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34216){
var G__34217 = cljs.core.first.call(null,seq34216);
var seq34216__$1 = cljs.core.next.call(null,seq34216);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34217,seq34216__$1);
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
var G__34225 = arguments.length;
switch (G__34225) {
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
var c__34124__auto___34271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___34271){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___34271){
return (function (state_34249){
var state_val_34250 = (state_34249[(1)]);
if((state_val_34250 === (7))){
var inst_34245 = (state_34249[(2)]);
var state_34249__$1 = state_34249;
var statearr_34251_34272 = state_34249__$1;
(statearr_34251_34272[(2)] = inst_34245);

(statearr_34251_34272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (1))){
var state_34249__$1 = state_34249;
var statearr_34252_34273 = state_34249__$1;
(statearr_34252_34273[(2)] = null);

(statearr_34252_34273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (4))){
var inst_34228 = (state_34249[(7)]);
var inst_34228__$1 = (state_34249[(2)]);
var inst_34229 = (inst_34228__$1 == null);
var state_34249__$1 = (function (){var statearr_34253 = state_34249;
(statearr_34253[(7)] = inst_34228__$1);

return statearr_34253;
})();
if(cljs.core.truth_(inst_34229)){
var statearr_34254_34274 = state_34249__$1;
(statearr_34254_34274[(1)] = (5));

} else {
var statearr_34255_34275 = state_34249__$1;
(statearr_34255_34275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (13))){
var state_34249__$1 = state_34249;
var statearr_34256_34276 = state_34249__$1;
(statearr_34256_34276[(2)] = null);

(statearr_34256_34276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (6))){
var inst_34228 = (state_34249[(7)]);
var state_34249__$1 = state_34249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34249__$1,(11),to,inst_34228);
} else {
if((state_val_34250 === (3))){
var inst_34247 = (state_34249[(2)]);
var state_34249__$1 = state_34249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34249__$1,inst_34247);
} else {
if((state_val_34250 === (12))){
var state_34249__$1 = state_34249;
var statearr_34257_34277 = state_34249__$1;
(statearr_34257_34277[(2)] = null);

(statearr_34257_34277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (2))){
var state_34249__$1 = state_34249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34249__$1,(4),from);
} else {
if((state_val_34250 === (11))){
var inst_34238 = (state_34249[(2)]);
var state_34249__$1 = state_34249;
if(cljs.core.truth_(inst_34238)){
var statearr_34258_34278 = state_34249__$1;
(statearr_34258_34278[(1)] = (12));

} else {
var statearr_34259_34279 = state_34249__$1;
(statearr_34259_34279[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (9))){
var state_34249__$1 = state_34249;
var statearr_34260_34280 = state_34249__$1;
(statearr_34260_34280[(2)] = null);

(statearr_34260_34280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (5))){
var state_34249__$1 = state_34249;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34261_34281 = state_34249__$1;
(statearr_34261_34281[(1)] = (8));

} else {
var statearr_34262_34282 = state_34249__$1;
(statearr_34262_34282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (14))){
var inst_34243 = (state_34249[(2)]);
var state_34249__$1 = state_34249;
var statearr_34263_34283 = state_34249__$1;
(statearr_34263_34283[(2)] = inst_34243);

(statearr_34263_34283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (10))){
var inst_34235 = (state_34249[(2)]);
var state_34249__$1 = state_34249;
var statearr_34264_34284 = state_34249__$1;
(statearr_34264_34284[(2)] = inst_34235);

(statearr_34264_34284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (8))){
var inst_34232 = cljs.core.async.close_BANG_.call(null,to);
var state_34249__$1 = state_34249;
var statearr_34265_34285 = state_34249__$1;
(statearr_34265_34285[(2)] = inst_34232);

(statearr_34265_34285[(1)] = (10));


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
});})(c__34124__auto___34271))
;
return ((function (switch__34034__auto__,c__34124__auto___34271){
return (function() {
var cljs$core$async$state_machine__34035__auto__ = null;
var cljs$core$async$state_machine__34035__auto____0 = (function (){
var statearr_34266 = [null,null,null,null,null,null,null,null];
(statearr_34266[(0)] = cljs$core$async$state_machine__34035__auto__);

(statearr_34266[(1)] = (1));

return statearr_34266;
});
var cljs$core$async$state_machine__34035__auto____1 = (function (state_34249){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_34249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e34267){if((e34267 instanceof Object)){
var ex__34038__auto__ = e34267;
var statearr_34268_34286 = state_34249;
(statearr_34268_34286[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34287 = state_34249;
state_34249 = G__34287;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$state_machine__34035__auto__ = function(state_34249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34035__auto____1.call(this,state_34249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34035__auto____0;
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34035__auto____1;
return cljs$core$async$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___34271))
})();
var state__34126__auto__ = (function (){var statearr_34269 = f__34125__auto__.call(null);
(statearr_34269[(6)] = c__34124__auto___34271);

return statearr_34269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___34271))
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
return (function (p__34288){
var vec__34289 = p__34288;
var v = cljs.core.nth.call(null,vec__34289,(0),null);
var p = cljs.core.nth.call(null,vec__34289,(1),null);
var job = vec__34289;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34124__auto___34460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___34460,res,vec__34289,v,p,job,jobs,results){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___34460,res,vec__34289,v,p,job,jobs,results){
return (function (state_34296){
var state_val_34297 = (state_34296[(1)]);
if((state_val_34297 === (1))){
var state_34296__$1 = state_34296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34296__$1,(2),res,v);
} else {
if((state_val_34297 === (2))){
var inst_34293 = (state_34296[(2)]);
var inst_34294 = cljs.core.async.close_BANG_.call(null,res);
var state_34296__$1 = (function (){var statearr_34298 = state_34296;
(statearr_34298[(7)] = inst_34293);

return statearr_34298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34296__$1,inst_34294);
} else {
return null;
}
}
});})(c__34124__auto___34460,res,vec__34289,v,p,job,jobs,results))
;
return ((function (switch__34034__auto__,c__34124__auto___34460,res,vec__34289,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0 = (function (){
var statearr_34299 = [null,null,null,null,null,null,null,null];
(statearr_34299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__);

(statearr_34299[(1)] = (1));

return statearr_34299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1 = (function (state_34296){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_34296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e34300){if((e34300 instanceof Object)){
var ex__34038__auto__ = e34300;
var statearr_34301_34461 = state_34296;
(statearr_34301_34461[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34462 = state_34296;
state_34296 = G__34462;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__ = function(state_34296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1.call(this,state_34296);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___34460,res,vec__34289,v,p,job,jobs,results))
})();
var state__34126__auto__ = (function (){var statearr_34302 = f__34125__auto__.call(null);
(statearr_34302[(6)] = c__34124__auto___34460);

return statearr_34302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___34460,res,vec__34289,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34303){
var vec__34304 = p__34303;
var v = cljs.core.nth.call(null,vec__34304,(0),null);
var p = cljs.core.nth.call(null,vec__34304,(1),null);
var job = vec__34304;
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
var n__31115__auto___34463 = n;
var __34464 = (0);
while(true){
if((__34464 < n__31115__auto___34463)){
var G__34307_34465 = type;
var G__34307_34466__$1 = (((G__34307_34465 instanceof cljs.core.Keyword))?G__34307_34465.fqn:null);
switch (G__34307_34466__$1) {
case "compute":
var c__34124__auto___34468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34464,c__34124__auto___34468,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (__34464,c__34124__auto___34468,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async){
return (function (state_34320){
var state_val_34321 = (state_34320[(1)]);
if((state_val_34321 === (1))){
var state_34320__$1 = state_34320;
var statearr_34322_34469 = state_34320__$1;
(statearr_34322_34469[(2)] = null);

(statearr_34322_34469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (2))){
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34320__$1,(4),jobs);
} else {
if((state_val_34321 === (3))){
var inst_34318 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34320__$1,inst_34318);
} else {
if((state_val_34321 === (4))){
var inst_34310 = (state_34320[(2)]);
var inst_34311 = process.call(null,inst_34310);
var state_34320__$1 = state_34320;
if(cljs.core.truth_(inst_34311)){
var statearr_34323_34470 = state_34320__$1;
(statearr_34323_34470[(1)] = (5));

} else {
var statearr_34324_34471 = state_34320__$1;
(statearr_34324_34471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (5))){
var state_34320__$1 = state_34320;
var statearr_34325_34472 = state_34320__$1;
(statearr_34325_34472[(2)] = null);

(statearr_34325_34472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (6))){
var state_34320__$1 = state_34320;
var statearr_34326_34473 = state_34320__$1;
(statearr_34326_34473[(2)] = null);

(statearr_34326_34473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (7))){
var inst_34316 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34327_34474 = state_34320__$1;
(statearr_34327_34474[(2)] = inst_34316);

(statearr_34327_34474[(1)] = (3));


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
});})(__34464,c__34124__auto___34468,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async))
;
return ((function (__34464,switch__34034__auto__,c__34124__auto___34468,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0 = (function (){
var statearr_34328 = [null,null,null,null,null,null,null];
(statearr_34328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__);

(statearr_34328[(1)] = (1));

return statearr_34328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1 = (function (state_34320){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_34320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e34329){if((e34329 instanceof Object)){
var ex__34038__auto__ = e34329;
var statearr_34330_34475 = state_34320;
(statearr_34330_34475[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34476 = state_34320;
state_34320 = G__34476;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__ = function(state_34320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1.call(this,state_34320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__;
})()
;})(__34464,switch__34034__auto__,c__34124__auto___34468,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async))
})();
var state__34126__auto__ = (function (){var statearr_34331 = f__34125__auto__.call(null);
(statearr_34331[(6)] = c__34124__auto___34468);

return statearr_34331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(__34464,c__34124__auto___34468,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async))
);


break;
case "async":
var c__34124__auto___34477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34464,c__34124__auto___34477,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (__34464,c__34124__auto___34477,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async){
return (function (state_34344){
var state_val_34345 = (state_34344[(1)]);
if((state_val_34345 === (1))){
var state_34344__$1 = state_34344;
var statearr_34346_34478 = state_34344__$1;
(statearr_34346_34478[(2)] = null);

(statearr_34346_34478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34345 === (2))){
var state_34344__$1 = state_34344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34344__$1,(4),jobs);
} else {
if((state_val_34345 === (3))){
var inst_34342 = (state_34344[(2)]);
var state_34344__$1 = state_34344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34344__$1,inst_34342);
} else {
if((state_val_34345 === (4))){
var inst_34334 = (state_34344[(2)]);
var inst_34335 = async.call(null,inst_34334);
var state_34344__$1 = state_34344;
if(cljs.core.truth_(inst_34335)){
var statearr_34347_34479 = state_34344__$1;
(statearr_34347_34479[(1)] = (5));

} else {
var statearr_34348_34480 = state_34344__$1;
(statearr_34348_34480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34345 === (5))){
var state_34344__$1 = state_34344;
var statearr_34349_34481 = state_34344__$1;
(statearr_34349_34481[(2)] = null);

(statearr_34349_34481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34345 === (6))){
var state_34344__$1 = state_34344;
var statearr_34350_34482 = state_34344__$1;
(statearr_34350_34482[(2)] = null);

(statearr_34350_34482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34345 === (7))){
var inst_34340 = (state_34344[(2)]);
var state_34344__$1 = state_34344;
var statearr_34351_34483 = state_34344__$1;
(statearr_34351_34483[(2)] = inst_34340);

(statearr_34351_34483[(1)] = (3));


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
});})(__34464,c__34124__auto___34477,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async))
;
return ((function (__34464,switch__34034__auto__,c__34124__auto___34477,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0 = (function (){
var statearr_34352 = [null,null,null,null,null,null,null];
(statearr_34352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__);

(statearr_34352[(1)] = (1));

return statearr_34352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1 = (function (state_34344){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_34344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e34353){if((e34353 instanceof Object)){
var ex__34038__auto__ = e34353;
var statearr_34354_34484 = state_34344;
(statearr_34354_34484[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34485 = state_34344;
state_34344 = G__34485;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__ = function(state_34344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1.call(this,state_34344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__;
})()
;})(__34464,switch__34034__auto__,c__34124__auto___34477,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async))
})();
var state__34126__auto__ = (function (){var statearr_34355 = f__34125__auto__.call(null);
(statearr_34355[(6)] = c__34124__auto___34477);

return statearr_34355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(__34464,c__34124__auto___34477,G__34307_34465,G__34307_34466__$1,n__31115__auto___34463,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34307_34466__$1)].join('')));

}

var G__34486 = (__34464 + (1));
__34464 = G__34486;
continue;
} else {
}
break;
}

var c__34124__auto___34487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___34487,jobs,results,process,async){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___34487,jobs,results,process,async){
return (function (state_34377){
var state_val_34378 = (state_34377[(1)]);
if((state_val_34378 === (1))){
var state_34377__$1 = state_34377;
var statearr_34379_34488 = state_34377__$1;
(statearr_34379_34488[(2)] = null);

(statearr_34379_34488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (2))){
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34377__$1,(4),from);
} else {
if((state_val_34378 === (3))){
var inst_34375 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34377__$1,inst_34375);
} else {
if((state_val_34378 === (4))){
var inst_34358 = (state_34377[(7)]);
var inst_34358__$1 = (state_34377[(2)]);
var inst_34359 = (inst_34358__$1 == null);
var state_34377__$1 = (function (){var statearr_34380 = state_34377;
(statearr_34380[(7)] = inst_34358__$1);

return statearr_34380;
})();
if(cljs.core.truth_(inst_34359)){
var statearr_34381_34489 = state_34377__$1;
(statearr_34381_34489[(1)] = (5));

} else {
var statearr_34382_34490 = state_34377__$1;
(statearr_34382_34490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (5))){
var inst_34361 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34377__$1 = state_34377;
var statearr_34383_34491 = state_34377__$1;
(statearr_34383_34491[(2)] = inst_34361);

(statearr_34383_34491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (6))){
var inst_34358 = (state_34377[(7)]);
var inst_34363 = (state_34377[(8)]);
var inst_34363__$1 = cljs.core.async.chan.call(null,(1));
var inst_34364 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34365 = [inst_34358,inst_34363__$1];
var inst_34366 = (new cljs.core.PersistentVector(null,2,(5),inst_34364,inst_34365,null));
var state_34377__$1 = (function (){var statearr_34384 = state_34377;
(statearr_34384[(8)] = inst_34363__$1);

return statearr_34384;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34377__$1,(8),jobs,inst_34366);
} else {
if((state_val_34378 === (7))){
var inst_34373 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
var statearr_34385_34492 = state_34377__$1;
(statearr_34385_34492[(2)] = inst_34373);

(statearr_34385_34492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (8))){
var inst_34363 = (state_34377[(8)]);
var inst_34368 = (state_34377[(2)]);
var state_34377__$1 = (function (){var statearr_34386 = state_34377;
(statearr_34386[(9)] = inst_34368);

return statearr_34386;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34377__$1,(9),results,inst_34363);
} else {
if((state_val_34378 === (9))){
var inst_34370 = (state_34377[(2)]);
var state_34377__$1 = (function (){var statearr_34387 = state_34377;
(statearr_34387[(10)] = inst_34370);

return statearr_34387;
})();
var statearr_34388_34493 = state_34377__$1;
(statearr_34388_34493[(2)] = null);

(statearr_34388_34493[(1)] = (2));


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
});})(c__34124__auto___34487,jobs,results,process,async))
;
return ((function (switch__34034__auto__,c__34124__auto___34487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0 = (function (){
var statearr_34389 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__);

(statearr_34389[(1)] = (1));

return statearr_34389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1 = (function (state_34377){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_34377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e34390){if((e34390 instanceof Object)){
var ex__34038__auto__ = e34390;
var statearr_34391_34494 = state_34377;
(statearr_34391_34494[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34495 = state_34377;
state_34377 = G__34495;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__ = function(state_34377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1.call(this,state_34377);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___34487,jobs,results,process,async))
})();
var state__34126__auto__ = (function (){var statearr_34392 = f__34125__auto__.call(null);
(statearr_34392[(6)] = c__34124__auto___34487);

return statearr_34392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___34487,jobs,results,process,async))
);


var c__34124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto__,jobs,results,process,async){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto__,jobs,results,process,async){
return (function (state_34430){
var state_val_34431 = (state_34430[(1)]);
if((state_val_34431 === (7))){
var inst_34426 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
var statearr_34432_34496 = state_34430__$1;
(statearr_34432_34496[(2)] = inst_34426);

(statearr_34432_34496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (20))){
var state_34430__$1 = state_34430;
var statearr_34433_34497 = state_34430__$1;
(statearr_34433_34497[(2)] = null);

(statearr_34433_34497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (1))){
var state_34430__$1 = state_34430;
var statearr_34434_34498 = state_34430__$1;
(statearr_34434_34498[(2)] = null);

(statearr_34434_34498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (4))){
var inst_34395 = (state_34430[(7)]);
var inst_34395__$1 = (state_34430[(2)]);
var inst_34396 = (inst_34395__$1 == null);
var state_34430__$1 = (function (){var statearr_34435 = state_34430;
(statearr_34435[(7)] = inst_34395__$1);

return statearr_34435;
})();
if(cljs.core.truth_(inst_34396)){
var statearr_34436_34499 = state_34430__$1;
(statearr_34436_34499[(1)] = (5));

} else {
var statearr_34437_34500 = state_34430__$1;
(statearr_34437_34500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (15))){
var inst_34408 = (state_34430[(8)]);
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34430__$1,(18),to,inst_34408);
} else {
if((state_val_34431 === (21))){
var inst_34421 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
var statearr_34438_34501 = state_34430__$1;
(statearr_34438_34501[(2)] = inst_34421);

(statearr_34438_34501[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (13))){
var inst_34423 = (state_34430[(2)]);
var state_34430__$1 = (function (){var statearr_34439 = state_34430;
(statearr_34439[(9)] = inst_34423);

return statearr_34439;
})();
var statearr_34440_34502 = state_34430__$1;
(statearr_34440_34502[(2)] = null);

(statearr_34440_34502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (6))){
var inst_34395 = (state_34430[(7)]);
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34430__$1,(11),inst_34395);
} else {
if((state_val_34431 === (17))){
var inst_34416 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
if(cljs.core.truth_(inst_34416)){
var statearr_34441_34503 = state_34430__$1;
(statearr_34441_34503[(1)] = (19));

} else {
var statearr_34442_34504 = state_34430__$1;
(statearr_34442_34504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (3))){
var inst_34428 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34430__$1,inst_34428);
} else {
if((state_val_34431 === (12))){
var inst_34405 = (state_34430[(10)]);
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34430__$1,(14),inst_34405);
} else {
if((state_val_34431 === (2))){
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34430__$1,(4),results);
} else {
if((state_val_34431 === (19))){
var state_34430__$1 = state_34430;
var statearr_34443_34505 = state_34430__$1;
(statearr_34443_34505[(2)] = null);

(statearr_34443_34505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (11))){
var inst_34405 = (state_34430[(2)]);
var state_34430__$1 = (function (){var statearr_34444 = state_34430;
(statearr_34444[(10)] = inst_34405);

return statearr_34444;
})();
var statearr_34445_34506 = state_34430__$1;
(statearr_34445_34506[(2)] = null);

(statearr_34445_34506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (9))){
var state_34430__$1 = state_34430;
var statearr_34446_34507 = state_34430__$1;
(statearr_34446_34507[(2)] = null);

(statearr_34446_34507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (5))){
var state_34430__$1 = state_34430;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34447_34508 = state_34430__$1;
(statearr_34447_34508[(1)] = (8));

} else {
var statearr_34448_34509 = state_34430__$1;
(statearr_34448_34509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (14))){
var inst_34410 = (state_34430[(11)]);
var inst_34408 = (state_34430[(8)]);
var inst_34408__$1 = (state_34430[(2)]);
var inst_34409 = (inst_34408__$1 == null);
var inst_34410__$1 = cljs.core.not.call(null,inst_34409);
var state_34430__$1 = (function (){var statearr_34449 = state_34430;
(statearr_34449[(11)] = inst_34410__$1);

(statearr_34449[(8)] = inst_34408__$1);

return statearr_34449;
})();
if(inst_34410__$1){
var statearr_34450_34510 = state_34430__$1;
(statearr_34450_34510[(1)] = (15));

} else {
var statearr_34451_34511 = state_34430__$1;
(statearr_34451_34511[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (16))){
var inst_34410 = (state_34430[(11)]);
var state_34430__$1 = state_34430;
var statearr_34452_34512 = state_34430__$1;
(statearr_34452_34512[(2)] = inst_34410);

(statearr_34452_34512[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (10))){
var inst_34402 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
var statearr_34453_34513 = state_34430__$1;
(statearr_34453_34513[(2)] = inst_34402);

(statearr_34453_34513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (18))){
var inst_34413 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
var statearr_34454_34514 = state_34430__$1;
(statearr_34454_34514[(2)] = inst_34413);

(statearr_34454_34514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (8))){
var inst_34399 = cljs.core.async.close_BANG_.call(null,to);
var state_34430__$1 = state_34430;
var statearr_34455_34515 = state_34430__$1;
(statearr_34455_34515[(2)] = inst_34399);

(statearr_34455_34515[(1)] = (10));


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
});})(c__34124__auto__,jobs,results,process,async))
;
return ((function (switch__34034__auto__,c__34124__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0 = (function (){
var statearr_34456 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__);

(statearr_34456[(1)] = (1));

return statearr_34456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1 = (function (state_34430){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_34430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e34457){if((e34457 instanceof Object)){
var ex__34038__auto__ = e34457;
var statearr_34458_34516 = state_34430;
(statearr_34458_34516[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34517 = state_34430;
state_34430 = G__34517;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__ = function(state_34430){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1.call(this,state_34430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto__,jobs,results,process,async))
})();
var state__34126__auto__ = (function (){var statearr_34459 = f__34125__auto__.call(null);
(statearr_34459[(6)] = c__34124__auto__);

return statearr_34459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto__,jobs,results,process,async))
);

return c__34124__auto__;
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
var G__34519 = arguments.length;
switch (G__34519) {
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
var G__34522 = arguments.length;
switch (G__34522) {
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
var G__34525 = arguments.length;
switch (G__34525) {
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
var c__34124__auto___34574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___34574,tc,fc){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___34574,tc,fc){
return (function (state_34551){
var state_val_34552 = (state_34551[(1)]);
if((state_val_34552 === (7))){
var inst_34547 = (state_34551[(2)]);
var state_34551__$1 = state_34551;
var statearr_34553_34575 = state_34551__$1;
(statearr_34553_34575[(2)] = inst_34547);

(statearr_34553_34575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (1))){
var state_34551__$1 = state_34551;
var statearr_34554_34576 = state_34551__$1;
(statearr_34554_34576[(2)] = null);

(statearr_34554_34576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (4))){
var inst_34528 = (state_34551[(7)]);
var inst_34528__$1 = (state_34551[(2)]);
var inst_34529 = (inst_34528__$1 == null);
var state_34551__$1 = (function (){var statearr_34555 = state_34551;
(statearr_34555[(7)] = inst_34528__$1);

return statearr_34555;
})();
if(cljs.core.truth_(inst_34529)){
var statearr_34556_34577 = state_34551__$1;
(statearr_34556_34577[(1)] = (5));

} else {
var statearr_34557_34578 = state_34551__$1;
(statearr_34557_34578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (13))){
var state_34551__$1 = state_34551;
var statearr_34558_34579 = state_34551__$1;
(statearr_34558_34579[(2)] = null);

(statearr_34558_34579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (6))){
var inst_34528 = (state_34551[(7)]);
var inst_34534 = p.call(null,inst_34528);
var state_34551__$1 = state_34551;
if(cljs.core.truth_(inst_34534)){
var statearr_34559_34580 = state_34551__$1;
(statearr_34559_34580[(1)] = (9));

} else {
var statearr_34560_34581 = state_34551__$1;
(statearr_34560_34581[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (3))){
var inst_34549 = (state_34551[(2)]);
var state_34551__$1 = state_34551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34551__$1,inst_34549);
} else {
if((state_val_34552 === (12))){
var state_34551__$1 = state_34551;
var statearr_34561_34582 = state_34551__$1;
(statearr_34561_34582[(2)] = null);

(statearr_34561_34582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (2))){
var state_34551__$1 = state_34551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34551__$1,(4),ch);
} else {
if((state_val_34552 === (11))){
var inst_34528 = (state_34551[(7)]);
var inst_34538 = (state_34551[(2)]);
var state_34551__$1 = state_34551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34551__$1,(8),inst_34538,inst_34528);
} else {
if((state_val_34552 === (9))){
var state_34551__$1 = state_34551;
var statearr_34562_34583 = state_34551__$1;
(statearr_34562_34583[(2)] = tc);

(statearr_34562_34583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (5))){
var inst_34531 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34532 = cljs.core.async.close_BANG_.call(null,fc);
var state_34551__$1 = (function (){var statearr_34563 = state_34551;
(statearr_34563[(8)] = inst_34531);

return statearr_34563;
})();
var statearr_34564_34584 = state_34551__$1;
(statearr_34564_34584[(2)] = inst_34532);

(statearr_34564_34584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (14))){
var inst_34545 = (state_34551[(2)]);
var state_34551__$1 = state_34551;
var statearr_34565_34585 = state_34551__$1;
(statearr_34565_34585[(2)] = inst_34545);

(statearr_34565_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (10))){
var state_34551__$1 = state_34551;
var statearr_34566_34586 = state_34551__$1;
(statearr_34566_34586[(2)] = fc);

(statearr_34566_34586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34552 === (8))){
var inst_34540 = (state_34551[(2)]);
var state_34551__$1 = state_34551;
if(cljs.core.truth_(inst_34540)){
var statearr_34567_34587 = state_34551__$1;
(statearr_34567_34587[(1)] = (12));

} else {
var statearr_34568_34588 = state_34551__$1;
(statearr_34568_34588[(1)] = (13));

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
});})(c__34124__auto___34574,tc,fc))
;
return ((function (switch__34034__auto__,c__34124__auto___34574,tc,fc){
return (function() {
var cljs$core$async$state_machine__34035__auto__ = null;
var cljs$core$async$state_machine__34035__auto____0 = (function (){
var statearr_34569 = [null,null,null,null,null,null,null,null,null];
(statearr_34569[(0)] = cljs$core$async$state_machine__34035__auto__);

(statearr_34569[(1)] = (1));

return statearr_34569;
});
var cljs$core$async$state_machine__34035__auto____1 = (function (state_34551){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_34551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e34570){if((e34570 instanceof Object)){
var ex__34038__auto__ = e34570;
var statearr_34571_34589 = state_34551;
(statearr_34571_34589[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34590 = state_34551;
state_34551 = G__34590;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$state_machine__34035__auto__ = function(state_34551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34035__auto____1.call(this,state_34551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34035__auto____0;
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34035__auto____1;
return cljs$core$async$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___34574,tc,fc))
})();
var state__34126__auto__ = (function (){var statearr_34572 = f__34125__auto__.call(null);
(statearr_34572[(6)] = c__34124__auto___34574);

return statearr_34572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___34574,tc,fc))
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
var c__34124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto__){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto__){
return (function (state_34611){
var state_val_34612 = (state_34611[(1)]);
if((state_val_34612 === (7))){
var inst_34607 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34613_34631 = state_34611__$1;
(statearr_34613_34631[(2)] = inst_34607);

(statearr_34613_34631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (1))){
var inst_34591 = init;
var state_34611__$1 = (function (){var statearr_34614 = state_34611;
(statearr_34614[(7)] = inst_34591);

return statearr_34614;
})();
var statearr_34615_34632 = state_34611__$1;
(statearr_34615_34632[(2)] = null);

(statearr_34615_34632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (4))){
var inst_34594 = (state_34611[(8)]);
var inst_34594__$1 = (state_34611[(2)]);
var inst_34595 = (inst_34594__$1 == null);
var state_34611__$1 = (function (){var statearr_34616 = state_34611;
(statearr_34616[(8)] = inst_34594__$1);

return statearr_34616;
})();
if(cljs.core.truth_(inst_34595)){
var statearr_34617_34633 = state_34611__$1;
(statearr_34617_34633[(1)] = (5));

} else {
var statearr_34618_34634 = state_34611__$1;
(statearr_34618_34634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (6))){
var inst_34591 = (state_34611[(7)]);
var inst_34594 = (state_34611[(8)]);
var inst_34598 = (state_34611[(9)]);
var inst_34598__$1 = f.call(null,inst_34591,inst_34594);
var inst_34599 = cljs.core.reduced_QMARK_.call(null,inst_34598__$1);
var state_34611__$1 = (function (){var statearr_34619 = state_34611;
(statearr_34619[(9)] = inst_34598__$1);

return statearr_34619;
})();
if(inst_34599){
var statearr_34620_34635 = state_34611__$1;
(statearr_34620_34635[(1)] = (8));

} else {
var statearr_34621_34636 = state_34611__$1;
(statearr_34621_34636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (3))){
var inst_34609 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34611__$1,inst_34609);
} else {
if((state_val_34612 === (2))){
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34611__$1,(4),ch);
} else {
if((state_val_34612 === (9))){
var inst_34598 = (state_34611[(9)]);
var inst_34591 = inst_34598;
var state_34611__$1 = (function (){var statearr_34622 = state_34611;
(statearr_34622[(7)] = inst_34591);

return statearr_34622;
})();
var statearr_34623_34637 = state_34611__$1;
(statearr_34623_34637[(2)] = null);

(statearr_34623_34637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (5))){
var inst_34591 = (state_34611[(7)]);
var state_34611__$1 = state_34611;
var statearr_34624_34638 = state_34611__$1;
(statearr_34624_34638[(2)] = inst_34591);

(statearr_34624_34638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (10))){
var inst_34605 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34625_34639 = state_34611__$1;
(statearr_34625_34639[(2)] = inst_34605);

(statearr_34625_34639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (8))){
var inst_34598 = (state_34611[(9)]);
var inst_34601 = cljs.core.deref.call(null,inst_34598);
var state_34611__$1 = state_34611;
var statearr_34626_34640 = state_34611__$1;
(statearr_34626_34640[(2)] = inst_34601);

(statearr_34626_34640[(1)] = (10));


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
});})(c__34124__auto__))
;
return ((function (switch__34034__auto__,c__34124__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34035__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34035__auto____0 = (function (){
var statearr_34627 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34627[(0)] = cljs$core$async$reduce_$_state_machine__34035__auto__);

(statearr_34627[(1)] = (1));

return statearr_34627;
});
var cljs$core$async$reduce_$_state_machine__34035__auto____1 = (function (state_34611){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_34611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e34628){if((e34628 instanceof Object)){
var ex__34038__auto__ = e34628;
var statearr_34629_34641 = state_34611;
(statearr_34629_34641[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34642 = state_34611;
state_34611 = G__34642;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34035__auto__ = function(state_34611){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34035__auto____1.call(this,state_34611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34035__auto____0;
cljs$core$async$reduce_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34035__auto____1;
return cljs$core$async$reduce_$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto__))
})();
var state__34126__auto__ = (function (){var statearr_34630 = f__34125__auto__.call(null);
(statearr_34630[(6)] = c__34124__auto__);

return statearr_34630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto__))
);

return c__34124__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto__,f__$1){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto__,f__$1){
return (function (state_34648){
var state_val_34649 = (state_34648[(1)]);
if((state_val_34649 === (1))){
var inst_34643 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34648__$1 = state_34648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34648__$1,(2),inst_34643);
} else {
if((state_val_34649 === (2))){
var inst_34645 = (state_34648[(2)]);
var inst_34646 = f__$1.call(null,inst_34645);
var state_34648__$1 = state_34648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34648__$1,inst_34646);
} else {
return null;
}
}
});})(c__34124__auto__,f__$1))
;
return ((function (switch__34034__auto__,c__34124__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34035__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34035__auto____0 = (function (){
var statearr_34650 = [null,null,null,null,null,null,null];
(statearr_34650[(0)] = cljs$core$async$transduce_$_state_machine__34035__auto__);

(statearr_34650[(1)] = (1));

return statearr_34650;
});
var cljs$core$async$transduce_$_state_machine__34035__auto____1 = (function (state_34648){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_34648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e34651){if((e34651 instanceof Object)){
var ex__34038__auto__ = e34651;
var statearr_34652_34654 = state_34648;
(statearr_34652_34654[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34655 = state_34648;
state_34648 = G__34655;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34035__auto__ = function(state_34648){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34035__auto____1.call(this,state_34648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34035__auto____0;
cljs$core$async$transduce_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34035__auto____1;
return cljs$core$async$transduce_$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto__,f__$1))
})();
var state__34126__auto__ = (function (){var statearr_34653 = f__34125__auto__.call(null);
(statearr_34653[(6)] = c__34124__auto__);

return statearr_34653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto__,f__$1))
);

return c__34124__auto__;
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
var G__34657 = arguments.length;
switch (G__34657) {
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
var c__34124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto__){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto__){
return (function (state_34682){
var state_val_34683 = (state_34682[(1)]);
if((state_val_34683 === (7))){
var inst_34664 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34684_34705 = state_34682__$1;
(statearr_34684_34705[(2)] = inst_34664);

(statearr_34684_34705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (1))){
var inst_34658 = cljs.core.seq.call(null,coll);
var inst_34659 = inst_34658;
var state_34682__$1 = (function (){var statearr_34685 = state_34682;
(statearr_34685[(7)] = inst_34659);

return statearr_34685;
})();
var statearr_34686_34706 = state_34682__$1;
(statearr_34686_34706[(2)] = null);

(statearr_34686_34706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (4))){
var inst_34659 = (state_34682[(7)]);
var inst_34662 = cljs.core.first.call(null,inst_34659);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34682__$1,(7),ch,inst_34662);
} else {
if((state_val_34683 === (13))){
var inst_34676 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34687_34707 = state_34682__$1;
(statearr_34687_34707[(2)] = inst_34676);

(statearr_34687_34707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (6))){
var inst_34667 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34667)){
var statearr_34688_34708 = state_34682__$1;
(statearr_34688_34708[(1)] = (8));

} else {
var statearr_34689_34709 = state_34682__$1;
(statearr_34689_34709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (3))){
var inst_34680 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34682__$1,inst_34680);
} else {
if((state_val_34683 === (12))){
var state_34682__$1 = state_34682;
var statearr_34690_34710 = state_34682__$1;
(statearr_34690_34710[(2)] = null);

(statearr_34690_34710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (2))){
var inst_34659 = (state_34682[(7)]);
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34659)){
var statearr_34691_34711 = state_34682__$1;
(statearr_34691_34711[(1)] = (4));

} else {
var statearr_34692_34712 = state_34682__$1;
(statearr_34692_34712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (11))){
var inst_34673 = cljs.core.async.close_BANG_.call(null,ch);
var state_34682__$1 = state_34682;
var statearr_34693_34713 = state_34682__$1;
(statearr_34693_34713[(2)] = inst_34673);

(statearr_34693_34713[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (9))){
var state_34682__$1 = state_34682;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34694_34714 = state_34682__$1;
(statearr_34694_34714[(1)] = (11));

} else {
var statearr_34695_34715 = state_34682__$1;
(statearr_34695_34715[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (5))){
var inst_34659 = (state_34682[(7)]);
var state_34682__$1 = state_34682;
var statearr_34696_34716 = state_34682__$1;
(statearr_34696_34716[(2)] = inst_34659);

(statearr_34696_34716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (10))){
var inst_34678 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34697_34717 = state_34682__$1;
(statearr_34697_34717[(2)] = inst_34678);

(statearr_34697_34717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (8))){
var inst_34659 = (state_34682[(7)]);
var inst_34669 = cljs.core.next.call(null,inst_34659);
var inst_34659__$1 = inst_34669;
var state_34682__$1 = (function (){var statearr_34698 = state_34682;
(statearr_34698[(7)] = inst_34659__$1);

return statearr_34698;
})();
var statearr_34699_34718 = state_34682__$1;
(statearr_34699_34718[(2)] = null);

(statearr_34699_34718[(1)] = (2));


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
});})(c__34124__auto__))
;
return ((function (switch__34034__auto__,c__34124__auto__){
return (function() {
var cljs$core$async$state_machine__34035__auto__ = null;
var cljs$core$async$state_machine__34035__auto____0 = (function (){
var statearr_34700 = [null,null,null,null,null,null,null,null];
(statearr_34700[(0)] = cljs$core$async$state_machine__34035__auto__);

(statearr_34700[(1)] = (1));

return statearr_34700;
});
var cljs$core$async$state_machine__34035__auto____1 = (function (state_34682){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_34682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e34701){if((e34701 instanceof Object)){
var ex__34038__auto__ = e34701;
var statearr_34702_34719 = state_34682;
(statearr_34702_34719[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34720 = state_34682;
state_34682 = G__34720;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$state_machine__34035__auto__ = function(state_34682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34035__auto____1.call(this,state_34682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34035__auto____0;
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34035__auto____1;
return cljs$core$async$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto__))
})();
var state__34126__auto__ = (function (){var statearr_34703 = f__34125__auto__.call(null);
(statearr_34703[(6)] = c__34124__auto__);

return statearr_34703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto__))
);

return c__34124__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async34721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34721 = (function (ch,cs,meta34722){
this.ch = ch;
this.cs = cs;
this.meta34722 = meta34722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34723,meta34722__$1){
var self__ = this;
var _34723__$1 = this;
return (new cljs.core.async.t_cljs$core$async34721(self__.ch,self__.cs,meta34722__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34723){
var self__ = this;
var _34723__$1 = this;
return self__.meta34722;
});})(cs))
;

cljs.core.async.t_cljs$core$async34721.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34721.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34721.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34721.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34721.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34721.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34722","meta34722",448104823,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34721";

cljs.core.async.t_cljs$core$async34721.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async34721");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34721 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34721(ch__$1,cs__$1,meta34722){
return (new cljs.core.async.t_cljs$core$async34721(ch__$1,cs__$1,meta34722));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34721(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34124__auto___34943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___34943,cs,m,dchan,dctr,done){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___34943,cs,m,dchan,dctr,done){
return (function (state_34858){
var state_val_34859 = (state_34858[(1)]);
if((state_val_34859 === (7))){
var inst_34854 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34860_34944 = state_34858__$1;
(statearr_34860_34944[(2)] = inst_34854);

(statearr_34860_34944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (20))){
var inst_34757 = (state_34858[(7)]);
var inst_34769 = cljs.core.first.call(null,inst_34757);
var inst_34770 = cljs.core.nth.call(null,inst_34769,(0),null);
var inst_34771 = cljs.core.nth.call(null,inst_34769,(1),null);
var state_34858__$1 = (function (){var statearr_34861 = state_34858;
(statearr_34861[(8)] = inst_34770);

return statearr_34861;
})();
if(cljs.core.truth_(inst_34771)){
var statearr_34862_34945 = state_34858__$1;
(statearr_34862_34945[(1)] = (22));

} else {
var statearr_34863_34946 = state_34858__$1;
(statearr_34863_34946[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (27))){
var inst_34801 = (state_34858[(9)]);
var inst_34726 = (state_34858[(10)]);
var inst_34799 = (state_34858[(11)]);
var inst_34806 = (state_34858[(12)]);
var inst_34806__$1 = cljs.core._nth.call(null,inst_34799,inst_34801);
var inst_34807 = cljs.core.async.put_BANG_.call(null,inst_34806__$1,inst_34726,done);
var state_34858__$1 = (function (){var statearr_34864 = state_34858;
(statearr_34864[(12)] = inst_34806__$1);

return statearr_34864;
})();
if(cljs.core.truth_(inst_34807)){
var statearr_34865_34947 = state_34858__$1;
(statearr_34865_34947[(1)] = (30));

} else {
var statearr_34866_34948 = state_34858__$1;
(statearr_34866_34948[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (1))){
var state_34858__$1 = state_34858;
var statearr_34867_34949 = state_34858__$1;
(statearr_34867_34949[(2)] = null);

(statearr_34867_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (24))){
var inst_34757 = (state_34858[(7)]);
var inst_34776 = (state_34858[(2)]);
var inst_34777 = cljs.core.next.call(null,inst_34757);
var inst_34735 = inst_34777;
var inst_34736 = null;
var inst_34737 = (0);
var inst_34738 = (0);
var state_34858__$1 = (function (){var statearr_34868 = state_34858;
(statearr_34868[(13)] = inst_34737);

(statearr_34868[(14)] = inst_34738);

(statearr_34868[(15)] = inst_34776);

(statearr_34868[(16)] = inst_34735);

(statearr_34868[(17)] = inst_34736);

return statearr_34868;
})();
var statearr_34869_34950 = state_34858__$1;
(statearr_34869_34950[(2)] = null);

(statearr_34869_34950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (39))){
var state_34858__$1 = state_34858;
var statearr_34873_34951 = state_34858__$1;
(statearr_34873_34951[(2)] = null);

(statearr_34873_34951[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (4))){
var inst_34726 = (state_34858[(10)]);
var inst_34726__$1 = (state_34858[(2)]);
var inst_34727 = (inst_34726__$1 == null);
var state_34858__$1 = (function (){var statearr_34874 = state_34858;
(statearr_34874[(10)] = inst_34726__$1);

return statearr_34874;
})();
if(cljs.core.truth_(inst_34727)){
var statearr_34875_34952 = state_34858__$1;
(statearr_34875_34952[(1)] = (5));

} else {
var statearr_34876_34953 = state_34858__$1;
(statearr_34876_34953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (15))){
var inst_34737 = (state_34858[(13)]);
var inst_34738 = (state_34858[(14)]);
var inst_34735 = (state_34858[(16)]);
var inst_34736 = (state_34858[(17)]);
var inst_34753 = (state_34858[(2)]);
var inst_34754 = (inst_34738 + (1));
var tmp34870 = inst_34737;
var tmp34871 = inst_34735;
var tmp34872 = inst_34736;
var inst_34735__$1 = tmp34871;
var inst_34736__$1 = tmp34872;
var inst_34737__$1 = tmp34870;
var inst_34738__$1 = inst_34754;
var state_34858__$1 = (function (){var statearr_34877 = state_34858;
(statearr_34877[(13)] = inst_34737__$1);

(statearr_34877[(14)] = inst_34738__$1);

(statearr_34877[(18)] = inst_34753);

(statearr_34877[(16)] = inst_34735__$1);

(statearr_34877[(17)] = inst_34736__$1);

return statearr_34877;
})();
var statearr_34878_34954 = state_34858__$1;
(statearr_34878_34954[(2)] = null);

(statearr_34878_34954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (21))){
var inst_34780 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34882_34955 = state_34858__$1;
(statearr_34882_34955[(2)] = inst_34780);

(statearr_34882_34955[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (31))){
var inst_34806 = (state_34858[(12)]);
var inst_34810 = done.call(null,null);
var inst_34811 = cljs.core.async.untap_STAR_.call(null,m,inst_34806);
var state_34858__$1 = (function (){var statearr_34883 = state_34858;
(statearr_34883[(19)] = inst_34810);

return statearr_34883;
})();
var statearr_34884_34956 = state_34858__$1;
(statearr_34884_34956[(2)] = inst_34811);

(statearr_34884_34956[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (32))){
var inst_34798 = (state_34858[(20)]);
var inst_34801 = (state_34858[(9)]);
var inst_34800 = (state_34858[(21)]);
var inst_34799 = (state_34858[(11)]);
var inst_34813 = (state_34858[(2)]);
var inst_34814 = (inst_34801 + (1));
var tmp34879 = inst_34798;
var tmp34880 = inst_34800;
var tmp34881 = inst_34799;
var inst_34798__$1 = tmp34879;
var inst_34799__$1 = tmp34881;
var inst_34800__$1 = tmp34880;
var inst_34801__$1 = inst_34814;
var state_34858__$1 = (function (){var statearr_34885 = state_34858;
(statearr_34885[(20)] = inst_34798__$1);

(statearr_34885[(9)] = inst_34801__$1);

(statearr_34885[(21)] = inst_34800__$1);

(statearr_34885[(22)] = inst_34813);

(statearr_34885[(11)] = inst_34799__$1);

return statearr_34885;
})();
var statearr_34886_34957 = state_34858__$1;
(statearr_34886_34957[(2)] = null);

(statearr_34886_34957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (40))){
var inst_34826 = (state_34858[(23)]);
var inst_34830 = done.call(null,null);
var inst_34831 = cljs.core.async.untap_STAR_.call(null,m,inst_34826);
var state_34858__$1 = (function (){var statearr_34887 = state_34858;
(statearr_34887[(24)] = inst_34830);

return statearr_34887;
})();
var statearr_34888_34958 = state_34858__$1;
(statearr_34888_34958[(2)] = inst_34831);

(statearr_34888_34958[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (33))){
var inst_34817 = (state_34858[(25)]);
var inst_34819 = cljs.core.chunked_seq_QMARK_.call(null,inst_34817);
var state_34858__$1 = state_34858;
if(inst_34819){
var statearr_34889_34959 = state_34858__$1;
(statearr_34889_34959[(1)] = (36));

} else {
var statearr_34890_34960 = state_34858__$1;
(statearr_34890_34960[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (13))){
var inst_34747 = (state_34858[(26)]);
var inst_34750 = cljs.core.async.close_BANG_.call(null,inst_34747);
var state_34858__$1 = state_34858;
var statearr_34891_34961 = state_34858__$1;
(statearr_34891_34961[(2)] = inst_34750);

(statearr_34891_34961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (22))){
var inst_34770 = (state_34858[(8)]);
var inst_34773 = cljs.core.async.close_BANG_.call(null,inst_34770);
var state_34858__$1 = state_34858;
var statearr_34892_34962 = state_34858__$1;
(statearr_34892_34962[(2)] = inst_34773);

(statearr_34892_34962[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (36))){
var inst_34817 = (state_34858[(25)]);
var inst_34821 = cljs.core.chunk_first.call(null,inst_34817);
var inst_34822 = cljs.core.chunk_rest.call(null,inst_34817);
var inst_34823 = cljs.core.count.call(null,inst_34821);
var inst_34798 = inst_34822;
var inst_34799 = inst_34821;
var inst_34800 = inst_34823;
var inst_34801 = (0);
var state_34858__$1 = (function (){var statearr_34893 = state_34858;
(statearr_34893[(20)] = inst_34798);

(statearr_34893[(9)] = inst_34801);

(statearr_34893[(21)] = inst_34800);

(statearr_34893[(11)] = inst_34799);

return statearr_34893;
})();
var statearr_34894_34963 = state_34858__$1;
(statearr_34894_34963[(2)] = null);

(statearr_34894_34963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (41))){
var inst_34817 = (state_34858[(25)]);
var inst_34833 = (state_34858[(2)]);
var inst_34834 = cljs.core.next.call(null,inst_34817);
var inst_34798 = inst_34834;
var inst_34799 = null;
var inst_34800 = (0);
var inst_34801 = (0);
var state_34858__$1 = (function (){var statearr_34895 = state_34858;
(statearr_34895[(20)] = inst_34798);

(statearr_34895[(9)] = inst_34801);

(statearr_34895[(27)] = inst_34833);

(statearr_34895[(21)] = inst_34800);

(statearr_34895[(11)] = inst_34799);

return statearr_34895;
})();
var statearr_34896_34964 = state_34858__$1;
(statearr_34896_34964[(2)] = null);

(statearr_34896_34964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (43))){
var state_34858__$1 = state_34858;
var statearr_34897_34965 = state_34858__$1;
(statearr_34897_34965[(2)] = null);

(statearr_34897_34965[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (29))){
var inst_34842 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34898_34966 = state_34858__$1;
(statearr_34898_34966[(2)] = inst_34842);

(statearr_34898_34966[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (44))){
var inst_34851 = (state_34858[(2)]);
var state_34858__$1 = (function (){var statearr_34899 = state_34858;
(statearr_34899[(28)] = inst_34851);

return statearr_34899;
})();
var statearr_34900_34967 = state_34858__$1;
(statearr_34900_34967[(2)] = null);

(statearr_34900_34967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (6))){
var inst_34790 = (state_34858[(29)]);
var inst_34789 = cljs.core.deref.call(null,cs);
var inst_34790__$1 = cljs.core.keys.call(null,inst_34789);
var inst_34791 = cljs.core.count.call(null,inst_34790__$1);
var inst_34792 = cljs.core.reset_BANG_.call(null,dctr,inst_34791);
var inst_34797 = cljs.core.seq.call(null,inst_34790__$1);
var inst_34798 = inst_34797;
var inst_34799 = null;
var inst_34800 = (0);
var inst_34801 = (0);
var state_34858__$1 = (function (){var statearr_34901 = state_34858;
(statearr_34901[(20)] = inst_34798);

(statearr_34901[(9)] = inst_34801);

(statearr_34901[(21)] = inst_34800);

(statearr_34901[(29)] = inst_34790__$1);

(statearr_34901[(30)] = inst_34792);

(statearr_34901[(11)] = inst_34799);

return statearr_34901;
})();
var statearr_34902_34968 = state_34858__$1;
(statearr_34902_34968[(2)] = null);

(statearr_34902_34968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (28))){
var inst_34798 = (state_34858[(20)]);
var inst_34817 = (state_34858[(25)]);
var inst_34817__$1 = cljs.core.seq.call(null,inst_34798);
var state_34858__$1 = (function (){var statearr_34903 = state_34858;
(statearr_34903[(25)] = inst_34817__$1);

return statearr_34903;
})();
if(inst_34817__$1){
var statearr_34904_34969 = state_34858__$1;
(statearr_34904_34969[(1)] = (33));

} else {
var statearr_34905_34970 = state_34858__$1;
(statearr_34905_34970[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (25))){
var inst_34801 = (state_34858[(9)]);
var inst_34800 = (state_34858[(21)]);
var inst_34803 = (inst_34801 < inst_34800);
var inst_34804 = inst_34803;
var state_34858__$1 = state_34858;
if(cljs.core.truth_(inst_34804)){
var statearr_34906_34971 = state_34858__$1;
(statearr_34906_34971[(1)] = (27));

} else {
var statearr_34907_34972 = state_34858__$1;
(statearr_34907_34972[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (34))){
var state_34858__$1 = state_34858;
var statearr_34908_34973 = state_34858__$1;
(statearr_34908_34973[(2)] = null);

(statearr_34908_34973[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (17))){
var state_34858__$1 = state_34858;
var statearr_34909_34974 = state_34858__$1;
(statearr_34909_34974[(2)] = null);

(statearr_34909_34974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (3))){
var inst_34856 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34858__$1,inst_34856);
} else {
if((state_val_34859 === (12))){
var inst_34785 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34910_34975 = state_34858__$1;
(statearr_34910_34975[(2)] = inst_34785);

(statearr_34910_34975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (2))){
var state_34858__$1 = state_34858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34858__$1,(4),ch);
} else {
if((state_val_34859 === (23))){
var state_34858__$1 = state_34858;
var statearr_34911_34976 = state_34858__$1;
(statearr_34911_34976[(2)] = null);

(statearr_34911_34976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (35))){
var inst_34840 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34912_34977 = state_34858__$1;
(statearr_34912_34977[(2)] = inst_34840);

(statearr_34912_34977[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (19))){
var inst_34757 = (state_34858[(7)]);
var inst_34761 = cljs.core.chunk_first.call(null,inst_34757);
var inst_34762 = cljs.core.chunk_rest.call(null,inst_34757);
var inst_34763 = cljs.core.count.call(null,inst_34761);
var inst_34735 = inst_34762;
var inst_34736 = inst_34761;
var inst_34737 = inst_34763;
var inst_34738 = (0);
var state_34858__$1 = (function (){var statearr_34913 = state_34858;
(statearr_34913[(13)] = inst_34737);

(statearr_34913[(14)] = inst_34738);

(statearr_34913[(16)] = inst_34735);

(statearr_34913[(17)] = inst_34736);

return statearr_34913;
})();
var statearr_34914_34978 = state_34858__$1;
(statearr_34914_34978[(2)] = null);

(statearr_34914_34978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (11))){
var inst_34757 = (state_34858[(7)]);
var inst_34735 = (state_34858[(16)]);
var inst_34757__$1 = cljs.core.seq.call(null,inst_34735);
var state_34858__$1 = (function (){var statearr_34915 = state_34858;
(statearr_34915[(7)] = inst_34757__$1);

return statearr_34915;
})();
if(inst_34757__$1){
var statearr_34916_34979 = state_34858__$1;
(statearr_34916_34979[(1)] = (16));

} else {
var statearr_34917_34980 = state_34858__$1;
(statearr_34917_34980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (9))){
var inst_34787 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34918_34981 = state_34858__$1;
(statearr_34918_34981[(2)] = inst_34787);

(statearr_34918_34981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (5))){
var inst_34733 = cljs.core.deref.call(null,cs);
var inst_34734 = cljs.core.seq.call(null,inst_34733);
var inst_34735 = inst_34734;
var inst_34736 = null;
var inst_34737 = (0);
var inst_34738 = (0);
var state_34858__$1 = (function (){var statearr_34919 = state_34858;
(statearr_34919[(13)] = inst_34737);

(statearr_34919[(14)] = inst_34738);

(statearr_34919[(16)] = inst_34735);

(statearr_34919[(17)] = inst_34736);

return statearr_34919;
})();
var statearr_34920_34982 = state_34858__$1;
(statearr_34920_34982[(2)] = null);

(statearr_34920_34982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (14))){
var state_34858__$1 = state_34858;
var statearr_34921_34983 = state_34858__$1;
(statearr_34921_34983[(2)] = null);

(statearr_34921_34983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (45))){
var inst_34848 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34922_34984 = state_34858__$1;
(statearr_34922_34984[(2)] = inst_34848);

(statearr_34922_34984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (26))){
var inst_34790 = (state_34858[(29)]);
var inst_34844 = (state_34858[(2)]);
var inst_34845 = cljs.core.seq.call(null,inst_34790);
var state_34858__$1 = (function (){var statearr_34923 = state_34858;
(statearr_34923[(31)] = inst_34844);

return statearr_34923;
})();
if(inst_34845){
var statearr_34924_34985 = state_34858__$1;
(statearr_34924_34985[(1)] = (42));

} else {
var statearr_34925_34986 = state_34858__$1;
(statearr_34925_34986[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (16))){
var inst_34757 = (state_34858[(7)]);
var inst_34759 = cljs.core.chunked_seq_QMARK_.call(null,inst_34757);
var state_34858__$1 = state_34858;
if(inst_34759){
var statearr_34926_34987 = state_34858__$1;
(statearr_34926_34987[(1)] = (19));

} else {
var statearr_34927_34988 = state_34858__$1;
(statearr_34927_34988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (38))){
var inst_34837 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34928_34989 = state_34858__$1;
(statearr_34928_34989[(2)] = inst_34837);

(statearr_34928_34989[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (30))){
var state_34858__$1 = state_34858;
var statearr_34929_34990 = state_34858__$1;
(statearr_34929_34990[(2)] = null);

(statearr_34929_34990[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (10))){
var inst_34738 = (state_34858[(14)]);
var inst_34736 = (state_34858[(17)]);
var inst_34746 = cljs.core._nth.call(null,inst_34736,inst_34738);
var inst_34747 = cljs.core.nth.call(null,inst_34746,(0),null);
var inst_34748 = cljs.core.nth.call(null,inst_34746,(1),null);
var state_34858__$1 = (function (){var statearr_34930 = state_34858;
(statearr_34930[(26)] = inst_34747);

return statearr_34930;
})();
if(cljs.core.truth_(inst_34748)){
var statearr_34931_34991 = state_34858__$1;
(statearr_34931_34991[(1)] = (13));

} else {
var statearr_34932_34992 = state_34858__$1;
(statearr_34932_34992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (18))){
var inst_34783 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34933_34993 = state_34858__$1;
(statearr_34933_34993[(2)] = inst_34783);

(statearr_34933_34993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (42))){
var state_34858__$1 = state_34858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34858__$1,(45),dchan);
} else {
if((state_val_34859 === (37))){
var inst_34826 = (state_34858[(23)]);
var inst_34726 = (state_34858[(10)]);
var inst_34817 = (state_34858[(25)]);
var inst_34826__$1 = cljs.core.first.call(null,inst_34817);
var inst_34827 = cljs.core.async.put_BANG_.call(null,inst_34826__$1,inst_34726,done);
var state_34858__$1 = (function (){var statearr_34934 = state_34858;
(statearr_34934[(23)] = inst_34826__$1);

return statearr_34934;
})();
if(cljs.core.truth_(inst_34827)){
var statearr_34935_34994 = state_34858__$1;
(statearr_34935_34994[(1)] = (39));

} else {
var statearr_34936_34995 = state_34858__$1;
(statearr_34936_34995[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (8))){
var inst_34737 = (state_34858[(13)]);
var inst_34738 = (state_34858[(14)]);
var inst_34740 = (inst_34738 < inst_34737);
var inst_34741 = inst_34740;
var state_34858__$1 = state_34858;
if(cljs.core.truth_(inst_34741)){
var statearr_34937_34996 = state_34858__$1;
(statearr_34937_34996[(1)] = (10));

} else {
var statearr_34938_34997 = state_34858__$1;
(statearr_34938_34997[(1)] = (11));

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
});})(c__34124__auto___34943,cs,m,dchan,dctr,done))
;
return ((function (switch__34034__auto__,c__34124__auto___34943,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34035__auto__ = null;
var cljs$core$async$mult_$_state_machine__34035__auto____0 = (function (){
var statearr_34939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34939[(0)] = cljs$core$async$mult_$_state_machine__34035__auto__);

(statearr_34939[(1)] = (1));

return statearr_34939;
});
var cljs$core$async$mult_$_state_machine__34035__auto____1 = (function (state_34858){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_34858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e34940){if((e34940 instanceof Object)){
var ex__34038__auto__ = e34940;
var statearr_34941_34998 = state_34858;
(statearr_34941_34998[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34999 = state_34858;
state_34858 = G__34999;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34035__auto__ = function(state_34858){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34035__auto____1.call(this,state_34858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34035__auto____0;
cljs$core$async$mult_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34035__auto____1;
return cljs$core$async$mult_$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___34943,cs,m,dchan,dctr,done))
})();
var state__34126__auto__ = (function (){var statearr_34942 = f__34125__auto__.call(null);
(statearr_34942[(6)] = c__34124__auto___34943);

return statearr_34942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___34943,cs,m,dchan,dctr,done))
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
var G__35001 = arguments.length;
switch (G__35001) {
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
var len__31349__auto___35013 = arguments.length;
var i__31350__auto___35014 = (0);
while(true){
if((i__31350__auto___35014 < len__31349__auto___35013)){
args__31356__auto__.push((arguments[i__31350__auto___35014]));

var G__35015 = (i__31350__auto___35014 + (1));
i__31350__auto___35014 = G__35015;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((3) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35007){
var map__35008 = p__35007;
var map__35008__$1 = ((((!((map__35008 == null)))?((((map__35008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35008):map__35008);
var opts = map__35008__$1;
var statearr_35010_35016 = state;
(statearr_35010_35016[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__35008,map__35008__$1,opts){
return (function (val){
var statearr_35011_35017 = state;
(statearr_35011_35017[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35008,map__35008__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_35012_35018 = state;
(statearr_35012_35018[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35003){
var G__35004 = cljs.core.first.call(null,seq35003);
var seq35003__$1 = cljs.core.next.call(null,seq35003);
var G__35005 = cljs.core.first.call(null,seq35003__$1);
var seq35003__$2 = cljs.core.next.call(null,seq35003__$1);
var G__35006 = cljs.core.first.call(null,seq35003__$2);
var seq35003__$3 = cljs.core.next.call(null,seq35003__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35004,G__35005,G__35006,seq35003__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35019 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35020){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35020 = meta35020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35021,meta35020__$1){
var self__ = this;
var _35021__$1 = this;
return (new cljs.core.async.t_cljs$core$async35019(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35020__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35019.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35021){
var self__ = this;
var _35021__$1 = this;
return self__.meta35020;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35019.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35019.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35019.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35019.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35019.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35019.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35019.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35019.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35019.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35020","meta35020",-1279411038,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35019";

cljs.core.async.t_cljs$core$async35019.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35019");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35019 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35019(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35020){
return (new cljs.core.async.t_cljs$core$async35019(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35020));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35019(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34124__auto___35183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___35183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___35183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35123){
var state_val_35124 = (state_35123[(1)]);
if((state_val_35124 === (7))){
var inst_35038 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35125_35184 = state_35123__$1;
(statearr_35125_35184[(2)] = inst_35038);

(statearr_35125_35184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (20))){
var inst_35050 = (state_35123[(7)]);
var state_35123__$1 = state_35123;
var statearr_35126_35185 = state_35123__$1;
(statearr_35126_35185[(2)] = inst_35050);

(statearr_35126_35185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (27))){
var state_35123__$1 = state_35123;
var statearr_35127_35186 = state_35123__$1;
(statearr_35127_35186[(2)] = null);

(statearr_35127_35186[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (1))){
var inst_35025 = (state_35123[(8)]);
var inst_35025__$1 = calc_state.call(null);
var inst_35027 = (inst_35025__$1 == null);
var inst_35028 = cljs.core.not.call(null,inst_35027);
var state_35123__$1 = (function (){var statearr_35128 = state_35123;
(statearr_35128[(8)] = inst_35025__$1);

return statearr_35128;
})();
if(inst_35028){
var statearr_35129_35187 = state_35123__$1;
(statearr_35129_35187[(1)] = (2));

} else {
var statearr_35130_35188 = state_35123__$1;
(statearr_35130_35188[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (24))){
var inst_35083 = (state_35123[(9)]);
var inst_35097 = (state_35123[(10)]);
var inst_35074 = (state_35123[(11)]);
var inst_35097__$1 = inst_35074.call(null,inst_35083);
var state_35123__$1 = (function (){var statearr_35131 = state_35123;
(statearr_35131[(10)] = inst_35097__$1);

return statearr_35131;
})();
if(cljs.core.truth_(inst_35097__$1)){
var statearr_35132_35189 = state_35123__$1;
(statearr_35132_35189[(1)] = (29));

} else {
var statearr_35133_35190 = state_35123__$1;
(statearr_35133_35190[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (4))){
var inst_35041 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_35041)){
var statearr_35134_35191 = state_35123__$1;
(statearr_35134_35191[(1)] = (8));

} else {
var statearr_35135_35192 = state_35123__$1;
(statearr_35135_35192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (15))){
var inst_35068 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_35068)){
var statearr_35136_35193 = state_35123__$1;
(statearr_35136_35193[(1)] = (19));

} else {
var statearr_35137_35194 = state_35123__$1;
(statearr_35137_35194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (21))){
var inst_35073 = (state_35123[(12)]);
var inst_35073__$1 = (state_35123[(2)]);
var inst_35074 = cljs.core.get.call(null,inst_35073__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35075 = cljs.core.get.call(null,inst_35073__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35076 = cljs.core.get.call(null,inst_35073__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35123__$1 = (function (){var statearr_35138 = state_35123;
(statearr_35138[(11)] = inst_35074);

(statearr_35138[(12)] = inst_35073__$1);

(statearr_35138[(13)] = inst_35075);

return statearr_35138;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35123__$1,(22),inst_35076);
} else {
if((state_val_35124 === (31))){
var inst_35105 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_35105)){
var statearr_35139_35195 = state_35123__$1;
(statearr_35139_35195[(1)] = (32));

} else {
var statearr_35140_35196 = state_35123__$1;
(statearr_35140_35196[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (32))){
var inst_35082 = (state_35123[(14)]);
var state_35123__$1 = state_35123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35123__$1,(35),out,inst_35082);
} else {
if((state_val_35124 === (33))){
var inst_35073 = (state_35123[(12)]);
var inst_35050 = inst_35073;
var state_35123__$1 = (function (){var statearr_35141 = state_35123;
(statearr_35141[(7)] = inst_35050);

return statearr_35141;
})();
var statearr_35142_35197 = state_35123__$1;
(statearr_35142_35197[(2)] = null);

(statearr_35142_35197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (13))){
var inst_35050 = (state_35123[(7)]);
var inst_35057 = inst_35050.cljs$lang$protocol_mask$partition0$;
var inst_35058 = (inst_35057 & (64));
var inst_35059 = inst_35050.cljs$core$ISeq$;
var inst_35060 = (cljs.core.PROTOCOL_SENTINEL === inst_35059);
var inst_35061 = (inst_35058) || (inst_35060);
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_35061)){
var statearr_35143_35198 = state_35123__$1;
(statearr_35143_35198[(1)] = (16));

} else {
var statearr_35144_35199 = state_35123__$1;
(statearr_35144_35199[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (22))){
var inst_35083 = (state_35123[(9)]);
var inst_35082 = (state_35123[(14)]);
var inst_35081 = (state_35123[(2)]);
var inst_35082__$1 = cljs.core.nth.call(null,inst_35081,(0),null);
var inst_35083__$1 = cljs.core.nth.call(null,inst_35081,(1),null);
var inst_35084 = (inst_35082__$1 == null);
var inst_35085 = cljs.core._EQ_.call(null,inst_35083__$1,change);
var inst_35086 = (inst_35084) || (inst_35085);
var state_35123__$1 = (function (){var statearr_35145 = state_35123;
(statearr_35145[(9)] = inst_35083__$1);

(statearr_35145[(14)] = inst_35082__$1);

return statearr_35145;
})();
if(cljs.core.truth_(inst_35086)){
var statearr_35146_35200 = state_35123__$1;
(statearr_35146_35200[(1)] = (23));

} else {
var statearr_35147_35201 = state_35123__$1;
(statearr_35147_35201[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (36))){
var inst_35073 = (state_35123[(12)]);
var inst_35050 = inst_35073;
var state_35123__$1 = (function (){var statearr_35148 = state_35123;
(statearr_35148[(7)] = inst_35050);

return statearr_35148;
})();
var statearr_35149_35202 = state_35123__$1;
(statearr_35149_35202[(2)] = null);

(statearr_35149_35202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (29))){
var inst_35097 = (state_35123[(10)]);
var state_35123__$1 = state_35123;
var statearr_35150_35203 = state_35123__$1;
(statearr_35150_35203[(2)] = inst_35097);

(statearr_35150_35203[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (6))){
var state_35123__$1 = state_35123;
var statearr_35151_35204 = state_35123__$1;
(statearr_35151_35204[(2)] = false);

(statearr_35151_35204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (28))){
var inst_35093 = (state_35123[(2)]);
var inst_35094 = calc_state.call(null);
var inst_35050 = inst_35094;
var state_35123__$1 = (function (){var statearr_35152 = state_35123;
(statearr_35152[(15)] = inst_35093);

(statearr_35152[(7)] = inst_35050);

return statearr_35152;
})();
var statearr_35153_35205 = state_35123__$1;
(statearr_35153_35205[(2)] = null);

(statearr_35153_35205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (25))){
var inst_35119 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35154_35206 = state_35123__$1;
(statearr_35154_35206[(2)] = inst_35119);

(statearr_35154_35206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (34))){
var inst_35117 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35155_35207 = state_35123__$1;
(statearr_35155_35207[(2)] = inst_35117);

(statearr_35155_35207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (17))){
var state_35123__$1 = state_35123;
var statearr_35156_35208 = state_35123__$1;
(statearr_35156_35208[(2)] = false);

(statearr_35156_35208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (3))){
var state_35123__$1 = state_35123;
var statearr_35157_35209 = state_35123__$1;
(statearr_35157_35209[(2)] = false);

(statearr_35157_35209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (12))){
var inst_35121 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35123__$1,inst_35121);
} else {
if((state_val_35124 === (2))){
var inst_35025 = (state_35123[(8)]);
var inst_35030 = inst_35025.cljs$lang$protocol_mask$partition0$;
var inst_35031 = (inst_35030 & (64));
var inst_35032 = inst_35025.cljs$core$ISeq$;
var inst_35033 = (cljs.core.PROTOCOL_SENTINEL === inst_35032);
var inst_35034 = (inst_35031) || (inst_35033);
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_35034)){
var statearr_35158_35210 = state_35123__$1;
(statearr_35158_35210[(1)] = (5));

} else {
var statearr_35159_35211 = state_35123__$1;
(statearr_35159_35211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (23))){
var inst_35082 = (state_35123[(14)]);
var inst_35088 = (inst_35082 == null);
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_35088)){
var statearr_35160_35212 = state_35123__$1;
(statearr_35160_35212[(1)] = (26));

} else {
var statearr_35161_35213 = state_35123__$1;
(statearr_35161_35213[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (35))){
var inst_35108 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_35108)){
var statearr_35162_35214 = state_35123__$1;
(statearr_35162_35214[(1)] = (36));

} else {
var statearr_35163_35215 = state_35123__$1;
(statearr_35163_35215[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (19))){
var inst_35050 = (state_35123[(7)]);
var inst_35070 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35050);
var state_35123__$1 = state_35123;
var statearr_35164_35216 = state_35123__$1;
(statearr_35164_35216[(2)] = inst_35070);

(statearr_35164_35216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (11))){
var inst_35050 = (state_35123[(7)]);
var inst_35054 = (inst_35050 == null);
var inst_35055 = cljs.core.not.call(null,inst_35054);
var state_35123__$1 = state_35123;
if(inst_35055){
var statearr_35165_35217 = state_35123__$1;
(statearr_35165_35217[(1)] = (13));

} else {
var statearr_35166_35218 = state_35123__$1;
(statearr_35166_35218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (9))){
var inst_35025 = (state_35123[(8)]);
var state_35123__$1 = state_35123;
var statearr_35167_35219 = state_35123__$1;
(statearr_35167_35219[(2)] = inst_35025);

(statearr_35167_35219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (5))){
var state_35123__$1 = state_35123;
var statearr_35168_35220 = state_35123__$1;
(statearr_35168_35220[(2)] = true);

(statearr_35168_35220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (14))){
var state_35123__$1 = state_35123;
var statearr_35169_35221 = state_35123__$1;
(statearr_35169_35221[(2)] = false);

(statearr_35169_35221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (26))){
var inst_35083 = (state_35123[(9)]);
var inst_35090 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35083);
var state_35123__$1 = state_35123;
var statearr_35170_35222 = state_35123__$1;
(statearr_35170_35222[(2)] = inst_35090);

(statearr_35170_35222[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (16))){
var state_35123__$1 = state_35123;
var statearr_35171_35223 = state_35123__$1;
(statearr_35171_35223[(2)] = true);

(statearr_35171_35223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (38))){
var inst_35113 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35172_35224 = state_35123__$1;
(statearr_35172_35224[(2)] = inst_35113);

(statearr_35172_35224[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (30))){
var inst_35083 = (state_35123[(9)]);
var inst_35074 = (state_35123[(11)]);
var inst_35075 = (state_35123[(13)]);
var inst_35100 = cljs.core.empty_QMARK_.call(null,inst_35074);
var inst_35101 = inst_35075.call(null,inst_35083);
var inst_35102 = cljs.core.not.call(null,inst_35101);
var inst_35103 = (inst_35100) && (inst_35102);
var state_35123__$1 = state_35123;
var statearr_35173_35225 = state_35123__$1;
(statearr_35173_35225[(2)] = inst_35103);

(statearr_35173_35225[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (10))){
var inst_35025 = (state_35123[(8)]);
var inst_35046 = (state_35123[(2)]);
var inst_35047 = cljs.core.get.call(null,inst_35046,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35048 = cljs.core.get.call(null,inst_35046,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35049 = cljs.core.get.call(null,inst_35046,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35050 = inst_35025;
var state_35123__$1 = (function (){var statearr_35174 = state_35123;
(statearr_35174[(16)] = inst_35047);

(statearr_35174[(7)] = inst_35050);

(statearr_35174[(17)] = inst_35048);

(statearr_35174[(18)] = inst_35049);

return statearr_35174;
})();
var statearr_35175_35226 = state_35123__$1;
(statearr_35175_35226[(2)] = null);

(statearr_35175_35226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (18))){
var inst_35065 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35176_35227 = state_35123__$1;
(statearr_35176_35227[(2)] = inst_35065);

(statearr_35176_35227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (37))){
var state_35123__$1 = state_35123;
var statearr_35177_35228 = state_35123__$1;
(statearr_35177_35228[(2)] = null);

(statearr_35177_35228[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (8))){
var inst_35025 = (state_35123[(8)]);
var inst_35043 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35025);
var state_35123__$1 = state_35123;
var statearr_35178_35229 = state_35123__$1;
(statearr_35178_35229[(2)] = inst_35043);

(statearr_35178_35229[(1)] = (10));


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
});})(c__34124__auto___35183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34034__auto__,c__34124__auto___35183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34035__auto__ = null;
var cljs$core$async$mix_$_state_machine__34035__auto____0 = (function (){
var statearr_35179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35179[(0)] = cljs$core$async$mix_$_state_machine__34035__auto__);

(statearr_35179[(1)] = (1));

return statearr_35179;
});
var cljs$core$async$mix_$_state_machine__34035__auto____1 = (function (state_35123){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_35123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e35180){if((e35180 instanceof Object)){
var ex__34038__auto__ = e35180;
var statearr_35181_35230 = state_35123;
(statearr_35181_35230[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35231 = state_35123;
state_35123 = G__35231;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34035__auto__ = function(state_35123){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34035__auto____1.call(this,state_35123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34035__auto____0;
cljs$core$async$mix_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34035__auto____1;
return cljs$core$async$mix_$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___35183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34126__auto__ = (function (){var statearr_35182 = f__34125__auto__.call(null);
(statearr_35182[(6)] = c__34124__auto___35183);

return statearr_35182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___35183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35233 = arguments.length;
switch (G__35233) {
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
var G__35237 = arguments.length;
switch (G__35237) {
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
return (function (p1__35235_SHARP_){
if(cljs.core.truth_(p1__35235_SHARP_.call(null,topic))){
return p1__35235_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35235_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30072__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35238 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35239){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35239 = meta35239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35240,meta35239__$1){
var self__ = this;
var _35240__$1 = this;
return (new cljs.core.async.t_cljs$core$async35238(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35239__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35240){
var self__ = this;
var _35240__$1 = this;
return self__.meta35239;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35238.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35238.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35238.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35238.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35238.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35238.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35238.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35239","meta35239",1103723965,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35238";

cljs.core.async.t_cljs$core$async35238.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35238");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35238 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35238(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35239){
return (new cljs.core.async.t_cljs$core$async35238(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35239));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35238(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34124__auto___35358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___35358,mults,ensure_mult,p){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___35358,mults,ensure_mult,p){
return (function (state_35312){
var state_val_35313 = (state_35312[(1)]);
if((state_val_35313 === (7))){
var inst_35308 = (state_35312[(2)]);
var state_35312__$1 = state_35312;
var statearr_35314_35359 = state_35312__$1;
(statearr_35314_35359[(2)] = inst_35308);

(statearr_35314_35359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (20))){
var state_35312__$1 = state_35312;
var statearr_35315_35360 = state_35312__$1;
(statearr_35315_35360[(2)] = null);

(statearr_35315_35360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (1))){
var state_35312__$1 = state_35312;
var statearr_35316_35361 = state_35312__$1;
(statearr_35316_35361[(2)] = null);

(statearr_35316_35361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (24))){
var inst_35291 = (state_35312[(7)]);
var inst_35300 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35291);
var state_35312__$1 = state_35312;
var statearr_35317_35362 = state_35312__$1;
(statearr_35317_35362[(2)] = inst_35300);

(statearr_35317_35362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (4))){
var inst_35243 = (state_35312[(8)]);
var inst_35243__$1 = (state_35312[(2)]);
var inst_35244 = (inst_35243__$1 == null);
var state_35312__$1 = (function (){var statearr_35318 = state_35312;
(statearr_35318[(8)] = inst_35243__$1);

return statearr_35318;
})();
if(cljs.core.truth_(inst_35244)){
var statearr_35319_35363 = state_35312__$1;
(statearr_35319_35363[(1)] = (5));

} else {
var statearr_35320_35364 = state_35312__$1;
(statearr_35320_35364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (15))){
var inst_35285 = (state_35312[(2)]);
var state_35312__$1 = state_35312;
var statearr_35321_35365 = state_35312__$1;
(statearr_35321_35365[(2)] = inst_35285);

(statearr_35321_35365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (21))){
var inst_35305 = (state_35312[(2)]);
var state_35312__$1 = (function (){var statearr_35322 = state_35312;
(statearr_35322[(9)] = inst_35305);

return statearr_35322;
})();
var statearr_35323_35366 = state_35312__$1;
(statearr_35323_35366[(2)] = null);

(statearr_35323_35366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (13))){
var inst_35267 = (state_35312[(10)]);
var inst_35269 = cljs.core.chunked_seq_QMARK_.call(null,inst_35267);
var state_35312__$1 = state_35312;
if(inst_35269){
var statearr_35324_35367 = state_35312__$1;
(statearr_35324_35367[(1)] = (16));

} else {
var statearr_35325_35368 = state_35312__$1;
(statearr_35325_35368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (22))){
var inst_35297 = (state_35312[(2)]);
var state_35312__$1 = state_35312;
if(cljs.core.truth_(inst_35297)){
var statearr_35326_35369 = state_35312__$1;
(statearr_35326_35369[(1)] = (23));

} else {
var statearr_35327_35370 = state_35312__$1;
(statearr_35327_35370[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (6))){
var inst_35293 = (state_35312[(11)]);
var inst_35243 = (state_35312[(8)]);
var inst_35291 = (state_35312[(7)]);
var inst_35291__$1 = topic_fn.call(null,inst_35243);
var inst_35292 = cljs.core.deref.call(null,mults);
var inst_35293__$1 = cljs.core.get.call(null,inst_35292,inst_35291__$1);
var state_35312__$1 = (function (){var statearr_35328 = state_35312;
(statearr_35328[(11)] = inst_35293__$1);

(statearr_35328[(7)] = inst_35291__$1);

return statearr_35328;
})();
if(cljs.core.truth_(inst_35293__$1)){
var statearr_35329_35371 = state_35312__$1;
(statearr_35329_35371[(1)] = (19));

} else {
var statearr_35330_35372 = state_35312__$1;
(statearr_35330_35372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (25))){
var inst_35302 = (state_35312[(2)]);
var state_35312__$1 = state_35312;
var statearr_35331_35373 = state_35312__$1;
(statearr_35331_35373[(2)] = inst_35302);

(statearr_35331_35373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (17))){
var inst_35267 = (state_35312[(10)]);
var inst_35276 = cljs.core.first.call(null,inst_35267);
var inst_35277 = cljs.core.async.muxch_STAR_.call(null,inst_35276);
var inst_35278 = cljs.core.async.close_BANG_.call(null,inst_35277);
var inst_35279 = cljs.core.next.call(null,inst_35267);
var inst_35253 = inst_35279;
var inst_35254 = null;
var inst_35255 = (0);
var inst_35256 = (0);
var state_35312__$1 = (function (){var statearr_35332 = state_35312;
(statearr_35332[(12)] = inst_35278);

(statearr_35332[(13)] = inst_35255);

(statearr_35332[(14)] = inst_35253);

(statearr_35332[(15)] = inst_35256);

(statearr_35332[(16)] = inst_35254);

return statearr_35332;
})();
var statearr_35333_35374 = state_35312__$1;
(statearr_35333_35374[(2)] = null);

(statearr_35333_35374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (3))){
var inst_35310 = (state_35312[(2)]);
var state_35312__$1 = state_35312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35312__$1,inst_35310);
} else {
if((state_val_35313 === (12))){
var inst_35287 = (state_35312[(2)]);
var state_35312__$1 = state_35312;
var statearr_35334_35375 = state_35312__$1;
(statearr_35334_35375[(2)] = inst_35287);

(statearr_35334_35375[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (2))){
var state_35312__$1 = state_35312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35312__$1,(4),ch);
} else {
if((state_val_35313 === (23))){
var state_35312__$1 = state_35312;
var statearr_35335_35376 = state_35312__$1;
(statearr_35335_35376[(2)] = null);

(statearr_35335_35376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (19))){
var inst_35293 = (state_35312[(11)]);
var inst_35243 = (state_35312[(8)]);
var inst_35295 = cljs.core.async.muxch_STAR_.call(null,inst_35293);
var state_35312__$1 = state_35312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35312__$1,(22),inst_35295,inst_35243);
} else {
if((state_val_35313 === (11))){
var inst_35253 = (state_35312[(14)]);
var inst_35267 = (state_35312[(10)]);
var inst_35267__$1 = cljs.core.seq.call(null,inst_35253);
var state_35312__$1 = (function (){var statearr_35336 = state_35312;
(statearr_35336[(10)] = inst_35267__$1);

return statearr_35336;
})();
if(inst_35267__$1){
var statearr_35337_35377 = state_35312__$1;
(statearr_35337_35377[(1)] = (13));

} else {
var statearr_35338_35378 = state_35312__$1;
(statearr_35338_35378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (9))){
var inst_35289 = (state_35312[(2)]);
var state_35312__$1 = state_35312;
var statearr_35339_35379 = state_35312__$1;
(statearr_35339_35379[(2)] = inst_35289);

(statearr_35339_35379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (5))){
var inst_35250 = cljs.core.deref.call(null,mults);
var inst_35251 = cljs.core.vals.call(null,inst_35250);
var inst_35252 = cljs.core.seq.call(null,inst_35251);
var inst_35253 = inst_35252;
var inst_35254 = null;
var inst_35255 = (0);
var inst_35256 = (0);
var state_35312__$1 = (function (){var statearr_35340 = state_35312;
(statearr_35340[(13)] = inst_35255);

(statearr_35340[(14)] = inst_35253);

(statearr_35340[(15)] = inst_35256);

(statearr_35340[(16)] = inst_35254);

return statearr_35340;
})();
var statearr_35341_35380 = state_35312__$1;
(statearr_35341_35380[(2)] = null);

(statearr_35341_35380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (14))){
var state_35312__$1 = state_35312;
var statearr_35345_35381 = state_35312__$1;
(statearr_35345_35381[(2)] = null);

(statearr_35345_35381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (16))){
var inst_35267 = (state_35312[(10)]);
var inst_35271 = cljs.core.chunk_first.call(null,inst_35267);
var inst_35272 = cljs.core.chunk_rest.call(null,inst_35267);
var inst_35273 = cljs.core.count.call(null,inst_35271);
var inst_35253 = inst_35272;
var inst_35254 = inst_35271;
var inst_35255 = inst_35273;
var inst_35256 = (0);
var state_35312__$1 = (function (){var statearr_35346 = state_35312;
(statearr_35346[(13)] = inst_35255);

(statearr_35346[(14)] = inst_35253);

(statearr_35346[(15)] = inst_35256);

(statearr_35346[(16)] = inst_35254);

return statearr_35346;
})();
var statearr_35347_35382 = state_35312__$1;
(statearr_35347_35382[(2)] = null);

(statearr_35347_35382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (10))){
var inst_35255 = (state_35312[(13)]);
var inst_35253 = (state_35312[(14)]);
var inst_35256 = (state_35312[(15)]);
var inst_35254 = (state_35312[(16)]);
var inst_35261 = cljs.core._nth.call(null,inst_35254,inst_35256);
var inst_35262 = cljs.core.async.muxch_STAR_.call(null,inst_35261);
var inst_35263 = cljs.core.async.close_BANG_.call(null,inst_35262);
var inst_35264 = (inst_35256 + (1));
var tmp35342 = inst_35255;
var tmp35343 = inst_35253;
var tmp35344 = inst_35254;
var inst_35253__$1 = tmp35343;
var inst_35254__$1 = tmp35344;
var inst_35255__$1 = tmp35342;
var inst_35256__$1 = inst_35264;
var state_35312__$1 = (function (){var statearr_35348 = state_35312;
(statearr_35348[(13)] = inst_35255__$1);

(statearr_35348[(14)] = inst_35253__$1);

(statearr_35348[(15)] = inst_35256__$1);

(statearr_35348[(16)] = inst_35254__$1);

(statearr_35348[(17)] = inst_35263);

return statearr_35348;
})();
var statearr_35349_35383 = state_35312__$1;
(statearr_35349_35383[(2)] = null);

(statearr_35349_35383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (18))){
var inst_35282 = (state_35312[(2)]);
var state_35312__$1 = state_35312;
var statearr_35350_35384 = state_35312__$1;
(statearr_35350_35384[(2)] = inst_35282);

(statearr_35350_35384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (8))){
var inst_35255 = (state_35312[(13)]);
var inst_35256 = (state_35312[(15)]);
var inst_35258 = (inst_35256 < inst_35255);
var inst_35259 = inst_35258;
var state_35312__$1 = state_35312;
if(cljs.core.truth_(inst_35259)){
var statearr_35351_35385 = state_35312__$1;
(statearr_35351_35385[(1)] = (10));

} else {
var statearr_35352_35386 = state_35312__$1;
(statearr_35352_35386[(1)] = (11));

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
});})(c__34124__auto___35358,mults,ensure_mult,p))
;
return ((function (switch__34034__auto__,c__34124__auto___35358,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34035__auto__ = null;
var cljs$core$async$state_machine__34035__auto____0 = (function (){
var statearr_35353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35353[(0)] = cljs$core$async$state_machine__34035__auto__);

(statearr_35353[(1)] = (1));

return statearr_35353;
});
var cljs$core$async$state_machine__34035__auto____1 = (function (state_35312){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_35312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e35354){if((e35354 instanceof Object)){
var ex__34038__auto__ = e35354;
var statearr_35355_35387 = state_35312;
(statearr_35355_35387[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35388 = state_35312;
state_35312 = G__35388;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$state_machine__34035__auto__ = function(state_35312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34035__auto____1.call(this,state_35312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34035__auto____0;
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34035__auto____1;
return cljs$core$async$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___35358,mults,ensure_mult,p))
})();
var state__34126__auto__ = (function (){var statearr_35356 = f__34125__auto__.call(null);
(statearr_35356[(6)] = c__34124__auto___35358);

return statearr_35356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___35358,mults,ensure_mult,p))
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
var G__35390 = arguments.length;
switch (G__35390) {
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
var G__35393 = arguments.length;
switch (G__35393) {
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
var G__35396 = arguments.length;
switch (G__35396) {
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
var c__34124__auto___35463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___35463,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___35463,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35435){
var state_val_35436 = (state_35435[(1)]);
if((state_val_35436 === (7))){
var state_35435__$1 = state_35435;
var statearr_35437_35464 = state_35435__$1;
(statearr_35437_35464[(2)] = null);

(statearr_35437_35464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (1))){
var state_35435__$1 = state_35435;
var statearr_35438_35465 = state_35435__$1;
(statearr_35438_35465[(2)] = null);

(statearr_35438_35465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (4))){
var inst_35399 = (state_35435[(7)]);
var inst_35401 = (inst_35399 < cnt);
var state_35435__$1 = state_35435;
if(cljs.core.truth_(inst_35401)){
var statearr_35439_35466 = state_35435__$1;
(statearr_35439_35466[(1)] = (6));

} else {
var statearr_35440_35467 = state_35435__$1;
(statearr_35440_35467[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (15))){
var inst_35431 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
var statearr_35441_35468 = state_35435__$1;
(statearr_35441_35468[(2)] = inst_35431);

(statearr_35441_35468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (13))){
var inst_35424 = cljs.core.async.close_BANG_.call(null,out);
var state_35435__$1 = state_35435;
var statearr_35442_35469 = state_35435__$1;
(statearr_35442_35469[(2)] = inst_35424);

(statearr_35442_35469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (6))){
var state_35435__$1 = state_35435;
var statearr_35443_35470 = state_35435__$1;
(statearr_35443_35470[(2)] = null);

(statearr_35443_35470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (3))){
var inst_35433 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35435__$1,inst_35433);
} else {
if((state_val_35436 === (12))){
var inst_35421 = (state_35435[(8)]);
var inst_35421__$1 = (state_35435[(2)]);
var inst_35422 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35421__$1);
var state_35435__$1 = (function (){var statearr_35444 = state_35435;
(statearr_35444[(8)] = inst_35421__$1);

return statearr_35444;
})();
if(cljs.core.truth_(inst_35422)){
var statearr_35445_35471 = state_35435__$1;
(statearr_35445_35471[(1)] = (13));

} else {
var statearr_35446_35472 = state_35435__$1;
(statearr_35446_35472[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (2))){
var inst_35398 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35399 = (0);
var state_35435__$1 = (function (){var statearr_35447 = state_35435;
(statearr_35447[(7)] = inst_35399);

(statearr_35447[(9)] = inst_35398);

return statearr_35447;
})();
var statearr_35448_35473 = state_35435__$1;
(statearr_35448_35473[(2)] = null);

(statearr_35448_35473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (11))){
var inst_35399 = (state_35435[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35435,(10),Object,null,(9));
var inst_35408 = chs__$1.call(null,inst_35399);
var inst_35409 = done.call(null,inst_35399);
var inst_35410 = cljs.core.async.take_BANG_.call(null,inst_35408,inst_35409);
var state_35435__$1 = state_35435;
var statearr_35449_35474 = state_35435__$1;
(statearr_35449_35474[(2)] = inst_35410);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35435__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (9))){
var inst_35399 = (state_35435[(7)]);
var inst_35412 = (state_35435[(2)]);
var inst_35413 = (inst_35399 + (1));
var inst_35399__$1 = inst_35413;
var state_35435__$1 = (function (){var statearr_35450 = state_35435;
(statearr_35450[(7)] = inst_35399__$1);

(statearr_35450[(10)] = inst_35412);

return statearr_35450;
})();
var statearr_35451_35475 = state_35435__$1;
(statearr_35451_35475[(2)] = null);

(statearr_35451_35475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (5))){
var inst_35419 = (state_35435[(2)]);
var state_35435__$1 = (function (){var statearr_35452 = state_35435;
(statearr_35452[(11)] = inst_35419);

return statearr_35452;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35435__$1,(12),dchan);
} else {
if((state_val_35436 === (14))){
var inst_35421 = (state_35435[(8)]);
var inst_35426 = cljs.core.apply.call(null,f,inst_35421);
var state_35435__$1 = state_35435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35435__$1,(16),out,inst_35426);
} else {
if((state_val_35436 === (16))){
var inst_35428 = (state_35435[(2)]);
var state_35435__$1 = (function (){var statearr_35453 = state_35435;
(statearr_35453[(12)] = inst_35428);

return statearr_35453;
})();
var statearr_35454_35476 = state_35435__$1;
(statearr_35454_35476[(2)] = null);

(statearr_35454_35476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (10))){
var inst_35403 = (state_35435[(2)]);
var inst_35404 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35435__$1 = (function (){var statearr_35455 = state_35435;
(statearr_35455[(13)] = inst_35403);

return statearr_35455;
})();
var statearr_35456_35477 = state_35435__$1;
(statearr_35456_35477[(2)] = inst_35404);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35435__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (8))){
var inst_35417 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
var statearr_35457_35478 = state_35435__$1;
(statearr_35457_35478[(2)] = inst_35417);

(statearr_35457_35478[(1)] = (5));


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
});})(c__34124__auto___35463,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34034__auto__,c__34124__auto___35463,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34035__auto__ = null;
var cljs$core$async$state_machine__34035__auto____0 = (function (){
var statearr_35458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35458[(0)] = cljs$core$async$state_machine__34035__auto__);

(statearr_35458[(1)] = (1));

return statearr_35458;
});
var cljs$core$async$state_machine__34035__auto____1 = (function (state_35435){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_35435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e35459){if((e35459 instanceof Object)){
var ex__34038__auto__ = e35459;
var statearr_35460_35479 = state_35435;
(statearr_35460_35479[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35480 = state_35435;
state_35435 = G__35480;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$state_machine__34035__auto__ = function(state_35435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34035__auto____1.call(this,state_35435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34035__auto____0;
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34035__auto____1;
return cljs$core$async$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___35463,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34126__auto__ = (function (){var statearr_35461 = f__34125__auto__.call(null);
(statearr_35461[(6)] = c__34124__auto___35463);

return statearr_35461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___35463,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35483 = arguments.length;
switch (G__35483) {
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
var c__34124__auto___35537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___35537,out){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___35537,out){
return (function (state_35515){
var state_val_35516 = (state_35515[(1)]);
if((state_val_35516 === (7))){
var inst_35495 = (state_35515[(7)]);
var inst_35494 = (state_35515[(8)]);
var inst_35494__$1 = (state_35515[(2)]);
var inst_35495__$1 = cljs.core.nth.call(null,inst_35494__$1,(0),null);
var inst_35496 = cljs.core.nth.call(null,inst_35494__$1,(1),null);
var inst_35497 = (inst_35495__$1 == null);
var state_35515__$1 = (function (){var statearr_35517 = state_35515;
(statearr_35517[(7)] = inst_35495__$1);

(statearr_35517[(9)] = inst_35496);

(statearr_35517[(8)] = inst_35494__$1);

return statearr_35517;
})();
if(cljs.core.truth_(inst_35497)){
var statearr_35518_35538 = state_35515__$1;
(statearr_35518_35538[(1)] = (8));

} else {
var statearr_35519_35539 = state_35515__$1;
(statearr_35519_35539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (1))){
var inst_35484 = cljs.core.vec.call(null,chs);
var inst_35485 = inst_35484;
var state_35515__$1 = (function (){var statearr_35520 = state_35515;
(statearr_35520[(10)] = inst_35485);

return statearr_35520;
})();
var statearr_35521_35540 = state_35515__$1;
(statearr_35521_35540[(2)] = null);

(statearr_35521_35540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (4))){
var inst_35485 = (state_35515[(10)]);
var state_35515__$1 = state_35515;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35515__$1,(7),inst_35485);
} else {
if((state_val_35516 === (6))){
var inst_35511 = (state_35515[(2)]);
var state_35515__$1 = state_35515;
var statearr_35522_35541 = state_35515__$1;
(statearr_35522_35541[(2)] = inst_35511);

(statearr_35522_35541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (3))){
var inst_35513 = (state_35515[(2)]);
var state_35515__$1 = state_35515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35515__$1,inst_35513);
} else {
if((state_val_35516 === (2))){
var inst_35485 = (state_35515[(10)]);
var inst_35487 = cljs.core.count.call(null,inst_35485);
var inst_35488 = (inst_35487 > (0));
var state_35515__$1 = state_35515;
if(cljs.core.truth_(inst_35488)){
var statearr_35524_35542 = state_35515__$1;
(statearr_35524_35542[(1)] = (4));

} else {
var statearr_35525_35543 = state_35515__$1;
(statearr_35525_35543[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (11))){
var inst_35485 = (state_35515[(10)]);
var inst_35504 = (state_35515[(2)]);
var tmp35523 = inst_35485;
var inst_35485__$1 = tmp35523;
var state_35515__$1 = (function (){var statearr_35526 = state_35515;
(statearr_35526[(11)] = inst_35504);

(statearr_35526[(10)] = inst_35485__$1);

return statearr_35526;
})();
var statearr_35527_35544 = state_35515__$1;
(statearr_35527_35544[(2)] = null);

(statearr_35527_35544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (9))){
var inst_35495 = (state_35515[(7)]);
var state_35515__$1 = state_35515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35515__$1,(11),out,inst_35495);
} else {
if((state_val_35516 === (5))){
var inst_35509 = cljs.core.async.close_BANG_.call(null,out);
var state_35515__$1 = state_35515;
var statearr_35528_35545 = state_35515__$1;
(statearr_35528_35545[(2)] = inst_35509);

(statearr_35528_35545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (10))){
var inst_35507 = (state_35515[(2)]);
var state_35515__$1 = state_35515;
var statearr_35529_35546 = state_35515__$1;
(statearr_35529_35546[(2)] = inst_35507);

(statearr_35529_35546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (8))){
var inst_35495 = (state_35515[(7)]);
var inst_35485 = (state_35515[(10)]);
var inst_35496 = (state_35515[(9)]);
var inst_35494 = (state_35515[(8)]);
var inst_35499 = (function (){var cs = inst_35485;
var vec__35490 = inst_35494;
var v = inst_35495;
var c = inst_35496;
return ((function (cs,vec__35490,v,c,inst_35495,inst_35485,inst_35496,inst_35494,state_val_35516,c__34124__auto___35537,out){
return (function (p1__35481_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35481_SHARP_);
});
;})(cs,vec__35490,v,c,inst_35495,inst_35485,inst_35496,inst_35494,state_val_35516,c__34124__auto___35537,out))
})();
var inst_35500 = cljs.core.filterv.call(null,inst_35499,inst_35485);
var inst_35485__$1 = inst_35500;
var state_35515__$1 = (function (){var statearr_35530 = state_35515;
(statearr_35530[(10)] = inst_35485__$1);

return statearr_35530;
})();
var statearr_35531_35547 = state_35515__$1;
(statearr_35531_35547[(2)] = null);

(statearr_35531_35547[(1)] = (2));


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
});})(c__34124__auto___35537,out))
;
return ((function (switch__34034__auto__,c__34124__auto___35537,out){
return (function() {
var cljs$core$async$state_machine__34035__auto__ = null;
var cljs$core$async$state_machine__34035__auto____0 = (function (){
var statearr_35532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35532[(0)] = cljs$core$async$state_machine__34035__auto__);

(statearr_35532[(1)] = (1));

return statearr_35532;
});
var cljs$core$async$state_machine__34035__auto____1 = (function (state_35515){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_35515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e35533){if((e35533 instanceof Object)){
var ex__34038__auto__ = e35533;
var statearr_35534_35548 = state_35515;
(statearr_35534_35548[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35549 = state_35515;
state_35515 = G__35549;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$state_machine__34035__auto__ = function(state_35515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34035__auto____1.call(this,state_35515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34035__auto____0;
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34035__auto____1;
return cljs$core$async$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___35537,out))
})();
var state__34126__auto__ = (function (){var statearr_35535 = f__34125__auto__.call(null);
(statearr_35535[(6)] = c__34124__auto___35537);

return statearr_35535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___35537,out))
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
var G__35551 = arguments.length;
switch (G__35551) {
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
var c__34124__auto___35596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___35596,out){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___35596,out){
return (function (state_35575){
var state_val_35576 = (state_35575[(1)]);
if((state_val_35576 === (7))){
var inst_35557 = (state_35575[(7)]);
var inst_35557__$1 = (state_35575[(2)]);
var inst_35558 = (inst_35557__$1 == null);
var inst_35559 = cljs.core.not.call(null,inst_35558);
var state_35575__$1 = (function (){var statearr_35577 = state_35575;
(statearr_35577[(7)] = inst_35557__$1);

return statearr_35577;
})();
if(inst_35559){
var statearr_35578_35597 = state_35575__$1;
(statearr_35578_35597[(1)] = (8));

} else {
var statearr_35579_35598 = state_35575__$1;
(statearr_35579_35598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35576 === (1))){
var inst_35552 = (0);
var state_35575__$1 = (function (){var statearr_35580 = state_35575;
(statearr_35580[(8)] = inst_35552);

return statearr_35580;
})();
var statearr_35581_35599 = state_35575__$1;
(statearr_35581_35599[(2)] = null);

(statearr_35581_35599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35576 === (4))){
var state_35575__$1 = state_35575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35575__$1,(7),ch);
} else {
if((state_val_35576 === (6))){
var inst_35570 = (state_35575[(2)]);
var state_35575__$1 = state_35575;
var statearr_35582_35600 = state_35575__$1;
(statearr_35582_35600[(2)] = inst_35570);

(statearr_35582_35600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35576 === (3))){
var inst_35572 = (state_35575[(2)]);
var inst_35573 = cljs.core.async.close_BANG_.call(null,out);
var state_35575__$1 = (function (){var statearr_35583 = state_35575;
(statearr_35583[(9)] = inst_35572);

return statearr_35583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35575__$1,inst_35573);
} else {
if((state_val_35576 === (2))){
var inst_35552 = (state_35575[(8)]);
var inst_35554 = (inst_35552 < n);
var state_35575__$1 = state_35575;
if(cljs.core.truth_(inst_35554)){
var statearr_35584_35601 = state_35575__$1;
(statearr_35584_35601[(1)] = (4));

} else {
var statearr_35585_35602 = state_35575__$1;
(statearr_35585_35602[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35576 === (11))){
var inst_35552 = (state_35575[(8)]);
var inst_35562 = (state_35575[(2)]);
var inst_35563 = (inst_35552 + (1));
var inst_35552__$1 = inst_35563;
var state_35575__$1 = (function (){var statearr_35586 = state_35575;
(statearr_35586[(8)] = inst_35552__$1);

(statearr_35586[(10)] = inst_35562);

return statearr_35586;
})();
var statearr_35587_35603 = state_35575__$1;
(statearr_35587_35603[(2)] = null);

(statearr_35587_35603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35576 === (9))){
var state_35575__$1 = state_35575;
var statearr_35588_35604 = state_35575__$1;
(statearr_35588_35604[(2)] = null);

(statearr_35588_35604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35576 === (5))){
var state_35575__$1 = state_35575;
var statearr_35589_35605 = state_35575__$1;
(statearr_35589_35605[(2)] = null);

(statearr_35589_35605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35576 === (10))){
var inst_35567 = (state_35575[(2)]);
var state_35575__$1 = state_35575;
var statearr_35590_35606 = state_35575__$1;
(statearr_35590_35606[(2)] = inst_35567);

(statearr_35590_35606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35576 === (8))){
var inst_35557 = (state_35575[(7)]);
var state_35575__$1 = state_35575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35575__$1,(11),out,inst_35557);
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
});})(c__34124__auto___35596,out))
;
return ((function (switch__34034__auto__,c__34124__auto___35596,out){
return (function() {
var cljs$core$async$state_machine__34035__auto__ = null;
var cljs$core$async$state_machine__34035__auto____0 = (function (){
var statearr_35591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35591[(0)] = cljs$core$async$state_machine__34035__auto__);

(statearr_35591[(1)] = (1));

return statearr_35591;
});
var cljs$core$async$state_machine__34035__auto____1 = (function (state_35575){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_35575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e35592){if((e35592 instanceof Object)){
var ex__34038__auto__ = e35592;
var statearr_35593_35607 = state_35575;
(statearr_35593_35607[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35608 = state_35575;
state_35575 = G__35608;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$state_machine__34035__auto__ = function(state_35575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34035__auto____1.call(this,state_35575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34035__auto____0;
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34035__auto____1;
return cljs$core$async$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___35596,out))
})();
var state__34126__auto__ = (function (){var statearr_35594 = f__34125__auto__.call(null);
(statearr_35594[(6)] = c__34124__auto___35596);

return statearr_35594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___35596,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35610 = (function (f,ch,meta35611){
this.f = f;
this.ch = ch;
this.meta35611 = meta35611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35612,meta35611__$1){
var self__ = this;
var _35612__$1 = this;
return (new cljs.core.async.t_cljs$core$async35610(self__.f,self__.ch,meta35611__$1));
});

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35612){
var self__ = this;
var _35612__$1 = this;
return self__.meta35611;
});

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35613 = (function (f,ch,meta35611,_,fn1,meta35614){
this.f = f;
this.ch = ch;
this.meta35611 = meta35611;
this._ = _;
this.fn1 = fn1;
this.meta35614 = meta35614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35615,meta35614__$1){
var self__ = this;
var _35615__$1 = this;
return (new cljs.core.async.t_cljs$core$async35613(self__.f,self__.ch,self__.meta35611,self__._,self__.fn1,meta35614__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35615){
var self__ = this;
var _35615__$1 = this;
return self__.meta35614;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35609_SHARP_){
return f1.call(null,(((p1__35609_SHARP_ == null))?null:self__.f.call(null,p1__35609_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35611","meta35611",-1719371371,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35610","cljs.core.async/t_cljs$core$async35610",1397192815,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35614","meta35614",9799055,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35613";

cljs.core.async.t_cljs$core$async35613.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35613");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35613 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35613(f__$1,ch__$1,meta35611__$1,___$2,fn1__$1,meta35614){
return (new cljs.core.async.t_cljs$core$async35613(f__$1,ch__$1,meta35611__$1,___$2,fn1__$1,meta35614));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35613(self__.f,self__.ch,self__.meta35611,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35611","meta35611",-1719371371,null)], null);
});

cljs.core.async.t_cljs$core$async35610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35610";

cljs.core.async.t_cljs$core$async35610.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35610");
});

cljs.core.async.__GT_t_cljs$core$async35610 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35610(f__$1,ch__$1,meta35611){
return (new cljs.core.async.t_cljs$core$async35610(f__$1,ch__$1,meta35611));
});

}

return (new cljs.core.async.t_cljs$core$async35610(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35616 = (function (f,ch,meta35617){
this.f = f;
this.ch = ch;
this.meta35617 = meta35617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35618,meta35617__$1){
var self__ = this;
var _35618__$1 = this;
return (new cljs.core.async.t_cljs$core$async35616(self__.f,self__.ch,meta35617__$1));
});

cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35618){
var self__ = this;
var _35618__$1 = this;
return self__.meta35617;
});

cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35617","meta35617",1291816997,null)], null);
});

cljs.core.async.t_cljs$core$async35616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35616";

cljs.core.async.t_cljs$core$async35616.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35616");
});

cljs.core.async.__GT_t_cljs$core$async35616 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35616(f__$1,ch__$1,meta35617){
return (new cljs.core.async.t_cljs$core$async35616(f__$1,ch__$1,meta35617));
});

}

return (new cljs.core.async.t_cljs$core$async35616(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35619 = (function (p,ch,meta35620){
this.p = p;
this.ch = ch;
this.meta35620 = meta35620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35621,meta35620__$1){
var self__ = this;
var _35621__$1 = this;
return (new cljs.core.async.t_cljs$core$async35619(self__.p,self__.ch,meta35620__$1));
});

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35621){
var self__ = this;
var _35621__$1 = this;
return self__.meta35620;
});

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35619.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35620","meta35620",1798349513,null)], null);
});

cljs.core.async.t_cljs$core$async35619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35619";

cljs.core.async.t_cljs$core$async35619.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35619");
});

cljs.core.async.__GT_t_cljs$core$async35619 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35619(p__$1,ch__$1,meta35620){
return (new cljs.core.async.t_cljs$core$async35619(p__$1,ch__$1,meta35620));
});

}

return (new cljs.core.async.t_cljs$core$async35619(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35623 = arguments.length;
switch (G__35623) {
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
var c__34124__auto___35663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___35663,out){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___35663,out){
return (function (state_35644){
var state_val_35645 = (state_35644[(1)]);
if((state_val_35645 === (7))){
var inst_35640 = (state_35644[(2)]);
var state_35644__$1 = state_35644;
var statearr_35646_35664 = state_35644__$1;
(statearr_35646_35664[(2)] = inst_35640);

(statearr_35646_35664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35645 === (1))){
var state_35644__$1 = state_35644;
var statearr_35647_35665 = state_35644__$1;
(statearr_35647_35665[(2)] = null);

(statearr_35647_35665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35645 === (4))){
var inst_35626 = (state_35644[(7)]);
var inst_35626__$1 = (state_35644[(2)]);
var inst_35627 = (inst_35626__$1 == null);
var state_35644__$1 = (function (){var statearr_35648 = state_35644;
(statearr_35648[(7)] = inst_35626__$1);

return statearr_35648;
})();
if(cljs.core.truth_(inst_35627)){
var statearr_35649_35666 = state_35644__$1;
(statearr_35649_35666[(1)] = (5));

} else {
var statearr_35650_35667 = state_35644__$1;
(statearr_35650_35667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35645 === (6))){
var inst_35626 = (state_35644[(7)]);
var inst_35631 = p.call(null,inst_35626);
var state_35644__$1 = state_35644;
if(cljs.core.truth_(inst_35631)){
var statearr_35651_35668 = state_35644__$1;
(statearr_35651_35668[(1)] = (8));

} else {
var statearr_35652_35669 = state_35644__$1;
(statearr_35652_35669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35645 === (3))){
var inst_35642 = (state_35644[(2)]);
var state_35644__$1 = state_35644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35644__$1,inst_35642);
} else {
if((state_val_35645 === (2))){
var state_35644__$1 = state_35644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35644__$1,(4),ch);
} else {
if((state_val_35645 === (11))){
var inst_35634 = (state_35644[(2)]);
var state_35644__$1 = state_35644;
var statearr_35653_35670 = state_35644__$1;
(statearr_35653_35670[(2)] = inst_35634);

(statearr_35653_35670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35645 === (9))){
var state_35644__$1 = state_35644;
var statearr_35654_35671 = state_35644__$1;
(statearr_35654_35671[(2)] = null);

(statearr_35654_35671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35645 === (5))){
var inst_35629 = cljs.core.async.close_BANG_.call(null,out);
var state_35644__$1 = state_35644;
var statearr_35655_35672 = state_35644__$1;
(statearr_35655_35672[(2)] = inst_35629);

(statearr_35655_35672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35645 === (10))){
var inst_35637 = (state_35644[(2)]);
var state_35644__$1 = (function (){var statearr_35656 = state_35644;
(statearr_35656[(8)] = inst_35637);

return statearr_35656;
})();
var statearr_35657_35673 = state_35644__$1;
(statearr_35657_35673[(2)] = null);

(statearr_35657_35673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35645 === (8))){
var inst_35626 = (state_35644[(7)]);
var state_35644__$1 = state_35644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35644__$1,(11),out,inst_35626);
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
});})(c__34124__auto___35663,out))
;
return ((function (switch__34034__auto__,c__34124__auto___35663,out){
return (function() {
var cljs$core$async$state_machine__34035__auto__ = null;
var cljs$core$async$state_machine__34035__auto____0 = (function (){
var statearr_35658 = [null,null,null,null,null,null,null,null,null];
(statearr_35658[(0)] = cljs$core$async$state_machine__34035__auto__);

(statearr_35658[(1)] = (1));

return statearr_35658;
});
var cljs$core$async$state_machine__34035__auto____1 = (function (state_35644){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_35644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e35659){if((e35659 instanceof Object)){
var ex__34038__auto__ = e35659;
var statearr_35660_35674 = state_35644;
(statearr_35660_35674[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35675 = state_35644;
state_35644 = G__35675;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$state_machine__34035__auto__ = function(state_35644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34035__auto____1.call(this,state_35644);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34035__auto____0;
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34035__auto____1;
return cljs$core$async$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___35663,out))
})();
var state__34126__auto__ = (function (){var statearr_35661 = f__34125__auto__.call(null);
(statearr_35661[(6)] = c__34124__auto___35663);

return statearr_35661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___35663,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35677 = arguments.length;
switch (G__35677) {
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
var c__34124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto__){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto__){
return (function (state_35740){
var state_val_35741 = (state_35740[(1)]);
if((state_val_35741 === (7))){
var inst_35736 = (state_35740[(2)]);
var state_35740__$1 = state_35740;
var statearr_35742_35780 = state_35740__$1;
(statearr_35742_35780[(2)] = inst_35736);

(statearr_35742_35780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (20))){
var inst_35706 = (state_35740[(7)]);
var inst_35717 = (state_35740[(2)]);
var inst_35718 = cljs.core.next.call(null,inst_35706);
var inst_35692 = inst_35718;
var inst_35693 = null;
var inst_35694 = (0);
var inst_35695 = (0);
var state_35740__$1 = (function (){var statearr_35743 = state_35740;
(statearr_35743[(8)] = inst_35717);

(statearr_35743[(9)] = inst_35692);

(statearr_35743[(10)] = inst_35694);

(statearr_35743[(11)] = inst_35695);

(statearr_35743[(12)] = inst_35693);

return statearr_35743;
})();
var statearr_35744_35781 = state_35740__$1;
(statearr_35744_35781[(2)] = null);

(statearr_35744_35781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (1))){
var state_35740__$1 = state_35740;
var statearr_35745_35782 = state_35740__$1;
(statearr_35745_35782[(2)] = null);

(statearr_35745_35782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (4))){
var inst_35681 = (state_35740[(13)]);
var inst_35681__$1 = (state_35740[(2)]);
var inst_35682 = (inst_35681__$1 == null);
var state_35740__$1 = (function (){var statearr_35746 = state_35740;
(statearr_35746[(13)] = inst_35681__$1);

return statearr_35746;
})();
if(cljs.core.truth_(inst_35682)){
var statearr_35747_35783 = state_35740__$1;
(statearr_35747_35783[(1)] = (5));

} else {
var statearr_35748_35784 = state_35740__$1;
(statearr_35748_35784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (15))){
var state_35740__$1 = state_35740;
var statearr_35752_35785 = state_35740__$1;
(statearr_35752_35785[(2)] = null);

(statearr_35752_35785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (21))){
var state_35740__$1 = state_35740;
var statearr_35753_35786 = state_35740__$1;
(statearr_35753_35786[(2)] = null);

(statearr_35753_35786[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (13))){
var inst_35692 = (state_35740[(9)]);
var inst_35694 = (state_35740[(10)]);
var inst_35695 = (state_35740[(11)]);
var inst_35693 = (state_35740[(12)]);
var inst_35702 = (state_35740[(2)]);
var inst_35703 = (inst_35695 + (1));
var tmp35749 = inst_35692;
var tmp35750 = inst_35694;
var tmp35751 = inst_35693;
var inst_35692__$1 = tmp35749;
var inst_35693__$1 = tmp35751;
var inst_35694__$1 = tmp35750;
var inst_35695__$1 = inst_35703;
var state_35740__$1 = (function (){var statearr_35754 = state_35740;
(statearr_35754[(14)] = inst_35702);

(statearr_35754[(9)] = inst_35692__$1);

(statearr_35754[(10)] = inst_35694__$1);

(statearr_35754[(11)] = inst_35695__$1);

(statearr_35754[(12)] = inst_35693__$1);

return statearr_35754;
})();
var statearr_35755_35787 = state_35740__$1;
(statearr_35755_35787[(2)] = null);

(statearr_35755_35787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (22))){
var state_35740__$1 = state_35740;
var statearr_35756_35788 = state_35740__$1;
(statearr_35756_35788[(2)] = null);

(statearr_35756_35788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (6))){
var inst_35681 = (state_35740[(13)]);
var inst_35690 = f.call(null,inst_35681);
var inst_35691 = cljs.core.seq.call(null,inst_35690);
var inst_35692 = inst_35691;
var inst_35693 = null;
var inst_35694 = (0);
var inst_35695 = (0);
var state_35740__$1 = (function (){var statearr_35757 = state_35740;
(statearr_35757[(9)] = inst_35692);

(statearr_35757[(10)] = inst_35694);

(statearr_35757[(11)] = inst_35695);

(statearr_35757[(12)] = inst_35693);

return statearr_35757;
})();
var statearr_35758_35789 = state_35740__$1;
(statearr_35758_35789[(2)] = null);

(statearr_35758_35789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (17))){
var inst_35706 = (state_35740[(7)]);
var inst_35710 = cljs.core.chunk_first.call(null,inst_35706);
var inst_35711 = cljs.core.chunk_rest.call(null,inst_35706);
var inst_35712 = cljs.core.count.call(null,inst_35710);
var inst_35692 = inst_35711;
var inst_35693 = inst_35710;
var inst_35694 = inst_35712;
var inst_35695 = (0);
var state_35740__$1 = (function (){var statearr_35759 = state_35740;
(statearr_35759[(9)] = inst_35692);

(statearr_35759[(10)] = inst_35694);

(statearr_35759[(11)] = inst_35695);

(statearr_35759[(12)] = inst_35693);

return statearr_35759;
})();
var statearr_35760_35790 = state_35740__$1;
(statearr_35760_35790[(2)] = null);

(statearr_35760_35790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (3))){
var inst_35738 = (state_35740[(2)]);
var state_35740__$1 = state_35740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35740__$1,inst_35738);
} else {
if((state_val_35741 === (12))){
var inst_35726 = (state_35740[(2)]);
var state_35740__$1 = state_35740;
var statearr_35761_35791 = state_35740__$1;
(statearr_35761_35791[(2)] = inst_35726);

(statearr_35761_35791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (2))){
var state_35740__$1 = state_35740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35740__$1,(4),in$);
} else {
if((state_val_35741 === (23))){
var inst_35734 = (state_35740[(2)]);
var state_35740__$1 = state_35740;
var statearr_35762_35792 = state_35740__$1;
(statearr_35762_35792[(2)] = inst_35734);

(statearr_35762_35792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (19))){
var inst_35721 = (state_35740[(2)]);
var state_35740__$1 = state_35740;
var statearr_35763_35793 = state_35740__$1;
(statearr_35763_35793[(2)] = inst_35721);

(statearr_35763_35793[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (11))){
var inst_35706 = (state_35740[(7)]);
var inst_35692 = (state_35740[(9)]);
var inst_35706__$1 = cljs.core.seq.call(null,inst_35692);
var state_35740__$1 = (function (){var statearr_35764 = state_35740;
(statearr_35764[(7)] = inst_35706__$1);

return statearr_35764;
})();
if(inst_35706__$1){
var statearr_35765_35794 = state_35740__$1;
(statearr_35765_35794[(1)] = (14));

} else {
var statearr_35766_35795 = state_35740__$1;
(statearr_35766_35795[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (9))){
var inst_35728 = (state_35740[(2)]);
var inst_35729 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35740__$1 = (function (){var statearr_35767 = state_35740;
(statearr_35767[(15)] = inst_35728);

return statearr_35767;
})();
if(cljs.core.truth_(inst_35729)){
var statearr_35768_35796 = state_35740__$1;
(statearr_35768_35796[(1)] = (21));

} else {
var statearr_35769_35797 = state_35740__$1;
(statearr_35769_35797[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (5))){
var inst_35684 = cljs.core.async.close_BANG_.call(null,out);
var state_35740__$1 = state_35740;
var statearr_35770_35798 = state_35740__$1;
(statearr_35770_35798[(2)] = inst_35684);

(statearr_35770_35798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (14))){
var inst_35706 = (state_35740[(7)]);
var inst_35708 = cljs.core.chunked_seq_QMARK_.call(null,inst_35706);
var state_35740__$1 = state_35740;
if(inst_35708){
var statearr_35771_35799 = state_35740__$1;
(statearr_35771_35799[(1)] = (17));

} else {
var statearr_35772_35800 = state_35740__$1;
(statearr_35772_35800[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (16))){
var inst_35724 = (state_35740[(2)]);
var state_35740__$1 = state_35740;
var statearr_35773_35801 = state_35740__$1;
(statearr_35773_35801[(2)] = inst_35724);

(statearr_35773_35801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (10))){
var inst_35695 = (state_35740[(11)]);
var inst_35693 = (state_35740[(12)]);
var inst_35700 = cljs.core._nth.call(null,inst_35693,inst_35695);
var state_35740__$1 = state_35740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35740__$1,(13),out,inst_35700);
} else {
if((state_val_35741 === (18))){
var inst_35706 = (state_35740[(7)]);
var inst_35715 = cljs.core.first.call(null,inst_35706);
var state_35740__$1 = state_35740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35740__$1,(20),out,inst_35715);
} else {
if((state_val_35741 === (8))){
var inst_35694 = (state_35740[(10)]);
var inst_35695 = (state_35740[(11)]);
var inst_35697 = (inst_35695 < inst_35694);
var inst_35698 = inst_35697;
var state_35740__$1 = state_35740;
if(cljs.core.truth_(inst_35698)){
var statearr_35774_35802 = state_35740__$1;
(statearr_35774_35802[(1)] = (10));

} else {
var statearr_35775_35803 = state_35740__$1;
(statearr_35775_35803[(1)] = (11));

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
});})(c__34124__auto__))
;
return ((function (switch__34034__auto__,c__34124__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34035__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34035__auto____0 = (function (){
var statearr_35776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35776[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34035__auto__);

(statearr_35776[(1)] = (1));

return statearr_35776;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34035__auto____1 = (function (state_35740){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_35740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e35777){if((e35777 instanceof Object)){
var ex__34038__auto__ = e35777;
var statearr_35778_35804 = state_35740;
(statearr_35778_35804[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35805 = state_35740;
state_35740 = G__35805;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34035__auto__ = function(state_35740){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34035__auto____1.call(this,state_35740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34035__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34035__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto__))
})();
var state__34126__auto__ = (function (){var statearr_35779 = f__34125__auto__.call(null);
(statearr_35779[(6)] = c__34124__auto__);

return statearr_35779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto__))
);

return c__34124__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35807 = arguments.length;
switch (G__35807) {
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
var G__35810 = arguments.length;
switch (G__35810) {
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
var G__35813 = arguments.length;
switch (G__35813) {
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
var c__34124__auto___35860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___35860,out){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___35860,out){
return (function (state_35837){
var state_val_35838 = (state_35837[(1)]);
if((state_val_35838 === (7))){
var inst_35832 = (state_35837[(2)]);
var state_35837__$1 = state_35837;
var statearr_35839_35861 = state_35837__$1;
(statearr_35839_35861[(2)] = inst_35832);

(statearr_35839_35861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (1))){
var inst_35814 = null;
var state_35837__$1 = (function (){var statearr_35840 = state_35837;
(statearr_35840[(7)] = inst_35814);

return statearr_35840;
})();
var statearr_35841_35862 = state_35837__$1;
(statearr_35841_35862[(2)] = null);

(statearr_35841_35862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (4))){
var inst_35817 = (state_35837[(8)]);
var inst_35817__$1 = (state_35837[(2)]);
var inst_35818 = (inst_35817__$1 == null);
var inst_35819 = cljs.core.not.call(null,inst_35818);
var state_35837__$1 = (function (){var statearr_35842 = state_35837;
(statearr_35842[(8)] = inst_35817__$1);

return statearr_35842;
})();
if(inst_35819){
var statearr_35843_35863 = state_35837__$1;
(statearr_35843_35863[(1)] = (5));

} else {
var statearr_35844_35864 = state_35837__$1;
(statearr_35844_35864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (6))){
var state_35837__$1 = state_35837;
var statearr_35845_35865 = state_35837__$1;
(statearr_35845_35865[(2)] = null);

(statearr_35845_35865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (3))){
var inst_35834 = (state_35837[(2)]);
var inst_35835 = cljs.core.async.close_BANG_.call(null,out);
var state_35837__$1 = (function (){var statearr_35846 = state_35837;
(statearr_35846[(9)] = inst_35834);

return statearr_35846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35837__$1,inst_35835);
} else {
if((state_val_35838 === (2))){
var state_35837__$1 = state_35837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35837__$1,(4),ch);
} else {
if((state_val_35838 === (11))){
var inst_35817 = (state_35837[(8)]);
var inst_35826 = (state_35837[(2)]);
var inst_35814 = inst_35817;
var state_35837__$1 = (function (){var statearr_35847 = state_35837;
(statearr_35847[(10)] = inst_35826);

(statearr_35847[(7)] = inst_35814);

return statearr_35847;
})();
var statearr_35848_35866 = state_35837__$1;
(statearr_35848_35866[(2)] = null);

(statearr_35848_35866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (9))){
var inst_35817 = (state_35837[(8)]);
var state_35837__$1 = state_35837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35837__$1,(11),out,inst_35817);
} else {
if((state_val_35838 === (5))){
var inst_35817 = (state_35837[(8)]);
var inst_35814 = (state_35837[(7)]);
var inst_35821 = cljs.core._EQ_.call(null,inst_35817,inst_35814);
var state_35837__$1 = state_35837;
if(inst_35821){
var statearr_35850_35867 = state_35837__$1;
(statearr_35850_35867[(1)] = (8));

} else {
var statearr_35851_35868 = state_35837__$1;
(statearr_35851_35868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (10))){
var inst_35829 = (state_35837[(2)]);
var state_35837__$1 = state_35837;
var statearr_35852_35869 = state_35837__$1;
(statearr_35852_35869[(2)] = inst_35829);

(statearr_35852_35869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (8))){
var inst_35814 = (state_35837[(7)]);
var tmp35849 = inst_35814;
var inst_35814__$1 = tmp35849;
var state_35837__$1 = (function (){var statearr_35853 = state_35837;
(statearr_35853[(7)] = inst_35814__$1);

return statearr_35853;
})();
var statearr_35854_35870 = state_35837__$1;
(statearr_35854_35870[(2)] = null);

(statearr_35854_35870[(1)] = (2));


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
});})(c__34124__auto___35860,out))
;
return ((function (switch__34034__auto__,c__34124__auto___35860,out){
return (function() {
var cljs$core$async$state_machine__34035__auto__ = null;
var cljs$core$async$state_machine__34035__auto____0 = (function (){
var statearr_35855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35855[(0)] = cljs$core$async$state_machine__34035__auto__);

(statearr_35855[(1)] = (1));

return statearr_35855;
});
var cljs$core$async$state_machine__34035__auto____1 = (function (state_35837){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_35837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e35856){if((e35856 instanceof Object)){
var ex__34038__auto__ = e35856;
var statearr_35857_35871 = state_35837;
(statearr_35857_35871[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35872 = state_35837;
state_35837 = G__35872;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$state_machine__34035__auto__ = function(state_35837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34035__auto____1.call(this,state_35837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34035__auto____0;
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34035__auto____1;
return cljs$core$async$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___35860,out))
})();
var state__34126__auto__ = (function (){var statearr_35858 = f__34125__auto__.call(null);
(statearr_35858[(6)] = c__34124__auto___35860);

return statearr_35858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___35860,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35874 = arguments.length;
switch (G__35874) {
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
var c__34124__auto___35940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___35940,out){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___35940,out){
return (function (state_35912){
var state_val_35913 = (state_35912[(1)]);
if((state_val_35913 === (7))){
var inst_35908 = (state_35912[(2)]);
var state_35912__$1 = state_35912;
var statearr_35914_35941 = state_35912__$1;
(statearr_35914_35941[(2)] = inst_35908);

(statearr_35914_35941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35913 === (1))){
var inst_35875 = (new Array(n));
var inst_35876 = inst_35875;
var inst_35877 = (0);
var state_35912__$1 = (function (){var statearr_35915 = state_35912;
(statearr_35915[(7)] = inst_35876);

(statearr_35915[(8)] = inst_35877);

return statearr_35915;
})();
var statearr_35916_35942 = state_35912__$1;
(statearr_35916_35942[(2)] = null);

(statearr_35916_35942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35913 === (4))){
var inst_35880 = (state_35912[(9)]);
var inst_35880__$1 = (state_35912[(2)]);
var inst_35881 = (inst_35880__$1 == null);
var inst_35882 = cljs.core.not.call(null,inst_35881);
var state_35912__$1 = (function (){var statearr_35917 = state_35912;
(statearr_35917[(9)] = inst_35880__$1);

return statearr_35917;
})();
if(inst_35882){
var statearr_35918_35943 = state_35912__$1;
(statearr_35918_35943[(1)] = (5));

} else {
var statearr_35919_35944 = state_35912__$1;
(statearr_35919_35944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35913 === (15))){
var inst_35902 = (state_35912[(2)]);
var state_35912__$1 = state_35912;
var statearr_35920_35945 = state_35912__$1;
(statearr_35920_35945[(2)] = inst_35902);

(statearr_35920_35945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35913 === (13))){
var state_35912__$1 = state_35912;
var statearr_35921_35946 = state_35912__$1;
(statearr_35921_35946[(2)] = null);

(statearr_35921_35946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35913 === (6))){
var inst_35877 = (state_35912[(8)]);
var inst_35898 = (inst_35877 > (0));
var state_35912__$1 = state_35912;
if(cljs.core.truth_(inst_35898)){
var statearr_35922_35947 = state_35912__$1;
(statearr_35922_35947[(1)] = (12));

} else {
var statearr_35923_35948 = state_35912__$1;
(statearr_35923_35948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35913 === (3))){
var inst_35910 = (state_35912[(2)]);
var state_35912__$1 = state_35912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35912__$1,inst_35910);
} else {
if((state_val_35913 === (12))){
var inst_35876 = (state_35912[(7)]);
var inst_35900 = cljs.core.vec.call(null,inst_35876);
var state_35912__$1 = state_35912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35912__$1,(15),out,inst_35900);
} else {
if((state_val_35913 === (2))){
var state_35912__$1 = state_35912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35912__$1,(4),ch);
} else {
if((state_val_35913 === (11))){
var inst_35892 = (state_35912[(2)]);
var inst_35893 = (new Array(n));
var inst_35876 = inst_35893;
var inst_35877 = (0);
var state_35912__$1 = (function (){var statearr_35924 = state_35912;
(statearr_35924[(7)] = inst_35876);

(statearr_35924[(10)] = inst_35892);

(statearr_35924[(8)] = inst_35877);

return statearr_35924;
})();
var statearr_35925_35949 = state_35912__$1;
(statearr_35925_35949[(2)] = null);

(statearr_35925_35949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35913 === (9))){
var inst_35876 = (state_35912[(7)]);
var inst_35890 = cljs.core.vec.call(null,inst_35876);
var state_35912__$1 = state_35912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35912__$1,(11),out,inst_35890);
} else {
if((state_val_35913 === (5))){
var inst_35876 = (state_35912[(7)]);
var inst_35885 = (state_35912[(11)]);
var inst_35877 = (state_35912[(8)]);
var inst_35880 = (state_35912[(9)]);
var inst_35884 = (inst_35876[inst_35877] = inst_35880);
var inst_35885__$1 = (inst_35877 + (1));
var inst_35886 = (inst_35885__$1 < n);
var state_35912__$1 = (function (){var statearr_35926 = state_35912;
(statearr_35926[(11)] = inst_35885__$1);

(statearr_35926[(12)] = inst_35884);

return statearr_35926;
})();
if(cljs.core.truth_(inst_35886)){
var statearr_35927_35950 = state_35912__$1;
(statearr_35927_35950[(1)] = (8));

} else {
var statearr_35928_35951 = state_35912__$1;
(statearr_35928_35951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35913 === (14))){
var inst_35905 = (state_35912[(2)]);
var inst_35906 = cljs.core.async.close_BANG_.call(null,out);
var state_35912__$1 = (function (){var statearr_35930 = state_35912;
(statearr_35930[(13)] = inst_35905);

return statearr_35930;
})();
var statearr_35931_35952 = state_35912__$1;
(statearr_35931_35952[(2)] = inst_35906);

(statearr_35931_35952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35913 === (10))){
var inst_35896 = (state_35912[(2)]);
var state_35912__$1 = state_35912;
var statearr_35932_35953 = state_35912__$1;
(statearr_35932_35953[(2)] = inst_35896);

(statearr_35932_35953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35913 === (8))){
var inst_35876 = (state_35912[(7)]);
var inst_35885 = (state_35912[(11)]);
var tmp35929 = inst_35876;
var inst_35876__$1 = tmp35929;
var inst_35877 = inst_35885;
var state_35912__$1 = (function (){var statearr_35933 = state_35912;
(statearr_35933[(7)] = inst_35876__$1);

(statearr_35933[(8)] = inst_35877);

return statearr_35933;
})();
var statearr_35934_35954 = state_35912__$1;
(statearr_35934_35954[(2)] = null);

(statearr_35934_35954[(1)] = (2));


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
});})(c__34124__auto___35940,out))
;
return ((function (switch__34034__auto__,c__34124__auto___35940,out){
return (function() {
var cljs$core$async$state_machine__34035__auto__ = null;
var cljs$core$async$state_machine__34035__auto____0 = (function (){
var statearr_35935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35935[(0)] = cljs$core$async$state_machine__34035__auto__);

(statearr_35935[(1)] = (1));

return statearr_35935;
});
var cljs$core$async$state_machine__34035__auto____1 = (function (state_35912){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_35912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e35936){if((e35936 instanceof Object)){
var ex__34038__auto__ = e35936;
var statearr_35937_35955 = state_35912;
(statearr_35937_35955[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35956 = state_35912;
state_35912 = G__35956;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$state_machine__34035__auto__ = function(state_35912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34035__auto____1.call(this,state_35912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34035__auto____0;
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34035__auto____1;
return cljs$core$async$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___35940,out))
})();
var state__34126__auto__ = (function (){var statearr_35938 = f__34125__auto__.call(null);
(statearr_35938[(6)] = c__34124__auto___35940);

return statearr_35938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___35940,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35958 = arguments.length;
switch (G__35958) {
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
var c__34124__auto___36028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___36028,out){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___36028,out){
return (function (state_36000){
var state_val_36001 = (state_36000[(1)]);
if((state_val_36001 === (7))){
var inst_35996 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36002_36029 = state_36000__$1;
(statearr_36002_36029[(2)] = inst_35996);

(statearr_36002_36029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (1))){
var inst_35959 = [];
var inst_35960 = inst_35959;
var inst_35961 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36000__$1 = (function (){var statearr_36003 = state_36000;
(statearr_36003[(7)] = inst_35961);

(statearr_36003[(8)] = inst_35960);

return statearr_36003;
})();
var statearr_36004_36030 = state_36000__$1;
(statearr_36004_36030[(2)] = null);

(statearr_36004_36030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (4))){
var inst_35964 = (state_36000[(9)]);
var inst_35964__$1 = (state_36000[(2)]);
var inst_35965 = (inst_35964__$1 == null);
var inst_35966 = cljs.core.not.call(null,inst_35965);
var state_36000__$1 = (function (){var statearr_36005 = state_36000;
(statearr_36005[(9)] = inst_35964__$1);

return statearr_36005;
})();
if(inst_35966){
var statearr_36006_36031 = state_36000__$1;
(statearr_36006_36031[(1)] = (5));

} else {
var statearr_36007_36032 = state_36000__$1;
(statearr_36007_36032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (15))){
var inst_35990 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36008_36033 = state_36000__$1;
(statearr_36008_36033[(2)] = inst_35990);

(statearr_36008_36033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (13))){
var state_36000__$1 = state_36000;
var statearr_36009_36034 = state_36000__$1;
(statearr_36009_36034[(2)] = null);

(statearr_36009_36034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (6))){
var inst_35960 = (state_36000[(8)]);
var inst_35985 = inst_35960.length;
var inst_35986 = (inst_35985 > (0));
var state_36000__$1 = state_36000;
if(cljs.core.truth_(inst_35986)){
var statearr_36010_36035 = state_36000__$1;
(statearr_36010_36035[(1)] = (12));

} else {
var statearr_36011_36036 = state_36000__$1;
(statearr_36011_36036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (3))){
var inst_35998 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36000__$1,inst_35998);
} else {
if((state_val_36001 === (12))){
var inst_35960 = (state_36000[(8)]);
var inst_35988 = cljs.core.vec.call(null,inst_35960);
var state_36000__$1 = state_36000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36000__$1,(15),out,inst_35988);
} else {
if((state_val_36001 === (2))){
var state_36000__$1 = state_36000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36000__$1,(4),ch);
} else {
if((state_val_36001 === (11))){
var inst_35964 = (state_36000[(9)]);
var inst_35968 = (state_36000[(10)]);
var inst_35978 = (state_36000[(2)]);
var inst_35979 = [];
var inst_35980 = inst_35979.push(inst_35964);
var inst_35960 = inst_35979;
var inst_35961 = inst_35968;
var state_36000__$1 = (function (){var statearr_36012 = state_36000;
(statearr_36012[(7)] = inst_35961);

(statearr_36012[(11)] = inst_35978);

(statearr_36012[(8)] = inst_35960);

(statearr_36012[(12)] = inst_35980);

return statearr_36012;
})();
var statearr_36013_36037 = state_36000__$1;
(statearr_36013_36037[(2)] = null);

(statearr_36013_36037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (9))){
var inst_35960 = (state_36000[(8)]);
var inst_35976 = cljs.core.vec.call(null,inst_35960);
var state_36000__$1 = state_36000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36000__$1,(11),out,inst_35976);
} else {
if((state_val_36001 === (5))){
var inst_35961 = (state_36000[(7)]);
var inst_35964 = (state_36000[(9)]);
var inst_35968 = (state_36000[(10)]);
var inst_35968__$1 = f.call(null,inst_35964);
var inst_35969 = cljs.core._EQ_.call(null,inst_35968__$1,inst_35961);
var inst_35970 = cljs.core.keyword_identical_QMARK_.call(null,inst_35961,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35971 = (inst_35969) || (inst_35970);
var state_36000__$1 = (function (){var statearr_36014 = state_36000;
(statearr_36014[(10)] = inst_35968__$1);

return statearr_36014;
})();
if(cljs.core.truth_(inst_35971)){
var statearr_36015_36038 = state_36000__$1;
(statearr_36015_36038[(1)] = (8));

} else {
var statearr_36016_36039 = state_36000__$1;
(statearr_36016_36039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (14))){
var inst_35993 = (state_36000[(2)]);
var inst_35994 = cljs.core.async.close_BANG_.call(null,out);
var state_36000__$1 = (function (){var statearr_36018 = state_36000;
(statearr_36018[(13)] = inst_35993);

return statearr_36018;
})();
var statearr_36019_36040 = state_36000__$1;
(statearr_36019_36040[(2)] = inst_35994);

(statearr_36019_36040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (10))){
var inst_35983 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36020_36041 = state_36000__$1;
(statearr_36020_36041[(2)] = inst_35983);

(statearr_36020_36041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (8))){
var inst_35964 = (state_36000[(9)]);
var inst_35960 = (state_36000[(8)]);
var inst_35968 = (state_36000[(10)]);
var inst_35973 = inst_35960.push(inst_35964);
var tmp36017 = inst_35960;
var inst_35960__$1 = tmp36017;
var inst_35961 = inst_35968;
var state_36000__$1 = (function (){var statearr_36021 = state_36000;
(statearr_36021[(7)] = inst_35961);

(statearr_36021[(14)] = inst_35973);

(statearr_36021[(8)] = inst_35960__$1);

return statearr_36021;
})();
var statearr_36022_36042 = state_36000__$1;
(statearr_36022_36042[(2)] = null);

(statearr_36022_36042[(1)] = (2));


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
});})(c__34124__auto___36028,out))
;
return ((function (switch__34034__auto__,c__34124__auto___36028,out){
return (function() {
var cljs$core$async$state_machine__34035__auto__ = null;
var cljs$core$async$state_machine__34035__auto____0 = (function (){
var statearr_36023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36023[(0)] = cljs$core$async$state_machine__34035__auto__);

(statearr_36023[(1)] = (1));

return statearr_36023;
});
var cljs$core$async$state_machine__34035__auto____1 = (function (state_36000){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_36000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e36024){if((e36024 instanceof Object)){
var ex__34038__auto__ = e36024;
var statearr_36025_36043 = state_36000;
(statearr_36025_36043[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36044 = state_36000;
state_36000 = G__36044;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
cljs$core$async$state_machine__34035__auto__ = function(state_36000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34035__auto____1.call(this,state_36000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34035__auto____0;
cljs$core$async$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34035__auto____1;
return cljs$core$async$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___36028,out))
})();
var state__34126__auto__ = (function (){var statearr_36026 = f__34125__auto__.call(null);
(statearr_36026[(6)] = c__34124__auto___36028);

return statearr_36026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___36028,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510085333128
