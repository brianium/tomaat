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
var G__46098 = arguments.length;
switch (G__46098) {
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
if(typeof cljs.core.async.t_cljs$core$async46099 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46099 = (function (f,blockable,meta46100){
this.f = f;
this.blockable = blockable;
this.meta46100 = meta46100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46101,meta46100__$1){
var self__ = this;
var _46101__$1 = this;
return (new cljs.core.async.t_cljs$core$async46099(self__.f,self__.blockable,meta46100__$1));
});

cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46101){
var self__ = this;
var _46101__$1 = this;
return self__.meta46100;
});

cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46100","meta46100",-1896470028,null)], null);
});

cljs.core.async.t_cljs$core$async46099.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46099";

cljs.core.async.t_cljs$core$async46099.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async46099");
});

cljs.core.async.__GT_t_cljs$core$async46099 = (function cljs$core$async$__GT_t_cljs$core$async46099(f__$1,blockable__$1,meta46100){
return (new cljs.core.async.t_cljs$core$async46099(f__$1,blockable__$1,meta46100));
});

}

return (new cljs.core.async.t_cljs$core$async46099(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46139 = arguments.length;
switch (G__46139) {
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
var G__46152 = arguments.length;
switch (G__46152) {
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
var G__46199 = arguments.length;
switch (G__46199) {
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
var val_46207 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46207);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46207,ret){
return (function (){
return fn1.call(null,val_46207);
});})(val_46207,ret))
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
var G__46209 = arguments.length;
switch (G__46209) {
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
var n__31115__auto___46231 = n;
var x_46232 = (0);
while(true){
if((x_46232 < n__31115__auto___46231)){
(a[x_46232] = (0));

var G__46233 = (x_46232 + (1));
x_46232 = G__46233;
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

var G__46236 = (i + (1));
i = G__46236;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46238 = (function (flag,meta46239){
this.flag = flag;
this.meta46239 = meta46239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46240,meta46239__$1){
var self__ = this;
var _46240__$1 = this;
return (new cljs.core.async.t_cljs$core$async46238(self__.flag,meta46239__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46240){
var self__ = this;
var _46240__$1 = this;
return self__.meta46239;
});})(flag))
;

cljs.core.async.t_cljs$core$async46238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46238.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46239","meta46239",-397445705,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46238";

cljs.core.async.t_cljs$core$async46238.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async46238");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46238 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46238(flag__$1,meta46239){
return (new cljs.core.async.t_cljs$core$async46238(flag__$1,meta46239));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46238(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46244 = (function (flag,cb,meta46245){
this.flag = flag;
this.cb = cb;
this.meta46245 = meta46245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46246,meta46245__$1){
var self__ = this;
var _46246__$1 = this;
return (new cljs.core.async.t_cljs$core$async46244(self__.flag,self__.cb,meta46245__$1));
});

cljs.core.async.t_cljs$core$async46244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46246){
var self__ = this;
var _46246__$1 = this;
return self__.meta46245;
});

cljs.core.async.t_cljs$core$async46244.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46244.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46245","meta46245",-1487407982,null)], null);
});

cljs.core.async.t_cljs$core$async46244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46244";

cljs.core.async.t_cljs$core$async46244.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async46244");
});

cljs.core.async.__GT_t_cljs$core$async46244 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46244(flag__$1,cb__$1,meta46245){
return (new cljs.core.async.t_cljs$core$async46244(flag__$1,cb__$1,meta46245));
});

}

return (new cljs.core.async.t_cljs$core$async46244(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46253_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46253_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46254_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46254_SHARP_,port], null));
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
var G__46267 = (i + (1));
i = G__46267;
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
var len__31349__auto___46283 = arguments.length;
var i__31350__auto___46284 = (0);
while(true){
if((i__31350__auto___46284 < len__31349__auto___46283)){
args__31356__auto__.push((arguments[i__31350__auto___46284]));

var G__46286 = (i__31350__auto___46284 + (1));
i__31350__auto___46284 = G__46286;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46275){
var map__46277 = p__46275;
var map__46277__$1 = ((((!((map__46277 == null)))?((((map__46277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46277):map__46277);
var opts = map__46277__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46273){
var G__46274 = cljs.core.first.call(null,seq46273);
var seq46273__$1 = cljs.core.next.call(null,seq46273);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46274,seq46273__$1);
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
var G__46290 = arguments.length;
switch (G__46290) {
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
var c__33665__auto___46347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___46347){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___46347){
return (function (state_46315){
var state_val_46316 = (state_46315[(1)]);
if((state_val_46316 === (7))){
var inst_46311 = (state_46315[(2)]);
var state_46315__$1 = state_46315;
var statearr_46319_46349 = state_46315__$1;
(statearr_46319_46349[(2)] = inst_46311);

(statearr_46319_46349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46316 === (1))){
var state_46315__$1 = state_46315;
var statearr_46320_46350 = state_46315__$1;
(statearr_46320_46350[(2)] = null);

(statearr_46320_46350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46316 === (4))){
var inst_46294 = (state_46315[(7)]);
var inst_46294__$1 = (state_46315[(2)]);
var inst_46295 = (inst_46294__$1 == null);
var state_46315__$1 = (function (){var statearr_46325 = state_46315;
(statearr_46325[(7)] = inst_46294__$1);

return statearr_46325;
})();
if(cljs.core.truth_(inst_46295)){
var statearr_46326_46351 = state_46315__$1;
(statearr_46326_46351[(1)] = (5));

} else {
var statearr_46328_46355 = state_46315__$1;
(statearr_46328_46355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46316 === (13))){
var state_46315__$1 = state_46315;
var statearr_46329_46356 = state_46315__$1;
(statearr_46329_46356[(2)] = null);

(statearr_46329_46356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46316 === (6))){
var inst_46294 = (state_46315[(7)]);
var state_46315__$1 = state_46315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46315__$1,(11),to,inst_46294);
} else {
if((state_val_46316 === (3))){
var inst_46313 = (state_46315[(2)]);
var state_46315__$1 = state_46315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46315__$1,inst_46313);
} else {
if((state_val_46316 === (12))){
var state_46315__$1 = state_46315;
var statearr_46330_46358 = state_46315__$1;
(statearr_46330_46358[(2)] = null);

(statearr_46330_46358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46316 === (2))){
var state_46315__$1 = state_46315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46315__$1,(4),from);
} else {
if((state_val_46316 === (11))){
var inst_46304 = (state_46315[(2)]);
var state_46315__$1 = state_46315;
if(cljs.core.truth_(inst_46304)){
var statearr_46332_46359 = state_46315__$1;
(statearr_46332_46359[(1)] = (12));

} else {
var statearr_46333_46360 = state_46315__$1;
(statearr_46333_46360[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46316 === (9))){
var state_46315__$1 = state_46315;
var statearr_46334_46361 = state_46315__$1;
(statearr_46334_46361[(2)] = null);

(statearr_46334_46361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46316 === (5))){
var state_46315__$1 = state_46315;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46335_46362 = state_46315__$1;
(statearr_46335_46362[(1)] = (8));

} else {
var statearr_46336_46363 = state_46315__$1;
(statearr_46336_46363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46316 === (14))){
var inst_46309 = (state_46315[(2)]);
var state_46315__$1 = state_46315;
var statearr_46337_46364 = state_46315__$1;
(statearr_46337_46364[(2)] = inst_46309);

(statearr_46337_46364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46316 === (10))){
var inst_46301 = (state_46315[(2)]);
var state_46315__$1 = state_46315;
var statearr_46338_46365 = state_46315__$1;
(statearr_46338_46365[(2)] = inst_46301);

(statearr_46338_46365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46316 === (8))){
var inst_46298 = cljs.core.async.close_BANG_.call(null,to);
var state_46315__$1 = state_46315;
var statearr_46340_46368 = state_46315__$1;
(statearr_46340_46368[(2)] = inst_46298);

(statearr_46340_46368[(1)] = (10));


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
});})(c__33665__auto___46347))
;
return ((function (switch__33280__auto__,c__33665__auto___46347){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_46341 = [null,null,null,null,null,null,null,null];
(statearr_46341[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_46341[(1)] = (1));

return statearr_46341;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_46315){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_46315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e46342){if((e46342 instanceof Object)){
var ex__33284__auto__ = e46342;
var statearr_46343_46371 = state_46315;
(statearr_46343_46371[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46372 = state_46315;
state_46315 = G__46372;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_46315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_46315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___46347))
})();
var state__33667__auto__ = (function (){var statearr_46345 = f__33666__auto__.call(null);
(statearr_46345[(6)] = c__33665__auto___46347);

return statearr_46345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___46347))
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
return (function (p__46377){
var vec__46378 = p__46377;
var v = cljs.core.nth.call(null,vec__46378,(0),null);
var p = cljs.core.nth.call(null,vec__46378,(1),null);
var job = vec__46378;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33665__auto___46573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___46573,res,vec__46378,v,p,job,jobs,results){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___46573,res,vec__46378,v,p,job,jobs,results){
return (function (state_46385){
var state_val_46386 = (state_46385[(1)]);
if((state_val_46386 === (1))){
var state_46385__$1 = state_46385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46385__$1,(2),res,v);
} else {
if((state_val_46386 === (2))){
var inst_46382 = (state_46385[(2)]);
var inst_46383 = cljs.core.async.close_BANG_.call(null,res);
var state_46385__$1 = (function (){var statearr_46389 = state_46385;
(statearr_46389[(7)] = inst_46382);

return statearr_46389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46385__$1,inst_46383);
} else {
return null;
}
}
});})(c__33665__auto___46573,res,vec__46378,v,p,job,jobs,results))
;
return ((function (switch__33280__auto__,c__33665__auto___46573,res,vec__46378,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_46391 = [null,null,null,null,null,null,null,null];
(statearr_46391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_46391[(1)] = (1));

return statearr_46391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_46385){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_46385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e46392){if((e46392 instanceof Object)){
var ex__33284__auto__ = e46392;
var statearr_46393_46575 = state_46385;
(statearr_46393_46575[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46577 = state_46385;
state_46385 = G__46577;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_46385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_46385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___46573,res,vec__46378,v,p,job,jobs,results))
})();
var state__33667__auto__ = (function (){var statearr_46394 = f__33666__auto__.call(null);
(statearr_46394[(6)] = c__33665__auto___46573);

return statearr_46394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___46573,res,vec__46378,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46395){
var vec__46396 = p__46395;
var v = cljs.core.nth.call(null,vec__46396,(0),null);
var p = cljs.core.nth.call(null,vec__46396,(1),null);
var job = vec__46396;
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
var n__31115__auto___46583 = n;
var __46584 = (0);
while(true){
if((__46584 < n__31115__auto___46583)){
var G__46400_46585 = type;
var G__46400_46586__$1 = (((G__46400_46585 instanceof cljs.core.Keyword))?G__46400_46585.fqn:null);
switch (G__46400_46586__$1) {
case "compute":
var c__33665__auto___46589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46584,c__33665__auto___46589,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (__46584,c__33665__auto___46589,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async){
return (function (state_46413){
var state_val_46414 = (state_46413[(1)]);
if((state_val_46414 === (1))){
var state_46413__$1 = state_46413;
var statearr_46415_46590 = state_46413__$1;
(statearr_46415_46590[(2)] = null);

(statearr_46415_46590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (2))){
var state_46413__$1 = state_46413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46413__$1,(4),jobs);
} else {
if((state_val_46414 === (3))){
var inst_46411 = (state_46413[(2)]);
var state_46413__$1 = state_46413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46413__$1,inst_46411);
} else {
if((state_val_46414 === (4))){
var inst_46403 = (state_46413[(2)]);
var inst_46404 = process.call(null,inst_46403);
var state_46413__$1 = state_46413;
if(cljs.core.truth_(inst_46404)){
var statearr_46416_46591 = state_46413__$1;
(statearr_46416_46591[(1)] = (5));

} else {
var statearr_46417_46592 = state_46413__$1;
(statearr_46417_46592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (5))){
var state_46413__$1 = state_46413;
var statearr_46418_46593 = state_46413__$1;
(statearr_46418_46593[(2)] = null);

(statearr_46418_46593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (6))){
var state_46413__$1 = state_46413;
var statearr_46419_46594 = state_46413__$1;
(statearr_46419_46594[(2)] = null);

(statearr_46419_46594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (7))){
var inst_46409 = (state_46413[(2)]);
var state_46413__$1 = state_46413;
var statearr_46420_46595 = state_46413__$1;
(statearr_46420_46595[(2)] = inst_46409);

(statearr_46420_46595[(1)] = (3));


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
});})(__46584,c__33665__auto___46589,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async))
;
return ((function (__46584,switch__33280__auto__,c__33665__auto___46589,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_46422 = [null,null,null,null,null,null,null];
(statearr_46422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_46422[(1)] = (1));

return statearr_46422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_46413){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_46413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e46423){if((e46423 instanceof Object)){
var ex__33284__auto__ = e46423;
var statearr_46425_46597 = state_46413;
(statearr_46425_46597[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46598 = state_46413;
state_46413 = G__46598;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_46413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_46413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(__46584,switch__33280__auto__,c__33665__auto___46589,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_46427 = f__33666__auto__.call(null);
(statearr_46427[(6)] = c__33665__auto___46589);

return statearr_46427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(__46584,c__33665__auto___46589,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async))
);


break;
case "async":
var c__33665__auto___46599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46584,c__33665__auto___46599,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (__46584,c__33665__auto___46599,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async){
return (function (state_46440){
var state_val_46441 = (state_46440[(1)]);
if((state_val_46441 === (1))){
var state_46440__$1 = state_46440;
var statearr_46442_46600 = state_46440__$1;
(statearr_46442_46600[(2)] = null);

(statearr_46442_46600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (2))){
var state_46440__$1 = state_46440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46440__$1,(4),jobs);
} else {
if((state_val_46441 === (3))){
var inst_46438 = (state_46440[(2)]);
var state_46440__$1 = state_46440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46440__$1,inst_46438);
} else {
if((state_val_46441 === (4))){
var inst_46430 = (state_46440[(2)]);
var inst_46431 = async.call(null,inst_46430);
var state_46440__$1 = state_46440;
if(cljs.core.truth_(inst_46431)){
var statearr_46443_46601 = state_46440__$1;
(statearr_46443_46601[(1)] = (5));

} else {
var statearr_46444_46602 = state_46440__$1;
(statearr_46444_46602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (5))){
var state_46440__$1 = state_46440;
var statearr_46445_46603 = state_46440__$1;
(statearr_46445_46603[(2)] = null);

(statearr_46445_46603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (6))){
var state_46440__$1 = state_46440;
var statearr_46447_46604 = state_46440__$1;
(statearr_46447_46604[(2)] = null);

(statearr_46447_46604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (7))){
var inst_46436 = (state_46440[(2)]);
var state_46440__$1 = state_46440;
var statearr_46448_46606 = state_46440__$1;
(statearr_46448_46606[(2)] = inst_46436);

(statearr_46448_46606[(1)] = (3));


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
});})(__46584,c__33665__auto___46599,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async))
;
return ((function (__46584,switch__33280__auto__,c__33665__auto___46599,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_46452 = [null,null,null,null,null,null,null];
(statearr_46452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_46452[(1)] = (1));

return statearr_46452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_46440){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_46440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e46453){if((e46453 instanceof Object)){
var ex__33284__auto__ = e46453;
var statearr_46454_46608 = state_46440;
(statearr_46454_46608[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46611 = state_46440;
state_46440 = G__46611;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_46440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_46440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(__46584,switch__33280__auto__,c__33665__auto___46599,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_46457 = f__33666__auto__.call(null);
(statearr_46457[(6)] = c__33665__auto___46599);

return statearr_46457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(__46584,c__33665__auto___46599,G__46400_46585,G__46400_46586__$1,n__31115__auto___46583,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46400_46586__$1)].join('')));

}

var G__46613 = (__46584 + (1));
__46584 = G__46613;
continue;
} else {
}
break;
}

var c__33665__auto___46614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___46614,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___46614,jobs,results,process,async){
return (function (state_46479){
var state_val_46480 = (state_46479[(1)]);
if((state_val_46480 === (1))){
var state_46479__$1 = state_46479;
var statearr_46482_46615 = state_46479__$1;
(statearr_46482_46615[(2)] = null);

(statearr_46482_46615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (2))){
var state_46479__$1 = state_46479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46479__$1,(4),from);
} else {
if((state_val_46480 === (3))){
var inst_46477 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46479__$1,inst_46477);
} else {
if((state_val_46480 === (4))){
var inst_46460 = (state_46479[(7)]);
var inst_46460__$1 = (state_46479[(2)]);
var inst_46461 = (inst_46460__$1 == null);
var state_46479__$1 = (function (){var statearr_46483 = state_46479;
(statearr_46483[(7)] = inst_46460__$1);

return statearr_46483;
})();
if(cljs.core.truth_(inst_46461)){
var statearr_46484_46617 = state_46479__$1;
(statearr_46484_46617[(1)] = (5));

} else {
var statearr_46485_46618 = state_46479__$1;
(statearr_46485_46618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (5))){
var inst_46463 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46479__$1 = state_46479;
var statearr_46486_46619 = state_46479__$1;
(statearr_46486_46619[(2)] = inst_46463);

(statearr_46486_46619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (6))){
var inst_46460 = (state_46479[(7)]);
var inst_46465 = (state_46479[(8)]);
var inst_46465__$1 = cljs.core.async.chan.call(null,(1));
var inst_46466 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46467 = [inst_46460,inst_46465__$1];
var inst_46468 = (new cljs.core.PersistentVector(null,2,(5),inst_46466,inst_46467,null));
var state_46479__$1 = (function (){var statearr_46487 = state_46479;
(statearr_46487[(8)] = inst_46465__$1);

return statearr_46487;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46479__$1,(8),jobs,inst_46468);
} else {
if((state_val_46480 === (7))){
var inst_46475 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
var statearr_46488_46621 = state_46479__$1;
(statearr_46488_46621[(2)] = inst_46475);

(statearr_46488_46621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (8))){
var inst_46465 = (state_46479[(8)]);
var inst_46470 = (state_46479[(2)]);
var state_46479__$1 = (function (){var statearr_46489 = state_46479;
(statearr_46489[(9)] = inst_46470);

return statearr_46489;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46479__$1,(9),results,inst_46465);
} else {
if((state_val_46480 === (9))){
var inst_46472 = (state_46479[(2)]);
var state_46479__$1 = (function (){var statearr_46491 = state_46479;
(statearr_46491[(10)] = inst_46472);

return statearr_46491;
})();
var statearr_46492_46624 = state_46479__$1;
(statearr_46492_46624[(2)] = null);

(statearr_46492_46624[(1)] = (2));


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
});})(c__33665__auto___46614,jobs,results,process,async))
;
return ((function (switch__33280__auto__,c__33665__auto___46614,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0 = (function (){
var statearr_46493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_46493[(1)] = (1));

return statearr_46493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_46479){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_46479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e46494){if((e46494 instanceof Object)){
var ex__33284__auto__ = e46494;
var statearr_46495_46638 = state_46479;
(statearr_46495_46638[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46640 = state_46479;
state_46479 = G__46640;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_46479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_46479);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___46614,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_46496 = f__33666__auto__.call(null);
(statearr_46496[(6)] = c__33665__auto___46614);

return statearr_46496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___46614,jobs,results,process,async))
);


var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__,jobs,results,process,async){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__,jobs,results,process,async){
return (function (state_46534){
var state_val_46535 = (state_46534[(1)]);
if((state_val_46535 === (7))){
var inst_46530 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
var statearr_46536_46641 = state_46534__$1;
(statearr_46536_46641[(2)] = inst_46530);

(statearr_46536_46641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (20))){
var state_46534__$1 = state_46534;
var statearr_46537_46647 = state_46534__$1;
(statearr_46537_46647[(2)] = null);

(statearr_46537_46647[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (1))){
var state_46534__$1 = state_46534;
var statearr_46538_46648 = state_46534__$1;
(statearr_46538_46648[(2)] = null);

(statearr_46538_46648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (4))){
var inst_46499 = (state_46534[(7)]);
var inst_46499__$1 = (state_46534[(2)]);
var inst_46500 = (inst_46499__$1 == null);
var state_46534__$1 = (function (){var statearr_46539 = state_46534;
(statearr_46539[(7)] = inst_46499__$1);

return statearr_46539;
})();
if(cljs.core.truth_(inst_46500)){
var statearr_46540_46650 = state_46534__$1;
(statearr_46540_46650[(1)] = (5));

} else {
var statearr_46541_46654 = state_46534__$1;
(statearr_46541_46654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (15))){
var inst_46512 = (state_46534[(8)]);
var state_46534__$1 = state_46534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46534__$1,(18),to,inst_46512);
} else {
if((state_val_46535 === (21))){
var inst_46525 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
var statearr_46542_46655 = state_46534__$1;
(statearr_46542_46655[(2)] = inst_46525);

(statearr_46542_46655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (13))){
var inst_46527 = (state_46534[(2)]);
var state_46534__$1 = (function (){var statearr_46543 = state_46534;
(statearr_46543[(9)] = inst_46527);

return statearr_46543;
})();
var statearr_46544_46656 = state_46534__$1;
(statearr_46544_46656[(2)] = null);

(statearr_46544_46656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (6))){
var inst_46499 = (state_46534[(7)]);
var state_46534__$1 = state_46534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46534__$1,(11),inst_46499);
} else {
if((state_val_46535 === (17))){
var inst_46520 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
if(cljs.core.truth_(inst_46520)){
var statearr_46545_46657 = state_46534__$1;
(statearr_46545_46657[(1)] = (19));

} else {
var statearr_46546_46658 = state_46534__$1;
(statearr_46546_46658[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (3))){
var inst_46532 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46534__$1,inst_46532);
} else {
if((state_val_46535 === (12))){
var inst_46509 = (state_46534[(10)]);
var state_46534__$1 = state_46534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46534__$1,(14),inst_46509);
} else {
if((state_val_46535 === (2))){
var state_46534__$1 = state_46534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46534__$1,(4),results);
} else {
if((state_val_46535 === (19))){
var state_46534__$1 = state_46534;
var statearr_46547_46662 = state_46534__$1;
(statearr_46547_46662[(2)] = null);

(statearr_46547_46662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (11))){
var inst_46509 = (state_46534[(2)]);
var state_46534__$1 = (function (){var statearr_46548 = state_46534;
(statearr_46548[(10)] = inst_46509);

return statearr_46548;
})();
var statearr_46549_46663 = state_46534__$1;
(statearr_46549_46663[(2)] = null);

(statearr_46549_46663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (9))){
var state_46534__$1 = state_46534;
var statearr_46550_46664 = state_46534__$1;
(statearr_46550_46664[(2)] = null);

(statearr_46550_46664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (5))){
var state_46534__$1 = state_46534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46552_46666 = state_46534__$1;
(statearr_46552_46666[(1)] = (8));

} else {
var statearr_46553_46667 = state_46534__$1;
(statearr_46553_46667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (14))){
var inst_46512 = (state_46534[(8)]);
var inst_46514 = (state_46534[(11)]);
var inst_46512__$1 = (state_46534[(2)]);
var inst_46513 = (inst_46512__$1 == null);
var inst_46514__$1 = cljs.core.not.call(null,inst_46513);
var state_46534__$1 = (function (){var statearr_46554 = state_46534;
(statearr_46554[(8)] = inst_46512__$1);

(statearr_46554[(11)] = inst_46514__$1);

return statearr_46554;
})();
if(inst_46514__$1){
var statearr_46555_46668 = state_46534__$1;
(statearr_46555_46668[(1)] = (15));

} else {
var statearr_46556_46669 = state_46534__$1;
(statearr_46556_46669[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (16))){
var inst_46514 = (state_46534[(11)]);
var state_46534__$1 = state_46534;
var statearr_46557_46670 = state_46534__$1;
(statearr_46557_46670[(2)] = inst_46514);

(statearr_46557_46670[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (10))){
var inst_46506 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
var statearr_46558_46671 = state_46534__$1;
(statearr_46558_46671[(2)] = inst_46506);

(statearr_46558_46671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (18))){
var inst_46517 = (state_46534[(2)]);
var state_46534__$1 = state_46534;
var statearr_46559_46672 = state_46534__$1;
(statearr_46559_46672[(2)] = inst_46517);

(statearr_46559_46672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46535 === (8))){
var inst_46503 = cljs.core.async.close_BANG_.call(null,to);
var state_46534__$1 = state_46534;
var statearr_46560_46673 = state_46534__$1;
(statearr_46560_46673[(2)] = inst_46503);

(statearr_46560_46673[(1)] = (10));


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
var statearr_46562 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__);

(statearr_46562[(1)] = (1));

return statearr_46562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1 = (function (state_46534){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_46534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e46563){if((e46563 instanceof Object)){
var ex__33284__auto__ = e46563;
var statearr_46565_46674 = state_46534;
(statearr_46565_46674[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46675 = state_46534;
state_46534 = G__46675;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__ = function(state_46534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1.call(this,state_46534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,jobs,results,process,async))
})();
var state__33667__auto__ = (function (){var statearr_46567 = f__33666__auto__.call(null);
(statearr_46567[(6)] = c__33665__auto__);

return statearr_46567;
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
var G__46680 = arguments.length;
switch (G__46680) {
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
var G__46688 = arguments.length;
switch (G__46688) {
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
var G__46692 = arguments.length;
switch (G__46692) {
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
var c__33665__auto___46755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___46755,tc,fc){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___46755,tc,fc){
return (function (state_46724){
var state_val_46725 = (state_46724[(1)]);
if((state_val_46725 === (7))){
var inst_46720 = (state_46724[(2)]);
var state_46724__$1 = state_46724;
var statearr_46727_46756 = state_46724__$1;
(statearr_46727_46756[(2)] = inst_46720);

(statearr_46727_46756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46725 === (1))){
var state_46724__$1 = state_46724;
var statearr_46728_46757 = state_46724__$1;
(statearr_46728_46757[(2)] = null);

(statearr_46728_46757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46725 === (4))){
var inst_46701 = (state_46724[(7)]);
var inst_46701__$1 = (state_46724[(2)]);
var inst_46702 = (inst_46701__$1 == null);
var state_46724__$1 = (function (){var statearr_46729 = state_46724;
(statearr_46729[(7)] = inst_46701__$1);

return statearr_46729;
})();
if(cljs.core.truth_(inst_46702)){
var statearr_46730_46758 = state_46724__$1;
(statearr_46730_46758[(1)] = (5));

} else {
var statearr_46731_46759 = state_46724__$1;
(statearr_46731_46759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46725 === (13))){
var state_46724__$1 = state_46724;
var statearr_46732_46760 = state_46724__$1;
(statearr_46732_46760[(2)] = null);

(statearr_46732_46760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46725 === (6))){
var inst_46701 = (state_46724[(7)]);
var inst_46707 = p.call(null,inst_46701);
var state_46724__$1 = state_46724;
if(cljs.core.truth_(inst_46707)){
var statearr_46733_46764 = state_46724__$1;
(statearr_46733_46764[(1)] = (9));

} else {
var statearr_46734_46765 = state_46724__$1;
(statearr_46734_46765[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46725 === (3))){
var inst_46722 = (state_46724[(2)]);
var state_46724__$1 = state_46724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46724__$1,inst_46722);
} else {
if((state_val_46725 === (12))){
var state_46724__$1 = state_46724;
var statearr_46735_46768 = state_46724__$1;
(statearr_46735_46768[(2)] = null);

(statearr_46735_46768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46725 === (2))){
var state_46724__$1 = state_46724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46724__$1,(4),ch);
} else {
if((state_val_46725 === (11))){
var inst_46701 = (state_46724[(7)]);
var inst_46711 = (state_46724[(2)]);
var state_46724__$1 = state_46724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46724__$1,(8),inst_46711,inst_46701);
} else {
if((state_val_46725 === (9))){
var state_46724__$1 = state_46724;
var statearr_46736_46772 = state_46724__$1;
(statearr_46736_46772[(2)] = tc);

(statearr_46736_46772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46725 === (5))){
var inst_46704 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46705 = cljs.core.async.close_BANG_.call(null,fc);
var state_46724__$1 = (function (){var statearr_46737 = state_46724;
(statearr_46737[(8)] = inst_46704);

return statearr_46737;
})();
var statearr_46738_46777 = state_46724__$1;
(statearr_46738_46777[(2)] = inst_46705);

(statearr_46738_46777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46725 === (14))){
var inst_46718 = (state_46724[(2)]);
var state_46724__$1 = state_46724;
var statearr_46739_46778 = state_46724__$1;
(statearr_46739_46778[(2)] = inst_46718);

(statearr_46739_46778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46725 === (10))){
var state_46724__$1 = state_46724;
var statearr_46740_46780 = state_46724__$1;
(statearr_46740_46780[(2)] = fc);

(statearr_46740_46780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46725 === (8))){
var inst_46713 = (state_46724[(2)]);
var state_46724__$1 = state_46724;
if(cljs.core.truth_(inst_46713)){
var statearr_46741_46781 = state_46724__$1;
(statearr_46741_46781[(1)] = (12));

} else {
var statearr_46742_46782 = state_46724__$1;
(statearr_46742_46782[(1)] = (13));

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
});})(c__33665__auto___46755,tc,fc))
;
return ((function (switch__33280__auto__,c__33665__auto___46755,tc,fc){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_46746 = [null,null,null,null,null,null,null,null,null];
(statearr_46746[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_46746[(1)] = (1));

return statearr_46746;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_46724){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_46724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e46747){if((e46747 instanceof Object)){
var ex__33284__auto__ = e46747;
var statearr_46748_46783 = state_46724;
(statearr_46748_46783[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46785 = state_46724;
state_46724 = G__46785;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_46724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_46724);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___46755,tc,fc))
})();
var state__33667__auto__ = (function (){var statearr_46752 = f__33666__auto__.call(null);
(statearr_46752[(6)] = c__33665__auto___46755);

return statearr_46752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___46755,tc,fc))
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
return (function (state_46807){
var state_val_46808 = (state_46807[(1)]);
if((state_val_46808 === (7))){
var inst_46803 = (state_46807[(2)]);
var state_46807__$1 = state_46807;
var statearr_46809_46832 = state_46807__$1;
(statearr_46809_46832[(2)] = inst_46803);

(statearr_46809_46832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46808 === (1))){
var inst_46787 = init;
var state_46807__$1 = (function (){var statearr_46810 = state_46807;
(statearr_46810[(7)] = inst_46787);

return statearr_46810;
})();
var statearr_46811_46841 = state_46807__$1;
(statearr_46811_46841[(2)] = null);

(statearr_46811_46841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46808 === (4))){
var inst_46790 = (state_46807[(8)]);
var inst_46790__$1 = (state_46807[(2)]);
var inst_46791 = (inst_46790__$1 == null);
var state_46807__$1 = (function (){var statearr_46812 = state_46807;
(statearr_46812[(8)] = inst_46790__$1);

return statearr_46812;
})();
if(cljs.core.truth_(inst_46791)){
var statearr_46813_46844 = state_46807__$1;
(statearr_46813_46844[(1)] = (5));

} else {
var statearr_46814_46846 = state_46807__$1;
(statearr_46814_46846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46808 === (6))){
var inst_46794 = (state_46807[(9)]);
var inst_46787 = (state_46807[(7)]);
var inst_46790 = (state_46807[(8)]);
var inst_46794__$1 = f.call(null,inst_46787,inst_46790);
var inst_46795 = cljs.core.reduced_QMARK_.call(null,inst_46794__$1);
var state_46807__$1 = (function (){var statearr_46816 = state_46807;
(statearr_46816[(9)] = inst_46794__$1);

return statearr_46816;
})();
if(inst_46795){
var statearr_46818_46851 = state_46807__$1;
(statearr_46818_46851[(1)] = (8));

} else {
var statearr_46819_46852 = state_46807__$1;
(statearr_46819_46852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46808 === (3))){
var inst_46805 = (state_46807[(2)]);
var state_46807__$1 = state_46807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46807__$1,inst_46805);
} else {
if((state_val_46808 === (2))){
var state_46807__$1 = state_46807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46807__$1,(4),ch);
} else {
if((state_val_46808 === (9))){
var inst_46794 = (state_46807[(9)]);
var inst_46787 = inst_46794;
var state_46807__$1 = (function (){var statearr_46820 = state_46807;
(statearr_46820[(7)] = inst_46787);

return statearr_46820;
})();
var statearr_46821_46853 = state_46807__$1;
(statearr_46821_46853[(2)] = null);

(statearr_46821_46853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46808 === (5))){
var inst_46787 = (state_46807[(7)]);
var state_46807__$1 = state_46807;
var statearr_46822_46854 = state_46807__$1;
(statearr_46822_46854[(2)] = inst_46787);

(statearr_46822_46854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46808 === (10))){
var inst_46801 = (state_46807[(2)]);
var state_46807__$1 = state_46807;
var statearr_46823_46858 = state_46807__$1;
(statearr_46823_46858[(2)] = inst_46801);

(statearr_46823_46858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46808 === (8))){
var inst_46794 = (state_46807[(9)]);
var inst_46797 = cljs.core.deref.call(null,inst_46794);
var state_46807__$1 = state_46807;
var statearr_46824_46859 = state_46807__$1;
(statearr_46824_46859[(2)] = inst_46797);

(statearr_46824_46859[(1)] = (10));


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
var statearr_46825 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46825[(0)] = cljs$core$async$reduce_$_state_machine__33281__auto__);

(statearr_46825[(1)] = (1));

return statearr_46825;
});
var cljs$core$async$reduce_$_state_machine__33281__auto____1 = (function (state_46807){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_46807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e46826){if((e46826 instanceof Object)){
var ex__33284__auto__ = e46826;
var statearr_46828_46864 = state_46807;
(statearr_46828_46864[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46865 = state_46807;
state_46807 = G__46865;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33281__auto__ = function(state_46807){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33281__auto____1.call(this,state_46807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33281__auto____0;
cljs$core$async$reduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33281__auto____1;
return cljs$core$async$reduce_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_46830 = f__33666__auto__.call(null);
(statearr_46830[(6)] = c__33665__auto__);

return statearr_46830;
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
return (function (state_46873){
var state_val_46874 = (state_46873[(1)]);
if((state_val_46874 === (1))){
var inst_46868 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_46873__$1 = state_46873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46873__$1,(2),inst_46868);
} else {
if((state_val_46874 === (2))){
var inst_46870 = (state_46873[(2)]);
var inst_46871 = f__$1.call(null,inst_46870);
var state_46873__$1 = state_46873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46873__$1,inst_46871);
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
var statearr_46877 = [null,null,null,null,null,null,null];
(statearr_46877[(0)] = cljs$core$async$transduce_$_state_machine__33281__auto__);

(statearr_46877[(1)] = (1));

return statearr_46877;
});
var cljs$core$async$transduce_$_state_machine__33281__auto____1 = (function (state_46873){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_46873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e46879){if((e46879 instanceof Object)){
var ex__33284__auto__ = e46879;
var statearr_46880_46888 = state_46873;
(statearr_46880_46888[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46889 = state_46873;
state_46873 = G__46889;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33281__auto__ = function(state_46873){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33281__auto____1.call(this,state_46873);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33281__auto____0;
cljs$core$async$transduce_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33281__auto____1;
return cljs$core$async$transduce_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,f__$1))
})();
var state__33667__auto__ = (function (){var statearr_46881 = f__33666__auto__.call(null);
(statearr_46881[(6)] = c__33665__auto__);

return statearr_46881;
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
var G__46894 = arguments.length;
switch (G__46894) {
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
return (function (state_46923){
var state_val_46924 = (state_46923[(1)]);
if((state_val_46924 === (7))){
var inst_46905 = (state_46923[(2)]);
var state_46923__$1 = state_46923;
var statearr_46925_46953 = state_46923__$1;
(statearr_46925_46953[(2)] = inst_46905);

(statearr_46925_46953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (1))){
var inst_46899 = cljs.core.seq.call(null,coll);
var inst_46900 = inst_46899;
var state_46923__$1 = (function (){var statearr_46926 = state_46923;
(statearr_46926[(7)] = inst_46900);

return statearr_46926;
})();
var statearr_46927_46955 = state_46923__$1;
(statearr_46927_46955[(2)] = null);

(statearr_46927_46955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (4))){
var inst_46900 = (state_46923[(7)]);
var inst_46903 = cljs.core.first.call(null,inst_46900);
var state_46923__$1 = state_46923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46923__$1,(7),ch,inst_46903);
} else {
if((state_val_46924 === (13))){
var inst_46917 = (state_46923[(2)]);
var state_46923__$1 = state_46923;
var statearr_46928_46961 = state_46923__$1;
(statearr_46928_46961[(2)] = inst_46917);

(statearr_46928_46961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (6))){
var inst_46908 = (state_46923[(2)]);
var state_46923__$1 = state_46923;
if(cljs.core.truth_(inst_46908)){
var statearr_46929_46963 = state_46923__$1;
(statearr_46929_46963[(1)] = (8));

} else {
var statearr_46930_46967 = state_46923__$1;
(statearr_46930_46967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (3))){
var inst_46921 = (state_46923[(2)]);
var state_46923__$1 = state_46923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46923__$1,inst_46921);
} else {
if((state_val_46924 === (12))){
var state_46923__$1 = state_46923;
var statearr_46931_46968 = state_46923__$1;
(statearr_46931_46968[(2)] = null);

(statearr_46931_46968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (2))){
var inst_46900 = (state_46923[(7)]);
var state_46923__$1 = state_46923;
if(cljs.core.truth_(inst_46900)){
var statearr_46933_46969 = state_46923__$1;
(statearr_46933_46969[(1)] = (4));

} else {
var statearr_46934_46970 = state_46923__$1;
(statearr_46934_46970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (11))){
var inst_46914 = cljs.core.async.close_BANG_.call(null,ch);
var state_46923__$1 = state_46923;
var statearr_46935_46971 = state_46923__$1;
(statearr_46935_46971[(2)] = inst_46914);

(statearr_46935_46971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (9))){
var state_46923__$1 = state_46923;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46936_46972 = state_46923__$1;
(statearr_46936_46972[(1)] = (11));

} else {
var statearr_46937_46973 = state_46923__$1;
(statearr_46937_46973[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (5))){
var inst_46900 = (state_46923[(7)]);
var state_46923__$1 = state_46923;
var statearr_46939_46974 = state_46923__$1;
(statearr_46939_46974[(2)] = inst_46900);

(statearr_46939_46974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (10))){
var inst_46919 = (state_46923[(2)]);
var state_46923__$1 = state_46923;
var statearr_46940_46976 = state_46923__$1;
(statearr_46940_46976[(2)] = inst_46919);

(statearr_46940_46976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (8))){
var inst_46900 = (state_46923[(7)]);
var inst_46910 = cljs.core.next.call(null,inst_46900);
var inst_46900__$1 = inst_46910;
var state_46923__$1 = (function (){var statearr_46944 = state_46923;
(statearr_46944[(7)] = inst_46900__$1);

return statearr_46944;
})();
var statearr_46945_46978 = state_46923__$1;
(statearr_46945_46978[(2)] = null);

(statearr_46945_46978[(1)] = (2));


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
var statearr_46946 = [null,null,null,null,null,null,null,null];
(statearr_46946[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_46946[(1)] = (1));

return statearr_46946;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_46923){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_46923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e46947){if((e46947 instanceof Object)){
var ex__33284__auto__ = e46947;
var statearr_46948_46984 = state_46923;
(statearr_46948_46984[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46985 = state_46923;
state_46923 = G__46985;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_46923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_46923);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_46950 = f__33666__auto__.call(null);
(statearr_46950[(6)] = c__33665__auto__);

return statearr_46950;
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
if(typeof cljs.core.async.t_cljs$core$async47004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47004 = (function (ch,cs,meta47005){
this.ch = ch;
this.cs = cs;
this.meta47005 = meta47005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47006,meta47005__$1){
var self__ = this;
var _47006__$1 = this;
return (new cljs.core.async.t_cljs$core$async47004(self__.ch,self__.cs,meta47005__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47006){
var self__ = this;
var _47006__$1 = this;
return self__.meta47005;
});})(cs))
;

cljs.core.async.t_cljs$core$async47004.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47004.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47004.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47004.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47004.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47004.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47005","meta47005",1022164709,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47004";

cljs.core.async.t_cljs$core$async47004.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async47004");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47004 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47004(ch__$1,cs__$1,meta47005){
return (new cljs.core.async.t_cljs$core$async47004(ch__$1,cs__$1,meta47005));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47004(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33665__auto___47331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___47331,cs,m,dchan,dctr,done){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___47331,cs,m,dchan,dctr,done){
return (function (state_47150){
var state_val_47151 = (state_47150[(1)]);
if((state_val_47151 === (7))){
var inst_47146 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
var statearr_47152_47339 = state_47150__$1;
(statearr_47152_47339[(2)] = inst_47146);

(statearr_47152_47339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (20))){
var inst_47044 = (state_47150[(7)]);
var inst_47056 = cljs.core.first.call(null,inst_47044);
var inst_47057 = cljs.core.nth.call(null,inst_47056,(0),null);
var inst_47058 = cljs.core.nth.call(null,inst_47056,(1),null);
var state_47150__$1 = (function (){var statearr_47155 = state_47150;
(statearr_47155[(8)] = inst_47057);

return statearr_47155;
})();
if(cljs.core.truth_(inst_47058)){
var statearr_47156_47347 = state_47150__$1;
(statearr_47156_47347[(1)] = (22));

} else {
var statearr_47157_47349 = state_47150__$1;
(statearr_47157_47349[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (27))){
var inst_47089 = (state_47150[(9)]);
var inst_47095 = (state_47150[(10)]);
var inst_47012 = (state_47150[(11)]);
var inst_47087 = (state_47150[(12)]);
var inst_47095__$1 = cljs.core._nth.call(null,inst_47087,inst_47089);
var inst_47096 = cljs.core.async.put_BANG_.call(null,inst_47095__$1,inst_47012,done);
var state_47150__$1 = (function (){var statearr_47159 = state_47150;
(statearr_47159[(10)] = inst_47095__$1);

return statearr_47159;
})();
if(cljs.core.truth_(inst_47096)){
var statearr_47160_47352 = state_47150__$1;
(statearr_47160_47352[(1)] = (30));

} else {
var statearr_47161_47353 = state_47150__$1;
(statearr_47161_47353[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (1))){
var state_47150__$1 = state_47150;
var statearr_47163_47358 = state_47150__$1;
(statearr_47163_47358[(2)] = null);

(statearr_47163_47358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (24))){
var inst_47044 = (state_47150[(7)]);
var inst_47064 = (state_47150[(2)]);
var inst_47065 = cljs.core.next.call(null,inst_47044);
var inst_47021 = inst_47065;
var inst_47022 = null;
var inst_47023 = (0);
var inst_47024 = (0);
var state_47150__$1 = (function (){var statearr_47164 = state_47150;
(statearr_47164[(13)] = inst_47064);

(statearr_47164[(14)] = inst_47021);

(statearr_47164[(15)] = inst_47023);

(statearr_47164[(16)] = inst_47022);

(statearr_47164[(17)] = inst_47024);

return statearr_47164;
})();
var statearr_47165_47360 = state_47150__$1;
(statearr_47165_47360[(2)] = null);

(statearr_47165_47360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (39))){
var state_47150__$1 = state_47150;
var statearr_47175_47361 = state_47150__$1;
(statearr_47175_47361[(2)] = null);

(statearr_47175_47361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (4))){
var inst_47012 = (state_47150[(11)]);
var inst_47012__$1 = (state_47150[(2)]);
var inst_47013 = (inst_47012__$1 == null);
var state_47150__$1 = (function (){var statearr_47176 = state_47150;
(statearr_47176[(11)] = inst_47012__$1);

return statearr_47176;
})();
if(cljs.core.truth_(inst_47013)){
var statearr_47177_47364 = state_47150__$1;
(statearr_47177_47364[(1)] = (5));

} else {
var statearr_47182_47366 = state_47150__$1;
(statearr_47182_47366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (15))){
var inst_47021 = (state_47150[(14)]);
var inst_47023 = (state_47150[(15)]);
var inst_47022 = (state_47150[(16)]);
var inst_47024 = (state_47150[(17)]);
var inst_47039 = (state_47150[(2)]);
var inst_47040 = (inst_47024 + (1));
var tmp47169 = inst_47021;
var tmp47170 = inst_47023;
var tmp47171 = inst_47022;
var inst_47021__$1 = tmp47169;
var inst_47022__$1 = tmp47171;
var inst_47023__$1 = tmp47170;
var inst_47024__$1 = inst_47040;
var state_47150__$1 = (function (){var statearr_47183 = state_47150;
(statearr_47183[(14)] = inst_47021__$1);

(statearr_47183[(15)] = inst_47023__$1);

(statearr_47183[(16)] = inst_47022__$1);

(statearr_47183[(17)] = inst_47024__$1);

(statearr_47183[(18)] = inst_47039);

return statearr_47183;
})();
var statearr_47184_47370 = state_47150__$1;
(statearr_47184_47370[(2)] = null);

(statearr_47184_47370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (21))){
var inst_47068 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
var statearr_47192_47372 = state_47150__$1;
(statearr_47192_47372[(2)] = inst_47068);

(statearr_47192_47372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (31))){
var inst_47095 = (state_47150[(10)]);
var inst_47099 = done.call(null,null);
var inst_47100 = cljs.core.async.untap_STAR_.call(null,m,inst_47095);
var state_47150__$1 = (function (){var statearr_47198 = state_47150;
(statearr_47198[(19)] = inst_47099);

return statearr_47198;
})();
var statearr_47199_47373 = state_47150__$1;
(statearr_47199_47373[(2)] = inst_47100);

(statearr_47199_47373[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (32))){
var inst_47089 = (state_47150[(9)]);
var inst_47086 = (state_47150[(20)]);
var inst_47087 = (state_47150[(12)]);
var inst_47088 = (state_47150[(21)]);
var inst_47102 = (state_47150[(2)]);
var inst_47105 = (inst_47089 + (1));
var tmp47189 = inst_47086;
var tmp47190 = inst_47087;
var tmp47191 = inst_47088;
var inst_47086__$1 = tmp47189;
var inst_47087__$1 = tmp47190;
var inst_47088__$1 = tmp47191;
var inst_47089__$1 = inst_47105;
var state_47150__$1 = (function (){var statearr_47202 = state_47150;
(statearr_47202[(9)] = inst_47089__$1);

(statearr_47202[(20)] = inst_47086__$1);

(statearr_47202[(22)] = inst_47102);

(statearr_47202[(12)] = inst_47087__$1);

(statearr_47202[(21)] = inst_47088__$1);

return statearr_47202;
})();
var statearr_47205_47375 = state_47150__$1;
(statearr_47205_47375[(2)] = null);

(statearr_47205_47375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (40))){
var inst_47117 = (state_47150[(23)]);
var inst_47121 = done.call(null,null);
var inst_47122 = cljs.core.async.untap_STAR_.call(null,m,inst_47117);
var state_47150__$1 = (function (){var statearr_47213 = state_47150;
(statearr_47213[(24)] = inst_47121);

return statearr_47213;
})();
var statearr_47215_47377 = state_47150__$1;
(statearr_47215_47377[(2)] = inst_47122);

(statearr_47215_47377[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (33))){
var inst_47108 = (state_47150[(25)]);
var inst_47110 = cljs.core.chunked_seq_QMARK_.call(null,inst_47108);
var state_47150__$1 = state_47150;
if(inst_47110){
var statearr_47216_47379 = state_47150__$1;
(statearr_47216_47379[(1)] = (36));

} else {
var statearr_47217_47381 = state_47150__$1;
(statearr_47217_47381[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (13))){
var inst_47033 = (state_47150[(26)]);
var inst_47036 = cljs.core.async.close_BANG_.call(null,inst_47033);
var state_47150__$1 = state_47150;
var statearr_47220_47383 = state_47150__$1;
(statearr_47220_47383[(2)] = inst_47036);

(statearr_47220_47383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (22))){
var inst_47057 = (state_47150[(8)]);
var inst_47061 = cljs.core.async.close_BANG_.call(null,inst_47057);
var state_47150__$1 = state_47150;
var statearr_47225_47385 = state_47150__$1;
(statearr_47225_47385[(2)] = inst_47061);

(statearr_47225_47385[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (36))){
var inst_47108 = (state_47150[(25)]);
var inst_47112 = cljs.core.chunk_first.call(null,inst_47108);
var inst_47113 = cljs.core.chunk_rest.call(null,inst_47108);
var inst_47114 = cljs.core.count.call(null,inst_47112);
var inst_47086 = inst_47113;
var inst_47087 = inst_47112;
var inst_47088 = inst_47114;
var inst_47089 = (0);
var state_47150__$1 = (function (){var statearr_47226 = state_47150;
(statearr_47226[(9)] = inst_47089);

(statearr_47226[(20)] = inst_47086);

(statearr_47226[(12)] = inst_47087);

(statearr_47226[(21)] = inst_47088);

return statearr_47226;
})();
var statearr_47228_47391 = state_47150__$1;
(statearr_47228_47391[(2)] = null);

(statearr_47228_47391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (41))){
var inst_47108 = (state_47150[(25)]);
var inst_47125 = (state_47150[(2)]);
var inst_47126 = cljs.core.next.call(null,inst_47108);
var inst_47086 = inst_47126;
var inst_47087 = null;
var inst_47088 = (0);
var inst_47089 = (0);
var state_47150__$1 = (function (){var statearr_47230 = state_47150;
(statearr_47230[(9)] = inst_47089);

(statearr_47230[(27)] = inst_47125);

(statearr_47230[(20)] = inst_47086);

(statearr_47230[(12)] = inst_47087);

(statearr_47230[(21)] = inst_47088);

return statearr_47230;
})();
var statearr_47233_47398 = state_47150__$1;
(statearr_47233_47398[(2)] = null);

(statearr_47233_47398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (43))){
var state_47150__$1 = state_47150;
var statearr_47234_47400 = state_47150__$1;
(statearr_47234_47400[(2)] = null);

(statearr_47234_47400[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (29))){
var inst_47134 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
var statearr_47235_47401 = state_47150__$1;
(statearr_47235_47401[(2)] = inst_47134);

(statearr_47235_47401[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (44))){
var inst_47143 = (state_47150[(2)]);
var state_47150__$1 = (function (){var statearr_47237 = state_47150;
(statearr_47237[(28)] = inst_47143);

return statearr_47237;
})();
var statearr_47238_47403 = state_47150__$1;
(statearr_47238_47403[(2)] = null);

(statearr_47238_47403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (6))){
var inst_47078 = (state_47150[(29)]);
var inst_47077 = cljs.core.deref.call(null,cs);
var inst_47078__$1 = cljs.core.keys.call(null,inst_47077);
var inst_47079 = cljs.core.count.call(null,inst_47078__$1);
var inst_47080 = cljs.core.reset_BANG_.call(null,dctr,inst_47079);
var inst_47085 = cljs.core.seq.call(null,inst_47078__$1);
var inst_47086 = inst_47085;
var inst_47087 = null;
var inst_47088 = (0);
var inst_47089 = (0);
var state_47150__$1 = (function (){var statearr_47242 = state_47150;
(statearr_47242[(9)] = inst_47089);

(statearr_47242[(20)] = inst_47086);

(statearr_47242[(30)] = inst_47080);

(statearr_47242[(29)] = inst_47078__$1);

(statearr_47242[(12)] = inst_47087);

(statearr_47242[(21)] = inst_47088);

return statearr_47242;
})();
var statearr_47243_47408 = state_47150__$1;
(statearr_47243_47408[(2)] = null);

(statearr_47243_47408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (28))){
var inst_47108 = (state_47150[(25)]);
var inst_47086 = (state_47150[(20)]);
var inst_47108__$1 = cljs.core.seq.call(null,inst_47086);
var state_47150__$1 = (function (){var statearr_47244 = state_47150;
(statearr_47244[(25)] = inst_47108__$1);

return statearr_47244;
})();
if(inst_47108__$1){
var statearr_47245_47410 = state_47150__$1;
(statearr_47245_47410[(1)] = (33));

} else {
var statearr_47246_47411 = state_47150__$1;
(statearr_47246_47411[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (25))){
var inst_47089 = (state_47150[(9)]);
var inst_47088 = (state_47150[(21)]);
var inst_47091 = (inst_47089 < inst_47088);
var inst_47092 = inst_47091;
var state_47150__$1 = state_47150;
if(cljs.core.truth_(inst_47092)){
var statearr_47247_47413 = state_47150__$1;
(statearr_47247_47413[(1)] = (27));

} else {
var statearr_47248_47414 = state_47150__$1;
(statearr_47248_47414[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (34))){
var state_47150__$1 = state_47150;
var statearr_47249_47415 = state_47150__$1;
(statearr_47249_47415[(2)] = null);

(statearr_47249_47415[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (17))){
var state_47150__$1 = state_47150;
var statearr_47251_47419 = state_47150__$1;
(statearr_47251_47419[(2)] = null);

(statearr_47251_47419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (3))){
var inst_47148 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47150__$1,inst_47148);
} else {
if((state_val_47151 === (12))){
var inst_47073 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
var statearr_47252_47421 = state_47150__$1;
(statearr_47252_47421[(2)] = inst_47073);

(statearr_47252_47421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (2))){
var state_47150__$1 = state_47150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47150__$1,(4),ch);
} else {
if((state_val_47151 === (23))){
var state_47150__$1 = state_47150;
var statearr_47253_47426 = state_47150__$1;
(statearr_47253_47426[(2)] = null);

(statearr_47253_47426[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (35))){
var inst_47132 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
var statearr_47254_47433 = state_47150__$1;
(statearr_47254_47433[(2)] = inst_47132);

(statearr_47254_47433[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (19))){
var inst_47044 = (state_47150[(7)]);
var inst_47048 = cljs.core.chunk_first.call(null,inst_47044);
var inst_47049 = cljs.core.chunk_rest.call(null,inst_47044);
var inst_47050 = cljs.core.count.call(null,inst_47048);
var inst_47021 = inst_47049;
var inst_47022 = inst_47048;
var inst_47023 = inst_47050;
var inst_47024 = (0);
var state_47150__$1 = (function (){var statearr_47255 = state_47150;
(statearr_47255[(14)] = inst_47021);

(statearr_47255[(15)] = inst_47023);

(statearr_47255[(16)] = inst_47022);

(statearr_47255[(17)] = inst_47024);

return statearr_47255;
})();
var statearr_47258_47442 = state_47150__$1;
(statearr_47258_47442[(2)] = null);

(statearr_47258_47442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (11))){
var inst_47021 = (state_47150[(14)]);
var inst_47044 = (state_47150[(7)]);
var inst_47044__$1 = cljs.core.seq.call(null,inst_47021);
var state_47150__$1 = (function (){var statearr_47260 = state_47150;
(statearr_47260[(7)] = inst_47044__$1);

return statearr_47260;
})();
if(inst_47044__$1){
var statearr_47261_47447 = state_47150__$1;
(statearr_47261_47447[(1)] = (16));

} else {
var statearr_47262_47448 = state_47150__$1;
(statearr_47262_47448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (9))){
var inst_47075 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
var statearr_47263_47452 = state_47150__$1;
(statearr_47263_47452[(2)] = inst_47075);

(statearr_47263_47452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (5))){
var inst_47019 = cljs.core.deref.call(null,cs);
var inst_47020 = cljs.core.seq.call(null,inst_47019);
var inst_47021 = inst_47020;
var inst_47022 = null;
var inst_47023 = (0);
var inst_47024 = (0);
var state_47150__$1 = (function (){var statearr_47266 = state_47150;
(statearr_47266[(14)] = inst_47021);

(statearr_47266[(15)] = inst_47023);

(statearr_47266[(16)] = inst_47022);

(statearr_47266[(17)] = inst_47024);

return statearr_47266;
})();
var statearr_47268_47455 = state_47150__$1;
(statearr_47268_47455[(2)] = null);

(statearr_47268_47455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (14))){
var state_47150__$1 = state_47150;
var statearr_47269_47459 = state_47150__$1;
(statearr_47269_47459[(2)] = null);

(statearr_47269_47459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (45))){
var inst_47140 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
var statearr_47271_47460 = state_47150__$1;
(statearr_47271_47460[(2)] = inst_47140);

(statearr_47271_47460[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (26))){
var inst_47078 = (state_47150[(29)]);
var inst_47136 = (state_47150[(2)]);
var inst_47137 = cljs.core.seq.call(null,inst_47078);
var state_47150__$1 = (function (){var statearr_47273 = state_47150;
(statearr_47273[(31)] = inst_47136);

return statearr_47273;
})();
if(inst_47137){
var statearr_47274_47469 = state_47150__$1;
(statearr_47274_47469[(1)] = (42));

} else {
var statearr_47275_47470 = state_47150__$1;
(statearr_47275_47470[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (16))){
var inst_47044 = (state_47150[(7)]);
var inst_47046 = cljs.core.chunked_seq_QMARK_.call(null,inst_47044);
var state_47150__$1 = state_47150;
if(inst_47046){
var statearr_47276_47473 = state_47150__$1;
(statearr_47276_47473[(1)] = (19));

} else {
var statearr_47277_47476 = state_47150__$1;
(statearr_47277_47476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (38))){
var inst_47129 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
var statearr_47279_47484 = state_47150__$1;
(statearr_47279_47484[(2)] = inst_47129);

(statearr_47279_47484[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (30))){
var state_47150__$1 = state_47150;
var statearr_47280_47485 = state_47150__$1;
(statearr_47280_47485[(2)] = null);

(statearr_47280_47485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (10))){
var inst_47022 = (state_47150[(16)]);
var inst_47024 = (state_47150[(17)]);
var inst_47032 = cljs.core._nth.call(null,inst_47022,inst_47024);
var inst_47033 = cljs.core.nth.call(null,inst_47032,(0),null);
var inst_47034 = cljs.core.nth.call(null,inst_47032,(1),null);
var state_47150__$1 = (function (){var statearr_47283 = state_47150;
(statearr_47283[(26)] = inst_47033);

return statearr_47283;
})();
if(cljs.core.truth_(inst_47034)){
var statearr_47285_47492 = state_47150__$1;
(statearr_47285_47492[(1)] = (13));

} else {
var statearr_47287_47493 = state_47150__$1;
(statearr_47287_47493[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (18))){
var inst_47071 = (state_47150[(2)]);
var state_47150__$1 = state_47150;
var statearr_47288_47496 = state_47150__$1;
(statearr_47288_47496[(2)] = inst_47071);

(statearr_47288_47496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (42))){
var state_47150__$1 = state_47150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47150__$1,(45),dchan);
} else {
if((state_val_47151 === (37))){
var inst_47108 = (state_47150[(25)]);
var inst_47117 = (state_47150[(23)]);
var inst_47012 = (state_47150[(11)]);
var inst_47117__$1 = cljs.core.first.call(null,inst_47108);
var inst_47118 = cljs.core.async.put_BANG_.call(null,inst_47117__$1,inst_47012,done);
var state_47150__$1 = (function (){var statearr_47293 = state_47150;
(statearr_47293[(23)] = inst_47117__$1);

return statearr_47293;
})();
if(cljs.core.truth_(inst_47118)){
var statearr_47294_47511 = state_47150__$1;
(statearr_47294_47511[(1)] = (39));

} else {
var statearr_47295_47512 = state_47150__$1;
(statearr_47295_47512[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47151 === (8))){
var inst_47023 = (state_47150[(15)]);
var inst_47024 = (state_47150[(17)]);
var inst_47026 = (inst_47024 < inst_47023);
var inst_47027 = inst_47026;
var state_47150__$1 = state_47150;
if(cljs.core.truth_(inst_47027)){
var statearr_47297_47528 = state_47150__$1;
(statearr_47297_47528[(1)] = (10));

} else {
var statearr_47298_47529 = state_47150__$1;
(statearr_47298_47529[(1)] = (11));

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
});})(c__33665__auto___47331,cs,m,dchan,dctr,done))
;
return ((function (switch__33280__auto__,c__33665__auto___47331,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33281__auto__ = null;
var cljs$core$async$mult_$_state_machine__33281__auto____0 = (function (){
var statearr_47299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47299[(0)] = cljs$core$async$mult_$_state_machine__33281__auto__);

(statearr_47299[(1)] = (1));

return statearr_47299;
});
var cljs$core$async$mult_$_state_machine__33281__auto____1 = (function (state_47150){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_47150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e47300){if((e47300 instanceof Object)){
var ex__33284__auto__ = e47300;
var statearr_47301_47541 = state_47150;
(statearr_47301_47541[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47545 = state_47150;
state_47150 = G__47545;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33281__auto__ = function(state_47150){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33281__auto____1.call(this,state_47150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33281__auto____0;
cljs$core$async$mult_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33281__auto____1;
return cljs$core$async$mult_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___47331,cs,m,dchan,dctr,done))
})();
var state__33667__auto__ = (function (){var statearr_47303 = f__33666__auto__.call(null);
(statearr_47303[(6)] = c__33665__auto___47331);

return statearr_47303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___47331,cs,m,dchan,dctr,done))
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
var G__47552 = arguments.length;
switch (G__47552) {
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
var len__31349__auto___47682 = arguments.length;
var i__31350__auto___47683 = (0);
while(true){
if((i__31350__auto___47683 < len__31349__auto___47682)){
args__31356__auto__.push((arguments[i__31350__auto___47683]));

var G__47684 = (i__31350__auto___47683 + (1));
i__31350__auto___47683 = G__47684;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((3) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47667){
var map__47668 = p__47667;
var map__47668__$1 = ((((!((map__47668 == null)))?((((map__47668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47668):map__47668);
var opts = map__47668__$1;
var statearr_47676_47687 = state;
(statearr_47676_47687[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__47668,map__47668__$1,opts){
return (function (val){
var statearr_47677_47688 = state;
(statearr_47677_47688[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47668,map__47668__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_47678_47690 = state;
(statearr_47678_47690[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47660){
var G__47661 = cljs.core.first.call(null,seq47660);
var seq47660__$1 = cljs.core.next.call(null,seq47660);
var G__47662 = cljs.core.first.call(null,seq47660__$1);
var seq47660__$2 = cljs.core.next.call(null,seq47660__$1);
var G__47663 = cljs.core.first.call(null,seq47660__$2);
var seq47660__$3 = cljs.core.next.call(null,seq47660__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47661,G__47662,G__47663,seq47660__$3);
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
if(typeof cljs.core.async.t_cljs$core$async47693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47693 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta47694){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta47694 = meta47694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47695,meta47694__$1){
var self__ = this;
var _47695__$1 = this;
return (new cljs.core.async.t_cljs$core$async47693(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta47694__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47695){
var self__ = this;
var _47695__$1 = this;
return self__.meta47694;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47693.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47693.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47693.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47693.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47693.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47693.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47693.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async47693.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta47694","meta47694",1275799848,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47693";

cljs.core.async.t_cljs$core$async47693.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async47693");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47693 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47693(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47694){
return (new cljs.core.async.t_cljs$core$async47693(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47694));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47693(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33665__auto___47921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___47921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___47921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47803){
var state_val_47804 = (state_47803[(1)]);
if((state_val_47804 === (7))){
var inst_47717 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
var statearr_47805_47925 = state_47803__$1;
(statearr_47805_47925[(2)] = inst_47717);

(statearr_47805_47925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (20))){
var inst_47729 = (state_47803[(7)]);
var state_47803__$1 = state_47803;
var statearr_47806_47926 = state_47803__$1;
(statearr_47806_47926[(2)] = inst_47729);

(statearr_47806_47926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (27))){
var state_47803__$1 = state_47803;
var statearr_47807_47931 = state_47803__$1;
(statearr_47807_47931[(2)] = null);

(statearr_47807_47931[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (1))){
var inst_47703 = (state_47803[(8)]);
var inst_47703__$1 = calc_state.call(null);
var inst_47705 = (inst_47703__$1 == null);
var inst_47706 = cljs.core.not.call(null,inst_47705);
var state_47803__$1 = (function (){var statearr_47808 = state_47803;
(statearr_47808[(8)] = inst_47703__$1);

return statearr_47808;
})();
if(inst_47706){
var statearr_47810_47936 = state_47803__$1;
(statearr_47810_47936[(1)] = (2));

} else {
var statearr_47811_47937 = state_47803__$1;
(statearr_47811_47937[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (24))){
var inst_47776 = (state_47803[(9)]);
var inst_47762 = (state_47803[(10)]);
var inst_47753 = (state_47803[(11)]);
var inst_47776__$1 = inst_47753.call(null,inst_47762);
var state_47803__$1 = (function (){var statearr_47813 = state_47803;
(statearr_47813[(9)] = inst_47776__$1);

return statearr_47813;
})();
if(cljs.core.truth_(inst_47776__$1)){
var statearr_47814_47939 = state_47803__$1;
(statearr_47814_47939[(1)] = (29));

} else {
var statearr_47815_47940 = state_47803__$1;
(statearr_47815_47940[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (4))){
var inst_47720 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47720)){
var statearr_47819_47943 = state_47803__$1;
(statearr_47819_47943[(1)] = (8));

} else {
var statearr_47820_47946 = state_47803__$1;
(statearr_47820_47946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (15))){
var inst_47747 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47747)){
var statearr_47821_47949 = state_47803__$1;
(statearr_47821_47949[(1)] = (19));

} else {
var statearr_47822_47950 = state_47803__$1;
(statearr_47822_47950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (21))){
var inst_47752 = (state_47803[(12)]);
var inst_47752__$1 = (state_47803[(2)]);
var inst_47753 = cljs.core.get.call(null,inst_47752__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47754 = cljs.core.get.call(null,inst_47752__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47755 = cljs.core.get.call(null,inst_47752__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47803__$1 = (function (){var statearr_47824 = state_47803;
(statearr_47824[(13)] = inst_47754);

(statearr_47824[(11)] = inst_47753);

(statearr_47824[(12)] = inst_47752__$1);

return statearr_47824;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47803__$1,(22),inst_47755);
} else {
if((state_val_47804 === (31))){
var inst_47784 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47784)){
var statearr_47825_47957 = state_47803__$1;
(statearr_47825_47957[(1)] = (32));

} else {
var statearr_47826_47959 = state_47803__$1;
(statearr_47826_47959[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (32))){
var inst_47761 = (state_47803[(14)]);
var state_47803__$1 = state_47803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47803__$1,(35),out,inst_47761);
} else {
if((state_val_47804 === (33))){
var inst_47752 = (state_47803[(12)]);
var inst_47729 = inst_47752;
var state_47803__$1 = (function (){var statearr_47827 = state_47803;
(statearr_47827[(7)] = inst_47729);

return statearr_47827;
})();
var statearr_47828_47960 = state_47803__$1;
(statearr_47828_47960[(2)] = null);

(statearr_47828_47960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (13))){
var inst_47729 = (state_47803[(7)]);
var inst_47736 = inst_47729.cljs$lang$protocol_mask$partition0$;
var inst_47737 = (inst_47736 & (64));
var inst_47738 = inst_47729.cljs$core$ISeq$;
var inst_47739 = (cljs.core.PROTOCOL_SENTINEL === inst_47738);
var inst_47740 = (inst_47737) || (inst_47739);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47740)){
var statearr_47830_47965 = state_47803__$1;
(statearr_47830_47965[(1)] = (16));

} else {
var statearr_47831_47966 = state_47803__$1;
(statearr_47831_47966[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (22))){
var inst_47761 = (state_47803[(14)]);
var inst_47762 = (state_47803[(10)]);
var inst_47760 = (state_47803[(2)]);
var inst_47761__$1 = cljs.core.nth.call(null,inst_47760,(0),null);
var inst_47762__$1 = cljs.core.nth.call(null,inst_47760,(1),null);
var inst_47763 = (inst_47761__$1 == null);
var inst_47764 = cljs.core._EQ_.call(null,inst_47762__$1,change);
var inst_47765 = (inst_47763) || (inst_47764);
var state_47803__$1 = (function (){var statearr_47832 = state_47803;
(statearr_47832[(14)] = inst_47761__$1);

(statearr_47832[(10)] = inst_47762__$1);

return statearr_47832;
})();
if(cljs.core.truth_(inst_47765)){
var statearr_47833_47969 = state_47803__$1;
(statearr_47833_47969[(1)] = (23));

} else {
var statearr_47834_47970 = state_47803__$1;
(statearr_47834_47970[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (36))){
var inst_47752 = (state_47803[(12)]);
var inst_47729 = inst_47752;
var state_47803__$1 = (function (){var statearr_47835 = state_47803;
(statearr_47835[(7)] = inst_47729);

return statearr_47835;
})();
var statearr_47836_47974 = state_47803__$1;
(statearr_47836_47974[(2)] = null);

(statearr_47836_47974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (29))){
var inst_47776 = (state_47803[(9)]);
var state_47803__$1 = state_47803;
var statearr_47841_47975 = state_47803__$1;
(statearr_47841_47975[(2)] = inst_47776);

(statearr_47841_47975[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (6))){
var state_47803__$1 = state_47803;
var statearr_47842_47976 = state_47803__$1;
(statearr_47842_47976[(2)] = false);

(statearr_47842_47976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (28))){
var inst_47772 = (state_47803[(2)]);
var inst_47773 = calc_state.call(null);
var inst_47729 = inst_47773;
var state_47803__$1 = (function (){var statearr_47843 = state_47803;
(statearr_47843[(15)] = inst_47772);

(statearr_47843[(7)] = inst_47729);

return statearr_47843;
})();
var statearr_47844_47978 = state_47803__$1;
(statearr_47844_47978[(2)] = null);

(statearr_47844_47978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (25))){
var inst_47798 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
var statearr_47845_47982 = state_47803__$1;
(statearr_47845_47982[(2)] = inst_47798);

(statearr_47845_47982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (34))){
var inst_47796 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
var statearr_47846_47983 = state_47803__$1;
(statearr_47846_47983[(2)] = inst_47796);

(statearr_47846_47983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (17))){
var state_47803__$1 = state_47803;
var statearr_47847_47987 = state_47803__$1;
(statearr_47847_47987[(2)] = false);

(statearr_47847_47987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (3))){
var state_47803__$1 = state_47803;
var statearr_47849_47989 = state_47803__$1;
(statearr_47849_47989[(2)] = false);

(statearr_47849_47989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (12))){
var inst_47800 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47803__$1,inst_47800);
} else {
if((state_val_47804 === (2))){
var inst_47703 = (state_47803[(8)]);
var inst_47709 = inst_47703.cljs$lang$protocol_mask$partition0$;
var inst_47710 = (inst_47709 & (64));
var inst_47711 = inst_47703.cljs$core$ISeq$;
var inst_47712 = (cljs.core.PROTOCOL_SENTINEL === inst_47711);
var inst_47713 = (inst_47710) || (inst_47712);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47713)){
var statearr_47852_47993 = state_47803__$1;
(statearr_47852_47993[(1)] = (5));

} else {
var statearr_47853_47994 = state_47803__$1;
(statearr_47853_47994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (23))){
var inst_47761 = (state_47803[(14)]);
var inst_47767 = (inst_47761 == null);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47767)){
var statearr_47854_47999 = state_47803__$1;
(statearr_47854_47999[(1)] = (26));

} else {
var statearr_47855_48000 = state_47803__$1;
(statearr_47855_48000[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (35))){
var inst_47787 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47787)){
var statearr_47857_48002 = state_47803__$1;
(statearr_47857_48002[(1)] = (36));

} else {
var statearr_47858_48004 = state_47803__$1;
(statearr_47858_48004[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (19))){
var inst_47729 = (state_47803[(7)]);
var inst_47749 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47729);
var state_47803__$1 = state_47803;
var statearr_47859_48006 = state_47803__$1;
(statearr_47859_48006[(2)] = inst_47749);

(statearr_47859_48006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (11))){
var inst_47729 = (state_47803[(7)]);
var inst_47733 = (inst_47729 == null);
var inst_47734 = cljs.core.not.call(null,inst_47733);
var state_47803__$1 = state_47803;
if(inst_47734){
var statearr_47860_48008 = state_47803__$1;
(statearr_47860_48008[(1)] = (13));

} else {
var statearr_47861_48009 = state_47803__$1;
(statearr_47861_48009[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (9))){
var inst_47703 = (state_47803[(8)]);
var state_47803__$1 = state_47803;
var statearr_47862_48010 = state_47803__$1;
(statearr_47862_48010[(2)] = inst_47703);

(statearr_47862_48010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (5))){
var state_47803__$1 = state_47803;
var statearr_47863_48017 = state_47803__$1;
(statearr_47863_48017[(2)] = true);

(statearr_47863_48017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (14))){
var state_47803__$1 = state_47803;
var statearr_47864_48020 = state_47803__$1;
(statearr_47864_48020[(2)] = false);

(statearr_47864_48020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (26))){
var inst_47762 = (state_47803[(10)]);
var inst_47769 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47762);
var state_47803__$1 = state_47803;
var statearr_47866_48022 = state_47803__$1;
(statearr_47866_48022[(2)] = inst_47769);

(statearr_47866_48022[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (16))){
var state_47803__$1 = state_47803;
var statearr_47867_48024 = state_47803__$1;
(statearr_47867_48024[(2)] = true);

(statearr_47867_48024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (38))){
var inst_47792 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
var statearr_47868_48027 = state_47803__$1;
(statearr_47868_48027[(2)] = inst_47792);

(statearr_47868_48027[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (30))){
var inst_47754 = (state_47803[(13)]);
var inst_47762 = (state_47803[(10)]);
var inst_47753 = (state_47803[(11)]);
var inst_47779 = cljs.core.empty_QMARK_.call(null,inst_47753);
var inst_47780 = inst_47754.call(null,inst_47762);
var inst_47781 = cljs.core.not.call(null,inst_47780);
var inst_47782 = (inst_47779) && (inst_47781);
var state_47803__$1 = state_47803;
var statearr_47869_48029 = state_47803__$1;
(statearr_47869_48029[(2)] = inst_47782);

(statearr_47869_48029[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (10))){
var inst_47703 = (state_47803[(8)]);
var inst_47725 = (state_47803[(2)]);
var inst_47726 = cljs.core.get.call(null,inst_47725,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47727 = cljs.core.get.call(null,inst_47725,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47728 = cljs.core.get.call(null,inst_47725,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47729 = inst_47703;
var state_47803__$1 = (function (){var statearr_47870 = state_47803;
(statearr_47870[(16)] = inst_47726);

(statearr_47870[(17)] = inst_47727);

(statearr_47870[(18)] = inst_47728);

(statearr_47870[(7)] = inst_47729);

return statearr_47870;
})();
var statearr_47874_48034 = state_47803__$1;
(statearr_47874_48034[(2)] = null);

(statearr_47874_48034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (18))){
var inst_47744 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
var statearr_47876_48038 = state_47803__$1;
(statearr_47876_48038[(2)] = inst_47744);

(statearr_47876_48038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (37))){
var state_47803__$1 = state_47803;
var statearr_47877_48039 = state_47803__$1;
(statearr_47877_48039[(2)] = null);

(statearr_47877_48039[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (8))){
var inst_47703 = (state_47803[(8)]);
var inst_47722 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47703);
var state_47803__$1 = state_47803;
var statearr_47878_48041 = state_47803__$1;
(statearr_47878_48041[(2)] = inst_47722);

(statearr_47878_48041[(1)] = (10));


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
});})(c__33665__auto___47921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33280__auto__,c__33665__auto___47921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33281__auto__ = null;
var cljs$core$async$mix_$_state_machine__33281__auto____0 = (function (){
var statearr_47879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47879[(0)] = cljs$core$async$mix_$_state_machine__33281__auto__);

(statearr_47879[(1)] = (1));

return statearr_47879;
});
var cljs$core$async$mix_$_state_machine__33281__auto____1 = (function (state_47803){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_47803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e47881){if((e47881 instanceof Object)){
var ex__33284__auto__ = e47881;
var statearr_47882_48046 = state_47803;
(statearr_47882_48046[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48049 = state_47803;
state_47803 = G__48049;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33281__auto__ = function(state_47803){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33281__auto____1.call(this,state_47803);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33281__auto____0;
cljs$core$async$mix_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33281__auto____1;
return cljs$core$async$mix_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___47921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33667__auto__ = (function (){var statearr_47885 = f__33666__auto__.call(null);
(statearr_47885[(6)] = c__33665__auto___47921);

return statearr_47885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___47921,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__48062 = arguments.length;
switch (G__48062) {
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
var G__48079 = arguments.length;
switch (G__48079) {
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
return (function (p1__48076_SHARP_){
if(cljs.core.truth_(p1__48076_SHARP_.call(null,topic))){
return p1__48076_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48076_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30072__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48083 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48084){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48084 = meta48084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48085,meta48084__$1){
var self__ = this;
var _48085__$1 = this;
return (new cljs.core.async.t_cljs$core$async48083(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48084__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48085){
var self__ = this;
var _48085__$1 = this;
return self__.meta48084;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48083.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48083.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48083.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48083.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48083.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async48083.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48083.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48083.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48084","meta48084",-1474108839,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48083";

cljs.core.async.t_cljs$core$async48083.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async48083");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48083 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48083(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48084){
return (new cljs.core.async.t_cljs$core$async48083(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48084));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48083(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33665__auto___48215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___48215,mults,ensure_mult,p){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___48215,mults,ensure_mult,p){
return (function (state_48162){
var state_val_48163 = (state_48162[(1)]);
if((state_val_48163 === (7))){
var inst_48158 = (state_48162[(2)]);
var state_48162__$1 = state_48162;
var statearr_48164_48216 = state_48162__$1;
(statearr_48164_48216[(2)] = inst_48158);

(statearr_48164_48216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (20))){
var state_48162__$1 = state_48162;
var statearr_48166_48217 = state_48162__$1;
(statearr_48166_48217[(2)] = null);

(statearr_48166_48217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (1))){
var state_48162__$1 = state_48162;
var statearr_48167_48218 = state_48162__$1;
(statearr_48167_48218[(2)] = null);

(statearr_48167_48218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (24))){
var inst_48141 = (state_48162[(7)]);
var inst_48150 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48141);
var state_48162__$1 = state_48162;
var statearr_48168_48219 = state_48162__$1;
(statearr_48168_48219[(2)] = inst_48150);

(statearr_48168_48219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (4))){
var inst_48088 = (state_48162[(8)]);
var inst_48088__$1 = (state_48162[(2)]);
var inst_48089 = (inst_48088__$1 == null);
var state_48162__$1 = (function (){var statearr_48169 = state_48162;
(statearr_48169[(8)] = inst_48088__$1);

return statearr_48169;
})();
if(cljs.core.truth_(inst_48089)){
var statearr_48170_48220 = state_48162__$1;
(statearr_48170_48220[(1)] = (5));

} else {
var statearr_48171_48221 = state_48162__$1;
(statearr_48171_48221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (15))){
var inst_48134 = (state_48162[(2)]);
var state_48162__$1 = state_48162;
var statearr_48172_48222 = state_48162__$1;
(statearr_48172_48222[(2)] = inst_48134);

(statearr_48172_48222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (21))){
var inst_48155 = (state_48162[(2)]);
var state_48162__$1 = (function (){var statearr_48173 = state_48162;
(statearr_48173[(9)] = inst_48155);

return statearr_48173;
})();
var statearr_48174_48233 = state_48162__$1;
(statearr_48174_48233[(2)] = null);

(statearr_48174_48233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (13))){
var inst_48116 = (state_48162[(10)]);
var inst_48118 = cljs.core.chunked_seq_QMARK_.call(null,inst_48116);
var state_48162__$1 = state_48162;
if(inst_48118){
var statearr_48175_48234 = state_48162__$1;
(statearr_48175_48234[(1)] = (16));

} else {
var statearr_48176_48235 = state_48162__$1;
(statearr_48176_48235[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (22))){
var inst_48147 = (state_48162[(2)]);
var state_48162__$1 = state_48162;
if(cljs.core.truth_(inst_48147)){
var statearr_48177_48236 = state_48162__$1;
(statearr_48177_48236[(1)] = (23));

} else {
var statearr_48178_48237 = state_48162__$1;
(statearr_48178_48237[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (6))){
var inst_48141 = (state_48162[(7)]);
var inst_48143 = (state_48162[(11)]);
var inst_48088 = (state_48162[(8)]);
var inst_48141__$1 = topic_fn.call(null,inst_48088);
var inst_48142 = cljs.core.deref.call(null,mults);
var inst_48143__$1 = cljs.core.get.call(null,inst_48142,inst_48141__$1);
var state_48162__$1 = (function (){var statearr_48179 = state_48162;
(statearr_48179[(7)] = inst_48141__$1);

(statearr_48179[(11)] = inst_48143__$1);

return statearr_48179;
})();
if(cljs.core.truth_(inst_48143__$1)){
var statearr_48180_48238 = state_48162__$1;
(statearr_48180_48238[(1)] = (19));

} else {
var statearr_48181_48239 = state_48162__$1;
(statearr_48181_48239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (25))){
var inst_48152 = (state_48162[(2)]);
var state_48162__$1 = state_48162;
var statearr_48184_48243 = state_48162__$1;
(statearr_48184_48243[(2)] = inst_48152);

(statearr_48184_48243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (17))){
var inst_48116 = (state_48162[(10)]);
var inst_48125 = cljs.core.first.call(null,inst_48116);
var inst_48126 = cljs.core.async.muxch_STAR_.call(null,inst_48125);
var inst_48127 = cljs.core.async.close_BANG_.call(null,inst_48126);
var inst_48128 = cljs.core.next.call(null,inst_48116);
var inst_48098 = inst_48128;
var inst_48099 = null;
var inst_48100 = (0);
var inst_48101 = (0);
var state_48162__$1 = (function (){var statearr_48185 = state_48162;
(statearr_48185[(12)] = inst_48127);

(statearr_48185[(13)] = inst_48099);

(statearr_48185[(14)] = inst_48100);

(statearr_48185[(15)] = inst_48098);

(statearr_48185[(16)] = inst_48101);

return statearr_48185;
})();
var statearr_48186_48244 = state_48162__$1;
(statearr_48186_48244[(2)] = null);

(statearr_48186_48244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (3))){
var inst_48160 = (state_48162[(2)]);
var state_48162__$1 = state_48162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48162__$1,inst_48160);
} else {
if((state_val_48163 === (12))){
var inst_48136 = (state_48162[(2)]);
var state_48162__$1 = state_48162;
var statearr_48187_48245 = state_48162__$1;
(statearr_48187_48245[(2)] = inst_48136);

(statearr_48187_48245[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (2))){
var state_48162__$1 = state_48162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48162__$1,(4),ch);
} else {
if((state_val_48163 === (23))){
var state_48162__$1 = state_48162;
var statearr_48191_48246 = state_48162__$1;
(statearr_48191_48246[(2)] = null);

(statearr_48191_48246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (19))){
var inst_48143 = (state_48162[(11)]);
var inst_48088 = (state_48162[(8)]);
var inst_48145 = cljs.core.async.muxch_STAR_.call(null,inst_48143);
var state_48162__$1 = state_48162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48162__$1,(22),inst_48145,inst_48088);
} else {
if((state_val_48163 === (11))){
var inst_48116 = (state_48162[(10)]);
var inst_48098 = (state_48162[(15)]);
var inst_48116__$1 = cljs.core.seq.call(null,inst_48098);
var state_48162__$1 = (function (){var statearr_48192 = state_48162;
(statearr_48192[(10)] = inst_48116__$1);

return statearr_48192;
})();
if(inst_48116__$1){
var statearr_48193_48250 = state_48162__$1;
(statearr_48193_48250[(1)] = (13));

} else {
var statearr_48194_48251 = state_48162__$1;
(statearr_48194_48251[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (9))){
var inst_48138 = (state_48162[(2)]);
var state_48162__$1 = state_48162;
var statearr_48195_48252 = state_48162__$1;
(statearr_48195_48252[(2)] = inst_48138);

(statearr_48195_48252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (5))){
var inst_48095 = cljs.core.deref.call(null,mults);
var inst_48096 = cljs.core.vals.call(null,inst_48095);
var inst_48097 = cljs.core.seq.call(null,inst_48096);
var inst_48098 = inst_48097;
var inst_48099 = null;
var inst_48100 = (0);
var inst_48101 = (0);
var state_48162__$1 = (function (){var statearr_48196 = state_48162;
(statearr_48196[(13)] = inst_48099);

(statearr_48196[(14)] = inst_48100);

(statearr_48196[(15)] = inst_48098);

(statearr_48196[(16)] = inst_48101);

return statearr_48196;
})();
var statearr_48197_48253 = state_48162__$1;
(statearr_48197_48253[(2)] = null);

(statearr_48197_48253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (14))){
var state_48162__$1 = state_48162;
var statearr_48201_48254 = state_48162__$1;
(statearr_48201_48254[(2)] = null);

(statearr_48201_48254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (16))){
var inst_48116 = (state_48162[(10)]);
var inst_48120 = cljs.core.chunk_first.call(null,inst_48116);
var inst_48121 = cljs.core.chunk_rest.call(null,inst_48116);
var inst_48122 = cljs.core.count.call(null,inst_48120);
var inst_48098 = inst_48121;
var inst_48099 = inst_48120;
var inst_48100 = inst_48122;
var inst_48101 = (0);
var state_48162__$1 = (function (){var statearr_48202 = state_48162;
(statearr_48202[(13)] = inst_48099);

(statearr_48202[(14)] = inst_48100);

(statearr_48202[(15)] = inst_48098);

(statearr_48202[(16)] = inst_48101);

return statearr_48202;
})();
var statearr_48203_48256 = state_48162__$1;
(statearr_48203_48256[(2)] = null);

(statearr_48203_48256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (10))){
var inst_48099 = (state_48162[(13)]);
var inst_48100 = (state_48162[(14)]);
var inst_48098 = (state_48162[(15)]);
var inst_48101 = (state_48162[(16)]);
var inst_48106 = cljs.core._nth.call(null,inst_48099,inst_48101);
var inst_48107 = cljs.core.async.muxch_STAR_.call(null,inst_48106);
var inst_48108 = cljs.core.async.close_BANG_.call(null,inst_48107);
var inst_48109 = (inst_48101 + (1));
var tmp48198 = inst_48099;
var tmp48199 = inst_48100;
var tmp48200 = inst_48098;
var inst_48098__$1 = tmp48200;
var inst_48099__$1 = tmp48198;
var inst_48100__$1 = tmp48199;
var inst_48101__$1 = inst_48109;
var state_48162__$1 = (function (){var statearr_48204 = state_48162;
(statearr_48204[(13)] = inst_48099__$1);

(statearr_48204[(14)] = inst_48100__$1);

(statearr_48204[(17)] = inst_48108);

(statearr_48204[(15)] = inst_48098__$1);

(statearr_48204[(16)] = inst_48101__$1);

return statearr_48204;
})();
var statearr_48205_48258 = state_48162__$1;
(statearr_48205_48258[(2)] = null);

(statearr_48205_48258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (18))){
var inst_48131 = (state_48162[(2)]);
var state_48162__$1 = state_48162;
var statearr_48206_48259 = state_48162__$1;
(statearr_48206_48259[(2)] = inst_48131);

(statearr_48206_48259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48163 === (8))){
var inst_48100 = (state_48162[(14)]);
var inst_48101 = (state_48162[(16)]);
var inst_48103 = (inst_48101 < inst_48100);
var inst_48104 = inst_48103;
var state_48162__$1 = state_48162;
if(cljs.core.truth_(inst_48104)){
var statearr_48207_48262 = state_48162__$1;
(statearr_48207_48262[(1)] = (10));

} else {
var statearr_48208_48263 = state_48162__$1;
(statearr_48208_48263[(1)] = (11));

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
});})(c__33665__auto___48215,mults,ensure_mult,p))
;
return ((function (switch__33280__auto__,c__33665__auto___48215,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_48210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48210[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_48210[(1)] = (1));

return statearr_48210;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_48162){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_48162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e48211){if((e48211 instanceof Object)){
var ex__33284__auto__ = e48211;
var statearr_48212_48265 = state_48162;
(statearr_48212_48265[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48269 = state_48162;
state_48162 = G__48269;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_48162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_48162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___48215,mults,ensure_mult,p))
})();
var state__33667__auto__ = (function (){var statearr_48213 = f__33666__auto__.call(null);
(statearr_48213[(6)] = c__33665__auto___48215);

return statearr_48213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___48215,mults,ensure_mult,p))
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
var G__48271 = arguments.length;
switch (G__48271) {
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
var G__48280 = arguments.length;
switch (G__48280) {
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
var G__48283 = arguments.length;
switch (G__48283) {
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
var c__33665__auto___48364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___48364,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___48364,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48322){
var state_val_48323 = (state_48322[(1)]);
if((state_val_48323 === (7))){
var state_48322__$1 = state_48322;
var statearr_48324_48365 = state_48322__$1;
(statearr_48324_48365[(2)] = null);

(statearr_48324_48365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (1))){
var state_48322__$1 = state_48322;
var statearr_48325_48366 = state_48322__$1;
(statearr_48325_48366[(2)] = null);

(statearr_48325_48366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (4))){
var inst_48286 = (state_48322[(7)]);
var inst_48288 = (inst_48286 < cnt);
var state_48322__$1 = state_48322;
if(cljs.core.truth_(inst_48288)){
var statearr_48326_48368 = state_48322__$1;
(statearr_48326_48368[(1)] = (6));

} else {
var statearr_48327_48369 = state_48322__$1;
(statearr_48327_48369[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (15))){
var inst_48318 = (state_48322[(2)]);
var state_48322__$1 = state_48322;
var statearr_48328_48370 = state_48322__$1;
(statearr_48328_48370[(2)] = inst_48318);

(statearr_48328_48370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (13))){
var inst_48311 = cljs.core.async.close_BANG_.call(null,out);
var state_48322__$1 = state_48322;
var statearr_48329_48371 = state_48322__$1;
(statearr_48329_48371[(2)] = inst_48311);

(statearr_48329_48371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (6))){
var state_48322__$1 = state_48322;
var statearr_48330_48372 = state_48322__$1;
(statearr_48330_48372[(2)] = null);

(statearr_48330_48372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (3))){
var inst_48320 = (state_48322[(2)]);
var state_48322__$1 = state_48322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48322__$1,inst_48320);
} else {
if((state_val_48323 === (12))){
var inst_48308 = (state_48322[(8)]);
var inst_48308__$1 = (state_48322[(2)]);
var inst_48309 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48308__$1);
var state_48322__$1 = (function (){var statearr_48331 = state_48322;
(statearr_48331[(8)] = inst_48308__$1);

return statearr_48331;
})();
if(cljs.core.truth_(inst_48309)){
var statearr_48332_48373 = state_48322__$1;
(statearr_48332_48373[(1)] = (13));

} else {
var statearr_48333_48374 = state_48322__$1;
(statearr_48333_48374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (2))){
var inst_48285 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48286 = (0);
var state_48322__$1 = (function (){var statearr_48334 = state_48322;
(statearr_48334[(7)] = inst_48286);

(statearr_48334[(9)] = inst_48285);

return statearr_48334;
})();
var statearr_48335_48375 = state_48322__$1;
(statearr_48335_48375[(2)] = null);

(statearr_48335_48375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (11))){
var inst_48286 = (state_48322[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48322,(10),Object,null,(9));
var inst_48295 = chs__$1.call(null,inst_48286);
var inst_48296 = done.call(null,inst_48286);
var inst_48297 = cljs.core.async.take_BANG_.call(null,inst_48295,inst_48296);
var state_48322__$1 = state_48322;
var statearr_48336_48379 = state_48322__$1;
(statearr_48336_48379[(2)] = inst_48297);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48322__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (9))){
var inst_48286 = (state_48322[(7)]);
var inst_48299 = (state_48322[(2)]);
var inst_48300 = (inst_48286 + (1));
var inst_48286__$1 = inst_48300;
var state_48322__$1 = (function (){var statearr_48337 = state_48322;
(statearr_48337[(7)] = inst_48286__$1);

(statearr_48337[(10)] = inst_48299);

return statearr_48337;
})();
var statearr_48338_48382 = state_48322__$1;
(statearr_48338_48382[(2)] = null);

(statearr_48338_48382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (5))){
var inst_48306 = (state_48322[(2)]);
var state_48322__$1 = (function (){var statearr_48339 = state_48322;
(statearr_48339[(11)] = inst_48306);

return statearr_48339;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48322__$1,(12),dchan);
} else {
if((state_val_48323 === (14))){
var inst_48308 = (state_48322[(8)]);
var inst_48313 = cljs.core.apply.call(null,f,inst_48308);
var state_48322__$1 = state_48322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48322__$1,(16),out,inst_48313);
} else {
if((state_val_48323 === (16))){
var inst_48315 = (state_48322[(2)]);
var state_48322__$1 = (function (){var statearr_48341 = state_48322;
(statearr_48341[(12)] = inst_48315);

return statearr_48341;
})();
var statearr_48342_48385 = state_48322__$1;
(statearr_48342_48385[(2)] = null);

(statearr_48342_48385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (10))){
var inst_48290 = (state_48322[(2)]);
var inst_48291 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48322__$1 = (function (){var statearr_48343 = state_48322;
(statearr_48343[(13)] = inst_48290);

return statearr_48343;
})();
var statearr_48344_48390 = state_48322__$1;
(statearr_48344_48390[(2)] = inst_48291);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48322__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48323 === (8))){
var inst_48304 = (state_48322[(2)]);
var state_48322__$1 = state_48322;
var statearr_48345_48391 = state_48322__$1;
(statearr_48345_48391[(2)] = inst_48304);

(statearr_48345_48391[(1)] = (5));


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
});})(c__33665__auto___48364,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33280__auto__,c__33665__auto___48364,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_48346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48346[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_48346[(1)] = (1));

return statearr_48346;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_48322){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_48322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e48347){if((e48347 instanceof Object)){
var ex__33284__auto__ = e48347;
var statearr_48348_48395 = state_48322;
(statearr_48348_48395[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48396 = state_48322;
state_48322 = G__48396;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_48322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_48322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___48364,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33667__auto__ = (function (){var statearr_48353 = f__33666__auto__.call(null);
(statearr_48353[(6)] = c__33665__auto___48364);

return statearr_48353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___48364,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48399 = arguments.length;
switch (G__48399) {
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
var c__33665__auto___48471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___48471,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___48471,out){
return (function (state_48435){
var state_val_48436 = (state_48435[(1)]);
if((state_val_48436 === (7))){
var inst_48413 = (state_48435[(7)]);
var inst_48414 = (state_48435[(8)]);
var inst_48413__$1 = (state_48435[(2)]);
var inst_48414__$1 = cljs.core.nth.call(null,inst_48413__$1,(0),null);
var inst_48415 = cljs.core.nth.call(null,inst_48413__$1,(1),null);
var inst_48416 = (inst_48414__$1 == null);
var state_48435__$1 = (function (){var statearr_48437 = state_48435;
(statearr_48437[(9)] = inst_48415);

(statearr_48437[(7)] = inst_48413__$1);

(statearr_48437[(8)] = inst_48414__$1);

return statearr_48437;
})();
if(cljs.core.truth_(inst_48416)){
var statearr_48438_48478 = state_48435__$1;
(statearr_48438_48478[(1)] = (8));

} else {
var statearr_48441_48479 = state_48435__$1;
(statearr_48441_48479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48436 === (1))){
var inst_48403 = cljs.core.vec.call(null,chs);
var inst_48404 = inst_48403;
var state_48435__$1 = (function (){var statearr_48446 = state_48435;
(statearr_48446[(10)] = inst_48404);

return statearr_48446;
})();
var statearr_48447_48480 = state_48435__$1;
(statearr_48447_48480[(2)] = null);

(statearr_48447_48480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48436 === (4))){
var inst_48404 = (state_48435[(10)]);
var state_48435__$1 = state_48435;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48435__$1,(7),inst_48404);
} else {
if((state_val_48436 === (6))){
var inst_48430 = (state_48435[(2)]);
var state_48435__$1 = state_48435;
var statearr_48452_48483 = state_48435__$1;
(statearr_48452_48483[(2)] = inst_48430);

(statearr_48452_48483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48436 === (3))){
var inst_48432 = (state_48435[(2)]);
var state_48435__$1 = state_48435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48435__$1,inst_48432);
} else {
if((state_val_48436 === (2))){
var inst_48404 = (state_48435[(10)]);
var inst_48406 = cljs.core.count.call(null,inst_48404);
var inst_48407 = (inst_48406 > (0));
var state_48435__$1 = state_48435;
if(cljs.core.truth_(inst_48407)){
var statearr_48455_48487 = state_48435__$1;
(statearr_48455_48487[(1)] = (4));

} else {
var statearr_48456_48488 = state_48435__$1;
(statearr_48456_48488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48436 === (11))){
var inst_48404 = (state_48435[(10)]);
var inst_48423 = (state_48435[(2)]);
var tmp48453 = inst_48404;
var inst_48404__$1 = tmp48453;
var state_48435__$1 = (function (){var statearr_48457 = state_48435;
(statearr_48457[(11)] = inst_48423);

(statearr_48457[(10)] = inst_48404__$1);

return statearr_48457;
})();
var statearr_48458_48489 = state_48435__$1;
(statearr_48458_48489[(2)] = null);

(statearr_48458_48489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48436 === (9))){
var inst_48414 = (state_48435[(8)]);
var state_48435__$1 = state_48435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48435__$1,(11),out,inst_48414);
} else {
if((state_val_48436 === (5))){
var inst_48428 = cljs.core.async.close_BANG_.call(null,out);
var state_48435__$1 = state_48435;
var statearr_48459_48496 = state_48435__$1;
(statearr_48459_48496[(2)] = inst_48428);

(statearr_48459_48496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48436 === (10))){
var inst_48426 = (state_48435[(2)]);
var state_48435__$1 = state_48435;
var statearr_48460_48497 = state_48435__$1;
(statearr_48460_48497[(2)] = inst_48426);

(statearr_48460_48497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48436 === (8))){
var inst_48415 = (state_48435[(9)]);
var inst_48413 = (state_48435[(7)]);
var inst_48404 = (state_48435[(10)]);
var inst_48414 = (state_48435[(8)]);
var inst_48418 = (function (){var cs = inst_48404;
var vec__48409 = inst_48413;
var v = inst_48414;
var c = inst_48415;
return ((function (cs,vec__48409,v,c,inst_48415,inst_48413,inst_48404,inst_48414,state_val_48436,c__33665__auto___48471,out){
return (function (p1__48397_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48397_SHARP_);
});
;})(cs,vec__48409,v,c,inst_48415,inst_48413,inst_48404,inst_48414,state_val_48436,c__33665__auto___48471,out))
})();
var inst_48419 = cljs.core.filterv.call(null,inst_48418,inst_48404);
var inst_48404__$1 = inst_48419;
var state_48435__$1 = (function (){var statearr_48461 = state_48435;
(statearr_48461[(10)] = inst_48404__$1);

return statearr_48461;
})();
var statearr_48462_48507 = state_48435__$1;
(statearr_48462_48507[(2)] = null);

(statearr_48462_48507[(1)] = (2));


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
});})(c__33665__auto___48471,out))
;
return ((function (switch__33280__auto__,c__33665__auto___48471,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_48463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48463[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_48463[(1)] = (1));

return statearr_48463;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_48435){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_48435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e48464){if((e48464 instanceof Object)){
var ex__33284__auto__ = e48464;
var statearr_48465_48515 = state_48435;
(statearr_48465_48515[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48519 = state_48435;
state_48435 = G__48519;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_48435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_48435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___48471,out))
})();
var state__33667__auto__ = (function (){var statearr_48466 = f__33666__auto__.call(null);
(statearr_48466[(6)] = c__33665__auto___48471);

return statearr_48466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___48471,out))
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
var G__48526 = arguments.length;
switch (G__48526) {
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
var c__33665__auto___48614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___48614,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___48614,out){
return (function (state_48560){
var state_val_48561 = (state_48560[(1)]);
if((state_val_48561 === (7))){
var inst_48542 = (state_48560[(7)]);
var inst_48542__$1 = (state_48560[(2)]);
var inst_48543 = (inst_48542__$1 == null);
var inst_48544 = cljs.core.not.call(null,inst_48543);
var state_48560__$1 = (function (){var statearr_48569 = state_48560;
(statearr_48569[(7)] = inst_48542__$1);

return statearr_48569;
})();
if(inst_48544){
var statearr_48570_48618 = state_48560__$1;
(statearr_48570_48618[(1)] = (8));

} else {
var statearr_48571_48619 = state_48560__$1;
(statearr_48571_48619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48561 === (1))){
var inst_48534 = (0);
var state_48560__$1 = (function (){var statearr_48572 = state_48560;
(statearr_48572[(8)] = inst_48534);

return statearr_48572;
})();
var statearr_48573_48625 = state_48560__$1;
(statearr_48573_48625[(2)] = null);

(statearr_48573_48625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48561 === (4))){
var state_48560__$1 = state_48560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48560__$1,(7),ch);
} else {
if((state_val_48561 === (6))){
var inst_48555 = (state_48560[(2)]);
var state_48560__$1 = state_48560;
var statearr_48577_48635 = state_48560__$1;
(statearr_48577_48635[(2)] = inst_48555);

(statearr_48577_48635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48561 === (3))){
var inst_48557 = (state_48560[(2)]);
var inst_48558 = cljs.core.async.close_BANG_.call(null,out);
var state_48560__$1 = (function (){var statearr_48578 = state_48560;
(statearr_48578[(9)] = inst_48557);

return statearr_48578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48560__$1,inst_48558);
} else {
if((state_val_48561 === (2))){
var inst_48534 = (state_48560[(8)]);
var inst_48536 = (inst_48534 < n);
var state_48560__$1 = state_48560;
if(cljs.core.truth_(inst_48536)){
var statearr_48579_48643 = state_48560__$1;
(statearr_48579_48643[(1)] = (4));

} else {
var statearr_48580_48648 = state_48560__$1;
(statearr_48580_48648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48561 === (11))){
var inst_48534 = (state_48560[(8)]);
var inst_48547 = (state_48560[(2)]);
var inst_48548 = (inst_48534 + (1));
var inst_48534__$1 = inst_48548;
var state_48560__$1 = (function (){var statearr_48581 = state_48560;
(statearr_48581[(10)] = inst_48547);

(statearr_48581[(8)] = inst_48534__$1);

return statearr_48581;
})();
var statearr_48585_48656 = state_48560__$1;
(statearr_48585_48656[(2)] = null);

(statearr_48585_48656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48561 === (9))){
var state_48560__$1 = state_48560;
var statearr_48586_48666 = state_48560__$1;
(statearr_48586_48666[(2)] = null);

(statearr_48586_48666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48561 === (5))){
var state_48560__$1 = state_48560;
var statearr_48591_48667 = state_48560__$1;
(statearr_48591_48667[(2)] = null);

(statearr_48591_48667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48561 === (10))){
var inst_48552 = (state_48560[(2)]);
var state_48560__$1 = state_48560;
var statearr_48592_48668 = state_48560__$1;
(statearr_48592_48668[(2)] = inst_48552);

(statearr_48592_48668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48561 === (8))){
var inst_48542 = (state_48560[(7)]);
var state_48560__$1 = state_48560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48560__$1,(11),out,inst_48542);
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
});})(c__33665__auto___48614,out))
;
return ((function (switch__33280__auto__,c__33665__auto___48614,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_48602 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48602[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_48602[(1)] = (1));

return statearr_48602;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_48560){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_48560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e48603){if((e48603 instanceof Object)){
var ex__33284__auto__ = e48603;
var statearr_48607_48676 = state_48560;
(statearr_48607_48676[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48677 = state_48560;
state_48560 = G__48677;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_48560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_48560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___48614,out))
})();
var state__33667__auto__ = (function (){var statearr_48608 = f__33666__auto__.call(null);
(statearr_48608[(6)] = c__33665__auto___48614);

return statearr_48608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___48614,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48686 = (function (f,ch,meta48687){
this.f = f;
this.ch = ch;
this.meta48687 = meta48687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48688,meta48687__$1){
var self__ = this;
var _48688__$1 = this;
return (new cljs.core.async.t_cljs$core$async48686(self__.f,self__.ch,meta48687__$1));
});

cljs.core.async.t_cljs$core$async48686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48688){
var self__ = this;
var _48688__$1 = this;
return self__.meta48687;
});

cljs.core.async.t_cljs$core$async48686.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48686.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48686.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48712 = (function (f,ch,meta48687,_,fn1,meta48713){
this.f = f;
this.ch = ch;
this.meta48687 = meta48687;
this._ = _;
this.fn1 = fn1;
this.meta48713 = meta48713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48714,meta48713__$1){
var self__ = this;
var _48714__$1 = this;
return (new cljs.core.async.t_cljs$core$async48712(self__.f,self__.ch,self__.meta48687,self__._,self__.fn1,meta48713__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48714){
var self__ = this;
var _48714__$1 = this;
return self__.meta48713;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48712.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48712.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48684_SHARP_){
return f1.call(null,(((p1__48684_SHARP_ == null))?null:self__.f.call(null,p1__48684_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48712.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48687","meta48687",-1488462107,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48686","cljs.core.async/t_cljs$core$async48686",720761439,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48713","meta48713",1116832204,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48712";

cljs.core.async.t_cljs$core$async48712.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async48712");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48712 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48712(f__$1,ch__$1,meta48687__$1,___$2,fn1__$1,meta48713){
return (new cljs.core.async.t_cljs$core$async48712(f__$1,ch__$1,meta48687__$1,___$2,fn1__$1,meta48713));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48712(self__.f,self__.ch,self__.meta48687,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async48686.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48687","meta48687",-1488462107,null)], null);
});

cljs.core.async.t_cljs$core$async48686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48686";

cljs.core.async.t_cljs$core$async48686.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async48686");
});

cljs.core.async.__GT_t_cljs$core$async48686 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48686(f__$1,ch__$1,meta48687){
return (new cljs.core.async.t_cljs$core$async48686(f__$1,ch__$1,meta48687));
});

}

return (new cljs.core.async.t_cljs$core$async48686(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48772 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48772 = (function (f,ch,meta48773){
this.f = f;
this.ch = ch;
this.meta48773 = meta48773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48774,meta48773__$1){
var self__ = this;
var _48774__$1 = this;
return (new cljs.core.async.t_cljs$core$async48772(self__.f,self__.ch,meta48773__$1));
});

cljs.core.async.t_cljs$core$async48772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48774){
var self__ = this;
var _48774__$1 = this;
return self__.meta48773;
});

cljs.core.async.t_cljs$core$async48772.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48772.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48772.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48772.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48772.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48772.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48773","meta48773",-1746366481,null)], null);
});

cljs.core.async.t_cljs$core$async48772.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48772";

cljs.core.async.t_cljs$core$async48772.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async48772");
});

cljs.core.async.__GT_t_cljs$core$async48772 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48772(f__$1,ch__$1,meta48773){
return (new cljs.core.async.t_cljs$core$async48772(f__$1,ch__$1,meta48773));
});

}

return (new cljs.core.async.t_cljs$core$async48772(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48804 = (function (p,ch,meta48805){
this.p = p;
this.ch = ch;
this.meta48805 = meta48805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48806,meta48805__$1){
var self__ = this;
var _48806__$1 = this;
return (new cljs.core.async.t_cljs$core$async48804(self__.p,self__.ch,meta48805__$1));
});

cljs.core.async.t_cljs$core$async48804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48806){
var self__ = this;
var _48806__$1 = this;
return self__.meta48805;
});

cljs.core.async.t_cljs$core$async48804.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48804.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48804.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48804.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48805","meta48805",257140094,null)], null);
});

cljs.core.async.t_cljs$core$async48804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48804";

cljs.core.async.t_cljs$core$async48804.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async48804");
});

cljs.core.async.__GT_t_cljs$core$async48804 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48804(p__$1,ch__$1,meta48805){
return (new cljs.core.async.t_cljs$core$async48804(p__$1,ch__$1,meta48805));
});

}

return (new cljs.core.async.t_cljs$core$async48804(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48826 = arguments.length;
switch (G__48826) {
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
var c__33665__auto___48882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___48882,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___48882,out){
return (function (state_48848){
var state_val_48849 = (state_48848[(1)]);
if((state_val_48849 === (7))){
var inst_48844 = (state_48848[(2)]);
var state_48848__$1 = state_48848;
var statearr_48850_48883 = state_48848__$1;
(statearr_48850_48883[(2)] = inst_48844);

(statearr_48850_48883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (1))){
var state_48848__$1 = state_48848;
var statearr_48851_48884 = state_48848__$1;
(statearr_48851_48884[(2)] = null);

(statearr_48851_48884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (4))){
var inst_48830 = (state_48848[(7)]);
var inst_48830__$1 = (state_48848[(2)]);
var inst_48831 = (inst_48830__$1 == null);
var state_48848__$1 = (function (){var statearr_48852 = state_48848;
(statearr_48852[(7)] = inst_48830__$1);

return statearr_48852;
})();
if(cljs.core.truth_(inst_48831)){
var statearr_48853_48885 = state_48848__$1;
(statearr_48853_48885[(1)] = (5));

} else {
var statearr_48854_48886 = state_48848__$1;
(statearr_48854_48886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (6))){
var inst_48830 = (state_48848[(7)]);
var inst_48835 = p.call(null,inst_48830);
var state_48848__$1 = state_48848;
if(cljs.core.truth_(inst_48835)){
var statearr_48857_48887 = state_48848__$1;
(statearr_48857_48887[(1)] = (8));

} else {
var statearr_48858_48888 = state_48848__$1;
(statearr_48858_48888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (3))){
var inst_48846 = (state_48848[(2)]);
var state_48848__$1 = state_48848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48848__$1,inst_48846);
} else {
if((state_val_48849 === (2))){
var state_48848__$1 = state_48848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48848__$1,(4),ch);
} else {
if((state_val_48849 === (11))){
var inst_48838 = (state_48848[(2)]);
var state_48848__$1 = state_48848;
var statearr_48859_48891 = state_48848__$1;
(statearr_48859_48891[(2)] = inst_48838);

(statearr_48859_48891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (9))){
var state_48848__$1 = state_48848;
var statearr_48860_48896 = state_48848__$1;
(statearr_48860_48896[(2)] = null);

(statearr_48860_48896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (5))){
var inst_48833 = cljs.core.async.close_BANG_.call(null,out);
var state_48848__$1 = state_48848;
var statearr_48861_48900 = state_48848__$1;
(statearr_48861_48900[(2)] = inst_48833);

(statearr_48861_48900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (10))){
var inst_48841 = (state_48848[(2)]);
var state_48848__$1 = (function (){var statearr_48863 = state_48848;
(statearr_48863[(8)] = inst_48841);

return statearr_48863;
})();
var statearr_48864_48901 = state_48848__$1;
(statearr_48864_48901[(2)] = null);

(statearr_48864_48901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (8))){
var inst_48830 = (state_48848[(7)]);
var state_48848__$1 = state_48848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48848__$1,(11),out,inst_48830);
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
});})(c__33665__auto___48882,out))
;
return ((function (switch__33280__auto__,c__33665__auto___48882,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_48865 = [null,null,null,null,null,null,null,null,null];
(statearr_48865[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_48865[(1)] = (1));

return statearr_48865;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_48848){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_48848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e48866){if((e48866 instanceof Object)){
var ex__33284__auto__ = e48866;
var statearr_48867_48908 = state_48848;
(statearr_48867_48908[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48922 = state_48848;
state_48848 = G__48922;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_48848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_48848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___48882,out))
})();
var state__33667__auto__ = (function (){var statearr_48877 = f__33666__auto__.call(null);
(statearr_48877[(6)] = c__33665__auto___48882);

return statearr_48877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___48882,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48933 = arguments.length;
switch (G__48933) {
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
return (function (state_49016){
var state_val_49017 = (state_49016[(1)]);
if((state_val_49017 === (7))){
var inst_49012 = (state_49016[(2)]);
var state_49016__$1 = state_49016;
var statearr_49018_49068 = state_49016__$1;
(statearr_49018_49068[(2)] = inst_49012);

(statearr_49018_49068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (20))){
var inst_48982 = (state_49016[(7)]);
var inst_48993 = (state_49016[(2)]);
var inst_48994 = cljs.core.next.call(null,inst_48982);
var inst_48968 = inst_48994;
var inst_48969 = null;
var inst_48970 = (0);
var inst_48971 = (0);
var state_49016__$1 = (function (){var statearr_49019 = state_49016;
(statearr_49019[(8)] = inst_48970);

(statearr_49019[(9)] = inst_48971);

(statearr_49019[(10)] = inst_48993);

(statearr_49019[(11)] = inst_48968);

(statearr_49019[(12)] = inst_48969);

return statearr_49019;
})();
var statearr_49020_49072 = state_49016__$1;
(statearr_49020_49072[(2)] = null);

(statearr_49020_49072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (1))){
var state_49016__$1 = state_49016;
var statearr_49022_49073 = state_49016__$1;
(statearr_49022_49073[(2)] = null);

(statearr_49022_49073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (4))){
var inst_48957 = (state_49016[(13)]);
var inst_48957__$1 = (state_49016[(2)]);
var inst_48958 = (inst_48957__$1 == null);
var state_49016__$1 = (function (){var statearr_49023 = state_49016;
(statearr_49023[(13)] = inst_48957__$1);

return statearr_49023;
})();
if(cljs.core.truth_(inst_48958)){
var statearr_49024_49074 = state_49016__$1;
(statearr_49024_49074[(1)] = (5));

} else {
var statearr_49025_49075 = state_49016__$1;
(statearr_49025_49075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (15))){
var state_49016__$1 = state_49016;
var statearr_49029_49076 = state_49016__$1;
(statearr_49029_49076[(2)] = null);

(statearr_49029_49076[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (21))){
var state_49016__$1 = state_49016;
var statearr_49030_49079 = state_49016__$1;
(statearr_49030_49079[(2)] = null);

(statearr_49030_49079[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (13))){
var inst_48970 = (state_49016[(8)]);
var inst_48971 = (state_49016[(9)]);
var inst_48968 = (state_49016[(11)]);
var inst_48969 = (state_49016[(12)]);
var inst_48978 = (state_49016[(2)]);
var inst_48979 = (inst_48971 + (1));
var tmp49026 = inst_48970;
var tmp49027 = inst_48968;
var tmp49028 = inst_48969;
var inst_48968__$1 = tmp49027;
var inst_48969__$1 = tmp49028;
var inst_48970__$1 = tmp49026;
var inst_48971__$1 = inst_48979;
var state_49016__$1 = (function (){var statearr_49031 = state_49016;
(statearr_49031[(8)] = inst_48970__$1);

(statearr_49031[(14)] = inst_48978);

(statearr_49031[(9)] = inst_48971__$1);

(statearr_49031[(11)] = inst_48968__$1);

(statearr_49031[(12)] = inst_48969__$1);

return statearr_49031;
})();
var statearr_49032_49085 = state_49016__$1;
(statearr_49032_49085[(2)] = null);

(statearr_49032_49085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (22))){
var state_49016__$1 = state_49016;
var statearr_49033_49086 = state_49016__$1;
(statearr_49033_49086[(2)] = null);

(statearr_49033_49086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (6))){
var inst_48957 = (state_49016[(13)]);
var inst_48966 = f.call(null,inst_48957);
var inst_48967 = cljs.core.seq.call(null,inst_48966);
var inst_48968 = inst_48967;
var inst_48969 = null;
var inst_48970 = (0);
var inst_48971 = (0);
var state_49016__$1 = (function (){var statearr_49034 = state_49016;
(statearr_49034[(8)] = inst_48970);

(statearr_49034[(9)] = inst_48971);

(statearr_49034[(11)] = inst_48968);

(statearr_49034[(12)] = inst_48969);

return statearr_49034;
})();
var statearr_49035_49094 = state_49016__$1;
(statearr_49035_49094[(2)] = null);

(statearr_49035_49094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (17))){
var inst_48982 = (state_49016[(7)]);
var inst_48986 = cljs.core.chunk_first.call(null,inst_48982);
var inst_48987 = cljs.core.chunk_rest.call(null,inst_48982);
var inst_48988 = cljs.core.count.call(null,inst_48986);
var inst_48968 = inst_48987;
var inst_48969 = inst_48986;
var inst_48970 = inst_48988;
var inst_48971 = (0);
var state_49016__$1 = (function (){var statearr_49039 = state_49016;
(statearr_49039[(8)] = inst_48970);

(statearr_49039[(9)] = inst_48971);

(statearr_49039[(11)] = inst_48968);

(statearr_49039[(12)] = inst_48969);

return statearr_49039;
})();
var statearr_49040_49098 = state_49016__$1;
(statearr_49040_49098[(2)] = null);

(statearr_49040_49098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (3))){
var inst_49014 = (state_49016[(2)]);
var state_49016__$1 = state_49016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49016__$1,inst_49014);
} else {
if((state_val_49017 === (12))){
var inst_49002 = (state_49016[(2)]);
var state_49016__$1 = state_49016;
var statearr_49041_49099 = state_49016__$1;
(statearr_49041_49099[(2)] = inst_49002);

(statearr_49041_49099[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (2))){
var state_49016__$1 = state_49016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49016__$1,(4),in$);
} else {
if((state_val_49017 === (23))){
var inst_49010 = (state_49016[(2)]);
var state_49016__$1 = state_49016;
var statearr_49048_49100 = state_49016__$1;
(statearr_49048_49100[(2)] = inst_49010);

(statearr_49048_49100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (19))){
var inst_48997 = (state_49016[(2)]);
var state_49016__$1 = state_49016;
var statearr_49049_49101 = state_49016__$1;
(statearr_49049_49101[(2)] = inst_48997);

(statearr_49049_49101[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (11))){
var inst_48968 = (state_49016[(11)]);
var inst_48982 = (state_49016[(7)]);
var inst_48982__$1 = cljs.core.seq.call(null,inst_48968);
var state_49016__$1 = (function (){var statearr_49050 = state_49016;
(statearr_49050[(7)] = inst_48982__$1);

return statearr_49050;
})();
if(inst_48982__$1){
var statearr_49051_49104 = state_49016__$1;
(statearr_49051_49104[(1)] = (14));

} else {
var statearr_49052_49105 = state_49016__$1;
(statearr_49052_49105[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (9))){
var inst_49004 = (state_49016[(2)]);
var inst_49005 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49016__$1 = (function (){var statearr_49053 = state_49016;
(statearr_49053[(15)] = inst_49004);

return statearr_49053;
})();
if(cljs.core.truth_(inst_49005)){
var statearr_49054_49106 = state_49016__$1;
(statearr_49054_49106[(1)] = (21));

} else {
var statearr_49055_49110 = state_49016__$1;
(statearr_49055_49110[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (5))){
var inst_48960 = cljs.core.async.close_BANG_.call(null,out);
var state_49016__$1 = state_49016;
var statearr_49056_49112 = state_49016__$1;
(statearr_49056_49112[(2)] = inst_48960);

(statearr_49056_49112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (14))){
var inst_48982 = (state_49016[(7)]);
var inst_48984 = cljs.core.chunked_seq_QMARK_.call(null,inst_48982);
var state_49016__$1 = state_49016;
if(inst_48984){
var statearr_49057_49113 = state_49016__$1;
(statearr_49057_49113[(1)] = (17));

} else {
var statearr_49058_49114 = state_49016__$1;
(statearr_49058_49114[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (16))){
var inst_49000 = (state_49016[(2)]);
var state_49016__$1 = state_49016;
var statearr_49059_49115 = state_49016__$1;
(statearr_49059_49115[(2)] = inst_49000);

(statearr_49059_49115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49017 === (10))){
var inst_48971 = (state_49016[(9)]);
var inst_48969 = (state_49016[(12)]);
var inst_48976 = cljs.core._nth.call(null,inst_48969,inst_48971);
var state_49016__$1 = state_49016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49016__$1,(13),out,inst_48976);
} else {
if((state_val_49017 === (18))){
var inst_48982 = (state_49016[(7)]);
var inst_48991 = cljs.core.first.call(null,inst_48982);
var state_49016__$1 = state_49016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49016__$1,(20),out,inst_48991);
} else {
if((state_val_49017 === (8))){
var inst_48970 = (state_49016[(8)]);
var inst_48971 = (state_49016[(9)]);
var inst_48973 = (inst_48971 < inst_48970);
var inst_48974 = inst_48973;
var state_49016__$1 = state_49016;
if(cljs.core.truth_(inst_48974)){
var statearr_49060_49119 = state_49016__$1;
(statearr_49060_49119[(1)] = (10));

} else {
var statearr_49061_49120 = state_49016__$1;
(statearr_49061_49120[(1)] = (11));

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
var statearr_49062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49062[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__);

(statearr_49062[(1)] = (1));

return statearr_49062;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____1 = (function (state_49016){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_49016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e49063){if((e49063 instanceof Object)){
var ex__33284__auto__ = e49063;
var statearr_49064_49133 = state_49016;
(statearr_49064_49133[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49134 = state_49016;
state_49016 = G__49134;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__ = function(state_49016){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____1.call(this,state_49016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33281__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_49065 = f__33666__auto__.call(null);
(statearr_49065[(6)] = c__33665__auto__);

return statearr_49065;
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
var G__49136 = arguments.length;
switch (G__49136) {
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
var G__49139 = arguments.length;
switch (G__49139) {
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
var G__49142 = arguments.length;
switch (G__49142) {
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
var c__33665__auto___49210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___49210,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___49210,out){
return (function (state_49166){
var state_val_49167 = (state_49166[(1)]);
if((state_val_49167 === (7))){
var inst_49161 = (state_49166[(2)]);
var state_49166__$1 = state_49166;
var statearr_49168_49212 = state_49166__$1;
(statearr_49168_49212[(2)] = inst_49161);

(statearr_49168_49212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (1))){
var inst_49143 = null;
var state_49166__$1 = (function (){var statearr_49169 = state_49166;
(statearr_49169[(7)] = inst_49143);

return statearr_49169;
})();
var statearr_49170_49213 = state_49166__$1;
(statearr_49170_49213[(2)] = null);

(statearr_49170_49213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (4))){
var inst_49146 = (state_49166[(8)]);
var inst_49146__$1 = (state_49166[(2)]);
var inst_49147 = (inst_49146__$1 == null);
var inst_49148 = cljs.core.not.call(null,inst_49147);
var state_49166__$1 = (function (){var statearr_49171 = state_49166;
(statearr_49171[(8)] = inst_49146__$1);

return statearr_49171;
})();
if(inst_49148){
var statearr_49173_49214 = state_49166__$1;
(statearr_49173_49214[(1)] = (5));

} else {
var statearr_49178_49215 = state_49166__$1;
(statearr_49178_49215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (6))){
var state_49166__$1 = state_49166;
var statearr_49180_49216 = state_49166__$1;
(statearr_49180_49216[(2)] = null);

(statearr_49180_49216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (3))){
var inst_49163 = (state_49166[(2)]);
var inst_49164 = cljs.core.async.close_BANG_.call(null,out);
var state_49166__$1 = (function (){var statearr_49181 = state_49166;
(statearr_49181[(9)] = inst_49163);

return statearr_49181;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49166__$1,inst_49164);
} else {
if((state_val_49167 === (2))){
var state_49166__$1 = state_49166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49166__$1,(4),ch);
} else {
if((state_val_49167 === (11))){
var inst_49146 = (state_49166[(8)]);
var inst_49155 = (state_49166[(2)]);
var inst_49143 = inst_49146;
var state_49166__$1 = (function (){var statearr_49182 = state_49166;
(statearr_49182[(7)] = inst_49143);

(statearr_49182[(10)] = inst_49155);

return statearr_49182;
})();
var statearr_49184_49220 = state_49166__$1;
(statearr_49184_49220[(2)] = null);

(statearr_49184_49220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (9))){
var inst_49146 = (state_49166[(8)]);
var state_49166__$1 = state_49166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49166__$1,(11),out,inst_49146);
} else {
if((state_val_49167 === (5))){
var inst_49143 = (state_49166[(7)]);
var inst_49146 = (state_49166[(8)]);
var inst_49150 = cljs.core._EQ_.call(null,inst_49146,inst_49143);
var state_49166__$1 = state_49166;
if(inst_49150){
var statearr_49190_49224 = state_49166__$1;
(statearr_49190_49224[(1)] = (8));

} else {
var statearr_49191_49225 = state_49166__$1;
(statearr_49191_49225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (10))){
var inst_49158 = (state_49166[(2)]);
var state_49166__$1 = state_49166;
var statearr_49196_49226 = state_49166__$1;
(statearr_49196_49226[(2)] = inst_49158);

(statearr_49196_49226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (8))){
var inst_49143 = (state_49166[(7)]);
var tmp49186 = inst_49143;
var inst_49143__$1 = tmp49186;
var state_49166__$1 = (function (){var statearr_49197 = state_49166;
(statearr_49197[(7)] = inst_49143__$1);

return statearr_49197;
})();
var statearr_49198_49227 = state_49166__$1;
(statearr_49198_49227[(2)] = null);

(statearr_49198_49227[(1)] = (2));


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
});})(c__33665__auto___49210,out))
;
return ((function (switch__33280__auto__,c__33665__auto___49210,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_49199 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49199[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_49199[(1)] = (1));

return statearr_49199;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_49166){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_49166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e49203){if((e49203 instanceof Object)){
var ex__33284__auto__ = e49203;
var statearr_49204_49228 = state_49166;
(statearr_49204_49228[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49233 = state_49166;
state_49166 = G__49233;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_49166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_49166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___49210,out))
})();
var state__33667__auto__ = (function (){var statearr_49205 = f__33666__auto__.call(null);
(statearr_49205[(6)] = c__33665__auto___49210);

return statearr_49205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___49210,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49238 = arguments.length;
switch (G__49238) {
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
var c__33665__auto___49322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___49322,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___49322,out){
return (function (state_49279){
var state_val_49280 = (state_49279[(1)]);
if((state_val_49280 === (7))){
var inst_49275 = (state_49279[(2)]);
var state_49279__$1 = state_49279;
var statearr_49281_49323 = state_49279__$1;
(statearr_49281_49323[(2)] = inst_49275);

(statearr_49281_49323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49280 === (1))){
var inst_49242 = (new Array(n));
var inst_49243 = inst_49242;
var inst_49244 = (0);
var state_49279__$1 = (function (){var statearr_49282 = state_49279;
(statearr_49282[(7)] = inst_49243);

(statearr_49282[(8)] = inst_49244);

return statearr_49282;
})();
var statearr_49283_49324 = state_49279__$1;
(statearr_49283_49324[(2)] = null);

(statearr_49283_49324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49280 === (4))){
var inst_49247 = (state_49279[(9)]);
var inst_49247__$1 = (state_49279[(2)]);
var inst_49248 = (inst_49247__$1 == null);
var inst_49249 = cljs.core.not.call(null,inst_49248);
var state_49279__$1 = (function (){var statearr_49284 = state_49279;
(statearr_49284[(9)] = inst_49247__$1);

return statearr_49284;
})();
if(inst_49249){
var statearr_49285_49328 = state_49279__$1;
(statearr_49285_49328[(1)] = (5));

} else {
var statearr_49286_49329 = state_49279__$1;
(statearr_49286_49329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49280 === (15))){
var inst_49269 = (state_49279[(2)]);
var state_49279__$1 = state_49279;
var statearr_49287_49330 = state_49279__$1;
(statearr_49287_49330[(2)] = inst_49269);

(statearr_49287_49330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49280 === (13))){
var state_49279__$1 = state_49279;
var statearr_49291_49334 = state_49279__$1;
(statearr_49291_49334[(2)] = null);

(statearr_49291_49334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49280 === (6))){
var inst_49244 = (state_49279[(8)]);
var inst_49265 = (inst_49244 > (0));
var state_49279__$1 = state_49279;
if(cljs.core.truth_(inst_49265)){
var statearr_49296_49335 = state_49279__$1;
(statearr_49296_49335[(1)] = (12));

} else {
var statearr_49297_49336 = state_49279__$1;
(statearr_49297_49336[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49280 === (3))){
var inst_49277 = (state_49279[(2)]);
var state_49279__$1 = state_49279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49279__$1,inst_49277);
} else {
if((state_val_49280 === (12))){
var inst_49243 = (state_49279[(7)]);
var inst_49267 = cljs.core.vec.call(null,inst_49243);
var state_49279__$1 = state_49279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49279__$1,(15),out,inst_49267);
} else {
if((state_val_49280 === (2))){
var state_49279__$1 = state_49279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49279__$1,(4),ch);
} else {
if((state_val_49280 === (11))){
var inst_49259 = (state_49279[(2)]);
var inst_49260 = (new Array(n));
var inst_49243 = inst_49260;
var inst_49244 = (0);
var state_49279__$1 = (function (){var statearr_49301 = state_49279;
(statearr_49301[(7)] = inst_49243);

(statearr_49301[(10)] = inst_49259);

(statearr_49301[(8)] = inst_49244);

return statearr_49301;
})();
var statearr_49306_49337 = state_49279__$1;
(statearr_49306_49337[(2)] = null);

(statearr_49306_49337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49280 === (9))){
var inst_49243 = (state_49279[(7)]);
var inst_49257 = cljs.core.vec.call(null,inst_49243);
var state_49279__$1 = state_49279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49279__$1,(11),out,inst_49257);
} else {
if((state_val_49280 === (5))){
var inst_49243 = (state_49279[(7)]);
var inst_49247 = (state_49279[(9)]);
var inst_49252 = (state_49279[(11)]);
var inst_49244 = (state_49279[(8)]);
var inst_49251 = (inst_49243[inst_49244] = inst_49247);
var inst_49252__$1 = (inst_49244 + (1));
var inst_49253 = (inst_49252__$1 < n);
var state_49279__$1 = (function (){var statearr_49307 = state_49279;
(statearr_49307[(11)] = inst_49252__$1);

(statearr_49307[(12)] = inst_49251);

return statearr_49307;
})();
if(cljs.core.truth_(inst_49253)){
var statearr_49308_49338 = state_49279__$1;
(statearr_49308_49338[(1)] = (8));

} else {
var statearr_49309_49339 = state_49279__$1;
(statearr_49309_49339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49280 === (14))){
var inst_49272 = (state_49279[(2)]);
var inst_49273 = cljs.core.async.close_BANG_.call(null,out);
var state_49279__$1 = (function (){var statearr_49311 = state_49279;
(statearr_49311[(13)] = inst_49272);

return statearr_49311;
})();
var statearr_49312_49340 = state_49279__$1;
(statearr_49312_49340[(2)] = inst_49273);

(statearr_49312_49340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49280 === (10))){
var inst_49263 = (state_49279[(2)]);
var state_49279__$1 = state_49279;
var statearr_49313_49341 = state_49279__$1;
(statearr_49313_49341[(2)] = inst_49263);

(statearr_49313_49341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49280 === (8))){
var inst_49243 = (state_49279[(7)]);
var inst_49252 = (state_49279[(11)]);
var tmp49310 = inst_49243;
var inst_49243__$1 = tmp49310;
var inst_49244 = inst_49252;
var state_49279__$1 = (function (){var statearr_49314 = state_49279;
(statearr_49314[(7)] = inst_49243__$1);

(statearr_49314[(8)] = inst_49244);

return statearr_49314;
})();
var statearr_49315_49342 = state_49279__$1;
(statearr_49315_49342[(2)] = null);

(statearr_49315_49342[(1)] = (2));


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
});})(c__33665__auto___49322,out))
;
return ((function (switch__33280__auto__,c__33665__auto___49322,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_49316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49316[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_49316[(1)] = (1));

return statearr_49316;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_49279){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_49279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e49318){if((e49318 instanceof Object)){
var ex__33284__auto__ = e49318;
var statearr_49319_49344 = state_49279;
(statearr_49319_49344[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49345 = state_49279;
state_49279 = G__49345;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_49279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_49279);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___49322,out))
})();
var state__33667__auto__ = (function (){var statearr_49320 = f__33666__auto__.call(null);
(statearr_49320[(6)] = c__33665__auto___49322);

return statearr_49320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___49322,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49347 = arguments.length;
switch (G__49347) {
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
var c__33665__auto___49438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___49438,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___49438,out){
return (function (state_49395){
var state_val_49396 = (state_49395[(1)]);
if((state_val_49396 === (7))){
var inst_49391 = (state_49395[(2)]);
var state_49395__$1 = state_49395;
var statearr_49397_49439 = state_49395__$1;
(statearr_49397_49439[(2)] = inst_49391);

(statearr_49397_49439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49396 === (1))){
var inst_49351 = [];
var inst_49352 = inst_49351;
var inst_49353 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49395__$1 = (function (){var statearr_49398 = state_49395;
(statearr_49398[(7)] = inst_49353);

(statearr_49398[(8)] = inst_49352);

return statearr_49398;
})();
var statearr_49399_49442 = state_49395__$1;
(statearr_49399_49442[(2)] = null);

(statearr_49399_49442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49396 === (4))){
var inst_49356 = (state_49395[(9)]);
var inst_49356__$1 = (state_49395[(2)]);
var inst_49357 = (inst_49356__$1 == null);
var inst_49358 = cljs.core.not.call(null,inst_49357);
var state_49395__$1 = (function (){var statearr_49400 = state_49395;
(statearr_49400[(9)] = inst_49356__$1);

return statearr_49400;
})();
if(inst_49358){
var statearr_49401_49443 = state_49395__$1;
(statearr_49401_49443[(1)] = (5));

} else {
var statearr_49402_49444 = state_49395__$1;
(statearr_49402_49444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49396 === (15))){
var inst_49385 = (state_49395[(2)]);
var state_49395__$1 = state_49395;
var statearr_49407_49445 = state_49395__$1;
(statearr_49407_49445[(2)] = inst_49385);

(statearr_49407_49445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49396 === (13))){
var state_49395__$1 = state_49395;
var statearr_49408_49446 = state_49395__$1;
(statearr_49408_49446[(2)] = null);

(statearr_49408_49446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49396 === (6))){
var inst_49352 = (state_49395[(8)]);
var inst_49380 = inst_49352.length;
var inst_49381 = (inst_49380 > (0));
var state_49395__$1 = state_49395;
if(cljs.core.truth_(inst_49381)){
var statearr_49409_49449 = state_49395__$1;
(statearr_49409_49449[(1)] = (12));

} else {
var statearr_49410_49450 = state_49395__$1;
(statearr_49410_49450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49396 === (3))){
var inst_49393 = (state_49395[(2)]);
var state_49395__$1 = state_49395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49395__$1,inst_49393);
} else {
if((state_val_49396 === (12))){
var inst_49352 = (state_49395[(8)]);
var inst_49383 = cljs.core.vec.call(null,inst_49352);
var state_49395__$1 = state_49395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49395__$1,(15),out,inst_49383);
} else {
if((state_val_49396 === (2))){
var state_49395__$1 = state_49395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49395__$1,(4),ch);
} else {
if((state_val_49396 === (11))){
var inst_49356 = (state_49395[(9)]);
var inst_49360 = (state_49395[(10)]);
var inst_49373 = (state_49395[(2)]);
var inst_49374 = [];
var inst_49375 = inst_49374.push(inst_49356);
var inst_49352 = inst_49374;
var inst_49353 = inst_49360;
var state_49395__$1 = (function (){var statearr_49411 = state_49395;
(statearr_49411[(11)] = inst_49373);

(statearr_49411[(12)] = inst_49375);

(statearr_49411[(7)] = inst_49353);

(statearr_49411[(8)] = inst_49352);

return statearr_49411;
})();
var statearr_49412_49495 = state_49395__$1;
(statearr_49412_49495[(2)] = null);

(statearr_49412_49495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49396 === (9))){
var inst_49352 = (state_49395[(8)]);
var inst_49371 = cljs.core.vec.call(null,inst_49352);
var state_49395__$1 = state_49395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49395__$1,(11),out,inst_49371);
} else {
if((state_val_49396 === (5))){
var inst_49356 = (state_49395[(9)]);
var inst_49353 = (state_49395[(7)]);
var inst_49360 = (state_49395[(10)]);
var inst_49360__$1 = f.call(null,inst_49356);
var inst_49361 = cljs.core._EQ_.call(null,inst_49360__$1,inst_49353);
var inst_49362 = cljs.core.keyword_identical_QMARK_.call(null,inst_49353,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49363 = (inst_49361) || (inst_49362);
var state_49395__$1 = (function (){var statearr_49418 = state_49395;
(statearr_49418[(10)] = inst_49360__$1);

return statearr_49418;
})();
if(cljs.core.truth_(inst_49363)){
var statearr_49419_49496 = state_49395__$1;
(statearr_49419_49496[(1)] = (8));

} else {
var statearr_49420_49497 = state_49395__$1;
(statearr_49420_49497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49396 === (14))){
var inst_49388 = (state_49395[(2)]);
var inst_49389 = cljs.core.async.close_BANG_.call(null,out);
var state_49395__$1 = (function (){var statearr_49422 = state_49395;
(statearr_49422[(13)] = inst_49388);

return statearr_49422;
})();
var statearr_49423_49498 = state_49395__$1;
(statearr_49423_49498[(2)] = inst_49389);

(statearr_49423_49498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49396 === (10))){
var inst_49378 = (state_49395[(2)]);
var state_49395__$1 = state_49395;
var statearr_49424_49499 = state_49395__$1;
(statearr_49424_49499[(2)] = inst_49378);

(statearr_49424_49499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49396 === (8))){
var inst_49356 = (state_49395[(9)]);
var inst_49352 = (state_49395[(8)]);
var inst_49360 = (state_49395[(10)]);
var inst_49365 = inst_49352.push(inst_49356);
var tmp49421 = inst_49352;
var inst_49352__$1 = tmp49421;
var inst_49353 = inst_49360;
var state_49395__$1 = (function (){var statearr_49425 = state_49395;
(statearr_49425[(14)] = inst_49365);

(statearr_49425[(7)] = inst_49353);

(statearr_49425[(8)] = inst_49352__$1);

return statearr_49425;
})();
var statearr_49426_49500 = state_49395__$1;
(statearr_49426_49500[(2)] = null);

(statearr_49426_49500[(1)] = (2));


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
});})(c__33665__auto___49438,out))
;
return ((function (switch__33280__auto__,c__33665__auto___49438,out){
return (function() {
var cljs$core$async$state_machine__33281__auto__ = null;
var cljs$core$async$state_machine__33281__auto____0 = (function (){
var statearr_49430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49430[(0)] = cljs$core$async$state_machine__33281__auto__);

(statearr_49430[(1)] = (1));

return statearr_49430;
});
var cljs$core$async$state_machine__33281__auto____1 = (function (state_49395){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_49395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e49431){if((e49431 instanceof Object)){
var ex__33284__auto__ = e49431;
var statearr_49432_49504 = state_49395;
(statearr_49432_49504[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49505 = state_49395;
state_49395 = G__49505;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
cljs$core$async$state_machine__33281__auto__ = function(state_49395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33281__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33281__auto____1.call(this,state_49395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33281__auto____0;
cljs$core$async$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33281__auto____1;
return cljs$core$async$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___49438,out))
})();
var state__33667__auto__ = (function (){var statearr_49433 = f__33666__auto__.call(null);
(statearr_49433[(6)] = c__33665__auto___49438);

return statearr_49433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___49438,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510229231946
