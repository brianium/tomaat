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
var G__33828 = arguments.length;
switch (G__33828) {
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
if(typeof cljs.core.async.t_cljs$core$async33830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33830 = (function (f,blockable,meta33831){
this.f = f;
this.blockable = blockable;
this.meta33831 = meta33831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33832,meta33831__$1){
var self__ = this;
var _33832__$1 = this;
return (new cljs.core.async.t_cljs$core$async33830(self__.f,self__.blockable,meta33831__$1));
});

cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33832){
var self__ = this;
var _33832__$1 = this;
return self__.meta33831;
});

cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33831","meta33831",942046781,null)], null);
});

cljs.core.async.t_cljs$core$async33830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33830";

cljs.core.async.t_cljs$core$async33830.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async33830");
});

cljs.core.async.__GT_t_cljs$core$async33830 = (function cljs$core$async$__GT_t_cljs$core$async33830(f__$1,blockable__$1,meta33831){
return (new cljs.core.async.t_cljs$core$async33830(f__$1,blockable__$1,meta33831));
});

}

return (new cljs.core.async.t_cljs$core$async33830(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33851 = arguments.length;
switch (G__33851) {
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
var G__33864 = arguments.length;
switch (G__33864) {
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
var G__33876 = arguments.length;
switch (G__33876) {
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
var val_33878 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33878);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33878,ret){
return (function (){
return fn1.call(null,val_33878);
});})(val_33878,ret))
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
var G__33881 = arguments.length;
switch (G__33881) {
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
var n__31115__auto___33888 = n;
var x_33889 = (0);
while(true){
if((x_33889 < n__31115__auto___33888)){
(a[x_33889] = (0));

var G__33890 = (x_33889 + (1));
x_33889 = G__33890;
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

var G__33891 = (i + (1));
i = G__33891;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33892 = (function (flag,meta33893){
this.flag = flag;
this.meta33893 = meta33893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33894,meta33893__$1){
var self__ = this;
var _33894__$1 = this;
return (new cljs.core.async.t_cljs$core$async33892(self__.flag,meta33893__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33894){
var self__ = this;
var _33894__$1 = this;
return self__.meta33893;
});})(flag))
;

cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33892.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33893","meta33893",380520604,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33892";

cljs.core.async.t_cljs$core$async33892.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async33892");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33892 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33892(flag__$1,meta33893){
return (new cljs.core.async.t_cljs$core$async33892(flag__$1,meta33893));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33892(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33899 = (function (flag,cb,meta33900){
this.flag = flag;
this.cb = cb;
this.meta33900 = meta33900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33901,meta33900__$1){
var self__ = this;
var _33901__$1 = this;
return (new cljs.core.async.t_cljs$core$async33899(self__.flag,self__.cb,meta33900__$1));
});

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33901){
var self__ = this;
var _33901__$1 = this;
return self__.meta33900;
});

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33900","meta33900",-194241833,null)], null);
});

cljs.core.async.t_cljs$core$async33899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33899";

cljs.core.async.t_cljs$core$async33899.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async33899");
});

cljs.core.async.__GT_t_cljs$core$async33899 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33899(flag__$1,cb__$1,meta33900){
return (new cljs.core.async.t_cljs$core$async33899(flag__$1,cb__$1,meta33900));
});

}

return (new cljs.core.async.t_cljs$core$async33899(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33914_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33914_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33915_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33915_SHARP_,port], null));
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
var G__33921 = (i + (1));
i = G__33921;
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
var len__31349__auto___33932 = arguments.length;
var i__31350__auto___33933 = (0);
while(true){
if((i__31350__auto___33933 < len__31349__auto___33932)){
args__31356__auto__.push((arguments[i__31350__auto___33933]));

var G__33934 = (i__31350__auto___33933 + (1));
i__31350__auto___33933 = G__33934;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33925){
var map__33926 = p__33925;
var map__33926__$1 = ((((!((map__33926 == null)))?((((map__33926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33926):map__33926);
var opts = map__33926__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33923){
var G__33924 = cljs.core.first.call(null,seq33923);
var seq33923__$1 = cljs.core.next.call(null,seq33923);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33924,seq33923__$1);
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
var G__33939 = arguments.length;
switch (G__33939) {
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
var c__33728__auto___34034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___34034){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___34034){
return (function (state_33990){
var state_val_33991 = (state_33990[(1)]);
if((state_val_33991 === (7))){
var inst_33978 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_34000_34036 = state_33990__$1;
(statearr_34000_34036[(2)] = inst_33978);

(statearr_34000_34036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (1))){
var state_33990__$1 = state_33990;
var statearr_34002_34037 = state_33990__$1;
(statearr_34002_34037[(2)] = null);

(statearr_34002_34037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (4))){
var inst_33949 = (state_33990[(7)]);
var inst_33949__$1 = (state_33990[(2)]);
var inst_33951 = (inst_33949__$1 == null);
var state_33990__$1 = (function (){var statearr_34004 = state_33990;
(statearr_34004[(7)] = inst_33949__$1);

return statearr_34004;
})();
if(cljs.core.truth_(inst_33951)){
var statearr_34005_34040 = state_33990__$1;
(statearr_34005_34040[(1)] = (5));

} else {
var statearr_34006_34042 = state_33990__$1;
(statearr_34006_34042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (13))){
var state_33990__$1 = state_33990;
var statearr_34010_34043 = state_33990__$1;
(statearr_34010_34043[(2)] = null);

(statearr_34010_34043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (6))){
var inst_33949 = (state_33990[(7)]);
var state_33990__$1 = state_33990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33990__$1,(11),to,inst_33949);
} else {
if((state_val_33991 === (3))){
var inst_33982 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33990__$1,inst_33982);
} else {
if((state_val_33991 === (12))){
var state_33990__$1 = state_33990;
var statearr_34011_34045 = state_33990__$1;
(statearr_34011_34045[(2)] = null);

(statearr_34011_34045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (2))){
var state_33990__$1 = state_33990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33990__$1,(4),from);
} else {
if((state_val_33991 === (11))){
var inst_33962 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
if(cljs.core.truth_(inst_33962)){
var statearr_34013_34046 = state_33990__$1;
(statearr_34013_34046[(1)] = (12));

} else {
var statearr_34014_34047 = state_33990__$1;
(statearr_34014_34047[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (9))){
var state_33990__$1 = state_33990;
var statearr_34015_34050 = state_33990__$1;
(statearr_34015_34050[(2)] = null);

(statearr_34015_34050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (5))){
var state_33990__$1 = state_33990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34016_34052 = state_33990__$1;
(statearr_34016_34052[(1)] = (8));

} else {
var statearr_34017_34053 = state_33990__$1;
(statearr_34017_34053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (14))){
var inst_33976 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_34018_34054 = state_33990__$1;
(statearr_34018_34054[(2)] = inst_33976);

(statearr_34018_34054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (10))){
var inst_33959 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_34021_34055 = state_33990__$1;
(statearr_34021_34055[(2)] = inst_33959);

(statearr_34021_34055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (8))){
var inst_33955 = cljs.core.async.close_BANG_.call(null,to);
var state_33990__$1 = state_33990;
var statearr_34024_34058 = state_33990__$1;
(statearr_34024_34058[(2)] = inst_33955);

(statearr_34024_34058[(1)] = (10));


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
});})(c__33728__auto___34034))
;
return ((function (switch__33334__auto__,c__33728__auto___34034){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_34026 = [null,null,null,null,null,null,null,null];
(statearr_34026[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_34026[(1)] = (1));

return statearr_34026;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_33990){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_33990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e34027){if((e34027 instanceof Object)){
var ex__33338__auto__ = e34027;
var statearr_34028_34064 = state_33990;
(statearr_34028_34064[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34065 = state_33990;
state_33990 = G__34065;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_33990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_33990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___34034))
})();
var state__33730__auto__ = (function (){var statearr_34031 = f__33729__auto__.call(null);
(statearr_34031[(6)] = c__33728__auto___34034);

return statearr_34031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___34034))
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
return (function (p__34071){
var vec__34072 = p__34071;
var v = cljs.core.nth.call(null,vec__34072,(0),null);
var p = cljs.core.nth.call(null,vec__34072,(1),null);
var job = vec__34072;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33728__auto___34312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___34312,res,vec__34072,v,p,job,jobs,results){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___34312,res,vec__34072,v,p,job,jobs,results){
return (function (state_34080){
var state_val_34081 = (state_34080[(1)]);
if((state_val_34081 === (1))){
var state_34080__$1 = state_34080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34080__$1,(2),res,v);
} else {
if((state_val_34081 === (2))){
var inst_34076 = (state_34080[(2)]);
var inst_34077 = cljs.core.async.close_BANG_.call(null,res);
var state_34080__$1 = (function (){var statearr_34082 = state_34080;
(statearr_34082[(7)] = inst_34076);

return statearr_34082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34080__$1,inst_34077);
} else {
return null;
}
}
});})(c__33728__auto___34312,res,vec__34072,v,p,job,jobs,results))
;
return ((function (switch__33334__auto__,c__33728__auto___34312,res,vec__34072,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0 = (function (){
var statearr_34084 = [null,null,null,null,null,null,null,null];
(statearr_34084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__);

(statearr_34084[(1)] = (1));

return statearr_34084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1 = (function (state_34080){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_34080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e34086){if((e34086 instanceof Object)){
var ex__33338__auto__ = e34086;
var statearr_34088_34318 = state_34080;
(statearr_34088_34318[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34319 = state_34080;
state_34080 = G__34319;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = function(state_34080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1.call(this,state_34080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___34312,res,vec__34072,v,p,job,jobs,results))
})();
var state__33730__auto__ = (function (){var statearr_34089 = f__33729__auto__.call(null);
(statearr_34089[(6)] = c__33728__auto___34312);

return statearr_34089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___34312,res,vec__34072,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34090){
var vec__34091 = p__34090;
var v = cljs.core.nth.call(null,vec__34091,(0),null);
var p = cljs.core.nth.call(null,vec__34091,(1),null);
var job = vec__34091;
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
var n__31115__auto___34321 = n;
var __34322 = (0);
while(true){
if((__34322 < n__31115__auto___34321)){
var G__34097_34323 = type;
var G__34097_34324__$1 = (((G__34097_34323 instanceof cljs.core.Keyword))?G__34097_34323.fqn:null);
switch (G__34097_34324__$1) {
case "compute":
var c__33728__auto___34326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34322,c__33728__auto___34326,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (__34322,c__33728__auto___34326,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async){
return (function (state_34115){
var state_val_34116 = (state_34115[(1)]);
if((state_val_34116 === (1))){
var state_34115__$1 = state_34115;
var statearr_34122_34327 = state_34115__$1;
(statearr_34122_34327[(2)] = null);

(statearr_34122_34327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (2))){
var state_34115__$1 = state_34115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34115__$1,(4),jobs);
} else {
if((state_val_34116 === (3))){
var inst_34111 = (state_34115[(2)]);
var state_34115__$1 = state_34115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34115__$1,inst_34111);
} else {
if((state_val_34116 === (4))){
var inst_34101 = (state_34115[(2)]);
var inst_34103 = process.call(null,inst_34101);
var state_34115__$1 = state_34115;
if(cljs.core.truth_(inst_34103)){
var statearr_34124_34331 = state_34115__$1;
(statearr_34124_34331[(1)] = (5));

} else {
var statearr_34125_34332 = state_34115__$1;
(statearr_34125_34332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (5))){
var state_34115__$1 = state_34115;
var statearr_34127_34333 = state_34115__$1;
(statearr_34127_34333[(2)] = null);

(statearr_34127_34333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (6))){
var state_34115__$1 = state_34115;
var statearr_34128_34334 = state_34115__$1;
(statearr_34128_34334[(2)] = null);

(statearr_34128_34334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (7))){
var inst_34109 = (state_34115[(2)]);
var state_34115__$1 = state_34115;
var statearr_34129_34335 = state_34115__$1;
(statearr_34129_34335[(2)] = inst_34109);

(statearr_34129_34335[(1)] = (3));


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
});})(__34322,c__33728__auto___34326,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async))
;
return ((function (__34322,switch__33334__auto__,c__33728__auto___34326,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0 = (function (){
var statearr_34133 = [null,null,null,null,null,null,null];
(statearr_34133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__);

(statearr_34133[(1)] = (1));

return statearr_34133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1 = (function (state_34115){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_34115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e34135){if((e34135 instanceof Object)){
var ex__33338__auto__ = e34135;
var statearr_34136_34337 = state_34115;
(statearr_34136_34337[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34339 = state_34115;
state_34115 = G__34339;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = function(state_34115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1.call(this,state_34115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__;
})()
;})(__34322,switch__33334__auto__,c__33728__auto___34326,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async))
})();
var state__33730__auto__ = (function (){var statearr_34138 = f__33729__auto__.call(null);
(statearr_34138[(6)] = c__33728__auto___34326);

return statearr_34138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(__34322,c__33728__auto___34326,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async))
);


break;
case "async":
var c__33728__auto___34340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34322,c__33728__auto___34340,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (__34322,c__33728__auto___34340,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async){
return (function (state_34152){
var state_val_34153 = (state_34152[(1)]);
if((state_val_34153 === (1))){
var state_34152__$1 = state_34152;
var statearr_34156_34342 = state_34152__$1;
(statearr_34156_34342[(2)] = null);

(statearr_34156_34342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (2))){
var state_34152__$1 = state_34152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34152__$1,(4),jobs);
} else {
if((state_val_34153 === (3))){
var inst_34150 = (state_34152[(2)]);
var state_34152__$1 = state_34152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34152__$1,inst_34150);
} else {
if((state_val_34153 === (4))){
var inst_34142 = (state_34152[(2)]);
var inst_34143 = async.call(null,inst_34142);
var state_34152__$1 = state_34152;
if(cljs.core.truth_(inst_34143)){
var statearr_34158_34343 = state_34152__$1;
(statearr_34158_34343[(1)] = (5));

} else {
var statearr_34159_34344 = state_34152__$1;
(statearr_34159_34344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (5))){
var state_34152__$1 = state_34152;
var statearr_34162_34345 = state_34152__$1;
(statearr_34162_34345[(2)] = null);

(statearr_34162_34345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (6))){
var state_34152__$1 = state_34152;
var statearr_34164_34346 = state_34152__$1;
(statearr_34164_34346[(2)] = null);

(statearr_34164_34346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (7))){
var inst_34148 = (state_34152[(2)]);
var state_34152__$1 = state_34152;
var statearr_34165_34347 = state_34152__$1;
(statearr_34165_34347[(2)] = inst_34148);

(statearr_34165_34347[(1)] = (3));


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
});})(__34322,c__33728__auto___34340,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async))
;
return ((function (__34322,switch__33334__auto__,c__33728__auto___34340,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0 = (function (){
var statearr_34166 = [null,null,null,null,null,null,null];
(statearr_34166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__);

(statearr_34166[(1)] = (1));

return statearr_34166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1 = (function (state_34152){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_34152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e34168){if((e34168 instanceof Object)){
var ex__33338__auto__ = e34168;
var statearr_34170_34349 = state_34152;
(statearr_34170_34349[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34351 = state_34152;
state_34152 = G__34351;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = function(state_34152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1.call(this,state_34152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__;
})()
;})(__34322,switch__33334__auto__,c__33728__auto___34340,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async))
})();
var state__33730__auto__ = (function (){var statearr_34173 = f__33729__auto__.call(null);
(statearr_34173[(6)] = c__33728__auto___34340);

return statearr_34173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(__34322,c__33728__auto___34340,G__34097_34323,G__34097_34324__$1,n__31115__auto___34321,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34097_34324__$1)].join('')));

}

var G__34352 = (__34322 + (1));
__34322 = G__34352;
continue;
} else {
}
break;
}

var c__33728__auto___34353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___34353,jobs,results,process,async){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___34353,jobs,results,process,async){
return (function (state_34196){
var state_val_34197 = (state_34196[(1)]);
if((state_val_34197 === (1))){
var state_34196__$1 = state_34196;
var statearr_34200_34356 = state_34196__$1;
(statearr_34200_34356[(2)] = null);

(statearr_34200_34356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (2))){
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34196__$1,(4),from);
} else {
if((state_val_34197 === (3))){
var inst_34194 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34196__$1,inst_34194);
} else {
if((state_val_34197 === (4))){
var inst_34176 = (state_34196[(7)]);
var inst_34176__$1 = (state_34196[(2)]);
var inst_34177 = (inst_34176__$1 == null);
var state_34196__$1 = (function (){var statearr_34205 = state_34196;
(statearr_34205[(7)] = inst_34176__$1);

return statearr_34205;
})();
if(cljs.core.truth_(inst_34177)){
var statearr_34206_34359 = state_34196__$1;
(statearr_34206_34359[(1)] = (5));

} else {
var statearr_34207_34360 = state_34196__$1;
(statearr_34207_34360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (5))){
var inst_34179 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34196__$1 = state_34196;
var statearr_34208_34361 = state_34196__$1;
(statearr_34208_34361[(2)] = inst_34179);

(statearr_34208_34361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (6))){
var inst_34181 = (state_34196[(8)]);
var inst_34176 = (state_34196[(7)]);
var inst_34181__$1 = cljs.core.async.chan.call(null,(1));
var inst_34183 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34184 = [inst_34176,inst_34181__$1];
var inst_34185 = (new cljs.core.PersistentVector(null,2,(5),inst_34183,inst_34184,null));
var state_34196__$1 = (function (){var statearr_34210 = state_34196;
(statearr_34210[(8)] = inst_34181__$1);

return statearr_34210;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34196__$1,(8),jobs,inst_34185);
} else {
if((state_val_34197 === (7))){
var inst_34192 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34211_34364 = state_34196__$1;
(statearr_34211_34364[(2)] = inst_34192);

(statearr_34211_34364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (8))){
var inst_34181 = (state_34196[(8)]);
var inst_34187 = (state_34196[(2)]);
var state_34196__$1 = (function (){var statearr_34214 = state_34196;
(statearr_34214[(9)] = inst_34187);

return statearr_34214;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34196__$1,(9),results,inst_34181);
} else {
if((state_val_34197 === (9))){
var inst_34189 = (state_34196[(2)]);
var state_34196__$1 = (function (){var statearr_34216 = state_34196;
(statearr_34216[(10)] = inst_34189);

return statearr_34216;
})();
var statearr_34217_34366 = state_34196__$1;
(statearr_34217_34366[(2)] = null);

(statearr_34217_34366[(1)] = (2));


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
});})(c__33728__auto___34353,jobs,results,process,async))
;
return ((function (switch__33334__auto__,c__33728__auto___34353,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0 = (function (){
var statearr_34218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__);

(statearr_34218[(1)] = (1));

return statearr_34218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1 = (function (state_34196){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_34196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e34219){if((e34219 instanceof Object)){
var ex__33338__auto__ = e34219;
var statearr_34220_34369 = state_34196;
(statearr_34220_34369[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34374 = state_34196;
state_34196 = G__34374;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = function(state_34196){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1.call(this,state_34196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___34353,jobs,results,process,async))
})();
var state__33730__auto__ = (function (){var statearr_34222 = f__33729__auto__.call(null);
(statearr_34222[(6)] = c__33728__auto___34353);

return statearr_34222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___34353,jobs,results,process,async))
);


var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__,jobs,results,process,async){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__,jobs,results,process,async){
return (function (state_34268){
var state_val_34269 = (state_34268[(1)]);
if((state_val_34269 === (7))){
var inst_34264 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34271_34377 = state_34268__$1;
(statearr_34271_34377[(2)] = inst_34264);

(statearr_34271_34377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (20))){
var state_34268__$1 = state_34268;
var statearr_34272_34378 = state_34268__$1;
(statearr_34272_34378[(2)] = null);

(statearr_34272_34378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (1))){
var state_34268__$1 = state_34268;
var statearr_34275_34379 = state_34268__$1;
(statearr_34275_34379[(2)] = null);

(statearr_34275_34379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (4))){
var inst_34230 = (state_34268[(7)]);
var inst_34230__$1 = (state_34268[(2)]);
var inst_34231 = (inst_34230__$1 == null);
var state_34268__$1 = (function (){var statearr_34277 = state_34268;
(statearr_34277[(7)] = inst_34230__$1);

return statearr_34277;
})();
if(cljs.core.truth_(inst_34231)){
var statearr_34278_34381 = state_34268__$1;
(statearr_34278_34381[(1)] = (5));

} else {
var statearr_34279_34382 = state_34268__$1;
(statearr_34279_34382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (15))){
var inst_34243 = (state_34268[(8)]);
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34268__$1,(18),to,inst_34243);
} else {
if((state_val_34269 === (21))){
var inst_34259 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34281_34383 = state_34268__$1;
(statearr_34281_34383[(2)] = inst_34259);

(statearr_34281_34383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (13))){
var inst_34261 = (state_34268[(2)]);
var state_34268__$1 = (function (){var statearr_34282 = state_34268;
(statearr_34282[(9)] = inst_34261);

return statearr_34282;
})();
var statearr_34284_34384 = state_34268__$1;
(statearr_34284_34384[(2)] = null);

(statearr_34284_34384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (6))){
var inst_34230 = (state_34268[(7)]);
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34268__$1,(11),inst_34230);
} else {
if((state_val_34269 === (17))){
var inst_34254 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
if(cljs.core.truth_(inst_34254)){
var statearr_34287_34387 = state_34268__$1;
(statearr_34287_34387[(1)] = (19));

} else {
var statearr_34288_34388 = state_34268__$1;
(statearr_34288_34388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (3))){
var inst_34266 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34268__$1,inst_34266);
} else {
if((state_val_34269 === (12))){
var inst_34240 = (state_34268[(10)]);
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34268__$1,(14),inst_34240);
} else {
if((state_val_34269 === (2))){
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34268__$1,(4),results);
} else {
if((state_val_34269 === (19))){
var state_34268__$1 = state_34268;
var statearr_34291_34389 = state_34268__$1;
(statearr_34291_34389[(2)] = null);

(statearr_34291_34389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (11))){
var inst_34240 = (state_34268[(2)]);
var state_34268__$1 = (function (){var statearr_34292 = state_34268;
(statearr_34292[(10)] = inst_34240);

return statearr_34292;
})();
var statearr_34293_34390 = state_34268__$1;
(statearr_34293_34390[(2)] = null);

(statearr_34293_34390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (9))){
var state_34268__$1 = state_34268;
var statearr_34294_34391 = state_34268__$1;
(statearr_34294_34391[(2)] = null);

(statearr_34294_34391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (5))){
var state_34268__$1 = state_34268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34295_34394 = state_34268__$1;
(statearr_34295_34394[(1)] = (8));

} else {
var statearr_34296_34395 = state_34268__$1;
(statearr_34296_34395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (14))){
var inst_34243 = (state_34268[(8)]);
var inst_34247 = (state_34268[(11)]);
var inst_34243__$1 = (state_34268[(2)]);
var inst_34246 = (inst_34243__$1 == null);
var inst_34247__$1 = cljs.core.not.call(null,inst_34246);
var state_34268__$1 = (function (){var statearr_34297 = state_34268;
(statearr_34297[(8)] = inst_34243__$1);

(statearr_34297[(11)] = inst_34247__$1);

return statearr_34297;
})();
if(inst_34247__$1){
var statearr_34298_34399 = state_34268__$1;
(statearr_34298_34399[(1)] = (15));

} else {
var statearr_34300_34400 = state_34268__$1;
(statearr_34300_34400[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (16))){
var inst_34247 = (state_34268[(11)]);
var state_34268__$1 = state_34268;
var statearr_34302_34401 = state_34268__$1;
(statearr_34302_34401[(2)] = inst_34247);

(statearr_34302_34401[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (10))){
var inst_34237 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34304_34402 = state_34268__$1;
(statearr_34304_34402[(2)] = inst_34237);

(statearr_34304_34402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (18))){
var inst_34250 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34305_34403 = state_34268__$1;
(statearr_34305_34403[(2)] = inst_34250);

(statearr_34305_34403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (8))){
var inst_34234 = cljs.core.async.close_BANG_.call(null,to);
var state_34268__$1 = state_34268;
var statearr_34306_34404 = state_34268__$1;
(statearr_34306_34404[(2)] = inst_34234);

(statearr_34306_34404[(1)] = (10));


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
});})(c__33728__auto__,jobs,results,process,async))
;
return ((function (switch__33334__auto__,c__33728__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0 = (function (){
var statearr_34307 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__);

(statearr_34307[(1)] = (1));

return statearr_34307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1 = (function (state_34268){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_34268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e34308){if((e34308 instanceof Object)){
var ex__33338__auto__ = e34308;
var statearr_34309_34405 = state_34268;
(statearr_34309_34405[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34406 = state_34268;
state_34268 = G__34406;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = function(state_34268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1.call(this,state_34268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__,jobs,results,process,async))
})();
var state__33730__auto__ = (function (){var statearr_34310 = f__33729__auto__.call(null);
(statearr_34310[(6)] = c__33728__auto__);

return statearr_34310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__,jobs,results,process,async))
);

return c__33728__auto__;
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
var G__34408 = arguments.length;
switch (G__34408) {
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
var G__34416 = arguments.length;
switch (G__34416) {
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
var G__34421 = arguments.length;
switch (G__34421) {
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
var c__33728__auto___34483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___34483,tc,fc){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___34483,tc,fc){
return (function (state_34450){
var state_val_34451 = (state_34450[(1)]);
if((state_val_34451 === (7))){
var inst_34446 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
var statearr_34452_34487 = state_34450__$1;
(statearr_34452_34487[(2)] = inst_34446);

(statearr_34452_34487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (1))){
var state_34450__$1 = state_34450;
var statearr_34453_34488 = state_34450__$1;
(statearr_34453_34488[(2)] = null);

(statearr_34453_34488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (4))){
var inst_34427 = (state_34450[(7)]);
var inst_34427__$1 = (state_34450[(2)]);
var inst_34428 = (inst_34427__$1 == null);
var state_34450__$1 = (function (){var statearr_34454 = state_34450;
(statearr_34454[(7)] = inst_34427__$1);

return statearr_34454;
})();
if(cljs.core.truth_(inst_34428)){
var statearr_34455_34494 = state_34450__$1;
(statearr_34455_34494[(1)] = (5));

} else {
var statearr_34456_34496 = state_34450__$1;
(statearr_34456_34496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (13))){
var state_34450__$1 = state_34450;
var statearr_34457_34499 = state_34450__$1;
(statearr_34457_34499[(2)] = null);

(statearr_34457_34499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (6))){
var inst_34427 = (state_34450[(7)]);
var inst_34433 = p.call(null,inst_34427);
var state_34450__$1 = state_34450;
if(cljs.core.truth_(inst_34433)){
var statearr_34458_34501 = state_34450__$1;
(statearr_34458_34501[(1)] = (9));

} else {
var statearr_34459_34502 = state_34450__$1;
(statearr_34459_34502[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (3))){
var inst_34448 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34450__$1,inst_34448);
} else {
if((state_val_34451 === (12))){
var state_34450__$1 = state_34450;
var statearr_34461_34503 = state_34450__$1;
(statearr_34461_34503[(2)] = null);

(statearr_34461_34503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (2))){
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34450__$1,(4),ch);
} else {
if((state_val_34451 === (11))){
var inst_34427 = (state_34450[(7)]);
var inst_34437 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34450__$1,(8),inst_34437,inst_34427);
} else {
if((state_val_34451 === (9))){
var state_34450__$1 = state_34450;
var statearr_34462_34507 = state_34450__$1;
(statearr_34462_34507[(2)] = tc);

(statearr_34462_34507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (5))){
var inst_34430 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34431 = cljs.core.async.close_BANG_.call(null,fc);
var state_34450__$1 = (function (){var statearr_34464 = state_34450;
(statearr_34464[(8)] = inst_34430);

return statearr_34464;
})();
var statearr_34465_34508 = state_34450__$1;
(statearr_34465_34508[(2)] = inst_34431);

(statearr_34465_34508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (14))){
var inst_34444 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
var statearr_34466_34512 = state_34450__$1;
(statearr_34466_34512[(2)] = inst_34444);

(statearr_34466_34512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (10))){
var state_34450__$1 = state_34450;
var statearr_34467_34513 = state_34450__$1;
(statearr_34467_34513[(2)] = fc);

(statearr_34467_34513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (8))){
var inst_34439 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
if(cljs.core.truth_(inst_34439)){
var statearr_34470_34514 = state_34450__$1;
(statearr_34470_34514[(1)] = (12));

} else {
var statearr_34471_34515 = state_34450__$1;
(statearr_34471_34515[(1)] = (13));

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
});})(c__33728__auto___34483,tc,fc))
;
return ((function (switch__33334__auto__,c__33728__auto___34483,tc,fc){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_34472 = [null,null,null,null,null,null,null,null,null];
(statearr_34472[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_34472[(1)] = (1));

return statearr_34472;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_34450){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_34450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e34474){if((e34474 instanceof Object)){
var ex__33338__auto__ = e34474;
var statearr_34475_34516 = state_34450;
(statearr_34475_34516[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34517 = state_34450;
state_34450 = G__34517;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_34450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_34450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___34483,tc,fc))
})();
var state__33730__auto__ = (function (){var statearr_34476 = f__33729__auto__.call(null);
(statearr_34476[(6)] = c__33728__auto___34483);

return statearr_34476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___34483,tc,fc))
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
var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__){
return (function (state_34539){
var state_val_34540 = (state_34539[(1)]);
if((state_val_34540 === (7))){
var inst_34535 = (state_34539[(2)]);
var state_34539__$1 = state_34539;
var statearr_34541_34569 = state_34539__$1;
(statearr_34541_34569[(2)] = inst_34535);

(statearr_34541_34569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (1))){
var inst_34519 = init;
var state_34539__$1 = (function (){var statearr_34542 = state_34539;
(statearr_34542[(7)] = inst_34519);

return statearr_34542;
})();
var statearr_34543_34570 = state_34539__$1;
(statearr_34543_34570[(2)] = null);

(statearr_34543_34570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (4))){
var inst_34522 = (state_34539[(8)]);
var inst_34522__$1 = (state_34539[(2)]);
var inst_34523 = (inst_34522__$1 == null);
var state_34539__$1 = (function (){var statearr_34544 = state_34539;
(statearr_34544[(8)] = inst_34522__$1);

return statearr_34544;
})();
if(cljs.core.truth_(inst_34523)){
var statearr_34545_34572 = state_34539__$1;
(statearr_34545_34572[(1)] = (5));

} else {
var statearr_34546_34573 = state_34539__$1;
(statearr_34546_34573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (6))){
var inst_34526 = (state_34539[(9)]);
var inst_34522 = (state_34539[(8)]);
var inst_34519 = (state_34539[(7)]);
var inst_34526__$1 = f.call(null,inst_34519,inst_34522);
var inst_34527 = cljs.core.reduced_QMARK_.call(null,inst_34526__$1);
var state_34539__$1 = (function (){var statearr_34547 = state_34539;
(statearr_34547[(9)] = inst_34526__$1);

return statearr_34547;
})();
if(inst_34527){
var statearr_34548_34577 = state_34539__$1;
(statearr_34548_34577[(1)] = (8));

} else {
var statearr_34549_34578 = state_34539__$1;
(statearr_34549_34578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (3))){
var inst_34537 = (state_34539[(2)]);
var state_34539__$1 = state_34539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34539__$1,inst_34537);
} else {
if((state_val_34540 === (2))){
var state_34539__$1 = state_34539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34539__$1,(4),ch);
} else {
if((state_val_34540 === (9))){
var inst_34526 = (state_34539[(9)]);
var inst_34519 = inst_34526;
var state_34539__$1 = (function (){var statearr_34553 = state_34539;
(statearr_34553[(7)] = inst_34519);

return statearr_34553;
})();
var statearr_34554_34582 = state_34539__$1;
(statearr_34554_34582[(2)] = null);

(statearr_34554_34582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (5))){
var inst_34519 = (state_34539[(7)]);
var state_34539__$1 = state_34539;
var statearr_34555_34584 = state_34539__$1;
(statearr_34555_34584[(2)] = inst_34519);

(statearr_34555_34584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (10))){
var inst_34533 = (state_34539[(2)]);
var state_34539__$1 = state_34539;
var statearr_34557_34590 = state_34539__$1;
(statearr_34557_34590[(2)] = inst_34533);

(statearr_34557_34590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (8))){
var inst_34526 = (state_34539[(9)]);
var inst_34529 = cljs.core.deref.call(null,inst_34526);
var state_34539__$1 = state_34539;
var statearr_34563_34591 = state_34539__$1;
(statearr_34563_34591[(2)] = inst_34529);

(statearr_34563_34591[(1)] = (10));


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
});})(c__33728__auto__))
;
return ((function (switch__33334__auto__,c__33728__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33335__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33335__auto____0 = (function (){
var statearr_34564 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34564[(0)] = cljs$core$async$reduce_$_state_machine__33335__auto__);

(statearr_34564[(1)] = (1));

return statearr_34564;
});
var cljs$core$async$reduce_$_state_machine__33335__auto____1 = (function (state_34539){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_34539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e34565){if((e34565 instanceof Object)){
var ex__33338__auto__ = e34565;
var statearr_34566_34598 = state_34539;
(statearr_34566_34598[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34599 = state_34539;
state_34539 = G__34599;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33335__auto__ = function(state_34539){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33335__auto____1.call(this,state_34539);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33335__auto____0;
cljs$core$async$reduce_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33335__auto____1;
return cljs$core$async$reduce_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_34567 = f__33729__auto__.call(null);
(statearr_34567[(6)] = c__33728__auto__);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__))
);

return c__33728__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__,f__$1){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__,f__$1){
return (function (state_34608){
var state_val_34613 = (state_34608[(1)]);
if((state_val_34613 === (1))){
var inst_34603 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34608__$1 = state_34608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34608__$1,(2),inst_34603);
} else {
if((state_val_34613 === (2))){
var inst_34605 = (state_34608[(2)]);
var inst_34606 = f__$1.call(null,inst_34605);
var state_34608__$1 = state_34608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34608__$1,inst_34606);
} else {
return null;
}
}
});})(c__33728__auto__,f__$1))
;
return ((function (switch__33334__auto__,c__33728__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33335__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33335__auto____0 = (function (){
var statearr_34616 = [null,null,null,null,null,null,null];
(statearr_34616[(0)] = cljs$core$async$transduce_$_state_machine__33335__auto__);

(statearr_34616[(1)] = (1));

return statearr_34616;
});
var cljs$core$async$transduce_$_state_machine__33335__auto____1 = (function (state_34608){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_34608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e34617){if((e34617 instanceof Object)){
var ex__33338__auto__ = e34617;
var statearr_34618_34625 = state_34608;
(statearr_34618_34625[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34626 = state_34608;
state_34608 = G__34626;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33335__auto__ = function(state_34608){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33335__auto____1.call(this,state_34608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33335__auto____0;
cljs$core$async$transduce_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33335__auto____1;
return cljs$core$async$transduce_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__,f__$1))
})();
var state__33730__auto__ = (function (){var statearr_34621 = f__33729__auto__.call(null);
(statearr_34621[(6)] = c__33728__auto__);

return statearr_34621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__,f__$1))
);

return c__33728__auto__;
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
var G__34628 = arguments.length;
switch (G__34628) {
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
var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__){
return (function (state_34654){
var state_val_34655 = (state_34654[(1)]);
if((state_val_34655 === (7))){
var inst_34636 = (state_34654[(2)]);
var state_34654__$1 = state_34654;
var statearr_34656_34684 = state_34654__$1;
(statearr_34656_34684[(2)] = inst_34636);

(statearr_34656_34684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (1))){
var inst_34630 = cljs.core.seq.call(null,coll);
var inst_34631 = inst_34630;
var state_34654__$1 = (function (){var statearr_34657 = state_34654;
(statearr_34657[(7)] = inst_34631);

return statearr_34657;
})();
var statearr_34658_34685 = state_34654__$1;
(statearr_34658_34685[(2)] = null);

(statearr_34658_34685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (4))){
var inst_34631 = (state_34654[(7)]);
var inst_34634 = cljs.core.first.call(null,inst_34631);
var state_34654__$1 = state_34654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34654__$1,(7),ch,inst_34634);
} else {
if((state_val_34655 === (13))){
var inst_34648 = (state_34654[(2)]);
var state_34654__$1 = state_34654;
var statearr_34659_34687 = state_34654__$1;
(statearr_34659_34687[(2)] = inst_34648);

(statearr_34659_34687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (6))){
var inst_34639 = (state_34654[(2)]);
var state_34654__$1 = state_34654;
if(cljs.core.truth_(inst_34639)){
var statearr_34660_34688 = state_34654__$1;
(statearr_34660_34688[(1)] = (8));

} else {
var statearr_34661_34689 = state_34654__$1;
(statearr_34661_34689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (3))){
var inst_34652 = (state_34654[(2)]);
var state_34654__$1 = state_34654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34654__$1,inst_34652);
} else {
if((state_val_34655 === (12))){
var state_34654__$1 = state_34654;
var statearr_34662_34691 = state_34654__$1;
(statearr_34662_34691[(2)] = null);

(statearr_34662_34691[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (2))){
var inst_34631 = (state_34654[(7)]);
var state_34654__$1 = state_34654;
if(cljs.core.truth_(inst_34631)){
var statearr_34663_34692 = state_34654__$1;
(statearr_34663_34692[(1)] = (4));

} else {
var statearr_34664_34693 = state_34654__$1;
(statearr_34664_34693[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (11))){
var inst_34645 = cljs.core.async.close_BANG_.call(null,ch);
var state_34654__$1 = state_34654;
var statearr_34665_34694 = state_34654__$1;
(statearr_34665_34694[(2)] = inst_34645);

(statearr_34665_34694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (9))){
var state_34654__$1 = state_34654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34666_34695 = state_34654__$1;
(statearr_34666_34695[(1)] = (11));

} else {
var statearr_34667_34696 = state_34654__$1;
(statearr_34667_34696[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (5))){
var inst_34631 = (state_34654[(7)]);
var state_34654__$1 = state_34654;
var statearr_34669_34697 = state_34654__$1;
(statearr_34669_34697[(2)] = inst_34631);

(statearr_34669_34697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (10))){
var inst_34650 = (state_34654[(2)]);
var state_34654__$1 = state_34654;
var statearr_34670_34699 = state_34654__$1;
(statearr_34670_34699[(2)] = inst_34650);

(statearr_34670_34699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (8))){
var inst_34631 = (state_34654[(7)]);
var inst_34641 = cljs.core.next.call(null,inst_34631);
var inst_34631__$1 = inst_34641;
var state_34654__$1 = (function (){var statearr_34671 = state_34654;
(statearr_34671[(7)] = inst_34631__$1);

return statearr_34671;
})();
var statearr_34672_34700 = state_34654__$1;
(statearr_34672_34700[(2)] = null);

(statearr_34672_34700[(1)] = (2));


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
});})(c__33728__auto__))
;
return ((function (switch__33334__auto__,c__33728__auto__){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_34675 = [null,null,null,null,null,null,null,null];
(statearr_34675[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_34675[(1)] = (1));

return statearr_34675;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_34654){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_34654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e34676){if((e34676 instanceof Object)){
var ex__33338__auto__ = e34676;
var statearr_34678_34703 = state_34654;
(statearr_34678_34703[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34706 = state_34654;
state_34654 = G__34706;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_34654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_34654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_34680 = f__33729__auto__.call(null);
(statearr_34680[(6)] = c__33728__auto__);

return statearr_34680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__))
);

return c__33728__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async34792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34792 = (function (ch,cs,meta34793){
this.ch = ch;
this.cs = cs;
this.meta34793 = meta34793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34794,meta34793__$1){
var self__ = this;
var _34794__$1 = this;
return (new cljs.core.async.t_cljs$core$async34792(self__.ch,self__.cs,meta34793__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34794){
var self__ = this;
var _34794__$1 = this;
return self__.meta34793;
});})(cs))
;

cljs.core.async.t_cljs$core$async34792.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34792.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34792.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34792.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34792.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34792.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34793","meta34793",345927706,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34792";

cljs.core.async.t_cljs$core$async34792.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async34792");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34792 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34792(ch__$1,cs__$1,meta34793){
return (new cljs.core.async.t_cljs$core$async34792(ch__$1,cs__$1,meta34793));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34792(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33728__auto___35230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___35230,cs,m,dchan,dctr,done){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___35230,cs,m,dchan,dctr,done){
return (function (state_34955){
var state_val_34956 = (state_34955[(1)]);
if((state_val_34956 === (7))){
var inst_34947 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_34968_35234 = state_34955__$1;
(statearr_34968_35234[(2)] = inst_34947);

(statearr_34968_35234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (20))){
var inst_34836 = (state_34955[(7)]);
var inst_34848 = cljs.core.first.call(null,inst_34836);
var inst_34849 = cljs.core.nth.call(null,inst_34848,(0),null);
var inst_34850 = cljs.core.nth.call(null,inst_34848,(1),null);
var state_34955__$1 = (function (){var statearr_34970 = state_34955;
(statearr_34970[(8)] = inst_34849);

return statearr_34970;
})();
if(cljs.core.truth_(inst_34850)){
var statearr_34972_35236 = state_34955__$1;
(statearr_34972_35236[(1)] = (22));

} else {
var statearr_34974_35237 = state_34955__$1;
(statearr_34974_35237[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (27))){
var inst_34802 = (state_34955[(9)]);
var inst_34878 = (state_34955[(10)]);
var inst_34880 = (state_34955[(11)]);
var inst_34889 = (state_34955[(12)]);
var inst_34889__$1 = cljs.core._nth.call(null,inst_34878,inst_34880);
var inst_34890 = cljs.core.async.put_BANG_.call(null,inst_34889__$1,inst_34802,done);
var state_34955__$1 = (function (){var statearr_34988 = state_34955;
(statearr_34988[(12)] = inst_34889__$1);

return statearr_34988;
})();
if(cljs.core.truth_(inst_34890)){
var statearr_34989_35240 = state_34955__$1;
(statearr_34989_35240[(1)] = (30));

} else {
var statearr_34990_35241 = state_34955__$1;
(statearr_34990_35241[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (1))){
var state_34955__$1 = state_34955;
var statearr_34991_35242 = state_34955__$1;
(statearr_34991_35242[(2)] = null);

(statearr_34991_35242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (24))){
var inst_34836 = (state_34955[(7)]);
var inst_34855 = (state_34955[(2)]);
var inst_34856 = cljs.core.next.call(null,inst_34836);
var inst_34814 = inst_34856;
var inst_34815 = null;
var inst_34816 = (0);
var inst_34817 = (0);
var state_34955__$1 = (function (){var statearr_34992 = state_34955;
(statearr_34992[(13)] = inst_34855);

(statearr_34992[(14)] = inst_34816);

(statearr_34992[(15)] = inst_34814);

(statearr_34992[(16)] = inst_34817);

(statearr_34992[(17)] = inst_34815);

return statearr_34992;
})();
var statearr_34993_35243 = state_34955__$1;
(statearr_34993_35243[(2)] = null);

(statearr_34993_35243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (39))){
var state_34955__$1 = state_34955;
var statearr_34997_35244 = state_34955__$1;
(statearr_34997_35244[(2)] = null);

(statearr_34997_35244[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (4))){
var inst_34802 = (state_34955[(9)]);
var inst_34802__$1 = (state_34955[(2)]);
var inst_34803 = (inst_34802__$1 == null);
var state_34955__$1 = (function (){var statearr_35007 = state_34955;
(statearr_35007[(9)] = inst_34802__$1);

return statearr_35007;
})();
if(cljs.core.truth_(inst_34803)){
var statearr_35008_35247 = state_34955__$1;
(statearr_35008_35247[(1)] = (5));

} else {
var statearr_35009_35248 = state_34955__$1;
(statearr_35009_35248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (15))){
var inst_34816 = (state_34955[(14)]);
var inst_34814 = (state_34955[(15)]);
var inst_34817 = (state_34955[(16)]);
var inst_34815 = (state_34955[(17)]);
var inst_34832 = (state_34955[(2)]);
var inst_34833 = (inst_34817 + (1));
var tmp34994 = inst_34816;
var tmp34995 = inst_34814;
var tmp34996 = inst_34815;
var inst_34814__$1 = tmp34995;
var inst_34815__$1 = tmp34996;
var inst_34816__$1 = tmp34994;
var inst_34817__$1 = inst_34833;
var state_34955__$1 = (function (){var statearr_35010 = state_34955;
(statearr_35010[(14)] = inst_34816__$1);

(statearr_35010[(15)] = inst_34814__$1);

(statearr_35010[(16)] = inst_34817__$1);

(statearr_35010[(18)] = inst_34832);

(statearr_35010[(17)] = inst_34815__$1);

return statearr_35010;
})();
var statearr_35015_35250 = state_34955__$1;
(statearr_35015_35250[(2)] = null);

(statearr_35015_35250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (21))){
var inst_34859 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_35024_35251 = state_34955__$1;
(statearr_35024_35251[(2)] = inst_34859);

(statearr_35024_35251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (31))){
var inst_34889 = (state_34955[(12)]);
var inst_34893 = done.call(null,null);
var inst_34894 = cljs.core.async.untap_STAR_.call(null,m,inst_34889);
var state_34955__$1 = (function (){var statearr_35027 = state_34955;
(statearr_35027[(19)] = inst_34893);

return statearr_35027;
})();
var statearr_35029_35254 = state_34955__$1;
(statearr_35029_35254[(2)] = inst_34894);

(statearr_35029_35254[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (32))){
var inst_34879 = (state_34955[(20)]);
var inst_34877 = (state_34955[(21)]);
var inst_34878 = (state_34955[(10)]);
var inst_34880 = (state_34955[(11)]);
var inst_34896 = (state_34955[(2)]);
var inst_34897 = (inst_34880 + (1));
var tmp35020 = inst_34879;
var tmp35021 = inst_34877;
var tmp35022 = inst_34878;
var inst_34877__$1 = tmp35021;
var inst_34878__$1 = tmp35022;
var inst_34879__$1 = tmp35020;
var inst_34880__$1 = inst_34897;
var state_34955__$1 = (function (){var statearr_35034 = state_34955;
(statearr_35034[(20)] = inst_34879__$1);

(statearr_35034[(22)] = inst_34896);

(statearr_35034[(21)] = inst_34877__$1);

(statearr_35034[(10)] = inst_34878__$1);

(statearr_35034[(11)] = inst_34880__$1);

return statearr_35034;
})();
var statearr_35038_35257 = state_34955__$1;
(statearr_35038_35257[(2)] = null);

(statearr_35038_35257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (40))){
var inst_34916 = (state_34955[(23)]);
var inst_34920 = done.call(null,null);
var inst_34921 = cljs.core.async.untap_STAR_.call(null,m,inst_34916);
var state_34955__$1 = (function (){var statearr_35039 = state_34955;
(statearr_35039[(24)] = inst_34920);

return statearr_35039;
})();
var statearr_35040_35261 = state_34955__$1;
(statearr_35040_35261[(2)] = inst_34921);

(statearr_35040_35261[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (33))){
var inst_34900 = (state_34955[(25)]);
var inst_34904 = cljs.core.chunked_seq_QMARK_.call(null,inst_34900);
var state_34955__$1 = state_34955;
if(inst_34904){
var statearr_35048_35262 = state_34955__$1;
(statearr_35048_35262[(1)] = (36));

} else {
var statearr_35049_35264 = state_34955__$1;
(statearr_35049_35264[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (13))){
var inst_34826 = (state_34955[(26)]);
var inst_34829 = cljs.core.async.close_BANG_.call(null,inst_34826);
var state_34955__$1 = state_34955;
var statearr_35052_35265 = state_34955__$1;
(statearr_35052_35265[(2)] = inst_34829);

(statearr_35052_35265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (22))){
var inst_34849 = (state_34955[(8)]);
var inst_34852 = cljs.core.async.close_BANG_.call(null,inst_34849);
var state_34955__$1 = state_34955;
var statearr_35062_35266 = state_34955__$1;
(statearr_35062_35266[(2)] = inst_34852);

(statearr_35062_35266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (36))){
var inst_34900 = (state_34955[(25)]);
var inst_34906 = cljs.core.chunk_first.call(null,inst_34900);
var inst_34908 = cljs.core.chunk_rest.call(null,inst_34900);
var inst_34909 = cljs.core.count.call(null,inst_34906);
var inst_34877 = inst_34908;
var inst_34878 = inst_34906;
var inst_34879 = inst_34909;
var inst_34880 = (0);
var state_34955__$1 = (function (){var statearr_35067 = state_34955;
(statearr_35067[(20)] = inst_34879);

(statearr_35067[(21)] = inst_34877);

(statearr_35067[(10)] = inst_34878);

(statearr_35067[(11)] = inst_34880);

return statearr_35067;
})();
var statearr_35069_35267 = state_34955__$1;
(statearr_35069_35267[(2)] = null);

(statearr_35069_35267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (41))){
var inst_34900 = (state_34955[(25)]);
var inst_34923 = (state_34955[(2)]);
var inst_34927 = cljs.core.next.call(null,inst_34900);
var inst_34877 = inst_34927;
var inst_34878 = null;
var inst_34879 = (0);
var inst_34880 = (0);
var state_34955__$1 = (function (){var statearr_35074 = state_34955;
(statearr_35074[(20)] = inst_34879);

(statearr_35074[(27)] = inst_34923);

(statearr_35074[(21)] = inst_34877);

(statearr_35074[(10)] = inst_34878);

(statearr_35074[(11)] = inst_34880);

return statearr_35074;
})();
var statearr_35075_35269 = state_34955__$1;
(statearr_35075_35269[(2)] = null);

(statearr_35075_35269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (43))){
var state_34955__$1 = state_34955;
var statearr_35079_35272 = state_34955__$1;
(statearr_35079_35272[(2)] = null);

(statearr_35079_35272[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (29))){
var inst_34935 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_35080_35277 = state_34955__$1;
(statearr_35080_35277[(2)] = inst_34935);

(statearr_35080_35277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (44))){
var inst_34944 = (state_34955[(2)]);
var state_34955__$1 = (function (){var statearr_35081 = state_34955;
(statearr_35081[(28)] = inst_34944);

return statearr_35081;
})();
var statearr_35086_35278 = state_34955__$1;
(statearr_35086_35278[(2)] = null);

(statearr_35086_35278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (6))){
var inst_34869 = (state_34955[(29)]);
var inst_34868 = cljs.core.deref.call(null,cs);
var inst_34869__$1 = cljs.core.keys.call(null,inst_34868);
var inst_34870 = cljs.core.count.call(null,inst_34869__$1);
var inst_34871 = cljs.core.reset_BANG_.call(null,dctr,inst_34870);
var inst_34876 = cljs.core.seq.call(null,inst_34869__$1);
var inst_34877 = inst_34876;
var inst_34878 = null;
var inst_34879 = (0);
var inst_34880 = (0);
var state_34955__$1 = (function (){var statearr_35091 = state_34955;
(statearr_35091[(29)] = inst_34869__$1);

(statearr_35091[(20)] = inst_34879);

(statearr_35091[(30)] = inst_34871);

(statearr_35091[(21)] = inst_34877);

(statearr_35091[(10)] = inst_34878);

(statearr_35091[(11)] = inst_34880);

return statearr_35091;
})();
var statearr_35093_35285 = state_34955__$1;
(statearr_35093_35285[(2)] = null);

(statearr_35093_35285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (28))){
var inst_34900 = (state_34955[(25)]);
var inst_34877 = (state_34955[(21)]);
var inst_34900__$1 = cljs.core.seq.call(null,inst_34877);
var state_34955__$1 = (function (){var statearr_35096 = state_34955;
(statearr_35096[(25)] = inst_34900__$1);

return statearr_35096;
})();
if(inst_34900__$1){
var statearr_35101_35286 = state_34955__$1;
(statearr_35101_35286[(1)] = (33));

} else {
var statearr_35102_35287 = state_34955__$1;
(statearr_35102_35287[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (25))){
var inst_34879 = (state_34955[(20)]);
var inst_34880 = (state_34955[(11)]);
var inst_34882 = (inst_34880 < inst_34879);
var inst_34883 = inst_34882;
var state_34955__$1 = state_34955;
if(cljs.core.truth_(inst_34883)){
var statearr_35106_35291 = state_34955__$1;
(statearr_35106_35291[(1)] = (27));

} else {
var statearr_35107_35292 = state_34955__$1;
(statearr_35107_35292[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (34))){
var state_34955__$1 = state_34955;
var statearr_35112_35299 = state_34955__$1;
(statearr_35112_35299[(2)] = null);

(statearr_35112_35299[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (17))){
var state_34955__$1 = state_34955;
var statearr_35117_35307 = state_34955__$1;
(statearr_35117_35307[(2)] = null);

(statearr_35117_35307[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (3))){
var inst_34949 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34955__$1,inst_34949);
} else {
if((state_val_34956 === (12))){
var inst_34864 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_35118_35314 = state_34955__$1;
(statearr_35118_35314[(2)] = inst_34864);

(statearr_35118_35314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (2))){
var state_34955__$1 = state_34955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34955__$1,(4),ch);
} else {
if((state_val_34956 === (23))){
var state_34955__$1 = state_34955;
var statearr_35125_35322 = state_34955__$1;
(statearr_35125_35322[(2)] = null);

(statearr_35125_35322[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (35))){
var inst_34933 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_35129_35326 = state_34955__$1;
(statearr_35129_35326[(2)] = inst_34933);

(statearr_35129_35326[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (19))){
var inst_34836 = (state_34955[(7)]);
var inst_34840 = cljs.core.chunk_first.call(null,inst_34836);
var inst_34841 = cljs.core.chunk_rest.call(null,inst_34836);
var inst_34842 = cljs.core.count.call(null,inst_34840);
var inst_34814 = inst_34841;
var inst_34815 = inst_34840;
var inst_34816 = inst_34842;
var inst_34817 = (0);
var state_34955__$1 = (function (){var statearr_35135 = state_34955;
(statearr_35135[(14)] = inst_34816);

(statearr_35135[(15)] = inst_34814);

(statearr_35135[(16)] = inst_34817);

(statearr_35135[(17)] = inst_34815);

return statearr_35135;
})();
var statearr_35140_35331 = state_34955__$1;
(statearr_35140_35331[(2)] = null);

(statearr_35140_35331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (11))){
var inst_34836 = (state_34955[(7)]);
var inst_34814 = (state_34955[(15)]);
var inst_34836__$1 = cljs.core.seq.call(null,inst_34814);
var state_34955__$1 = (function (){var statearr_35148 = state_34955;
(statearr_35148[(7)] = inst_34836__$1);

return statearr_35148;
})();
if(inst_34836__$1){
var statearr_35151_35332 = state_34955__$1;
(statearr_35151_35332[(1)] = (16));

} else {
var statearr_35152_35333 = state_34955__$1;
(statearr_35152_35333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (9))){
var inst_34866 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_35159_35334 = state_34955__$1;
(statearr_35159_35334[(2)] = inst_34866);

(statearr_35159_35334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (5))){
var inst_34810 = cljs.core.deref.call(null,cs);
var inst_34813 = cljs.core.seq.call(null,inst_34810);
var inst_34814 = inst_34813;
var inst_34815 = null;
var inst_34816 = (0);
var inst_34817 = (0);
var state_34955__$1 = (function (){var statearr_35165 = state_34955;
(statearr_35165[(14)] = inst_34816);

(statearr_35165[(15)] = inst_34814);

(statearr_35165[(16)] = inst_34817);

(statearr_35165[(17)] = inst_34815);

return statearr_35165;
})();
var statearr_35170_35335 = state_34955__$1;
(statearr_35170_35335[(2)] = null);

(statearr_35170_35335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (14))){
var state_34955__$1 = state_34955;
var statearr_35177_35338 = state_34955__$1;
(statearr_35177_35338[(2)] = null);

(statearr_35177_35338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (45))){
var inst_34941 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_35178_35339 = state_34955__$1;
(statearr_35178_35339[(2)] = inst_34941);

(statearr_35178_35339[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (26))){
var inst_34869 = (state_34955[(29)]);
var inst_34937 = (state_34955[(2)]);
var inst_34938 = cljs.core.seq.call(null,inst_34869);
var state_34955__$1 = (function (){var statearr_35179 = state_34955;
(statearr_35179[(31)] = inst_34937);

return statearr_35179;
})();
if(inst_34938){
var statearr_35184_35340 = state_34955__$1;
(statearr_35184_35340[(1)] = (42));

} else {
var statearr_35185_35341 = state_34955__$1;
(statearr_35185_35341[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (16))){
var inst_34836 = (state_34955[(7)]);
var inst_34838 = cljs.core.chunked_seq_QMARK_.call(null,inst_34836);
var state_34955__$1 = state_34955;
if(inst_34838){
var statearr_35189_35343 = state_34955__$1;
(statearr_35189_35343[(1)] = (19));

} else {
var statearr_35194_35344 = state_34955__$1;
(statearr_35194_35344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (38))){
var inst_34930 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_35201_35346 = state_34955__$1;
(statearr_35201_35346[(2)] = inst_34930);

(statearr_35201_35346[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (30))){
var state_34955__$1 = state_34955;
var statearr_35206_35347 = state_34955__$1;
(statearr_35206_35347[(2)] = null);

(statearr_35206_35347[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (10))){
var inst_34817 = (state_34955[(16)]);
var inst_34815 = (state_34955[(17)]);
var inst_34825 = cljs.core._nth.call(null,inst_34815,inst_34817);
var inst_34826 = cljs.core.nth.call(null,inst_34825,(0),null);
var inst_34827 = cljs.core.nth.call(null,inst_34825,(1),null);
var state_34955__$1 = (function (){var statearr_35207 = state_34955;
(statearr_35207[(26)] = inst_34826);

return statearr_35207;
})();
if(cljs.core.truth_(inst_34827)){
var statearr_35208_35348 = state_34955__$1;
(statearr_35208_35348[(1)] = (13));

} else {
var statearr_35209_35349 = state_34955__$1;
(statearr_35209_35349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (18))){
var inst_34862 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_35210_35350 = state_34955__$1;
(statearr_35210_35350[(2)] = inst_34862);

(statearr_35210_35350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (42))){
var state_34955__$1 = state_34955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34955__$1,(45),dchan);
} else {
if((state_val_34956 === (37))){
var inst_34900 = (state_34955[(25)]);
var inst_34802 = (state_34955[(9)]);
var inst_34916 = (state_34955[(23)]);
var inst_34916__$1 = cljs.core.first.call(null,inst_34900);
var inst_34917 = cljs.core.async.put_BANG_.call(null,inst_34916__$1,inst_34802,done);
var state_34955__$1 = (function (){var statearr_35212 = state_34955;
(statearr_35212[(23)] = inst_34916__$1);

return statearr_35212;
})();
if(cljs.core.truth_(inst_34917)){
var statearr_35213_35351 = state_34955__$1;
(statearr_35213_35351[(1)] = (39));

} else {
var statearr_35215_35352 = state_34955__$1;
(statearr_35215_35352[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (8))){
var inst_34816 = (state_34955[(14)]);
var inst_34817 = (state_34955[(16)]);
var inst_34819 = (inst_34817 < inst_34816);
var inst_34820 = inst_34819;
var state_34955__$1 = state_34955;
if(cljs.core.truth_(inst_34820)){
var statearr_35216_35353 = state_34955__$1;
(statearr_35216_35353[(1)] = (10));

} else {
var statearr_35217_35354 = state_34955__$1;
(statearr_35217_35354[(1)] = (11));

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
});})(c__33728__auto___35230,cs,m,dchan,dctr,done))
;
return ((function (switch__33334__auto__,c__33728__auto___35230,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33335__auto__ = null;
var cljs$core$async$mult_$_state_machine__33335__auto____0 = (function (){
var statearr_35218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35218[(0)] = cljs$core$async$mult_$_state_machine__33335__auto__);

(statearr_35218[(1)] = (1));

return statearr_35218;
});
var cljs$core$async$mult_$_state_machine__33335__auto____1 = (function (state_34955){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_34955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e35220){if((e35220 instanceof Object)){
var ex__33338__auto__ = e35220;
var statearr_35221_35369 = state_34955;
(statearr_35221_35369[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35370 = state_34955;
state_34955 = G__35370;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33335__auto__ = function(state_34955){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33335__auto____1.call(this,state_34955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33335__auto____0;
cljs$core$async$mult_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33335__auto____1;
return cljs$core$async$mult_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___35230,cs,m,dchan,dctr,done))
})();
var state__33730__auto__ = (function (){var statearr_35224 = f__33729__auto__.call(null);
(statearr_35224[(6)] = c__33728__auto___35230);

return statearr_35224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___35230,cs,m,dchan,dctr,done))
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
var G__35372 = arguments.length;
switch (G__35372) {
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
var len__31349__auto___35407 = arguments.length;
var i__31350__auto___35409 = (0);
while(true){
if((i__31350__auto___35409 < len__31349__auto___35407)){
args__31356__auto__.push((arguments[i__31350__auto___35409]));

var G__35410 = (i__31350__auto___35409 + (1));
i__31350__auto___35409 = G__35410;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((3) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35400){
var map__35401 = p__35400;
var map__35401__$1 = ((((!((map__35401 == null)))?((((map__35401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35401):map__35401);
var opts = map__35401__$1;
var statearr_35404_35411 = state;
(statearr_35404_35411[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__35401,map__35401__$1,opts){
return (function (val){
var statearr_35405_35412 = state;
(statearr_35405_35412[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35401,map__35401__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_35406_35413 = state;
(statearr_35406_35413[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35394){
var G__35395 = cljs.core.first.call(null,seq35394);
var seq35394__$1 = cljs.core.next.call(null,seq35394);
var G__35396 = cljs.core.first.call(null,seq35394__$1);
var seq35394__$2 = cljs.core.next.call(null,seq35394__$1);
var G__35397 = cljs.core.first.call(null,seq35394__$2);
var seq35394__$3 = cljs.core.next.call(null,seq35394__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35395,G__35396,G__35397,seq35394__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35421 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35422){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35422 = meta35422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35423,meta35422__$1){
var self__ = this;
var _35423__$1 = this;
return (new cljs.core.async.t_cljs$core$async35421(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35422__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35423){
var self__ = this;
var _35423__$1 = this;
return self__.meta35422;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35421.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35421.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35421.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35421.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35421.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35421.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35421.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35421.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35421.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35422","meta35422",344275705,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35421";

cljs.core.async.t_cljs$core$async35421.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35421");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35421 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35421(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35422){
return (new cljs.core.async.t_cljs$core$async35421(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35422));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35421(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33728__auto___35621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___35621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___35621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35537){
var state_val_35538 = (state_35537[(1)]);
if((state_val_35538 === (7))){
var inst_35447 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35539_35622 = state_35537__$1;
(statearr_35539_35622[(2)] = inst_35447);

(statearr_35539_35622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (20))){
var inst_35459 = (state_35537[(7)]);
var state_35537__$1 = state_35537;
var statearr_35540_35623 = state_35537__$1;
(statearr_35540_35623[(2)] = inst_35459);

(statearr_35540_35623[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (27))){
var state_35537__$1 = state_35537;
var statearr_35542_35624 = state_35537__$1;
(statearr_35542_35624[(2)] = null);

(statearr_35542_35624[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (1))){
var inst_35434 = (state_35537[(8)]);
var inst_35434__$1 = calc_state.call(null);
var inst_35436 = (inst_35434__$1 == null);
var inst_35437 = cljs.core.not.call(null,inst_35436);
var state_35537__$1 = (function (){var statearr_35543 = state_35537;
(statearr_35543[(8)] = inst_35434__$1);

return statearr_35543;
})();
if(inst_35437){
var statearr_35544_35625 = state_35537__$1;
(statearr_35544_35625[(1)] = (2));

} else {
var statearr_35545_35626 = state_35537__$1;
(statearr_35545_35626[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (24))){
var inst_35506 = (state_35537[(9)]);
var inst_35492 = (state_35537[(10)]);
var inst_35483 = (state_35537[(11)]);
var inst_35506__$1 = inst_35483.call(null,inst_35492);
var state_35537__$1 = (function (){var statearr_35546 = state_35537;
(statearr_35546[(9)] = inst_35506__$1);

return statearr_35546;
})();
if(cljs.core.truth_(inst_35506__$1)){
var statearr_35547_35627 = state_35537__$1;
(statearr_35547_35627[(1)] = (29));

} else {
var statearr_35548_35628 = state_35537__$1;
(statearr_35548_35628[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (4))){
var inst_35450 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
if(cljs.core.truth_(inst_35450)){
var statearr_35549_35629 = state_35537__$1;
(statearr_35549_35629[(1)] = (8));

} else {
var statearr_35550_35630 = state_35537__$1;
(statearr_35550_35630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (15))){
var inst_35477 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
if(cljs.core.truth_(inst_35477)){
var statearr_35551_35631 = state_35537__$1;
(statearr_35551_35631[(1)] = (19));

} else {
var statearr_35552_35632 = state_35537__$1;
(statearr_35552_35632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (21))){
var inst_35482 = (state_35537[(12)]);
var inst_35482__$1 = (state_35537[(2)]);
var inst_35483 = cljs.core.get.call(null,inst_35482__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35484 = cljs.core.get.call(null,inst_35482__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35485 = cljs.core.get.call(null,inst_35482__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35537__$1 = (function (){var statearr_35553 = state_35537;
(statearr_35553[(13)] = inst_35484);

(statearr_35553[(12)] = inst_35482__$1);

(statearr_35553[(11)] = inst_35483);

return statearr_35553;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35537__$1,(22),inst_35485);
} else {
if((state_val_35538 === (31))){
var inst_35514 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
if(cljs.core.truth_(inst_35514)){
var statearr_35554_35635 = state_35537__$1;
(statearr_35554_35635[(1)] = (32));

} else {
var statearr_35555_35636 = state_35537__$1;
(statearr_35555_35636[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (32))){
var inst_35491 = (state_35537[(14)]);
var state_35537__$1 = state_35537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35537__$1,(35),out,inst_35491);
} else {
if((state_val_35538 === (33))){
var inst_35482 = (state_35537[(12)]);
var inst_35459 = inst_35482;
var state_35537__$1 = (function (){var statearr_35556 = state_35537;
(statearr_35556[(7)] = inst_35459);

return statearr_35556;
})();
var statearr_35557_35640 = state_35537__$1;
(statearr_35557_35640[(2)] = null);

(statearr_35557_35640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (13))){
var inst_35459 = (state_35537[(7)]);
var inst_35466 = inst_35459.cljs$lang$protocol_mask$partition0$;
var inst_35467 = (inst_35466 & (64));
var inst_35468 = inst_35459.cljs$core$ISeq$;
var inst_35469 = (cljs.core.PROTOCOL_SENTINEL === inst_35468);
var inst_35470 = (inst_35467) || (inst_35469);
var state_35537__$1 = state_35537;
if(cljs.core.truth_(inst_35470)){
var statearr_35558_35641 = state_35537__$1;
(statearr_35558_35641[(1)] = (16));

} else {
var statearr_35559_35642 = state_35537__$1;
(statearr_35559_35642[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (22))){
var inst_35491 = (state_35537[(14)]);
var inst_35492 = (state_35537[(10)]);
var inst_35490 = (state_35537[(2)]);
var inst_35491__$1 = cljs.core.nth.call(null,inst_35490,(0),null);
var inst_35492__$1 = cljs.core.nth.call(null,inst_35490,(1),null);
var inst_35493 = (inst_35491__$1 == null);
var inst_35494 = cljs.core._EQ_.call(null,inst_35492__$1,change);
var inst_35495 = (inst_35493) || (inst_35494);
var state_35537__$1 = (function (){var statearr_35562 = state_35537;
(statearr_35562[(14)] = inst_35491__$1);

(statearr_35562[(10)] = inst_35492__$1);

return statearr_35562;
})();
if(cljs.core.truth_(inst_35495)){
var statearr_35568_35646 = state_35537__$1;
(statearr_35568_35646[(1)] = (23));

} else {
var statearr_35569_35647 = state_35537__$1;
(statearr_35569_35647[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (36))){
var inst_35482 = (state_35537[(12)]);
var inst_35459 = inst_35482;
var state_35537__$1 = (function (){var statearr_35571 = state_35537;
(statearr_35571[(7)] = inst_35459);

return statearr_35571;
})();
var statearr_35572_35648 = state_35537__$1;
(statearr_35572_35648[(2)] = null);

(statearr_35572_35648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (29))){
var inst_35506 = (state_35537[(9)]);
var state_35537__$1 = state_35537;
var statearr_35573_35649 = state_35537__$1;
(statearr_35573_35649[(2)] = inst_35506);

(statearr_35573_35649[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (6))){
var state_35537__$1 = state_35537;
var statearr_35574_35650 = state_35537__$1;
(statearr_35574_35650[(2)] = false);

(statearr_35574_35650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (28))){
var inst_35502 = (state_35537[(2)]);
var inst_35503 = calc_state.call(null);
var inst_35459 = inst_35503;
var state_35537__$1 = (function (){var statearr_35576 = state_35537;
(statearr_35576[(15)] = inst_35502);

(statearr_35576[(7)] = inst_35459);

return statearr_35576;
})();
var statearr_35578_35651 = state_35537__$1;
(statearr_35578_35651[(2)] = null);

(statearr_35578_35651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (25))){
var inst_35532 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35579_35652 = state_35537__$1;
(statearr_35579_35652[(2)] = inst_35532);

(statearr_35579_35652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (34))){
var inst_35530 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35580_35657 = state_35537__$1;
(statearr_35580_35657[(2)] = inst_35530);

(statearr_35580_35657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (17))){
var state_35537__$1 = state_35537;
var statearr_35581_35659 = state_35537__$1;
(statearr_35581_35659[(2)] = false);

(statearr_35581_35659[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (3))){
var state_35537__$1 = state_35537;
var statearr_35582_35660 = state_35537__$1;
(statearr_35582_35660[(2)] = false);

(statearr_35582_35660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (12))){
var inst_35534 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35537__$1,inst_35534);
} else {
if((state_val_35538 === (2))){
var inst_35434 = (state_35537[(8)]);
var inst_35439 = inst_35434.cljs$lang$protocol_mask$partition0$;
var inst_35440 = (inst_35439 & (64));
var inst_35441 = inst_35434.cljs$core$ISeq$;
var inst_35442 = (cljs.core.PROTOCOL_SENTINEL === inst_35441);
var inst_35443 = (inst_35440) || (inst_35442);
var state_35537__$1 = state_35537;
if(cljs.core.truth_(inst_35443)){
var statearr_35583_35663 = state_35537__$1;
(statearr_35583_35663[(1)] = (5));

} else {
var statearr_35584_35664 = state_35537__$1;
(statearr_35584_35664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (23))){
var inst_35491 = (state_35537[(14)]);
var inst_35497 = (inst_35491 == null);
var state_35537__$1 = state_35537;
if(cljs.core.truth_(inst_35497)){
var statearr_35588_35665 = state_35537__$1;
(statearr_35588_35665[(1)] = (26));

} else {
var statearr_35589_35666 = state_35537__$1;
(statearr_35589_35666[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (35))){
var inst_35517 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
if(cljs.core.truth_(inst_35517)){
var statearr_35590_35667 = state_35537__$1;
(statearr_35590_35667[(1)] = (36));

} else {
var statearr_35591_35668 = state_35537__$1;
(statearr_35591_35668[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (19))){
var inst_35459 = (state_35537[(7)]);
var inst_35479 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35459);
var state_35537__$1 = state_35537;
var statearr_35592_35669 = state_35537__$1;
(statearr_35592_35669[(2)] = inst_35479);

(statearr_35592_35669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (11))){
var inst_35459 = (state_35537[(7)]);
var inst_35463 = (inst_35459 == null);
var inst_35464 = cljs.core.not.call(null,inst_35463);
var state_35537__$1 = state_35537;
if(inst_35464){
var statearr_35593_35670 = state_35537__$1;
(statearr_35593_35670[(1)] = (13));

} else {
var statearr_35594_35671 = state_35537__$1;
(statearr_35594_35671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (9))){
var inst_35434 = (state_35537[(8)]);
var state_35537__$1 = state_35537;
var statearr_35595_35672 = state_35537__$1;
(statearr_35595_35672[(2)] = inst_35434);

(statearr_35595_35672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (5))){
var state_35537__$1 = state_35537;
var statearr_35596_35675 = state_35537__$1;
(statearr_35596_35675[(2)] = true);

(statearr_35596_35675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (14))){
var state_35537__$1 = state_35537;
var statearr_35597_35676 = state_35537__$1;
(statearr_35597_35676[(2)] = false);

(statearr_35597_35676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (26))){
var inst_35492 = (state_35537[(10)]);
var inst_35499 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35492);
var state_35537__$1 = state_35537;
var statearr_35598_35680 = state_35537__$1;
(statearr_35598_35680[(2)] = inst_35499);

(statearr_35598_35680[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (16))){
var state_35537__$1 = state_35537;
var statearr_35599_35681 = state_35537__$1;
(statearr_35599_35681[(2)] = true);

(statearr_35599_35681[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (38))){
var inst_35526 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35600_35684 = state_35537__$1;
(statearr_35600_35684[(2)] = inst_35526);

(statearr_35600_35684[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (30))){
var inst_35484 = (state_35537[(13)]);
var inst_35492 = (state_35537[(10)]);
var inst_35483 = (state_35537[(11)]);
var inst_35509 = cljs.core.empty_QMARK_.call(null,inst_35483);
var inst_35510 = inst_35484.call(null,inst_35492);
var inst_35511 = cljs.core.not.call(null,inst_35510);
var inst_35512 = (inst_35509) && (inst_35511);
var state_35537__$1 = state_35537;
var statearr_35601_35685 = state_35537__$1;
(statearr_35601_35685[(2)] = inst_35512);

(statearr_35601_35685[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (10))){
var inst_35434 = (state_35537[(8)]);
var inst_35455 = (state_35537[(2)]);
var inst_35456 = cljs.core.get.call(null,inst_35455,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35457 = cljs.core.get.call(null,inst_35455,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35458 = cljs.core.get.call(null,inst_35455,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35459 = inst_35434;
var state_35537__$1 = (function (){var statearr_35602 = state_35537;
(statearr_35602[(16)] = inst_35456);

(statearr_35602[(17)] = inst_35458);

(statearr_35602[(7)] = inst_35459);

(statearr_35602[(18)] = inst_35457);

return statearr_35602;
})();
var statearr_35604_35686 = state_35537__$1;
(statearr_35604_35686[(2)] = null);

(statearr_35604_35686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (18))){
var inst_35474 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35608_35688 = state_35537__$1;
(statearr_35608_35688[(2)] = inst_35474);

(statearr_35608_35688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (37))){
var state_35537__$1 = state_35537;
var statearr_35609_35689 = state_35537__$1;
(statearr_35609_35689[(2)] = null);

(statearr_35609_35689[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (8))){
var inst_35434 = (state_35537[(8)]);
var inst_35452 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35434);
var state_35537__$1 = state_35537;
var statearr_35610_35690 = state_35537__$1;
(statearr_35610_35690[(2)] = inst_35452);

(statearr_35610_35690[(1)] = (10));


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
});})(c__33728__auto___35621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33334__auto__,c__33728__auto___35621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33335__auto__ = null;
var cljs$core$async$mix_$_state_machine__33335__auto____0 = (function (){
var statearr_35615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35615[(0)] = cljs$core$async$mix_$_state_machine__33335__auto__);

(statearr_35615[(1)] = (1));

return statearr_35615;
});
var cljs$core$async$mix_$_state_machine__33335__auto____1 = (function (state_35537){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_35537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e35616){if((e35616 instanceof Object)){
var ex__33338__auto__ = e35616;
var statearr_35617_35691 = state_35537;
(statearr_35617_35691[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35692 = state_35537;
state_35537 = G__35692;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33335__auto__ = function(state_35537){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33335__auto____1.call(this,state_35537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33335__auto____0;
cljs$core$async$mix_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33335__auto____1;
return cljs$core$async$mix_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___35621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33730__auto__ = (function (){var statearr_35618 = f__33729__auto__.call(null);
(statearr_35618[(6)] = c__33728__auto___35621);

return statearr_35618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___35621,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35696 = arguments.length;
switch (G__35696) {
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
var G__35718 = arguments.length;
switch (G__35718) {
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
return (function (p1__35716_SHARP_){
if(cljs.core.truth_(p1__35716_SHARP_.call(null,topic))){
return p1__35716_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35716_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30072__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35720 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35721){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35721 = meta35721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35722,meta35721__$1){
var self__ = this;
var _35722__$1 = this;
return (new cljs.core.async.t_cljs$core$async35720(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35721__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35722){
var self__ = this;
var _35722__$1 = this;
return self__.meta35721;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35720.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35720.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35720.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35720.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35720.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35720.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35720.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35720.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35721","meta35721",-254275142,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35720.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35720";

cljs.core.async.t_cljs$core$async35720.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async35720");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35720 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35720(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35721){
return (new cljs.core.async.t_cljs$core$async35720(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35721));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35720(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33728__auto___35910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___35910,mults,ensure_mult,p){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___35910,mults,ensure_mult,p){
return (function (state_35797){
var state_val_35798 = (state_35797[(1)]);
if((state_val_35798 === (7))){
var inst_35793 = (state_35797[(2)]);
var state_35797__$1 = state_35797;
var statearr_35799_35911 = state_35797__$1;
(statearr_35799_35911[(2)] = inst_35793);

(statearr_35799_35911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (20))){
var state_35797__$1 = state_35797;
var statearr_35800_35912 = state_35797__$1;
(statearr_35800_35912[(2)] = null);

(statearr_35800_35912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (1))){
var state_35797__$1 = state_35797;
var statearr_35801_35913 = state_35797__$1;
(statearr_35801_35913[(2)] = null);

(statearr_35801_35913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (24))){
var inst_35776 = (state_35797[(7)]);
var inst_35785 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35776);
var state_35797__$1 = state_35797;
var statearr_35802_35914 = state_35797__$1;
(statearr_35802_35914[(2)] = inst_35785);

(statearr_35802_35914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (4))){
var inst_35728 = (state_35797[(8)]);
var inst_35728__$1 = (state_35797[(2)]);
var inst_35729 = (inst_35728__$1 == null);
var state_35797__$1 = (function (){var statearr_35803 = state_35797;
(statearr_35803[(8)] = inst_35728__$1);

return statearr_35803;
})();
if(cljs.core.truth_(inst_35729)){
var statearr_35804_35915 = state_35797__$1;
(statearr_35804_35915[(1)] = (5));

} else {
var statearr_35805_35916 = state_35797__$1;
(statearr_35805_35916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (15))){
var inst_35770 = (state_35797[(2)]);
var state_35797__$1 = state_35797;
var statearr_35806_35918 = state_35797__$1;
(statearr_35806_35918[(2)] = inst_35770);

(statearr_35806_35918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (21))){
var inst_35790 = (state_35797[(2)]);
var state_35797__$1 = (function (){var statearr_35810 = state_35797;
(statearr_35810[(9)] = inst_35790);

return statearr_35810;
})();
var statearr_35811_35919 = state_35797__$1;
(statearr_35811_35919[(2)] = null);

(statearr_35811_35919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (13))){
var inst_35752 = (state_35797[(10)]);
var inst_35754 = cljs.core.chunked_seq_QMARK_.call(null,inst_35752);
var state_35797__$1 = state_35797;
if(inst_35754){
var statearr_35812_35920 = state_35797__$1;
(statearr_35812_35920[(1)] = (16));

} else {
var statearr_35813_35921 = state_35797__$1;
(statearr_35813_35921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (22))){
var inst_35782 = (state_35797[(2)]);
var state_35797__$1 = state_35797;
if(cljs.core.truth_(inst_35782)){
var statearr_35814_35922 = state_35797__$1;
(statearr_35814_35922[(1)] = (23));

} else {
var statearr_35815_35923 = state_35797__$1;
(statearr_35815_35923[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (6))){
var inst_35728 = (state_35797[(8)]);
var inst_35776 = (state_35797[(7)]);
var inst_35778 = (state_35797[(11)]);
var inst_35776__$1 = topic_fn.call(null,inst_35728);
var inst_35777 = cljs.core.deref.call(null,mults);
var inst_35778__$1 = cljs.core.get.call(null,inst_35777,inst_35776__$1);
var state_35797__$1 = (function (){var statearr_35816 = state_35797;
(statearr_35816[(7)] = inst_35776__$1);

(statearr_35816[(11)] = inst_35778__$1);

return statearr_35816;
})();
if(cljs.core.truth_(inst_35778__$1)){
var statearr_35817_35926 = state_35797__$1;
(statearr_35817_35926[(1)] = (19));

} else {
var statearr_35818_35927 = state_35797__$1;
(statearr_35818_35927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (25))){
var inst_35787 = (state_35797[(2)]);
var state_35797__$1 = state_35797;
var statearr_35819_35928 = state_35797__$1;
(statearr_35819_35928[(2)] = inst_35787);

(statearr_35819_35928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (17))){
var inst_35752 = (state_35797[(10)]);
var inst_35761 = cljs.core.first.call(null,inst_35752);
var inst_35762 = cljs.core.async.muxch_STAR_.call(null,inst_35761);
var inst_35763 = cljs.core.async.close_BANG_.call(null,inst_35762);
var inst_35764 = cljs.core.next.call(null,inst_35752);
var inst_35738 = inst_35764;
var inst_35739 = null;
var inst_35740 = (0);
var inst_35741 = (0);
var state_35797__$1 = (function (){var statearr_35820 = state_35797;
(statearr_35820[(12)] = inst_35739);

(statearr_35820[(13)] = inst_35740);

(statearr_35820[(14)] = inst_35741);

(statearr_35820[(15)] = inst_35738);

(statearr_35820[(16)] = inst_35763);

return statearr_35820;
})();
var statearr_35821_35929 = state_35797__$1;
(statearr_35821_35929[(2)] = null);

(statearr_35821_35929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (3))){
var inst_35795 = (state_35797[(2)]);
var state_35797__$1 = state_35797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35797__$1,inst_35795);
} else {
if((state_val_35798 === (12))){
var inst_35772 = (state_35797[(2)]);
var state_35797__$1 = state_35797;
var statearr_35822_35930 = state_35797__$1;
(statearr_35822_35930[(2)] = inst_35772);

(statearr_35822_35930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (2))){
var state_35797__$1 = state_35797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35797__$1,(4),ch);
} else {
if((state_val_35798 === (23))){
var state_35797__$1 = state_35797;
var statearr_35823_35931 = state_35797__$1;
(statearr_35823_35931[(2)] = null);

(statearr_35823_35931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (19))){
var inst_35728 = (state_35797[(8)]);
var inst_35778 = (state_35797[(11)]);
var inst_35780 = cljs.core.async.muxch_STAR_.call(null,inst_35778);
var state_35797__$1 = state_35797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35797__$1,(22),inst_35780,inst_35728);
} else {
if((state_val_35798 === (11))){
var inst_35752 = (state_35797[(10)]);
var inst_35738 = (state_35797[(15)]);
var inst_35752__$1 = cljs.core.seq.call(null,inst_35738);
var state_35797__$1 = (function (){var statearr_35824 = state_35797;
(statearr_35824[(10)] = inst_35752__$1);

return statearr_35824;
})();
if(inst_35752__$1){
var statearr_35825_35936 = state_35797__$1;
(statearr_35825_35936[(1)] = (13));

} else {
var statearr_35826_35937 = state_35797__$1;
(statearr_35826_35937[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (9))){
var inst_35774 = (state_35797[(2)]);
var state_35797__$1 = state_35797;
var statearr_35827_35938 = state_35797__$1;
(statearr_35827_35938[(2)] = inst_35774);

(statearr_35827_35938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (5))){
var inst_35735 = cljs.core.deref.call(null,mults);
var inst_35736 = cljs.core.vals.call(null,inst_35735);
var inst_35737 = cljs.core.seq.call(null,inst_35736);
var inst_35738 = inst_35737;
var inst_35739 = null;
var inst_35740 = (0);
var inst_35741 = (0);
var state_35797__$1 = (function (){var statearr_35842 = state_35797;
(statearr_35842[(12)] = inst_35739);

(statearr_35842[(13)] = inst_35740);

(statearr_35842[(14)] = inst_35741);

(statearr_35842[(15)] = inst_35738);

return statearr_35842;
})();
var statearr_35849_35942 = state_35797__$1;
(statearr_35849_35942[(2)] = null);

(statearr_35849_35942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (14))){
var state_35797__$1 = state_35797;
var statearr_35854_35943 = state_35797__$1;
(statearr_35854_35943[(2)] = null);

(statearr_35854_35943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (16))){
var inst_35752 = (state_35797[(10)]);
var inst_35756 = cljs.core.chunk_first.call(null,inst_35752);
var inst_35757 = cljs.core.chunk_rest.call(null,inst_35752);
var inst_35758 = cljs.core.count.call(null,inst_35756);
var inst_35738 = inst_35757;
var inst_35739 = inst_35756;
var inst_35740 = inst_35758;
var inst_35741 = (0);
var state_35797__$1 = (function (){var statearr_35855 = state_35797;
(statearr_35855[(12)] = inst_35739);

(statearr_35855[(13)] = inst_35740);

(statearr_35855[(14)] = inst_35741);

(statearr_35855[(15)] = inst_35738);

return statearr_35855;
})();
var statearr_35856_35946 = state_35797__$1;
(statearr_35856_35946[(2)] = null);

(statearr_35856_35946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (10))){
var inst_35739 = (state_35797[(12)]);
var inst_35740 = (state_35797[(13)]);
var inst_35741 = (state_35797[(14)]);
var inst_35738 = (state_35797[(15)]);
var inst_35746 = cljs.core._nth.call(null,inst_35739,inst_35741);
var inst_35747 = cljs.core.async.muxch_STAR_.call(null,inst_35746);
var inst_35748 = cljs.core.async.close_BANG_.call(null,inst_35747);
var inst_35749 = (inst_35741 + (1));
var tmp35851 = inst_35739;
var tmp35852 = inst_35740;
var tmp35853 = inst_35738;
var inst_35738__$1 = tmp35853;
var inst_35739__$1 = tmp35851;
var inst_35740__$1 = tmp35852;
var inst_35741__$1 = inst_35749;
var state_35797__$1 = (function (){var statearr_35857 = state_35797;
(statearr_35857[(12)] = inst_35739__$1);

(statearr_35857[(13)] = inst_35740__$1);

(statearr_35857[(14)] = inst_35741__$1);

(statearr_35857[(15)] = inst_35738__$1);

(statearr_35857[(17)] = inst_35748);

return statearr_35857;
})();
var statearr_35859_35949 = state_35797__$1;
(statearr_35859_35949[(2)] = null);

(statearr_35859_35949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (18))){
var inst_35767 = (state_35797[(2)]);
var state_35797__$1 = state_35797;
var statearr_35860_35950 = state_35797__$1;
(statearr_35860_35950[(2)] = inst_35767);

(statearr_35860_35950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35798 === (8))){
var inst_35740 = (state_35797[(13)]);
var inst_35741 = (state_35797[(14)]);
var inst_35743 = (inst_35741 < inst_35740);
var inst_35744 = inst_35743;
var state_35797__$1 = state_35797;
if(cljs.core.truth_(inst_35744)){
var statearr_35861_35951 = state_35797__$1;
(statearr_35861_35951[(1)] = (10));

} else {
var statearr_35879_35952 = state_35797__$1;
(statearr_35879_35952[(1)] = (11));

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
});})(c__33728__auto___35910,mults,ensure_mult,p))
;
return ((function (switch__33334__auto__,c__33728__auto___35910,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_35886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35886[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_35886[(1)] = (1));

return statearr_35886;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_35797){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_35797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e35887){if((e35887 instanceof Object)){
var ex__33338__auto__ = e35887;
var statearr_35888_35953 = state_35797;
(statearr_35888_35953[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35954 = state_35797;
state_35797 = G__35954;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_35797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_35797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___35910,mults,ensure_mult,p))
})();
var state__33730__auto__ = (function (){var statearr_35889 = f__33729__auto__.call(null);
(statearr_35889[(6)] = c__33728__auto___35910);

return statearr_35889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___35910,mults,ensure_mult,p))
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
var G__35956 = arguments.length;
switch (G__35956) {
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
var G__35962 = arguments.length;
switch (G__35962) {
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
var G__35981 = arguments.length;
switch (G__35981) {
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
var c__33728__auto___36085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___36085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___36085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36026){
var state_val_36027 = (state_36026[(1)]);
if((state_val_36027 === (7))){
var state_36026__$1 = state_36026;
var statearr_36028_36086 = state_36026__$1;
(statearr_36028_36086[(2)] = null);

(statearr_36028_36086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (1))){
var state_36026__$1 = state_36026;
var statearr_36029_36087 = state_36026__$1;
(statearr_36029_36087[(2)] = null);

(statearr_36029_36087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (4))){
var inst_35987 = (state_36026[(7)]);
var inst_35989 = (inst_35987 < cnt);
var state_36026__$1 = state_36026;
if(cljs.core.truth_(inst_35989)){
var statearr_36034_36094 = state_36026__$1;
(statearr_36034_36094[(1)] = (6));

} else {
var statearr_36035_36098 = state_36026__$1;
(statearr_36035_36098[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (15))){
var inst_36022 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36036_36099 = state_36026__$1;
(statearr_36036_36099[(2)] = inst_36022);

(statearr_36036_36099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (13))){
var inst_36015 = cljs.core.async.close_BANG_.call(null,out);
var state_36026__$1 = state_36026;
var statearr_36041_36100 = state_36026__$1;
(statearr_36041_36100[(2)] = inst_36015);

(statearr_36041_36100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (6))){
var state_36026__$1 = state_36026;
var statearr_36042_36101 = state_36026__$1;
(statearr_36042_36101[(2)] = null);

(statearr_36042_36101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (3))){
var inst_36024 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36026__$1,inst_36024);
} else {
if((state_val_36027 === (12))){
var inst_36012 = (state_36026[(8)]);
var inst_36012__$1 = (state_36026[(2)]);
var inst_36013 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36012__$1);
var state_36026__$1 = (function (){var statearr_36043 = state_36026;
(statearr_36043[(8)] = inst_36012__$1);

return statearr_36043;
})();
if(cljs.core.truth_(inst_36013)){
var statearr_36044_36115 = state_36026__$1;
(statearr_36044_36115[(1)] = (13));

} else {
var statearr_36045_36116 = state_36026__$1;
(statearr_36045_36116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (2))){
var inst_35986 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35987 = (0);
var state_36026__$1 = (function (){var statearr_36046 = state_36026;
(statearr_36046[(7)] = inst_35987);

(statearr_36046[(9)] = inst_35986);

return statearr_36046;
})();
var statearr_36047_36117 = state_36026__$1;
(statearr_36047_36117[(2)] = null);

(statearr_36047_36117[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (11))){
var inst_35987 = (state_36026[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36026,(10),Object,null,(9));
var inst_35996 = chs__$1.call(null,inst_35987);
var inst_35997 = done.call(null,inst_35987);
var inst_35998 = cljs.core.async.take_BANG_.call(null,inst_35996,inst_35997);
var state_36026__$1 = state_36026;
var statearr_36048_36128 = state_36026__$1;
(statearr_36048_36128[(2)] = inst_35998);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (9))){
var inst_35987 = (state_36026[(7)]);
var inst_36000 = (state_36026[(2)]);
var inst_36004 = (inst_35987 + (1));
var inst_35987__$1 = inst_36004;
var state_36026__$1 = (function (){var statearr_36049 = state_36026;
(statearr_36049[(7)] = inst_35987__$1);

(statearr_36049[(10)] = inst_36000);

return statearr_36049;
})();
var statearr_36050_36139 = state_36026__$1;
(statearr_36050_36139[(2)] = null);

(statearr_36050_36139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (5))){
var inst_36010 = (state_36026[(2)]);
var state_36026__$1 = (function (){var statearr_36052 = state_36026;
(statearr_36052[(11)] = inst_36010);

return statearr_36052;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(12),dchan);
} else {
if((state_val_36027 === (14))){
var inst_36012 = (state_36026[(8)]);
var inst_36017 = cljs.core.apply.call(null,f,inst_36012);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36026__$1,(16),out,inst_36017);
} else {
if((state_val_36027 === (16))){
var inst_36019 = (state_36026[(2)]);
var state_36026__$1 = (function (){var statearr_36057 = state_36026;
(statearr_36057[(12)] = inst_36019);

return statearr_36057;
})();
var statearr_36058_36146 = state_36026__$1;
(statearr_36058_36146[(2)] = null);

(statearr_36058_36146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (10))){
var inst_35991 = (state_36026[(2)]);
var inst_35992 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36026__$1 = (function (){var statearr_36059 = state_36026;
(statearr_36059[(13)] = inst_35991);

return statearr_36059;
})();
var statearr_36060_36147 = state_36026__$1;
(statearr_36060_36147[(2)] = inst_35992);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36027 === (8))){
var inst_36008 = (state_36026[(2)]);
var state_36026__$1 = state_36026;
var statearr_36061_36148 = state_36026__$1;
(statearr_36061_36148[(2)] = inst_36008);

(statearr_36061_36148[(1)] = (5));


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
});})(c__33728__auto___36085,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33334__auto__,c__33728__auto___36085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_36064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36064[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_36064[(1)] = (1));

return statearr_36064;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_36026){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_36026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e36066){if((e36066 instanceof Object)){
var ex__33338__auto__ = e36066;
var statearr_36068_36149 = state_36026;
(statearr_36068_36149[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36150 = state_36026;
state_36026 = G__36150;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_36026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_36026);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___36085,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33730__auto__ = (function (){var statearr_36069 = f__33729__auto__.call(null);
(statearr_36069[(6)] = c__33728__auto___36085);

return statearr_36069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___36085,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__36154 = arguments.length;
switch (G__36154) {
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
var c__33728__auto___36215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___36215,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___36215,out){
return (function (state_36190){
var state_val_36191 = (state_36190[(1)]);
if((state_val_36191 === (7))){
var inst_36169 = (state_36190[(7)]);
var inst_36170 = (state_36190[(8)]);
var inst_36169__$1 = (state_36190[(2)]);
var inst_36170__$1 = cljs.core.nth.call(null,inst_36169__$1,(0),null);
var inst_36171 = cljs.core.nth.call(null,inst_36169__$1,(1),null);
var inst_36172 = (inst_36170__$1 == null);
var state_36190__$1 = (function (){var statearr_36192 = state_36190;
(statearr_36192[(7)] = inst_36169__$1);

(statearr_36192[(9)] = inst_36171);

(statearr_36192[(8)] = inst_36170__$1);

return statearr_36192;
})();
if(cljs.core.truth_(inst_36172)){
var statearr_36193_36216 = state_36190__$1;
(statearr_36193_36216[(1)] = (8));

} else {
var statearr_36194_36217 = state_36190__$1;
(statearr_36194_36217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (1))){
var inst_36159 = cljs.core.vec.call(null,chs);
var inst_36160 = inst_36159;
var state_36190__$1 = (function (){var statearr_36195 = state_36190;
(statearr_36195[(10)] = inst_36160);

return statearr_36195;
})();
var statearr_36196_36218 = state_36190__$1;
(statearr_36196_36218[(2)] = null);

(statearr_36196_36218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (4))){
var inst_36160 = (state_36190[(10)]);
var state_36190__$1 = state_36190;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36190__$1,(7),inst_36160);
} else {
if((state_val_36191 === (6))){
var inst_36186 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36197_36219 = state_36190__$1;
(statearr_36197_36219[(2)] = inst_36186);

(statearr_36197_36219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (3))){
var inst_36188 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36190__$1,inst_36188);
} else {
if((state_val_36191 === (2))){
var inst_36160 = (state_36190[(10)]);
var inst_36162 = cljs.core.count.call(null,inst_36160);
var inst_36163 = (inst_36162 > (0));
var state_36190__$1 = state_36190;
if(cljs.core.truth_(inst_36163)){
var statearr_36199_36232 = state_36190__$1;
(statearr_36199_36232[(1)] = (4));

} else {
var statearr_36200_36233 = state_36190__$1;
(statearr_36200_36233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (11))){
var inst_36160 = (state_36190[(10)]);
var inst_36179 = (state_36190[(2)]);
var tmp36198 = inst_36160;
var inst_36160__$1 = tmp36198;
var state_36190__$1 = (function (){var statearr_36201 = state_36190;
(statearr_36201[(10)] = inst_36160__$1);

(statearr_36201[(11)] = inst_36179);

return statearr_36201;
})();
var statearr_36202_36234 = state_36190__$1;
(statearr_36202_36234[(2)] = null);

(statearr_36202_36234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (9))){
var inst_36170 = (state_36190[(8)]);
var state_36190__$1 = state_36190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36190__$1,(11),out,inst_36170);
} else {
if((state_val_36191 === (5))){
var inst_36184 = cljs.core.async.close_BANG_.call(null,out);
var state_36190__$1 = state_36190;
var statearr_36203_36235 = state_36190__$1;
(statearr_36203_36235[(2)] = inst_36184);

(statearr_36203_36235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (10))){
var inst_36182 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36204_36236 = state_36190__$1;
(statearr_36204_36236[(2)] = inst_36182);

(statearr_36204_36236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (8))){
var inst_36160 = (state_36190[(10)]);
var inst_36169 = (state_36190[(7)]);
var inst_36171 = (state_36190[(9)]);
var inst_36170 = (state_36190[(8)]);
var inst_36174 = (function (){var cs = inst_36160;
var vec__36165 = inst_36169;
var v = inst_36170;
var c = inst_36171;
return ((function (cs,vec__36165,v,c,inst_36160,inst_36169,inst_36171,inst_36170,state_val_36191,c__33728__auto___36215,out){
return (function (p1__36152_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36152_SHARP_);
});
;})(cs,vec__36165,v,c,inst_36160,inst_36169,inst_36171,inst_36170,state_val_36191,c__33728__auto___36215,out))
})();
var inst_36175 = cljs.core.filterv.call(null,inst_36174,inst_36160);
var inst_36160__$1 = inst_36175;
var state_36190__$1 = (function (){var statearr_36205 = state_36190;
(statearr_36205[(10)] = inst_36160__$1);

return statearr_36205;
})();
var statearr_36206_36237 = state_36190__$1;
(statearr_36206_36237[(2)] = null);

(statearr_36206_36237[(1)] = (2));


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
});})(c__33728__auto___36215,out))
;
return ((function (switch__33334__auto__,c__33728__auto___36215,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_36210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36210[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_36210[(1)] = (1));

return statearr_36210;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_36190){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_36190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e36211){if((e36211 instanceof Object)){
var ex__33338__auto__ = e36211;
var statearr_36212_36238 = state_36190;
(statearr_36212_36238[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36239 = state_36190;
state_36190 = G__36239;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_36190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_36190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___36215,out))
})();
var state__33730__auto__ = (function (){var statearr_36213 = f__33729__auto__.call(null);
(statearr_36213[(6)] = c__33728__auto___36215);

return statearr_36213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___36215,out))
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
var G__36249 = arguments.length;
switch (G__36249) {
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
var c__33728__auto___36316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___36316,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___36316,out){
return (function (state_36274){
var state_val_36275 = (state_36274[(1)]);
if((state_val_36275 === (7))){
var inst_36256 = (state_36274[(7)]);
var inst_36256__$1 = (state_36274[(2)]);
var inst_36257 = (inst_36256__$1 == null);
var inst_36258 = cljs.core.not.call(null,inst_36257);
var state_36274__$1 = (function (){var statearr_36276 = state_36274;
(statearr_36276[(7)] = inst_36256__$1);

return statearr_36276;
})();
if(inst_36258){
var statearr_36277_36321 = state_36274__$1;
(statearr_36277_36321[(1)] = (8));

} else {
var statearr_36278_36323 = state_36274__$1;
(statearr_36278_36323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (1))){
var inst_36251 = (0);
var state_36274__$1 = (function (){var statearr_36281 = state_36274;
(statearr_36281[(8)] = inst_36251);

return statearr_36281;
})();
var statearr_36282_36347 = state_36274__$1;
(statearr_36282_36347[(2)] = null);

(statearr_36282_36347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (4))){
var state_36274__$1 = state_36274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36274__$1,(7),ch);
} else {
if((state_val_36275 === (6))){
var inst_36269 = (state_36274[(2)]);
var state_36274__$1 = state_36274;
var statearr_36283_36348 = state_36274__$1;
(statearr_36283_36348[(2)] = inst_36269);

(statearr_36283_36348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (3))){
var inst_36271 = (state_36274[(2)]);
var inst_36272 = cljs.core.async.close_BANG_.call(null,out);
var state_36274__$1 = (function (){var statearr_36284 = state_36274;
(statearr_36284[(9)] = inst_36271);

return statearr_36284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36274__$1,inst_36272);
} else {
if((state_val_36275 === (2))){
var inst_36251 = (state_36274[(8)]);
var inst_36253 = (inst_36251 < n);
var state_36274__$1 = state_36274;
if(cljs.core.truth_(inst_36253)){
var statearr_36292_36349 = state_36274__$1;
(statearr_36292_36349[(1)] = (4));

} else {
var statearr_36296_36350 = state_36274__$1;
(statearr_36296_36350[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (11))){
var inst_36251 = (state_36274[(8)]);
var inst_36261 = (state_36274[(2)]);
var inst_36262 = (inst_36251 + (1));
var inst_36251__$1 = inst_36262;
var state_36274__$1 = (function (){var statearr_36300 = state_36274;
(statearr_36300[(10)] = inst_36261);

(statearr_36300[(8)] = inst_36251__$1);

return statearr_36300;
})();
var statearr_36304_36351 = state_36274__$1;
(statearr_36304_36351[(2)] = null);

(statearr_36304_36351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (9))){
var state_36274__$1 = state_36274;
var statearr_36305_36352 = state_36274__$1;
(statearr_36305_36352[(2)] = null);

(statearr_36305_36352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (5))){
var state_36274__$1 = state_36274;
var statearr_36306_36353 = state_36274__$1;
(statearr_36306_36353[(2)] = null);

(statearr_36306_36353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (10))){
var inst_36266 = (state_36274[(2)]);
var state_36274__$1 = state_36274;
var statearr_36307_36354 = state_36274__$1;
(statearr_36307_36354[(2)] = inst_36266);

(statearr_36307_36354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (8))){
var inst_36256 = (state_36274[(7)]);
var state_36274__$1 = state_36274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36274__$1,(11),out,inst_36256);
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
});})(c__33728__auto___36316,out))
;
return ((function (switch__33334__auto__,c__33728__auto___36316,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_36308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36308[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_36308[(1)] = (1));

return statearr_36308;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_36274){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_36274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e36309){if((e36309 instanceof Object)){
var ex__33338__auto__ = e36309;
var statearr_36310_36360 = state_36274;
(statearr_36310_36360[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36361 = state_36274;
state_36274 = G__36361;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_36274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_36274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___36316,out))
})();
var state__33730__auto__ = (function (){var statearr_36314 = f__33729__auto__.call(null);
(statearr_36314[(6)] = c__33728__auto___36316);

return statearr_36314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___36316,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36364 = (function (f,ch,meta36365){
this.f = f;
this.ch = ch;
this.meta36365 = meta36365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36366,meta36365__$1){
var self__ = this;
var _36366__$1 = this;
return (new cljs.core.async.t_cljs$core$async36364(self__.f,self__.ch,meta36365__$1));
});

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36366){
var self__ = this;
var _36366__$1 = this;
return self__.meta36365;
});

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36373 = (function (f,ch,meta36365,_,fn1,meta36374){
this.f = f;
this.ch = ch;
this.meta36365 = meta36365;
this._ = _;
this.fn1 = fn1;
this.meta36374 = meta36374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36375,meta36374__$1){
var self__ = this;
var _36375__$1 = this;
return (new cljs.core.async.t_cljs$core$async36373(self__.f,self__.ch,self__.meta36365,self__._,self__.fn1,meta36374__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36375){
var self__ = this;
var _36375__$1 = this;
return self__.meta36374;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36363_SHARP_){
return f1.call(null,(((p1__36363_SHARP_ == null))?null:self__.f.call(null,p1__36363_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36373.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36365","meta36365",-994124455,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36364","cljs.core.async/t_cljs$core$async36364",601842289,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36374","meta36374",322303601,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36373";

cljs.core.async.t_cljs$core$async36373.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36373");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36373 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36373(f__$1,ch__$1,meta36365__$1,___$2,fn1__$1,meta36374){
return (new cljs.core.async.t_cljs$core$async36373(f__$1,ch__$1,meta36365__$1,___$2,fn1__$1,meta36374));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36373(self__.f,self__.ch,self__.meta36365,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36365","meta36365",-994124455,null)], null);
});

cljs.core.async.t_cljs$core$async36364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36364";

cljs.core.async.t_cljs$core$async36364.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36364");
});

cljs.core.async.__GT_t_cljs$core$async36364 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36364(f__$1,ch__$1,meta36365){
return (new cljs.core.async.t_cljs$core$async36364(f__$1,ch__$1,meta36365));
});

}

return (new cljs.core.async.t_cljs$core$async36364(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36403 = (function (f,ch,meta36404){
this.f = f;
this.ch = ch;
this.meta36404 = meta36404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36405,meta36404__$1){
var self__ = this;
var _36405__$1 = this;
return (new cljs.core.async.t_cljs$core$async36403(self__.f,self__.ch,meta36404__$1));
});

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36405){
var self__ = this;
var _36405__$1 = this;
return self__.meta36404;
});

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36404","meta36404",-1876211909,null)], null);
});

cljs.core.async.t_cljs$core$async36403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36403";

cljs.core.async.t_cljs$core$async36403.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36403");
});

cljs.core.async.__GT_t_cljs$core$async36403 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36403(f__$1,ch__$1,meta36404){
return (new cljs.core.async.t_cljs$core$async36403(f__$1,ch__$1,meta36404));
});

}

return (new cljs.core.async.t_cljs$core$async36403(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36422 = (function (p,ch,meta36423){
this.p = p;
this.ch = ch;
this.meta36423 = meta36423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36424,meta36423__$1){
var self__ = this;
var _36424__$1 = this;
return (new cljs.core.async.t_cljs$core$async36422(self__.p,self__.ch,meta36423__$1));
});

cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36424){
var self__ = this;
var _36424__$1 = this;
return self__.meta36423;
});

cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36423","meta36423",1135376041,null)], null);
});

cljs.core.async.t_cljs$core$async36422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36422";

cljs.core.async.t_cljs$core$async36422.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async36422");
});

cljs.core.async.__GT_t_cljs$core$async36422 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36422(p__$1,ch__$1,meta36423){
return (new cljs.core.async.t_cljs$core$async36422(p__$1,ch__$1,meta36423));
});

}

return (new cljs.core.async.t_cljs$core$async36422(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36437 = arguments.length;
switch (G__36437) {
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
var c__33728__auto___36498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___36498,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___36498,out){
return (function (state_36458){
var state_val_36459 = (state_36458[(1)]);
if((state_val_36459 === (7))){
var inst_36454 = (state_36458[(2)]);
var state_36458__$1 = state_36458;
var statearr_36471_36502 = state_36458__$1;
(statearr_36471_36502[(2)] = inst_36454);

(statearr_36471_36502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (1))){
var state_36458__$1 = state_36458;
var statearr_36472_36503 = state_36458__$1;
(statearr_36472_36503[(2)] = null);

(statearr_36472_36503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (4))){
var inst_36440 = (state_36458[(7)]);
var inst_36440__$1 = (state_36458[(2)]);
var inst_36441 = (inst_36440__$1 == null);
var state_36458__$1 = (function (){var statearr_36473 = state_36458;
(statearr_36473[(7)] = inst_36440__$1);

return statearr_36473;
})();
if(cljs.core.truth_(inst_36441)){
var statearr_36477_36504 = state_36458__$1;
(statearr_36477_36504[(1)] = (5));

} else {
var statearr_36478_36505 = state_36458__$1;
(statearr_36478_36505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (6))){
var inst_36440 = (state_36458[(7)]);
var inst_36445 = p.call(null,inst_36440);
var state_36458__$1 = state_36458;
if(cljs.core.truth_(inst_36445)){
var statearr_36479_36509 = state_36458__$1;
(statearr_36479_36509[(1)] = (8));

} else {
var statearr_36480_36510 = state_36458__$1;
(statearr_36480_36510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (3))){
var inst_36456 = (state_36458[(2)]);
var state_36458__$1 = state_36458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36458__$1,inst_36456);
} else {
if((state_val_36459 === (2))){
var state_36458__$1 = state_36458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36458__$1,(4),ch);
} else {
if((state_val_36459 === (11))){
var inst_36448 = (state_36458[(2)]);
var state_36458__$1 = state_36458;
var statearr_36481_36511 = state_36458__$1;
(statearr_36481_36511[(2)] = inst_36448);

(statearr_36481_36511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (9))){
var state_36458__$1 = state_36458;
var statearr_36482_36512 = state_36458__$1;
(statearr_36482_36512[(2)] = null);

(statearr_36482_36512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (5))){
var inst_36443 = cljs.core.async.close_BANG_.call(null,out);
var state_36458__$1 = state_36458;
var statearr_36483_36513 = state_36458__$1;
(statearr_36483_36513[(2)] = inst_36443);

(statearr_36483_36513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (10))){
var inst_36451 = (state_36458[(2)]);
var state_36458__$1 = (function (){var statearr_36484 = state_36458;
(statearr_36484[(8)] = inst_36451);

return statearr_36484;
})();
var statearr_36486_36514 = state_36458__$1;
(statearr_36486_36514[(2)] = null);

(statearr_36486_36514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (8))){
var inst_36440 = (state_36458[(7)]);
var state_36458__$1 = state_36458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36458__$1,(11),out,inst_36440);
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
});})(c__33728__auto___36498,out))
;
return ((function (switch__33334__auto__,c__33728__auto___36498,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_36487 = [null,null,null,null,null,null,null,null,null];
(statearr_36487[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_36487[(1)] = (1));

return statearr_36487;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_36458){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_36458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e36488){if((e36488 instanceof Object)){
var ex__33338__auto__ = e36488;
var statearr_36489_36519 = state_36458;
(statearr_36489_36519[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36521 = state_36458;
state_36458 = G__36521;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_36458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_36458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___36498,out))
})();
var state__33730__auto__ = (function (){var statearr_36492 = f__33729__auto__.call(null);
(statearr_36492[(6)] = c__33728__auto___36498);

return statearr_36492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___36498,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36527 = arguments.length;
switch (G__36527) {
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
var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__){
return (function (state_36605){
var state_val_36606 = (state_36605[(1)]);
if((state_val_36606 === (7))){
var inst_36589 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
var statearr_36615_36683 = state_36605__$1;
(statearr_36615_36683[(2)] = inst_36589);

(statearr_36615_36683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (20))){
var inst_36559 = (state_36605[(7)]);
var inst_36570 = (state_36605[(2)]);
var inst_36571 = cljs.core.next.call(null,inst_36559);
var inst_36545 = inst_36571;
var inst_36546 = null;
var inst_36547 = (0);
var inst_36548 = (0);
var state_36605__$1 = (function (){var statearr_36616 = state_36605;
(statearr_36616[(8)] = inst_36547);

(statearr_36616[(9)] = inst_36546);

(statearr_36616[(10)] = inst_36548);

(statearr_36616[(11)] = inst_36545);

(statearr_36616[(12)] = inst_36570);

return statearr_36616;
})();
var statearr_36618_36691 = state_36605__$1;
(statearr_36618_36691[(2)] = null);

(statearr_36618_36691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (1))){
var state_36605__$1 = state_36605;
var statearr_36619_36692 = state_36605__$1;
(statearr_36619_36692[(2)] = null);

(statearr_36619_36692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (4))){
var inst_36534 = (state_36605[(13)]);
var inst_36534__$1 = (state_36605[(2)]);
var inst_36535 = (inst_36534__$1 == null);
var state_36605__$1 = (function (){var statearr_36620 = state_36605;
(statearr_36620[(13)] = inst_36534__$1);

return statearr_36620;
})();
if(cljs.core.truth_(inst_36535)){
var statearr_36621_36693 = state_36605__$1;
(statearr_36621_36693[(1)] = (5));

} else {
var statearr_36631_36697 = state_36605__$1;
(statearr_36631_36697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (15))){
var state_36605__$1 = state_36605;
var statearr_36635_36698 = state_36605__$1;
(statearr_36635_36698[(2)] = null);

(statearr_36635_36698[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (21))){
var state_36605__$1 = state_36605;
var statearr_36636_36699 = state_36605__$1;
(statearr_36636_36699[(2)] = null);

(statearr_36636_36699[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (13))){
var inst_36547 = (state_36605[(8)]);
var inst_36546 = (state_36605[(9)]);
var inst_36548 = (state_36605[(10)]);
var inst_36545 = (state_36605[(11)]);
var inst_36555 = (state_36605[(2)]);
var inst_36556 = (inst_36548 + (1));
var tmp36632 = inst_36547;
var tmp36633 = inst_36546;
var tmp36634 = inst_36545;
var inst_36545__$1 = tmp36634;
var inst_36546__$1 = tmp36633;
var inst_36547__$1 = tmp36632;
var inst_36548__$1 = inst_36556;
var state_36605__$1 = (function (){var statearr_36637 = state_36605;
(statearr_36637[(8)] = inst_36547__$1);

(statearr_36637[(9)] = inst_36546__$1);

(statearr_36637[(10)] = inst_36548__$1);

(statearr_36637[(14)] = inst_36555);

(statearr_36637[(11)] = inst_36545__$1);

return statearr_36637;
})();
var statearr_36638_36700 = state_36605__$1;
(statearr_36638_36700[(2)] = null);

(statearr_36638_36700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (22))){
var state_36605__$1 = state_36605;
var statearr_36639_36701 = state_36605__$1;
(statearr_36639_36701[(2)] = null);

(statearr_36639_36701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (6))){
var inst_36534 = (state_36605[(13)]);
var inst_36543 = f.call(null,inst_36534);
var inst_36544 = cljs.core.seq.call(null,inst_36543);
var inst_36545 = inst_36544;
var inst_36546 = null;
var inst_36547 = (0);
var inst_36548 = (0);
var state_36605__$1 = (function (){var statearr_36640 = state_36605;
(statearr_36640[(8)] = inst_36547);

(statearr_36640[(9)] = inst_36546);

(statearr_36640[(10)] = inst_36548);

(statearr_36640[(11)] = inst_36545);

return statearr_36640;
})();
var statearr_36641_36702 = state_36605__$1;
(statearr_36641_36702[(2)] = null);

(statearr_36641_36702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (17))){
var inst_36559 = (state_36605[(7)]);
var inst_36563 = cljs.core.chunk_first.call(null,inst_36559);
var inst_36564 = cljs.core.chunk_rest.call(null,inst_36559);
var inst_36565 = cljs.core.count.call(null,inst_36563);
var inst_36545 = inst_36564;
var inst_36546 = inst_36563;
var inst_36547 = inst_36565;
var inst_36548 = (0);
var state_36605__$1 = (function (){var statearr_36642 = state_36605;
(statearr_36642[(8)] = inst_36547);

(statearr_36642[(9)] = inst_36546);

(statearr_36642[(10)] = inst_36548);

(statearr_36642[(11)] = inst_36545);

return statearr_36642;
})();
var statearr_36643_36706 = state_36605__$1;
(statearr_36643_36706[(2)] = null);

(statearr_36643_36706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (3))){
var inst_36591 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36605__$1,inst_36591);
} else {
if((state_val_36606 === (12))){
var inst_36579 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
var statearr_36644_36712 = state_36605__$1;
(statearr_36644_36712[(2)] = inst_36579);

(statearr_36644_36712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (2))){
var state_36605__$1 = state_36605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36605__$1,(4),in$);
} else {
if((state_val_36606 === (23))){
var inst_36587 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
var statearr_36645_36714 = state_36605__$1;
(statearr_36645_36714[(2)] = inst_36587);

(statearr_36645_36714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (19))){
var inst_36574 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
var statearr_36646_36715 = state_36605__$1;
(statearr_36646_36715[(2)] = inst_36574);

(statearr_36646_36715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (11))){
var inst_36559 = (state_36605[(7)]);
var inst_36545 = (state_36605[(11)]);
var inst_36559__$1 = cljs.core.seq.call(null,inst_36545);
var state_36605__$1 = (function (){var statearr_36647 = state_36605;
(statearr_36647[(7)] = inst_36559__$1);

return statearr_36647;
})();
if(inst_36559__$1){
var statearr_36648_36716 = state_36605__$1;
(statearr_36648_36716[(1)] = (14));

} else {
var statearr_36649_36717 = state_36605__$1;
(statearr_36649_36717[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (9))){
var inst_36581 = (state_36605[(2)]);
var inst_36582 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36605__$1 = (function (){var statearr_36650 = state_36605;
(statearr_36650[(15)] = inst_36581);

return statearr_36650;
})();
if(cljs.core.truth_(inst_36582)){
var statearr_36651_36718 = state_36605__$1;
(statearr_36651_36718[(1)] = (21));

} else {
var statearr_36652_36719 = state_36605__$1;
(statearr_36652_36719[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (5))){
var inst_36537 = cljs.core.async.close_BANG_.call(null,out);
var state_36605__$1 = state_36605;
var statearr_36653_36720 = state_36605__$1;
(statearr_36653_36720[(2)] = inst_36537);

(statearr_36653_36720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (14))){
var inst_36559 = (state_36605[(7)]);
var inst_36561 = cljs.core.chunked_seq_QMARK_.call(null,inst_36559);
var state_36605__$1 = state_36605;
if(inst_36561){
var statearr_36654_36721 = state_36605__$1;
(statearr_36654_36721[(1)] = (17));

} else {
var statearr_36655_36722 = state_36605__$1;
(statearr_36655_36722[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (16))){
var inst_36577 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
var statearr_36656_36723 = state_36605__$1;
(statearr_36656_36723[(2)] = inst_36577);

(statearr_36656_36723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (10))){
var inst_36546 = (state_36605[(9)]);
var inst_36548 = (state_36605[(10)]);
var inst_36553 = cljs.core._nth.call(null,inst_36546,inst_36548);
var state_36605__$1 = state_36605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36605__$1,(13),out,inst_36553);
} else {
if((state_val_36606 === (18))){
var inst_36559 = (state_36605[(7)]);
var inst_36568 = cljs.core.first.call(null,inst_36559);
var state_36605__$1 = state_36605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36605__$1,(20),out,inst_36568);
} else {
if((state_val_36606 === (8))){
var inst_36547 = (state_36605[(8)]);
var inst_36548 = (state_36605[(10)]);
var inst_36550 = (inst_36548 < inst_36547);
var inst_36551 = inst_36550;
var state_36605__$1 = state_36605;
if(cljs.core.truth_(inst_36551)){
var statearr_36661_36724 = state_36605__$1;
(statearr_36661_36724[(1)] = (10));

} else {
var statearr_36669_36725 = state_36605__$1;
(statearr_36669_36725[(1)] = (11));

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
});})(c__33728__auto__))
;
return ((function (switch__33334__auto__,c__33728__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33335__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33335__auto____0 = (function (){
var statearr_36671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36671[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33335__auto__);

(statearr_36671[(1)] = (1));

return statearr_36671;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33335__auto____1 = (function (state_36605){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_36605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e36672){if((e36672 instanceof Object)){
var ex__33338__auto__ = e36672;
var statearr_36673_36735 = state_36605;
(statearr_36673_36735[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36736 = state_36605;
state_36605 = G__36736;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33335__auto__ = function(state_36605){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33335__auto____1.call(this,state_36605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33335__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_36679 = f__33729__auto__.call(null);
(statearr_36679[(6)] = c__33728__auto__);

return statearr_36679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__))
);

return c__33728__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36739 = arguments.length;
switch (G__36739) {
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
var G__36748 = arguments.length;
switch (G__36748) {
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
var G__36751 = arguments.length;
switch (G__36751) {
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
var c__33728__auto___36807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___36807,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___36807,out){
return (function (state_36775){
var state_val_36776 = (state_36775[(1)]);
if((state_val_36776 === (7))){
var inst_36770 = (state_36775[(2)]);
var state_36775__$1 = state_36775;
var statearr_36777_36808 = state_36775__$1;
(statearr_36777_36808[(2)] = inst_36770);

(statearr_36777_36808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (1))){
var inst_36752 = null;
var state_36775__$1 = (function (){var statearr_36781 = state_36775;
(statearr_36781[(7)] = inst_36752);

return statearr_36781;
})();
var statearr_36782_36809 = state_36775__$1;
(statearr_36782_36809[(2)] = null);

(statearr_36782_36809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (4))){
var inst_36755 = (state_36775[(8)]);
var inst_36755__$1 = (state_36775[(2)]);
var inst_36756 = (inst_36755__$1 == null);
var inst_36757 = cljs.core.not.call(null,inst_36756);
var state_36775__$1 = (function (){var statearr_36783 = state_36775;
(statearr_36783[(8)] = inst_36755__$1);

return statearr_36783;
})();
if(inst_36757){
var statearr_36784_36810 = state_36775__$1;
(statearr_36784_36810[(1)] = (5));

} else {
var statearr_36785_36811 = state_36775__$1;
(statearr_36785_36811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (6))){
var state_36775__$1 = state_36775;
var statearr_36786_36812 = state_36775__$1;
(statearr_36786_36812[(2)] = null);

(statearr_36786_36812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (3))){
var inst_36772 = (state_36775[(2)]);
var inst_36773 = cljs.core.async.close_BANG_.call(null,out);
var state_36775__$1 = (function (){var statearr_36790 = state_36775;
(statearr_36790[(9)] = inst_36772);

return statearr_36790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36775__$1,inst_36773);
} else {
if((state_val_36776 === (2))){
var state_36775__$1 = state_36775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36775__$1,(4),ch);
} else {
if((state_val_36776 === (11))){
var inst_36755 = (state_36775[(8)]);
var inst_36764 = (state_36775[(2)]);
var inst_36752 = inst_36755;
var state_36775__$1 = (function (){var statearr_36793 = state_36775;
(statearr_36793[(10)] = inst_36764);

(statearr_36793[(7)] = inst_36752);

return statearr_36793;
})();
var statearr_36794_36814 = state_36775__$1;
(statearr_36794_36814[(2)] = null);

(statearr_36794_36814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (9))){
var inst_36755 = (state_36775[(8)]);
var state_36775__$1 = state_36775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36775__$1,(11),out,inst_36755);
} else {
if((state_val_36776 === (5))){
var inst_36755 = (state_36775[(8)]);
var inst_36752 = (state_36775[(7)]);
var inst_36759 = cljs.core._EQ_.call(null,inst_36755,inst_36752);
var state_36775__$1 = state_36775;
if(inst_36759){
var statearr_36796_36820 = state_36775__$1;
(statearr_36796_36820[(1)] = (8));

} else {
var statearr_36798_36821 = state_36775__$1;
(statearr_36798_36821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (10))){
var inst_36767 = (state_36775[(2)]);
var state_36775__$1 = state_36775;
var statearr_36799_36822 = state_36775__$1;
(statearr_36799_36822[(2)] = inst_36767);

(statearr_36799_36822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (8))){
var inst_36752 = (state_36775[(7)]);
var tmp36795 = inst_36752;
var inst_36752__$1 = tmp36795;
var state_36775__$1 = (function (){var statearr_36800 = state_36775;
(statearr_36800[(7)] = inst_36752__$1);

return statearr_36800;
})();
var statearr_36801_36824 = state_36775__$1;
(statearr_36801_36824[(2)] = null);

(statearr_36801_36824[(1)] = (2));


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
});})(c__33728__auto___36807,out))
;
return ((function (switch__33334__auto__,c__33728__auto___36807,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_36802 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36802[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_36802[(1)] = (1));

return statearr_36802;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_36775){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_36775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e36803){if((e36803 instanceof Object)){
var ex__33338__auto__ = e36803;
var statearr_36804_36833 = state_36775;
(statearr_36804_36833[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36834 = state_36775;
state_36775 = G__36834;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_36775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_36775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___36807,out))
})();
var state__33730__auto__ = (function (){var statearr_36805 = f__33729__auto__.call(null);
(statearr_36805[(6)] = c__33728__auto___36807);

return statearr_36805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___36807,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36840 = arguments.length;
switch (G__36840) {
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
var c__33728__auto___36918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___36918,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___36918,out){
return (function (state_36878){
var state_val_36879 = (state_36878[(1)]);
if((state_val_36879 === (7))){
var inst_36874 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36880_36922 = state_36878__$1;
(statearr_36880_36922[(2)] = inst_36874);

(statearr_36880_36922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (1))){
var inst_36841 = (new Array(n));
var inst_36842 = inst_36841;
var inst_36843 = (0);
var state_36878__$1 = (function (){var statearr_36886 = state_36878;
(statearr_36886[(7)] = inst_36842);

(statearr_36886[(8)] = inst_36843);

return statearr_36886;
})();
var statearr_36887_36923 = state_36878__$1;
(statearr_36887_36923[(2)] = null);

(statearr_36887_36923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (4))){
var inst_36846 = (state_36878[(9)]);
var inst_36846__$1 = (state_36878[(2)]);
var inst_36847 = (inst_36846__$1 == null);
var inst_36848 = cljs.core.not.call(null,inst_36847);
var state_36878__$1 = (function (){var statearr_36888 = state_36878;
(statearr_36888[(9)] = inst_36846__$1);

return statearr_36888;
})();
if(inst_36848){
var statearr_36889_36925 = state_36878__$1;
(statearr_36889_36925[(1)] = (5));

} else {
var statearr_36890_36928 = state_36878__$1;
(statearr_36890_36928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (15))){
var inst_36868 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36891_36941 = state_36878__$1;
(statearr_36891_36941[(2)] = inst_36868);

(statearr_36891_36941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (13))){
var state_36878__$1 = state_36878;
var statearr_36892_36960 = state_36878__$1;
(statearr_36892_36960[(2)] = null);

(statearr_36892_36960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (6))){
var inst_36843 = (state_36878[(8)]);
var inst_36864 = (inst_36843 > (0));
var state_36878__$1 = state_36878;
if(cljs.core.truth_(inst_36864)){
var statearr_36893_36961 = state_36878__$1;
(statearr_36893_36961[(1)] = (12));

} else {
var statearr_36894_36963 = state_36878__$1;
(statearr_36894_36963[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (3))){
var inst_36876 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36878__$1,inst_36876);
} else {
if((state_val_36879 === (12))){
var inst_36842 = (state_36878[(7)]);
var inst_36866 = cljs.core.vec.call(null,inst_36842);
var state_36878__$1 = state_36878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36878__$1,(15),out,inst_36866);
} else {
if((state_val_36879 === (2))){
var state_36878__$1 = state_36878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36878__$1,(4),ch);
} else {
if((state_val_36879 === (11))){
var inst_36858 = (state_36878[(2)]);
var inst_36859 = (new Array(n));
var inst_36842 = inst_36859;
var inst_36843 = (0);
var state_36878__$1 = (function (){var statearr_36898 = state_36878;
(statearr_36898[(7)] = inst_36842);

(statearr_36898[(8)] = inst_36843);

(statearr_36898[(10)] = inst_36858);

return statearr_36898;
})();
var statearr_36899_36975 = state_36878__$1;
(statearr_36899_36975[(2)] = null);

(statearr_36899_36975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (9))){
var inst_36842 = (state_36878[(7)]);
var inst_36856 = cljs.core.vec.call(null,inst_36842);
var state_36878__$1 = state_36878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36878__$1,(11),out,inst_36856);
} else {
if((state_val_36879 === (5))){
var inst_36842 = (state_36878[(7)]);
var inst_36843 = (state_36878[(8)]);
var inst_36851 = (state_36878[(11)]);
var inst_36846 = (state_36878[(9)]);
var inst_36850 = (inst_36842[inst_36843] = inst_36846);
var inst_36851__$1 = (inst_36843 + (1));
var inst_36852 = (inst_36851__$1 < n);
var state_36878__$1 = (function (){var statearr_36902 = state_36878;
(statearr_36902[(11)] = inst_36851__$1);

(statearr_36902[(12)] = inst_36850);

return statearr_36902;
})();
if(cljs.core.truth_(inst_36852)){
var statearr_36903_36976 = state_36878__$1;
(statearr_36903_36976[(1)] = (8));

} else {
var statearr_36904_36977 = state_36878__$1;
(statearr_36904_36977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (14))){
var inst_36871 = (state_36878[(2)]);
var inst_36872 = cljs.core.async.close_BANG_.call(null,out);
var state_36878__$1 = (function (){var statearr_36906 = state_36878;
(statearr_36906[(13)] = inst_36871);

return statearr_36906;
})();
var statearr_36907_36978 = state_36878__$1;
(statearr_36907_36978[(2)] = inst_36872);

(statearr_36907_36978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (10))){
var inst_36862 = (state_36878[(2)]);
var state_36878__$1 = state_36878;
var statearr_36908_36979 = state_36878__$1;
(statearr_36908_36979[(2)] = inst_36862);

(statearr_36908_36979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36879 === (8))){
var inst_36842 = (state_36878[(7)]);
var inst_36851 = (state_36878[(11)]);
var tmp36905 = inst_36842;
var inst_36842__$1 = tmp36905;
var inst_36843 = inst_36851;
var state_36878__$1 = (function (){var statearr_36909 = state_36878;
(statearr_36909[(7)] = inst_36842__$1);

(statearr_36909[(8)] = inst_36843);

return statearr_36909;
})();
var statearr_36910_36980 = state_36878__$1;
(statearr_36910_36980[(2)] = null);

(statearr_36910_36980[(1)] = (2));


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
});})(c__33728__auto___36918,out))
;
return ((function (switch__33334__auto__,c__33728__auto___36918,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_36911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36911[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_36911[(1)] = (1));

return statearr_36911;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_36878){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_36878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e36912){if((e36912 instanceof Object)){
var ex__33338__auto__ = e36912;
var statearr_36913_36981 = state_36878;
(statearr_36913_36981[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36985 = state_36878;
state_36878 = G__36985;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_36878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_36878);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___36918,out))
})();
var state__33730__auto__ = (function (){var statearr_36914 = f__33729__auto__.call(null);
(statearr_36914[(6)] = c__33728__auto___36918);

return statearr_36914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___36918,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36987 = arguments.length;
switch (G__36987) {
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
var c__33728__auto___37082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___37082,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___37082,out){
return (function (state_37029){
var state_val_37030 = (state_37029[(1)]);
if((state_val_37030 === (7))){
var inst_37025 = (state_37029[(2)]);
var state_37029__$1 = state_37029;
var statearr_37031_37083 = state_37029__$1;
(statearr_37031_37083[(2)] = inst_37025);

(statearr_37031_37083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (1))){
var inst_36988 = [];
var inst_36989 = inst_36988;
var inst_36990 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37029__$1 = (function (){var statearr_37032 = state_37029;
(statearr_37032[(7)] = inst_36990);

(statearr_37032[(8)] = inst_36989);

return statearr_37032;
})();
var statearr_37033_37090 = state_37029__$1;
(statearr_37033_37090[(2)] = null);

(statearr_37033_37090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (4))){
var inst_36993 = (state_37029[(9)]);
var inst_36993__$1 = (state_37029[(2)]);
var inst_36994 = (inst_36993__$1 == null);
var inst_36995 = cljs.core.not.call(null,inst_36994);
var state_37029__$1 = (function (){var statearr_37034 = state_37029;
(statearr_37034[(9)] = inst_36993__$1);

return statearr_37034;
})();
if(inst_36995){
var statearr_37035_37091 = state_37029__$1;
(statearr_37035_37091[(1)] = (5));

} else {
var statearr_37036_37092 = state_37029__$1;
(statearr_37036_37092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (15))){
var inst_37019 = (state_37029[(2)]);
var state_37029__$1 = state_37029;
var statearr_37037_37093 = state_37029__$1;
(statearr_37037_37093[(2)] = inst_37019);

(statearr_37037_37093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (13))){
var state_37029__$1 = state_37029;
var statearr_37038_37097 = state_37029__$1;
(statearr_37038_37097[(2)] = null);

(statearr_37038_37097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (6))){
var inst_36989 = (state_37029[(8)]);
var inst_37014 = inst_36989.length;
var inst_37015 = (inst_37014 > (0));
var state_37029__$1 = state_37029;
if(cljs.core.truth_(inst_37015)){
var statearr_37039_37098 = state_37029__$1;
(statearr_37039_37098[(1)] = (12));

} else {
var statearr_37040_37099 = state_37029__$1;
(statearr_37040_37099[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (3))){
var inst_37027 = (state_37029[(2)]);
var state_37029__$1 = state_37029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37029__$1,inst_37027);
} else {
if((state_val_37030 === (12))){
var inst_36989 = (state_37029[(8)]);
var inst_37017 = cljs.core.vec.call(null,inst_36989);
var state_37029__$1 = state_37029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37029__$1,(15),out,inst_37017);
} else {
if((state_val_37030 === (2))){
var state_37029__$1 = state_37029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37029__$1,(4),ch);
} else {
if((state_val_37030 === (11))){
var inst_36997 = (state_37029[(10)]);
var inst_36993 = (state_37029[(9)]);
var inst_37007 = (state_37029[(2)]);
var inst_37008 = [];
var inst_37009 = inst_37008.push(inst_36993);
var inst_36989 = inst_37008;
var inst_36990 = inst_36997;
var state_37029__$1 = (function (){var statearr_37054 = state_37029;
(statearr_37054[(11)] = inst_37009);

(statearr_37054[(7)] = inst_36990);

(statearr_37054[(8)] = inst_36989);

(statearr_37054[(12)] = inst_37007);

return statearr_37054;
})();
var statearr_37055_37100 = state_37029__$1;
(statearr_37055_37100[(2)] = null);

(statearr_37055_37100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (9))){
var inst_36989 = (state_37029[(8)]);
var inst_37005 = cljs.core.vec.call(null,inst_36989);
var state_37029__$1 = state_37029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37029__$1,(11),out,inst_37005);
} else {
if((state_val_37030 === (5))){
var inst_36997 = (state_37029[(10)]);
var inst_36993 = (state_37029[(9)]);
var inst_36990 = (state_37029[(7)]);
var inst_36997__$1 = f.call(null,inst_36993);
var inst_36998 = cljs.core._EQ_.call(null,inst_36997__$1,inst_36990);
var inst_36999 = cljs.core.keyword_identical_QMARK_.call(null,inst_36990,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37000 = (inst_36998) || (inst_36999);
var state_37029__$1 = (function (){var statearr_37056 = state_37029;
(statearr_37056[(10)] = inst_36997__$1);

return statearr_37056;
})();
if(cljs.core.truth_(inst_37000)){
var statearr_37057_37101 = state_37029__$1;
(statearr_37057_37101[(1)] = (8));

} else {
var statearr_37058_37105 = state_37029__$1;
(statearr_37058_37105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (14))){
var inst_37022 = (state_37029[(2)]);
var inst_37023 = cljs.core.async.close_BANG_.call(null,out);
var state_37029__$1 = (function (){var statearr_37060 = state_37029;
(statearr_37060[(13)] = inst_37022);

return statearr_37060;
})();
var statearr_37061_37106 = state_37029__$1;
(statearr_37061_37106[(2)] = inst_37023);

(statearr_37061_37106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (10))){
var inst_37012 = (state_37029[(2)]);
var state_37029__$1 = state_37029;
var statearr_37064_37107 = state_37029__$1;
(statearr_37064_37107[(2)] = inst_37012);

(statearr_37064_37107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (8))){
var inst_36997 = (state_37029[(10)]);
var inst_36993 = (state_37029[(9)]);
var inst_36989 = (state_37029[(8)]);
var inst_37002 = inst_36989.push(inst_36993);
var tmp37059 = inst_36989;
var inst_36989__$1 = tmp37059;
var inst_36990 = inst_36997;
var state_37029__$1 = (function (){var statearr_37065 = state_37029;
(statearr_37065[(14)] = inst_37002);

(statearr_37065[(7)] = inst_36990);

(statearr_37065[(8)] = inst_36989__$1);

return statearr_37065;
})();
var statearr_37066_37108 = state_37029__$1;
(statearr_37066_37108[(2)] = null);

(statearr_37066_37108[(1)] = (2));


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
});})(c__33728__auto___37082,out))
;
return ((function (switch__33334__auto__,c__33728__auto___37082,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_37070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37070[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_37070[(1)] = (1));

return statearr_37070;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_37029){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_37029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e37075){if((e37075 instanceof Object)){
var ex__33338__auto__ = e37075;
var statearr_37079_37109 = state_37029;
(statearr_37079_37109[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37110 = state_37029;
state_37029 = G__37110;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_37029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_37029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___37082,out))
})();
var state__33730__auto__ = (function (){var statearr_37080 = f__33729__auto__.call(null);
(statearr_37080[(6)] = c__33728__auto___37082);

return statearr_37080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___37082,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510143299220
