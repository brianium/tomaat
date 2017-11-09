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
var G__33753 = arguments.length;
switch (G__33753) {
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
if(typeof cljs.core.async.t_cljs$core$async33756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33756 = (function (f,blockable,meta33757){
this.f = f;
this.blockable = blockable;
this.meta33757 = meta33757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33758,meta33757__$1){
var self__ = this;
var _33758__$1 = this;
return (new cljs.core.async.t_cljs$core$async33756(self__.f,self__.blockable,meta33757__$1));
});

cljs.core.async.t_cljs$core$async33756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33758){
var self__ = this;
var _33758__$1 = this;
return self__.meta33757;
});

cljs.core.async.t_cljs$core$async33756.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33756.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33757","meta33757",-1569541154,null)], null);
});

cljs.core.async.t_cljs$core$async33756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33756";

cljs.core.async.t_cljs$core$async33756.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async33756");
});

cljs.core.async.__GT_t_cljs$core$async33756 = (function cljs$core$async$__GT_t_cljs$core$async33756(f__$1,blockable__$1,meta33757){
return (new cljs.core.async.t_cljs$core$async33756(f__$1,blockable__$1,meta33757));
});

}

return (new cljs.core.async.t_cljs$core$async33756(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33798 = arguments.length;
switch (G__33798) {
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
var G__33810 = arguments.length;
switch (G__33810) {
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
var G__33818 = arguments.length;
switch (G__33818) {
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
var val_33833 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33833);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33833,ret){
return (function (){
return fn1.call(null,val_33833);
});})(val_33833,ret))
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
var G__33845 = arguments.length;
switch (G__33845) {
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
var n__31115__auto___33860 = n;
var x_33861 = (0);
while(true){
if((x_33861 < n__31115__auto___33860)){
(a[x_33861] = (0));

var G__33862 = (x_33861 + (1));
x_33861 = G__33862;
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

var G__33866 = (i + (1));
i = G__33866;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33873 = (function (flag,meta33874){
this.flag = flag;
this.meta33874 = meta33874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33875,meta33874__$1){
var self__ = this;
var _33875__$1 = this;
return (new cljs.core.async.t_cljs$core$async33873(self__.flag,meta33874__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33875){
var self__ = this;
var _33875__$1 = this;
return self__.meta33874;
});})(flag))
;

cljs.core.async.t_cljs$core$async33873.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33873.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33873.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33874","meta33874",1539187873,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33873";

cljs.core.async.t_cljs$core$async33873.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async33873");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33873 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33873(flag__$1,meta33874){
return (new cljs.core.async.t_cljs$core$async33873(flag__$1,meta33874));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33873(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33879 = (function (flag,cb,meta33880){
this.flag = flag;
this.cb = cb;
this.meta33880 = meta33880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33881,meta33880__$1){
var self__ = this;
var _33881__$1 = this;
return (new cljs.core.async.t_cljs$core$async33879(self__.flag,self__.cb,meta33880__$1));
});

cljs.core.async.t_cljs$core$async33879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33881){
var self__ = this;
var _33881__$1 = this;
return self__.meta33880;
});

cljs.core.async.t_cljs$core$async33879.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33879.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33879.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33879.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33880","meta33880",1871617631,null)], null);
});

cljs.core.async.t_cljs$core$async33879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33879";

cljs.core.async.t_cljs$core$async33879.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async33879");
});

cljs.core.async.__GT_t_cljs$core$async33879 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33879(flag__$1,cb__$1,meta33880){
return (new cljs.core.async.t_cljs$core$async33879(flag__$1,cb__$1,meta33880));
});

}

return (new cljs.core.async.t_cljs$core$async33879(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33886_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33886_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33887_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33887_SHARP_,port], null));
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
var G__33891 = (i + (1));
i = G__33891;
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
var len__31349__auto___33910 = arguments.length;
var i__31350__auto___33911 = (0);
while(true){
if((i__31350__auto___33911 < len__31349__auto___33910)){
args__31356__auto__.push((arguments[i__31350__auto___33911]));

var G__33912 = (i__31350__auto___33911 + (1));
i__31350__auto___33911 = G__33912;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33904){
var map__33905 = p__33904;
var map__33905__$1 = ((((!((map__33905 == null)))?((((map__33905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33905):map__33905);
var opts = map__33905__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33902){
var G__33903 = cljs.core.first.call(null,seq33902);
var seq33902__$1 = cljs.core.next.call(null,seq33902);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33903,seq33902__$1);
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
var G__33920 = arguments.length;
switch (G__33920) {
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
var c__33665__auto___34001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___34001){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___34001){
return (function (state_33957){
var state_val_33958 = (state_33957[(1)]);
if((state_val_33958 === (7))){
var inst_33952 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
var statearr_33961_34004 = state_33957__$1;
(statearr_33961_34004[(2)] = inst_33952);

(statearr_33961_34004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (1))){
var state_33957__$1 = state_33957;
var statearr_33962_34005 = state_33957__$1;
(statearr_33962_34005[(2)] = null);

(statearr_33962_34005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (4))){
var inst_33933 = (state_33957[(7)]);
var inst_33933__$1 = (state_33957[(2)]);
var inst_33934 = (inst_33933__$1 == null);
var state_33957__$1 = (function (){var statearr_33968 = state_33957;
(statearr_33968[(7)] = inst_33933__$1);

return statearr_33968;
})();
if(cljs.core.truth_(inst_33934)){
var statearr_33969_34009 = state_33957__$1;
(statearr_33969_34009[(1)] = (5));

} else {
var statearr_33970_34010 = state_33957__$1;
(statearr_33970_34010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (13))){
var state_33957__$1 = state_33957;
var statearr_33974_34011 = state_33957__$1;
(statearr_33974_34011[(2)] = null);

(statearr_33974_34011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (6))){
var inst_33933 = (state_33957[(7)]);
var state_33957__$1 = state_33957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33957__$1,(11),to,inst_33933);
} else {
if((state_val_33958 === (3))){
var inst_33955 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33957__$1,inst_33955);
} else {
if((state_val_33958 === (12))){
var state_33957__$1 = state_33957;
var statearr_33976_34014 = state_33957__$1;
(statearr_33976_34014[(2)] = null);

(statearr_33976_34014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (2))){
var state_33957__$1 = state_33957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33957__$1,(4),from);
} else {
if((state_val_33958 === (11))){
var inst_33944 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
if(cljs.core.truth_(inst_33944)){
var statearr_33977_34017 = state_33957__$1;
(statearr_33977_34017[(1)] = (12));

} else {
var statearr_33978_34019 = state_33957__$1;
(statearr_33978_34019[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (9))){
var state_33957__$1 = state_33957;
var statearr_33981_34020 = state_33957__$1;
(statearr_33981_34020[(2)] = null);

(statearr_33981_34020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (5))){
var state_33957__$1 = state_33957;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33982_34022 = state_33957__$1;
(statearr_33982_34022[(1)] = (8));

} else {
var statearr_33983_34023 = state_33957__$1;
(statearr_33983_34023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (14))){
var inst_33950 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
var statearr_33984_34026 = state_33957__$1;
(statearr_33984_34026[(2)] = inst_33950);

(statearr_33984_34026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (10))){
var inst_33941 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
var statearr_33986_34028 = state_33957__$1;
(statearr_33986_34028[(2)] = inst_33941);

(statearr_33986_34028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (8))){
var inst_33938 = cljs.core.async.close_BANG_.call(null,to);
var state_33957__$1 = state_33957;
var statearr_33987_34029 = state_33957__$1;
(statearr_33987_34029[(2)] = inst_33938);

(statearr_33987_34029[(1)] = (10));


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
});})(c__33665__auto___34001))
;
return ((function (switch__33280__auto__,c__33665__auto___34001){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_33988 = [null,null,null,null,null,null,null,null];
(statearr_33988[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_33988[(1)] = (1));

return statearr_33988;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_33957){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_33957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e33989){if((e33989 instanceof Object)){
var ex__33284__auto__ = e33989;
var statearr_33991_34034 = state_33957;
(statearr_33991_34034[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34035 = state_33957;
state_33957 = G__34035;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_33957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_33957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___34001))
})();
var state__33667__auto__ = (function (){var statearr_33992 = f__33666__auto__.call(null);
(statearr_33992[(6)] = c__33665__auto___34001);

return statearr_33992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___34001))
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
return (function (p__34041){
var vec__34042 = p__34041;
var v = cljs.core.nth.call(null,vec__34042,(0),null);
var p = cljs.core.nth.call(null,vec__34042,(1),null);
var job = vec__34042;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33665__auto___34274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___34274,res,vec__34042,v,p,job,jobs,results){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___34274,res,vec__34042,v,p,job,jobs,results){
return (function (state_34050){
var state_val_34051 = (state_34050[(1)]);
if((state_val_34051 === (1))){
var state_34050__$1 = state_34050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34050__$1,(2),res,v);
} else {
if((state_val_34051 === (2))){
var inst_34047 = (state_34050[(2)]);
var inst_34048 = cljs.core.async.close_BANG_.call(null,res);
var state_34050__$1 = (function (){var statearr_34053 = state_34050;
(statearr_34053[(7)] = inst_34047);

return statearr_34053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34050__$1,inst_34048);
} else {
return null;
}
}
});})(c__33665__auto___34274,res,vec__34042,v,p,job,jobs,results))
;
return ((function (switch__33280__auto__,c__33665__auto___34274,res,vec__34042,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_34056 = [null,null,null,null,null,null,null,null];
(statearr_34056[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_34056[(1)] = (1));

return statearr_34056;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_34050){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_34050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e34057){if((e34057 instanceof Object)){
var ex__33284__auto__ = e34057;
var statearr_34058_34279 = state_34050;
(statearr_34058_34279[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34281 = state_34050;
state_34050 = G__34281;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_34050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_34050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___34274,res,vec__34042,v,p,job,jobs,results))
})();
var state__33667__auto__ = (function (){var statearr_34059 = f__33666__auto__.call(null);
(statearr_34059[(6)] = c__33665__auto___34274);

return statearr_34059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___34274,res,vec__34042,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34061){
var vec__34062 = p__34061;
var v = cljs.core.nth.call(null,vec__34062,(0),null);
var p = cljs.core.nth.call(null,vec__34062,(1),null);
var job = vec__34062;
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
var n__31115__auto___34295 = n;
var __34296 = (0);
while(true){
if((__34296 < n__31115__auto___34295)){
var G__34065_34297 = type;
var G__34065_34298__$1 = (((G__34065_34297 instanceof cljs.core.Keyword))?G__34065_34297.fqn:null);
switch (G__34065_34298__$1) {
case "compute":
var c__33665__auto___34300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34296,c__33665__auto___34300,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (__34296,c__33665__auto___34300,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async){
return (function (state_34081){
var state_val_34082 = (state_34081[(1)]);
if((state_val_34082 === (1))){
var state_34081__$1 = state_34081;
var statearr_34083_34305 = state_34081__$1;
(statearr_34083_34305[(2)] = null);

(statearr_34083_34305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (2))){
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34081__$1,(4),jobs);
} else {
if((state_val_34082 === (3))){
var inst_34078 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34081__$1,inst_34078);
} else {
if((state_val_34082 === (4))){
var inst_34070 = (state_34081[(2)]);
var inst_34071 = process.call(null,inst_34070);
var state_34081__$1 = state_34081;
if(cljs.core.truth_(inst_34071)){
var statearr_34084_34307 = state_34081__$1;
(statearr_34084_34307[(1)] = (5));

} else {
var statearr_34086_34308 = state_34081__$1;
(statearr_34086_34308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (5))){
var state_34081__$1 = state_34081;
var statearr_34087_34309 = state_34081__$1;
(statearr_34087_34309[(2)] = null);

(statearr_34087_34309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (6))){
var state_34081__$1 = state_34081;
var statearr_34088_34312 = state_34081__$1;
(statearr_34088_34312[(2)] = null);

(statearr_34088_34312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (7))){
var inst_34076 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34093_34314 = state_34081__$1;
(statearr_34093_34314[(2)] = inst_34076);

(statearr_34093_34314[(1)] = (3));


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
});})(__34296,c__33665__auto___34300,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async))
;
return ((function (__34296,switch__33280__auto__,c__33665__auto___34300,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_34096 = [null,null,null,null,null,null,null];
(statearr_34096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_34096[(1)] = (1));

return statearr_34096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_34081){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_34081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e34099){if((e34099 instanceof Object)){
var ex__33284__auto__ = e34099;
var statearr_34100_34321 = state_34081;
(statearr_34100_34321[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34323 = state_34081;
state_34081 = G__34323;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_34081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_34081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(__34296,switch__33280__auto__,c__33665__auto___34300,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_34101 = f__33666__auto__.call(null);
(statearr_34101[(6)] = c__33665__auto___34300);

return statearr_34101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(__34296,c__33665__auto___34300,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async))
);


break;
case "async":
var c__33665__auto___34328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34296,c__33665__auto___34328,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (__34296,c__33665__auto___34328,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async){
return (function (state_34115){
var state_val_34116 = (state_34115[(1)]);
if((state_val_34116 === (1))){
var state_34115__$1 = state_34115;
var statearr_34119_34331 = state_34115__$1;
(statearr_34119_34331[(2)] = null);

(statearr_34119_34331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (2))){
var state_34115__$1 = state_34115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34115__$1,(4),jobs);
} else {
if((state_val_34116 === (3))){
var inst_34113 = (state_34115[(2)]);
var state_34115__$1 = state_34115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34115__$1,inst_34113);
} else {
if((state_val_34116 === (4))){
var inst_34105 = (state_34115[(2)]);
var inst_34106 = async.call(null,inst_34105);
var state_34115__$1 = state_34115;
if(cljs.core.truth_(inst_34106)){
var statearr_34120_34333 = state_34115__$1;
(statearr_34120_34333[(1)] = (5));

} else {
var statearr_34121_34334 = state_34115__$1;
(statearr_34121_34334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (5))){
var state_34115__$1 = state_34115;
var statearr_34124_34335 = state_34115__$1;
(statearr_34124_34335[(2)] = null);

(statearr_34124_34335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (6))){
var state_34115__$1 = state_34115;
var statearr_34126_34337 = state_34115__$1;
(statearr_34126_34337[(2)] = null);

(statearr_34126_34337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (7))){
var inst_34111 = (state_34115[(2)]);
var state_34115__$1 = state_34115;
var statearr_34128_34338 = state_34115__$1;
(statearr_34128_34338[(2)] = inst_34111);

(statearr_34128_34338[(1)] = (3));


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
});})(__34296,c__33665__auto___34328,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async))
;
return ((function (__34296,switch__33280__auto__,c__33665__auto___34328,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_34130 = [null,null,null,null,null,null,null];
(statearr_34130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_34130[(1)] = (1));

return statearr_34130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_34115){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_34115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e34131){if((e34131 instanceof Object)){
var ex__33284__auto__ = e34131;
var statearr_34132_34342 = state_34115;
(statearr_34132_34342[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34343 = state_34115;
state_34115 = G__34343;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_34115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_34115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(__34296,switch__33280__auto__,c__33665__auto___34328,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_34134 = f__33666__auto__.call(null);
(statearr_34134[(6)] = c__33665__auto___34328);

return statearr_34134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(__34296,c__33665__auto___34328,G__34065_34297,G__34065_34298__$1,n__31115__auto___34295,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34065_34298__$1)].join('')));

}

var G__34345 = (__34296 + (1));
__34296 = G__34345;
continue;
} else {
}
break;
}

var c__33665__auto___34346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___34346,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___34346,jobs,results,process,async){
return (function (state_34159){
var state_val_34160 = (state_34159[(1)]);
if((state_val_34160 === (1))){
var state_34159__$1 = state_34159;
var statearr_34165_34347 = state_34159__$1;
(statearr_34165_34347[(2)] = null);

(statearr_34165_34347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (2))){
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34159__$1,(4),from);
} else {
if((state_val_34160 === (3))){
var inst_34157 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34159__$1,inst_34157);
} else {
if((state_val_34160 === (4))){
var inst_34137 = (state_34159[(7)]);
var inst_34137__$1 = (state_34159[(2)]);
var inst_34138 = (inst_34137__$1 == null);
var state_34159__$1 = (function (){var statearr_34168 = state_34159;
(statearr_34168[(7)] = inst_34137__$1);

return statearr_34168;
})();
if(cljs.core.truth_(inst_34138)){
var statearr_34169_34348 = state_34159__$1;
(statearr_34169_34348[(1)] = (5));

} else {
var statearr_34170_34349 = state_34159__$1;
(statearr_34170_34349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (5))){
var inst_34141 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34159__$1 = state_34159;
var statearr_34172_34350 = state_34159__$1;
(statearr_34172_34350[(2)] = inst_34141);

(statearr_34172_34350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (6))){
var inst_34144 = (state_34159[(8)]);
var inst_34137 = (state_34159[(7)]);
var inst_34144__$1 = cljs.core.async.chan.call(null,(1));
var inst_34146 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34147 = [inst_34137,inst_34144__$1];
var inst_34148 = (new cljs.core.PersistentVector(null,2,(5),inst_34146,inst_34147,null));
var state_34159__$1 = (function (){var statearr_34173 = state_34159;
(statearr_34173[(8)] = inst_34144__$1);

return statearr_34173;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34159__$1,(8),jobs,inst_34148);
} else {
if((state_val_34160 === (7))){
var inst_34155 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34174_34351 = state_34159__$1;
(statearr_34174_34351[(2)] = inst_34155);

(statearr_34174_34351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (8))){
var inst_34144 = (state_34159[(8)]);
var inst_34150 = (state_34159[(2)]);
var state_34159__$1 = (function (){var statearr_34177 = state_34159;
(statearr_34177[(9)] = inst_34150);

return statearr_34177;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34159__$1,(9),results,inst_34144);
} else {
if((state_val_34160 === (9))){
var inst_34152 = (state_34159[(2)]);
var state_34159__$1 = (function (){var statearr_34178 = state_34159;
(statearr_34178[(10)] = inst_34152);

return statearr_34178;
})();
var statearr_34179_34352 = state_34159__$1;
(statearr_34179_34352[(2)] = null);

(statearr_34179_34352[(1)] = (2));


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
});})(c__33665__auto___34346,jobs,results,process,async))
;
return ((function (switch__33280__auto__,c__33665__auto___34346,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_34182 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_34182[(1)] = (1));

return statearr_34182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_34159){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_34159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e34184){if((e34184 instanceof Object)){
var ex__33284__auto__ = e34184;
var statearr_34186_34355 = state_34159;
(statearr_34186_34355[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34356 = state_34159;
state_34159 = G__34356;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_34159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_34159);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___34346,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_34187 = f__33666__auto__.call(null);
(statearr_34187[(6)] = c__33665__auto___34346);

return statearr_34187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___34346,jobs,results,process,async))
);


var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__,jobs,results,process,async){
return (function (state_34229){
var state_val_34230 = (state_34229[(1)]);
if((state_val_34230 === (7))){
var inst_34224 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
var statearr_34233_34357 = state_34229__$1;
(statearr_34233_34357[(2)] = inst_34224);

(statearr_34233_34357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (20))){
var state_34229__$1 = state_34229;
var statearr_34235_34358 = state_34229__$1;
(statearr_34235_34358[(2)] = null);

(statearr_34235_34358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (1))){
var state_34229__$1 = state_34229;
var statearr_34236_34359 = state_34229__$1;
(statearr_34236_34359[(2)] = null);

(statearr_34236_34359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (4))){
var inst_34190 = (state_34229[(7)]);
var inst_34190__$1 = (state_34229[(2)]);
var inst_34191 = (inst_34190__$1 == null);
var state_34229__$1 = (function (){var statearr_34237 = state_34229;
(statearr_34237[(7)] = inst_34190__$1);

return statearr_34237;
})();
if(cljs.core.truth_(inst_34191)){
var statearr_34238_34360 = state_34229__$1;
(statearr_34238_34360[(1)] = (5));

} else {
var statearr_34239_34361 = state_34229__$1;
(statearr_34239_34361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (15))){
var inst_34206 = (state_34229[(8)]);
var state_34229__$1 = state_34229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34229__$1,(18),to,inst_34206);
} else {
if((state_val_34230 === (21))){
var inst_34219 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
var statearr_34241_34362 = state_34229__$1;
(statearr_34241_34362[(2)] = inst_34219);

(statearr_34241_34362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (13))){
var inst_34221 = (state_34229[(2)]);
var state_34229__$1 = (function (){var statearr_34242 = state_34229;
(statearr_34242[(9)] = inst_34221);

return statearr_34242;
})();
var statearr_34243_34363 = state_34229__$1;
(statearr_34243_34363[(2)] = null);

(statearr_34243_34363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (6))){
var inst_34190 = (state_34229[(7)]);
var state_34229__$1 = state_34229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34229__$1,(11),inst_34190);
} else {
if((state_val_34230 === (17))){
var inst_34214 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
if(cljs.core.truth_(inst_34214)){
var statearr_34247_34364 = state_34229__$1;
(statearr_34247_34364[(1)] = (19));

} else {
var statearr_34248_34365 = state_34229__$1;
(statearr_34248_34365[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (3))){
var inst_34226 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34229__$1,inst_34226);
} else {
if((state_val_34230 === (12))){
var inst_34203 = (state_34229[(10)]);
var state_34229__$1 = state_34229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34229__$1,(14),inst_34203);
} else {
if((state_val_34230 === (2))){
var state_34229__$1 = state_34229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34229__$1,(4),results);
} else {
if((state_val_34230 === (19))){
var state_34229__$1 = state_34229;
var statearr_34249_34368 = state_34229__$1;
(statearr_34249_34368[(2)] = null);

(statearr_34249_34368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (11))){
var inst_34203 = (state_34229[(2)]);
var state_34229__$1 = (function (){var statearr_34250 = state_34229;
(statearr_34250[(10)] = inst_34203);

return statearr_34250;
})();
var statearr_34251_34369 = state_34229__$1;
(statearr_34251_34369[(2)] = null);

(statearr_34251_34369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (9))){
var state_34229__$1 = state_34229;
var statearr_34252_34370 = state_34229__$1;
(statearr_34252_34370[(2)] = null);

(statearr_34252_34370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (5))){
var state_34229__$1 = state_34229;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34254_34371 = state_34229__$1;
(statearr_34254_34371[(1)] = (8));

} else {
var statearr_34255_34372 = state_34229__$1;
(statearr_34255_34372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (14))){
var inst_34206 = (state_34229[(8)]);
var inst_34208 = (state_34229[(11)]);
var inst_34206__$1 = (state_34229[(2)]);
var inst_34207 = (inst_34206__$1 == null);
var inst_34208__$1 = cljs.core.not.call(null,inst_34207);
var state_34229__$1 = (function (){var statearr_34256 = state_34229;
(statearr_34256[(8)] = inst_34206__$1);

(statearr_34256[(11)] = inst_34208__$1);

return statearr_34256;
})();
if(inst_34208__$1){
var statearr_34257_34373 = state_34229__$1;
(statearr_34257_34373[(1)] = (15));

} else {
var statearr_34258_34375 = state_34229__$1;
(statearr_34258_34375[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (16))){
var inst_34208 = (state_34229[(11)]);
var state_34229__$1 = state_34229;
var statearr_34259_34377 = state_34229__$1;
(statearr_34259_34377[(2)] = inst_34208);

(statearr_34259_34377[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (10))){
var inst_34199 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
var statearr_34260_34380 = state_34229__$1;
(statearr_34260_34380[(2)] = inst_34199);

(statearr_34260_34380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (18))){
var inst_34211 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
var statearr_34261_34381 = state_34229__$1;
(statearr_34261_34381[(2)] = inst_34211);

(statearr_34261_34381[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (8))){
var inst_34195 = cljs.core.async.close_BANG_.call(null,to);
var state_34229__$1 = state_34229;
var statearr_34262_34382 = state_34229__$1;
(statearr_34262_34382[(2)] = inst_34195);

(statearr_34262_34382[(1)] = (10));


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
var statearr_34266 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_34266[(1)] = (1));

return statearr_34266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_34229){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_34229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e34267){if((e34267 instanceof Object)){
var ex__33284__auto__ = e34267;
var statearr_34268_34385 = state_34229;
(statearr_34268_34385[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34389 = state_34229;
state_34229 = G__34389;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_34229){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_34229);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_34269 = f__33666__auto__.call(null);
(statearr_34269[(6)] = c__33665__auto__);

return statearr_34269;
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
var G__34391 = arguments.length;
switch (G__34391) {
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
var G__34394 = arguments.length;
switch (G__34394) {
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
var G__34403 = arguments.length;
switch (G__34403) {
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
var c__33665__auto___34470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___34470,tc,fc){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___34470,tc,fc){
return (function (state_34429){
var state_val_34430 = (state_34429[(1)]);
if((state_val_34430 === (7))){
var inst_34425 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
var statearr_34432_34471 = state_34429__$1;
(statearr_34432_34471[(2)] = inst_34425);

(statearr_34432_34471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (1))){
var state_34429__$1 = state_34429;
var statearr_34434_34472 = state_34429__$1;
(statearr_34434_34472[(2)] = null);

(statearr_34434_34472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (4))){
var inst_34406 = (state_34429[(7)]);
var inst_34406__$1 = (state_34429[(2)]);
var inst_34407 = (inst_34406__$1 == null);
var state_34429__$1 = (function (){var statearr_34435 = state_34429;
(statearr_34435[(7)] = inst_34406__$1);

return statearr_34435;
})();
if(cljs.core.truth_(inst_34407)){
var statearr_34436_34477 = state_34429__$1;
(statearr_34436_34477[(1)] = (5));

} else {
var statearr_34437_34478 = state_34429__$1;
(statearr_34437_34478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (13))){
var state_34429__$1 = state_34429;
var statearr_34439_34479 = state_34429__$1;
(statearr_34439_34479[(2)] = null);

(statearr_34439_34479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (6))){
var inst_34406 = (state_34429[(7)]);
var inst_34412 = p.call(null,inst_34406);
var state_34429__$1 = state_34429;
if(cljs.core.truth_(inst_34412)){
var statearr_34440_34480 = state_34429__$1;
(statearr_34440_34480[(1)] = (9));

} else {
var statearr_34441_34481 = state_34429__$1;
(statearr_34441_34481[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (3))){
var inst_34427 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34429__$1,inst_34427);
} else {
if((state_val_34430 === (12))){
var state_34429__$1 = state_34429;
var statearr_34446_34482 = state_34429__$1;
(statearr_34446_34482[(2)] = null);

(statearr_34446_34482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (2))){
var state_34429__$1 = state_34429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34429__$1,(4),ch);
} else {
if((state_val_34430 === (11))){
var inst_34406 = (state_34429[(7)]);
var inst_34416 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34429__$1,(8),inst_34416,inst_34406);
} else {
if((state_val_34430 === (9))){
var state_34429__$1 = state_34429;
var statearr_34447_34483 = state_34429__$1;
(statearr_34447_34483[(2)] = tc);

(statearr_34447_34483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (5))){
var inst_34409 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34410 = cljs.core.async.close_BANG_.call(null,fc);
var state_34429__$1 = (function (){var statearr_34452 = state_34429;
(statearr_34452[(8)] = inst_34409);

return statearr_34452;
})();
var statearr_34453_34486 = state_34429__$1;
(statearr_34453_34486[(2)] = inst_34410);

(statearr_34453_34486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (14))){
var inst_34423 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
var statearr_34454_34487 = state_34429__$1;
(statearr_34454_34487[(2)] = inst_34423);

(statearr_34454_34487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (10))){
var state_34429__$1 = state_34429;
var statearr_34455_34488 = state_34429__$1;
(statearr_34455_34488[(2)] = fc);

(statearr_34455_34488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (8))){
var inst_34418 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
if(cljs.core.truth_(inst_34418)){
var statearr_34456_34490 = state_34429__$1;
(statearr_34456_34490[(1)] = (12));

} else {
var statearr_34457_34491 = state_34429__$1;
(statearr_34457_34491[(1)] = (13));

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
});})(c__33665__auto___34470,tc,fc))
;
return ((function (switch__33280__auto__,c__33665__auto___34470,tc,fc){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_34459 = [null,null,null,null,null,null,null,null,null];
(statearr_34459[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_34459[(1)] = (1));

return statearr_34459;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_34429){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_34429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e34461){if((e34461 instanceof Object)){
var ex__33284__auto__ = e34461;
var statearr_34462_34493 = state_34429;
(statearr_34462_34493[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34494 = state_34429;
state_34429 = G__34494;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_34429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_34429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___34470,tc,fc))
})();
var state__33667__auto__ = (function (){var statearr_34464 = f__33666__auto__.call(null);
(statearr_34464[(6)] = c__33665__auto___34470);

return statearr_34464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___34470,tc,fc))
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
return (function (state_34519){
var state_val_34520 = (state_34519[(1)]);
if((state_val_34520 === (7))){
var inst_34515 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34521_34544 = state_34519__$1;
(statearr_34521_34544[(2)] = inst_34515);

(statearr_34521_34544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (1))){
var inst_34498 = init;
var state_34519__$1 = (function (){var statearr_34522 = state_34519;
(statearr_34522[(7)] = inst_34498);

return statearr_34522;
})();
var statearr_34523_34545 = state_34519__$1;
(statearr_34523_34545[(2)] = null);

(statearr_34523_34545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (4))){
var inst_34502 = (state_34519[(8)]);
var inst_34502__$1 = (state_34519[(2)]);
var inst_34503 = (inst_34502__$1 == null);
var state_34519__$1 = (function (){var statearr_34524 = state_34519;
(statearr_34524[(8)] = inst_34502__$1);

return statearr_34524;
})();
if(cljs.core.truth_(inst_34503)){
var statearr_34525_34549 = state_34519__$1;
(statearr_34525_34549[(1)] = (5));

} else {
var statearr_34526_34550 = state_34519__$1;
(statearr_34526_34550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (6))){
var inst_34498 = (state_34519[(7)]);
var inst_34506 = (state_34519[(9)]);
var inst_34502 = (state_34519[(8)]);
var inst_34506__$1 = f.call(null,inst_34498,inst_34502);
var inst_34507 = cljs.core.reduced_QMARK_.call(null,inst_34506__$1);
var state_34519__$1 = (function (){var statearr_34528 = state_34519;
(statearr_34528[(9)] = inst_34506__$1);

return statearr_34528;
})();
if(inst_34507){
var statearr_34529_34552 = state_34519__$1;
(statearr_34529_34552[(1)] = (8));

} else {
var statearr_34530_34553 = state_34519__$1;
(statearr_34530_34553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (3))){
var inst_34517 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34519__$1,inst_34517);
} else {
if((state_val_34520 === (2))){
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(4),ch);
} else {
if((state_val_34520 === (9))){
var inst_34506 = (state_34519[(9)]);
var inst_34498 = inst_34506;
var state_34519__$1 = (function (){var statearr_34533 = state_34519;
(statearr_34533[(7)] = inst_34498);

return statearr_34533;
})();
var statearr_34534_34558 = state_34519__$1;
(statearr_34534_34558[(2)] = null);

(statearr_34534_34558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (5))){
var inst_34498 = (state_34519[(7)]);
var state_34519__$1 = state_34519;
var statearr_34535_34559 = state_34519__$1;
(statearr_34535_34559[(2)] = inst_34498);

(statearr_34535_34559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (10))){
var inst_34513 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34536_34566 = state_34519__$1;
(statearr_34536_34566[(2)] = inst_34513);

(statearr_34536_34566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (8))){
var inst_34506 = (state_34519[(9)]);
var inst_34509 = cljs.core.deref.call(null,inst_34506);
var state_34519__$1 = state_34519;
var statearr_34537_34568 = state_34519__$1;
(statearr_34537_34568[(2)] = inst_34509);

(statearr_34537_34568[(1)] = (10));


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
var statearr_34538 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34538[(0)] = cljs$core$async$reduce_$_state_machine__33281__auto__);

(statearr_34538[(1)] = (1));

return statearr_34538;
});
var cljs$core$async$reduce_$_state_machine__33281__auto____1 = (function (state_34519){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_34519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e34539){if((e34539 instanceof Object)){
var ex__33284__auto__ = e34539;
var statearr_34540_34569 = state_34519;
(statearr_34540_34569[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34571 = state_34519;
state_34519 = G__34571;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33281__auto__ = function(state_34519){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33281__auto____1.call(this,state_34519);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33281__auto____0;
cljs$core$async$reduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33281__auto____1;
return cljs$core$async$reduce_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_34541 = f__33666__auto__.call(null);
(statearr_34541[(6)] = c__33665__auto__);

return statearr_34541;
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
return (function (state_34577){
var state_val_34578 = (state_34577[(1)]);
if((state_val_34578 === (1))){
var inst_34572 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34577__$1 = state_34577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34577__$1,(2),inst_34572);
} else {
if((state_val_34578 === (2))){
var inst_34574 = (state_34577[(2)]);
var inst_34575 = f__$1.call(null,inst_34574);
var state_34577__$1 = state_34577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34577__$1,inst_34575);
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
var statearr_34579 = [null,null,null,null,null,null,null];
(statearr_34579[(0)] = cljs$core$async$transduce_$_state_machine__33281__auto__);

(statearr_34579[(1)] = (1));

return statearr_34579;
});
var cljs$core$async$transduce_$_state_machine__33281__auto____1 = (function (state_34577){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_34577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e34580){if((e34580 instanceof Object)){
var ex__33284__auto__ = e34580;
var statearr_34581_34590 = state_34577;
(statearr_34581_34590[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34591 = state_34577;
state_34577 = G__34591;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33281__auto__ = function(state_34577){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33281__auto____1.call(this,state_34577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33281__auto____0;
cljs$core$async$transduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33281__auto____1;
return cljs$core$async$transduce_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,f__$1))
})();
var state__33667__auto__ = (function (){var statearr_34583 = f__33666__auto__.call(null);
(statearr_34583[(6)] = c__33665__auto__);

return statearr_34583;
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
var G__34593 = arguments.length;
switch (G__34593) {
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
return (function (state_34621){
var state_val_34622 = (state_34621[(1)]);
if((state_val_34622 === (7))){
var inst_34602 = (state_34621[(2)]);
var state_34621__$1 = state_34621;
var statearr_34623_34667 = state_34621__$1;
(statearr_34623_34667[(2)] = inst_34602);

(statearr_34623_34667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (1))){
var inst_34596 = cljs.core.seq.call(null,coll);
var inst_34597 = inst_34596;
var state_34621__$1 = (function (){var statearr_34624 = state_34621;
(statearr_34624[(7)] = inst_34597);

return statearr_34624;
})();
var statearr_34629_34678 = state_34621__$1;
(statearr_34629_34678[(2)] = null);

(statearr_34629_34678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (4))){
var inst_34597 = (state_34621[(7)]);
var inst_34600 = cljs.core.first.call(null,inst_34597);
var state_34621__$1 = state_34621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34621__$1,(7),ch,inst_34600);
} else {
if((state_val_34622 === (13))){
var inst_34615 = (state_34621[(2)]);
var state_34621__$1 = state_34621;
var statearr_34630_34681 = state_34621__$1;
(statearr_34630_34681[(2)] = inst_34615);

(statearr_34630_34681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (6))){
var inst_34605 = (state_34621[(2)]);
var state_34621__$1 = state_34621;
if(cljs.core.truth_(inst_34605)){
var statearr_34631_34686 = state_34621__$1;
(statearr_34631_34686[(1)] = (8));

} else {
var statearr_34632_34688 = state_34621__$1;
(statearr_34632_34688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (3))){
var inst_34619 = (state_34621[(2)]);
var state_34621__$1 = state_34621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34621__$1,inst_34619);
} else {
if((state_val_34622 === (12))){
var state_34621__$1 = state_34621;
var statearr_34636_34689 = state_34621__$1;
(statearr_34636_34689[(2)] = null);

(statearr_34636_34689[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (2))){
var inst_34597 = (state_34621[(7)]);
var state_34621__$1 = state_34621;
if(cljs.core.truth_(inst_34597)){
var statearr_34637_34690 = state_34621__$1;
(statearr_34637_34690[(1)] = (4));

} else {
var statearr_34638_34691 = state_34621__$1;
(statearr_34638_34691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (11))){
var inst_34612 = cljs.core.async.close_BANG_.call(null,ch);
var state_34621__$1 = state_34621;
var statearr_34639_34693 = state_34621__$1;
(statearr_34639_34693[(2)] = inst_34612);

(statearr_34639_34693[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (9))){
var state_34621__$1 = state_34621;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34640_34696 = state_34621__$1;
(statearr_34640_34696[(1)] = (11));

} else {
var statearr_34641_34697 = state_34621__$1;
(statearr_34641_34697[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (5))){
var inst_34597 = (state_34621[(7)]);
var state_34621__$1 = state_34621;
var statearr_34642_34698 = state_34621__$1;
(statearr_34642_34698[(2)] = inst_34597);

(statearr_34642_34698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (10))){
var inst_34617 = (state_34621[(2)]);
var state_34621__$1 = state_34621;
var statearr_34643_34701 = state_34621__$1;
(statearr_34643_34701[(2)] = inst_34617);

(statearr_34643_34701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34622 === (8))){
var inst_34597 = (state_34621[(7)]);
var inst_34608 = cljs.core.next.call(null,inst_34597);
var inst_34597__$1 = inst_34608;
var state_34621__$1 = (function (){var statearr_34644 = state_34621;
(statearr_34644[(7)] = inst_34597__$1);

return statearr_34644;
})();
var statearr_34645_34707 = state_34621__$1;
(statearr_34645_34707[(2)] = null);

(statearr_34645_34707[(1)] = (2));


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
var statearr_34646 = [null,null,null,null,null,null,null,null];
(statearr_34646[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_34646[(1)] = (1));

return statearr_34646;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_34621){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_34621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e34649){if((e34649 instanceof Object)){
var ex__33284__auto__ = e34649;
var statearr_34650_34712 = state_34621;
(statearr_34650_34712[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34714 = state_34621;
state_34621 = G__34714;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_34621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_34621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_34651 = f__33666__auto__.call(null);
(statearr_34651[(6)] = c__33665__auto__);

return statearr_34651;
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
if(typeof cljs.core.async.t_cljs$core$async34749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34749 = (function (ch,cs,meta34750){
this.ch = ch;
this.cs = cs;
this.meta34750 = meta34750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34751,meta34750__$1){
var self__ = this;
var _34751__$1 = this;
return (new cljs.core.async.t_cljs$core$async34749(self__.ch,self__.cs,meta34750__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34751){
var self__ = this;
var _34751__$1 = this;
return self__.meta34750;
});})(cs))
;

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34749.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34750","meta34750",532765765,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34749";

cljs.core.async.t_cljs$core$async34749.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async34749");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34749 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34749(ch__$1,cs__$1,meta34750){
return (new cljs.core.async.t_cljs$core$async34749(ch__$1,cs__$1,meta34750));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34749(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33665__auto___35148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___35148,cs,m,dchan,dctr,done){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___35148,cs,m,dchan,dctr,done){
return (function (state_34917){
var state_val_34918 = (state_34917[(1)]);
if((state_val_34918 === (7))){
var inst_34913 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34926_35149 = state_34917__$1;
(statearr_34926_35149[(2)] = inst_34913);

(statearr_34926_35149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (20))){
var inst_34806 = (state_34917[(7)]);
var inst_34828 = cljs.core.first.call(null,inst_34806);
var inst_34829 = cljs.core.nth.call(null,inst_34828,(0),null);
var inst_34830 = cljs.core.nth.call(null,inst_34828,(1),null);
var state_34917__$1 = (function (){var statearr_34929 = state_34917;
(statearr_34929[(8)] = inst_34829);

return statearr_34929;
})();
if(cljs.core.truth_(inst_34830)){
var statearr_34932_35154 = state_34917__$1;
(statearr_34932_35154[(1)] = (22));

} else {
var statearr_34933_35155 = state_34917__$1;
(statearr_34933_35155[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (27))){
var inst_34858 = (state_34917[(9)]);
var inst_34865 = (state_34917[(10)]);
var inst_34767 = (state_34917[(11)]);
var inst_34860 = (state_34917[(12)]);
var inst_34865__$1 = cljs.core._nth.call(null,inst_34858,inst_34860);
var inst_34866 = cljs.core.async.put_BANG_.call(null,inst_34865__$1,inst_34767,done);
var state_34917__$1 = (function (){var statearr_34934 = state_34917;
(statearr_34934[(10)] = inst_34865__$1);

return statearr_34934;
})();
if(cljs.core.truth_(inst_34866)){
var statearr_34935_35158 = state_34917__$1;
(statearr_34935_35158[(1)] = (30));

} else {
var statearr_34940_35159 = state_34917__$1;
(statearr_34940_35159[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (1))){
var state_34917__$1 = state_34917;
var statearr_34941_35160 = state_34917__$1;
(statearr_34941_35160[(2)] = null);

(statearr_34941_35160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (24))){
var inst_34806 = (state_34917[(7)]);
var inst_34835 = (state_34917[(2)]);
var inst_34836 = cljs.core.next.call(null,inst_34806);
var inst_34777 = inst_34836;
var inst_34778 = null;
var inst_34779 = (0);
var inst_34780 = (0);
var state_34917__$1 = (function (){var statearr_34945 = state_34917;
(statearr_34945[(13)] = inst_34780);

(statearr_34945[(14)] = inst_34835);

(statearr_34945[(15)] = inst_34779);

(statearr_34945[(16)] = inst_34778);

(statearr_34945[(17)] = inst_34777);

return statearr_34945;
})();
var statearr_34951_35164 = state_34917__$1;
(statearr_34951_35164[(2)] = null);

(statearr_34951_35164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (39))){
var state_34917__$1 = state_34917;
var statearr_34959_35168 = state_34917__$1;
(statearr_34959_35168[(2)] = null);

(statearr_34959_35168[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (4))){
var inst_34767 = (state_34917[(11)]);
var inst_34767__$1 = (state_34917[(2)]);
var inst_34768 = (inst_34767__$1 == null);
var state_34917__$1 = (function (){var statearr_34967 = state_34917;
(statearr_34967[(11)] = inst_34767__$1);

return statearr_34967;
})();
if(cljs.core.truth_(inst_34768)){
var statearr_34968_35169 = state_34917__$1;
(statearr_34968_35169[(1)] = (5));

} else {
var statearr_34969_35170 = state_34917__$1;
(statearr_34969_35170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (15))){
var inst_34780 = (state_34917[(13)]);
var inst_34779 = (state_34917[(15)]);
var inst_34778 = (state_34917[(16)]);
var inst_34777 = (state_34917[(17)]);
var inst_34797 = (state_34917[(2)]);
var inst_34798 = (inst_34780 + (1));
var tmp34956 = inst_34779;
var tmp34957 = inst_34778;
var tmp34958 = inst_34777;
var inst_34777__$1 = tmp34958;
var inst_34778__$1 = tmp34957;
var inst_34779__$1 = tmp34956;
var inst_34780__$1 = inst_34798;
var state_34917__$1 = (function (){var statearr_34978 = state_34917;
(statearr_34978[(13)] = inst_34780__$1);

(statearr_34978[(18)] = inst_34797);

(statearr_34978[(15)] = inst_34779__$1);

(statearr_34978[(16)] = inst_34778__$1);

(statearr_34978[(17)] = inst_34777__$1);

return statearr_34978;
})();
var statearr_34981_35174 = state_34917__$1;
(statearr_34981_35174[(2)] = null);

(statearr_34981_35174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (21))){
var inst_34839 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34990_35175 = state_34917__$1;
(statearr_34990_35175[(2)] = inst_34839);

(statearr_34990_35175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (31))){
var inst_34865 = (state_34917[(10)]);
var inst_34869 = done.call(null,null);
var inst_34870 = cljs.core.async.untap_STAR_.call(null,m,inst_34865);
var state_34917__$1 = (function (){var statearr_35000 = state_34917;
(statearr_35000[(19)] = inst_34869);

return statearr_35000;
})();
var statearr_35001_35176 = state_34917__$1;
(statearr_35001_35176[(2)] = inst_34870);

(statearr_35001_35176[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (32))){
var inst_34857 = (state_34917[(20)]);
var inst_34858 = (state_34917[(9)]);
var inst_34859 = (state_34917[(21)]);
var inst_34860 = (state_34917[(12)]);
var inst_34872 = (state_34917[(2)]);
var inst_34873 = (inst_34860 + (1));
var tmp34987 = inst_34857;
var tmp34988 = inst_34858;
var tmp34989 = inst_34859;
var inst_34857__$1 = tmp34987;
var inst_34858__$1 = tmp34988;
var inst_34859__$1 = tmp34989;
var inst_34860__$1 = inst_34873;
var state_34917__$1 = (function (){var statearr_35002 = state_34917;
(statearr_35002[(20)] = inst_34857__$1);

(statearr_35002[(9)] = inst_34858__$1);

(statearr_35002[(21)] = inst_34859__$1);

(statearr_35002[(22)] = inst_34872);

(statearr_35002[(12)] = inst_34860__$1);

return statearr_35002;
})();
var statearr_35003_35179 = state_34917__$1;
(statearr_35003_35179[(2)] = null);

(statearr_35003_35179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (40))){
var inst_34885 = (state_34917[(23)]);
var inst_34889 = done.call(null,null);
var inst_34890 = cljs.core.async.untap_STAR_.call(null,m,inst_34885);
var state_34917__$1 = (function (){var statearr_35004 = state_34917;
(statearr_35004[(24)] = inst_34889);

return statearr_35004;
})();
var statearr_35005_35184 = state_34917__$1;
(statearr_35005_35184[(2)] = inst_34890);

(statearr_35005_35184[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (33))){
var inst_34876 = (state_34917[(25)]);
var inst_34878 = cljs.core.chunked_seq_QMARK_.call(null,inst_34876);
var state_34917__$1 = state_34917;
if(inst_34878){
var statearr_35007_35188 = state_34917__$1;
(statearr_35007_35188[(1)] = (36));

} else {
var statearr_35008_35189 = state_34917__$1;
(statearr_35008_35189[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (13))){
var inst_34791 = (state_34917[(26)]);
var inst_34794 = cljs.core.async.close_BANG_.call(null,inst_34791);
var state_34917__$1 = state_34917;
var statearr_35009_35190 = state_34917__$1;
(statearr_35009_35190[(2)] = inst_34794);

(statearr_35009_35190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (22))){
var inst_34829 = (state_34917[(8)]);
var inst_34832 = cljs.core.async.close_BANG_.call(null,inst_34829);
var state_34917__$1 = state_34917;
var statearr_35014_35198 = state_34917__$1;
(statearr_35014_35198[(2)] = inst_34832);

(statearr_35014_35198[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (36))){
var inst_34876 = (state_34917[(25)]);
var inst_34880 = cljs.core.chunk_first.call(null,inst_34876);
var inst_34881 = cljs.core.chunk_rest.call(null,inst_34876);
var inst_34882 = cljs.core.count.call(null,inst_34880);
var inst_34857 = inst_34881;
var inst_34858 = inst_34880;
var inst_34859 = inst_34882;
var inst_34860 = (0);
var state_34917__$1 = (function (){var statearr_35018 = state_34917;
(statearr_35018[(20)] = inst_34857);

(statearr_35018[(9)] = inst_34858);

(statearr_35018[(21)] = inst_34859);

(statearr_35018[(12)] = inst_34860);

return statearr_35018;
})();
var statearr_35019_35211 = state_34917__$1;
(statearr_35019_35211[(2)] = null);

(statearr_35019_35211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (41))){
var inst_34876 = (state_34917[(25)]);
var inst_34892 = (state_34917[(2)]);
var inst_34893 = cljs.core.next.call(null,inst_34876);
var inst_34857 = inst_34893;
var inst_34858 = null;
var inst_34859 = (0);
var inst_34860 = (0);
var state_34917__$1 = (function (){var statearr_35020 = state_34917;
(statearr_35020[(20)] = inst_34857);

(statearr_35020[(9)] = inst_34858);

(statearr_35020[(27)] = inst_34892);

(statearr_35020[(21)] = inst_34859);

(statearr_35020[(12)] = inst_34860);

return statearr_35020;
})();
var statearr_35021_35221 = state_34917__$1;
(statearr_35021_35221[(2)] = null);

(statearr_35021_35221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (43))){
var state_34917__$1 = state_34917;
var statearr_35026_35224 = state_34917__$1;
(statearr_35026_35224[(2)] = null);

(statearr_35026_35224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (29))){
var inst_34901 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_35029_35230 = state_34917__$1;
(statearr_35029_35230[(2)] = inst_34901);

(statearr_35029_35230[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (44))){
var inst_34910 = (state_34917[(2)]);
var state_34917__$1 = (function (){var statearr_35035 = state_34917;
(statearr_35035[(28)] = inst_34910);

return statearr_35035;
})();
var statearr_35036_35232 = state_34917__$1;
(statearr_35036_35232[(2)] = null);

(statearr_35036_35232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (6))){
var inst_34849 = (state_34917[(29)]);
var inst_34848 = cljs.core.deref.call(null,cs);
var inst_34849__$1 = cljs.core.keys.call(null,inst_34848);
var inst_34850 = cljs.core.count.call(null,inst_34849__$1);
var inst_34851 = cljs.core.reset_BANG_.call(null,dctr,inst_34850);
var inst_34856 = cljs.core.seq.call(null,inst_34849__$1);
var inst_34857 = inst_34856;
var inst_34858 = null;
var inst_34859 = (0);
var inst_34860 = (0);
var state_34917__$1 = (function (){var statearr_35041 = state_34917;
(statearr_35041[(20)] = inst_34857);

(statearr_35041[(9)] = inst_34858);

(statearr_35041[(29)] = inst_34849__$1);

(statearr_35041[(21)] = inst_34859);

(statearr_35041[(30)] = inst_34851);

(statearr_35041[(12)] = inst_34860);

return statearr_35041;
})();
var statearr_35042_35234 = state_34917__$1;
(statearr_35042_35234[(2)] = null);

(statearr_35042_35234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (28))){
var inst_34857 = (state_34917[(20)]);
var inst_34876 = (state_34917[(25)]);
var inst_34876__$1 = cljs.core.seq.call(null,inst_34857);
var state_34917__$1 = (function (){var statearr_35043 = state_34917;
(statearr_35043[(25)] = inst_34876__$1);

return statearr_35043;
})();
if(inst_34876__$1){
var statearr_35044_35237 = state_34917__$1;
(statearr_35044_35237[(1)] = (33));

} else {
var statearr_35049_35238 = state_34917__$1;
(statearr_35049_35238[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (25))){
var inst_34859 = (state_34917[(21)]);
var inst_34860 = (state_34917[(12)]);
var inst_34862 = (inst_34860 < inst_34859);
var inst_34863 = inst_34862;
var state_34917__$1 = state_34917;
if(cljs.core.truth_(inst_34863)){
var statearr_35050_35240 = state_34917__$1;
(statearr_35050_35240[(1)] = (27));

} else {
var statearr_35051_35241 = state_34917__$1;
(statearr_35051_35241[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (34))){
var state_34917__$1 = state_34917;
var statearr_35057_35242 = state_34917__$1;
(statearr_35057_35242[(2)] = null);

(statearr_35057_35242[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (17))){
var state_34917__$1 = state_34917;
var statearr_35058_35246 = state_34917__$1;
(statearr_35058_35246[(2)] = null);

(statearr_35058_35246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (3))){
var inst_34915 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34917__$1,inst_34915);
} else {
if((state_val_34918 === (12))){
var inst_34844 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_35067_35250 = state_34917__$1;
(statearr_35067_35250[(2)] = inst_34844);

(statearr_35067_35250[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (2))){
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34917__$1,(4),ch);
} else {
if((state_val_34918 === (23))){
var state_34917__$1 = state_34917;
var statearr_35069_35251 = state_34917__$1;
(statearr_35069_35251[(2)] = null);

(statearr_35069_35251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (35))){
var inst_34899 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_35071_35252 = state_34917__$1;
(statearr_35071_35252[(2)] = inst_34899);

(statearr_35071_35252[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (19))){
var inst_34806 = (state_34917[(7)]);
var inst_34819 = cljs.core.chunk_first.call(null,inst_34806);
var inst_34821 = cljs.core.chunk_rest.call(null,inst_34806);
var inst_34822 = cljs.core.count.call(null,inst_34819);
var inst_34777 = inst_34821;
var inst_34778 = inst_34819;
var inst_34779 = inst_34822;
var inst_34780 = (0);
var state_34917__$1 = (function (){var statearr_35076 = state_34917;
(statearr_35076[(13)] = inst_34780);

(statearr_35076[(15)] = inst_34779);

(statearr_35076[(16)] = inst_34778);

(statearr_35076[(17)] = inst_34777);

return statearr_35076;
})();
var statearr_35079_35259 = state_34917__$1;
(statearr_35079_35259[(2)] = null);

(statearr_35079_35259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (11))){
var inst_34777 = (state_34917[(17)]);
var inst_34806 = (state_34917[(7)]);
var inst_34806__$1 = cljs.core.seq.call(null,inst_34777);
var state_34917__$1 = (function (){var statearr_35085 = state_34917;
(statearr_35085[(7)] = inst_34806__$1);

return statearr_35085;
})();
if(inst_34806__$1){
var statearr_35087_35261 = state_34917__$1;
(statearr_35087_35261[(1)] = (16));

} else {
var statearr_35088_35268 = state_34917__$1;
(statearr_35088_35268[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (9))){
var inst_34846 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_35092_35276 = state_34917__$1;
(statearr_35092_35276[(2)] = inst_34846);

(statearr_35092_35276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (5))){
var inst_34775 = cljs.core.deref.call(null,cs);
var inst_34776 = cljs.core.seq.call(null,inst_34775);
var inst_34777 = inst_34776;
var inst_34778 = null;
var inst_34779 = (0);
var inst_34780 = (0);
var state_34917__$1 = (function (){var statearr_35093 = state_34917;
(statearr_35093[(13)] = inst_34780);

(statearr_35093[(15)] = inst_34779);

(statearr_35093[(16)] = inst_34778);

(statearr_35093[(17)] = inst_34777);

return statearr_35093;
})();
var statearr_35094_35286 = state_34917__$1;
(statearr_35094_35286[(2)] = null);

(statearr_35094_35286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (14))){
var state_34917__$1 = state_34917;
var statearr_35099_35294 = state_34917__$1;
(statearr_35099_35294[(2)] = null);

(statearr_35099_35294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (45))){
var inst_34907 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_35100_35295 = state_34917__$1;
(statearr_35100_35295[(2)] = inst_34907);

(statearr_35100_35295[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (26))){
var inst_34849 = (state_34917[(29)]);
var inst_34903 = (state_34917[(2)]);
var inst_34904 = cljs.core.seq.call(null,inst_34849);
var state_34917__$1 = (function (){var statearr_35101 = state_34917;
(statearr_35101[(31)] = inst_34903);

return statearr_35101;
})();
if(inst_34904){
var statearr_35102_35297 = state_34917__$1;
(statearr_35102_35297[(1)] = (42));

} else {
var statearr_35103_35301 = state_34917__$1;
(statearr_35103_35301[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (16))){
var inst_34806 = (state_34917[(7)]);
var inst_34808 = cljs.core.chunked_seq_QMARK_.call(null,inst_34806);
var state_34917__$1 = state_34917;
if(inst_34808){
var statearr_35104_35302 = state_34917__$1;
(statearr_35104_35302[(1)] = (19));

} else {
var statearr_35105_35303 = state_34917__$1;
(statearr_35105_35303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (38))){
var inst_34896 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_35106_35304 = state_34917__$1;
(statearr_35106_35304[(2)] = inst_34896);

(statearr_35106_35304[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (30))){
var state_34917__$1 = state_34917;
var statearr_35107_35305 = state_34917__$1;
(statearr_35107_35305[(2)] = null);

(statearr_35107_35305[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (10))){
var inst_34780 = (state_34917[(13)]);
var inst_34778 = (state_34917[(16)]);
var inst_34790 = cljs.core._nth.call(null,inst_34778,inst_34780);
var inst_34791 = cljs.core.nth.call(null,inst_34790,(0),null);
var inst_34792 = cljs.core.nth.call(null,inst_34790,(1),null);
var state_34917__$1 = (function (){var statearr_35110 = state_34917;
(statearr_35110[(26)] = inst_34791);

return statearr_35110;
})();
if(cljs.core.truth_(inst_34792)){
var statearr_35111_35309 = state_34917__$1;
(statearr_35111_35309[(1)] = (13));

} else {
var statearr_35112_35311 = state_34917__$1;
(statearr_35112_35311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (18))){
var inst_34842 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_35115_35312 = state_34917__$1;
(statearr_35115_35312[(2)] = inst_34842);

(statearr_35115_35312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (42))){
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34917__$1,(45),dchan);
} else {
if((state_val_34918 === (37))){
var inst_34885 = (state_34917[(23)]);
var inst_34767 = (state_34917[(11)]);
var inst_34876 = (state_34917[(25)]);
var inst_34885__$1 = cljs.core.first.call(null,inst_34876);
var inst_34886 = cljs.core.async.put_BANG_.call(null,inst_34885__$1,inst_34767,done);
var state_34917__$1 = (function (){var statearr_35116 = state_34917;
(statearr_35116[(23)] = inst_34885__$1);

return statearr_35116;
})();
if(cljs.core.truth_(inst_34886)){
var statearr_35119_35313 = state_34917__$1;
(statearr_35119_35313[(1)] = (39));

} else {
var statearr_35127_35314 = state_34917__$1;
(statearr_35127_35314[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (8))){
var inst_34780 = (state_34917[(13)]);
var inst_34779 = (state_34917[(15)]);
var inst_34782 = (inst_34780 < inst_34779);
var inst_34783 = inst_34782;
var state_34917__$1 = state_34917;
if(cljs.core.truth_(inst_34783)){
var statearr_35133_35315 = state_34917__$1;
(statearr_35133_35315[(1)] = (10));

} else {
var statearr_35134_35316 = state_34917__$1;
(statearr_35134_35316[(1)] = (11));

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
});})(c__33665__auto___35148,cs,m,dchan,dctr,done))
;
return ((function (switch__33280__auto__,c__33665__auto___35148,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33281__auto__ = null;
var cljs$core$async$mult_$_state_machine__33281__auto____0 = (function (){
var statearr_35136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35136[(0)] = cljs$core$async$mult_$_state_machine__33281__auto__);

(statearr_35136[(1)] = (1));

return statearr_35136;
});
var cljs$core$async$mult_$_state_machine__33281__auto____1 = (function (state_34917){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_34917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e35137){if((e35137 instanceof Object)){
var ex__33284__auto__ = e35137;
var statearr_35138_35321 = state_34917;
(statearr_35138_35321[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35328 = state_34917;
state_34917 = G__35328;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33281__auto__ = function(state_34917){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33281__auto____1.call(this,state_34917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33281__auto____0;
cljs$core$async$mult_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33281__auto____1;
return cljs$core$async$mult_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___35148,cs,m,dchan,dctr,done))
})();
var state__33667__auto__ = (function (){var statearr_35139 = f__33666__auto__.call(null);
(statearr_35139[(6)] = c__33665__auto___35148);

return statearr_35139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___35148,cs,m,dchan,dctr,done))
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
var G__35336 = arguments.length;
switch (G__35336) {
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
var len__31349__auto___35422 = arguments.length;
var i__31350__auto___35423 = (0);
while(true){
if((i__31350__auto___35423 < len__31349__auto___35422)){
args__31356__auto__.push((arguments[i__31350__auto___35423]));

var G__35424 = (i__31350__auto___35423 + (1));
i__31350__auto___35423 = G__35424;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((3) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35414){
var map__35415 = p__35414;
var map__35415__$1 = ((((!((map__35415 == null)))?((((map__35415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35415):map__35415);
var opts = map__35415__$1;
var statearr_35417_35427 = state;
(statearr_35417_35427[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__35415,map__35415__$1,opts){
return (function (val){
var statearr_35418_35428 = state;
(statearr_35418_35428[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35415,map__35415__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_35421_35429 = state;
(statearr_35421_35429[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35410){
var G__35411 = cljs.core.first.call(null,seq35410);
var seq35410__$1 = cljs.core.next.call(null,seq35410);
var G__35412 = cljs.core.first.call(null,seq35410__$1);
var seq35410__$2 = cljs.core.next.call(null,seq35410__$1);
var G__35413 = cljs.core.first.call(null,seq35410__$2);
var seq35410__$3 = cljs.core.next.call(null,seq35410__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35411,G__35412,G__35413,seq35410__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35430 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35431){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35431 = meta35431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35432,meta35431__$1){
var self__ = this;
var _35432__$1 = this;
return (new cljs.core.async.t_cljs$core$async35430(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35431__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35432){
var self__ = this;
var _35432__$1 = this;
return self__.meta35431;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35430.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35430.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35430.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35430.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35430.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35430.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35430.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35430.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35431","meta35431",-1295765202,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35430";

cljs.core.async.t_cljs$core$async35430.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35430");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35430 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35430(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35431){
return (new cljs.core.async.t_cljs$core$async35430(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35431));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35430(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33665__auto___35649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35536){
var state_val_35537 = (state_35536[(1)]);
if((state_val_35537 === (7))){
var inst_35449 = (state_35536[(2)]);
var state_35536__$1 = state_35536;
var statearr_35538_35650 = state_35536__$1;
(statearr_35538_35650[(2)] = inst_35449);

(statearr_35538_35650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (20))){
var inst_35461 = (state_35536[(7)]);
var state_35536__$1 = state_35536;
var statearr_35539_35651 = state_35536__$1;
(statearr_35539_35651[(2)] = inst_35461);

(statearr_35539_35651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (27))){
var state_35536__$1 = state_35536;
var statearr_35541_35652 = state_35536__$1;
(statearr_35541_35652[(2)] = null);

(statearr_35541_35652[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (1))){
var inst_35436 = (state_35536[(8)]);
var inst_35436__$1 = calc_state.call(null);
var inst_35438 = (inst_35436__$1 == null);
var inst_35439 = cljs.core.not.call(null,inst_35438);
var state_35536__$1 = (function (){var statearr_35543 = state_35536;
(statearr_35543[(8)] = inst_35436__$1);

return statearr_35543;
})();
if(inst_35439){
var statearr_35547_35653 = state_35536__$1;
(statearr_35547_35653[(1)] = (2));

} else {
var statearr_35548_35654 = state_35536__$1;
(statearr_35548_35654[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (24))){
var inst_35508 = (state_35536[(9)]);
var inst_35485 = (state_35536[(10)]);
var inst_35494 = (state_35536[(11)]);
var inst_35508__$1 = inst_35485.call(null,inst_35494);
var state_35536__$1 = (function (){var statearr_35549 = state_35536;
(statearr_35549[(9)] = inst_35508__$1);

return statearr_35549;
})();
if(cljs.core.truth_(inst_35508__$1)){
var statearr_35550_35655 = state_35536__$1;
(statearr_35550_35655[(1)] = (29));

} else {
var statearr_35551_35656 = state_35536__$1;
(statearr_35551_35656[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (4))){
var inst_35452 = (state_35536[(2)]);
var state_35536__$1 = state_35536;
if(cljs.core.truth_(inst_35452)){
var statearr_35552_35657 = state_35536__$1;
(statearr_35552_35657[(1)] = (8));

} else {
var statearr_35553_35658 = state_35536__$1;
(statearr_35553_35658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (15))){
var inst_35479 = (state_35536[(2)]);
var state_35536__$1 = state_35536;
if(cljs.core.truth_(inst_35479)){
var statearr_35554_35659 = state_35536__$1;
(statearr_35554_35659[(1)] = (19));

} else {
var statearr_35555_35660 = state_35536__$1;
(statearr_35555_35660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (21))){
var inst_35484 = (state_35536[(12)]);
var inst_35484__$1 = (state_35536[(2)]);
var inst_35485 = cljs.core.get.call(null,inst_35484__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35486 = cljs.core.get.call(null,inst_35484__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35487 = cljs.core.get.call(null,inst_35484__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35536__$1 = (function (){var statearr_35557 = state_35536;
(statearr_35557[(13)] = inst_35486);

(statearr_35557[(12)] = inst_35484__$1);

(statearr_35557[(10)] = inst_35485);

return statearr_35557;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35536__$1,(22),inst_35487);
} else {
if((state_val_35537 === (31))){
var inst_35516 = (state_35536[(2)]);
var state_35536__$1 = state_35536;
if(cljs.core.truth_(inst_35516)){
var statearr_35567_35661 = state_35536__$1;
(statearr_35567_35661[(1)] = (32));

} else {
var statearr_35568_35662 = state_35536__$1;
(statearr_35568_35662[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (32))){
var inst_35493 = (state_35536[(14)]);
var state_35536__$1 = state_35536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35536__$1,(35),out,inst_35493);
} else {
if((state_val_35537 === (33))){
var inst_35484 = (state_35536[(12)]);
var inst_35461 = inst_35484;
var state_35536__$1 = (function (){var statearr_35569 = state_35536;
(statearr_35569[(7)] = inst_35461);

return statearr_35569;
})();
var statearr_35570_35663 = state_35536__$1;
(statearr_35570_35663[(2)] = null);

(statearr_35570_35663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (13))){
var inst_35461 = (state_35536[(7)]);
var inst_35468 = inst_35461.cljs$lang$protocol_mask$partition0$;
var inst_35469 = (inst_35468 & (64));
var inst_35470 = inst_35461.cljs$core$ISeq$;
var inst_35471 = (cljs.core.PROTOCOL_SENTINEL === inst_35470);
var inst_35472 = (inst_35469) || (inst_35471);
var state_35536__$1 = state_35536;
if(cljs.core.truth_(inst_35472)){
var statearr_35571_35668 = state_35536__$1;
(statearr_35571_35668[(1)] = (16));

} else {
var statearr_35572_35669 = state_35536__$1;
(statearr_35572_35669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (22))){
var inst_35493 = (state_35536[(14)]);
var inst_35494 = (state_35536[(11)]);
var inst_35492 = (state_35536[(2)]);
var inst_35493__$1 = cljs.core.nth.call(null,inst_35492,(0),null);
var inst_35494__$1 = cljs.core.nth.call(null,inst_35492,(1),null);
var inst_35495 = (inst_35493__$1 == null);
var inst_35496 = cljs.core._EQ_.call(null,inst_35494__$1,change);
var inst_35497 = (inst_35495) || (inst_35496);
var state_35536__$1 = (function (){var statearr_35573 = state_35536;
(statearr_35573[(14)] = inst_35493__$1);

(statearr_35573[(11)] = inst_35494__$1);

return statearr_35573;
})();
if(cljs.core.truth_(inst_35497)){
var statearr_35574_35673 = state_35536__$1;
(statearr_35574_35673[(1)] = (23));

} else {
var statearr_35575_35674 = state_35536__$1;
(statearr_35575_35674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (36))){
var inst_35484 = (state_35536[(12)]);
var inst_35461 = inst_35484;
var state_35536__$1 = (function (){var statearr_35577 = state_35536;
(statearr_35577[(7)] = inst_35461);

return statearr_35577;
})();
var statearr_35578_35679 = state_35536__$1;
(statearr_35578_35679[(2)] = null);

(statearr_35578_35679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (29))){
var inst_35508 = (state_35536[(9)]);
var state_35536__$1 = state_35536;
var statearr_35579_35680 = state_35536__$1;
(statearr_35579_35680[(2)] = inst_35508);

(statearr_35579_35680[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (6))){
var state_35536__$1 = state_35536;
var statearr_35580_35681 = state_35536__$1;
(statearr_35580_35681[(2)] = false);

(statearr_35580_35681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (28))){
var inst_35504 = (state_35536[(2)]);
var inst_35505 = calc_state.call(null);
var inst_35461 = inst_35505;
var state_35536__$1 = (function (){var statearr_35584 = state_35536;
(statearr_35584[(7)] = inst_35461);

(statearr_35584[(15)] = inst_35504);

return statearr_35584;
})();
var statearr_35585_35683 = state_35536__$1;
(statearr_35585_35683[(2)] = null);

(statearr_35585_35683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (25))){
var inst_35530 = (state_35536[(2)]);
var state_35536__$1 = state_35536;
var statearr_35586_35685 = state_35536__$1;
(statearr_35586_35685[(2)] = inst_35530);

(statearr_35586_35685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (34))){
var inst_35528 = (state_35536[(2)]);
var state_35536__$1 = state_35536;
var statearr_35587_35686 = state_35536__$1;
(statearr_35587_35686[(2)] = inst_35528);

(statearr_35587_35686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (17))){
var state_35536__$1 = state_35536;
var statearr_35588_35690 = state_35536__$1;
(statearr_35588_35690[(2)] = false);

(statearr_35588_35690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (3))){
var state_35536__$1 = state_35536;
var statearr_35589_35691 = state_35536__$1;
(statearr_35589_35691[(2)] = false);

(statearr_35589_35691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (12))){
var inst_35532 = (state_35536[(2)]);
var state_35536__$1 = state_35536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35536__$1,inst_35532);
} else {
if((state_val_35537 === (2))){
var inst_35436 = (state_35536[(8)]);
var inst_35441 = inst_35436.cljs$lang$protocol_mask$partition0$;
var inst_35442 = (inst_35441 & (64));
var inst_35443 = inst_35436.cljs$core$ISeq$;
var inst_35444 = (cljs.core.PROTOCOL_SENTINEL === inst_35443);
var inst_35445 = (inst_35442) || (inst_35444);
var state_35536__$1 = state_35536;
if(cljs.core.truth_(inst_35445)){
var statearr_35590_35692 = state_35536__$1;
(statearr_35590_35692[(1)] = (5));

} else {
var statearr_35591_35693 = state_35536__$1;
(statearr_35591_35693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (23))){
var inst_35493 = (state_35536[(14)]);
var inst_35499 = (inst_35493 == null);
var state_35536__$1 = state_35536;
if(cljs.core.truth_(inst_35499)){
var statearr_35592_35694 = state_35536__$1;
(statearr_35592_35694[(1)] = (26));

} else {
var statearr_35593_35695 = state_35536__$1;
(statearr_35593_35695[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (35))){
var inst_35519 = (state_35536[(2)]);
var state_35536__$1 = state_35536;
if(cljs.core.truth_(inst_35519)){
var statearr_35594_35696 = state_35536__$1;
(statearr_35594_35696[(1)] = (36));

} else {
var statearr_35595_35697 = state_35536__$1;
(statearr_35595_35697[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (19))){
var inst_35461 = (state_35536[(7)]);
var inst_35481 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35461);
var state_35536__$1 = state_35536;
var statearr_35596_35701 = state_35536__$1;
(statearr_35596_35701[(2)] = inst_35481);

(statearr_35596_35701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (11))){
var inst_35461 = (state_35536[(7)]);
var inst_35465 = (inst_35461 == null);
var inst_35466 = cljs.core.not.call(null,inst_35465);
var state_35536__$1 = state_35536;
if(inst_35466){
var statearr_35597_35702 = state_35536__$1;
(statearr_35597_35702[(1)] = (13));

} else {
var statearr_35601_35703 = state_35536__$1;
(statearr_35601_35703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (9))){
var inst_35436 = (state_35536[(8)]);
var state_35536__$1 = state_35536;
var statearr_35602_35704 = state_35536__$1;
(statearr_35602_35704[(2)] = inst_35436);

(statearr_35602_35704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (5))){
var state_35536__$1 = state_35536;
var statearr_35603_35705 = state_35536__$1;
(statearr_35603_35705[(2)] = true);

(statearr_35603_35705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (14))){
var state_35536__$1 = state_35536;
var statearr_35604_35706 = state_35536__$1;
(statearr_35604_35706[(2)] = false);

(statearr_35604_35706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (26))){
var inst_35494 = (state_35536[(11)]);
var inst_35501 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35494);
var state_35536__$1 = state_35536;
var statearr_35605_35709 = state_35536__$1;
(statearr_35605_35709[(2)] = inst_35501);

(statearr_35605_35709[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (16))){
var state_35536__$1 = state_35536;
var statearr_35606_35710 = state_35536__$1;
(statearr_35606_35710[(2)] = true);

(statearr_35606_35710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (38))){
var inst_35524 = (state_35536[(2)]);
var state_35536__$1 = state_35536;
var statearr_35607_35714 = state_35536__$1;
(statearr_35607_35714[(2)] = inst_35524);

(statearr_35607_35714[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (30))){
var inst_35486 = (state_35536[(13)]);
var inst_35485 = (state_35536[(10)]);
var inst_35494 = (state_35536[(11)]);
var inst_35511 = cljs.core.empty_QMARK_.call(null,inst_35485);
var inst_35512 = inst_35486.call(null,inst_35494);
var inst_35513 = cljs.core.not.call(null,inst_35512);
var inst_35514 = (inst_35511) && (inst_35513);
var state_35536__$1 = state_35536;
var statearr_35608_35716 = state_35536__$1;
(statearr_35608_35716[(2)] = inst_35514);

(statearr_35608_35716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (10))){
var inst_35436 = (state_35536[(8)]);
var inst_35457 = (state_35536[(2)]);
var inst_35458 = cljs.core.get.call(null,inst_35457,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35459 = cljs.core.get.call(null,inst_35457,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35460 = cljs.core.get.call(null,inst_35457,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35461 = inst_35436;
var state_35536__$1 = (function (){var statearr_35609 = state_35536;
(statearr_35609[(16)] = inst_35458);

(statearr_35609[(17)] = inst_35460);

(statearr_35609[(7)] = inst_35461);

(statearr_35609[(18)] = inst_35459);

return statearr_35609;
})();
var statearr_35610_35720 = state_35536__$1;
(statearr_35610_35720[(2)] = null);

(statearr_35610_35720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (18))){
var inst_35476 = (state_35536[(2)]);
var state_35536__$1 = state_35536;
var statearr_35611_35721 = state_35536__$1;
(statearr_35611_35721[(2)] = inst_35476);

(statearr_35611_35721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (37))){
var state_35536__$1 = state_35536;
var statearr_35612_35722 = state_35536__$1;
(statearr_35612_35722[(2)] = null);

(statearr_35612_35722[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35537 === (8))){
var inst_35436 = (state_35536[(8)]);
var inst_35454 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35436);
var state_35536__$1 = state_35536;
var statearr_35613_35723 = state_35536__$1;
(statearr_35613_35723[(2)] = inst_35454);

(statearr_35613_35723[(1)] = (10));


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
});})(c__33665__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33280__auto__,c__33665__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33281__auto__ = null;
var cljs$core$async$mix_$_state_machine__33281__auto____0 = (function (){
var statearr_35614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35614[(0)] = cljs$core$async$mix_$_state_machine__33281__auto__);

(statearr_35614[(1)] = (1));

return statearr_35614;
});
var cljs$core$async$mix_$_state_machine__33281__auto____1 = (function (state_35536){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_35536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e35619){if((e35619 instanceof Object)){
var ex__33284__auto__ = e35619;
var statearr_35620_35729 = state_35536;
(statearr_35620_35729[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35732 = state_35536;
state_35536 = G__35732;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33281__auto__ = function(state_35536){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33281__auto____1.call(this,state_35536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33281__auto____0;
cljs$core$async$mix_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33281__auto____1;
return cljs$core$async$mix_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33667__auto__ = (function (){var statearr_35623 = f__33666__auto__.call(null);
(statearr_35623[(6)] = c__33665__auto___35649);

return statearr_35623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35745 = arguments.length;
switch (G__35745) {
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
var G__35775 = arguments.length;
switch (G__35775) {
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
return (function (p1__35769_SHARP_){
if(cljs.core.truth_(p1__35769_SHARP_.call(null,topic))){
return p1__35769_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35769_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30072__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35776 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35777){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35777 = meta35777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35778,meta35777__$1){
var self__ = this;
var _35778__$1 = this;
return (new cljs.core.async.t_cljs$core$async35776(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35777__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35778){
var self__ = this;
var _35778__$1 = this;
return self__.meta35777;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35776.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35776.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35776.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35776.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35776.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35776.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35776.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35776.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35777","meta35777",1905094139,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35776";

cljs.core.async.t_cljs$core$async35776.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35776");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35776 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35776(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35777){
return (new cljs.core.async.t_cljs$core$async35776(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35777));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35776(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33665__auto___35963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___35963,mults,ensure_mult,p){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___35963,mults,ensure_mult,p){
return (function (state_35854){
var state_val_35855 = (state_35854[(1)]);
if((state_val_35855 === (7))){
var inst_35850 = (state_35854[(2)]);
var state_35854__$1 = state_35854;
var statearr_35856_35964 = state_35854__$1;
(statearr_35856_35964[(2)] = inst_35850);

(statearr_35856_35964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (20))){
var state_35854__$1 = state_35854;
var statearr_35858_35965 = state_35854__$1;
(statearr_35858_35965[(2)] = null);

(statearr_35858_35965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (1))){
var state_35854__$1 = state_35854;
var statearr_35859_35969 = state_35854__$1;
(statearr_35859_35969[(2)] = null);

(statearr_35859_35969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (24))){
var inst_35833 = (state_35854[(7)]);
var inst_35842 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35833);
var state_35854__$1 = state_35854;
var statearr_35860_35972 = state_35854__$1;
(statearr_35860_35972[(2)] = inst_35842);

(statearr_35860_35972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (4))){
var inst_35785 = (state_35854[(8)]);
var inst_35785__$1 = (state_35854[(2)]);
var inst_35786 = (inst_35785__$1 == null);
var state_35854__$1 = (function (){var statearr_35862 = state_35854;
(statearr_35862[(8)] = inst_35785__$1);

return statearr_35862;
})();
if(cljs.core.truth_(inst_35786)){
var statearr_35863_35974 = state_35854__$1;
(statearr_35863_35974[(1)] = (5));

} else {
var statearr_35864_35975 = state_35854__$1;
(statearr_35864_35975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (15))){
var inst_35827 = (state_35854[(2)]);
var state_35854__$1 = state_35854;
var statearr_35868_35976 = state_35854__$1;
(statearr_35868_35976[(2)] = inst_35827);

(statearr_35868_35976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (21))){
var inst_35847 = (state_35854[(2)]);
var state_35854__$1 = (function (){var statearr_35869 = state_35854;
(statearr_35869[(9)] = inst_35847);

return statearr_35869;
})();
var statearr_35870_35985 = state_35854__$1;
(statearr_35870_35985[(2)] = null);

(statearr_35870_35985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (13))){
var inst_35809 = (state_35854[(10)]);
var inst_35811 = cljs.core.chunked_seq_QMARK_.call(null,inst_35809);
var state_35854__$1 = state_35854;
if(inst_35811){
var statearr_35871_35986 = state_35854__$1;
(statearr_35871_35986[(1)] = (16));

} else {
var statearr_35872_35987 = state_35854__$1;
(statearr_35872_35987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (22))){
var inst_35839 = (state_35854[(2)]);
var state_35854__$1 = state_35854;
if(cljs.core.truth_(inst_35839)){
var statearr_35873_35988 = state_35854__$1;
(statearr_35873_35988[(1)] = (23));

} else {
var statearr_35874_35989 = state_35854__$1;
(statearr_35874_35989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (6))){
var inst_35835 = (state_35854[(11)]);
var inst_35833 = (state_35854[(7)]);
var inst_35785 = (state_35854[(8)]);
var inst_35833__$1 = topic_fn.call(null,inst_35785);
var inst_35834 = cljs.core.deref.call(null,mults);
var inst_35835__$1 = cljs.core.get.call(null,inst_35834,inst_35833__$1);
var state_35854__$1 = (function (){var statearr_35875 = state_35854;
(statearr_35875[(11)] = inst_35835__$1);

(statearr_35875[(7)] = inst_35833__$1);

return statearr_35875;
})();
if(cljs.core.truth_(inst_35835__$1)){
var statearr_35876_35990 = state_35854__$1;
(statearr_35876_35990[(1)] = (19));

} else {
var statearr_35877_35991 = state_35854__$1;
(statearr_35877_35991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (25))){
var inst_35844 = (state_35854[(2)]);
var state_35854__$1 = state_35854;
var statearr_35878_36002 = state_35854__$1;
(statearr_35878_36002[(2)] = inst_35844);

(statearr_35878_36002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (17))){
var inst_35809 = (state_35854[(10)]);
var inst_35818 = cljs.core.first.call(null,inst_35809);
var inst_35819 = cljs.core.async.muxch_STAR_.call(null,inst_35818);
var inst_35820 = cljs.core.async.close_BANG_.call(null,inst_35819);
var inst_35821 = cljs.core.next.call(null,inst_35809);
var inst_35795 = inst_35821;
var inst_35796 = null;
var inst_35797 = (0);
var inst_35798 = (0);
var state_35854__$1 = (function (){var statearr_35879 = state_35854;
(statearr_35879[(12)] = inst_35797);

(statearr_35879[(13)] = inst_35798);

(statearr_35879[(14)] = inst_35820);

(statearr_35879[(15)] = inst_35796);

(statearr_35879[(16)] = inst_35795);

return statearr_35879;
})();
var statearr_35880_36010 = state_35854__$1;
(statearr_35880_36010[(2)] = null);

(statearr_35880_36010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (3))){
var inst_35852 = (state_35854[(2)]);
var state_35854__$1 = state_35854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35854__$1,inst_35852);
} else {
if((state_val_35855 === (12))){
var inst_35829 = (state_35854[(2)]);
var state_35854__$1 = state_35854;
var statearr_35881_36011 = state_35854__$1;
(statearr_35881_36011[(2)] = inst_35829);

(statearr_35881_36011[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (2))){
var state_35854__$1 = state_35854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35854__$1,(4),ch);
} else {
if((state_val_35855 === (23))){
var state_35854__$1 = state_35854;
var statearr_35882_36012 = state_35854__$1;
(statearr_35882_36012[(2)] = null);

(statearr_35882_36012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (19))){
var inst_35835 = (state_35854[(11)]);
var inst_35785 = (state_35854[(8)]);
var inst_35837 = cljs.core.async.muxch_STAR_.call(null,inst_35835);
var state_35854__$1 = state_35854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35854__$1,(22),inst_35837,inst_35785);
} else {
if((state_val_35855 === (11))){
var inst_35809 = (state_35854[(10)]);
var inst_35795 = (state_35854[(16)]);
var inst_35809__$1 = cljs.core.seq.call(null,inst_35795);
var state_35854__$1 = (function (){var statearr_35883 = state_35854;
(statearr_35883[(10)] = inst_35809__$1);

return statearr_35883;
})();
if(inst_35809__$1){
var statearr_35884_36015 = state_35854__$1;
(statearr_35884_36015[(1)] = (13));

} else {
var statearr_35885_36016 = state_35854__$1;
(statearr_35885_36016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (9))){
var inst_35831 = (state_35854[(2)]);
var state_35854__$1 = state_35854;
var statearr_35886_36017 = state_35854__$1;
(statearr_35886_36017[(2)] = inst_35831);

(statearr_35886_36017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (5))){
var inst_35792 = cljs.core.deref.call(null,mults);
var inst_35793 = cljs.core.vals.call(null,inst_35792);
var inst_35794 = cljs.core.seq.call(null,inst_35793);
var inst_35795 = inst_35794;
var inst_35796 = null;
var inst_35797 = (0);
var inst_35798 = (0);
var state_35854__$1 = (function (){var statearr_35887 = state_35854;
(statearr_35887[(12)] = inst_35797);

(statearr_35887[(13)] = inst_35798);

(statearr_35887[(15)] = inst_35796);

(statearr_35887[(16)] = inst_35795);

return statearr_35887;
})();
var statearr_35888_36046 = state_35854__$1;
(statearr_35888_36046[(2)] = null);

(statearr_35888_36046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (14))){
var state_35854__$1 = state_35854;
var statearr_35892_36047 = state_35854__$1;
(statearr_35892_36047[(2)] = null);

(statearr_35892_36047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (16))){
var inst_35809 = (state_35854[(10)]);
var inst_35813 = cljs.core.chunk_first.call(null,inst_35809);
var inst_35814 = cljs.core.chunk_rest.call(null,inst_35809);
var inst_35815 = cljs.core.count.call(null,inst_35813);
var inst_35795 = inst_35814;
var inst_35796 = inst_35813;
var inst_35797 = inst_35815;
var inst_35798 = (0);
var state_35854__$1 = (function (){var statearr_35893 = state_35854;
(statearr_35893[(12)] = inst_35797);

(statearr_35893[(13)] = inst_35798);

(statearr_35893[(15)] = inst_35796);

(statearr_35893[(16)] = inst_35795);

return statearr_35893;
})();
var statearr_35894_36048 = state_35854__$1;
(statearr_35894_36048[(2)] = null);

(statearr_35894_36048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (10))){
var inst_35797 = (state_35854[(12)]);
var inst_35798 = (state_35854[(13)]);
var inst_35796 = (state_35854[(15)]);
var inst_35795 = (state_35854[(16)]);
var inst_35803 = cljs.core._nth.call(null,inst_35796,inst_35798);
var inst_35804 = cljs.core.async.muxch_STAR_.call(null,inst_35803);
var inst_35805 = cljs.core.async.close_BANG_.call(null,inst_35804);
var inst_35806 = (inst_35798 + (1));
var tmp35889 = inst_35797;
var tmp35890 = inst_35796;
var tmp35891 = inst_35795;
var inst_35795__$1 = tmp35891;
var inst_35796__$1 = tmp35890;
var inst_35797__$1 = tmp35889;
var inst_35798__$1 = inst_35806;
var state_35854__$1 = (function (){var statearr_35898 = state_35854;
(statearr_35898[(12)] = inst_35797__$1);

(statearr_35898[(17)] = inst_35805);

(statearr_35898[(13)] = inst_35798__$1);

(statearr_35898[(15)] = inst_35796__$1);

(statearr_35898[(16)] = inst_35795__$1);

return statearr_35898;
})();
var statearr_35899_36049 = state_35854__$1;
(statearr_35899_36049[(2)] = null);

(statearr_35899_36049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (18))){
var inst_35824 = (state_35854[(2)]);
var state_35854__$1 = state_35854;
var statearr_35900_36050 = state_35854__$1;
(statearr_35900_36050[(2)] = inst_35824);

(statearr_35900_36050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35855 === (8))){
var inst_35797 = (state_35854[(12)]);
var inst_35798 = (state_35854[(13)]);
var inst_35800 = (inst_35798 < inst_35797);
var inst_35801 = inst_35800;
var state_35854__$1 = state_35854;
if(cljs.core.truth_(inst_35801)){
var statearr_35901_36056 = state_35854__$1;
(statearr_35901_36056[(1)] = (10));

} else {
var statearr_35902_36057 = state_35854__$1;
(statearr_35902_36057[(1)] = (11));

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
});})(c__33665__auto___35963,mults,ensure_mult,p))
;
return ((function (switch__33280__auto__,c__33665__auto___35963,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_35903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35903[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_35903[(1)] = (1));

return statearr_35903;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_35854){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_35854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e35904){if((e35904 instanceof Object)){
var ex__33284__auto__ = e35904;
var statearr_35905_36058 = state_35854;
(statearr_35905_36058[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36060 = state_35854;
state_35854 = G__36060;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_35854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_35854);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___35963,mults,ensure_mult,p))
})();
var state__33667__auto__ = (function (){var statearr_35906 = f__33666__auto__.call(null);
(statearr_35906[(6)] = c__33665__auto___35963);

return statearr_35906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___35963,mults,ensure_mult,p))
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
var G__36068 = arguments.length;
switch (G__36068) {
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
var G__36071 = arguments.length;
switch (G__36071) {
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
var G__36074 = arguments.length;
switch (G__36074) {
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
var c__33665__auto___36176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___36176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___36176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36133){
var state_val_36134 = (state_36133[(1)]);
if((state_val_36134 === (7))){
var state_36133__$1 = state_36133;
var statearr_36135_36179 = state_36133__$1;
(statearr_36135_36179[(2)] = null);

(statearr_36135_36179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (1))){
var state_36133__$1 = state_36133;
var statearr_36136_36180 = state_36133__$1;
(statearr_36136_36180[(2)] = null);

(statearr_36136_36180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (4))){
var inst_36086 = (state_36133[(7)]);
var inst_36088 = (inst_36086 < cnt);
var state_36133__$1 = state_36133;
if(cljs.core.truth_(inst_36088)){
var statearr_36137_36183 = state_36133__$1;
(statearr_36137_36183[(1)] = (6));

} else {
var statearr_36138_36185 = state_36133__$1;
(statearr_36138_36185[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (15))){
var inst_36129 = (state_36133[(2)]);
var state_36133__$1 = state_36133;
var statearr_36139_36187 = state_36133__$1;
(statearr_36139_36187[(2)] = inst_36129);

(statearr_36139_36187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (13))){
var inst_36122 = cljs.core.async.close_BANG_.call(null,out);
var state_36133__$1 = state_36133;
var statearr_36140_36188 = state_36133__$1;
(statearr_36140_36188[(2)] = inst_36122);

(statearr_36140_36188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (6))){
var state_36133__$1 = state_36133;
var statearr_36141_36192 = state_36133__$1;
(statearr_36141_36192[(2)] = null);

(statearr_36141_36192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (3))){
var inst_36131 = (state_36133[(2)]);
var state_36133__$1 = state_36133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36133__$1,inst_36131);
} else {
if((state_val_36134 === (12))){
var inst_36119 = (state_36133[(8)]);
var inst_36119__$1 = (state_36133[(2)]);
var inst_36120 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36119__$1);
var state_36133__$1 = (function (){var statearr_36145 = state_36133;
(statearr_36145[(8)] = inst_36119__$1);

return statearr_36145;
})();
if(cljs.core.truth_(inst_36120)){
var statearr_36146_36196 = state_36133__$1;
(statearr_36146_36196[(1)] = (13));

} else {
var statearr_36147_36197 = state_36133__$1;
(statearr_36147_36197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (2))){
var inst_36085 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36086 = (0);
var state_36133__$1 = (function (){var statearr_36148 = state_36133;
(statearr_36148[(7)] = inst_36086);

(statearr_36148[(9)] = inst_36085);

return statearr_36148;
})();
var statearr_36149_36204 = state_36133__$1;
(statearr_36149_36204[(2)] = null);

(statearr_36149_36204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (11))){
var inst_36086 = (state_36133[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36133,(10),Object,null,(9));
var inst_36103 = chs__$1.call(null,inst_36086);
var inst_36104 = done.call(null,inst_36086);
var inst_36105 = cljs.core.async.take_BANG_.call(null,inst_36103,inst_36104);
var state_36133__$1 = state_36133;
var statearr_36150_36205 = state_36133__$1;
(statearr_36150_36205[(2)] = inst_36105);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36133__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (9))){
var inst_36086 = (state_36133[(7)]);
var inst_36107 = (state_36133[(2)]);
var inst_36108 = (inst_36086 + (1));
var inst_36086__$1 = inst_36108;
var state_36133__$1 = (function (){var statearr_36151 = state_36133;
(statearr_36151[(7)] = inst_36086__$1);

(statearr_36151[(10)] = inst_36107);

return statearr_36151;
})();
var statearr_36152_36206 = state_36133__$1;
(statearr_36152_36206[(2)] = null);

(statearr_36152_36206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (5))){
var inst_36117 = (state_36133[(2)]);
var state_36133__$1 = (function (){var statearr_36153 = state_36133;
(statearr_36153[(11)] = inst_36117);

return statearr_36153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36133__$1,(12),dchan);
} else {
if((state_val_36134 === (14))){
var inst_36119 = (state_36133[(8)]);
var inst_36124 = cljs.core.apply.call(null,f,inst_36119);
var state_36133__$1 = state_36133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36133__$1,(16),out,inst_36124);
} else {
if((state_val_36134 === (16))){
var inst_36126 = (state_36133[(2)]);
var state_36133__$1 = (function (){var statearr_36157 = state_36133;
(statearr_36157[(12)] = inst_36126);

return statearr_36157;
})();
var statearr_36158_36210 = state_36133__$1;
(statearr_36158_36210[(2)] = null);

(statearr_36158_36210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (10))){
var inst_36090 = (state_36133[(2)]);
var inst_36093 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36133__$1 = (function (){var statearr_36159 = state_36133;
(statearr_36159[(13)] = inst_36090);

return statearr_36159;
})();
var statearr_36160_36221 = state_36133__$1;
(statearr_36160_36221[(2)] = inst_36093);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36133__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (8))){
var inst_36115 = (state_36133[(2)]);
var state_36133__$1 = state_36133;
var statearr_36161_36225 = state_36133__$1;
(statearr_36161_36225[(2)] = inst_36115);

(statearr_36161_36225[(1)] = (5));


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
});})(c__33665__auto___36176,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33280__auto__,c__33665__auto___36176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_36162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36162[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_36162[(1)] = (1));

return statearr_36162;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_36133){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_36133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e36163){if((e36163 instanceof Object)){
var ex__33284__auto__ = e36163;
var statearr_36164_36244 = state_36133;
(statearr_36164_36244[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36255 = state_36133;
state_36133 = G__36255;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_36133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_36133);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___36176,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33667__auto__ = (function (){var statearr_36168 = f__33666__auto__.call(null);
(statearr_36168[(6)] = c__33665__auto___36176);

return statearr_36168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___36176,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__36258 = arguments.length;
switch (G__36258) {
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
var c__33665__auto___36324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___36324,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___36324,out){
return (function (state_36290){
var state_val_36291 = (state_36290[(1)]);
if((state_val_36291 === (7))){
var inst_36269 = (state_36290[(7)]);
var inst_36270 = (state_36290[(8)]);
var inst_36269__$1 = (state_36290[(2)]);
var inst_36270__$1 = cljs.core.nth.call(null,inst_36269__$1,(0),null);
var inst_36271 = cljs.core.nth.call(null,inst_36269__$1,(1),null);
var inst_36272 = (inst_36270__$1 == null);
var state_36290__$1 = (function (){var statearr_36295 = state_36290;
(statearr_36295[(9)] = inst_36271);

(statearr_36295[(7)] = inst_36269__$1);

(statearr_36295[(8)] = inst_36270__$1);

return statearr_36295;
})();
if(cljs.core.truth_(inst_36272)){
var statearr_36296_36329 = state_36290__$1;
(statearr_36296_36329[(1)] = (8));

} else {
var statearr_36297_36330 = state_36290__$1;
(statearr_36297_36330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (1))){
var inst_36259 = cljs.core.vec.call(null,chs);
var inst_36260 = inst_36259;
var state_36290__$1 = (function (){var statearr_36298 = state_36290;
(statearr_36298[(10)] = inst_36260);

return statearr_36298;
})();
var statearr_36302_36331 = state_36290__$1;
(statearr_36302_36331[(2)] = null);

(statearr_36302_36331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (4))){
var inst_36260 = (state_36290[(10)]);
var state_36290__$1 = state_36290;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36290__$1,(7),inst_36260);
} else {
if((state_val_36291 === (6))){
var inst_36286 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36303_36332 = state_36290__$1;
(statearr_36303_36332[(2)] = inst_36286);

(statearr_36303_36332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (3))){
var inst_36288 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36290__$1,inst_36288);
} else {
if((state_val_36291 === (2))){
var inst_36260 = (state_36290[(10)]);
var inst_36262 = cljs.core.count.call(null,inst_36260);
var inst_36263 = (inst_36262 > (0));
var state_36290__$1 = state_36290;
if(cljs.core.truth_(inst_36263)){
var statearr_36305_36336 = state_36290__$1;
(statearr_36305_36336[(1)] = (4));

} else {
var statearr_36306_36337 = state_36290__$1;
(statearr_36306_36337[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (11))){
var inst_36260 = (state_36290[(10)]);
var inst_36279 = (state_36290[(2)]);
var tmp36304 = inst_36260;
var inst_36260__$1 = tmp36304;
var state_36290__$1 = (function (){var statearr_36307 = state_36290;
(statearr_36307[(11)] = inst_36279);

(statearr_36307[(10)] = inst_36260__$1);

return statearr_36307;
})();
var statearr_36308_36350 = state_36290__$1;
(statearr_36308_36350[(2)] = null);

(statearr_36308_36350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (9))){
var inst_36270 = (state_36290[(8)]);
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36290__$1,(11),out,inst_36270);
} else {
if((state_val_36291 === (5))){
var inst_36284 = cljs.core.async.close_BANG_.call(null,out);
var state_36290__$1 = state_36290;
var statearr_36313_36351 = state_36290__$1;
(statearr_36313_36351[(2)] = inst_36284);

(statearr_36313_36351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (10))){
var inst_36282 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36314_36352 = state_36290__$1;
(statearr_36314_36352[(2)] = inst_36282);

(statearr_36314_36352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (8))){
var inst_36271 = (state_36290[(9)]);
var inst_36269 = (state_36290[(7)]);
var inst_36260 = (state_36290[(10)]);
var inst_36270 = (state_36290[(8)]);
var inst_36274 = (function (){var cs = inst_36260;
var vec__36265 = inst_36269;
var v = inst_36270;
var c = inst_36271;
return ((function (cs,vec__36265,v,c,inst_36271,inst_36269,inst_36260,inst_36270,state_val_36291,c__33665__auto___36324,out){
return (function (p1__36256_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36256_SHARP_);
});
;})(cs,vec__36265,v,c,inst_36271,inst_36269,inst_36260,inst_36270,state_val_36291,c__33665__auto___36324,out))
})();
var inst_36275 = cljs.core.filterv.call(null,inst_36274,inst_36260);
var inst_36260__$1 = inst_36275;
var state_36290__$1 = (function (){var statearr_36315 = state_36290;
(statearr_36315[(10)] = inst_36260__$1);

return statearr_36315;
})();
var statearr_36316_36353 = state_36290__$1;
(statearr_36316_36353[(2)] = null);

(statearr_36316_36353[(1)] = (2));


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
});})(c__33665__auto___36324,out))
;
return ((function (switch__33280__auto__,c__33665__auto___36324,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_36317 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36317[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_36317[(1)] = (1));

return statearr_36317;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_36290){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_36290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e36318){if((e36318 instanceof Object)){
var ex__33284__auto__ = e36318;
var statearr_36319_36354 = state_36290;
(statearr_36319_36354[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36355 = state_36290;
state_36290 = G__36355;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_36290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_36290);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___36324,out))
})();
var state__33667__auto__ = (function (){var statearr_36320 = f__33666__auto__.call(null);
(statearr_36320[(6)] = c__33665__auto___36324);

return statearr_36320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___36324,out))
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
var G__36357 = arguments.length;
switch (G__36357) {
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
var c__33665__auto___36422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___36422,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___36422,out){
return (function (state_36381){
var state_val_36382 = (state_36381[(1)]);
if((state_val_36382 === (7))){
var inst_36363 = (state_36381[(7)]);
var inst_36363__$1 = (state_36381[(2)]);
var inst_36364 = (inst_36363__$1 == null);
var inst_36365 = cljs.core.not.call(null,inst_36364);
var state_36381__$1 = (function (){var statearr_36383 = state_36381;
(statearr_36383[(7)] = inst_36363__$1);

return statearr_36383;
})();
if(inst_36365){
var statearr_36384_36423 = state_36381__$1;
(statearr_36384_36423[(1)] = (8));

} else {
var statearr_36385_36424 = state_36381__$1;
(statearr_36385_36424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (1))){
var inst_36358 = (0);
var state_36381__$1 = (function (){var statearr_36386 = state_36381;
(statearr_36386[(8)] = inst_36358);

return statearr_36386;
})();
var statearr_36387_36425 = state_36381__$1;
(statearr_36387_36425[(2)] = null);

(statearr_36387_36425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (4))){
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36381__$1,(7),ch);
} else {
if((state_val_36382 === (6))){
var inst_36376 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36388_36426 = state_36381__$1;
(statearr_36388_36426[(2)] = inst_36376);

(statearr_36388_36426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (3))){
var inst_36378 = (state_36381[(2)]);
var inst_36379 = cljs.core.async.close_BANG_.call(null,out);
var state_36381__$1 = (function (){var statearr_36393 = state_36381;
(statearr_36393[(9)] = inst_36378);

return statearr_36393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36381__$1,inst_36379);
} else {
if((state_val_36382 === (2))){
var inst_36358 = (state_36381[(8)]);
var inst_36360 = (inst_36358 < n);
var state_36381__$1 = state_36381;
if(cljs.core.truth_(inst_36360)){
var statearr_36394_36430 = state_36381__$1;
(statearr_36394_36430[(1)] = (4));

} else {
var statearr_36395_36431 = state_36381__$1;
(statearr_36395_36431[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (11))){
var inst_36358 = (state_36381[(8)]);
var inst_36368 = (state_36381[(2)]);
var inst_36369 = (inst_36358 + (1));
var inst_36358__$1 = inst_36369;
var state_36381__$1 = (function (){var statearr_36396 = state_36381;
(statearr_36396[(10)] = inst_36368);

(statearr_36396[(8)] = inst_36358__$1);

return statearr_36396;
})();
var statearr_36397_36435 = state_36381__$1;
(statearr_36397_36435[(2)] = null);

(statearr_36397_36435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (9))){
var state_36381__$1 = state_36381;
var statearr_36401_36436 = state_36381__$1;
(statearr_36401_36436[(2)] = null);

(statearr_36401_36436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (5))){
var state_36381__$1 = state_36381;
var statearr_36402_36437 = state_36381__$1;
(statearr_36402_36437[(2)] = null);

(statearr_36402_36437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (10))){
var inst_36373 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36403_36438 = state_36381__$1;
(statearr_36403_36438[(2)] = inst_36373);

(statearr_36403_36438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (8))){
var inst_36363 = (state_36381[(7)]);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36381__$1,(11),out,inst_36363);
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
});})(c__33665__auto___36422,out))
;
return ((function (switch__33280__auto__,c__33665__auto___36422,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_36408 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36408[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_36408[(1)] = (1));

return statearr_36408;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_36381){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_36381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e36410){if((e36410 instanceof Object)){
var ex__33284__auto__ = e36410;
var statearr_36411_36442 = state_36381;
(statearr_36411_36442[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36443 = state_36381;
state_36381 = G__36443;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_36381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_36381);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___36422,out))
})();
var state__33667__auto__ = (function (){var statearr_36415 = f__33666__auto__.call(null);
(statearr_36415[(6)] = c__33665__auto___36422);

return statearr_36415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___36422,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36445 = (function (f,ch,meta36446){
this.f = f;
this.ch = ch;
this.meta36446 = meta36446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36447,meta36446__$1){
var self__ = this;
var _36447__$1 = this;
return (new cljs.core.async.t_cljs$core$async36445(self__.f,self__.ch,meta36446__$1));
});

cljs.core.async.t_cljs$core$async36445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36447){
var self__ = this;
var _36447__$1 = this;
return self__.meta36446;
});

cljs.core.async.t_cljs$core$async36445.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36445.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36445.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36448 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36448 = (function (f,ch,meta36446,_,fn1,meta36449){
this.f = f;
this.ch = ch;
this.meta36446 = meta36446;
this._ = _;
this.fn1 = fn1;
this.meta36449 = meta36449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36450,meta36449__$1){
var self__ = this;
var _36450__$1 = this;
return (new cljs.core.async.t_cljs$core$async36448(self__.f,self__.ch,self__.meta36446,self__._,self__.fn1,meta36449__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36450){
var self__ = this;
var _36450__$1 = this;
return self__.meta36449;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36444_SHARP_){
return f1.call(null,(((p1__36444_SHARP_ == null))?null:self__.f.call(null,p1__36444_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36448.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36446","meta36446",-1047714441,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36445","cljs.core.async/t_cljs$core$async36445",-782024694,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36449","meta36449",-1747461729,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36448.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36448";

cljs.core.async.t_cljs$core$async36448.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36448");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36448 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36448(f__$1,ch__$1,meta36446__$1,___$2,fn1__$1,meta36449){
return (new cljs.core.async.t_cljs$core$async36448(f__$1,ch__$1,meta36446__$1,___$2,fn1__$1,meta36449));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36448(self__.f,self__.ch,self__.meta36446,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async36445.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36446","meta36446",-1047714441,null)], null);
});

cljs.core.async.t_cljs$core$async36445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36445";

cljs.core.async.t_cljs$core$async36445.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36445");
});

cljs.core.async.__GT_t_cljs$core$async36445 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36445(f__$1,ch__$1,meta36446){
return (new cljs.core.async.t_cljs$core$async36445(f__$1,ch__$1,meta36446));
});

}

return (new cljs.core.async.t_cljs$core$async36445(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36475 = (function (f,ch,meta36476){
this.f = f;
this.ch = ch;
this.meta36476 = meta36476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36477,meta36476__$1){
var self__ = this;
var _36477__$1 = this;
return (new cljs.core.async.t_cljs$core$async36475(self__.f,self__.ch,meta36476__$1));
});

cljs.core.async.t_cljs$core$async36475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36477){
var self__ = this;
var _36477__$1 = this;
return self__.meta36476;
});

cljs.core.async.t_cljs$core$async36475.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36475.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36475.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36476","meta36476",314877549,null)], null);
});

cljs.core.async.t_cljs$core$async36475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36475";

cljs.core.async.t_cljs$core$async36475.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36475");
});

cljs.core.async.__GT_t_cljs$core$async36475 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36475(f__$1,ch__$1,meta36476){
return (new cljs.core.async.t_cljs$core$async36475(f__$1,ch__$1,meta36476));
});

}

return (new cljs.core.async.t_cljs$core$async36475(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36482 = (function (p,ch,meta36483){
this.p = p;
this.ch = ch;
this.meta36483 = meta36483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36484,meta36483__$1){
var self__ = this;
var _36484__$1 = this;
return (new cljs.core.async.t_cljs$core$async36482(self__.p,self__.ch,meta36483__$1));
});

cljs.core.async.t_cljs$core$async36482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36484){
var self__ = this;
var _36484__$1 = this;
return self__.meta36483;
});

cljs.core.async.t_cljs$core$async36482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36482.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36483","meta36483",1966410486,null)], null);
});

cljs.core.async.t_cljs$core$async36482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36482";

cljs.core.async.t_cljs$core$async36482.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36482");
});

cljs.core.async.__GT_t_cljs$core$async36482 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36482(p__$1,ch__$1,meta36483){
return (new cljs.core.async.t_cljs$core$async36482(p__$1,ch__$1,meta36483));
});

}

return (new cljs.core.async.t_cljs$core$async36482(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36491 = arguments.length;
switch (G__36491) {
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
var c__33665__auto___36556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___36556,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___36556,out){
return (function (state_36516){
var state_val_36517 = (state_36516[(1)]);
if((state_val_36517 === (7))){
var inst_36512 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
var statearr_36518_36557 = state_36516__$1;
(statearr_36518_36557[(2)] = inst_36512);

(statearr_36518_36557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (1))){
var state_36516__$1 = state_36516;
var statearr_36519_36558 = state_36516__$1;
(statearr_36519_36558[(2)] = null);

(statearr_36519_36558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (4))){
var inst_36498 = (state_36516[(7)]);
var inst_36498__$1 = (state_36516[(2)]);
var inst_36499 = (inst_36498__$1 == null);
var state_36516__$1 = (function (){var statearr_36522 = state_36516;
(statearr_36522[(7)] = inst_36498__$1);

return statearr_36522;
})();
if(cljs.core.truth_(inst_36499)){
var statearr_36523_36561 = state_36516__$1;
(statearr_36523_36561[(1)] = (5));

} else {
var statearr_36524_36562 = state_36516__$1;
(statearr_36524_36562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (6))){
var inst_36498 = (state_36516[(7)]);
var inst_36503 = p.call(null,inst_36498);
var state_36516__$1 = state_36516;
if(cljs.core.truth_(inst_36503)){
var statearr_36525_36564 = state_36516__$1;
(statearr_36525_36564[(1)] = (8));

} else {
var statearr_36531_36565 = state_36516__$1;
(statearr_36531_36565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (3))){
var inst_36514 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36516__$1,inst_36514);
} else {
if((state_val_36517 === (2))){
var state_36516__$1 = state_36516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36516__$1,(4),ch);
} else {
if((state_val_36517 === (11))){
var inst_36506 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
var statearr_36532_36569 = state_36516__$1;
(statearr_36532_36569[(2)] = inst_36506);

(statearr_36532_36569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (9))){
var state_36516__$1 = state_36516;
var statearr_36533_36570 = state_36516__$1;
(statearr_36533_36570[(2)] = null);

(statearr_36533_36570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (5))){
var inst_36501 = cljs.core.async.close_BANG_.call(null,out);
var state_36516__$1 = state_36516;
var statearr_36534_36577 = state_36516__$1;
(statearr_36534_36577[(2)] = inst_36501);

(statearr_36534_36577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (10))){
var inst_36509 = (state_36516[(2)]);
var state_36516__$1 = (function (){var statearr_36535 = state_36516;
(statearr_36535[(8)] = inst_36509);

return statearr_36535;
})();
var statearr_36536_36605 = state_36516__$1;
(statearr_36536_36605[(2)] = null);

(statearr_36536_36605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (8))){
var inst_36498 = (state_36516[(7)]);
var state_36516__$1 = state_36516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36516__$1,(11),out,inst_36498);
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
});})(c__33665__auto___36556,out))
;
return ((function (switch__33280__auto__,c__33665__auto___36556,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_36540 = [null,null,null,null,null,null,null,null,null];
(statearr_36540[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_36540[(1)] = (1));

return statearr_36540;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_36516){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_36516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e36541){if((e36541 instanceof Object)){
var ex__33284__auto__ = e36541;
var statearr_36542_36615 = state_36516;
(statearr_36542_36615[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36616 = state_36516;
state_36516 = G__36616;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_36516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_36516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___36556,out))
})();
var state__33667__auto__ = (function (){var statearr_36543 = f__33666__auto__.call(null);
(statearr_36543[(6)] = c__33665__auto___36556);

return statearr_36543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___36556,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36618 = arguments.length;
switch (G__36618) {
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
return (function (state_36684){
var state_val_36685 = (state_36684[(1)]);
if((state_val_36685 === (7))){
var inst_36680 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36686_36766 = state_36684__$1;
(statearr_36686_36766[(2)] = inst_36680);

(statearr_36686_36766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (20))){
var inst_36650 = (state_36684[(7)]);
var inst_36661 = (state_36684[(2)]);
var inst_36662 = cljs.core.next.call(null,inst_36650);
var inst_36636 = inst_36662;
var inst_36637 = null;
var inst_36638 = (0);
var inst_36639 = (0);
var state_36684__$1 = (function (){var statearr_36690 = state_36684;
(statearr_36690[(8)] = inst_36639);

(statearr_36690[(9)] = inst_36661);

(statearr_36690[(10)] = inst_36636);

(statearr_36690[(11)] = inst_36638);

(statearr_36690[(12)] = inst_36637);

return statearr_36690;
})();
var statearr_36691_36768 = state_36684__$1;
(statearr_36691_36768[(2)] = null);

(statearr_36691_36768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (1))){
var state_36684__$1 = state_36684;
var statearr_36692_36772 = state_36684__$1;
(statearr_36692_36772[(2)] = null);

(statearr_36692_36772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (4))){
var inst_36625 = (state_36684[(13)]);
var inst_36625__$1 = (state_36684[(2)]);
var inst_36626 = (inst_36625__$1 == null);
var state_36684__$1 = (function (){var statearr_36693 = state_36684;
(statearr_36693[(13)] = inst_36625__$1);

return statearr_36693;
})();
if(cljs.core.truth_(inst_36626)){
var statearr_36694_36779 = state_36684__$1;
(statearr_36694_36779[(1)] = (5));

} else {
var statearr_36695_36780 = state_36684__$1;
(statearr_36695_36780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (15))){
var state_36684__$1 = state_36684;
var statearr_36699_36781 = state_36684__$1;
(statearr_36699_36781[(2)] = null);

(statearr_36699_36781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (21))){
var state_36684__$1 = state_36684;
var statearr_36701_36782 = state_36684__$1;
(statearr_36701_36782[(2)] = null);

(statearr_36701_36782[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (13))){
var inst_36639 = (state_36684[(8)]);
var inst_36636 = (state_36684[(10)]);
var inst_36638 = (state_36684[(11)]);
var inst_36637 = (state_36684[(12)]);
var inst_36646 = (state_36684[(2)]);
var inst_36647 = (inst_36639 + (1));
var tmp36696 = inst_36636;
var tmp36697 = inst_36638;
var tmp36698 = inst_36637;
var inst_36636__$1 = tmp36696;
var inst_36637__$1 = tmp36698;
var inst_36638__$1 = tmp36697;
var inst_36639__$1 = inst_36647;
var state_36684__$1 = (function (){var statearr_36709 = state_36684;
(statearr_36709[(8)] = inst_36639__$1);

(statearr_36709[(10)] = inst_36636__$1);

(statearr_36709[(14)] = inst_36646);

(statearr_36709[(11)] = inst_36638__$1);

(statearr_36709[(12)] = inst_36637__$1);

return statearr_36709;
})();
var statearr_36710_36783 = state_36684__$1;
(statearr_36710_36783[(2)] = null);

(statearr_36710_36783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (22))){
var state_36684__$1 = state_36684;
var statearr_36712_36784 = state_36684__$1;
(statearr_36712_36784[(2)] = null);

(statearr_36712_36784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (6))){
var inst_36625 = (state_36684[(13)]);
var inst_36634 = f.call(null,inst_36625);
var inst_36635 = cljs.core.seq.call(null,inst_36634);
var inst_36636 = inst_36635;
var inst_36637 = null;
var inst_36638 = (0);
var inst_36639 = (0);
var state_36684__$1 = (function (){var statearr_36713 = state_36684;
(statearr_36713[(8)] = inst_36639);

(statearr_36713[(10)] = inst_36636);

(statearr_36713[(11)] = inst_36638);

(statearr_36713[(12)] = inst_36637);

return statearr_36713;
})();
var statearr_36714_36785 = state_36684__$1;
(statearr_36714_36785[(2)] = null);

(statearr_36714_36785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (17))){
var inst_36650 = (state_36684[(7)]);
var inst_36654 = cljs.core.chunk_first.call(null,inst_36650);
var inst_36655 = cljs.core.chunk_rest.call(null,inst_36650);
var inst_36656 = cljs.core.count.call(null,inst_36654);
var inst_36636 = inst_36655;
var inst_36637 = inst_36654;
var inst_36638 = inst_36656;
var inst_36639 = (0);
var state_36684__$1 = (function (){var statearr_36724 = state_36684;
(statearr_36724[(8)] = inst_36639);

(statearr_36724[(10)] = inst_36636);

(statearr_36724[(11)] = inst_36638);

(statearr_36724[(12)] = inst_36637);

return statearr_36724;
})();
var statearr_36725_36786 = state_36684__$1;
(statearr_36725_36786[(2)] = null);

(statearr_36725_36786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (3))){
var inst_36682 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36684__$1,inst_36682);
} else {
if((state_val_36685 === (12))){
var inst_36670 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36726_36787 = state_36684__$1;
(statearr_36726_36787[(2)] = inst_36670);

(statearr_36726_36787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (2))){
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36684__$1,(4),in$);
} else {
if((state_val_36685 === (23))){
var inst_36678 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36727_36788 = state_36684__$1;
(statearr_36727_36788[(2)] = inst_36678);

(statearr_36727_36788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (19))){
var inst_36665 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36728_36789 = state_36684__$1;
(statearr_36728_36789[(2)] = inst_36665);

(statearr_36728_36789[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (11))){
var inst_36636 = (state_36684[(10)]);
var inst_36650 = (state_36684[(7)]);
var inst_36650__$1 = cljs.core.seq.call(null,inst_36636);
var state_36684__$1 = (function (){var statearr_36729 = state_36684;
(statearr_36729[(7)] = inst_36650__$1);

return statearr_36729;
})();
if(inst_36650__$1){
var statearr_36730_36792 = state_36684__$1;
(statearr_36730_36792[(1)] = (14));

} else {
var statearr_36731_36794 = state_36684__$1;
(statearr_36731_36794[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (9))){
var inst_36672 = (state_36684[(2)]);
var inst_36673 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36684__$1 = (function (){var statearr_36732 = state_36684;
(statearr_36732[(15)] = inst_36672);

return statearr_36732;
})();
if(cljs.core.truth_(inst_36673)){
var statearr_36733_36795 = state_36684__$1;
(statearr_36733_36795[(1)] = (21));

} else {
var statearr_36734_36796 = state_36684__$1;
(statearr_36734_36796[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (5))){
var inst_36628 = cljs.core.async.close_BANG_.call(null,out);
var state_36684__$1 = state_36684;
var statearr_36735_36797 = state_36684__$1;
(statearr_36735_36797[(2)] = inst_36628);

(statearr_36735_36797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (14))){
var inst_36650 = (state_36684[(7)]);
var inst_36652 = cljs.core.chunked_seq_QMARK_.call(null,inst_36650);
var state_36684__$1 = state_36684;
if(inst_36652){
var statearr_36739_36798 = state_36684__$1;
(statearr_36739_36798[(1)] = (17));

} else {
var statearr_36740_36799 = state_36684__$1;
(statearr_36740_36799[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (16))){
var inst_36668 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36747_36800 = state_36684__$1;
(statearr_36747_36800[(2)] = inst_36668);

(statearr_36747_36800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (10))){
var inst_36639 = (state_36684[(8)]);
var inst_36637 = (state_36684[(12)]);
var inst_36644 = cljs.core._nth.call(null,inst_36637,inst_36639);
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36684__$1,(13),out,inst_36644);
} else {
if((state_val_36685 === (18))){
var inst_36650 = (state_36684[(7)]);
var inst_36659 = cljs.core.first.call(null,inst_36650);
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36684__$1,(20),out,inst_36659);
} else {
if((state_val_36685 === (8))){
var inst_36639 = (state_36684[(8)]);
var inst_36638 = (state_36684[(11)]);
var inst_36641 = (inst_36639 < inst_36638);
var inst_36642 = inst_36641;
var state_36684__$1 = state_36684;
if(cljs.core.truth_(inst_36642)){
var statearr_36748_36801 = state_36684__$1;
(statearr_36748_36801[(1)] = (10));

} else {
var statearr_36749_36802 = state_36684__$1;
(statearr_36749_36802[(1)] = (11));

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
var statearr_36750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36750[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__);

(statearr_36750[(1)] = (1));

return statearr_36750;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____1 = (function (state_36684){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_36684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e36751){if((e36751 instanceof Object)){
var ex__33284__auto__ = e36751;
var statearr_36752_36803 = state_36684;
(statearr_36752_36803[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36804 = state_36684;
state_36684 = G__36804;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__ = function(state_36684){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____1.call(this,state_36684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_36753 = f__33666__auto__.call(null);
(statearr_36753[(6)] = c__33665__auto__);

return statearr_36753;
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
var G__36815 = arguments.length;
switch (G__36815) {
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
var G__36819 = arguments.length;
switch (G__36819) {
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
var G__36825 = arguments.length;
switch (G__36825) {
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
var c__33665__auto___36882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___36882,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___36882,out){
return (function (state_36853){
var state_val_36854 = (state_36853[(1)]);
if((state_val_36854 === (7))){
var inst_36848 = (state_36853[(2)]);
var state_36853__$1 = state_36853;
var statearr_36856_36883 = state_36853__$1;
(statearr_36856_36883[(2)] = inst_36848);

(statearr_36856_36883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (1))){
var inst_36829 = null;
var state_36853__$1 = (function (){var statearr_36858 = state_36853;
(statearr_36858[(7)] = inst_36829);

return statearr_36858;
})();
var statearr_36859_36884 = state_36853__$1;
(statearr_36859_36884[(2)] = null);

(statearr_36859_36884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (4))){
var inst_36833 = (state_36853[(8)]);
var inst_36833__$1 = (state_36853[(2)]);
var inst_36834 = (inst_36833__$1 == null);
var inst_36835 = cljs.core.not.call(null,inst_36834);
var state_36853__$1 = (function (){var statearr_36861 = state_36853;
(statearr_36861[(8)] = inst_36833__$1);

return statearr_36861;
})();
if(inst_36835){
var statearr_36862_36885 = state_36853__$1;
(statearr_36862_36885[(1)] = (5));

} else {
var statearr_36863_36886 = state_36853__$1;
(statearr_36863_36886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (6))){
var state_36853__$1 = state_36853;
var statearr_36864_36887 = state_36853__$1;
(statearr_36864_36887[(2)] = null);

(statearr_36864_36887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (3))){
var inst_36850 = (state_36853[(2)]);
var inst_36851 = cljs.core.async.close_BANG_.call(null,out);
var state_36853__$1 = (function (){var statearr_36865 = state_36853;
(statearr_36865[(9)] = inst_36850);

return statearr_36865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36853__$1,inst_36851);
} else {
if((state_val_36854 === (2))){
var state_36853__$1 = state_36853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36853__$1,(4),ch);
} else {
if((state_val_36854 === (11))){
var inst_36833 = (state_36853[(8)]);
var inst_36842 = (state_36853[(2)]);
var inst_36829 = inst_36833;
var state_36853__$1 = (function (){var statearr_36866 = state_36853;
(statearr_36866[(7)] = inst_36829);

(statearr_36866[(10)] = inst_36842);

return statearr_36866;
})();
var statearr_36867_36888 = state_36853__$1;
(statearr_36867_36888[(2)] = null);

(statearr_36867_36888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (9))){
var inst_36833 = (state_36853[(8)]);
var state_36853__$1 = state_36853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36853__$1,(11),out,inst_36833);
} else {
if((state_val_36854 === (5))){
var inst_36833 = (state_36853[(8)]);
var inst_36829 = (state_36853[(7)]);
var inst_36837 = cljs.core._EQ_.call(null,inst_36833,inst_36829);
var state_36853__$1 = state_36853;
if(inst_36837){
var statearr_36869_36889 = state_36853__$1;
(statearr_36869_36889[(1)] = (8));

} else {
var statearr_36870_36890 = state_36853__$1;
(statearr_36870_36890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (10))){
var inst_36845 = (state_36853[(2)]);
var state_36853__$1 = state_36853;
var statearr_36871_36891 = state_36853__$1;
(statearr_36871_36891[(2)] = inst_36845);

(statearr_36871_36891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36854 === (8))){
var inst_36829 = (state_36853[(7)]);
var tmp36868 = inst_36829;
var inst_36829__$1 = tmp36868;
var state_36853__$1 = (function (){var statearr_36872 = state_36853;
(statearr_36872[(7)] = inst_36829__$1);

return statearr_36872;
})();
var statearr_36873_36896 = state_36853__$1;
(statearr_36873_36896[(2)] = null);

(statearr_36873_36896[(1)] = (2));


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
});})(c__33665__auto___36882,out))
;
return ((function (switch__33280__auto__,c__33665__auto___36882,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_36874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36874[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_36874[(1)] = (1));

return statearr_36874;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_36853){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_36853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e36875){if((e36875 instanceof Object)){
var ex__33284__auto__ = e36875;
var statearr_36877_36899 = state_36853;
(statearr_36877_36899[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36903 = state_36853;
state_36853 = G__36903;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_36853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_36853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___36882,out))
})();
var state__33667__auto__ = (function (){var statearr_36879 = f__33666__auto__.call(null);
(statearr_36879[(6)] = c__33665__auto___36882);

return statearr_36879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___36882,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36909 = arguments.length;
switch (G__36909) {
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
var c__33665__auto___36975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___36975,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___36975,out){
return (function (state_36947){
var state_val_36948 = (state_36947[(1)]);
if((state_val_36948 === (7))){
var inst_36943 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
var statearr_36949_36980 = state_36947__$1;
(statearr_36949_36980[(2)] = inst_36943);

(statearr_36949_36980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (1))){
var inst_36910 = (new Array(n));
var inst_36911 = inst_36910;
var inst_36912 = (0);
var state_36947__$1 = (function (){var statearr_36950 = state_36947;
(statearr_36950[(7)] = inst_36911);

(statearr_36950[(8)] = inst_36912);

return statearr_36950;
})();
var statearr_36951_36981 = state_36947__$1;
(statearr_36951_36981[(2)] = null);

(statearr_36951_36981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (4))){
var inst_36915 = (state_36947[(9)]);
var inst_36915__$1 = (state_36947[(2)]);
var inst_36916 = (inst_36915__$1 == null);
var inst_36917 = cljs.core.not.call(null,inst_36916);
var state_36947__$1 = (function (){var statearr_36952 = state_36947;
(statearr_36952[(9)] = inst_36915__$1);

return statearr_36952;
})();
if(inst_36917){
var statearr_36953_36982 = state_36947__$1;
(statearr_36953_36982[(1)] = (5));

} else {
var statearr_36954_36983 = state_36947__$1;
(statearr_36954_36983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (15))){
var inst_36937 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
var statearr_36955_36984 = state_36947__$1;
(statearr_36955_36984[(2)] = inst_36937);

(statearr_36955_36984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (13))){
var state_36947__$1 = state_36947;
var statearr_36956_36985 = state_36947__$1;
(statearr_36956_36985[(2)] = null);

(statearr_36956_36985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (6))){
var inst_36912 = (state_36947[(8)]);
var inst_36933 = (inst_36912 > (0));
var state_36947__$1 = state_36947;
if(cljs.core.truth_(inst_36933)){
var statearr_36957_36993 = state_36947__$1;
(statearr_36957_36993[(1)] = (12));

} else {
var statearr_36958_36994 = state_36947__$1;
(statearr_36958_36994[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (3))){
var inst_36945 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36947__$1,inst_36945);
} else {
if((state_val_36948 === (12))){
var inst_36911 = (state_36947[(7)]);
var inst_36935 = cljs.core.vec.call(null,inst_36911);
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36947__$1,(15),out,inst_36935);
} else {
if((state_val_36948 === (2))){
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36947__$1,(4),ch);
} else {
if((state_val_36948 === (11))){
var inst_36927 = (state_36947[(2)]);
var inst_36928 = (new Array(n));
var inst_36911 = inst_36928;
var inst_36912 = (0);
var state_36947__$1 = (function (){var statearr_36959 = state_36947;
(statearr_36959[(7)] = inst_36911);

(statearr_36959[(8)] = inst_36912);

(statearr_36959[(10)] = inst_36927);

return statearr_36959;
})();
var statearr_36960_36995 = state_36947__$1;
(statearr_36960_36995[(2)] = null);

(statearr_36960_36995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (9))){
var inst_36911 = (state_36947[(7)]);
var inst_36925 = cljs.core.vec.call(null,inst_36911);
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36947__$1,(11),out,inst_36925);
} else {
if((state_val_36948 === (5))){
var inst_36911 = (state_36947[(7)]);
var inst_36912 = (state_36947[(8)]);
var inst_36915 = (state_36947[(9)]);
var inst_36920 = (state_36947[(11)]);
var inst_36919 = (inst_36911[inst_36912] = inst_36915);
var inst_36920__$1 = (inst_36912 + (1));
var inst_36921 = (inst_36920__$1 < n);
var state_36947__$1 = (function (){var statearr_36961 = state_36947;
(statearr_36961[(12)] = inst_36919);

(statearr_36961[(11)] = inst_36920__$1);

return statearr_36961;
})();
if(cljs.core.truth_(inst_36921)){
var statearr_36962_37000 = state_36947__$1;
(statearr_36962_37000[(1)] = (8));

} else {
var statearr_36963_37004 = state_36947__$1;
(statearr_36963_37004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (14))){
var inst_36940 = (state_36947[(2)]);
var inst_36941 = cljs.core.async.close_BANG_.call(null,out);
var state_36947__$1 = (function (){var statearr_36965 = state_36947;
(statearr_36965[(13)] = inst_36940);

return statearr_36965;
})();
var statearr_36966_37005 = state_36947__$1;
(statearr_36966_37005[(2)] = inst_36941);

(statearr_36966_37005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (10))){
var inst_36931 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
var statearr_36967_37006 = state_36947__$1;
(statearr_36967_37006[(2)] = inst_36931);

(statearr_36967_37006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (8))){
var inst_36911 = (state_36947[(7)]);
var inst_36920 = (state_36947[(11)]);
var tmp36964 = inst_36911;
var inst_36911__$1 = tmp36964;
var inst_36912 = inst_36920;
var state_36947__$1 = (function (){var statearr_36968 = state_36947;
(statearr_36968[(7)] = inst_36911__$1);

(statearr_36968[(8)] = inst_36912);

return statearr_36968;
})();
var statearr_36969_37007 = state_36947__$1;
(statearr_36969_37007[(2)] = null);

(statearr_36969_37007[(1)] = (2));


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
});})(c__33665__auto___36975,out))
;
return ((function (switch__33280__auto__,c__33665__auto___36975,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_36970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36970[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_36970[(1)] = (1));

return statearr_36970;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_36947){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_36947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e36971){if((e36971 instanceof Object)){
var ex__33284__auto__ = e36971;
var statearr_36972_37008 = state_36947;
(statearr_36972_37008[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37009 = state_36947;
state_36947 = G__37009;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_36947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_36947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___36975,out))
})();
var state__33667__auto__ = (function (){var statearr_36973 = f__33666__auto__.call(null);
(statearr_36973[(6)] = c__33665__auto___36975);

return statearr_36973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___36975,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37011 = arguments.length;
switch (G__37011) {
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
var c__33665__auto___37108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___37108,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___37108,out){
return (function (state_37053){
var state_val_37054 = (state_37053[(1)]);
if((state_val_37054 === (7))){
var inst_37049 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37059_37120 = state_37053__$1;
(statearr_37059_37120[(2)] = inst_37049);

(statearr_37059_37120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (1))){
var inst_37012 = [];
var inst_37013 = inst_37012;
var inst_37014 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37053__$1 = (function (){var statearr_37060 = state_37053;
(statearr_37060[(7)] = inst_37013);

(statearr_37060[(8)] = inst_37014);

return statearr_37060;
})();
var statearr_37062_37121 = state_37053__$1;
(statearr_37062_37121[(2)] = null);

(statearr_37062_37121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (4))){
var inst_37017 = (state_37053[(9)]);
var inst_37017__$1 = (state_37053[(2)]);
var inst_37018 = (inst_37017__$1 == null);
var inst_37019 = cljs.core.not.call(null,inst_37018);
var state_37053__$1 = (function (){var statearr_37063 = state_37053;
(statearr_37063[(9)] = inst_37017__$1);

return statearr_37063;
})();
if(inst_37019){
var statearr_37064_37122 = state_37053__$1;
(statearr_37064_37122[(1)] = (5));

} else {
var statearr_37065_37123 = state_37053__$1;
(statearr_37065_37123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (15))){
var inst_37043 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37066_37124 = state_37053__$1;
(statearr_37066_37124[(2)] = inst_37043);

(statearr_37066_37124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (13))){
var state_37053__$1 = state_37053;
var statearr_37067_37134 = state_37053__$1;
(statearr_37067_37134[(2)] = null);

(statearr_37067_37134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (6))){
var inst_37013 = (state_37053[(7)]);
var inst_37038 = inst_37013.length;
var inst_37039 = (inst_37038 > (0));
var state_37053__$1 = state_37053;
if(cljs.core.truth_(inst_37039)){
var statearr_37068_37138 = state_37053__$1;
(statearr_37068_37138[(1)] = (12));

} else {
var statearr_37069_37139 = state_37053__$1;
(statearr_37069_37139[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (3))){
var inst_37051 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37053__$1,inst_37051);
} else {
if((state_val_37054 === (12))){
var inst_37013 = (state_37053[(7)]);
var inst_37041 = cljs.core.vec.call(null,inst_37013);
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37053__$1,(15),out,inst_37041);
} else {
if((state_val_37054 === (2))){
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37053__$1,(4),ch);
} else {
if((state_val_37054 === (11))){
var inst_37021 = (state_37053[(10)]);
var inst_37017 = (state_37053[(9)]);
var inst_37031 = (state_37053[(2)]);
var inst_37032 = [];
var inst_37033 = inst_37032.push(inst_37017);
var inst_37013 = inst_37032;
var inst_37014 = inst_37021;
var state_37053__$1 = (function (){var statearr_37080 = state_37053;
(statearr_37080[(7)] = inst_37013);

(statearr_37080[(8)] = inst_37014);

(statearr_37080[(11)] = inst_37031);

(statearr_37080[(12)] = inst_37033);

return statearr_37080;
})();
var statearr_37081_37143 = state_37053__$1;
(statearr_37081_37143[(2)] = null);

(statearr_37081_37143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (9))){
var inst_37013 = (state_37053[(7)]);
var inst_37029 = cljs.core.vec.call(null,inst_37013);
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37053__$1,(11),out,inst_37029);
} else {
if((state_val_37054 === (5))){
var inst_37021 = (state_37053[(10)]);
var inst_37014 = (state_37053[(8)]);
var inst_37017 = (state_37053[(9)]);
var inst_37021__$1 = f.call(null,inst_37017);
var inst_37022 = cljs.core._EQ_.call(null,inst_37021__$1,inst_37014);
var inst_37023 = cljs.core.keyword_identical_QMARK_.call(null,inst_37014,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37024 = (inst_37022) || (inst_37023);
var state_37053__$1 = (function (){var statearr_37088 = state_37053;
(statearr_37088[(10)] = inst_37021__$1);

return statearr_37088;
})();
if(cljs.core.truth_(inst_37024)){
var statearr_37089_37147 = state_37053__$1;
(statearr_37089_37147[(1)] = (8));

} else {
var statearr_37090_37148 = state_37053__$1;
(statearr_37090_37148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (14))){
var inst_37046 = (state_37053[(2)]);
var inst_37047 = cljs.core.async.close_BANG_.call(null,out);
var state_37053__$1 = (function (){var statearr_37092 = state_37053;
(statearr_37092[(13)] = inst_37046);

return statearr_37092;
})();
var statearr_37093_37149 = state_37053__$1;
(statearr_37093_37149[(2)] = inst_37047);

(statearr_37093_37149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (10))){
var inst_37036 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37094_37150 = state_37053__$1;
(statearr_37094_37150[(2)] = inst_37036);

(statearr_37094_37150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (8))){
var inst_37013 = (state_37053[(7)]);
var inst_37021 = (state_37053[(10)]);
var inst_37017 = (state_37053[(9)]);
var inst_37026 = inst_37013.push(inst_37017);
var tmp37091 = inst_37013;
var inst_37013__$1 = tmp37091;
var inst_37014 = inst_37021;
var state_37053__$1 = (function (){var statearr_37095 = state_37053;
(statearr_37095[(7)] = inst_37013__$1);

(statearr_37095[(14)] = inst_37026);

(statearr_37095[(8)] = inst_37014);

return statearr_37095;
})();
var statearr_37100_37151 = state_37053__$1;
(statearr_37100_37151[(2)] = null);

(statearr_37100_37151[(1)] = (2));


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
});})(c__33665__auto___37108,out))
;
return ((function (switch__33280__auto__,c__33665__auto___37108,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_37101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37101[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_37101[(1)] = (1));

return statearr_37101;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_37053){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_37053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e37102){if((e37102 instanceof Object)){
var ex__33284__auto__ = e37102;
var statearr_37103_37152 = state_37053;
(statearr_37103_37152[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37156 = state_37053;
state_37053 = G__37156;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_37053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_37053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___37108,out))
})();
var state__33667__auto__ = (function (){var statearr_37104 = f__33666__auto__.call(null);
(statearr_37104[(6)] = c__33665__auto___37108);

return statearr_37104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___37108,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510229215434
