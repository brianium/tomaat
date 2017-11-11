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
var G__34014 = arguments.length;
switch (G__34014) {
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
if(typeof cljs.core.async.t_cljs$core$async34015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34015 = (function (f,blockable,meta34016){
this.f = f;
this.blockable = blockable;
this.meta34016 = meta34016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34017,meta34016__$1){
var self__ = this;
var _34017__$1 = this;
return (new cljs.core.async.t_cljs$core$async34015(self__.f,self__.blockable,meta34016__$1));
});

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34017){
var self__ = this;
var _34017__$1 = this;
return self__.meta34016;
});

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34016","meta34016",1315538769,null)], null);
});

cljs.core.async.t_cljs$core$async34015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34015";

cljs.core.async.t_cljs$core$async34015.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async34015");
});

cljs.core.async.__GT_t_cljs$core$async34015 = (function cljs$core$async$__GT_t_cljs$core$async34015(f__$1,blockable__$1,meta34016){
return (new cljs.core.async.t_cljs$core$async34015(f__$1,blockable__$1,meta34016));
});

}

return (new cljs.core.async.t_cljs$core$async34015(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34029 = arguments.length;
switch (G__34029) {
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
var G__34038 = arguments.length;
switch (G__34038) {
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
var G__34048 = arguments.length;
switch (G__34048) {
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
var val_34050 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34050);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34050,ret){
return (function (){
return fn1.call(null,val_34050);
});})(val_34050,ret))
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
var G__34053 = arguments.length;
switch (G__34053) {
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
var n__31115__auto___34056 = n;
var x_34057 = (0);
while(true){
if((x_34057 < n__31115__auto___34056)){
(a[x_34057] = (0));

var G__34058 = (x_34057 + (1));
x_34057 = G__34058;
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

var G__34059 = (i + (1));
i = G__34059;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34060 = (function (flag,meta34061){
this.flag = flag;
this.meta34061 = meta34061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34062,meta34061__$1){
var self__ = this;
var _34062__$1 = this;
return (new cljs.core.async.t_cljs$core$async34060(self__.flag,meta34061__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34062){
var self__ = this;
var _34062__$1 = this;
return self__.meta34061;
});})(flag))
;

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34060.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34061","meta34061",277551069,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34060";

cljs.core.async.t_cljs$core$async34060.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async34060");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34060 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34060(flag__$1,meta34061){
return (new cljs.core.async.t_cljs$core$async34060(flag__$1,meta34061));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34060(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34067 = (function (flag,cb,meta34068){
this.flag = flag;
this.cb = cb;
this.meta34068 = meta34068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34069,meta34068__$1){
var self__ = this;
var _34069__$1 = this;
return (new cljs.core.async.t_cljs$core$async34067(self__.flag,self__.cb,meta34068__$1));
});

cljs.core.async.t_cljs$core$async34067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34069){
var self__ = this;
var _34069__$1 = this;
return self__.meta34068;
});

cljs.core.async.t_cljs$core$async34067.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34067.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34068","meta34068",1686521040,null)], null);
});

cljs.core.async.t_cljs$core$async34067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34067";

cljs.core.async.t_cljs$core$async34067.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async34067");
});

cljs.core.async.__GT_t_cljs$core$async34067 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34067(flag__$1,cb__$1,meta34068){
return (new cljs.core.async.t_cljs$core$async34067(flag__$1,cb__$1,meta34068));
});

}

return (new cljs.core.async.t_cljs$core$async34067(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34078_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34078_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34079_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34079_SHARP_,port], null));
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
var G__34083 = (i + (1));
i = G__34083;
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
var len__31349__auto___34091 = arguments.length;
var i__31350__auto___34092 = (0);
while(true){
if((i__31350__auto___34092 < len__31349__auto___34091)){
args__31356__auto__.push((arguments[i__31350__auto___34092]));

var G__34093 = (i__31350__auto___34092 + (1));
i__31350__auto___34092 = G__34093;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34087){
var map__34088 = p__34087;
var map__34088__$1 = ((((!((map__34088 == null)))?((((map__34088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34088):map__34088);
var opts = map__34088__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34085){
var G__34086 = cljs.core.first.call(null,seq34085);
var seq34085__$1 = cljs.core.next.call(null,seq34085);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34086,seq34085__$1);
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
var G__34095 = arguments.length;
switch (G__34095) {
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
var c__33952__auto___34158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___34158){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___34158){
return (function (state_34131){
var state_val_34132 = (state_34131[(1)]);
if((state_val_34132 === (7))){
var inst_34119 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34134_34159 = state_34131__$1;
(statearr_34134_34159[(2)] = inst_34119);

(statearr_34134_34159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (1))){
var state_34131__$1 = state_34131;
var statearr_34135_34160 = state_34131__$1;
(statearr_34135_34160[(2)] = null);

(statearr_34135_34160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (4))){
var inst_34101 = (state_34131[(7)]);
var inst_34101__$1 = (state_34131[(2)]);
var inst_34102 = (inst_34101__$1 == null);
var state_34131__$1 = (function (){var statearr_34136 = state_34131;
(statearr_34136[(7)] = inst_34101__$1);

return statearr_34136;
})();
if(cljs.core.truth_(inst_34102)){
var statearr_34137_34161 = state_34131__$1;
(statearr_34137_34161[(1)] = (5));

} else {
var statearr_34138_34162 = state_34131__$1;
(statearr_34138_34162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (13))){
var state_34131__$1 = state_34131;
var statearr_34142_34163 = state_34131__$1;
(statearr_34142_34163[(2)] = null);

(statearr_34142_34163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (6))){
var inst_34101 = (state_34131[(7)]);
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34131__$1,(11),to,inst_34101);
} else {
if((state_val_34132 === (3))){
var inst_34127 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34131__$1,inst_34127);
} else {
if((state_val_34132 === (12))){
var state_34131__$1 = state_34131;
var statearr_34143_34164 = state_34131__$1;
(statearr_34143_34164[(2)] = null);

(statearr_34143_34164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (2))){
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34131__$1,(4),from);
} else {
if((state_val_34132 === (11))){
var inst_34112 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
if(cljs.core.truth_(inst_34112)){
var statearr_34144_34167 = state_34131__$1;
(statearr_34144_34167[(1)] = (12));

} else {
var statearr_34145_34168 = state_34131__$1;
(statearr_34145_34168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (9))){
var state_34131__$1 = state_34131;
var statearr_34146_34169 = state_34131__$1;
(statearr_34146_34169[(2)] = null);

(statearr_34146_34169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (5))){
var state_34131__$1 = state_34131;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34147_34171 = state_34131__$1;
(statearr_34147_34171[(1)] = (8));

} else {
var statearr_34148_34172 = state_34131__$1;
(statearr_34148_34172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (14))){
var inst_34117 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34149_34173 = state_34131__$1;
(statearr_34149_34173[(2)] = inst_34117);

(statearr_34149_34173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (10))){
var inst_34108 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34150_34174 = state_34131__$1;
(statearr_34150_34174[(2)] = inst_34108);

(statearr_34150_34174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (8))){
var inst_34105 = cljs.core.async.close_BANG_.call(null,to);
var state_34131__$1 = state_34131;
var statearr_34151_34176 = state_34131__$1;
(statearr_34151_34176[(2)] = inst_34105);

(statearr_34151_34176[(1)] = (10));


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
});})(c__33952__auto___34158))
;
return ((function (switch__33607__auto__,c__33952__auto___34158){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_34152 = [null,null,null,null,null,null,null,null];
(statearr_34152[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_34152[(1)] = (1));

return statearr_34152;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_34131){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_34131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e34153){if((e34153 instanceof Object)){
var ex__33611__auto__ = e34153;
var statearr_34154_34177 = state_34131;
(statearr_34154_34177[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34178 = state_34131;
state_34131 = G__34178;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_34131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_34131);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___34158))
})();
var state__33954__auto__ = (function (){var statearr_34155 = f__33953__auto__.call(null);
(statearr_34155[(6)] = c__33952__auto___34158);

return statearr_34155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___34158))
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
return (function (p__34189){
var vec__34190 = p__34189;
var v = cljs.core.nth.call(null,vec__34190,(0),null);
var p = cljs.core.nth.call(null,vec__34190,(1),null);
var job = vec__34190;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33952__auto___34376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___34376,res,vec__34190,v,p,job,jobs,results){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___34376,res,vec__34190,v,p,job,jobs,results){
return (function (state_34198){
var state_val_34199 = (state_34198[(1)]);
if((state_val_34199 === (1))){
var state_34198__$1 = state_34198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34198__$1,(2),res,v);
} else {
if((state_val_34199 === (2))){
var inst_34195 = (state_34198[(2)]);
var inst_34196 = cljs.core.async.close_BANG_.call(null,res);
var state_34198__$1 = (function (){var statearr_34201 = state_34198;
(statearr_34201[(7)] = inst_34195);

return statearr_34201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34198__$1,inst_34196);
} else {
return null;
}
}
});})(c__33952__auto___34376,res,vec__34190,v,p,job,jobs,results))
;
return ((function (switch__33607__auto__,c__33952__auto___34376,res,vec__34190,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_34202 = [null,null,null,null,null,null,null,null];
(statearr_34202[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_34202[(1)] = (1));

return statearr_34202;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_34198){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_34198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e34204){if((e34204 instanceof Object)){
var ex__33611__auto__ = e34204;
var statearr_34206_34382 = state_34198;
(statearr_34206_34382[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34383 = state_34198;
state_34198 = G__34383;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_34198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_34198);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___34376,res,vec__34190,v,p,job,jobs,results))
})();
var state__33954__auto__ = (function (){var statearr_34207 = f__33953__auto__.call(null);
(statearr_34207[(6)] = c__33952__auto___34376);

return statearr_34207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___34376,res,vec__34190,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34208){
var vec__34209 = p__34208;
var v = cljs.core.nth.call(null,vec__34209,(0),null);
var p = cljs.core.nth.call(null,vec__34209,(1),null);
var job = vec__34209;
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
var n__31115__auto___34384 = n;
var __34385 = (0);
while(true){
if((__34385 < n__31115__auto___34384)){
var G__34213_34386 = type;
var G__34213_34387__$1 = (((G__34213_34386 instanceof cljs.core.Keyword))?G__34213_34386.fqn:null);
switch (G__34213_34387__$1) {
case "compute":
var c__33952__auto___34390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34385,c__33952__auto___34390,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (__34385,c__33952__auto___34390,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async){
return (function (state_34226){
var state_val_34227 = (state_34226[(1)]);
if((state_val_34227 === (1))){
var state_34226__$1 = state_34226;
var statearr_34228_34397 = state_34226__$1;
(statearr_34228_34397[(2)] = null);

(statearr_34228_34397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (2))){
var state_34226__$1 = state_34226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34226__$1,(4),jobs);
} else {
if((state_val_34227 === (3))){
var inst_34224 = (state_34226[(2)]);
var state_34226__$1 = state_34226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34226__$1,inst_34224);
} else {
if((state_val_34227 === (4))){
var inst_34216 = (state_34226[(2)]);
var inst_34217 = process.call(null,inst_34216);
var state_34226__$1 = state_34226;
if(cljs.core.truth_(inst_34217)){
var statearr_34229_34398 = state_34226__$1;
(statearr_34229_34398[(1)] = (5));

} else {
var statearr_34230_34399 = state_34226__$1;
(statearr_34230_34399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (5))){
var state_34226__$1 = state_34226;
var statearr_34231_34401 = state_34226__$1;
(statearr_34231_34401[(2)] = null);

(statearr_34231_34401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (6))){
var state_34226__$1 = state_34226;
var statearr_34232_34405 = state_34226__$1;
(statearr_34232_34405[(2)] = null);

(statearr_34232_34405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (7))){
var inst_34222 = (state_34226[(2)]);
var state_34226__$1 = state_34226;
var statearr_34236_34408 = state_34226__$1;
(statearr_34236_34408[(2)] = inst_34222);

(statearr_34236_34408[(1)] = (3));


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
});})(__34385,c__33952__auto___34390,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async))
;
return ((function (__34385,switch__33607__auto__,c__33952__auto___34390,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_34237 = [null,null,null,null,null,null,null];
(statearr_34237[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_34237[(1)] = (1));

return statearr_34237;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_34226){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_34226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e34238){if((e34238 instanceof Object)){
var ex__33611__auto__ = e34238;
var statearr_34239_34410 = state_34226;
(statearr_34239_34410[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34412 = state_34226;
state_34226 = G__34412;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_34226){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_34226);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(__34385,switch__33607__auto__,c__33952__auto___34390,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_34240 = f__33953__auto__.call(null);
(statearr_34240[(6)] = c__33952__auto___34390);

return statearr_34240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(__34385,c__33952__auto___34390,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async))
);


break;
case "async":
var c__33952__auto___34413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34385,c__33952__auto___34413,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (__34385,c__33952__auto___34413,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async){
return (function (state_34253){
var state_val_34254 = (state_34253[(1)]);
if((state_val_34254 === (1))){
var state_34253__$1 = state_34253;
var statearr_34255_34416 = state_34253__$1;
(statearr_34255_34416[(2)] = null);

(statearr_34255_34416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (2))){
var state_34253__$1 = state_34253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34253__$1,(4),jobs);
} else {
if((state_val_34254 === (3))){
var inst_34251 = (state_34253[(2)]);
var state_34253__$1 = state_34253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34253__$1,inst_34251);
} else {
if((state_val_34254 === (4))){
var inst_34243 = (state_34253[(2)]);
var inst_34244 = async.call(null,inst_34243);
var state_34253__$1 = state_34253;
if(cljs.core.truth_(inst_34244)){
var statearr_34256_34418 = state_34253__$1;
(statearr_34256_34418[(1)] = (5));

} else {
var statearr_34257_34419 = state_34253__$1;
(statearr_34257_34419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (5))){
var state_34253__$1 = state_34253;
var statearr_34258_34420 = state_34253__$1;
(statearr_34258_34420[(2)] = null);

(statearr_34258_34420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (6))){
var state_34253__$1 = state_34253;
var statearr_34259_34421 = state_34253__$1;
(statearr_34259_34421[(2)] = null);

(statearr_34259_34421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34254 === (7))){
var inst_34249 = (state_34253[(2)]);
var state_34253__$1 = state_34253;
var statearr_34260_34422 = state_34253__$1;
(statearr_34260_34422[(2)] = inst_34249);

(statearr_34260_34422[(1)] = (3));


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
});})(__34385,c__33952__auto___34413,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async))
;
return ((function (__34385,switch__33607__auto__,c__33952__auto___34413,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_34262 = [null,null,null,null,null,null,null];
(statearr_34262[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_34262[(1)] = (1));

return statearr_34262;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_34253){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_34253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e34263){if((e34263 instanceof Object)){
var ex__33611__auto__ = e34263;
var statearr_34264_34425 = state_34253;
(statearr_34264_34425[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34428 = state_34253;
state_34253 = G__34428;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_34253){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_34253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(__34385,switch__33607__auto__,c__33952__auto___34413,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_34265 = f__33953__auto__.call(null);
(statearr_34265[(6)] = c__33952__auto___34413);

return statearr_34265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(__34385,c__33952__auto___34413,G__34213_34386,G__34213_34387__$1,n__31115__auto___34384,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34213_34387__$1)].join('')));

}

var G__34429 = (__34385 + (1));
__34385 = G__34429;
continue;
} else {
}
break;
}

var c__33952__auto___34430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___34430,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___34430,jobs,results,process,async){
return (function (state_34287){
var state_val_34288 = (state_34287[(1)]);
if((state_val_34288 === (1))){
var state_34287__$1 = state_34287;
var statearr_34289_34432 = state_34287__$1;
(statearr_34289_34432[(2)] = null);

(statearr_34289_34432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (2))){
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34287__$1,(4),from);
} else {
if((state_val_34288 === (3))){
var inst_34285 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34287__$1,inst_34285);
} else {
if((state_val_34288 === (4))){
var inst_34268 = (state_34287[(7)]);
var inst_34268__$1 = (state_34287[(2)]);
var inst_34269 = (inst_34268__$1 == null);
var state_34287__$1 = (function (){var statearr_34290 = state_34287;
(statearr_34290[(7)] = inst_34268__$1);

return statearr_34290;
})();
if(cljs.core.truth_(inst_34269)){
var statearr_34291_34437 = state_34287__$1;
(statearr_34291_34437[(1)] = (5));

} else {
var statearr_34292_34438 = state_34287__$1;
(statearr_34292_34438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (5))){
var inst_34271 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34287__$1 = state_34287;
var statearr_34293_34439 = state_34287__$1;
(statearr_34293_34439[(2)] = inst_34271);

(statearr_34293_34439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (6))){
var inst_34268 = (state_34287[(7)]);
var inst_34273 = (state_34287[(8)]);
var inst_34273__$1 = cljs.core.async.chan.call(null,(1));
var inst_34274 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34275 = [inst_34268,inst_34273__$1];
var inst_34276 = (new cljs.core.PersistentVector(null,2,(5),inst_34274,inst_34275,null));
var state_34287__$1 = (function (){var statearr_34294 = state_34287;
(statearr_34294[(8)] = inst_34273__$1);

return statearr_34294;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34287__$1,(8),jobs,inst_34276);
} else {
if((state_val_34288 === (7))){
var inst_34283 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34295_34445 = state_34287__$1;
(statearr_34295_34445[(2)] = inst_34283);

(statearr_34295_34445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (8))){
var inst_34273 = (state_34287[(8)]);
var inst_34278 = (state_34287[(2)]);
var state_34287__$1 = (function (){var statearr_34296 = state_34287;
(statearr_34296[(9)] = inst_34278);

return statearr_34296;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34287__$1,(9),results,inst_34273);
} else {
if((state_val_34288 === (9))){
var inst_34280 = (state_34287[(2)]);
var state_34287__$1 = (function (){var statearr_34297 = state_34287;
(statearr_34297[(10)] = inst_34280);

return statearr_34297;
})();
var statearr_34298_34451 = state_34287__$1;
(statearr_34298_34451[(2)] = null);

(statearr_34298_34451[(1)] = (2));


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
});})(c__33952__auto___34430,jobs,results,process,async))
;
return ((function (switch__33607__auto__,c__33952__auto___34430,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_34299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_34299[(1)] = (1));

return statearr_34299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_34287){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_34287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e34300){if((e34300 instanceof Object)){
var ex__33611__auto__ = e34300;
var statearr_34301_34454 = state_34287;
(statearr_34301_34454[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34456 = state_34287;
state_34287 = G__34456;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_34287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_34287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___34430,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_34302 = f__33953__auto__.call(null);
(statearr_34302[(6)] = c__33952__auto___34430);

return statearr_34302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___34430,jobs,results,process,async))
);


var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__,jobs,results,process,async){
return (function (state_34340){
var state_val_34341 = (state_34340[(1)]);
if((state_val_34341 === (7))){
var inst_34336 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34342_34463 = state_34340__$1;
(statearr_34342_34463[(2)] = inst_34336);

(statearr_34342_34463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (20))){
var state_34340__$1 = state_34340;
var statearr_34343_34464 = state_34340__$1;
(statearr_34343_34464[(2)] = null);

(statearr_34343_34464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (1))){
var state_34340__$1 = state_34340;
var statearr_34344_34465 = state_34340__$1;
(statearr_34344_34465[(2)] = null);

(statearr_34344_34465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (4))){
var inst_34305 = (state_34340[(7)]);
var inst_34305__$1 = (state_34340[(2)]);
var inst_34306 = (inst_34305__$1 == null);
var state_34340__$1 = (function (){var statearr_34345 = state_34340;
(statearr_34345[(7)] = inst_34305__$1);

return statearr_34345;
})();
if(cljs.core.truth_(inst_34306)){
var statearr_34346_34469 = state_34340__$1;
(statearr_34346_34469[(1)] = (5));

} else {
var statearr_34347_34470 = state_34340__$1;
(statearr_34347_34470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (15))){
var inst_34318 = (state_34340[(8)]);
var state_34340__$1 = state_34340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34340__$1,(18),to,inst_34318);
} else {
if((state_val_34341 === (21))){
var inst_34331 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34348_34472 = state_34340__$1;
(statearr_34348_34472[(2)] = inst_34331);

(statearr_34348_34472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (13))){
var inst_34333 = (state_34340[(2)]);
var state_34340__$1 = (function (){var statearr_34349 = state_34340;
(statearr_34349[(9)] = inst_34333);

return statearr_34349;
})();
var statearr_34350_34473 = state_34340__$1;
(statearr_34350_34473[(2)] = null);

(statearr_34350_34473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (6))){
var inst_34305 = (state_34340[(7)]);
var state_34340__$1 = state_34340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34340__$1,(11),inst_34305);
} else {
if((state_val_34341 === (17))){
var inst_34326 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
if(cljs.core.truth_(inst_34326)){
var statearr_34355_34477 = state_34340__$1;
(statearr_34355_34477[(1)] = (19));

} else {
var statearr_34357_34478 = state_34340__$1;
(statearr_34357_34478[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (3))){
var inst_34338 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34340__$1,inst_34338);
} else {
if((state_val_34341 === (12))){
var inst_34315 = (state_34340[(10)]);
var state_34340__$1 = state_34340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34340__$1,(14),inst_34315);
} else {
if((state_val_34341 === (2))){
var state_34340__$1 = state_34340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34340__$1,(4),results);
} else {
if((state_val_34341 === (19))){
var state_34340__$1 = state_34340;
var statearr_34358_34483 = state_34340__$1;
(statearr_34358_34483[(2)] = null);

(statearr_34358_34483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (11))){
var inst_34315 = (state_34340[(2)]);
var state_34340__$1 = (function (){var statearr_34359 = state_34340;
(statearr_34359[(10)] = inst_34315);

return statearr_34359;
})();
var statearr_34361_34488 = state_34340__$1;
(statearr_34361_34488[(2)] = null);

(statearr_34361_34488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (9))){
var state_34340__$1 = state_34340;
var statearr_34362_34489 = state_34340__$1;
(statearr_34362_34489[(2)] = null);

(statearr_34362_34489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (5))){
var state_34340__$1 = state_34340;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34363_34493 = state_34340__$1;
(statearr_34363_34493[(1)] = (8));

} else {
var statearr_34364_34494 = state_34340__$1;
(statearr_34364_34494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (14))){
var inst_34318 = (state_34340[(8)]);
var inst_34320 = (state_34340[(11)]);
var inst_34318__$1 = (state_34340[(2)]);
var inst_34319 = (inst_34318__$1 == null);
var inst_34320__$1 = cljs.core.not.call(null,inst_34319);
var state_34340__$1 = (function (){var statearr_34365 = state_34340;
(statearr_34365[(8)] = inst_34318__$1);

(statearr_34365[(11)] = inst_34320__$1);

return statearr_34365;
})();
if(inst_34320__$1){
var statearr_34366_34496 = state_34340__$1;
(statearr_34366_34496[(1)] = (15));

} else {
var statearr_34367_34497 = state_34340__$1;
(statearr_34367_34497[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (16))){
var inst_34320 = (state_34340[(11)]);
var state_34340__$1 = state_34340;
var statearr_34368_34498 = state_34340__$1;
(statearr_34368_34498[(2)] = inst_34320);

(statearr_34368_34498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (10))){
var inst_34312 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34369_34499 = state_34340__$1;
(statearr_34369_34499[(2)] = inst_34312);

(statearr_34369_34499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (18))){
var inst_34323 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34370_34503 = state_34340__$1;
(statearr_34370_34503[(2)] = inst_34323);

(statearr_34370_34503[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (8))){
var inst_34309 = cljs.core.async.close_BANG_.call(null,to);
var state_34340__$1 = state_34340;
var statearr_34371_34506 = state_34340__$1;
(statearr_34371_34506[(2)] = inst_34309);

(statearr_34371_34506[(1)] = (10));


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
var statearr_34372 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_34372[(1)] = (1));

return statearr_34372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_34340){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_34340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e34373){if((e34373 instanceof Object)){
var ex__33611__auto__ = e34373;
var statearr_34374_34517 = state_34340;
(statearr_34374_34517[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34520 = state_34340;
state_34340 = G__34520;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_34340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_34340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_34375 = f__33953__auto__.call(null);
(statearr_34375[(6)] = c__33952__auto__);

return statearr_34375;
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
var G__34527 = arguments.length;
switch (G__34527) {
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
var G__34540 = arguments.length;
switch (G__34540) {
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
var G__34551 = arguments.length;
switch (G__34551) {
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
var c__33952__auto___34610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___34610,tc,fc){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___34610,tc,fc){
return (function (state_34578){
var state_val_34579 = (state_34578[(1)]);
if((state_val_34579 === (7))){
var inst_34574 = (state_34578[(2)]);
var state_34578__$1 = state_34578;
var statearr_34581_34612 = state_34578__$1;
(statearr_34581_34612[(2)] = inst_34574);

(statearr_34581_34612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (1))){
var state_34578__$1 = state_34578;
var statearr_34582_34614 = state_34578__$1;
(statearr_34582_34614[(2)] = null);

(statearr_34582_34614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (4))){
var inst_34555 = (state_34578[(7)]);
var inst_34555__$1 = (state_34578[(2)]);
var inst_34556 = (inst_34555__$1 == null);
var state_34578__$1 = (function (){var statearr_34583 = state_34578;
(statearr_34583[(7)] = inst_34555__$1);

return statearr_34583;
})();
if(cljs.core.truth_(inst_34556)){
var statearr_34584_34616 = state_34578__$1;
(statearr_34584_34616[(1)] = (5));

} else {
var statearr_34585_34617 = state_34578__$1;
(statearr_34585_34617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (13))){
var state_34578__$1 = state_34578;
var statearr_34586_34618 = state_34578__$1;
(statearr_34586_34618[(2)] = null);

(statearr_34586_34618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (6))){
var inst_34555 = (state_34578[(7)]);
var inst_34561 = p.call(null,inst_34555);
var state_34578__$1 = state_34578;
if(cljs.core.truth_(inst_34561)){
var statearr_34587_34619 = state_34578__$1;
(statearr_34587_34619[(1)] = (9));

} else {
var statearr_34588_34621 = state_34578__$1;
(statearr_34588_34621[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (3))){
var inst_34576 = (state_34578[(2)]);
var state_34578__$1 = state_34578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34578__$1,inst_34576);
} else {
if((state_val_34579 === (12))){
var state_34578__$1 = state_34578;
var statearr_34591_34623 = state_34578__$1;
(statearr_34591_34623[(2)] = null);

(statearr_34591_34623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (2))){
var state_34578__$1 = state_34578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34578__$1,(4),ch);
} else {
if((state_val_34579 === (11))){
var inst_34555 = (state_34578[(7)]);
var inst_34565 = (state_34578[(2)]);
var state_34578__$1 = state_34578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34578__$1,(8),inst_34565,inst_34555);
} else {
if((state_val_34579 === (9))){
var state_34578__$1 = state_34578;
var statearr_34592_34626 = state_34578__$1;
(statearr_34592_34626[(2)] = tc);

(statearr_34592_34626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (5))){
var inst_34558 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34559 = cljs.core.async.close_BANG_.call(null,fc);
var state_34578__$1 = (function (){var statearr_34593 = state_34578;
(statearr_34593[(8)] = inst_34558);

return statearr_34593;
})();
var statearr_34594_34635 = state_34578__$1;
(statearr_34594_34635[(2)] = inst_34559);

(statearr_34594_34635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (14))){
var inst_34572 = (state_34578[(2)]);
var state_34578__$1 = state_34578;
var statearr_34596_34637 = state_34578__$1;
(statearr_34596_34637[(2)] = inst_34572);

(statearr_34596_34637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (10))){
var state_34578__$1 = state_34578;
var statearr_34598_34639 = state_34578__$1;
(statearr_34598_34639[(2)] = fc);

(statearr_34598_34639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (8))){
var inst_34567 = (state_34578[(2)]);
var state_34578__$1 = state_34578;
if(cljs.core.truth_(inst_34567)){
var statearr_34599_34641 = state_34578__$1;
(statearr_34599_34641[(1)] = (12));

} else {
var statearr_34600_34642 = state_34578__$1;
(statearr_34600_34642[(1)] = (13));

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
});})(c__33952__auto___34610,tc,fc))
;
return ((function (switch__33607__auto__,c__33952__auto___34610,tc,fc){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_34602 = [null,null,null,null,null,null,null,null,null];
(statearr_34602[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_34602[(1)] = (1));

return statearr_34602;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_34578){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_34578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e34603){if((e34603 instanceof Object)){
var ex__33611__auto__ = e34603;
var statearr_34604_34644 = state_34578;
(statearr_34604_34644[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34645 = state_34578;
state_34578 = G__34645;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_34578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_34578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___34610,tc,fc))
})();
var state__33954__auto__ = (function (){var statearr_34606 = f__33953__auto__.call(null);
(statearr_34606[(6)] = c__33952__auto___34610);

return statearr_34606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___34610,tc,fc))
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
return (function (state_34675){
var state_val_34676 = (state_34675[(1)]);
if((state_val_34676 === (7))){
var inst_34670 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34679_34714 = state_34675__$1;
(statearr_34679_34714[(2)] = inst_34670);

(statearr_34679_34714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (1))){
var inst_34653 = init;
var state_34675__$1 = (function (){var statearr_34680 = state_34675;
(statearr_34680[(7)] = inst_34653);

return statearr_34680;
})();
var statearr_34681_34716 = state_34675__$1;
(statearr_34681_34716[(2)] = null);

(statearr_34681_34716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (4))){
var inst_34656 = (state_34675[(8)]);
var inst_34656__$1 = (state_34675[(2)]);
var inst_34657 = (inst_34656__$1 == null);
var state_34675__$1 = (function (){var statearr_34685 = state_34675;
(statearr_34685[(8)] = inst_34656__$1);

return statearr_34685;
})();
if(cljs.core.truth_(inst_34657)){
var statearr_34687_34719 = state_34675__$1;
(statearr_34687_34719[(1)] = (5));

} else {
var statearr_34688_34721 = state_34675__$1;
(statearr_34688_34721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (6))){
var inst_34660 = (state_34675[(9)]);
var inst_34653 = (state_34675[(7)]);
var inst_34656 = (state_34675[(8)]);
var inst_34660__$1 = f.call(null,inst_34653,inst_34656);
var inst_34661 = cljs.core.reduced_QMARK_.call(null,inst_34660__$1);
var state_34675__$1 = (function (){var statearr_34689 = state_34675;
(statearr_34689[(9)] = inst_34660__$1);

return statearr_34689;
})();
if(inst_34661){
var statearr_34690_34724 = state_34675__$1;
(statearr_34690_34724[(1)] = (8));

} else {
var statearr_34691_34725 = state_34675__$1;
(statearr_34691_34725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (3))){
var inst_34673 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34675__$1,inst_34673);
} else {
if((state_val_34676 === (2))){
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34675__$1,(4),ch);
} else {
if((state_val_34676 === (9))){
var inst_34660 = (state_34675[(9)]);
var inst_34653 = inst_34660;
var state_34675__$1 = (function (){var statearr_34693 = state_34675;
(statearr_34693[(7)] = inst_34653);

return statearr_34693;
})();
var statearr_34694_34731 = state_34675__$1;
(statearr_34694_34731[(2)] = null);

(statearr_34694_34731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (5))){
var inst_34653 = (state_34675[(7)]);
var state_34675__$1 = state_34675;
var statearr_34698_34738 = state_34675__$1;
(statearr_34698_34738[(2)] = inst_34653);

(statearr_34698_34738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (10))){
var inst_34668 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34700_34740 = state_34675__$1;
(statearr_34700_34740[(2)] = inst_34668);

(statearr_34700_34740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (8))){
var inst_34660 = (state_34675[(9)]);
var inst_34663 = cljs.core.deref.call(null,inst_34660);
var state_34675__$1 = state_34675;
var statearr_34701_34742 = state_34675__$1;
(statearr_34701_34742[(2)] = inst_34663);

(statearr_34701_34742[(1)] = (10));


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
var statearr_34702 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34702[(0)] = cljs$core$async$reduce_$_state_machine__33608__auto__);

(statearr_34702[(1)] = (1));

return statearr_34702;
});
var cljs$core$async$reduce_$_state_machine__33608__auto____1 = (function (state_34675){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_34675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e34704){if((e34704 instanceof Object)){
var ex__33611__auto__ = e34704;
var statearr_34705_34758 = state_34675;
(statearr_34705_34758[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34759 = state_34675;
state_34675 = G__34759;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33608__auto__ = function(state_34675){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33608__auto____1.call(this,state_34675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33608__auto____0;
cljs$core$async$reduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33608__auto____1;
return cljs$core$async$reduce_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_34706 = f__33953__auto__.call(null);
(statearr_34706[(6)] = c__33952__auto__);

return statearr_34706;
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
return (function (state_34773){
var state_val_34774 = (state_34773[(1)]);
if((state_val_34774 === (1))){
var inst_34768 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34773__$1 = state_34773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34773__$1,(2),inst_34768);
} else {
if((state_val_34774 === (2))){
var inst_34770 = (state_34773[(2)]);
var inst_34771 = f__$1.call(null,inst_34770);
var state_34773__$1 = state_34773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34773__$1,inst_34771);
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
var statearr_34776 = [null,null,null,null,null,null,null];
(statearr_34776[(0)] = cljs$core$async$transduce_$_state_machine__33608__auto__);

(statearr_34776[(1)] = (1));

return statearr_34776;
});
var cljs$core$async$transduce_$_state_machine__33608__auto____1 = (function (state_34773){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_34773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e34777){if((e34777 instanceof Object)){
var ex__33611__auto__ = e34777;
var statearr_34778_34790 = state_34773;
(statearr_34778_34790[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34794 = state_34773;
state_34773 = G__34794;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33608__auto__ = function(state_34773){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33608__auto____1.call(this,state_34773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33608__auto____0;
cljs$core$async$transduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33608__auto____1;
return cljs$core$async$transduce_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,f__$1))
})();
var state__33954__auto__ = (function (){var statearr_34781 = f__33953__auto__.call(null);
(statearr_34781[(6)] = c__33952__auto__);

return statearr_34781;
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
var G__34799 = arguments.length;
switch (G__34799) {
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
return (function (state_34826){
var state_val_34827 = (state_34826[(1)]);
if((state_val_34827 === (7))){
var inst_34807 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34828_34863 = state_34826__$1;
(statearr_34828_34863[(2)] = inst_34807);

(statearr_34828_34863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (1))){
var inst_34801 = cljs.core.seq.call(null,coll);
var inst_34802 = inst_34801;
var state_34826__$1 = (function (){var statearr_34831 = state_34826;
(statearr_34831[(7)] = inst_34802);

return statearr_34831;
})();
var statearr_34832_34869 = state_34826__$1;
(statearr_34832_34869[(2)] = null);

(statearr_34832_34869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (4))){
var inst_34802 = (state_34826[(7)]);
var inst_34805 = cljs.core.first.call(null,inst_34802);
var state_34826__$1 = state_34826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34826__$1,(7),ch,inst_34805);
} else {
if((state_val_34827 === (13))){
var inst_34820 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34834_34873 = state_34826__$1;
(statearr_34834_34873[(2)] = inst_34820);

(statearr_34834_34873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (6))){
var inst_34810 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
if(cljs.core.truth_(inst_34810)){
var statearr_34835_34874 = state_34826__$1;
(statearr_34835_34874[(1)] = (8));

} else {
var statearr_34836_34877 = state_34826__$1;
(statearr_34836_34877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (3))){
var inst_34824 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34826__$1,inst_34824);
} else {
if((state_val_34827 === (12))){
var state_34826__$1 = state_34826;
var statearr_34838_34883 = state_34826__$1;
(statearr_34838_34883[(2)] = null);

(statearr_34838_34883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (2))){
var inst_34802 = (state_34826[(7)]);
var state_34826__$1 = state_34826;
if(cljs.core.truth_(inst_34802)){
var statearr_34839_34885 = state_34826__$1;
(statearr_34839_34885[(1)] = (4));

} else {
var statearr_34840_34887 = state_34826__$1;
(statearr_34840_34887[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (11))){
var inst_34817 = cljs.core.async.close_BANG_.call(null,ch);
var state_34826__$1 = state_34826;
var statearr_34841_34890 = state_34826__$1;
(statearr_34841_34890[(2)] = inst_34817);

(statearr_34841_34890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (9))){
var state_34826__$1 = state_34826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34844_34898 = state_34826__$1;
(statearr_34844_34898[(1)] = (11));

} else {
var statearr_34845_34902 = state_34826__$1;
(statearr_34845_34902[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (5))){
var inst_34802 = (state_34826[(7)]);
var state_34826__$1 = state_34826;
var statearr_34847_34905 = state_34826__$1;
(statearr_34847_34905[(2)] = inst_34802);

(statearr_34847_34905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (10))){
var inst_34822 = (state_34826[(2)]);
var state_34826__$1 = state_34826;
var statearr_34848_34908 = state_34826__$1;
(statearr_34848_34908[(2)] = inst_34822);

(statearr_34848_34908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34827 === (8))){
var inst_34802 = (state_34826[(7)]);
var inst_34812 = cljs.core.next.call(null,inst_34802);
var inst_34802__$1 = inst_34812;
var state_34826__$1 = (function (){var statearr_34849 = state_34826;
(statearr_34849[(7)] = inst_34802__$1);

return statearr_34849;
})();
var statearr_34850_34912 = state_34826__$1;
(statearr_34850_34912[(2)] = null);

(statearr_34850_34912[(1)] = (2));


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
var statearr_34852 = [null,null,null,null,null,null,null,null];
(statearr_34852[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_34852[(1)] = (1));

return statearr_34852;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_34826){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_34826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e34853){if((e34853 instanceof Object)){
var ex__33611__auto__ = e34853;
var statearr_34854_34918 = state_34826;
(statearr_34854_34918[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34919 = state_34826;
state_34826 = G__34919;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_34826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_34826);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_34857 = f__33953__auto__.call(null);
(statearr_34857[(6)] = c__33952__auto__);

return statearr_34857;
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
if(typeof cljs.core.async.t_cljs$core$async34945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34945 = (function (ch,cs,meta34946){
this.ch = ch;
this.cs = cs;
this.meta34946 = meta34946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34947,meta34946__$1){
var self__ = this;
var _34947__$1 = this;
return (new cljs.core.async.t_cljs$core$async34945(self__.ch,self__.cs,meta34946__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34947){
var self__ = this;
var _34947__$1 = this;
return self__.meta34946;
});})(cs))
;

cljs.core.async.t_cljs$core$async34945.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34945.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34945.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34945.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34945.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34945.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34946","meta34946",-1757899811,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34945";

cljs.core.async.t_cljs$core$async34945.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async34945");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34945 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34945(ch__$1,cs__$1,meta34946){
return (new cljs.core.async.t_cljs$core$async34945(ch__$1,cs__$1,meta34946));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34945(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33952__auto___35315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___35315,cs,m,dchan,dctr,done){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___35315,cs,m,dchan,dctr,done){
return (function (state_35116){
var state_val_35117 = (state_35116[(1)]);
if((state_val_35117 === (7))){
var inst_35109 = (state_35116[(2)]);
var state_35116__$1 = state_35116;
var statearr_35123_35317 = state_35116__$1;
(statearr_35123_35317[(2)] = inst_35109);

(statearr_35123_35317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (20))){
var inst_34983 = (state_35116[(7)]);
var inst_35000 = cljs.core.first.call(null,inst_34983);
var inst_35001 = cljs.core.nth.call(null,inst_35000,(0),null);
var inst_35002 = cljs.core.nth.call(null,inst_35000,(1),null);
var state_35116__$1 = (function (){var statearr_35129 = state_35116;
(statearr_35129[(8)] = inst_35001);

return statearr_35129;
})();
if(cljs.core.truth_(inst_35002)){
var statearr_35130_35321 = state_35116__$1;
(statearr_35130_35321[(1)] = (22));

} else {
var statearr_35133_35322 = state_35116__$1;
(statearr_35133_35322[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (27))){
var inst_35039 = (state_35116[(9)]);
var inst_34952 = (state_35116[(10)]);
var inst_35032 = (state_35116[(11)]);
var inst_35034 = (state_35116[(12)]);
var inst_35039__$1 = cljs.core._nth.call(null,inst_35032,inst_35034);
var inst_35040 = cljs.core.async.put_BANG_.call(null,inst_35039__$1,inst_34952,done);
var state_35116__$1 = (function (){var statearr_35141 = state_35116;
(statearr_35141[(9)] = inst_35039__$1);

return statearr_35141;
})();
if(cljs.core.truth_(inst_35040)){
var statearr_35143_35327 = state_35116__$1;
(statearr_35143_35327[(1)] = (30));

} else {
var statearr_35145_35328 = state_35116__$1;
(statearr_35145_35328[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (1))){
var state_35116__$1 = state_35116;
var statearr_35150_35329 = state_35116__$1;
(statearr_35150_35329[(2)] = null);

(statearr_35150_35329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (24))){
var inst_34983 = (state_35116[(7)]);
var inst_35009 = (state_35116[(2)]);
var inst_35010 = cljs.core.next.call(null,inst_34983);
var inst_34961 = inst_35010;
var inst_34962 = null;
var inst_34963 = (0);
var inst_34964 = (0);
var state_35116__$1 = (function (){var statearr_35151 = state_35116;
(statearr_35151[(13)] = inst_34962);

(statearr_35151[(14)] = inst_34964);

(statearr_35151[(15)] = inst_35009);

(statearr_35151[(16)] = inst_34961);

(statearr_35151[(17)] = inst_34963);

return statearr_35151;
})();
var statearr_35158_35333 = state_35116__$1;
(statearr_35158_35333[(2)] = null);

(statearr_35158_35333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (39))){
var state_35116__$1 = state_35116;
var statearr_35173_35334 = state_35116__$1;
(statearr_35173_35334[(2)] = null);

(statearr_35173_35334[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (4))){
var inst_34952 = (state_35116[(10)]);
var inst_34952__$1 = (state_35116[(2)]);
var inst_34953 = (inst_34952__$1 == null);
var state_35116__$1 = (function (){var statearr_35179 = state_35116;
(statearr_35179[(10)] = inst_34952__$1);

return statearr_35179;
})();
if(cljs.core.truth_(inst_34953)){
var statearr_35180_35336 = state_35116__$1;
(statearr_35180_35336[(1)] = (5));

} else {
var statearr_35181_35340 = state_35116__$1;
(statearr_35181_35340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (15))){
var inst_34962 = (state_35116[(13)]);
var inst_34964 = (state_35116[(14)]);
var inst_34961 = (state_35116[(16)]);
var inst_34963 = (state_35116[(17)]);
var inst_34979 = (state_35116[(2)]);
var inst_34980 = (inst_34964 + (1));
var tmp35163 = inst_34962;
var tmp35164 = inst_34961;
var tmp35165 = inst_34963;
var inst_34961__$1 = tmp35164;
var inst_34962__$1 = tmp35163;
var inst_34963__$1 = tmp35165;
var inst_34964__$1 = inst_34980;
var state_35116__$1 = (function (){var statearr_35189 = state_35116;
(statearr_35189[(13)] = inst_34962__$1);

(statearr_35189[(14)] = inst_34964__$1);

(statearr_35189[(18)] = inst_34979);

(statearr_35189[(16)] = inst_34961__$1);

(statearr_35189[(17)] = inst_34963__$1);

return statearr_35189;
})();
var statearr_35191_35343 = state_35116__$1;
(statearr_35191_35343[(2)] = null);

(statearr_35191_35343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (21))){
var inst_35013 = (state_35116[(2)]);
var state_35116__$1 = state_35116;
var statearr_35195_35348 = state_35116__$1;
(statearr_35195_35348[(2)] = inst_35013);

(statearr_35195_35348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (31))){
var inst_35039 = (state_35116[(9)]);
var inst_35043 = done.call(null,null);
var inst_35044 = cljs.core.async.untap_STAR_.call(null,m,inst_35039);
var state_35116__$1 = (function (){var statearr_35196 = state_35116;
(statearr_35196[(19)] = inst_35043);

return statearr_35196;
})();
var statearr_35197_35350 = state_35116__$1;
(statearr_35197_35350[(2)] = inst_35044);

(statearr_35197_35350[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (32))){
var inst_35033 = (state_35116[(20)]);
var inst_35032 = (state_35116[(11)]);
var inst_35034 = (state_35116[(12)]);
var inst_35031 = (state_35116[(21)]);
var inst_35046 = (state_35116[(2)]);
var inst_35049 = (inst_35034 + (1));
var tmp35192 = inst_35033;
var tmp35193 = inst_35032;
var tmp35194 = inst_35031;
var inst_35031__$1 = tmp35194;
var inst_35032__$1 = tmp35193;
var inst_35033__$1 = tmp35192;
var inst_35034__$1 = inst_35049;
var state_35116__$1 = (function (){var statearr_35198 = state_35116;
(statearr_35198[(20)] = inst_35033__$1);

(statearr_35198[(11)] = inst_35032__$1);

(statearr_35198[(12)] = inst_35034__$1);

(statearr_35198[(22)] = inst_35046);

(statearr_35198[(21)] = inst_35031__$1);

return statearr_35198;
})();
var statearr_35203_35355 = state_35116__$1;
(statearr_35203_35355[(2)] = null);

(statearr_35203_35355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (40))){
var inst_35081 = (state_35116[(23)]);
var inst_35085 = done.call(null,null);
var inst_35086 = cljs.core.async.untap_STAR_.call(null,m,inst_35081);
var state_35116__$1 = (function (){var statearr_35205 = state_35116;
(statearr_35205[(24)] = inst_35085);

return statearr_35205;
})();
var statearr_35206_35357 = state_35116__$1;
(statearr_35206_35357[(2)] = inst_35086);

(statearr_35206_35357[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (33))){
var inst_35052 = (state_35116[(25)]);
var inst_35055 = cljs.core.chunked_seq_QMARK_.call(null,inst_35052);
var state_35116__$1 = state_35116;
if(inst_35055){
var statearr_35209_35358 = state_35116__$1;
(statearr_35209_35358[(1)] = (36));

} else {
var statearr_35210_35361 = state_35116__$1;
(statearr_35210_35361[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (13))){
var inst_34973 = (state_35116[(26)]);
var inst_34976 = cljs.core.async.close_BANG_.call(null,inst_34973);
var state_35116__$1 = state_35116;
var statearr_35211_35363 = state_35116__$1;
(statearr_35211_35363[(2)] = inst_34976);

(statearr_35211_35363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (22))){
var inst_35001 = (state_35116[(8)]);
var inst_35006 = cljs.core.async.close_BANG_.call(null,inst_35001);
var state_35116__$1 = state_35116;
var statearr_35213_35364 = state_35116__$1;
(statearr_35213_35364[(2)] = inst_35006);

(statearr_35213_35364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (36))){
var inst_35052 = (state_35116[(25)]);
var inst_35073 = cljs.core.chunk_first.call(null,inst_35052);
var inst_35077 = cljs.core.chunk_rest.call(null,inst_35052);
var inst_35078 = cljs.core.count.call(null,inst_35073);
var inst_35031 = inst_35077;
var inst_35032 = inst_35073;
var inst_35033 = inst_35078;
var inst_35034 = (0);
var state_35116__$1 = (function (){var statearr_35217 = state_35116;
(statearr_35217[(20)] = inst_35033);

(statearr_35217[(11)] = inst_35032);

(statearr_35217[(12)] = inst_35034);

(statearr_35217[(21)] = inst_35031);

return statearr_35217;
})();
var statearr_35219_35370 = state_35116__$1;
(statearr_35219_35370[(2)] = null);

(statearr_35219_35370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (41))){
var inst_35052 = (state_35116[(25)]);
var inst_35088 = (state_35116[(2)]);
var inst_35089 = cljs.core.next.call(null,inst_35052);
var inst_35031 = inst_35089;
var inst_35032 = null;
var inst_35033 = (0);
var inst_35034 = (0);
var state_35116__$1 = (function (){var statearr_35222 = state_35116;
(statearr_35222[(20)] = inst_35033);

(statearr_35222[(11)] = inst_35032);

(statearr_35222[(12)] = inst_35034);

(statearr_35222[(21)] = inst_35031);

(statearr_35222[(27)] = inst_35088);

return statearr_35222;
})();
var statearr_35223_35377 = state_35116__$1;
(statearr_35223_35377[(2)] = null);

(statearr_35223_35377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (43))){
var state_35116__$1 = state_35116;
var statearr_35225_35381 = state_35116__$1;
(statearr_35225_35381[(2)] = null);

(statearr_35225_35381[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (29))){
var inst_35097 = (state_35116[(2)]);
var state_35116__$1 = state_35116;
var statearr_35228_35385 = state_35116__$1;
(statearr_35228_35385[(2)] = inst_35097);

(statearr_35228_35385[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (44))){
var inst_35106 = (state_35116[(2)]);
var state_35116__$1 = (function (){var statearr_35230 = state_35116;
(statearr_35230[(28)] = inst_35106);

return statearr_35230;
})();
var statearr_35231_35386 = state_35116__$1;
(statearr_35231_35386[(2)] = null);

(statearr_35231_35386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (6))){
var inst_35023 = (state_35116[(29)]);
var inst_35022 = cljs.core.deref.call(null,cs);
var inst_35023__$1 = cljs.core.keys.call(null,inst_35022);
var inst_35024 = cljs.core.count.call(null,inst_35023__$1);
var inst_35025 = cljs.core.reset_BANG_.call(null,dctr,inst_35024);
var inst_35030 = cljs.core.seq.call(null,inst_35023__$1);
var inst_35031 = inst_35030;
var inst_35032 = null;
var inst_35033 = (0);
var inst_35034 = (0);
var state_35116__$1 = (function (){var statearr_35233 = state_35116;
(statearr_35233[(20)] = inst_35033);

(statearr_35233[(11)] = inst_35032);

(statearr_35233[(29)] = inst_35023__$1);

(statearr_35233[(12)] = inst_35034);

(statearr_35233[(21)] = inst_35031);

(statearr_35233[(30)] = inst_35025);

return statearr_35233;
})();
var statearr_35234_35397 = state_35116__$1;
(statearr_35234_35397[(2)] = null);

(statearr_35234_35397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (28))){
var inst_35052 = (state_35116[(25)]);
var inst_35031 = (state_35116[(21)]);
var inst_35052__$1 = cljs.core.seq.call(null,inst_35031);
var state_35116__$1 = (function (){var statearr_35236 = state_35116;
(statearr_35236[(25)] = inst_35052__$1);

return statearr_35236;
})();
if(inst_35052__$1){
var statearr_35237_35404 = state_35116__$1;
(statearr_35237_35404[(1)] = (33));

} else {
var statearr_35238_35406 = state_35116__$1;
(statearr_35238_35406[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (25))){
var inst_35033 = (state_35116[(20)]);
var inst_35034 = (state_35116[(12)]);
var inst_35036 = (inst_35034 < inst_35033);
var inst_35037 = inst_35036;
var state_35116__$1 = state_35116;
if(cljs.core.truth_(inst_35037)){
var statearr_35239_35409 = state_35116__$1;
(statearr_35239_35409[(1)] = (27));

} else {
var statearr_35241_35411 = state_35116__$1;
(statearr_35241_35411[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (34))){
var state_35116__$1 = state_35116;
var statearr_35242_35412 = state_35116__$1;
(statearr_35242_35412[(2)] = null);

(statearr_35242_35412[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (17))){
var state_35116__$1 = state_35116;
var statearr_35243_35414 = state_35116__$1;
(statearr_35243_35414[(2)] = null);

(statearr_35243_35414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (3))){
var inst_35111 = (state_35116[(2)]);
var state_35116__$1 = state_35116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35116__$1,inst_35111);
} else {
if((state_val_35117 === (12))){
var inst_35018 = (state_35116[(2)]);
var state_35116__$1 = state_35116;
var statearr_35245_35415 = state_35116__$1;
(statearr_35245_35415[(2)] = inst_35018);

(statearr_35245_35415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (2))){
var state_35116__$1 = state_35116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35116__$1,(4),ch);
} else {
if((state_val_35117 === (23))){
var state_35116__$1 = state_35116;
var statearr_35246_35419 = state_35116__$1;
(statearr_35246_35419[(2)] = null);

(statearr_35246_35419[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (35))){
var inst_35095 = (state_35116[(2)]);
var state_35116__$1 = state_35116;
var statearr_35249_35424 = state_35116__$1;
(statearr_35249_35424[(2)] = inst_35095);

(statearr_35249_35424[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (19))){
var inst_34983 = (state_35116[(7)]);
var inst_34987 = cljs.core.chunk_first.call(null,inst_34983);
var inst_34989 = cljs.core.chunk_rest.call(null,inst_34983);
var inst_34990 = cljs.core.count.call(null,inst_34987);
var inst_34961 = inst_34989;
var inst_34962 = inst_34987;
var inst_34963 = inst_34990;
var inst_34964 = (0);
var state_35116__$1 = (function (){var statearr_35250 = state_35116;
(statearr_35250[(13)] = inst_34962);

(statearr_35250[(14)] = inst_34964);

(statearr_35250[(16)] = inst_34961);

(statearr_35250[(17)] = inst_34963);

return statearr_35250;
})();
var statearr_35252_35431 = state_35116__$1;
(statearr_35252_35431[(2)] = null);

(statearr_35252_35431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (11))){
var inst_34983 = (state_35116[(7)]);
var inst_34961 = (state_35116[(16)]);
var inst_34983__$1 = cljs.core.seq.call(null,inst_34961);
var state_35116__$1 = (function (){var statearr_35253 = state_35116;
(statearr_35253[(7)] = inst_34983__$1);

return statearr_35253;
})();
if(inst_34983__$1){
var statearr_35254_35436 = state_35116__$1;
(statearr_35254_35436[(1)] = (16));

} else {
var statearr_35255_35437 = state_35116__$1;
(statearr_35255_35437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (9))){
var inst_35020 = (state_35116[(2)]);
var state_35116__$1 = state_35116;
var statearr_35257_35438 = state_35116__$1;
(statearr_35257_35438[(2)] = inst_35020);

(statearr_35257_35438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (5))){
var inst_34959 = cljs.core.deref.call(null,cs);
var inst_34960 = cljs.core.seq.call(null,inst_34959);
var inst_34961 = inst_34960;
var inst_34962 = null;
var inst_34963 = (0);
var inst_34964 = (0);
var state_35116__$1 = (function (){var statearr_35258 = state_35116;
(statearr_35258[(13)] = inst_34962);

(statearr_35258[(14)] = inst_34964);

(statearr_35258[(16)] = inst_34961);

(statearr_35258[(17)] = inst_34963);

return statearr_35258;
})();
var statearr_35259_35442 = state_35116__$1;
(statearr_35259_35442[(2)] = null);

(statearr_35259_35442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (14))){
var state_35116__$1 = state_35116;
var statearr_35261_35444 = state_35116__$1;
(statearr_35261_35444[(2)] = null);

(statearr_35261_35444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (45))){
var inst_35103 = (state_35116[(2)]);
var state_35116__$1 = state_35116;
var statearr_35262_35445 = state_35116__$1;
(statearr_35262_35445[(2)] = inst_35103);

(statearr_35262_35445[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (26))){
var inst_35023 = (state_35116[(29)]);
var inst_35099 = (state_35116[(2)]);
var inst_35100 = cljs.core.seq.call(null,inst_35023);
var state_35116__$1 = (function (){var statearr_35263 = state_35116;
(statearr_35263[(31)] = inst_35099);

return statearr_35263;
})();
if(inst_35100){
var statearr_35264_35448 = state_35116__$1;
(statearr_35264_35448[(1)] = (42));

} else {
var statearr_35265_35450 = state_35116__$1;
(statearr_35265_35450[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (16))){
var inst_34983 = (state_35116[(7)]);
var inst_34985 = cljs.core.chunked_seq_QMARK_.call(null,inst_34983);
var state_35116__$1 = state_35116;
if(inst_34985){
var statearr_35267_35452 = state_35116__$1;
(statearr_35267_35452[(1)] = (19));

} else {
var statearr_35268_35455 = state_35116__$1;
(statearr_35268_35455[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (38))){
var inst_35092 = (state_35116[(2)]);
var state_35116__$1 = state_35116;
var statearr_35270_35458 = state_35116__$1;
(statearr_35270_35458[(2)] = inst_35092);

(statearr_35270_35458[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (30))){
var state_35116__$1 = state_35116;
var statearr_35272_35459 = state_35116__$1;
(statearr_35272_35459[(2)] = null);

(statearr_35272_35459[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (10))){
var inst_34962 = (state_35116[(13)]);
var inst_34964 = (state_35116[(14)]);
var inst_34972 = cljs.core._nth.call(null,inst_34962,inst_34964);
var inst_34973 = cljs.core.nth.call(null,inst_34972,(0),null);
var inst_34974 = cljs.core.nth.call(null,inst_34972,(1),null);
var state_35116__$1 = (function (){var statearr_35277 = state_35116;
(statearr_35277[(26)] = inst_34973);

return statearr_35277;
})();
if(cljs.core.truth_(inst_34974)){
var statearr_35278_35470 = state_35116__$1;
(statearr_35278_35470[(1)] = (13));

} else {
var statearr_35279_35471 = state_35116__$1;
(statearr_35279_35471[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (18))){
var inst_35016 = (state_35116[(2)]);
var state_35116__$1 = state_35116;
var statearr_35280_35472 = state_35116__$1;
(statearr_35280_35472[(2)] = inst_35016);

(statearr_35280_35472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (42))){
var state_35116__$1 = state_35116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35116__$1,(45),dchan);
} else {
if((state_val_35117 === (37))){
var inst_35052 = (state_35116[(25)]);
var inst_34952 = (state_35116[(10)]);
var inst_35081 = (state_35116[(23)]);
var inst_35081__$1 = cljs.core.first.call(null,inst_35052);
var inst_35082 = cljs.core.async.put_BANG_.call(null,inst_35081__$1,inst_34952,done);
var state_35116__$1 = (function (){var statearr_35282 = state_35116;
(statearr_35282[(23)] = inst_35081__$1);

return statearr_35282;
})();
if(cljs.core.truth_(inst_35082)){
var statearr_35283_35474 = state_35116__$1;
(statearr_35283_35474[(1)] = (39));

} else {
var statearr_35285_35476 = state_35116__$1;
(statearr_35285_35476[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35117 === (8))){
var inst_34964 = (state_35116[(14)]);
var inst_34963 = (state_35116[(17)]);
var inst_34966 = (inst_34964 < inst_34963);
var inst_34967 = inst_34966;
var state_35116__$1 = state_35116;
if(cljs.core.truth_(inst_34967)){
var statearr_35290_35481 = state_35116__$1;
(statearr_35290_35481[(1)] = (10));

} else {
var statearr_35291_35482 = state_35116__$1;
(statearr_35291_35482[(1)] = (11));

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
});})(c__33952__auto___35315,cs,m,dchan,dctr,done))
;
return ((function (switch__33607__auto__,c__33952__auto___35315,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33608__auto__ = null;
var cljs$core$async$mult_$_state_machine__33608__auto____0 = (function (){
var statearr_35293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35293[(0)] = cljs$core$async$mult_$_state_machine__33608__auto__);

(statearr_35293[(1)] = (1));

return statearr_35293;
});
var cljs$core$async$mult_$_state_machine__33608__auto____1 = (function (state_35116){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_35116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e35295){if((e35295 instanceof Object)){
var ex__33611__auto__ = e35295;
var statearr_35296_35488 = state_35116;
(statearr_35296_35488[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35490 = state_35116;
state_35116 = G__35490;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33608__auto__ = function(state_35116){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33608__auto____1.call(this,state_35116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33608__auto____0;
cljs$core$async$mult_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33608__auto____1;
return cljs$core$async$mult_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___35315,cs,m,dchan,dctr,done))
})();
var state__33954__auto__ = (function (){var statearr_35299 = f__33953__auto__.call(null);
(statearr_35299[(6)] = c__33952__auto___35315);

return statearr_35299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___35315,cs,m,dchan,dctr,done))
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
var G__35492 = arguments.length;
switch (G__35492) {
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
var len__31349__auto___35531 = arguments.length;
var i__31350__auto___35532 = (0);
while(true){
if((i__31350__auto___35532 < len__31349__auto___35531)){
args__31356__auto__.push((arguments[i__31350__auto___35532]));

var G__35533 = (i__31350__auto___35532 + (1));
i__31350__auto___35532 = G__35533;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((3) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35525){
var map__35526 = p__35525;
var map__35526__$1 = ((((!((map__35526 == null)))?((((map__35526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35526):map__35526);
var opts = map__35526__$1;
var statearr_35528_35538 = state;
(statearr_35528_35538[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__35526,map__35526__$1,opts){
return (function (val){
var statearr_35529_35539 = state;
(statearr_35529_35539[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35526,map__35526__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_35530_35541 = state;
(statearr_35530_35541[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35521){
var G__35522 = cljs.core.first.call(null,seq35521);
var seq35521__$1 = cljs.core.next.call(null,seq35521);
var G__35523 = cljs.core.first.call(null,seq35521__$1);
var seq35521__$2 = cljs.core.next.call(null,seq35521__$1);
var G__35524 = cljs.core.first.call(null,seq35521__$2);
var seq35521__$3 = cljs.core.next.call(null,seq35521__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35522,G__35523,G__35524,seq35521__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35547 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35548){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35548 = meta35548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35549,meta35548__$1){
var self__ = this;
var _35549__$1 = this;
return (new cljs.core.async.t_cljs$core$async35547(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35548__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35549){
var self__ = this;
var _35549__$1 = this;
return self__.meta35548;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35547.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35548","meta35548",-708545917,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35547";

cljs.core.async.t_cljs$core$async35547.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35547");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35547 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35547(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35548){
return (new cljs.core.async.t_cljs$core$async35547(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35548));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35547(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33952__auto___35768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___35768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___35768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35662){
var state_val_35663 = (state_35662[(1)]);
if((state_val_35663 === (7))){
var inst_35572 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
var statearr_35667_35769 = state_35662__$1;
(statearr_35667_35769[(2)] = inst_35572);

(statearr_35667_35769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (20))){
var inst_35584 = (state_35662[(7)]);
var state_35662__$1 = state_35662;
var statearr_35668_35773 = state_35662__$1;
(statearr_35668_35773[(2)] = inst_35584);

(statearr_35668_35773[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (27))){
var state_35662__$1 = state_35662;
var statearr_35675_35775 = state_35662__$1;
(statearr_35675_35775[(2)] = null);

(statearr_35675_35775[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (1))){
var inst_35559 = (state_35662[(8)]);
var inst_35559__$1 = calc_state.call(null);
var inst_35561 = (inst_35559__$1 == null);
var inst_35562 = cljs.core.not.call(null,inst_35561);
var state_35662__$1 = (function (){var statearr_35676 = state_35662;
(statearr_35676[(8)] = inst_35559__$1);

return statearr_35676;
})();
if(inst_35562){
var statearr_35678_35776 = state_35662__$1;
(statearr_35678_35776[(1)] = (2));

} else {
var statearr_35680_35777 = state_35662__$1;
(statearr_35680_35777[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (24))){
var inst_35635 = (state_35662[(9)]);
var inst_35621 = (state_35662[(10)]);
var inst_35609 = (state_35662[(11)]);
var inst_35635__$1 = inst_35609.call(null,inst_35621);
var state_35662__$1 = (function (){var statearr_35681 = state_35662;
(statearr_35681[(9)] = inst_35635__$1);

return statearr_35681;
})();
if(cljs.core.truth_(inst_35635__$1)){
var statearr_35682_35778 = state_35662__$1;
(statearr_35682_35778[(1)] = (29));

} else {
var statearr_35683_35779 = state_35662__$1;
(statearr_35683_35779[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (4))){
var inst_35575 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
if(cljs.core.truth_(inst_35575)){
var statearr_35684_35781 = state_35662__$1;
(statearr_35684_35781[(1)] = (8));

} else {
var statearr_35685_35782 = state_35662__$1;
(statearr_35685_35782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (15))){
var inst_35603 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
if(cljs.core.truth_(inst_35603)){
var statearr_35686_35791 = state_35662__$1;
(statearr_35686_35791[(1)] = (19));

} else {
var statearr_35687_35792 = state_35662__$1;
(statearr_35687_35792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (21))){
var inst_35608 = (state_35662[(12)]);
var inst_35608__$1 = (state_35662[(2)]);
var inst_35609 = cljs.core.get.call(null,inst_35608__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35610 = cljs.core.get.call(null,inst_35608__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35611 = cljs.core.get.call(null,inst_35608__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35662__$1 = (function (){var statearr_35690 = state_35662;
(statearr_35690[(12)] = inst_35608__$1);

(statearr_35690[(13)] = inst_35610);

(statearr_35690[(11)] = inst_35609);

return statearr_35690;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35662__$1,(22),inst_35611);
} else {
if((state_val_35663 === (31))){
var inst_35643 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
if(cljs.core.truth_(inst_35643)){
var statearr_35692_35795 = state_35662__$1;
(statearr_35692_35795[(1)] = (32));

} else {
var statearr_35693_35799 = state_35662__$1;
(statearr_35693_35799[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (32))){
var inst_35617 = (state_35662[(14)]);
var state_35662__$1 = state_35662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35662__$1,(35),out,inst_35617);
} else {
if((state_val_35663 === (33))){
var inst_35608 = (state_35662[(12)]);
var inst_35584 = inst_35608;
var state_35662__$1 = (function (){var statearr_35694 = state_35662;
(statearr_35694[(7)] = inst_35584);

return statearr_35694;
})();
var statearr_35695_35804 = state_35662__$1;
(statearr_35695_35804[(2)] = null);

(statearr_35695_35804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (13))){
var inst_35584 = (state_35662[(7)]);
var inst_35592 = inst_35584.cljs$lang$protocol_mask$partition0$;
var inst_35593 = (inst_35592 & (64));
var inst_35594 = inst_35584.cljs$core$ISeq$;
var inst_35595 = (cljs.core.PROTOCOL_SENTINEL === inst_35594);
var inst_35596 = (inst_35593) || (inst_35595);
var state_35662__$1 = state_35662;
if(cljs.core.truth_(inst_35596)){
var statearr_35698_35806 = state_35662__$1;
(statearr_35698_35806[(1)] = (16));

} else {
var statearr_35699_35807 = state_35662__$1;
(statearr_35699_35807[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (22))){
var inst_35617 = (state_35662[(14)]);
var inst_35621 = (state_35662[(10)]);
var inst_35616 = (state_35662[(2)]);
var inst_35617__$1 = cljs.core.nth.call(null,inst_35616,(0),null);
var inst_35621__$1 = cljs.core.nth.call(null,inst_35616,(1),null);
var inst_35622 = (inst_35617__$1 == null);
var inst_35623 = cljs.core._EQ_.call(null,inst_35621__$1,change);
var inst_35624 = (inst_35622) || (inst_35623);
var state_35662__$1 = (function (){var statearr_35700 = state_35662;
(statearr_35700[(14)] = inst_35617__$1);

(statearr_35700[(10)] = inst_35621__$1);

return statearr_35700;
})();
if(cljs.core.truth_(inst_35624)){
var statearr_35701_35808 = state_35662__$1;
(statearr_35701_35808[(1)] = (23));

} else {
var statearr_35702_35809 = state_35662__$1;
(statearr_35702_35809[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (36))){
var inst_35608 = (state_35662[(12)]);
var inst_35584 = inst_35608;
var state_35662__$1 = (function (){var statearr_35703 = state_35662;
(statearr_35703[(7)] = inst_35584);

return statearr_35703;
})();
var statearr_35704_35813 = state_35662__$1;
(statearr_35704_35813[(2)] = null);

(statearr_35704_35813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (29))){
var inst_35635 = (state_35662[(9)]);
var state_35662__$1 = state_35662;
var statearr_35705_35814 = state_35662__$1;
(statearr_35705_35814[(2)] = inst_35635);

(statearr_35705_35814[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (6))){
var state_35662__$1 = state_35662;
var statearr_35706_35815 = state_35662__$1;
(statearr_35706_35815[(2)] = false);

(statearr_35706_35815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (28))){
var inst_35631 = (state_35662[(2)]);
var inst_35632 = calc_state.call(null);
var inst_35584 = inst_35632;
var state_35662__$1 = (function (){var statearr_35707 = state_35662;
(statearr_35707[(15)] = inst_35631);

(statearr_35707[(7)] = inst_35584);

return statearr_35707;
})();
var statearr_35708_35816 = state_35662__$1;
(statearr_35708_35816[(2)] = null);

(statearr_35708_35816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (25))){
var inst_35658 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
var statearr_35709_35817 = state_35662__$1;
(statearr_35709_35817[(2)] = inst_35658);

(statearr_35709_35817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (34))){
var inst_35656 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
var statearr_35710_35826 = state_35662__$1;
(statearr_35710_35826[(2)] = inst_35656);

(statearr_35710_35826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (17))){
var state_35662__$1 = state_35662;
var statearr_35711_35827 = state_35662__$1;
(statearr_35711_35827[(2)] = false);

(statearr_35711_35827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (3))){
var state_35662__$1 = state_35662;
var statearr_35712_35828 = state_35662__$1;
(statearr_35712_35828[(2)] = false);

(statearr_35712_35828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (12))){
var inst_35660 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35662__$1,inst_35660);
} else {
if((state_val_35663 === (2))){
var inst_35559 = (state_35662[(8)]);
var inst_35564 = inst_35559.cljs$lang$protocol_mask$partition0$;
var inst_35565 = (inst_35564 & (64));
var inst_35566 = inst_35559.cljs$core$ISeq$;
var inst_35567 = (cljs.core.PROTOCOL_SENTINEL === inst_35566);
var inst_35568 = (inst_35565) || (inst_35567);
var state_35662__$1 = state_35662;
if(cljs.core.truth_(inst_35568)){
var statearr_35713_35831 = state_35662__$1;
(statearr_35713_35831[(1)] = (5));

} else {
var statearr_35714_35835 = state_35662__$1;
(statearr_35714_35835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (23))){
var inst_35617 = (state_35662[(14)]);
var inst_35626 = (inst_35617 == null);
var state_35662__$1 = state_35662;
if(cljs.core.truth_(inst_35626)){
var statearr_35715_35837 = state_35662__$1;
(statearr_35715_35837[(1)] = (26));

} else {
var statearr_35716_35838 = state_35662__$1;
(statearr_35716_35838[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (35))){
var inst_35647 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
if(cljs.core.truth_(inst_35647)){
var statearr_35717_35839 = state_35662__$1;
(statearr_35717_35839[(1)] = (36));

} else {
var statearr_35718_35840 = state_35662__$1;
(statearr_35718_35840[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (19))){
var inst_35584 = (state_35662[(7)]);
var inst_35605 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35584);
var state_35662__$1 = state_35662;
var statearr_35719_35841 = state_35662__$1;
(statearr_35719_35841[(2)] = inst_35605);

(statearr_35719_35841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (11))){
var inst_35584 = (state_35662[(7)]);
var inst_35589 = (inst_35584 == null);
var inst_35590 = cljs.core.not.call(null,inst_35589);
var state_35662__$1 = state_35662;
if(inst_35590){
var statearr_35720_35848 = state_35662__$1;
(statearr_35720_35848[(1)] = (13));

} else {
var statearr_35721_35849 = state_35662__$1;
(statearr_35721_35849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (9))){
var inst_35559 = (state_35662[(8)]);
var state_35662__$1 = state_35662;
var statearr_35722_35850 = state_35662__$1;
(statearr_35722_35850[(2)] = inst_35559);

(statearr_35722_35850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (5))){
var state_35662__$1 = state_35662;
var statearr_35723_35851 = state_35662__$1;
(statearr_35723_35851[(2)] = true);

(statearr_35723_35851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (14))){
var state_35662__$1 = state_35662;
var statearr_35724_35852 = state_35662__$1;
(statearr_35724_35852[(2)] = false);

(statearr_35724_35852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (26))){
var inst_35621 = (state_35662[(10)]);
var inst_35628 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35621);
var state_35662__$1 = state_35662;
var statearr_35725_35853 = state_35662__$1;
(statearr_35725_35853[(2)] = inst_35628);

(statearr_35725_35853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (16))){
var state_35662__$1 = state_35662;
var statearr_35726_35854 = state_35662__$1;
(statearr_35726_35854[(2)] = true);

(statearr_35726_35854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (38))){
var inst_35652 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
var statearr_35727_35855 = state_35662__$1;
(statearr_35727_35855[(2)] = inst_35652);

(statearr_35727_35855[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (30))){
var inst_35610 = (state_35662[(13)]);
var inst_35621 = (state_35662[(10)]);
var inst_35609 = (state_35662[(11)]);
var inst_35638 = cljs.core.empty_QMARK_.call(null,inst_35609);
var inst_35639 = inst_35610.call(null,inst_35621);
var inst_35640 = cljs.core.not.call(null,inst_35639);
var inst_35641 = (inst_35638) && (inst_35640);
var state_35662__$1 = state_35662;
var statearr_35728_35857 = state_35662__$1;
(statearr_35728_35857[(2)] = inst_35641);

(statearr_35728_35857[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (10))){
var inst_35559 = (state_35662[(8)]);
var inst_35580 = (state_35662[(2)]);
var inst_35581 = cljs.core.get.call(null,inst_35580,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35582 = cljs.core.get.call(null,inst_35580,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35583 = cljs.core.get.call(null,inst_35580,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35584 = inst_35559;
var state_35662__$1 = (function (){var statearr_35729 = state_35662;
(statearr_35729[(16)] = inst_35581);

(statearr_35729[(17)] = inst_35582);

(statearr_35729[(18)] = inst_35583);

(statearr_35729[(7)] = inst_35584);

return statearr_35729;
})();
var statearr_35730_35863 = state_35662__$1;
(statearr_35730_35863[(2)] = null);

(statearr_35730_35863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (18))){
var inst_35600 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
var statearr_35737_35864 = state_35662__$1;
(statearr_35737_35864[(2)] = inst_35600);

(statearr_35737_35864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (37))){
var state_35662__$1 = state_35662;
var statearr_35738_35866 = state_35662__$1;
(statearr_35738_35866[(2)] = null);

(statearr_35738_35866[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (8))){
var inst_35559 = (state_35662[(8)]);
var inst_35577 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35559);
var state_35662__$1 = state_35662;
var statearr_35739_35867 = state_35662__$1;
(statearr_35739_35867[(2)] = inst_35577);

(statearr_35739_35867[(1)] = (10));


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
});})(c__33952__auto___35768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33607__auto__,c__33952__auto___35768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33608__auto__ = null;
var cljs$core$async$mix_$_state_machine__33608__auto____0 = (function (){
var statearr_35743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35743[(0)] = cljs$core$async$mix_$_state_machine__33608__auto__);

(statearr_35743[(1)] = (1));

return statearr_35743;
});
var cljs$core$async$mix_$_state_machine__33608__auto____1 = (function (state_35662){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_35662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e35744){if((e35744 instanceof Object)){
var ex__33611__auto__ = e35744;
var statearr_35745_35868 = state_35662;
(statearr_35745_35868[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35869 = state_35662;
state_35662 = G__35869;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33608__auto__ = function(state_35662){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33608__auto____1.call(this,state_35662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33608__auto____0;
cljs$core$async$mix_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33608__auto____1;
return cljs$core$async$mix_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___35768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33954__auto__ = (function (){var statearr_35746 = f__33953__auto__.call(null);
(statearr_35746[(6)] = c__33952__auto___35768);

return statearr_35746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___35768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35875 = arguments.length;
switch (G__35875) {
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
var G__35922 = arguments.length;
switch (G__35922) {
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
return (function (p1__35913_SHARP_){
if(cljs.core.truth_(p1__35913_SHARP_.call(null,topic))){
return p1__35913_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35913_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30072__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35930 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35931){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35931 = meta35931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35932,meta35931__$1){
var self__ = this;
var _35932__$1 = this;
return (new cljs.core.async.t_cljs$core$async35930(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35931__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35932){
var self__ = this;
var _35932__$1 = this;
return self__.meta35931;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35930.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35930.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35930.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35930.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35930.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35930.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35930.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35931","meta35931",66190033,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35930";

cljs.core.async.t_cljs$core$async35930.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35930");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35930 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35930(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35931){
return (new cljs.core.async.t_cljs$core$async35930(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35931));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35930(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33952__auto___36236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___36236,mults,ensure_mult,p){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___36236,mults,ensure_mult,p){
return (function (state_36029){
var state_val_36030 = (state_36029[(1)]);
if((state_val_36030 === (7))){
var inst_36021 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36039_36237 = state_36029__$1;
(statearr_36039_36237[(2)] = inst_36021);

(statearr_36039_36237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (20))){
var state_36029__$1 = state_36029;
var statearr_36040_36238 = state_36029__$1;
(statearr_36040_36238[(2)] = null);

(statearr_36040_36238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (1))){
var state_36029__$1 = state_36029;
var statearr_36041_36239 = state_36029__$1;
(statearr_36041_36239[(2)] = null);

(statearr_36041_36239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (24))){
var inst_36004 = (state_36029[(7)]);
var inst_36013 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36004);
var state_36029__$1 = state_36029;
var statearr_36042_36240 = state_36029__$1;
(statearr_36042_36240[(2)] = inst_36013);

(statearr_36042_36240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (4))){
var inst_35956 = (state_36029[(8)]);
var inst_35956__$1 = (state_36029[(2)]);
var inst_35957 = (inst_35956__$1 == null);
var state_36029__$1 = (function (){var statearr_36047 = state_36029;
(statearr_36047[(8)] = inst_35956__$1);

return statearr_36047;
})();
if(cljs.core.truth_(inst_35957)){
var statearr_36049_36241 = state_36029__$1;
(statearr_36049_36241[(1)] = (5));

} else {
var statearr_36051_36243 = state_36029__$1;
(statearr_36051_36243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (15))){
var inst_35998 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36057_36245 = state_36029__$1;
(statearr_36057_36245[(2)] = inst_35998);

(statearr_36057_36245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (21))){
var inst_36018 = (state_36029[(2)]);
var state_36029__$1 = (function (){var statearr_36061 = state_36029;
(statearr_36061[(9)] = inst_36018);

return statearr_36061;
})();
var statearr_36062_36246 = state_36029__$1;
(statearr_36062_36246[(2)] = null);

(statearr_36062_36246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (13))){
var inst_35980 = (state_36029[(10)]);
var inst_35982 = cljs.core.chunked_seq_QMARK_.call(null,inst_35980);
var state_36029__$1 = state_36029;
if(inst_35982){
var statearr_36063_36247 = state_36029__$1;
(statearr_36063_36247[(1)] = (16));

} else {
var statearr_36064_36249 = state_36029__$1;
(statearr_36064_36249[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (22))){
var inst_36010 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
if(cljs.core.truth_(inst_36010)){
var statearr_36065_36250 = state_36029__$1;
(statearr_36065_36250[(1)] = (23));

} else {
var statearr_36066_36251 = state_36029__$1;
(statearr_36066_36251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (6))){
var inst_35956 = (state_36029[(8)]);
var inst_36004 = (state_36029[(7)]);
var inst_36006 = (state_36029[(11)]);
var inst_36004__$1 = topic_fn.call(null,inst_35956);
var inst_36005 = cljs.core.deref.call(null,mults);
var inst_36006__$1 = cljs.core.get.call(null,inst_36005,inst_36004__$1);
var state_36029__$1 = (function (){var statearr_36085 = state_36029;
(statearr_36085[(7)] = inst_36004__$1);

(statearr_36085[(11)] = inst_36006__$1);

return statearr_36085;
})();
if(cljs.core.truth_(inst_36006__$1)){
var statearr_36086_36261 = state_36029__$1;
(statearr_36086_36261[(1)] = (19));

} else {
var statearr_36087_36262 = state_36029__$1;
(statearr_36087_36262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (25))){
var inst_36015 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36096_36263 = state_36029__$1;
(statearr_36096_36263[(2)] = inst_36015);

(statearr_36096_36263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (17))){
var inst_35980 = (state_36029[(10)]);
var inst_35989 = cljs.core.first.call(null,inst_35980);
var inst_35990 = cljs.core.async.muxch_STAR_.call(null,inst_35989);
var inst_35991 = cljs.core.async.close_BANG_.call(null,inst_35990);
var inst_35992 = cljs.core.next.call(null,inst_35980);
var inst_35966 = inst_35992;
var inst_35967 = null;
var inst_35968 = (0);
var inst_35969 = (0);
var state_36029__$1 = (function (){var statearr_36102 = state_36029;
(statearr_36102[(12)] = inst_35969);

(statearr_36102[(13)] = inst_35967);

(statearr_36102[(14)] = inst_35966);

(statearr_36102[(15)] = inst_35968);

(statearr_36102[(16)] = inst_35991);

return statearr_36102;
})();
var statearr_36112_36264 = state_36029__$1;
(statearr_36112_36264[(2)] = null);

(statearr_36112_36264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (3))){
var inst_36023 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36029__$1,inst_36023);
} else {
if((state_val_36030 === (12))){
var inst_36000 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36113_36265 = state_36029__$1;
(statearr_36113_36265[(2)] = inst_36000);

(statearr_36113_36265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (2))){
var state_36029__$1 = state_36029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36029__$1,(4),ch);
} else {
if((state_val_36030 === (23))){
var state_36029__$1 = state_36029;
var statearr_36114_36266 = state_36029__$1;
(statearr_36114_36266[(2)] = null);

(statearr_36114_36266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (19))){
var inst_35956 = (state_36029[(8)]);
var inst_36006 = (state_36029[(11)]);
var inst_36008 = cljs.core.async.muxch_STAR_.call(null,inst_36006);
var state_36029__$1 = state_36029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36029__$1,(22),inst_36008,inst_35956);
} else {
if((state_val_36030 === (11))){
var inst_35980 = (state_36029[(10)]);
var inst_35966 = (state_36029[(14)]);
var inst_35980__$1 = cljs.core.seq.call(null,inst_35966);
var state_36029__$1 = (function (){var statearr_36115 = state_36029;
(statearr_36115[(10)] = inst_35980__$1);

return statearr_36115;
})();
if(inst_35980__$1){
var statearr_36116_36267 = state_36029__$1;
(statearr_36116_36267[(1)] = (13));

} else {
var statearr_36117_36268 = state_36029__$1;
(statearr_36117_36268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (9))){
var inst_36002 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36118_36269 = state_36029__$1;
(statearr_36118_36269[(2)] = inst_36002);

(statearr_36118_36269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (5))){
var inst_35963 = cljs.core.deref.call(null,mults);
var inst_35964 = cljs.core.vals.call(null,inst_35963);
var inst_35965 = cljs.core.seq.call(null,inst_35964);
var inst_35966 = inst_35965;
var inst_35967 = null;
var inst_35968 = (0);
var inst_35969 = (0);
var state_36029__$1 = (function (){var statearr_36119 = state_36029;
(statearr_36119[(12)] = inst_35969);

(statearr_36119[(13)] = inst_35967);

(statearr_36119[(14)] = inst_35966);

(statearr_36119[(15)] = inst_35968);

return statearr_36119;
})();
var statearr_36124_36275 = state_36029__$1;
(statearr_36124_36275[(2)] = null);

(statearr_36124_36275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (14))){
var state_36029__$1 = state_36029;
var statearr_36131_36276 = state_36029__$1;
(statearr_36131_36276[(2)] = null);

(statearr_36131_36276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (16))){
var inst_35980 = (state_36029[(10)]);
var inst_35984 = cljs.core.chunk_first.call(null,inst_35980);
var inst_35985 = cljs.core.chunk_rest.call(null,inst_35980);
var inst_35986 = cljs.core.count.call(null,inst_35984);
var inst_35966 = inst_35985;
var inst_35967 = inst_35984;
var inst_35968 = inst_35986;
var inst_35969 = (0);
var state_36029__$1 = (function (){var statearr_36132 = state_36029;
(statearr_36132[(12)] = inst_35969);

(statearr_36132[(13)] = inst_35967);

(statearr_36132[(14)] = inst_35966);

(statearr_36132[(15)] = inst_35968);

return statearr_36132;
})();
var statearr_36133_36279 = state_36029__$1;
(statearr_36133_36279[(2)] = null);

(statearr_36133_36279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (10))){
var inst_35969 = (state_36029[(12)]);
var inst_35967 = (state_36029[(13)]);
var inst_35966 = (state_36029[(14)]);
var inst_35968 = (state_36029[(15)]);
var inst_35974 = cljs.core._nth.call(null,inst_35967,inst_35969);
var inst_35975 = cljs.core.async.muxch_STAR_.call(null,inst_35974);
var inst_35976 = cljs.core.async.close_BANG_.call(null,inst_35975);
var inst_35977 = (inst_35969 + (1));
var tmp36125 = inst_35967;
var tmp36126 = inst_35966;
var tmp36127 = inst_35968;
var inst_35966__$1 = tmp36126;
var inst_35967__$1 = tmp36125;
var inst_35968__$1 = tmp36127;
var inst_35969__$1 = inst_35977;
var state_36029__$1 = (function (){var statearr_36138 = state_36029;
(statearr_36138[(17)] = inst_35976);

(statearr_36138[(12)] = inst_35969__$1);

(statearr_36138[(13)] = inst_35967__$1);

(statearr_36138[(14)] = inst_35966__$1);

(statearr_36138[(15)] = inst_35968__$1);

return statearr_36138;
})();
var statearr_36140_36286 = state_36029__$1;
(statearr_36140_36286[(2)] = null);

(statearr_36140_36286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (18))){
var inst_35995 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36151_36287 = state_36029__$1;
(statearr_36151_36287[(2)] = inst_35995);

(statearr_36151_36287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (8))){
var inst_35969 = (state_36029[(12)]);
var inst_35968 = (state_36029[(15)]);
var inst_35971 = (inst_35969 < inst_35968);
var inst_35972 = inst_35971;
var state_36029__$1 = state_36029;
if(cljs.core.truth_(inst_35972)){
var statearr_36155_36290 = state_36029__$1;
(statearr_36155_36290[(1)] = (10));

} else {
var statearr_36157_36291 = state_36029__$1;
(statearr_36157_36291[(1)] = (11));

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
});})(c__33952__auto___36236,mults,ensure_mult,p))
;
return ((function (switch__33607__auto__,c__33952__auto___36236,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_36181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36181[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_36181[(1)] = (1));

return statearr_36181;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_36029){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_36029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e36182){if((e36182 instanceof Object)){
var ex__33611__auto__ = e36182;
var statearr_36183_36299 = state_36029;
(statearr_36183_36299[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36300 = state_36029;
state_36029 = G__36300;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_36029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_36029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___36236,mults,ensure_mult,p))
})();
var state__33954__auto__ = (function (){var statearr_36192 = f__33953__auto__.call(null);
(statearr_36192[(6)] = c__33952__auto___36236);

return statearr_36192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___36236,mults,ensure_mult,p))
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
var G__36302 = arguments.length;
switch (G__36302) {
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
var G__36317 = arguments.length;
switch (G__36317) {
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
var G__36323 = arguments.length;
switch (G__36323) {
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
var c__33952__auto___36449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___36449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___36449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36369){
var state_val_36371 = (state_36369[(1)]);
if((state_val_36371 === (7))){
var state_36369__$1 = state_36369;
var statearr_36375_36450 = state_36369__$1;
(statearr_36375_36450[(2)] = null);

(statearr_36375_36450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (1))){
var state_36369__$1 = state_36369;
var statearr_36376_36454 = state_36369__$1;
(statearr_36376_36454[(2)] = null);

(statearr_36376_36454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (4))){
var inst_36326 = (state_36369[(7)]);
var inst_36328 = (inst_36326 < cnt);
var state_36369__$1 = state_36369;
if(cljs.core.truth_(inst_36328)){
var statearr_36377_36456 = state_36369__$1;
(statearr_36377_36456[(1)] = (6));

} else {
var statearr_36378_36457 = state_36369__$1;
(statearr_36378_36457[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (15))){
var inst_36365 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
var statearr_36379_36458 = state_36369__$1;
(statearr_36379_36458[(2)] = inst_36365);

(statearr_36379_36458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (13))){
var inst_36358 = cljs.core.async.close_BANG_.call(null,out);
var state_36369__$1 = state_36369;
var statearr_36380_36459 = state_36369__$1;
(statearr_36380_36459[(2)] = inst_36358);

(statearr_36380_36459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (6))){
var state_36369__$1 = state_36369;
var statearr_36384_36463 = state_36369__$1;
(statearr_36384_36463[(2)] = null);

(statearr_36384_36463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (3))){
var inst_36367 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36369__$1,inst_36367);
} else {
if((state_val_36371 === (12))){
var inst_36355 = (state_36369[(8)]);
var inst_36355__$1 = (state_36369[(2)]);
var inst_36356 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36355__$1);
var state_36369__$1 = (function (){var statearr_36398 = state_36369;
(statearr_36398[(8)] = inst_36355__$1);

return statearr_36398;
})();
if(cljs.core.truth_(inst_36356)){
var statearr_36399_36464 = state_36369__$1;
(statearr_36399_36464[(1)] = (13));

} else {
var statearr_36400_36477 = state_36369__$1;
(statearr_36400_36477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (2))){
var inst_36325 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36326 = (0);
var state_36369__$1 = (function (){var statearr_36407 = state_36369;
(statearr_36407[(9)] = inst_36325);

(statearr_36407[(7)] = inst_36326);

return statearr_36407;
})();
var statearr_36408_36478 = state_36369__$1;
(statearr_36408_36478[(2)] = null);

(statearr_36408_36478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (11))){
var inst_36326 = (state_36369[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36369,(10),Object,null,(9));
var inst_36341 = chs__$1.call(null,inst_36326);
var inst_36342 = done.call(null,inst_36326);
var inst_36343 = cljs.core.async.take_BANG_.call(null,inst_36341,inst_36342);
var state_36369__$1 = state_36369;
var statearr_36412_36479 = state_36369__$1;
(statearr_36412_36479[(2)] = inst_36343);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36369__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (9))){
var inst_36326 = (state_36369[(7)]);
var inst_36345 = (state_36369[(2)]);
var inst_36347 = (inst_36326 + (1));
var inst_36326__$1 = inst_36347;
var state_36369__$1 = (function (){var statearr_36416 = state_36369;
(statearr_36416[(10)] = inst_36345);

(statearr_36416[(7)] = inst_36326__$1);

return statearr_36416;
})();
var statearr_36424_36480 = state_36369__$1;
(statearr_36424_36480[(2)] = null);

(statearr_36424_36480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (5))){
var inst_36353 = (state_36369[(2)]);
var state_36369__$1 = (function (){var statearr_36428 = state_36369;
(statearr_36428[(11)] = inst_36353);

return statearr_36428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36369__$1,(12),dchan);
} else {
if((state_val_36371 === (14))){
var inst_36355 = (state_36369[(8)]);
var inst_36360 = cljs.core.apply.call(null,f,inst_36355);
var state_36369__$1 = state_36369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36369__$1,(16),out,inst_36360);
} else {
if((state_val_36371 === (16))){
var inst_36362 = (state_36369[(2)]);
var state_36369__$1 = (function (){var statearr_36429 = state_36369;
(statearr_36429[(12)] = inst_36362);

return statearr_36429;
})();
var statearr_36430_36481 = state_36369__$1;
(statearr_36430_36481[(2)] = null);

(statearr_36430_36481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (10))){
var inst_36333 = (state_36369[(2)]);
var inst_36334 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36369__$1 = (function (){var statearr_36431 = state_36369;
(statearr_36431[(13)] = inst_36333);

return statearr_36431;
})();
var statearr_36432_36482 = state_36369__$1;
(statearr_36432_36482[(2)] = inst_36334);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36369__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36371 === (8))){
var inst_36351 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
var statearr_36433_36487 = state_36369__$1;
(statearr_36433_36487[(2)] = inst_36351);

(statearr_36433_36487[(1)] = (5));


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
});})(c__33952__auto___36449,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33607__auto__,c__33952__auto___36449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_36441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36441[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_36441[(1)] = (1));

return statearr_36441;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_36369){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_36369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e36442){if((e36442 instanceof Object)){
var ex__33611__auto__ = e36442;
var statearr_36443_36488 = state_36369;
(statearr_36443_36488[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36489 = state_36369;
state_36369 = G__36489;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_36369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_36369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___36449,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33954__auto__ = (function (){var statearr_36444 = f__33953__auto__.call(null);
(statearr_36444[(6)] = c__33952__auto___36449);

return statearr_36444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___36449,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__36496 = arguments.length;
switch (G__36496) {
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
var c__33952__auto___36564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___36564,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___36564,out){
return (function (state_36532){
var state_val_36533 = (state_36532[(1)]);
if((state_val_36533 === (7))){
var inst_36511 = (state_36532[(7)]);
var inst_36512 = (state_36532[(8)]);
var inst_36511__$1 = (state_36532[(2)]);
var inst_36512__$1 = cljs.core.nth.call(null,inst_36511__$1,(0),null);
var inst_36513 = cljs.core.nth.call(null,inst_36511__$1,(1),null);
var inst_36514 = (inst_36512__$1 == null);
var state_36532__$1 = (function (){var statearr_36538 = state_36532;
(statearr_36538[(7)] = inst_36511__$1);

(statearr_36538[(8)] = inst_36512__$1);

(statearr_36538[(9)] = inst_36513);

return statearr_36538;
})();
if(cljs.core.truth_(inst_36514)){
var statearr_36539_36568 = state_36532__$1;
(statearr_36539_36568[(1)] = (8));

} else {
var statearr_36540_36569 = state_36532__$1;
(statearr_36540_36569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (1))){
var inst_36497 = cljs.core.vec.call(null,chs);
var inst_36498 = inst_36497;
var state_36532__$1 = (function (){var statearr_36541 = state_36532;
(statearr_36541[(10)] = inst_36498);

return statearr_36541;
})();
var statearr_36542_36573 = state_36532__$1;
(statearr_36542_36573[(2)] = null);

(statearr_36542_36573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (4))){
var inst_36498 = (state_36532[(10)]);
var state_36532__$1 = state_36532;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36532__$1,(7),inst_36498);
} else {
if((state_val_36533 === (6))){
var inst_36528 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36546_36574 = state_36532__$1;
(statearr_36546_36574[(2)] = inst_36528);

(statearr_36546_36574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (3))){
var inst_36530 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36532__$1,inst_36530);
} else {
if((state_val_36533 === (2))){
var inst_36498 = (state_36532[(10)]);
var inst_36500 = cljs.core.count.call(null,inst_36498);
var inst_36501 = (inst_36500 > (0));
var state_36532__$1 = state_36532;
if(cljs.core.truth_(inst_36501)){
var statearr_36548_36575 = state_36532__$1;
(statearr_36548_36575[(1)] = (4));

} else {
var statearr_36549_36576 = state_36532__$1;
(statearr_36549_36576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (11))){
var inst_36498 = (state_36532[(10)]);
var inst_36521 = (state_36532[(2)]);
var tmp36547 = inst_36498;
var inst_36498__$1 = tmp36547;
var state_36532__$1 = (function (){var statearr_36550 = state_36532;
(statearr_36550[(11)] = inst_36521);

(statearr_36550[(10)] = inst_36498__$1);

return statearr_36550;
})();
var statearr_36551_36577 = state_36532__$1;
(statearr_36551_36577[(2)] = null);

(statearr_36551_36577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (9))){
var inst_36512 = (state_36532[(8)]);
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36532__$1,(11),out,inst_36512);
} else {
if((state_val_36533 === (5))){
var inst_36526 = cljs.core.async.close_BANG_.call(null,out);
var state_36532__$1 = state_36532;
var statearr_36555_36578 = state_36532__$1;
(statearr_36555_36578[(2)] = inst_36526);

(statearr_36555_36578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (10))){
var inst_36524 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36556_36579 = state_36532__$1;
(statearr_36556_36579[(2)] = inst_36524);

(statearr_36556_36579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (8))){
var inst_36511 = (state_36532[(7)]);
var inst_36512 = (state_36532[(8)]);
var inst_36513 = (state_36532[(9)]);
var inst_36498 = (state_36532[(10)]);
var inst_36516 = (function (){var cs = inst_36498;
var vec__36507 = inst_36511;
var v = inst_36512;
var c = inst_36513;
return ((function (cs,vec__36507,v,c,inst_36511,inst_36512,inst_36513,inst_36498,state_val_36533,c__33952__auto___36564,out){
return (function (p1__36494_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36494_SHARP_);
});
;})(cs,vec__36507,v,c,inst_36511,inst_36512,inst_36513,inst_36498,state_val_36533,c__33952__auto___36564,out))
})();
var inst_36517 = cljs.core.filterv.call(null,inst_36516,inst_36498);
var inst_36498__$1 = inst_36517;
var state_36532__$1 = (function (){var statearr_36557 = state_36532;
(statearr_36557[(10)] = inst_36498__$1);

return statearr_36557;
})();
var statearr_36558_36580 = state_36532__$1;
(statearr_36558_36580[(2)] = null);

(statearr_36558_36580[(1)] = (2));


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
});})(c__33952__auto___36564,out))
;
return ((function (switch__33607__auto__,c__33952__auto___36564,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_36559 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36559[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_36559[(1)] = (1));

return statearr_36559;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_36532){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_36532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e36560){if((e36560 instanceof Object)){
var ex__33611__auto__ = e36560;
var statearr_36561_36583 = state_36532;
(statearr_36561_36583[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36586 = state_36532;
state_36532 = G__36586;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_36532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_36532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___36564,out))
})();
var state__33954__auto__ = (function (){var statearr_36562 = f__33953__auto__.call(null);
(statearr_36562[(6)] = c__33952__auto___36564);

return statearr_36562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___36564,out))
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
var G__36594 = arguments.length;
switch (G__36594) {
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
var c__33952__auto___36646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___36646,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___36646,out){
return (function (state_36621){
var state_val_36622 = (state_36621[(1)]);
if((state_val_36622 === (7))){
var inst_36603 = (state_36621[(7)]);
var inst_36603__$1 = (state_36621[(2)]);
var inst_36604 = (inst_36603__$1 == null);
var inst_36605 = cljs.core.not.call(null,inst_36604);
var state_36621__$1 = (function (){var statearr_36623 = state_36621;
(statearr_36623[(7)] = inst_36603__$1);

return statearr_36623;
})();
if(inst_36605){
var statearr_36624_36647 = state_36621__$1;
(statearr_36624_36647[(1)] = (8));

} else {
var statearr_36625_36651 = state_36621__$1;
(statearr_36625_36651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (1))){
var inst_36598 = (0);
var state_36621__$1 = (function (){var statearr_36627 = state_36621;
(statearr_36627[(8)] = inst_36598);

return statearr_36627;
})();
var statearr_36628_36652 = state_36621__$1;
(statearr_36628_36652[(2)] = null);

(statearr_36628_36652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (4))){
var state_36621__$1 = state_36621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36621__$1,(7),ch);
} else {
if((state_val_36622 === (6))){
var inst_36616 = (state_36621[(2)]);
var state_36621__$1 = state_36621;
var statearr_36629_36658 = state_36621__$1;
(statearr_36629_36658[(2)] = inst_36616);

(statearr_36629_36658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (3))){
var inst_36618 = (state_36621[(2)]);
var inst_36619 = cljs.core.async.close_BANG_.call(null,out);
var state_36621__$1 = (function (){var statearr_36630 = state_36621;
(statearr_36630[(9)] = inst_36618);

return statearr_36630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36621__$1,inst_36619);
} else {
if((state_val_36622 === (2))){
var inst_36598 = (state_36621[(8)]);
var inst_36600 = (inst_36598 < n);
var state_36621__$1 = state_36621;
if(cljs.core.truth_(inst_36600)){
var statearr_36631_36661 = state_36621__$1;
(statearr_36631_36661[(1)] = (4));

} else {
var statearr_36632_36662 = state_36621__$1;
(statearr_36632_36662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (11))){
var inst_36598 = (state_36621[(8)]);
var inst_36608 = (state_36621[(2)]);
var inst_36609 = (inst_36598 + (1));
var inst_36598__$1 = inst_36609;
var state_36621__$1 = (function (){var statearr_36633 = state_36621;
(statearr_36633[(8)] = inst_36598__$1);

(statearr_36633[(10)] = inst_36608);

return statearr_36633;
})();
var statearr_36634_36666 = state_36621__$1;
(statearr_36634_36666[(2)] = null);

(statearr_36634_36666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (9))){
var state_36621__$1 = state_36621;
var statearr_36635_36667 = state_36621__$1;
(statearr_36635_36667[(2)] = null);

(statearr_36635_36667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (5))){
var state_36621__$1 = state_36621;
var statearr_36636_36668 = state_36621__$1;
(statearr_36636_36668[(2)] = null);

(statearr_36636_36668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (10))){
var inst_36613 = (state_36621[(2)]);
var state_36621__$1 = state_36621;
var statearr_36637_36669 = state_36621__$1;
(statearr_36637_36669[(2)] = inst_36613);

(statearr_36637_36669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (8))){
var inst_36603 = (state_36621[(7)]);
var state_36621__$1 = state_36621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36621__$1,(11),out,inst_36603);
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
});})(c__33952__auto___36646,out))
;
return ((function (switch__33607__auto__,c__33952__auto___36646,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_36638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36638[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_36638[(1)] = (1));

return statearr_36638;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_36621){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_36621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e36639){if((e36639 instanceof Object)){
var ex__33611__auto__ = e36639;
var statearr_36640_36670 = state_36621;
(statearr_36640_36670[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36675 = state_36621;
state_36621 = G__36675;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_36621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_36621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___36646,out))
})();
var state__33954__auto__ = (function (){var statearr_36641 = f__33953__auto__.call(null);
(statearr_36641[(6)] = c__33952__auto___36646);

return statearr_36641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___36646,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36682 = (function (f,ch,meta36683){
this.f = f;
this.ch = ch;
this.meta36683 = meta36683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36684,meta36683__$1){
var self__ = this;
var _36684__$1 = this;
return (new cljs.core.async.t_cljs$core$async36682(self__.f,self__.ch,meta36683__$1));
});

cljs.core.async.t_cljs$core$async36682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36684){
var self__ = this;
var _36684__$1 = this;
return self__.meta36683;
});

cljs.core.async.t_cljs$core$async36682.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36682.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36682.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36682.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36682.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36685 = (function (f,ch,meta36683,_,fn1,meta36686){
this.f = f;
this.ch = ch;
this.meta36683 = meta36683;
this._ = _;
this.fn1 = fn1;
this.meta36686 = meta36686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36687,meta36686__$1){
var self__ = this;
var _36687__$1 = this;
return (new cljs.core.async.t_cljs$core$async36685(self__.f,self__.ch,self__.meta36683,self__._,self__.fn1,meta36686__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36687){
var self__ = this;
var _36687__$1 = this;
return self__.meta36686;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36685.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36681_SHARP_){
return f1.call(null,(((p1__36681_SHARP_ == null))?null:self__.f.call(null,p1__36681_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36685.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36683","meta36683",-290707367,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36682","cljs.core.async/t_cljs$core$async36682",-716694023,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36686","meta36686",1186842556,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36685";

cljs.core.async.t_cljs$core$async36685.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36685");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36685 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36685(f__$1,ch__$1,meta36683__$1,___$2,fn1__$1,meta36686){
return (new cljs.core.async.t_cljs$core$async36685(f__$1,ch__$1,meta36683__$1,___$2,fn1__$1,meta36686));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36685(self__.f,self__.ch,self__.meta36683,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async36682.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36682.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36683","meta36683",-290707367,null)], null);
});

cljs.core.async.t_cljs$core$async36682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36682";

cljs.core.async.t_cljs$core$async36682.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36682");
});

cljs.core.async.__GT_t_cljs$core$async36682 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36682(f__$1,ch__$1,meta36683){
return (new cljs.core.async.t_cljs$core$async36682(f__$1,ch__$1,meta36683));
});

}

return (new cljs.core.async.t_cljs$core$async36682(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36706 = (function (f,ch,meta36707){
this.f = f;
this.ch = ch;
this.meta36707 = meta36707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36708,meta36707__$1){
var self__ = this;
var _36708__$1 = this;
return (new cljs.core.async.t_cljs$core$async36706(self__.f,self__.ch,meta36707__$1));
});

cljs.core.async.t_cljs$core$async36706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36708){
var self__ = this;
var _36708__$1 = this;
return self__.meta36707;
});

cljs.core.async.t_cljs$core$async36706.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36706.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36706.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36706.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36706.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36706.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36707","meta36707",1810004052,null)], null);
});

cljs.core.async.t_cljs$core$async36706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36706";

cljs.core.async.t_cljs$core$async36706.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36706");
});

cljs.core.async.__GT_t_cljs$core$async36706 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36706(f__$1,ch__$1,meta36707){
return (new cljs.core.async.t_cljs$core$async36706(f__$1,ch__$1,meta36707));
});

}

return (new cljs.core.async.t_cljs$core$async36706(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36756 = (function (p,ch,meta36757){
this.p = p;
this.ch = ch;
this.meta36757 = meta36757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36758,meta36757__$1){
var self__ = this;
var _36758__$1 = this;
return (new cljs.core.async.t_cljs$core$async36756(self__.p,self__.ch,meta36757__$1));
});

cljs.core.async.t_cljs$core$async36756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36758){
var self__ = this;
var _36758__$1 = this;
return self__.meta36757;
});

cljs.core.async.t_cljs$core$async36756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36757","meta36757",1061380718,null)], null);
});

cljs.core.async.t_cljs$core$async36756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36756";

cljs.core.async.t_cljs$core$async36756.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36756");
});

cljs.core.async.__GT_t_cljs$core$async36756 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36756(p__$1,ch__$1,meta36757){
return (new cljs.core.async.t_cljs$core$async36756(p__$1,ch__$1,meta36757));
});

}

return (new cljs.core.async.t_cljs$core$async36756(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36764 = arguments.length;
switch (G__36764) {
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
var c__33952__auto___36817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___36817,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___36817,out){
return (function (state_36785){
var state_val_36786 = (state_36785[(1)]);
if((state_val_36786 === (7))){
var inst_36781 = (state_36785[(2)]);
var state_36785__$1 = state_36785;
var statearr_36787_36818 = state_36785__$1;
(statearr_36787_36818[(2)] = inst_36781);

(statearr_36787_36818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (1))){
var state_36785__$1 = state_36785;
var statearr_36788_36819 = state_36785__$1;
(statearr_36788_36819[(2)] = null);

(statearr_36788_36819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (4))){
var inst_36767 = (state_36785[(7)]);
var inst_36767__$1 = (state_36785[(2)]);
var inst_36768 = (inst_36767__$1 == null);
var state_36785__$1 = (function (){var statearr_36791 = state_36785;
(statearr_36791[(7)] = inst_36767__$1);

return statearr_36791;
})();
if(cljs.core.truth_(inst_36768)){
var statearr_36792_36820 = state_36785__$1;
(statearr_36792_36820[(1)] = (5));

} else {
var statearr_36793_36824 = state_36785__$1;
(statearr_36793_36824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (6))){
var inst_36767 = (state_36785[(7)]);
var inst_36772 = p.call(null,inst_36767);
var state_36785__$1 = state_36785;
if(cljs.core.truth_(inst_36772)){
var statearr_36794_36828 = state_36785__$1;
(statearr_36794_36828[(1)] = (8));

} else {
var statearr_36795_36829 = state_36785__$1;
(statearr_36795_36829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (3))){
var inst_36783 = (state_36785[(2)]);
var state_36785__$1 = state_36785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36785__$1,inst_36783);
} else {
if((state_val_36786 === (2))){
var state_36785__$1 = state_36785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36785__$1,(4),ch);
} else {
if((state_val_36786 === (11))){
var inst_36775 = (state_36785[(2)]);
var state_36785__$1 = state_36785;
var statearr_36796_36830 = state_36785__$1;
(statearr_36796_36830[(2)] = inst_36775);

(statearr_36796_36830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (9))){
var state_36785__$1 = state_36785;
var statearr_36802_36831 = state_36785__$1;
(statearr_36802_36831[(2)] = null);

(statearr_36802_36831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (5))){
var inst_36770 = cljs.core.async.close_BANG_.call(null,out);
var state_36785__$1 = state_36785;
var statearr_36809_36833 = state_36785__$1;
(statearr_36809_36833[(2)] = inst_36770);

(statearr_36809_36833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (10))){
var inst_36778 = (state_36785[(2)]);
var state_36785__$1 = (function (){var statearr_36810 = state_36785;
(statearr_36810[(8)] = inst_36778);

return statearr_36810;
})();
var statearr_36811_36834 = state_36785__$1;
(statearr_36811_36834[(2)] = null);

(statearr_36811_36834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (8))){
var inst_36767 = (state_36785[(7)]);
var state_36785__$1 = state_36785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36785__$1,(11),out,inst_36767);
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
});})(c__33952__auto___36817,out))
;
return ((function (switch__33607__auto__,c__33952__auto___36817,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_36812 = [null,null,null,null,null,null,null,null,null];
(statearr_36812[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_36812[(1)] = (1));

return statearr_36812;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_36785){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_36785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e36813){if((e36813 instanceof Object)){
var ex__33611__auto__ = e36813;
var statearr_36814_36835 = state_36785;
(statearr_36814_36835[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36836 = state_36785;
state_36785 = G__36836;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_36785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_36785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___36817,out))
})();
var state__33954__auto__ = (function (){var statearr_36815 = f__33953__auto__.call(null);
(statearr_36815[(6)] = c__33952__auto___36817);

return statearr_36815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___36817,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36839 = arguments.length;
switch (G__36839) {
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
return (function (state_36909){
var state_val_36910 = (state_36909[(1)]);
if((state_val_36910 === (7))){
var inst_36905 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36911_36955 = state_36909__$1;
(statearr_36911_36955[(2)] = inst_36905);

(statearr_36911_36955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (20))){
var inst_36875 = (state_36909[(7)]);
var inst_36886 = (state_36909[(2)]);
var inst_36887 = cljs.core.next.call(null,inst_36875);
var inst_36857 = inst_36887;
var inst_36858 = null;
var inst_36859 = (0);
var inst_36860 = (0);
var state_36909__$1 = (function (){var statearr_36912 = state_36909;
(statearr_36912[(8)] = inst_36886);

(statearr_36912[(9)] = inst_36859);

(statearr_36912[(10)] = inst_36858);

(statearr_36912[(11)] = inst_36857);

(statearr_36912[(12)] = inst_36860);

return statearr_36912;
})();
var statearr_36913_36959 = state_36909__$1;
(statearr_36913_36959[(2)] = null);

(statearr_36913_36959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (1))){
var state_36909__$1 = state_36909;
var statearr_36914_36962 = state_36909__$1;
(statearr_36914_36962[(2)] = null);

(statearr_36914_36962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (4))){
var inst_36846 = (state_36909[(13)]);
var inst_36846__$1 = (state_36909[(2)]);
var inst_36847 = (inst_36846__$1 == null);
var state_36909__$1 = (function (){var statearr_36915 = state_36909;
(statearr_36915[(13)] = inst_36846__$1);

return statearr_36915;
})();
if(cljs.core.truth_(inst_36847)){
var statearr_36916_36964 = state_36909__$1;
(statearr_36916_36964[(1)] = (5));

} else {
var statearr_36917_36965 = state_36909__$1;
(statearr_36917_36965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (15))){
var state_36909__$1 = state_36909;
var statearr_36921_36966 = state_36909__$1;
(statearr_36921_36966[(2)] = null);

(statearr_36921_36966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (21))){
var state_36909__$1 = state_36909;
var statearr_36922_36967 = state_36909__$1;
(statearr_36922_36967[(2)] = null);

(statearr_36922_36967[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (13))){
var inst_36859 = (state_36909[(9)]);
var inst_36858 = (state_36909[(10)]);
var inst_36857 = (state_36909[(11)]);
var inst_36860 = (state_36909[(12)]);
var inst_36867 = (state_36909[(2)]);
var inst_36869 = (inst_36860 + (1));
var tmp36918 = inst_36859;
var tmp36919 = inst_36858;
var tmp36920 = inst_36857;
var inst_36857__$1 = tmp36920;
var inst_36858__$1 = tmp36919;
var inst_36859__$1 = tmp36918;
var inst_36860__$1 = inst_36869;
var state_36909__$1 = (function (){var statearr_36924 = state_36909;
(statearr_36924[(14)] = inst_36867);

(statearr_36924[(9)] = inst_36859__$1);

(statearr_36924[(10)] = inst_36858__$1);

(statearr_36924[(11)] = inst_36857__$1);

(statearr_36924[(12)] = inst_36860__$1);

return statearr_36924;
})();
var statearr_36925_36968 = state_36909__$1;
(statearr_36925_36968[(2)] = null);

(statearr_36925_36968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (22))){
var state_36909__$1 = state_36909;
var statearr_36926_36969 = state_36909__$1;
(statearr_36926_36969[(2)] = null);

(statearr_36926_36969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (6))){
var inst_36846 = (state_36909[(13)]);
var inst_36855 = f.call(null,inst_36846);
var inst_36856 = cljs.core.seq.call(null,inst_36855);
var inst_36857 = inst_36856;
var inst_36858 = null;
var inst_36859 = (0);
var inst_36860 = (0);
var state_36909__$1 = (function (){var statearr_36927 = state_36909;
(statearr_36927[(9)] = inst_36859);

(statearr_36927[(10)] = inst_36858);

(statearr_36927[(11)] = inst_36857);

(statearr_36927[(12)] = inst_36860);

return statearr_36927;
})();
var statearr_36928_36990 = state_36909__$1;
(statearr_36928_36990[(2)] = null);

(statearr_36928_36990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (17))){
var inst_36875 = (state_36909[(7)]);
var inst_36879 = cljs.core.chunk_first.call(null,inst_36875);
var inst_36880 = cljs.core.chunk_rest.call(null,inst_36875);
var inst_36881 = cljs.core.count.call(null,inst_36879);
var inst_36857 = inst_36880;
var inst_36858 = inst_36879;
var inst_36859 = inst_36881;
var inst_36860 = (0);
var state_36909__$1 = (function (){var statearr_36929 = state_36909;
(statearr_36929[(9)] = inst_36859);

(statearr_36929[(10)] = inst_36858);

(statearr_36929[(11)] = inst_36857);

(statearr_36929[(12)] = inst_36860);

return statearr_36929;
})();
var statearr_36930_36991 = state_36909__$1;
(statearr_36930_36991[(2)] = null);

(statearr_36930_36991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (3))){
var inst_36907 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36909__$1,inst_36907);
} else {
if((state_val_36910 === (12))){
var inst_36895 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36931_36992 = state_36909__$1;
(statearr_36931_36992[(2)] = inst_36895);

(statearr_36931_36992[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (2))){
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(4),in$);
} else {
if((state_val_36910 === (23))){
var inst_36903 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36932_36993 = state_36909__$1;
(statearr_36932_36993[(2)] = inst_36903);

(statearr_36932_36993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (19))){
var inst_36890 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36933_36997 = state_36909__$1;
(statearr_36933_36997[(2)] = inst_36890);

(statearr_36933_36997[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (11))){
var inst_36875 = (state_36909[(7)]);
var inst_36857 = (state_36909[(11)]);
var inst_36875__$1 = cljs.core.seq.call(null,inst_36857);
var state_36909__$1 = (function (){var statearr_36934 = state_36909;
(statearr_36934[(7)] = inst_36875__$1);

return statearr_36934;
})();
if(inst_36875__$1){
var statearr_36936_37018 = state_36909__$1;
(statearr_36936_37018[(1)] = (14));

} else {
var statearr_36937_37019 = state_36909__$1;
(statearr_36937_37019[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (9))){
var inst_36897 = (state_36909[(2)]);
var inst_36898 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36909__$1 = (function (){var statearr_36938 = state_36909;
(statearr_36938[(15)] = inst_36897);

return statearr_36938;
})();
if(cljs.core.truth_(inst_36898)){
var statearr_36939_37020 = state_36909__$1;
(statearr_36939_37020[(1)] = (21));

} else {
var statearr_36940_37021 = state_36909__$1;
(statearr_36940_37021[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (5))){
var inst_36849 = cljs.core.async.close_BANG_.call(null,out);
var state_36909__$1 = state_36909;
var statearr_36941_37022 = state_36909__$1;
(statearr_36941_37022[(2)] = inst_36849);

(statearr_36941_37022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (14))){
var inst_36875 = (state_36909[(7)]);
var inst_36877 = cljs.core.chunked_seq_QMARK_.call(null,inst_36875);
var state_36909__$1 = state_36909;
if(inst_36877){
var statearr_36942_37023 = state_36909__$1;
(statearr_36942_37023[(1)] = (17));

} else {
var statearr_36943_37024 = state_36909__$1;
(statearr_36943_37024[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (16))){
var inst_36893 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36944_37025 = state_36909__$1;
(statearr_36944_37025[(2)] = inst_36893);

(statearr_36944_37025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (10))){
var inst_36858 = (state_36909[(10)]);
var inst_36860 = (state_36909[(12)]);
var inst_36865 = cljs.core._nth.call(null,inst_36858,inst_36860);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36909__$1,(13),out,inst_36865);
} else {
if((state_val_36910 === (18))){
var inst_36875 = (state_36909[(7)]);
var inst_36884 = cljs.core.first.call(null,inst_36875);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36909__$1,(20),out,inst_36884);
} else {
if((state_val_36910 === (8))){
var inst_36859 = (state_36909[(9)]);
var inst_36860 = (state_36909[(12)]);
var inst_36862 = (inst_36860 < inst_36859);
var inst_36863 = inst_36862;
var state_36909__$1 = state_36909;
if(cljs.core.truth_(inst_36863)){
var statearr_36945_37032 = state_36909__$1;
(statearr_36945_37032[(1)] = (10));

} else {
var statearr_36946_37033 = state_36909__$1;
(statearr_36946_37033[(1)] = (11));

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
var statearr_36947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36947[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__);

(statearr_36947[(1)] = (1));

return statearr_36947;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____1 = (function (state_36909){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_36909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e36948){if((e36948 instanceof Object)){
var ex__33611__auto__ = e36948;
var statearr_36949_37037 = state_36909;
(statearr_36949_37037[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37038 = state_36909;
state_36909 = G__37038;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__ = function(state_36909){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____1.call(this,state_36909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_36950 = f__33953__auto__.call(null);
(statearr_36950[(6)] = c__33952__auto__);

return statearr_36950;
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
var G__37040 = arguments.length;
switch (G__37040) {
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
var G__37044 = arguments.length;
switch (G__37044) {
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
var G__37049 = arguments.length;
switch (G__37049) {
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
var c__33952__auto___37104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___37104,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___37104,out){
return (function (state_37073){
var state_val_37074 = (state_37073[(1)]);
if((state_val_37074 === (7))){
var inst_37068 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
var statearr_37075_37105 = state_37073__$1;
(statearr_37075_37105[(2)] = inst_37068);

(statearr_37075_37105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (1))){
var inst_37050 = null;
var state_37073__$1 = (function (){var statearr_37080 = state_37073;
(statearr_37080[(7)] = inst_37050);

return statearr_37080;
})();
var statearr_37081_37106 = state_37073__$1;
(statearr_37081_37106[(2)] = null);

(statearr_37081_37106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (4))){
var inst_37053 = (state_37073[(8)]);
var inst_37053__$1 = (state_37073[(2)]);
var inst_37054 = (inst_37053__$1 == null);
var inst_37055 = cljs.core.not.call(null,inst_37054);
var state_37073__$1 = (function (){var statearr_37082 = state_37073;
(statearr_37082[(8)] = inst_37053__$1);

return statearr_37082;
})();
if(inst_37055){
var statearr_37083_37107 = state_37073__$1;
(statearr_37083_37107[(1)] = (5));

} else {
var statearr_37084_37108 = state_37073__$1;
(statearr_37084_37108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (6))){
var state_37073__$1 = state_37073;
var statearr_37085_37113 = state_37073__$1;
(statearr_37085_37113[(2)] = null);

(statearr_37085_37113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (3))){
var inst_37070 = (state_37073[(2)]);
var inst_37071 = cljs.core.async.close_BANG_.call(null,out);
var state_37073__$1 = (function (){var statearr_37086 = state_37073;
(statearr_37086[(9)] = inst_37070);

return statearr_37086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37073__$1,inst_37071);
} else {
if((state_val_37074 === (2))){
var state_37073__$1 = state_37073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37073__$1,(4),ch);
} else {
if((state_val_37074 === (11))){
var inst_37053 = (state_37073[(8)]);
var inst_37062 = (state_37073[(2)]);
var inst_37050 = inst_37053;
var state_37073__$1 = (function (){var statearr_37087 = state_37073;
(statearr_37087[(10)] = inst_37062);

(statearr_37087[(7)] = inst_37050);

return statearr_37087;
})();
var statearr_37088_37114 = state_37073__$1;
(statearr_37088_37114[(2)] = null);

(statearr_37088_37114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (9))){
var inst_37053 = (state_37073[(8)]);
var state_37073__$1 = state_37073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37073__$1,(11),out,inst_37053);
} else {
if((state_val_37074 === (5))){
var inst_37053 = (state_37073[(8)]);
var inst_37050 = (state_37073[(7)]);
var inst_37057 = cljs.core._EQ_.call(null,inst_37053,inst_37050);
var state_37073__$1 = state_37073;
if(inst_37057){
var statearr_37090_37115 = state_37073__$1;
(statearr_37090_37115[(1)] = (8));

} else {
var statearr_37091_37116 = state_37073__$1;
(statearr_37091_37116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (10))){
var inst_37065 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
var statearr_37092_37117 = state_37073__$1;
(statearr_37092_37117[(2)] = inst_37065);

(statearr_37092_37117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (8))){
var inst_37050 = (state_37073[(7)]);
var tmp37089 = inst_37050;
var inst_37050__$1 = tmp37089;
var state_37073__$1 = (function (){var statearr_37093 = state_37073;
(statearr_37093[(7)] = inst_37050__$1);

return statearr_37093;
})();
var statearr_37094_37118 = state_37073__$1;
(statearr_37094_37118[(2)] = null);

(statearr_37094_37118[(1)] = (2));


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
});})(c__33952__auto___37104,out))
;
return ((function (switch__33607__auto__,c__33952__auto___37104,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_37095 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37095[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_37095[(1)] = (1));

return statearr_37095;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_37073){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_37073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e37096){if((e37096 instanceof Object)){
var ex__33611__auto__ = e37096;
var statearr_37097_37119 = state_37073;
(statearr_37097_37119[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37120 = state_37073;
state_37073 = G__37120;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_37073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_37073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___37104,out))
})();
var state__33954__auto__ = (function (){var statearr_37102 = f__33953__auto__.call(null);
(statearr_37102[(6)] = c__33952__auto___37104);

return statearr_37102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___37104,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37122 = arguments.length;
switch (G__37122) {
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
var c__33952__auto___37221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___37221,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___37221,out){
return (function (state_37173){
var state_val_37174 = (state_37173[(1)]);
if((state_val_37174 === (7))){
var inst_37163 = (state_37173[(2)]);
var state_37173__$1 = state_37173;
var statearr_37178_37222 = state_37173__$1;
(statearr_37178_37222[(2)] = inst_37163);

(statearr_37178_37222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37174 === (1))){
var inst_37128 = (new Array(n));
var inst_37129 = inst_37128;
var inst_37130 = (0);
var state_37173__$1 = (function (){var statearr_37183 = state_37173;
(statearr_37183[(7)] = inst_37129);

(statearr_37183[(8)] = inst_37130);

return statearr_37183;
})();
var statearr_37184_37223 = state_37173__$1;
(statearr_37184_37223[(2)] = null);

(statearr_37184_37223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37174 === (4))){
var inst_37133 = (state_37173[(9)]);
var inst_37133__$1 = (state_37173[(2)]);
var inst_37134 = (inst_37133__$1 == null);
var inst_37135 = cljs.core.not.call(null,inst_37134);
var state_37173__$1 = (function (){var statearr_37191 = state_37173;
(statearr_37191[(9)] = inst_37133__$1);

return statearr_37191;
})();
if(inst_37135){
var statearr_37192_37236 = state_37173__$1;
(statearr_37192_37236[(1)] = (5));

} else {
var statearr_37193_37237 = state_37173__$1;
(statearr_37193_37237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37174 === (15))){
var inst_37157 = (state_37173[(2)]);
var state_37173__$1 = state_37173;
var statearr_37194_37238 = state_37173__$1;
(statearr_37194_37238[(2)] = inst_37157);

(statearr_37194_37238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37174 === (13))){
var state_37173__$1 = state_37173;
var statearr_37201_37239 = state_37173__$1;
(statearr_37201_37239[(2)] = null);

(statearr_37201_37239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37174 === (6))){
var inst_37130 = (state_37173[(8)]);
var inst_37151 = (inst_37130 > (0));
var state_37173__$1 = state_37173;
if(cljs.core.truth_(inst_37151)){
var statearr_37202_37241 = state_37173__$1;
(statearr_37202_37241[(1)] = (12));

} else {
var statearr_37203_37242 = state_37173__$1;
(statearr_37203_37242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37174 === (3))){
var inst_37165 = (state_37173[(2)]);
var state_37173__$1 = state_37173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37173__$1,inst_37165);
} else {
if((state_val_37174 === (12))){
var inst_37129 = (state_37173[(7)]);
var inst_37155 = cljs.core.vec.call(null,inst_37129);
var state_37173__$1 = state_37173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37173__$1,(15),out,inst_37155);
} else {
if((state_val_37174 === (2))){
var state_37173__$1 = state_37173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37173__$1,(4),ch);
} else {
if((state_val_37174 === (11))){
var inst_37145 = (state_37173[(2)]);
var inst_37146 = (new Array(n));
var inst_37129 = inst_37146;
var inst_37130 = (0);
var state_37173__$1 = (function (){var statearr_37204 = state_37173;
(statearr_37204[(7)] = inst_37129);

(statearr_37204[(8)] = inst_37130);

(statearr_37204[(10)] = inst_37145);

return statearr_37204;
})();
var statearr_37205_37248 = state_37173__$1;
(statearr_37205_37248[(2)] = null);

(statearr_37205_37248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37174 === (9))){
var inst_37129 = (state_37173[(7)]);
var inst_37143 = cljs.core.vec.call(null,inst_37129);
var state_37173__$1 = state_37173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37173__$1,(11),out,inst_37143);
} else {
if((state_val_37174 === (5))){
var inst_37138 = (state_37173[(11)]);
var inst_37129 = (state_37173[(7)]);
var inst_37130 = (state_37173[(8)]);
var inst_37133 = (state_37173[(9)]);
var inst_37137 = (inst_37129[inst_37130] = inst_37133);
var inst_37138__$1 = (inst_37130 + (1));
var inst_37139 = (inst_37138__$1 < n);
var state_37173__$1 = (function (){var statearr_37206 = state_37173;
(statearr_37206[(11)] = inst_37138__$1);

(statearr_37206[(12)] = inst_37137);

return statearr_37206;
})();
if(cljs.core.truth_(inst_37139)){
var statearr_37207_37252 = state_37173__$1;
(statearr_37207_37252[(1)] = (8));

} else {
var statearr_37208_37253 = state_37173__$1;
(statearr_37208_37253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37174 === (14))){
var inst_37160 = (state_37173[(2)]);
var inst_37161 = cljs.core.async.close_BANG_.call(null,out);
var state_37173__$1 = (function (){var statearr_37210 = state_37173;
(statearr_37210[(13)] = inst_37160);

return statearr_37210;
})();
var statearr_37211_37254 = state_37173__$1;
(statearr_37211_37254[(2)] = inst_37161);

(statearr_37211_37254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37174 === (10))){
var inst_37149 = (state_37173[(2)]);
var state_37173__$1 = state_37173;
var statearr_37212_37255 = state_37173__$1;
(statearr_37212_37255[(2)] = inst_37149);

(statearr_37212_37255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37174 === (8))){
var inst_37138 = (state_37173[(11)]);
var inst_37129 = (state_37173[(7)]);
var tmp37209 = inst_37129;
var inst_37129__$1 = tmp37209;
var inst_37130 = inst_37138;
var state_37173__$1 = (function (){var statearr_37213 = state_37173;
(statearr_37213[(7)] = inst_37129__$1);

(statearr_37213[(8)] = inst_37130);

return statearr_37213;
})();
var statearr_37214_37256 = state_37173__$1;
(statearr_37214_37256[(2)] = null);

(statearr_37214_37256[(1)] = (2));


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
});})(c__33952__auto___37221,out))
;
return ((function (switch__33607__auto__,c__33952__auto___37221,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_37215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37215[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_37215[(1)] = (1));

return statearr_37215;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_37173){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_37173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e37216){if((e37216 instanceof Object)){
var ex__33611__auto__ = e37216;
var statearr_37217_37263 = state_37173;
(statearr_37217_37263[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37264 = state_37173;
state_37173 = G__37264;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_37173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_37173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___37221,out))
})();
var state__33954__auto__ = (function (){var statearr_37218 = f__33953__auto__.call(null);
(statearr_37218[(6)] = c__33952__auto___37221);

return statearr_37218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___37221,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37266 = arguments.length;
switch (G__37266) {
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
var c__33952__auto___37382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___37382,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___37382,out){
return (function (state_37328){
var state_val_37329 = (state_37328[(1)]);
if((state_val_37329 === (7))){
var inst_37317 = (state_37328[(2)]);
var state_37328__$1 = state_37328;
var statearr_37333_37384 = state_37328__$1;
(statearr_37333_37384[(2)] = inst_37317);

(statearr_37333_37384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (1))){
var inst_37280 = [];
var inst_37281 = inst_37280;
var inst_37282 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37328__$1 = (function (){var statearr_37334 = state_37328;
(statearr_37334[(7)] = inst_37281);

(statearr_37334[(8)] = inst_37282);

return statearr_37334;
})();
var statearr_37335_37385 = state_37328__$1;
(statearr_37335_37385[(2)] = null);

(statearr_37335_37385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (4))){
var inst_37285 = (state_37328[(9)]);
var inst_37285__$1 = (state_37328[(2)]);
var inst_37286 = (inst_37285__$1 == null);
var inst_37287 = cljs.core.not.call(null,inst_37286);
var state_37328__$1 = (function (){var statearr_37339 = state_37328;
(statearr_37339[(9)] = inst_37285__$1);

return statearr_37339;
})();
if(inst_37287){
var statearr_37347_37386 = state_37328__$1;
(statearr_37347_37386[(1)] = (5));

} else {
var statearr_37348_37387 = state_37328__$1;
(statearr_37348_37387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (15))){
var inst_37311 = (state_37328[(2)]);
var state_37328__$1 = state_37328;
var statearr_37356_37389 = state_37328__$1;
(statearr_37356_37389[(2)] = inst_37311);

(statearr_37356_37389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (13))){
var state_37328__$1 = state_37328;
var statearr_37363_37394 = state_37328__$1;
(statearr_37363_37394[(2)] = null);

(statearr_37363_37394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (6))){
var inst_37281 = (state_37328[(7)]);
var inst_37306 = inst_37281.length;
var inst_37307 = (inst_37306 > (0));
var state_37328__$1 = state_37328;
if(cljs.core.truth_(inst_37307)){
var statearr_37364_37395 = state_37328__$1;
(statearr_37364_37395[(1)] = (12));

} else {
var statearr_37365_37396 = state_37328__$1;
(statearr_37365_37396[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (3))){
var inst_37322 = (state_37328[(2)]);
var state_37328__$1 = state_37328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37328__$1,inst_37322);
} else {
if((state_val_37329 === (12))){
var inst_37281 = (state_37328[(7)]);
var inst_37309 = cljs.core.vec.call(null,inst_37281);
var state_37328__$1 = state_37328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37328__$1,(15),out,inst_37309);
} else {
if((state_val_37329 === (2))){
var state_37328__$1 = state_37328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37328__$1,(4),ch);
} else {
if((state_val_37329 === (11))){
var inst_37289 = (state_37328[(10)]);
var inst_37285 = (state_37328[(9)]);
var inst_37299 = (state_37328[(2)]);
var inst_37300 = [];
var inst_37301 = inst_37300.push(inst_37285);
var inst_37281 = inst_37300;
var inst_37282 = inst_37289;
var state_37328__$1 = (function (){var statearr_37366 = state_37328;
(statearr_37366[(11)] = inst_37299);

(statearr_37366[(12)] = inst_37301);

(statearr_37366[(7)] = inst_37281);

(statearr_37366[(8)] = inst_37282);

return statearr_37366;
})();
var statearr_37367_37397 = state_37328__$1;
(statearr_37367_37397[(2)] = null);

(statearr_37367_37397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (9))){
var inst_37281 = (state_37328[(7)]);
var inst_37297 = cljs.core.vec.call(null,inst_37281);
var state_37328__$1 = state_37328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37328__$1,(11),out,inst_37297);
} else {
if((state_val_37329 === (5))){
var inst_37289 = (state_37328[(10)]);
var inst_37285 = (state_37328[(9)]);
var inst_37282 = (state_37328[(8)]);
var inst_37289__$1 = f.call(null,inst_37285);
var inst_37290 = cljs.core._EQ_.call(null,inst_37289__$1,inst_37282);
var inst_37291 = cljs.core.keyword_identical_QMARK_.call(null,inst_37282,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37292 = (inst_37290) || (inst_37291);
var state_37328__$1 = (function (){var statearr_37368 = state_37328;
(statearr_37368[(10)] = inst_37289__$1);

return statearr_37368;
})();
if(cljs.core.truth_(inst_37292)){
var statearr_37369_37398 = state_37328__$1;
(statearr_37369_37398[(1)] = (8));

} else {
var statearr_37370_37399 = state_37328__$1;
(statearr_37370_37399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (14))){
var inst_37314 = (state_37328[(2)]);
var inst_37315 = cljs.core.async.close_BANG_.call(null,out);
var state_37328__$1 = (function (){var statearr_37372 = state_37328;
(statearr_37372[(13)] = inst_37314);

return statearr_37372;
})();
var statearr_37373_37400 = state_37328__$1;
(statearr_37373_37400[(2)] = inst_37315);

(statearr_37373_37400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (10))){
var inst_37304 = (state_37328[(2)]);
var state_37328__$1 = state_37328;
var statearr_37374_37402 = state_37328__$1;
(statearr_37374_37402[(2)] = inst_37304);

(statearr_37374_37402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (8))){
var inst_37289 = (state_37328[(10)]);
var inst_37285 = (state_37328[(9)]);
var inst_37281 = (state_37328[(7)]);
var inst_37294 = inst_37281.push(inst_37285);
var tmp37371 = inst_37281;
var inst_37281__$1 = tmp37371;
var inst_37282 = inst_37289;
var state_37328__$1 = (function (){var statearr_37375 = state_37328;
(statearr_37375[(14)] = inst_37294);

(statearr_37375[(7)] = inst_37281__$1);

(statearr_37375[(8)] = inst_37282);

return statearr_37375;
})();
var statearr_37376_37405 = state_37328__$1;
(statearr_37376_37405[(2)] = null);

(statearr_37376_37405[(1)] = (2));


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
});})(c__33952__auto___37382,out))
;
return ((function (switch__33607__auto__,c__33952__auto___37382,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_37377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37377[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_37377[(1)] = (1));

return statearr_37377;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_37328){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_37328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e37378){if((e37378 instanceof Object)){
var ex__33611__auto__ = e37378;
var statearr_37379_37407 = state_37328;
(statearr_37379_37407[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37414 = state_37328;
state_37328 = G__37414;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_37328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_37328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___37382,out))
})();
var state__33954__auto__ = (function (){var statearr_37380 = f__33953__auto__.call(null);
(statearr_37380[(6)] = c__33952__auto___37382);

return statearr_37380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___37382,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510360381545
