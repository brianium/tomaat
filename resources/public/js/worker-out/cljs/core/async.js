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
var G__40591 = arguments.length;
switch (G__40591) {
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
if(typeof cljs.core.async.t_cljs$core$async40597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40597 = (function (f,blockable,meta40598){
this.f = f;
this.blockable = blockable;
this.meta40598 = meta40598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40599,meta40598__$1){
var self__ = this;
var _40599__$1 = this;
return (new cljs.core.async.t_cljs$core$async40597(self__.f,self__.blockable,meta40598__$1));
});

cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40599){
var self__ = this;
var _40599__$1 = this;
return self__.meta40598;
});

cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40598","meta40598",1163015453,null)], null);
});

cljs.core.async.t_cljs$core$async40597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40597";

cljs.core.async.t_cljs$core$async40597.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async40597");
});

cljs.core.async.__GT_t_cljs$core$async40597 = (function cljs$core$async$__GT_t_cljs$core$async40597(f__$1,blockable__$1,meta40598){
return (new cljs.core.async.t_cljs$core$async40597(f__$1,blockable__$1,meta40598));
});

}

return (new cljs.core.async.t_cljs$core$async40597(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40621 = arguments.length;
switch (G__40621) {
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
var G__40629 = arguments.length;
switch (G__40629) {
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
var G__40637 = arguments.length;
switch (G__40637) {
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
var val_40652 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40652);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40652,ret){
return (function (){
return fn1.call(null,val_40652);
});})(val_40652,ret))
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
var G__40661 = arguments.length;
switch (G__40661) {
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
var n__31115__auto___40678 = n;
var x_40679 = (0);
while(true){
if((x_40679 < n__31115__auto___40678)){
(a[x_40679] = (0));

var G__40680 = (x_40679 + (1));
x_40679 = G__40680;
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

var G__40682 = (i + (1));
i = G__40682;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40683 = (function (flag,meta40684){
this.flag = flag;
this.meta40684 = meta40684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40685,meta40684__$1){
var self__ = this;
var _40685__$1 = this;
return (new cljs.core.async.t_cljs$core$async40683(self__.flag,meta40684__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40685){
var self__ = this;
var _40685__$1 = this;
return self__.meta40684;
});})(flag))
;

cljs.core.async.t_cljs$core$async40683.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40683.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40683.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40684","meta40684",-2146325746,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40683";

cljs.core.async.t_cljs$core$async40683.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async40683");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40683 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40683(flag__$1,meta40684){
return (new cljs.core.async.t_cljs$core$async40683(flag__$1,meta40684));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40683(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40692 = (function (flag,cb,meta40693){
this.flag = flag;
this.cb = cb;
this.meta40693 = meta40693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40694,meta40693__$1){
var self__ = this;
var _40694__$1 = this;
return (new cljs.core.async.t_cljs$core$async40692(self__.flag,self__.cb,meta40693__$1));
});

cljs.core.async.t_cljs$core$async40692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40694){
var self__ = this;
var _40694__$1 = this;
return self__.meta40693;
});

cljs.core.async.t_cljs$core$async40692.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40693","meta40693",-1764942502,null)], null);
});

cljs.core.async.t_cljs$core$async40692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40692";

cljs.core.async.t_cljs$core$async40692.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async40692");
});

cljs.core.async.__GT_t_cljs$core$async40692 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40692(flag__$1,cb__$1,meta40693){
return (new cljs.core.async.t_cljs$core$async40692(flag__$1,cb__$1,meta40693));
});

}

return (new cljs.core.async.t_cljs$core$async40692(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40721_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40721_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40722_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40722_SHARP_,port], null));
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
var G__40751 = (i + (1));
i = G__40751;
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
var len__31349__auto___40761 = arguments.length;
var i__31350__auto___40762 = (0);
while(true){
if((i__31350__auto___40762 < len__31349__auto___40761)){
args__31356__auto__.push((arguments[i__31350__auto___40762]));

var G__40763 = (i__31350__auto___40762 + (1));
i__31350__auto___40762 = G__40763;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40757){
var map__40758 = p__40757;
var map__40758__$1 = ((((!((map__40758 == null)))?((((map__40758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40758):map__40758);
var opts = map__40758__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40755){
var G__40756 = cljs.core.first.call(null,seq40755);
var seq40755__$1 = cljs.core.next.call(null,seq40755);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40756,seq40755__$1);
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
var G__40776 = arguments.length;
switch (G__40776) {
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
var c__33952__auto___40828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___40828){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___40828){
return (function (state_40800){
var state_val_40801 = (state_40800[(1)]);
if((state_val_40801 === (7))){
var inst_40796 = (state_40800[(2)]);
var state_40800__$1 = state_40800;
var statearr_40802_40830 = state_40800__$1;
(statearr_40802_40830[(2)] = inst_40796);

(statearr_40802_40830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (1))){
var state_40800__$1 = state_40800;
var statearr_40803_40831 = state_40800__$1;
(statearr_40803_40831[(2)] = null);

(statearr_40803_40831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (4))){
var inst_40779 = (state_40800[(7)]);
var inst_40779__$1 = (state_40800[(2)]);
var inst_40780 = (inst_40779__$1 == null);
var state_40800__$1 = (function (){var statearr_40804 = state_40800;
(statearr_40804[(7)] = inst_40779__$1);

return statearr_40804;
})();
if(cljs.core.truth_(inst_40780)){
var statearr_40805_40832 = state_40800__$1;
(statearr_40805_40832[(1)] = (5));

} else {
var statearr_40806_40833 = state_40800__$1;
(statearr_40806_40833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (13))){
var state_40800__$1 = state_40800;
var statearr_40807_40834 = state_40800__$1;
(statearr_40807_40834[(2)] = null);

(statearr_40807_40834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (6))){
var inst_40779 = (state_40800[(7)]);
var state_40800__$1 = state_40800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40800__$1,(11),to,inst_40779);
} else {
if((state_val_40801 === (3))){
var inst_40798 = (state_40800[(2)]);
var state_40800__$1 = state_40800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40800__$1,inst_40798);
} else {
if((state_val_40801 === (12))){
var state_40800__$1 = state_40800;
var statearr_40808_40836 = state_40800__$1;
(statearr_40808_40836[(2)] = null);

(statearr_40808_40836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (2))){
var state_40800__$1 = state_40800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40800__$1,(4),from);
} else {
if((state_val_40801 === (11))){
var inst_40789 = (state_40800[(2)]);
var state_40800__$1 = state_40800;
if(cljs.core.truth_(inst_40789)){
var statearr_40810_40838 = state_40800__$1;
(statearr_40810_40838[(1)] = (12));

} else {
var statearr_40811_40839 = state_40800__$1;
(statearr_40811_40839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (9))){
var state_40800__$1 = state_40800;
var statearr_40812_40840 = state_40800__$1;
(statearr_40812_40840[(2)] = null);

(statearr_40812_40840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (5))){
var state_40800__$1 = state_40800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40813_40841 = state_40800__$1;
(statearr_40813_40841[(1)] = (8));

} else {
var statearr_40814_40842 = state_40800__$1;
(statearr_40814_40842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (14))){
var inst_40794 = (state_40800[(2)]);
var state_40800__$1 = state_40800;
var statearr_40815_40843 = state_40800__$1;
(statearr_40815_40843[(2)] = inst_40794);

(statearr_40815_40843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (10))){
var inst_40786 = (state_40800[(2)]);
var state_40800__$1 = state_40800;
var statearr_40816_40844 = state_40800__$1;
(statearr_40816_40844[(2)] = inst_40786);

(statearr_40816_40844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40801 === (8))){
var inst_40783 = cljs.core.async.close_BANG_.call(null,to);
var state_40800__$1 = state_40800;
var statearr_40817_40845 = state_40800__$1;
(statearr_40817_40845[(2)] = inst_40783);

(statearr_40817_40845[(1)] = (10));


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
});})(c__33952__auto___40828))
;
return ((function (switch__33607__auto__,c__33952__auto___40828){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_40818 = [null,null,null,null,null,null,null,null];
(statearr_40818[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_40818[(1)] = (1));

return statearr_40818;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_40800){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_40800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e40820){if((e40820 instanceof Object)){
var ex__33611__auto__ = e40820;
var statearr_40821_40848 = state_40800;
(statearr_40821_40848[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40852 = state_40800;
state_40800 = G__40852;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_40800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_40800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___40828))
})();
var state__33954__auto__ = (function (){var statearr_40822 = f__33953__auto__.call(null);
(statearr_40822[(6)] = c__33952__auto___40828);

return statearr_40822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___40828))
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
return (function (p__40858){
var vec__40859 = p__40858;
var v = cljs.core.nth.call(null,vec__40859,(0),null);
var p = cljs.core.nth.call(null,vec__40859,(1),null);
var job = vec__40859;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33952__auto___41066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___41066,res,vec__40859,v,p,job,jobs,results){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___41066,res,vec__40859,v,p,job,jobs,results){
return (function (state_40869){
var state_val_40870 = (state_40869[(1)]);
if((state_val_40870 === (1))){
var state_40869__$1 = state_40869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40869__$1,(2),res,v);
} else {
if((state_val_40870 === (2))){
var inst_40866 = (state_40869[(2)]);
var inst_40867 = cljs.core.async.close_BANG_.call(null,res);
var state_40869__$1 = (function (){var statearr_40871 = state_40869;
(statearr_40871[(7)] = inst_40866);

return statearr_40871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40869__$1,inst_40867);
} else {
return null;
}
}
});})(c__33952__auto___41066,res,vec__40859,v,p,job,jobs,results))
;
return ((function (switch__33607__auto__,c__33952__auto___41066,res,vec__40859,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_40872 = [null,null,null,null,null,null,null,null];
(statearr_40872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_40872[(1)] = (1));

return statearr_40872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_40869){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_40869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e40873){if((e40873 instanceof Object)){
var ex__33611__auto__ = e40873;
var statearr_40874_41073 = state_40869;
(statearr_40874_41073[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41074 = state_40869;
state_40869 = G__41074;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_40869){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_40869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___41066,res,vec__40859,v,p,job,jobs,results))
})();
var state__33954__auto__ = (function (){var statearr_40876 = f__33953__auto__.call(null);
(statearr_40876[(6)] = c__33952__auto___41066);

return statearr_40876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___41066,res,vec__40859,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40878){
var vec__40879 = p__40878;
var v = cljs.core.nth.call(null,vec__40879,(0),null);
var p = cljs.core.nth.call(null,vec__40879,(1),null);
var job = vec__40879;
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
var n__31115__auto___41075 = n;
var __41076 = (0);
while(true){
if((__41076 < n__31115__auto___41075)){
var G__40882_41077 = type;
var G__40882_41078__$1 = (((G__40882_41077 instanceof cljs.core.Keyword))?G__40882_41077.fqn:null);
switch (G__40882_41078__$1) {
case "compute":
var c__33952__auto___41080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41076,c__33952__auto___41080,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (__41076,c__33952__auto___41080,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async){
return (function (state_40897){
var state_val_40898 = (state_40897[(1)]);
if((state_val_40898 === (1))){
var state_40897__$1 = state_40897;
var statearr_40899_41082 = state_40897__$1;
(statearr_40899_41082[(2)] = null);

(statearr_40899_41082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40898 === (2))){
var state_40897__$1 = state_40897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40897__$1,(4),jobs);
} else {
if((state_val_40898 === (3))){
var inst_40895 = (state_40897[(2)]);
var state_40897__$1 = state_40897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40897__$1,inst_40895);
} else {
if((state_val_40898 === (4))){
var inst_40885 = (state_40897[(2)]);
var inst_40886 = process.call(null,inst_40885);
var state_40897__$1 = state_40897;
if(cljs.core.truth_(inst_40886)){
var statearr_40900_41084 = state_40897__$1;
(statearr_40900_41084[(1)] = (5));

} else {
var statearr_40901_41085 = state_40897__$1;
(statearr_40901_41085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40898 === (5))){
var state_40897__$1 = state_40897;
var statearr_40902_41086 = state_40897__$1;
(statearr_40902_41086[(2)] = null);

(statearr_40902_41086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40898 === (6))){
var state_40897__$1 = state_40897;
var statearr_40903_41089 = state_40897__$1;
(statearr_40903_41089[(2)] = null);

(statearr_40903_41089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40898 === (7))){
var inst_40893 = (state_40897[(2)]);
var state_40897__$1 = state_40897;
var statearr_40906_41091 = state_40897__$1;
(statearr_40906_41091[(2)] = inst_40893);

(statearr_40906_41091[(1)] = (3));


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
});})(__41076,c__33952__auto___41080,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async))
;
return ((function (__41076,switch__33607__auto__,c__33952__auto___41080,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_40907 = [null,null,null,null,null,null,null];
(statearr_40907[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_40907[(1)] = (1));

return statearr_40907;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_40897){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_40897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e40908){if((e40908 instanceof Object)){
var ex__33611__auto__ = e40908;
var statearr_40909_41093 = state_40897;
(statearr_40909_41093[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41094 = state_40897;
state_40897 = G__41094;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_40897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_40897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(__41076,switch__33607__auto__,c__33952__auto___41080,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_40910 = f__33953__auto__.call(null);
(statearr_40910[(6)] = c__33952__auto___41080);

return statearr_40910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(__41076,c__33952__auto___41080,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async))
);


break;
case "async":
var c__33952__auto___41095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41076,c__33952__auto___41095,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (__41076,c__33952__auto___41095,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async){
return (function (state_40923){
var state_val_40924 = (state_40923[(1)]);
if((state_val_40924 === (1))){
var state_40923__$1 = state_40923;
var statearr_40925_41099 = state_40923__$1;
(statearr_40925_41099[(2)] = null);

(statearr_40925_41099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40924 === (2))){
var state_40923__$1 = state_40923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40923__$1,(4),jobs);
} else {
if((state_val_40924 === (3))){
var inst_40921 = (state_40923[(2)]);
var state_40923__$1 = state_40923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40923__$1,inst_40921);
} else {
if((state_val_40924 === (4))){
var inst_40913 = (state_40923[(2)]);
var inst_40914 = async.call(null,inst_40913);
var state_40923__$1 = state_40923;
if(cljs.core.truth_(inst_40914)){
var statearr_40926_41105 = state_40923__$1;
(statearr_40926_41105[(1)] = (5));

} else {
var statearr_40927_41106 = state_40923__$1;
(statearr_40927_41106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40924 === (5))){
var state_40923__$1 = state_40923;
var statearr_40928_41107 = state_40923__$1;
(statearr_40928_41107[(2)] = null);

(statearr_40928_41107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40924 === (6))){
var state_40923__$1 = state_40923;
var statearr_40929_41111 = state_40923__$1;
(statearr_40929_41111[(2)] = null);

(statearr_40929_41111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40924 === (7))){
var inst_40919 = (state_40923[(2)]);
var state_40923__$1 = state_40923;
var statearr_40930_41112 = state_40923__$1;
(statearr_40930_41112[(2)] = inst_40919);

(statearr_40930_41112[(1)] = (3));


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
});})(__41076,c__33952__auto___41095,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async))
;
return ((function (__41076,switch__33607__auto__,c__33952__auto___41095,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_40931 = [null,null,null,null,null,null,null];
(statearr_40931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_40931[(1)] = (1));

return statearr_40931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_40923){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_40923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e40936){if((e40936 instanceof Object)){
var ex__33611__auto__ = e40936;
var statearr_40937_41116 = state_40923;
(statearr_40937_41116[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41118 = state_40923;
state_40923 = G__41118;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_40923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_40923);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(__41076,switch__33607__auto__,c__33952__auto___41095,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_40939 = f__33953__auto__.call(null);
(statearr_40939[(6)] = c__33952__auto___41095);

return statearr_40939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(__41076,c__33952__auto___41095,G__40882_41077,G__40882_41078__$1,n__31115__auto___41075,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40882_41078__$1)].join('')));

}

var G__41119 = (__41076 + (1));
__41076 = G__41119;
continue;
} else {
}
break;
}

var c__33952__auto___41120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___41120,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___41120,jobs,results,process,async){
return (function (state_40962){
var state_val_40963 = (state_40962[(1)]);
if((state_val_40963 === (1))){
var state_40962__$1 = state_40962;
var statearr_40964_41122 = state_40962__$1;
(statearr_40964_41122[(2)] = null);

(statearr_40964_41122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (2))){
var state_40962__$1 = state_40962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40962__$1,(4),from);
} else {
if((state_val_40963 === (3))){
var inst_40960 = (state_40962[(2)]);
var state_40962__$1 = state_40962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40962__$1,inst_40960);
} else {
if((state_val_40963 === (4))){
var inst_40942 = (state_40962[(7)]);
var inst_40942__$1 = (state_40962[(2)]);
var inst_40943 = (inst_40942__$1 == null);
var state_40962__$1 = (function (){var statearr_40965 = state_40962;
(statearr_40965[(7)] = inst_40942__$1);

return statearr_40965;
})();
if(cljs.core.truth_(inst_40943)){
var statearr_40966_41124 = state_40962__$1;
(statearr_40966_41124[(1)] = (5));

} else {
var statearr_40967_41125 = state_40962__$1;
(statearr_40967_41125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (5))){
var inst_40945 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40962__$1 = state_40962;
var statearr_40968_41126 = state_40962__$1;
(statearr_40968_41126[(2)] = inst_40945);

(statearr_40968_41126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (6))){
var inst_40942 = (state_40962[(7)]);
var inst_40947 = (state_40962[(8)]);
var inst_40947__$1 = cljs.core.async.chan.call(null,(1));
var inst_40949 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40950 = [inst_40942,inst_40947__$1];
var inst_40951 = (new cljs.core.PersistentVector(null,2,(5),inst_40949,inst_40950,null));
var state_40962__$1 = (function (){var statearr_40969 = state_40962;
(statearr_40969[(8)] = inst_40947__$1);

return statearr_40969;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40962__$1,(8),jobs,inst_40951);
} else {
if((state_val_40963 === (7))){
var inst_40958 = (state_40962[(2)]);
var state_40962__$1 = state_40962;
var statearr_40970_41133 = state_40962__$1;
(statearr_40970_41133[(2)] = inst_40958);

(statearr_40970_41133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (8))){
var inst_40947 = (state_40962[(8)]);
var inst_40953 = (state_40962[(2)]);
var state_40962__$1 = (function (){var statearr_40971 = state_40962;
(statearr_40971[(9)] = inst_40953);

return statearr_40971;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40962__$1,(9),results,inst_40947);
} else {
if((state_val_40963 === (9))){
var inst_40955 = (state_40962[(2)]);
var state_40962__$1 = (function (){var statearr_40972 = state_40962;
(statearr_40972[(10)] = inst_40955);

return statearr_40972;
})();
var statearr_40973_41134 = state_40962__$1;
(statearr_40973_41134[(2)] = null);

(statearr_40973_41134[(1)] = (2));


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
});})(c__33952__auto___41120,jobs,results,process,async))
;
return ((function (switch__33607__auto__,c__33952__auto___41120,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0 = (function (){
var statearr_40974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_40974[(1)] = (1));

return statearr_40974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_40962){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_40962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e40975){if((e40975 instanceof Object)){
var ex__33611__auto__ = e40975;
var statearr_40976_41135 = state_40962;
(statearr_40976_41135[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41136 = state_40962;
state_40962 = G__41136;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_40962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_40962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___41120,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_40977 = f__33953__auto__.call(null);
(statearr_40977[(6)] = c__33952__auto___41120);

return statearr_40977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___41120,jobs,results,process,async))
);


var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__,jobs,results,process,async){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__,jobs,results,process,async){
return (function (state_41018){
var state_val_41019 = (state_41018[(1)]);
if((state_val_41019 === (7))){
var inst_41014 = (state_41018[(2)]);
var state_41018__$1 = state_41018;
var statearr_41020_41137 = state_41018__$1;
(statearr_41020_41137[(2)] = inst_41014);

(statearr_41020_41137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (20))){
var state_41018__$1 = state_41018;
var statearr_41021_41141 = state_41018__$1;
(statearr_41021_41141[(2)] = null);

(statearr_41021_41141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (1))){
var state_41018__$1 = state_41018;
var statearr_41025_41145 = state_41018__$1;
(statearr_41025_41145[(2)] = null);

(statearr_41025_41145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (4))){
var inst_40980 = (state_41018[(7)]);
var inst_40980__$1 = (state_41018[(2)]);
var inst_40981 = (inst_40980__$1 == null);
var state_41018__$1 = (function (){var statearr_41028 = state_41018;
(statearr_41028[(7)] = inst_40980__$1);

return statearr_41028;
})();
if(cljs.core.truth_(inst_40981)){
var statearr_41029_41147 = state_41018__$1;
(statearr_41029_41147[(1)] = (5));

} else {
var statearr_41030_41149 = state_41018__$1;
(statearr_41030_41149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (15))){
var inst_40993 = (state_41018[(8)]);
var state_41018__$1 = state_41018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41018__$1,(18),to,inst_40993);
} else {
if((state_val_41019 === (21))){
var inst_41009 = (state_41018[(2)]);
var state_41018__$1 = state_41018;
var statearr_41031_41153 = state_41018__$1;
(statearr_41031_41153[(2)] = inst_41009);

(statearr_41031_41153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (13))){
var inst_41011 = (state_41018[(2)]);
var state_41018__$1 = (function (){var statearr_41032 = state_41018;
(statearr_41032[(9)] = inst_41011);

return statearr_41032;
})();
var statearr_41033_41156 = state_41018__$1;
(statearr_41033_41156[(2)] = null);

(statearr_41033_41156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (6))){
var inst_40980 = (state_41018[(7)]);
var state_41018__$1 = state_41018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41018__$1,(11),inst_40980);
} else {
if((state_val_41019 === (17))){
var inst_41004 = (state_41018[(2)]);
var state_41018__$1 = state_41018;
if(cljs.core.truth_(inst_41004)){
var statearr_41040_41157 = state_41018__$1;
(statearr_41040_41157[(1)] = (19));

} else {
var statearr_41041_41158 = state_41018__$1;
(statearr_41041_41158[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (3))){
var inst_41016 = (state_41018[(2)]);
var state_41018__$1 = state_41018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41018__$1,inst_41016);
} else {
if((state_val_41019 === (12))){
var inst_40990 = (state_41018[(10)]);
var state_41018__$1 = state_41018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41018__$1,(14),inst_40990);
} else {
if((state_val_41019 === (2))){
var state_41018__$1 = state_41018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41018__$1,(4),results);
} else {
if((state_val_41019 === (19))){
var state_41018__$1 = state_41018;
var statearr_41042_41160 = state_41018__$1;
(statearr_41042_41160[(2)] = null);

(statearr_41042_41160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (11))){
var inst_40990 = (state_41018[(2)]);
var state_41018__$1 = (function (){var statearr_41043 = state_41018;
(statearr_41043[(10)] = inst_40990);

return statearr_41043;
})();
var statearr_41044_41161 = state_41018__$1;
(statearr_41044_41161[(2)] = null);

(statearr_41044_41161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (9))){
var state_41018__$1 = state_41018;
var statearr_41045_41162 = state_41018__$1;
(statearr_41045_41162[(2)] = null);

(statearr_41045_41162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (5))){
var state_41018__$1 = state_41018;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41046_41163 = state_41018__$1;
(statearr_41046_41163[(1)] = (8));

} else {
var statearr_41047_41164 = state_41018__$1;
(statearr_41047_41164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (14))){
var inst_40993 = (state_41018[(8)]);
var inst_40998 = (state_41018[(11)]);
var inst_40993__$1 = (state_41018[(2)]);
var inst_40997 = (inst_40993__$1 == null);
var inst_40998__$1 = cljs.core.not.call(null,inst_40997);
var state_41018__$1 = (function (){var statearr_41048 = state_41018;
(statearr_41048[(8)] = inst_40993__$1);

(statearr_41048[(11)] = inst_40998__$1);

return statearr_41048;
})();
if(inst_40998__$1){
var statearr_41049_41165 = state_41018__$1;
(statearr_41049_41165[(1)] = (15));

} else {
var statearr_41050_41166 = state_41018__$1;
(statearr_41050_41166[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (16))){
var inst_40998 = (state_41018[(11)]);
var state_41018__$1 = state_41018;
var statearr_41051_41167 = state_41018__$1;
(statearr_41051_41167[(2)] = inst_40998);

(statearr_41051_41167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (10))){
var inst_40987 = (state_41018[(2)]);
var state_41018__$1 = state_41018;
var statearr_41052_41168 = state_41018__$1;
(statearr_41052_41168[(2)] = inst_40987);

(statearr_41052_41168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (18))){
var inst_41001 = (state_41018[(2)]);
var state_41018__$1 = state_41018;
var statearr_41053_41169 = state_41018__$1;
(statearr_41053_41169[(2)] = inst_41001);

(statearr_41053_41169[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (8))){
var inst_40984 = cljs.core.async.close_BANG_.call(null,to);
var state_41018__$1 = state_41018;
var statearr_41060_41176 = state_41018__$1;
(statearr_41060_41176[(2)] = inst_40984);

(statearr_41060_41176[(1)] = (10));


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
var statearr_41061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__);

(statearr_41061[(1)] = (1));

return statearr_41061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1 = (function (state_41018){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_41018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e41062){if((e41062 instanceof Object)){
var ex__33611__auto__ = e41062;
var statearr_41063_41177 = state_41018;
(statearr_41063_41177[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41178 = state_41018;
state_41018 = G__41178;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__ = function(state_41018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1.call(this,state_41018);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,jobs,results,process,async))
})();
var state__33954__auto__ = (function (){var statearr_41065 = f__33953__auto__.call(null);
(statearr_41065[(6)] = c__33952__auto__);

return statearr_41065;
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
var G__41180 = arguments.length;
switch (G__41180) {
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
var G__41184 = arguments.length;
switch (G__41184) {
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
var G__41194 = arguments.length;
switch (G__41194) {
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
var c__33952__auto___41253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___41253,tc,fc){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___41253,tc,fc){
return (function (state_41221){
var state_val_41222 = (state_41221[(1)]);
if((state_val_41222 === (7))){
var inst_41217 = (state_41221[(2)]);
var state_41221__$1 = state_41221;
var statearr_41223_41254 = state_41221__$1;
(statearr_41223_41254[(2)] = inst_41217);

(statearr_41223_41254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41222 === (1))){
var state_41221__$1 = state_41221;
var statearr_41224_41255 = state_41221__$1;
(statearr_41224_41255[(2)] = null);

(statearr_41224_41255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41222 === (4))){
var inst_41198 = (state_41221[(7)]);
var inst_41198__$1 = (state_41221[(2)]);
var inst_41199 = (inst_41198__$1 == null);
var state_41221__$1 = (function (){var statearr_41225 = state_41221;
(statearr_41225[(7)] = inst_41198__$1);

return statearr_41225;
})();
if(cljs.core.truth_(inst_41199)){
var statearr_41226_41257 = state_41221__$1;
(statearr_41226_41257[(1)] = (5));

} else {
var statearr_41227_41258 = state_41221__$1;
(statearr_41227_41258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41222 === (13))){
var state_41221__$1 = state_41221;
var statearr_41228_41259 = state_41221__$1;
(statearr_41228_41259[(2)] = null);

(statearr_41228_41259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41222 === (6))){
var inst_41198 = (state_41221[(7)]);
var inst_41204 = p.call(null,inst_41198);
var state_41221__$1 = state_41221;
if(cljs.core.truth_(inst_41204)){
var statearr_41229_41260 = state_41221__$1;
(statearr_41229_41260[(1)] = (9));

} else {
var statearr_41230_41261 = state_41221__$1;
(statearr_41230_41261[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41222 === (3))){
var inst_41219 = (state_41221[(2)]);
var state_41221__$1 = state_41221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41221__$1,inst_41219);
} else {
if((state_val_41222 === (12))){
var state_41221__$1 = state_41221;
var statearr_41231_41262 = state_41221__$1;
(statearr_41231_41262[(2)] = null);

(statearr_41231_41262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41222 === (2))){
var state_41221__$1 = state_41221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41221__$1,(4),ch);
} else {
if((state_val_41222 === (11))){
var inst_41198 = (state_41221[(7)]);
var inst_41208 = (state_41221[(2)]);
var state_41221__$1 = state_41221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41221__$1,(8),inst_41208,inst_41198);
} else {
if((state_val_41222 === (9))){
var state_41221__$1 = state_41221;
var statearr_41233_41263 = state_41221__$1;
(statearr_41233_41263[(2)] = tc);

(statearr_41233_41263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41222 === (5))){
var inst_41201 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41202 = cljs.core.async.close_BANG_.call(null,fc);
var state_41221__$1 = (function (){var statearr_41234 = state_41221;
(statearr_41234[(8)] = inst_41201);

return statearr_41234;
})();
var statearr_41235_41264 = state_41221__$1;
(statearr_41235_41264[(2)] = inst_41202);

(statearr_41235_41264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41222 === (14))){
var inst_41215 = (state_41221[(2)]);
var state_41221__$1 = state_41221;
var statearr_41239_41267 = state_41221__$1;
(statearr_41239_41267[(2)] = inst_41215);

(statearr_41239_41267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41222 === (10))){
var state_41221__$1 = state_41221;
var statearr_41240_41268 = state_41221__$1;
(statearr_41240_41268[(2)] = fc);

(statearr_41240_41268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41222 === (8))){
var inst_41210 = (state_41221[(2)]);
var state_41221__$1 = state_41221;
if(cljs.core.truth_(inst_41210)){
var statearr_41243_41269 = state_41221__$1;
(statearr_41243_41269[(1)] = (12));

} else {
var statearr_41244_41270 = state_41221__$1;
(statearr_41244_41270[(1)] = (13));

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
});})(c__33952__auto___41253,tc,fc))
;
return ((function (switch__33607__auto__,c__33952__auto___41253,tc,fc){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_41247 = [null,null,null,null,null,null,null,null,null];
(statearr_41247[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_41247[(1)] = (1));

return statearr_41247;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_41221){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_41221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e41248){if((e41248 instanceof Object)){
var ex__33611__auto__ = e41248;
var statearr_41249_41271 = state_41221;
(statearr_41249_41271[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41274 = state_41221;
state_41221 = G__41274;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_41221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_41221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___41253,tc,fc))
})();
var state__33954__auto__ = (function (){var statearr_41250 = f__33953__auto__.call(null);
(statearr_41250[(6)] = c__33952__auto___41253);

return statearr_41250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___41253,tc,fc))
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
return (function (state_41295){
var state_val_41296 = (state_41295[(1)]);
if((state_val_41296 === (7))){
var inst_41291 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
var statearr_41297_41322 = state_41295__$1;
(statearr_41297_41322[(2)] = inst_41291);

(statearr_41297_41322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (1))){
var inst_41275 = init;
var state_41295__$1 = (function (){var statearr_41298 = state_41295;
(statearr_41298[(7)] = inst_41275);

return statearr_41298;
})();
var statearr_41299_41323 = state_41295__$1;
(statearr_41299_41323[(2)] = null);

(statearr_41299_41323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (4))){
var inst_41278 = (state_41295[(8)]);
var inst_41278__$1 = (state_41295[(2)]);
var inst_41279 = (inst_41278__$1 == null);
var state_41295__$1 = (function (){var statearr_41300 = state_41295;
(statearr_41300[(8)] = inst_41278__$1);

return statearr_41300;
})();
if(cljs.core.truth_(inst_41279)){
var statearr_41301_41324 = state_41295__$1;
(statearr_41301_41324[(1)] = (5));

} else {
var statearr_41302_41325 = state_41295__$1;
(statearr_41302_41325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (6))){
var inst_41282 = (state_41295[(9)]);
var inst_41278 = (state_41295[(8)]);
var inst_41275 = (state_41295[(7)]);
var inst_41282__$1 = f.call(null,inst_41275,inst_41278);
var inst_41283 = cljs.core.reduced_QMARK_.call(null,inst_41282__$1);
var state_41295__$1 = (function (){var statearr_41303 = state_41295;
(statearr_41303[(9)] = inst_41282__$1);

return statearr_41303;
})();
if(inst_41283){
var statearr_41304_41326 = state_41295__$1;
(statearr_41304_41326[(1)] = (8));

} else {
var statearr_41305_41327 = state_41295__$1;
(statearr_41305_41327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (3))){
var inst_41293 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41295__$1,inst_41293);
} else {
if((state_val_41296 === (2))){
var state_41295__$1 = state_41295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41295__$1,(4),ch);
} else {
if((state_val_41296 === (9))){
var inst_41282 = (state_41295[(9)]);
var inst_41275 = inst_41282;
var state_41295__$1 = (function (){var statearr_41306 = state_41295;
(statearr_41306[(7)] = inst_41275);

return statearr_41306;
})();
var statearr_41307_41328 = state_41295__$1;
(statearr_41307_41328[(2)] = null);

(statearr_41307_41328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (5))){
var inst_41275 = (state_41295[(7)]);
var state_41295__$1 = state_41295;
var statearr_41308_41331 = state_41295__$1;
(statearr_41308_41331[(2)] = inst_41275);

(statearr_41308_41331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (10))){
var inst_41289 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
var statearr_41309_41335 = state_41295__$1;
(statearr_41309_41335[(2)] = inst_41289);

(statearr_41309_41335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (8))){
var inst_41282 = (state_41295[(9)]);
var inst_41285 = cljs.core.deref.call(null,inst_41282);
var state_41295__$1 = state_41295;
var statearr_41310_41336 = state_41295__$1;
(statearr_41310_41336[(2)] = inst_41285);

(statearr_41310_41336[(1)] = (10));


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
var statearr_41311 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41311[(0)] = cljs$core$async$reduce_$_state_machine__33608__auto__);

(statearr_41311[(1)] = (1));

return statearr_41311;
});
var cljs$core$async$reduce_$_state_machine__33608__auto____1 = (function (state_41295){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_41295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e41312){if((e41312 instanceof Object)){
var ex__33611__auto__ = e41312;
var statearr_41313_41339 = state_41295;
(statearr_41313_41339[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41340 = state_41295;
state_41295 = G__41340;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33608__auto__ = function(state_41295){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33608__auto____1.call(this,state_41295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33608__auto____0;
cljs$core$async$reduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33608__auto____1;
return cljs$core$async$reduce_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_41319 = f__33953__auto__.call(null);
(statearr_41319[(6)] = c__33952__auto__);

return statearr_41319;
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
return (function (state_41346){
var state_val_41347 = (state_41346[(1)]);
if((state_val_41347 === (1))){
var inst_41341 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41346__$1 = state_41346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41346__$1,(2),inst_41341);
} else {
if((state_val_41347 === (2))){
var inst_41343 = (state_41346[(2)]);
var inst_41344 = f__$1.call(null,inst_41343);
var state_41346__$1 = state_41346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41346__$1,inst_41344);
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
var statearr_41351 = [null,null,null,null,null,null,null];
(statearr_41351[(0)] = cljs$core$async$transduce_$_state_machine__33608__auto__);

(statearr_41351[(1)] = (1));

return statearr_41351;
});
var cljs$core$async$transduce_$_state_machine__33608__auto____1 = (function (state_41346){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_41346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e41352){if((e41352 instanceof Object)){
var ex__33611__auto__ = e41352;
var statearr_41353_41355 = state_41346;
(statearr_41353_41355[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41356 = state_41346;
state_41346 = G__41356;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33608__auto__ = function(state_41346){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33608__auto____1.call(this,state_41346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33608__auto____0;
cljs$core$async$transduce_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33608__auto____1;
return cljs$core$async$transduce_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,f__$1))
})();
var state__33954__auto__ = (function (){var statearr_41354 = f__33953__auto__.call(null);
(statearr_41354[(6)] = c__33952__auto__);

return statearr_41354;
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
var G__41358 = arguments.length;
switch (G__41358) {
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
return (function (state_41383){
var state_val_41384 = (state_41383[(1)]);
if((state_val_41384 === (7))){
var inst_41365 = (state_41383[(2)]);
var state_41383__$1 = state_41383;
var statearr_41385_41412 = state_41383__$1;
(statearr_41385_41412[(2)] = inst_41365);

(statearr_41385_41412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (1))){
var inst_41359 = cljs.core.seq.call(null,coll);
var inst_41360 = inst_41359;
var state_41383__$1 = (function (){var statearr_41386 = state_41383;
(statearr_41386[(7)] = inst_41360);

return statearr_41386;
})();
var statearr_41387_41414 = state_41383__$1;
(statearr_41387_41414[(2)] = null);

(statearr_41387_41414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (4))){
var inst_41360 = (state_41383[(7)]);
var inst_41363 = cljs.core.first.call(null,inst_41360);
var state_41383__$1 = state_41383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41383__$1,(7),ch,inst_41363);
} else {
if((state_val_41384 === (13))){
var inst_41377 = (state_41383[(2)]);
var state_41383__$1 = state_41383;
var statearr_41388_41415 = state_41383__$1;
(statearr_41388_41415[(2)] = inst_41377);

(statearr_41388_41415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (6))){
var inst_41368 = (state_41383[(2)]);
var state_41383__$1 = state_41383;
if(cljs.core.truth_(inst_41368)){
var statearr_41389_41416 = state_41383__$1;
(statearr_41389_41416[(1)] = (8));

} else {
var statearr_41390_41417 = state_41383__$1;
(statearr_41390_41417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (3))){
var inst_41381 = (state_41383[(2)]);
var state_41383__$1 = state_41383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41383__$1,inst_41381);
} else {
if((state_val_41384 === (12))){
var state_41383__$1 = state_41383;
var statearr_41391_41418 = state_41383__$1;
(statearr_41391_41418[(2)] = null);

(statearr_41391_41418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (2))){
var inst_41360 = (state_41383[(7)]);
var state_41383__$1 = state_41383;
if(cljs.core.truth_(inst_41360)){
var statearr_41392_41419 = state_41383__$1;
(statearr_41392_41419[(1)] = (4));

} else {
var statearr_41393_41420 = state_41383__$1;
(statearr_41393_41420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (11))){
var inst_41374 = cljs.core.async.close_BANG_.call(null,ch);
var state_41383__$1 = state_41383;
var statearr_41394_41421 = state_41383__$1;
(statearr_41394_41421[(2)] = inst_41374);

(statearr_41394_41421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (9))){
var state_41383__$1 = state_41383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41396_41423 = state_41383__$1;
(statearr_41396_41423[(1)] = (11));

} else {
var statearr_41397_41424 = state_41383__$1;
(statearr_41397_41424[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (5))){
var inst_41360 = (state_41383[(7)]);
var state_41383__$1 = state_41383;
var statearr_41398_41428 = state_41383__$1;
(statearr_41398_41428[(2)] = inst_41360);

(statearr_41398_41428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (10))){
var inst_41379 = (state_41383[(2)]);
var state_41383__$1 = state_41383;
var statearr_41399_41429 = state_41383__$1;
(statearr_41399_41429[(2)] = inst_41379);

(statearr_41399_41429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (8))){
var inst_41360 = (state_41383[(7)]);
var inst_41370 = cljs.core.next.call(null,inst_41360);
var inst_41360__$1 = inst_41370;
var state_41383__$1 = (function (){var statearr_41400 = state_41383;
(statearr_41400[(7)] = inst_41360__$1);

return statearr_41400;
})();
var statearr_41401_41430 = state_41383__$1;
(statearr_41401_41430[(2)] = null);

(statearr_41401_41430[(1)] = (2));


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
var statearr_41402 = [null,null,null,null,null,null,null,null];
(statearr_41402[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_41402[(1)] = (1));

return statearr_41402;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_41383){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_41383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e41403){if((e41403 instanceof Object)){
var ex__33611__auto__ = e41403;
var statearr_41404_41433 = state_41383;
(statearr_41404_41433[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41434 = state_41383;
state_41383 = G__41434;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_41383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_41383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_41405 = f__33953__auto__.call(null);
(statearr_41405[(6)] = c__33952__auto__);

return statearr_41405;
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
if(typeof cljs.core.async.t_cljs$core$async41440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41440 = (function (ch,cs,meta41441){
this.ch = ch;
this.cs = cs;
this.meta41441 = meta41441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41442,meta41441__$1){
var self__ = this;
var _41442__$1 = this;
return (new cljs.core.async.t_cljs$core$async41440(self__.ch,self__.cs,meta41441__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41442){
var self__ = this;
var _41442__$1 = this;
return self__.meta41441;
});})(cs))
;

cljs.core.async.t_cljs$core$async41440.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41440.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41440.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41440.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41440.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41440.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41441","meta41441",1631611934,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41440";

cljs.core.async.t_cljs$core$async41440.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async41440");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41440 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41440(ch__$1,cs__$1,meta41441){
return (new cljs.core.async.t_cljs$core$async41440(ch__$1,cs__$1,meta41441));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41440(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33952__auto___41687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___41687,cs,m,dchan,dctr,done){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___41687,cs,m,dchan,dctr,done){
return (function (state_41583){
var state_val_41584 = (state_41583[(1)]);
if((state_val_41584 === (7))){
var inst_41579 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41585_41688 = state_41583__$1;
(statearr_41585_41688[(2)] = inst_41579);

(statearr_41585_41688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (20))){
var inst_41481 = (state_41583[(7)]);
var inst_41493 = cljs.core.first.call(null,inst_41481);
var inst_41494 = cljs.core.nth.call(null,inst_41493,(0),null);
var inst_41495 = cljs.core.nth.call(null,inst_41493,(1),null);
var state_41583__$1 = (function (){var statearr_41586 = state_41583;
(statearr_41586[(8)] = inst_41494);

return statearr_41586;
})();
if(cljs.core.truth_(inst_41495)){
var statearr_41587_41689 = state_41583__$1;
(statearr_41587_41689[(1)] = (22));

} else {
var statearr_41588_41690 = state_41583__$1;
(statearr_41588_41690[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (27))){
var inst_41449 = (state_41583[(9)]);
var inst_41523 = (state_41583[(10)]);
var inst_41525 = (state_41583[(11)]);
var inst_41530 = (state_41583[(12)]);
var inst_41530__$1 = cljs.core._nth.call(null,inst_41523,inst_41525);
var inst_41531 = cljs.core.async.put_BANG_.call(null,inst_41530__$1,inst_41449,done);
var state_41583__$1 = (function (){var statearr_41589 = state_41583;
(statearr_41589[(12)] = inst_41530__$1);

return statearr_41589;
})();
if(cljs.core.truth_(inst_41531)){
var statearr_41590_41691 = state_41583__$1;
(statearr_41590_41691[(1)] = (30));

} else {
var statearr_41591_41692 = state_41583__$1;
(statearr_41591_41692[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (1))){
var state_41583__$1 = state_41583;
var statearr_41592_41694 = state_41583__$1;
(statearr_41592_41694[(2)] = null);

(statearr_41592_41694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (24))){
var inst_41481 = (state_41583[(7)]);
var inst_41500 = (state_41583[(2)]);
var inst_41501 = cljs.core.next.call(null,inst_41481);
var inst_41458 = inst_41501;
var inst_41459 = null;
var inst_41460 = (0);
var inst_41461 = (0);
var state_41583__$1 = (function (){var statearr_41595 = state_41583;
(statearr_41595[(13)] = inst_41458);

(statearr_41595[(14)] = inst_41459);

(statearr_41595[(15)] = inst_41500);

(statearr_41595[(16)] = inst_41461);

(statearr_41595[(17)] = inst_41460);

return statearr_41595;
})();
var statearr_41596_41698 = state_41583__$1;
(statearr_41596_41698[(2)] = null);

(statearr_41596_41698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (39))){
var state_41583__$1 = state_41583;
var statearr_41600_41699 = state_41583__$1;
(statearr_41600_41699[(2)] = null);

(statearr_41600_41699[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (4))){
var inst_41449 = (state_41583[(9)]);
var inst_41449__$1 = (state_41583[(2)]);
var inst_41450 = (inst_41449__$1 == null);
var state_41583__$1 = (function (){var statearr_41601 = state_41583;
(statearr_41601[(9)] = inst_41449__$1);

return statearr_41601;
})();
if(cljs.core.truth_(inst_41450)){
var statearr_41602_41701 = state_41583__$1;
(statearr_41602_41701[(1)] = (5));

} else {
var statearr_41603_41703 = state_41583__$1;
(statearr_41603_41703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (15))){
var inst_41458 = (state_41583[(13)]);
var inst_41459 = (state_41583[(14)]);
var inst_41461 = (state_41583[(16)]);
var inst_41460 = (state_41583[(17)]);
var inst_41477 = (state_41583[(2)]);
var inst_41478 = (inst_41461 + (1));
var tmp41597 = inst_41458;
var tmp41598 = inst_41459;
var tmp41599 = inst_41460;
var inst_41458__$1 = tmp41597;
var inst_41459__$1 = tmp41598;
var inst_41460__$1 = tmp41599;
var inst_41461__$1 = inst_41478;
var state_41583__$1 = (function (){var statearr_41605 = state_41583;
(statearr_41605[(13)] = inst_41458__$1);

(statearr_41605[(14)] = inst_41459__$1);

(statearr_41605[(16)] = inst_41461__$1);

(statearr_41605[(18)] = inst_41477);

(statearr_41605[(17)] = inst_41460__$1);

return statearr_41605;
})();
var statearr_41606_41707 = state_41583__$1;
(statearr_41606_41707[(2)] = null);

(statearr_41606_41707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (21))){
var inst_41504 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41610_41708 = state_41583__$1;
(statearr_41610_41708[(2)] = inst_41504);

(statearr_41610_41708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (31))){
var inst_41530 = (state_41583[(12)]);
var inst_41534 = done.call(null,null);
var inst_41536 = cljs.core.async.untap_STAR_.call(null,m,inst_41530);
var state_41583__$1 = (function (){var statearr_41614 = state_41583;
(statearr_41614[(19)] = inst_41534);

return statearr_41614;
})();
var statearr_41615_41709 = state_41583__$1;
(statearr_41615_41709[(2)] = inst_41536);

(statearr_41615_41709[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (32))){
var inst_41523 = (state_41583[(10)]);
var inst_41525 = (state_41583[(11)]);
var inst_41524 = (state_41583[(20)]);
var inst_41522 = (state_41583[(21)]);
var inst_41538 = (state_41583[(2)]);
var inst_41539 = (inst_41525 + (1));
var tmp41607 = inst_41523;
var tmp41608 = inst_41524;
var tmp41609 = inst_41522;
var inst_41522__$1 = tmp41609;
var inst_41523__$1 = tmp41607;
var inst_41524__$1 = tmp41608;
var inst_41525__$1 = inst_41539;
var state_41583__$1 = (function (){var statearr_41617 = state_41583;
(statearr_41617[(10)] = inst_41523__$1);

(statearr_41617[(11)] = inst_41525__$1);

(statearr_41617[(20)] = inst_41524__$1);

(statearr_41617[(21)] = inst_41522__$1);

(statearr_41617[(22)] = inst_41538);

return statearr_41617;
})();
var statearr_41618_41710 = state_41583__$1;
(statearr_41618_41710[(2)] = null);

(statearr_41618_41710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (40))){
var inst_41551 = (state_41583[(23)]);
var inst_41555 = done.call(null,null);
var inst_41556 = cljs.core.async.untap_STAR_.call(null,m,inst_41551);
var state_41583__$1 = (function (){var statearr_41619 = state_41583;
(statearr_41619[(24)] = inst_41555);

return statearr_41619;
})();
var statearr_41620_41711 = state_41583__$1;
(statearr_41620_41711[(2)] = inst_41556);

(statearr_41620_41711[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (33))){
var inst_41542 = (state_41583[(25)]);
var inst_41544 = cljs.core.chunked_seq_QMARK_.call(null,inst_41542);
var state_41583__$1 = state_41583;
if(inst_41544){
var statearr_41621_41712 = state_41583__$1;
(statearr_41621_41712[(1)] = (36));

} else {
var statearr_41622_41713 = state_41583__$1;
(statearr_41622_41713[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (13))){
var inst_41471 = (state_41583[(26)]);
var inst_41474 = cljs.core.async.close_BANG_.call(null,inst_41471);
var state_41583__$1 = state_41583;
var statearr_41623_41714 = state_41583__$1;
(statearr_41623_41714[(2)] = inst_41474);

(statearr_41623_41714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (22))){
var inst_41494 = (state_41583[(8)]);
var inst_41497 = cljs.core.async.close_BANG_.call(null,inst_41494);
var state_41583__$1 = state_41583;
var statearr_41624_41716 = state_41583__$1;
(statearr_41624_41716[(2)] = inst_41497);

(statearr_41624_41716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (36))){
var inst_41542 = (state_41583[(25)]);
var inst_41546 = cljs.core.chunk_first.call(null,inst_41542);
var inst_41547 = cljs.core.chunk_rest.call(null,inst_41542);
var inst_41548 = cljs.core.count.call(null,inst_41546);
var inst_41522 = inst_41547;
var inst_41523 = inst_41546;
var inst_41524 = inst_41548;
var inst_41525 = (0);
var state_41583__$1 = (function (){var statearr_41625 = state_41583;
(statearr_41625[(10)] = inst_41523);

(statearr_41625[(11)] = inst_41525);

(statearr_41625[(20)] = inst_41524);

(statearr_41625[(21)] = inst_41522);

return statearr_41625;
})();
var statearr_41626_41722 = state_41583__$1;
(statearr_41626_41722[(2)] = null);

(statearr_41626_41722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (41))){
var inst_41542 = (state_41583[(25)]);
var inst_41558 = (state_41583[(2)]);
var inst_41559 = cljs.core.next.call(null,inst_41542);
var inst_41522 = inst_41559;
var inst_41523 = null;
var inst_41524 = (0);
var inst_41525 = (0);
var state_41583__$1 = (function (){var statearr_41627 = state_41583;
(statearr_41627[(10)] = inst_41523);

(statearr_41627[(27)] = inst_41558);

(statearr_41627[(11)] = inst_41525);

(statearr_41627[(20)] = inst_41524);

(statearr_41627[(21)] = inst_41522);

return statearr_41627;
})();
var statearr_41628_41723 = state_41583__$1;
(statearr_41628_41723[(2)] = null);

(statearr_41628_41723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (43))){
var state_41583__$1 = state_41583;
var statearr_41629_41724 = state_41583__$1;
(statearr_41629_41724[(2)] = null);

(statearr_41629_41724[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (29))){
var inst_41567 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41631_41725 = state_41583__$1;
(statearr_41631_41725[(2)] = inst_41567);

(statearr_41631_41725[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (44))){
var inst_41576 = (state_41583[(2)]);
var state_41583__$1 = (function (){var statearr_41633 = state_41583;
(statearr_41633[(28)] = inst_41576);

return statearr_41633;
})();
var statearr_41634_41726 = state_41583__$1;
(statearr_41634_41726[(2)] = null);

(statearr_41634_41726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (6))){
var inst_41514 = (state_41583[(29)]);
var inst_41513 = cljs.core.deref.call(null,cs);
var inst_41514__$1 = cljs.core.keys.call(null,inst_41513);
var inst_41515 = cljs.core.count.call(null,inst_41514__$1);
var inst_41516 = cljs.core.reset_BANG_.call(null,dctr,inst_41515);
var inst_41521 = cljs.core.seq.call(null,inst_41514__$1);
var inst_41522 = inst_41521;
var inst_41523 = null;
var inst_41524 = (0);
var inst_41525 = (0);
var state_41583__$1 = (function (){var statearr_41635 = state_41583;
(statearr_41635[(10)] = inst_41523);

(statearr_41635[(11)] = inst_41525);

(statearr_41635[(29)] = inst_41514__$1);

(statearr_41635[(20)] = inst_41524);

(statearr_41635[(21)] = inst_41522);

(statearr_41635[(30)] = inst_41516);

return statearr_41635;
})();
var statearr_41639_41730 = state_41583__$1;
(statearr_41639_41730[(2)] = null);

(statearr_41639_41730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (28))){
var inst_41542 = (state_41583[(25)]);
var inst_41522 = (state_41583[(21)]);
var inst_41542__$1 = cljs.core.seq.call(null,inst_41522);
var state_41583__$1 = (function (){var statearr_41641 = state_41583;
(statearr_41641[(25)] = inst_41542__$1);

return statearr_41641;
})();
if(inst_41542__$1){
var statearr_41642_41735 = state_41583__$1;
(statearr_41642_41735[(1)] = (33));

} else {
var statearr_41643_41736 = state_41583__$1;
(statearr_41643_41736[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (25))){
var inst_41525 = (state_41583[(11)]);
var inst_41524 = (state_41583[(20)]);
var inst_41527 = (inst_41525 < inst_41524);
var inst_41528 = inst_41527;
var state_41583__$1 = state_41583;
if(cljs.core.truth_(inst_41528)){
var statearr_41644_41743 = state_41583__$1;
(statearr_41644_41743[(1)] = (27));

} else {
var statearr_41645_41744 = state_41583__$1;
(statearr_41645_41744[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (34))){
var state_41583__$1 = state_41583;
var statearr_41647_41746 = state_41583__$1;
(statearr_41647_41746[(2)] = null);

(statearr_41647_41746[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (17))){
var state_41583__$1 = state_41583;
var statearr_41648_41748 = state_41583__$1;
(statearr_41648_41748[(2)] = null);

(statearr_41648_41748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (3))){
var inst_41581 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41583__$1,inst_41581);
} else {
if((state_val_41584 === (12))){
var inst_41509 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41649_41750 = state_41583__$1;
(statearr_41649_41750[(2)] = inst_41509);

(statearr_41649_41750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (2))){
var state_41583__$1 = state_41583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41583__$1,(4),ch);
} else {
if((state_val_41584 === (23))){
var state_41583__$1 = state_41583;
var statearr_41650_41755 = state_41583__$1;
(statearr_41650_41755[(2)] = null);

(statearr_41650_41755[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (35))){
var inst_41565 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41651_41756 = state_41583__$1;
(statearr_41651_41756[(2)] = inst_41565);

(statearr_41651_41756[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (19))){
var inst_41481 = (state_41583[(7)]);
var inst_41485 = cljs.core.chunk_first.call(null,inst_41481);
var inst_41486 = cljs.core.chunk_rest.call(null,inst_41481);
var inst_41487 = cljs.core.count.call(null,inst_41485);
var inst_41458 = inst_41486;
var inst_41459 = inst_41485;
var inst_41460 = inst_41487;
var inst_41461 = (0);
var state_41583__$1 = (function (){var statearr_41652 = state_41583;
(statearr_41652[(13)] = inst_41458);

(statearr_41652[(14)] = inst_41459);

(statearr_41652[(16)] = inst_41461);

(statearr_41652[(17)] = inst_41460);

return statearr_41652;
})();
var statearr_41653_41757 = state_41583__$1;
(statearr_41653_41757[(2)] = null);

(statearr_41653_41757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (11))){
var inst_41458 = (state_41583[(13)]);
var inst_41481 = (state_41583[(7)]);
var inst_41481__$1 = cljs.core.seq.call(null,inst_41458);
var state_41583__$1 = (function (){var statearr_41654 = state_41583;
(statearr_41654[(7)] = inst_41481__$1);

return statearr_41654;
})();
if(inst_41481__$1){
var statearr_41656_41762 = state_41583__$1;
(statearr_41656_41762[(1)] = (16));

} else {
var statearr_41657_41763 = state_41583__$1;
(statearr_41657_41763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (9))){
var inst_41511 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41659_41764 = state_41583__$1;
(statearr_41659_41764[(2)] = inst_41511);

(statearr_41659_41764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (5))){
var inst_41456 = cljs.core.deref.call(null,cs);
var inst_41457 = cljs.core.seq.call(null,inst_41456);
var inst_41458 = inst_41457;
var inst_41459 = null;
var inst_41460 = (0);
var inst_41461 = (0);
var state_41583__$1 = (function (){var statearr_41660 = state_41583;
(statearr_41660[(13)] = inst_41458);

(statearr_41660[(14)] = inst_41459);

(statearr_41660[(16)] = inst_41461);

(statearr_41660[(17)] = inst_41460);

return statearr_41660;
})();
var statearr_41661_41769 = state_41583__$1;
(statearr_41661_41769[(2)] = null);

(statearr_41661_41769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (14))){
var state_41583__$1 = state_41583;
var statearr_41662_41770 = state_41583__$1;
(statearr_41662_41770[(2)] = null);

(statearr_41662_41770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (45))){
var inst_41573 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41664_41772 = state_41583__$1;
(statearr_41664_41772[(2)] = inst_41573);

(statearr_41664_41772[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (26))){
var inst_41514 = (state_41583[(29)]);
var inst_41569 = (state_41583[(2)]);
var inst_41570 = cljs.core.seq.call(null,inst_41514);
var state_41583__$1 = (function (){var statearr_41665 = state_41583;
(statearr_41665[(31)] = inst_41569);

return statearr_41665;
})();
if(inst_41570){
var statearr_41666_41774 = state_41583__$1;
(statearr_41666_41774[(1)] = (42));

} else {
var statearr_41667_41775 = state_41583__$1;
(statearr_41667_41775[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (16))){
var inst_41481 = (state_41583[(7)]);
var inst_41483 = cljs.core.chunked_seq_QMARK_.call(null,inst_41481);
var state_41583__$1 = state_41583;
if(inst_41483){
var statearr_41668_41776 = state_41583__$1;
(statearr_41668_41776[(1)] = (19));

} else {
var statearr_41669_41777 = state_41583__$1;
(statearr_41669_41777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (38))){
var inst_41562 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41670_41778 = state_41583__$1;
(statearr_41670_41778[(2)] = inst_41562);

(statearr_41670_41778[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (30))){
var state_41583__$1 = state_41583;
var statearr_41671_41779 = state_41583__$1;
(statearr_41671_41779[(2)] = null);

(statearr_41671_41779[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (10))){
var inst_41459 = (state_41583[(14)]);
var inst_41461 = (state_41583[(16)]);
var inst_41470 = cljs.core._nth.call(null,inst_41459,inst_41461);
var inst_41471 = cljs.core.nth.call(null,inst_41470,(0),null);
var inst_41472 = cljs.core.nth.call(null,inst_41470,(1),null);
var state_41583__$1 = (function (){var statearr_41672 = state_41583;
(statearr_41672[(26)] = inst_41471);

return statearr_41672;
})();
if(cljs.core.truth_(inst_41472)){
var statearr_41673_41782 = state_41583__$1;
(statearr_41673_41782[(1)] = (13));

} else {
var statearr_41674_41783 = state_41583__$1;
(statearr_41674_41783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (18))){
var inst_41507 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41675_41784 = state_41583__$1;
(statearr_41675_41784[(2)] = inst_41507);

(statearr_41675_41784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (42))){
var state_41583__$1 = state_41583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41583__$1,(45),dchan);
} else {
if((state_val_41584 === (37))){
var inst_41542 = (state_41583[(25)]);
var inst_41449 = (state_41583[(9)]);
var inst_41551 = (state_41583[(23)]);
var inst_41551__$1 = cljs.core.first.call(null,inst_41542);
var inst_41552 = cljs.core.async.put_BANG_.call(null,inst_41551__$1,inst_41449,done);
var state_41583__$1 = (function (){var statearr_41676 = state_41583;
(statearr_41676[(23)] = inst_41551__$1);

return statearr_41676;
})();
if(cljs.core.truth_(inst_41552)){
var statearr_41677_41787 = state_41583__$1;
(statearr_41677_41787[(1)] = (39));

} else {
var statearr_41678_41788 = state_41583__$1;
(statearr_41678_41788[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (8))){
var inst_41461 = (state_41583[(16)]);
var inst_41460 = (state_41583[(17)]);
var inst_41464 = (inst_41461 < inst_41460);
var inst_41465 = inst_41464;
var state_41583__$1 = state_41583;
if(cljs.core.truth_(inst_41465)){
var statearr_41679_41790 = state_41583__$1;
(statearr_41679_41790[(1)] = (10));

} else {
var statearr_41680_41791 = state_41583__$1;
(statearr_41680_41791[(1)] = (11));

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
});})(c__33952__auto___41687,cs,m,dchan,dctr,done))
;
return ((function (switch__33607__auto__,c__33952__auto___41687,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33608__auto__ = null;
var cljs$core$async$mult_$_state_machine__33608__auto____0 = (function (){
var statearr_41681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41681[(0)] = cljs$core$async$mult_$_state_machine__33608__auto__);

(statearr_41681[(1)] = (1));

return statearr_41681;
});
var cljs$core$async$mult_$_state_machine__33608__auto____1 = (function (state_41583){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_41583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e41682){if((e41682 instanceof Object)){
var ex__33611__auto__ = e41682;
var statearr_41683_41795 = state_41583;
(statearr_41683_41795[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41798 = state_41583;
state_41583 = G__41798;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33608__auto__ = function(state_41583){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33608__auto____1.call(this,state_41583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33608__auto____0;
cljs$core$async$mult_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33608__auto____1;
return cljs$core$async$mult_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___41687,cs,m,dchan,dctr,done))
})();
var state__33954__auto__ = (function (){var statearr_41684 = f__33953__auto__.call(null);
(statearr_41684[(6)] = c__33952__auto___41687);

return statearr_41684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___41687,cs,m,dchan,dctr,done))
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
var G__41801 = arguments.length;
switch (G__41801) {
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
var len__31349__auto___41846 = arguments.length;
var i__31350__auto___41847 = (0);
while(true){
if((i__31350__auto___41847 < len__31349__auto___41846)){
args__31356__auto__.push((arguments[i__31350__auto___41847]));

var G__41848 = (i__31350__auto___41847 + (1));
i__31350__auto___41847 = G__41848;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((3) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41836){
var map__41837 = p__41836;
var map__41837__$1 = ((((!((map__41837 == null)))?((((map__41837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41837):map__41837);
var opts = map__41837__$1;
var statearr_41839_41855 = state;
(statearr_41839_41855[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__41837,map__41837__$1,opts){
return (function (val){
var statearr_41840_41856 = state;
(statearr_41840_41856[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41837,map__41837__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_41841_41857 = state;
(statearr_41841_41857[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41831){
var G__41832 = cljs.core.first.call(null,seq41831);
var seq41831__$1 = cljs.core.next.call(null,seq41831);
var G__41833 = cljs.core.first.call(null,seq41831__$1);
var seq41831__$2 = cljs.core.next.call(null,seq41831__$1);
var G__41834 = cljs.core.first.call(null,seq41831__$2);
var seq41831__$3 = cljs.core.next.call(null,seq41831__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41832,G__41833,G__41834,seq41831__$3);
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
if(typeof cljs.core.async.t_cljs$core$async41864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41864 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta41865){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta41865 = meta41865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41866,meta41865__$1){
var self__ = this;
var _41866__$1 = this;
return (new cljs.core.async.t_cljs$core$async41864(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta41865__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41866){
var self__ = this;
var _41866__$1 = this;
return self__.meta41865;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async41864.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta41865","meta41865",1352621116,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41864.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41864";

cljs.core.async.t_cljs$core$async41864.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async41864");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41864 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41864(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41865){
return (new cljs.core.async.t_cljs$core$async41864(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41865));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41864(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33952__auto___42120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___42120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___42120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42001){
var state_val_42002 = (state_42001[(1)]);
if((state_val_42002 === (7))){
var inst_41912 = (state_42001[(2)]);
var state_42001__$1 = state_42001;
var statearr_42003_42125 = state_42001__$1;
(statearr_42003_42125[(2)] = inst_41912);

(statearr_42003_42125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (20))){
var inst_41924 = (state_42001[(7)]);
var state_42001__$1 = state_42001;
var statearr_42005_42128 = state_42001__$1;
(statearr_42005_42128[(2)] = inst_41924);

(statearr_42005_42128[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (27))){
var state_42001__$1 = state_42001;
var statearr_42006_42131 = state_42001__$1;
(statearr_42006_42131[(2)] = null);

(statearr_42006_42131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (1))){
var inst_41898 = (state_42001[(8)]);
var inst_41898__$1 = calc_state.call(null);
var inst_41901 = (inst_41898__$1 == null);
var inst_41902 = cljs.core.not.call(null,inst_41901);
var state_42001__$1 = (function (){var statearr_42008 = state_42001;
(statearr_42008[(8)] = inst_41898__$1);

return statearr_42008;
})();
if(inst_41902){
var statearr_42009_42136 = state_42001__$1;
(statearr_42009_42136[(1)] = (2));

} else {
var statearr_42010_42137 = state_42001__$1;
(statearr_42010_42137[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (24))){
var inst_41974 = (state_42001[(9)]);
var inst_41948 = (state_42001[(10)]);
var inst_41957 = (state_42001[(11)]);
var inst_41974__$1 = inst_41948.call(null,inst_41957);
var state_42001__$1 = (function (){var statearr_42014 = state_42001;
(statearr_42014[(9)] = inst_41974__$1);

return statearr_42014;
})();
if(cljs.core.truth_(inst_41974__$1)){
var statearr_42015_42142 = state_42001__$1;
(statearr_42015_42142[(1)] = (29));

} else {
var statearr_42016_42144 = state_42001__$1;
(statearr_42016_42144[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (4))){
var inst_41915 = (state_42001[(2)]);
var state_42001__$1 = state_42001;
if(cljs.core.truth_(inst_41915)){
var statearr_42018_42145 = state_42001__$1;
(statearr_42018_42145[(1)] = (8));

} else {
var statearr_42019_42146 = state_42001__$1;
(statearr_42019_42146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (15))){
var inst_41942 = (state_42001[(2)]);
var state_42001__$1 = state_42001;
if(cljs.core.truth_(inst_41942)){
var statearr_42020_42148 = state_42001__$1;
(statearr_42020_42148[(1)] = (19));

} else {
var statearr_42021_42150 = state_42001__$1;
(statearr_42021_42150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (21))){
var inst_41947 = (state_42001[(12)]);
var inst_41947__$1 = (state_42001[(2)]);
var inst_41948 = cljs.core.get.call(null,inst_41947__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41949 = cljs.core.get.call(null,inst_41947__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41950 = cljs.core.get.call(null,inst_41947__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42001__$1 = (function (){var statearr_42026 = state_42001;
(statearr_42026[(13)] = inst_41949);

(statearr_42026[(10)] = inst_41948);

(statearr_42026[(12)] = inst_41947__$1);

return statearr_42026;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42001__$1,(22),inst_41950);
} else {
if((state_val_42002 === (31))){
var inst_41982 = (state_42001[(2)]);
var state_42001__$1 = state_42001;
if(cljs.core.truth_(inst_41982)){
var statearr_42028_42155 = state_42001__$1;
(statearr_42028_42155[(1)] = (32));

} else {
var statearr_42030_42156 = state_42001__$1;
(statearr_42030_42156[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (32))){
var inst_41956 = (state_42001[(14)]);
var state_42001__$1 = state_42001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42001__$1,(35),out,inst_41956);
} else {
if((state_val_42002 === (33))){
var inst_41947 = (state_42001[(12)]);
var inst_41924 = inst_41947;
var state_42001__$1 = (function (){var statearr_42032 = state_42001;
(statearr_42032[(7)] = inst_41924);

return statearr_42032;
})();
var statearr_42033_42159 = state_42001__$1;
(statearr_42033_42159[(2)] = null);

(statearr_42033_42159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (13))){
var inst_41924 = (state_42001[(7)]);
var inst_41931 = inst_41924.cljs$lang$protocol_mask$partition0$;
var inst_41932 = (inst_41931 & (64));
var inst_41933 = inst_41924.cljs$core$ISeq$;
var inst_41934 = (cljs.core.PROTOCOL_SENTINEL === inst_41933);
var inst_41935 = (inst_41932) || (inst_41934);
var state_42001__$1 = state_42001;
if(cljs.core.truth_(inst_41935)){
var statearr_42036_42163 = state_42001__$1;
(statearr_42036_42163[(1)] = (16));

} else {
var statearr_42037_42165 = state_42001__$1;
(statearr_42037_42165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (22))){
var inst_41956 = (state_42001[(14)]);
var inst_41957 = (state_42001[(11)]);
var inst_41955 = (state_42001[(2)]);
var inst_41956__$1 = cljs.core.nth.call(null,inst_41955,(0),null);
var inst_41957__$1 = cljs.core.nth.call(null,inst_41955,(1),null);
var inst_41959 = (inst_41956__$1 == null);
var inst_41960 = cljs.core._EQ_.call(null,inst_41957__$1,change);
var inst_41961 = (inst_41959) || (inst_41960);
var state_42001__$1 = (function (){var statearr_42040 = state_42001;
(statearr_42040[(14)] = inst_41956__$1);

(statearr_42040[(11)] = inst_41957__$1);

return statearr_42040;
})();
if(cljs.core.truth_(inst_41961)){
var statearr_42041_42169 = state_42001__$1;
(statearr_42041_42169[(1)] = (23));

} else {
var statearr_42042_42171 = state_42001__$1;
(statearr_42042_42171[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (36))){
var inst_41947 = (state_42001[(12)]);
var inst_41924 = inst_41947;
var state_42001__$1 = (function (){var statearr_42044 = state_42001;
(statearr_42044[(7)] = inst_41924);

return statearr_42044;
})();
var statearr_42045_42174 = state_42001__$1;
(statearr_42045_42174[(2)] = null);

(statearr_42045_42174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (29))){
var inst_41974 = (state_42001[(9)]);
var state_42001__$1 = state_42001;
var statearr_42047_42176 = state_42001__$1;
(statearr_42047_42176[(2)] = inst_41974);

(statearr_42047_42176[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (6))){
var state_42001__$1 = state_42001;
var statearr_42048_42177 = state_42001__$1;
(statearr_42048_42177[(2)] = false);

(statearr_42048_42177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (28))){
var inst_41970 = (state_42001[(2)]);
var inst_41971 = calc_state.call(null);
var inst_41924 = inst_41971;
var state_42001__$1 = (function (){var statearr_42049 = state_42001;
(statearr_42049[(15)] = inst_41970);

(statearr_42049[(7)] = inst_41924);

return statearr_42049;
})();
var statearr_42050_42182 = state_42001__$1;
(statearr_42050_42182[(2)] = null);

(statearr_42050_42182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (25))){
var inst_41996 = (state_42001[(2)]);
var state_42001__$1 = state_42001;
var statearr_42051_42183 = state_42001__$1;
(statearr_42051_42183[(2)] = inst_41996);

(statearr_42051_42183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (34))){
var inst_41994 = (state_42001[(2)]);
var state_42001__$1 = state_42001;
var statearr_42054_42187 = state_42001__$1;
(statearr_42054_42187[(2)] = inst_41994);

(statearr_42054_42187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (17))){
var state_42001__$1 = state_42001;
var statearr_42055_42188 = state_42001__$1;
(statearr_42055_42188[(2)] = false);

(statearr_42055_42188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (3))){
var state_42001__$1 = state_42001;
var statearr_42056_42191 = state_42001__$1;
(statearr_42056_42191[(2)] = false);

(statearr_42056_42191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (12))){
var inst_41998 = (state_42001[(2)]);
var state_42001__$1 = state_42001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42001__$1,inst_41998);
} else {
if((state_val_42002 === (2))){
var inst_41898 = (state_42001[(8)]);
var inst_41904 = inst_41898.cljs$lang$protocol_mask$partition0$;
var inst_41905 = (inst_41904 & (64));
var inst_41906 = inst_41898.cljs$core$ISeq$;
var inst_41907 = (cljs.core.PROTOCOL_SENTINEL === inst_41906);
var inst_41908 = (inst_41905) || (inst_41907);
var state_42001__$1 = state_42001;
if(cljs.core.truth_(inst_41908)){
var statearr_42057_42206 = state_42001__$1;
(statearr_42057_42206[(1)] = (5));

} else {
var statearr_42058_42207 = state_42001__$1;
(statearr_42058_42207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (23))){
var inst_41956 = (state_42001[(14)]);
var inst_41963 = (inst_41956 == null);
var state_42001__$1 = state_42001;
if(cljs.core.truth_(inst_41963)){
var statearr_42059_42208 = state_42001__$1;
(statearr_42059_42208[(1)] = (26));

} else {
var statearr_42061_42209 = state_42001__$1;
(statearr_42061_42209[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (35))){
var inst_41985 = (state_42001[(2)]);
var state_42001__$1 = state_42001;
if(cljs.core.truth_(inst_41985)){
var statearr_42062_42213 = state_42001__$1;
(statearr_42062_42213[(1)] = (36));

} else {
var statearr_42063_42214 = state_42001__$1;
(statearr_42063_42214[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (19))){
var inst_41924 = (state_42001[(7)]);
var inst_41944 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41924);
var state_42001__$1 = state_42001;
var statearr_42064_42217 = state_42001__$1;
(statearr_42064_42217[(2)] = inst_41944);

(statearr_42064_42217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (11))){
var inst_41924 = (state_42001[(7)]);
var inst_41928 = (inst_41924 == null);
var inst_41929 = cljs.core.not.call(null,inst_41928);
var state_42001__$1 = state_42001;
if(inst_41929){
var statearr_42065_42219 = state_42001__$1;
(statearr_42065_42219[(1)] = (13));

} else {
var statearr_42066_42220 = state_42001__$1;
(statearr_42066_42220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (9))){
var inst_41898 = (state_42001[(8)]);
var state_42001__$1 = state_42001;
var statearr_42067_42222 = state_42001__$1;
(statearr_42067_42222[(2)] = inst_41898);

(statearr_42067_42222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (5))){
var state_42001__$1 = state_42001;
var statearr_42069_42227 = state_42001__$1;
(statearr_42069_42227[(2)] = true);

(statearr_42069_42227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (14))){
var state_42001__$1 = state_42001;
var statearr_42070_42229 = state_42001__$1;
(statearr_42070_42229[(2)] = false);

(statearr_42070_42229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (26))){
var inst_41957 = (state_42001[(11)]);
var inst_41965 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41957);
var state_42001__$1 = state_42001;
var statearr_42071_42231 = state_42001__$1;
(statearr_42071_42231[(2)] = inst_41965);

(statearr_42071_42231[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (16))){
var state_42001__$1 = state_42001;
var statearr_42072_42232 = state_42001__$1;
(statearr_42072_42232[(2)] = true);

(statearr_42072_42232[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (38))){
var inst_41990 = (state_42001[(2)]);
var state_42001__$1 = state_42001;
var statearr_42073_42235 = state_42001__$1;
(statearr_42073_42235[(2)] = inst_41990);

(statearr_42073_42235[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (30))){
var inst_41949 = (state_42001[(13)]);
var inst_41948 = (state_42001[(10)]);
var inst_41957 = (state_42001[(11)]);
var inst_41977 = cljs.core.empty_QMARK_.call(null,inst_41948);
var inst_41978 = inst_41949.call(null,inst_41957);
var inst_41979 = cljs.core.not.call(null,inst_41978);
var inst_41980 = (inst_41977) && (inst_41979);
var state_42001__$1 = state_42001;
var statearr_42074_42237 = state_42001__$1;
(statearr_42074_42237[(2)] = inst_41980);

(statearr_42074_42237[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (10))){
var inst_41898 = (state_42001[(8)]);
var inst_41920 = (state_42001[(2)]);
var inst_41921 = cljs.core.get.call(null,inst_41920,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41922 = cljs.core.get.call(null,inst_41920,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41923 = cljs.core.get.call(null,inst_41920,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41924 = inst_41898;
var state_42001__$1 = (function (){var statearr_42076 = state_42001;
(statearr_42076[(16)] = inst_41921);

(statearr_42076[(17)] = inst_41922);

(statearr_42076[(7)] = inst_41924);

(statearr_42076[(18)] = inst_41923);

return statearr_42076;
})();
var statearr_42077_42240 = state_42001__$1;
(statearr_42077_42240[(2)] = null);

(statearr_42077_42240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (18))){
var inst_41939 = (state_42001[(2)]);
var state_42001__$1 = state_42001;
var statearr_42078_42243 = state_42001__$1;
(statearr_42078_42243[(2)] = inst_41939);

(statearr_42078_42243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (37))){
var state_42001__$1 = state_42001;
var statearr_42080_42247 = state_42001__$1;
(statearr_42080_42247[(2)] = null);

(statearr_42080_42247[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42002 === (8))){
var inst_41898 = (state_42001[(8)]);
var inst_41917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41898);
var state_42001__$1 = state_42001;
var statearr_42081_42250 = state_42001__$1;
(statearr_42081_42250[(2)] = inst_41917);

(statearr_42081_42250[(1)] = (10));


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
});})(c__33952__auto___42120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33607__auto__,c__33952__auto___42120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33608__auto__ = null;
var cljs$core$async$mix_$_state_machine__33608__auto____0 = (function (){
var statearr_42083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42083[(0)] = cljs$core$async$mix_$_state_machine__33608__auto__);

(statearr_42083[(1)] = (1));

return statearr_42083;
});
var cljs$core$async$mix_$_state_machine__33608__auto____1 = (function (state_42001){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_42001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e42084){if((e42084 instanceof Object)){
var ex__33611__auto__ = e42084;
var statearr_42085_42256 = state_42001;
(statearr_42085_42256[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42259 = state_42001;
state_42001 = G__42259;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33608__auto__ = function(state_42001){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33608__auto____1.call(this,state_42001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33608__auto____0;
cljs$core$async$mix_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33608__auto____1;
return cljs$core$async$mix_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___42120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33954__auto__ = (function (){var statearr_42086 = f__33953__auto__.call(null);
(statearr_42086[(6)] = c__33952__auto___42120);

return statearr_42086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___42120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__42276 = arguments.length;
switch (G__42276) {
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
var G__42295 = arguments.length;
switch (G__42295) {
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
return (function (p1__42292_SHARP_){
if(cljs.core.truth_(p1__42292_SHARP_.call(null,topic))){
return p1__42292_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42292_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30072__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42301 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42302){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42302 = meta42302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42303,meta42302__$1){
var self__ = this;
var _42303__$1 = this;
return (new cljs.core.async.t_cljs$core$async42301(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42302__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42303){
var self__ = this;
var _42303__$1 = this;
return self__.meta42302;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42301.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42301.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42301.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42301.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42301.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42301.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42301.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42302","meta42302",-1464719507,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42301";

cljs.core.async.t_cljs$core$async42301.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async42301");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42301 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42301(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42302){
return (new cljs.core.async.t_cljs$core$async42301(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42302));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42301(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33952__auto___42517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___42517,mults,ensure_mult,p){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___42517,mults,ensure_mult,p){
return (function (state_42382){
var state_val_42383 = (state_42382[(1)]);
if((state_val_42383 === (7))){
var inst_42378 = (state_42382[(2)]);
var state_42382__$1 = state_42382;
var statearr_42387_42519 = state_42382__$1;
(statearr_42387_42519[(2)] = inst_42378);

(statearr_42387_42519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (20))){
var state_42382__$1 = state_42382;
var statearr_42389_42521 = state_42382__$1;
(statearr_42389_42521[(2)] = null);

(statearr_42389_42521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (1))){
var state_42382__$1 = state_42382;
var statearr_42390_42523 = state_42382__$1;
(statearr_42390_42523[(2)] = null);

(statearr_42390_42523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (24))){
var inst_42358 = (state_42382[(7)]);
var inst_42370 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42358);
var state_42382__$1 = state_42382;
var statearr_42391_42528 = state_42382__$1;
(statearr_42391_42528[(2)] = inst_42370);

(statearr_42391_42528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (4))){
var inst_42309 = (state_42382[(8)]);
var inst_42309__$1 = (state_42382[(2)]);
var inst_42310 = (inst_42309__$1 == null);
var state_42382__$1 = (function (){var statearr_42392 = state_42382;
(statearr_42392[(8)] = inst_42309__$1);

return statearr_42392;
})();
if(cljs.core.truth_(inst_42310)){
var statearr_42393_42529 = state_42382__$1;
(statearr_42393_42529[(1)] = (5));

} else {
var statearr_42394_42531 = state_42382__$1;
(statearr_42394_42531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (15))){
var inst_42352 = (state_42382[(2)]);
var state_42382__$1 = state_42382;
var statearr_42395_42533 = state_42382__$1;
(statearr_42395_42533[(2)] = inst_42352);

(statearr_42395_42533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (21))){
var inst_42375 = (state_42382[(2)]);
var state_42382__$1 = (function (){var statearr_42397 = state_42382;
(statearr_42397[(9)] = inst_42375);

return statearr_42397;
})();
var statearr_42398_42542 = state_42382__$1;
(statearr_42398_42542[(2)] = null);

(statearr_42398_42542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (13))){
var inst_42334 = (state_42382[(10)]);
var inst_42336 = cljs.core.chunked_seq_QMARK_.call(null,inst_42334);
var state_42382__$1 = state_42382;
if(inst_42336){
var statearr_42399_42543 = state_42382__$1;
(statearr_42399_42543[(1)] = (16));

} else {
var statearr_42400_42545 = state_42382__$1;
(statearr_42400_42545[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (22))){
var inst_42367 = (state_42382[(2)]);
var state_42382__$1 = state_42382;
if(cljs.core.truth_(inst_42367)){
var statearr_42401_42547 = state_42382__$1;
(statearr_42401_42547[(1)] = (23));

} else {
var statearr_42402_42548 = state_42382__$1;
(statearr_42402_42548[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (6))){
var inst_42358 = (state_42382[(7)]);
var inst_42360 = (state_42382[(11)]);
var inst_42309 = (state_42382[(8)]);
var inst_42358__$1 = topic_fn.call(null,inst_42309);
var inst_42359 = cljs.core.deref.call(null,mults);
var inst_42360__$1 = cljs.core.get.call(null,inst_42359,inst_42358__$1);
var state_42382__$1 = (function (){var statearr_42404 = state_42382;
(statearr_42404[(7)] = inst_42358__$1);

(statearr_42404[(11)] = inst_42360__$1);

return statearr_42404;
})();
if(cljs.core.truth_(inst_42360__$1)){
var statearr_42405_42552 = state_42382__$1;
(statearr_42405_42552[(1)] = (19));

} else {
var statearr_42406_42553 = state_42382__$1;
(statearr_42406_42553[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (25))){
var inst_42372 = (state_42382[(2)]);
var state_42382__$1 = state_42382;
var statearr_42411_42555 = state_42382__$1;
(statearr_42411_42555[(2)] = inst_42372);

(statearr_42411_42555[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (17))){
var inst_42334 = (state_42382[(10)]);
var inst_42343 = cljs.core.first.call(null,inst_42334);
var inst_42344 = cljs.core.async.muxch_STAR_.call(null,inst_42343);
var inst_42345 = cljs.core.async.close_BANG_.call(null,inst_42344);
var inst_42346 = cljs.core.next.call(null,inst_42334);
var inst_42320 = inst_42346;
var inst_42321 = null;
var inst_42322 = (0);
var inst_42323 = (0);
var state_42382__$1 = (function (){var statearr_42413 = state_42382;
(statearr_42413[(12)] = inst_42321);

(statearr_42413[(13)] = inst_42323);

(statearr_42413[(14)] = inst_42320);

(statearr_42413[(15)] = inst_42322);

(statearr_42413[(16)] = inst_42345);

return statearr_42413;
})();
var statearr_42414_42559 = state_42382__$1;
(statearr_42414_42559[(2)] = null);

(statearr_42414_42559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (3))){
var inst_42380 = (state_42382[(2)]);
var state_42382__$1 = state_42382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42382__$1,inst_42380);
} else {
if((state_val_42383 === (12))){
var inst_42354 = (state_42382[(2)]);
var state_42382__$1 = state_42382;
var statearr_42425_42561 = state_42382__$1;
(statearr_42425_42561[(2)] = inst_42354);

(statearr_42425_42561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (2))){
var state_42382__$1 = state_42382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42382__$1,(4),ch);
} else {
if((state_val_42383 === (23))){
var state_42382__$1 = state_42382;
var statearr_42426_42564 = state_42382__$1;
(statearr_42426_42564[(2)] = null);

(statearr_42426_42564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (19))){
var inst_42360 = (state_42382[(11)]);
var inst_42309 = (state_42382[(8)]);
var inst_42365 = cljs.core.async.muxch_STAR_.call(null,inst_42360);
var state_42382__$1 = state_42382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42382__$1,(22),inst_42365,inst_42309);
} else {
if((state_val_42383 === (11))){
var inst_42334 = (state_42382[(10)]);
var inst_42320 = (state_42382[(14)]);
var inst_42334__$1 = cljs.core.seq.call(null,inst_42320);
var state_42382__$1 = (function (){var statearr_42430 = state_42382;
(statearr_42430[(10)] = inst_42334__$1);

return statearr_42430;
})();
if(inst_42334__$1){
var statearr_42435_42569 = state_42382__$1;
(statearr_42435_42569[(1)] = (13));

} else {
var statearr_42436_42570 = state_42382__$1;
(statearr_42436_42570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (9))){
var inst_42356 = (state_42382[(2)]);
var state_42382__$1 = state_42382;
var statearr_42439_42572 = state_42382__$1;
(statearr_42439_42572[(2)] = inst_42356);

(statearr_42439_42572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (5))){
var inst_42316 = cljs.core.deref.call(null,mults);
var inst_42317 = cljs.core.vals.call(null,inst_42316);
var inst_42318 = cljs.core.seq.call(null,inst_42317);
var inst_42320 = inst_42318;
var inst_42321 = null;
var inst_42322 = (0);
var inst_42323 = (0);
var state_42382__$1 = (function (){var statearr_42444 = state_42382;
(statearr_42444[(12)] = inst_42321);

(statearr_42444[(13)] = inst_42323);

(statearr_42444[(14)] = inst_42320);

(statearr_42444[(15)] = inst_42322);

return statearr_42444;
})();
var statearr_42446_42576 = state_42382__$1;
(statearr_42446_42576[(2)] = null);

(statearr_42446_42576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (14))){
var state_42382__$1 = state_42382;
var statearr_42456_42577 = state_42382__$1;
(statearr_42456_42577[(2)] = null);

(statearr_42456_42577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (16))){
var inst_42334 = (state_42382[(10)]);
var inst_42338 = cljs.core.chunk_first.call(null,inst_42334);
var inst_42339 = cljs.core.chunk_rest.call(null,inst_42334);
var inst_42340 = cljs.core.count.call(null,inst_42338);
var inst_42320 = inst_42339;
var inst_42321 = inst_42338;
var inst_42322 = inst_42340;
var inst_42323 = (0);
var state_42382__$1 = (function (){var statearr_42458 = state_42382;
(statearr_42458[(12)] = inst_42321);

(statearr_42458[(13)] = inst_42323);

(statearr_42458[(14)] = inst_42320);

(statearr_42458[(15)] = inst_42322);

return statearr_42458;
})();
var statearr_42464_42581 = state_42382__$1;
(statearr_42464_42581[(2)] = null);

(statearr_42464_42581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (10))){
var inst_42321 = (state_42382[(12)]);
var inst_42323 = (state_42382[(13)]);
var inst_42320 = (state_42382[(14)]);
var inst_42322 = (state_42382[(15)]);
var inst_42328 = cljs.core._nth.call(null,inst_42321,inst_42323);
var inst_42329 = cljs.core.async.muxch_STAR_.call(null,inst_42328);
var inst_42330 = cljs.core.async.close_BANG_.call(null,inst_42329);
var inst_42331 = (inst_42323 + (1));
var tmp42449 = inst_42321;
var tmp42450 = inst_42320;
var tmp42451 = inst_42322;
var inst_42320__$1 = tmp42450;
var inst_42321__$1 = tmp42449;
var inst_42322__$1 = tmp42451;
var inst_42323__$1 = inst_42331;
var state_42382__$1 = (function (){var statearr_42469 = state_42382;
(statearr_42469[(12)] = inst_42321__$1);

(statearr_42469[(13)] = inst_42323__$1);

(statearr_42469[(14)] = inst_42320__$1);

(statearr_42469[(15)] = inst_42322__$1);

(statearr_42469[(17)] = inst_42330);

return statearr_42469;
})();
var statearr_42470_42585 = state_42382__$1;
(statearr_42470_42585[(2)] = null);

(statearr_42470_42585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (18))){
var inst_42349 = (state_42382[(2)]);
var state_42382__$1 = state_42382;
var statearr_42474_42586 = state_42382__$1;
(statearr_42474_42586[(2)] = inst_42349);

(statearr_42474_42586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (8))){
var inst_42323 = (state_42382[(13)]);
var inst_42322 = (state_42382[(15)]);
var inst_42325 = (inst_42323 < inst_42322);
var inst_42326 = inst_42325;
var state_42382__$1 = state_42382;
if(cljs.core.truth_(inst_42326)){
var statearr_42479_42590 = state_42382__$1;
(statearr_42479_42590[(1)] = (10));

} else {
var statearr_42480_42591 = state_42382__$1;
(statearr_42480_42591[(1)] = (11));

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
});})(c__33952__auto___42517,mults,ensure_mult,p))
;
return ((function (switch__33607__auto__,c__33952__auto___42517,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_42485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42485[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_42485[(1)] = (1));

return statearr_42485;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_42382){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_42382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e42490){if((e42490 instanceof Object)){
var ex__33611__auto__ = e42490;
var statearr_42491_42595 = state_42382;
(statearr_42491_42595[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42597 = state_42382;
state_42382 = G__42597;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_42382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_42382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___42517,mults,ensure_mult,p))
})();
var state__33954__auto__ = (function (){var statearr_42495 = f__33953__auto__.call(null);
(statearr_42495[(6)] = c__33952__auto___42517);

return statearr_42495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___42517,mults,ensure_mult,p))
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
var G__42600 = arguments.length;
switch (G__42600) {
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
var G__42612 = arguments.length;
switch (G__42612) {
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
var G__42619 = arguments.length;
switch (G__42619) {
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
var c__33952__auto___42746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___42746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___42746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42674){
var state_val_42675 = (state_42674[(1)]);
if((state_val_42675 === (7))){
var state_42674__$1 = state_42674;
var statearr_42681_42751 = state_42674__$1;
(statearr_42681_42751[(2)] = null);

(statearr_42681_42751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (1))){
var state_42674__$1 = state_42674;
var statearr_42682_42752 = state_42674__$1;
(statearr_42682_42752[(2)] = null);

(statearr_42682_42752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (4))){
var inst_42638 = (state_42674[(7)]);
var inst_42640 = (inst_42638 < cnt);
var state_42674__$1 = state_42674;
if(cljs.core.truth_(inst_42640)){
var statearr_42685_42754 = state_42674__$1;
(statearr_42685_42754[(1)] = (6));

} else {
var statearr_42687_42755 = state_42674__$1;
(statearr_42687_42755[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (15))){
var inst_42670 = (state_42674[(2)]);
var state_42674__$1 = state_42674;
var statearr_42694_42756 = state_42674__$1;
(statearr_42694_42756[(2)] = inst_42670);

(statearr_42694_42756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (13))){
var inst_42663 = cljs.core.async.close_BANG_.call(null,out);
var state_42674__$1 = state_42674;
var statearr_42695_42760 = state_42674__$1;
(statearr_42695_42760[(2)] = inst_42663);

(statearr_42695_42760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (6))){
var state_42674__$1 = state_42674;
var statearr_42696_42762 = state_42674__$1;
(statearr_42696_42762[(2)] = null);

(statearr_42696_42762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (3))){
var inst_42672 = (state_42674[(2)]);
var state_42674__$1 = state_42674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42674__$1,inst_42672);
} else {
if((state_val_42675 === (12))){
var inst_42660 = (state_42674[(8)]);
var inst_42660__$1 = (state_42674[(2)]);
var inst_42661 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42660__$1);
var state_42674__$1 = (function (){var statearr_42699 = state_42674;
(statearr_42699[(8)] = inst_42660__$1);

return statearr_42699;
})();
if(cljs.core.truth_(inst_42661)){
var statearr_42701_42765 = state_42674__$1;
(statearr_42701_42765[(1)] = (13));

} else {
var statearr_42702_42767 = state_42674__$1;
(statearr_42702_42767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (2))){
var inst_42637 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42638 = (0);
var state_42674__$1 = (function (){var statearr_42703 = state_42674;
(statearr_42703[(7)] = inst_42638);

(statearr_42703[(9)] = inst_42637);

return statearr_42703;
})();
var statearr_42704_42776 = state_42674__$1;
(statearr_42704_42776[(2)] = null);

(statearr_42704_42776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (11))){
var inst_42638 = (state_42674[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42674,(10),Object,null,(9));
var inst_42647 = chs__$1.call(null,inst_42638);
var inst_42648 = done.call(null,inst_42638);
var inst_42649 = cljs.core.async.take_BANG_.call(null,inst_42647,inst_42648);
var state_42674__$1 = state_42674;
var statearr_42712_42781 = state_42674__$1;
(statearr_42712_42781[(2)] = inst_42649);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (9))){
var inst_42638 = (state_42674[(7)]);
var inst_42651 = (state_42674[(2)]);
var inst_42652 = (inst_42638 + (1));
var inst_42638__$1 = inst_42652;
var state_42674__$1 = (function (){var statearr_42713 = state_42674;
(statearr_42713[(7)] = inst_42638__$1);

(statearr_42713[(10)] = inst_42651);

return statearr_42713;
})();
var statearr_42714_42783 = state_42674__$1;
(statearr_42714_42783[(2)] = null);

(statearr_42714_42783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (5))){
var inst_42658 = (state_42674[(2)]);
var state_42674__$1 = (function (){var statearr_42717 = state_42674;
(statearr_42717[(11)] = inst_42658);

return statearr_42717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42674__$1,(12),dchan);
} else {
if((state_val_42675 === (14))){
var inst_42660 = (state_42674[(8)]);
var inst_42665 = cljs.core.apply.call(null,f,inst_42660);
var state_42674__$1 = state_42674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42674__$1,(16),out,inst_42665);
} else {
if((state_val_42675 === (16))){
var inst_42667 = (state_42674[(2)]);
var state_42674__$1 = (function (){var statearr_42720 = state_42674;
(statearr_42720[(12)] = inst_42667);

return statearr_42720;
})();
var statearr_42721_42793 = state_42674__$1;
(statearr_42721_42793[(2)] = null);

(statearr_42721_42793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (10))){
var inst_42642 = (state_42674[(2)]);
var inst_42643 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42674__$1 = (function (){var statearr_42725 = state_42674;
(statearr_42725[(13)] = inst_42642);

return statearr_42725;
})();
var statearr_42726_42796 = state_42674__$1;
(statearr_42726_42796[(2)] = inst_42643);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42675 === (8))){
var inst_42656 = (state_42674[(2)]);
var state_42674__$1 = state_42674;
var statearr_42729_42798 = state_42674__$1;
(statearr_42729_42798[(2)] = inst_42656);

(statearr_42729_42798[(1)] = (5));


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
});})(c__33952__auto___42746,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33607__auto__,c__33952__auto___42746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_42731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42731[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_42731[(1)] = (1));

return statearr_42731;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_42674){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_42674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e42732){if((e42732 instanceof Object)){
var ex__33611__auto__ = e42732;
var statearr_42733_42799 = state_42674;
(statearr_42733_42799[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42800 = state_42674;
state_42674 = G__42800;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_42674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_42674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___42746,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33954__auto__ = (function (){var statearr_42734 = f__33953__auto__.call(null);
(statearr_42734[(6)] = c__33952__auto___42746);

return statearr_42734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___42746,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__42803 = arguments.length;
switch (G__42803) {
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
var c__33952__auto___42869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___42869,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___42869,out){
return (function (state_42835){
var state_val_42836 = (state_42835[(1)]);
if((state_val_42836 === (7))){
var inst_42815 = (state_42835[(7)]);
var inst_42814 = (state_42835[(8)]);
var inst_42814__$1 = (state_42835[(2)]);
var inst_42815__$1 = cljs.core.nth.call(null,inst_42814__$1,(0),null);
var inst_42816 = cljs.core.nth.call(null,inst_42814__$1,(1),null);
var inst_42817 = (inst_42815__$1 == null);
var state_42835__$1 = (function (){var statearr_42837 = state_42835;
(statearr_42837[(9)] = inst_42816);

(statearr_42837[(7)] = inst_42815__$1);

(statearr_42837[(8)] = inst_42814__$1);

return statearr_42837;
})();
if(cljs.core.truth_(inst_42817)){
var statearr_42838_42878 = state_42835__$1;
(statearr_42838_42878[(1)] = (8));

} else {
var statearr_42839_42879 = state_42835__$1;
(statearr_42839_42879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42836 === (1))){
var inst_42804 = cljs.core.vec.call(null,chs);
var inst_42805 = inst_42804;
var state_42835__$1 = (function (){var statearr_42840 = state_42835;
(statearr_42840[(10)] = inst_42805);

return statearr_42840;
})();
var statearr_42841_42880 = state_42835__$1;
(statearr_42841_42880[(2)] = null);

(statearr_42841_42880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42836 === (4))){
var inst_42805 = (state_42835[(10)]);
var state_42835__$1 = state_42835;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42835__$1,(7),inst_42805);
} else {
if((state_val_42836 === (6))){
var inst_42831 = (state_42835[(2)]);
var state_42835__$1 = state_42835;
var statearr_42842_42881 = state_42835__$1;
(statearr_42842_42881[(2)] = inst_42831);

(statearr_42842_42881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42836 === (3))){
var inst_42833 = (state_42835[(2)]);
var state_42835__$1 = state_42835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42835__$1,inst_42833);
} else {
if((state_val_42836 === (2))){
var inst_42805 = (state_42835[(10)]);
var inst_42807 = cljs.core.count.call(null,inst_42805);
var inst_42808 = (inst_42807 > (0));
var state_42835__$1 = state_42835;
if(cljs.core.truth_(inst_42808)){
var statearr_42847_42886 = state_42835__$1;
(statearr_42847_42886[(1)] = (4));

} else {
var statearr_42848_42887 = state_42835__$1;
(statearr_42848_42887[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42836 === (11))){
var inst_42805 = (state_42835[(10)]);
var inst_42824 = (state_42835[(2)]);
var tmp42843 = inst_42805;
var inst_42805__$1 = tmp42843;
var state_42835__$1 = (function (){var statearr_42849 = state_42835;
(statearr_42849[(10)] = inst_42805__$1);

(statearr_42849[(11)] = inst_42824);

return statearr_42849;
})();
var statearr_42850_42888 = state_42835__$1;
(statearr_42850_42888[(2)] = null);

(statearr_42850_42888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42836 === (9))){
var inst_42815 = (state_42835[(7)]);
var state_42835__$1 = state_42835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42835__$1,(11),out,inst_42815);
} else {
if((state_val_42836 === (5))){
var inst_42829 = cljs.core.async.close_BANG_.call(null,out);
var state_42835__$1 = state_42835;
var statearr_42851_42889 = state_42835__$1;
(statearr_42851_42889[(2)] = inst_42829);

(statearr_42851_42889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42836 === (10))){
var inst_42827 = (state_42835[(2)]);
var state_42835__$1 = state_42835;
var statearr_42852_42894 = state_42835__$1;
(statearr_42852_42894[(2)] = inst_42827);

(statearr_42852_42894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42836 === (8))){
var inst_42816 = (state_42835[(9)]);
var inst_42805 = (state_42835[(10)]);
var inst_42815 = (state_42835[(7)]);
var inst_42814 = (state_42835[(8)]);
var inst_42819 = (function (){var cs = inst_42805;
var vec__42810 = inst_42814;
var v = inst_42815;
var c = inst_42816;
return ((function (cs,vec__42810,v,c,inst_42816,inst_42805,inst_42815,inst_42814,state_val_42836,c__33952__auto___42869,out){
return (function (p1__42801_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42801_SHARP_);
});
;})(cs,vec__42810,v,c,inst_42816,inst_42805,inst_42815,inst_42814,state_val_42836,c__33952__auto___42869,out))
})();
var inst_42820 = cljs.core.filterv.call(null,inst_42819,inst_42805);
var inst_42805__$1 = inst_42820;
var state_42835__$1 = (function (){var statearr_42853 = state_42835;
(statearr_42853[(10)] = inst_42805__$1);

return statearr_42853;
})();
var statearr_42854_42900 = state_42835__$1;
(statearr_42854_42900[(2)] = null);

(statearr_42854_42900[(1)] = (2));


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
});})(c__33952__auto___42869,out))
;
return ((function (switch__33607__auto__,c__33952__auto___42869,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_42860 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42860[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_42860[(1)] = (1));

return statearr_42860;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_42835){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_42835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e42861){if((e42861 instanceof Object)){
var ex__33611__auto__ = e42861;
var statearr_42863_42906 = state_42835;
(statearr_42863_42906[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42907 = state_42835;
state_42835 = G__42907;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_42835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_42835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___42869,out))
})();
var state__33954__auto__ = (function (){var statearr_42864 = f__33953__auto__.call(null);
(statearr_42864[(6)] = c__33952__auto___42869);

return statearr_42864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___42869,out))
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
var G__42916 = arguments.length;
switch (G__42916) {
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
var c__33952__auto___42976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___42976,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___42976,out){
return (function (state_42940){
var state_val_42941 = (state_42940[(1)]);
if((state_val_42941 === (7))){
var inst_42922 = (state_42940[(7)]);
var inst_42922__$1 = (state_42940[(2)]);
var inst_42923 = (inst_42922__$1 == null);
var inst_42924 = cljs.core.not.call(null,inst_42923);
var state_42940__$1 = (function (){var statearr_42942 = state_42940;
(statearr_42942[(7)] = inst_42922__$1);

return statearr_42942;
})();
if(inst_42924){
var statearr_42943_42981 = state_42940__$1;
(statearr_42943_42981[(1)] = (8));

} else {
var statearr_42944_42982 = state_42940__$1;
(statearr_42944_42982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42941 === (1))){
var inst_42917 = (0);
var state_42940__$1 = (function (){var statearr_42949 = state_42940;
(statearr_42949[(8)] = inst_42917);

return statearr_42949;
})();
var statearr_42950_42985 = state_42940__$1;
(statearr_42950_42985[(2)] = null);

(statearr_42950_42985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42941 === (4))){
var state_42940__$1 = state_42940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42940__$1,(7),ch);
} else {
if((state_val_42941 === (6))){
var inst_42935 = (state_42940[(2)]);
var state_42940__$1 = state_42940;
var statearr_42951_42986 = state_42940__$1;
(statearr_42951_42986[(2)] = inst_42935);

(statearr_42951_42986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42941 === (3))){
var inst_42937 = (state_42940[(2)]);
var inst_42938 = cljs.core.async.close_BANG_.call(null,out);
var state_42940__$1 = (function (){var statearr_42952 = state_42940;
(statearr_42952[(9)] = inst_42937);

return statearr_42952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42940__$1,inst_42938);
} else {
if((state_val_42941 === (2))){
var inst_42917 = (state_42940[(8)]);
var inst_42919 = (inst_42917 < n);
var state_42940__$1 = state_42940;
if(cljs.core.truth_(inst_42919)){
var statearr_42953_42996 = state_42940__$1;
(statearr_42953_42996[(1)] = (4));

} else {
var statearr_42954_42997 = state_42940__$1;
(statearr_42954_42997[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42941 === (11))){
var inst_42917 = (state_42940[(8)]);
var inst_42927 = (state_42940[(2)]);
var inst_42928 = (inst_42917 + (1));
var inst_42917__$1 = inst_42928;
var state_42940__$1 = (function (){var statearr_42955 = state_42940;
(statearr_42955[(10)] = inst_42927);

(statearr_42955[(8)] = inst_42917__$1);

return statearr_42955;
})();
var statearr_42956_43001 = state_42940__$1;
(statearr_42956_43001[(2)] = null);

(statearr_42956_43001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42941 === (9))){
var state_42940__$1 = state_42940;
var statearr_42958_43003 = state_42940__$1;
(statearr_42958_43003[(2)] = null);

(statearr_42958_43003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42941 === (5))){
var state_42940__$1 = state_42940;
var statearr_42962_43004 = state_42940__$1;
(statearr_42962_43004[(2)] = null);

(statearr_42962_43004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42941 === (10))){
var inst_42932 = (state_42940[(2)]);
var state_42940__$1 = state_42940;
var statearr_42964_43008 = state_42940__$1;
(statearr_42964_43008[(2)] = inst_42932);

(statearr_42964_43008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42941 === (8))){
var inst_42922 = (state_42940[(7)]);
var state_42940__$1 = state_42940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42940__$1,(11),out,inst_42922);
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
});})(c__33952__auto___42976,out))
;
return ((function (switch__33607__auto__,c__33952__auto___42976,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_42968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42968[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_42968[(1)] = (1));

return statearr_42968;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_42940){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_42940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e42969){if((e42969 instanceof Object)){
var ex__33611__auto__ = e42969;
var statearr_42970_43015 = state_42940;
(statearr_42970_43015[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43016 = state_42940;
state_42940 = G__43016;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_42940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_42940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___42976,out))
})();
var state__33954__auto__ = (function (){var statearr_42971 = f__33953__auto__.call(null);
(statearr_42971[(6)] = c__33952__auto___42976);

return statearr_42971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___42976,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43018 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43018 = (function (f,ch,meta43019){
this.f = f;
this.ch = ch;
this.meta43019 = meta43019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43020,meta43019__$1){
var self__ = this;
var _43020__$1 = this;
return (new cljs.core.async.t_cljs$core$async43018(self__.f,self__.ch,meta43019__$1));
});

cljs.core.async.t_cljs$core$async43018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43020){
var self__ = this;
var _43020__$1 = this;
return self__.meta43019;
});

cljs.core.async.t_cljs$core$async43018.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43018.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43018.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43018.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43018.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43023 = (function (f,ch,meta43019,_,fn1,meta43024){
this.f = f;
this.ch = ch;
this.meta43019 = meta43019;
this._ = _;
this.fn1 = fn1;
this.meta43024 = meta43024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43025,meta43024__$1){
var self__ = this;
var _43025__$1 = this;
return (new cljs.core.async.t_cljs$core$async43023(self__.f,self__.ch,self__.meta43019,self__._,self__.fn1,meta43024__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43025){
var self__ = this;
var _43025__$1 = this;
return self__.meta43024;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43023.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43017_SHARP_){
return f1.call(null,(((p1__43017_SHARP_ == null))?null:self__.f.call(null,p1__43017_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43023.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43019","meta43019",-2117037791,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43018","cljs.core.async/t_cljs$core$async43018",-760709462,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43024","meta43024",-30983050,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43023";

cljs.core.async.t_cljs$core$async43023.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async43023");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43023 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43023(f__$1,ch__$1,meta43019__$1,___$2,fn1__$1,meta43024){
return (new cljs.core.async.t_cljs$core$async43023(f__$1,ch__$1,meta43019__$1,___$2,fn1__$1,meta43024));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43023(self__.f,self__.ch,self__.meta43019,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async43018.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43018.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43019","meta43019",-2117037791,null)], null);
});

cljs.core.async.t_cljs$core$async43018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43018";

cljs.core.async.t_cljs$core$async43018.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async43018");
});

cljs.core.async.__GT_t_cljs$core$async43018 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43018(f__$1,ch__$1,meta43019){
return (new cljs.core.async.t_cljs$core$async43018(f__$1,ch__$1,meta43019));
});

}

return (new cljs.core.async.t_cljs$core$async43018(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43042 = (function (f,ch,meta43043){
this.f = f;
this.ch = ch;
this.meta43043 = meta43043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43044,meta43043__$1){
var self__ = this;
var _43044__$1 = this;
return (new cljs.core.async.t_cljs$core$async43042(self__.f,self__.ch,meta43043__$1));
});

cljs.core.async.t_cljs$core$async43042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43044){
var self__ = this;
var _43044__$1 = this;
return self__.meta43043;
});

cljs.core.async.t_cljs$core$async43042.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43042.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43042.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43042.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43042.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43042.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43043","meta43043",1174992208,null)], null);
});

cljs.core.async.t_cljs$core$async43042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43042";

cljs.core.async.t_cljs$core$async43042.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async43042");
});

cljs.core.async.__GT_t_cljs$core$async43042 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43042(f__$1,ch__$1,meta43043){
return (new cljs.core.async.t_cljs$core$async43042(f__$1,ch__$1,meta43043));
});

}

return (new cljs.core.async.t_cljs$core$async43042(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43050 = (function (p,ch,meta43051){
this.p = p;
this.ch = ch;
this.meta43051 = meta43051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43052,meta43051__$1){
var self__ = this;
var _43052__$1 = this;
return (new cljs.core.async.t_cljs$core$async43050(self__.p,self__.ch,meta43051__$1));
});

cljs.core.async.t_cljs$core$async43050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43052){
var self__ = this;
var _43052__$1 = this;
return self__.meta43051;
});

cljs.core.async.t_cljs$core$async43050.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43050.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43050.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43050.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43051","meta43051",-2145446844,null)], null);
});

cljs.core.async.t_cljs$core$async43050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43050";

cljs.core.async.t_cljs$core$async43050.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async43050");
});

cljs.core.async.__GT_t_cljs$core$async43050 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43050(p__$1,ch__$1,meta43051){
return (new cljs.core.async.t_cljs$core$async43050(p__$1,ch__$1,meta43051));
});

}

return (new cljs.core.async.t_cljs$core$async43050(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43073 = arguments.length;
switch (G__43073) {
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
var c__33952__auto___43137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___43137,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___43137,out){
return (function (state_43096){
var state_val_43097 = (state_43096[(1)]);
if((state_val_43097 === (7))){
var inst_43092 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43098_43138 = state_43096__$1;
(statearr_43098_43138[(2)] = inst_43092);

(statearr_43098_43138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (1))){
var state_43096__$1 = state_43096;
var statearr_43099_43139 = state_43096__$1;
(statearr_43099_43139[(2)] = null);

(statearr_43099_43139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (4))){
var inst_43078 = (state_43096[(7)]);
var inst_43078__$1 = (state_43096[(2)]);
var inst_43079 = (inst_43078__$1 == null);
var state_43096__$1 = (function (){var statearr_43105 = state_43096;
(statearr_43105[(7)] = inst_43078__$1);

return statearr_43105;
})();
if(cljs.core.truth_(inst_43079)){
var statearr_43106_43140 = state_43096__$1;
(statearr_43106_43140[(1)] = (5));

} else {
var statearr_43107_43142 = state_43096__$1;
(statearr_43107_43142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (6))){
var inst_43078 = (state_43096[(7)]);
var inst_43083 = p.call(null,inst_43078);
var state_43096__$1 = state_43096;
if(cljs.core.truth_(inst_43083)){
var statearr_43108_43143 = state_43096__$1;
(statearr_43108_43143[(1)] = (8));

} else {
var statearr_43109_43145 = state_43096__$1;
(statearr_43109_43145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (3))){
var inst_43094 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43096__$1,inst_43094);
} else {
if((state_val_43097 === (2))){
var state_43096__$1 = state_43096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43096__$1,(4),ch);
} else {
if((state_val_43097 === (11))){
var inst_43086 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43111_43147 = state_43096__$1;
(statearr_43111_43147[(2)] = inst_43086);

(statearr_43111_43147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (9))){
var state_43096__$1 = state_43096;
var statearr_43112_43149 = state_43096__$1;
(statearr_43112_43149[(2)] = null);

(statearr_43112_43149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (5))){
var inst_43081 = cljs.core.async.close_BANG_.call(null,out);
var state_43096__$1 = state_43096;
var statearr_43113_43154 = state_43096__$1;
(statearr_43113_43154[(2)] = inst_43081);

(statearr_43113_43154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (10))){
var inst_43089 = (state_43096[(2)]);
var state_43096__$1 = (function (){var statearr_43114 = state_43096;
(statearr_43114[(8)] = inst_43089);

return statearr_43114;
})();
var statearr_43115_43179 = state_43096__$1;
(statearr_43115_43179[(2)] = null);

(statearr_43115_43179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (8))){
var inst_43078 = (state_43096[(7)]);
var state_43096__$1 = state_43096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43096__$1,(11),out,inst_43078);
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
});})(c__33952__auto___43137,out))
;
return ((function (switch__33607__auto__,c__33952__auto___43137,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_43116 = [null,null,null,null,null,null,null,null,null];
(statearr_43116[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_43116[(1)] = (1));

return statearr_43116;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_43096){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_43096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e43117){if((e43117 instanceof Object)){
var ex__33611__auto__ = e43117;
var statearr_43118_43180 = state_43096;
(statearr_43118_43180[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43181 = state_43096;
state_43096 = G__43181;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_43096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_43096);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___43137,out))
})();
var state__33954__auto__ = (function (){var statearr_43122 = f__33953__auto__.call(null);
(statearr_43122[(6)] = c__33952__auto___43137);

return statearr_43122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___43137,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43183 = arguments.length;
switch (G__43183) {
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
return (function (state_43252){
var state_val_43253 = (state_43252[(1)]);
if((state_val_43253 === (7))){
var inst_43248 = (state_43252[(2)]);
var state_43252__$1 = state_43252;
var statearr_43260_43345 = state_43252__$1;
(statearr_43260_43345[(2)] = inst_43248);

(statearr_43260_43345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (20))){
var inst_43217 = (state_43252[(7)]);
var inst_43229 = (state_43252[(2)]);
var inst_43230 = cljs.core.next.call(null,inst_43217);
var inst_43203 = inst_43230;
var inst_43204 = null;
var inst_43205 = (0);
var inst_43206 = (0);
var state_43252__$1 = (function (){var statearr_43261 = state_43252;
(statearr_43261[(8)] = inst_43203);

(statearr_43261[(9)] = inst_43205);

(statearr_43261[(10)] = inst_43204);

(statearr_43261[(11)] = inst_43229);

(statearr_43261[(12)] = inst_43206);

return statearr_43261;
})();
var statearr_43262_43349 = state_43252__$1;
(statearr_43262_43349[(2)] = null);

(statearr_43262_43349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (1))){
var state_43252__$1 = state_43252;
var statearr_43263_43350 = state_43252__$1;
(statearr_43263_43350[(2)] = null);

(statearr_43263_43350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (4))){
var inst_43192 = (state_43252[(13)]);
var inst_43192__$1 = (state_43252[(2)]);
var inst_43193 = (inst_43192__$1 == null);
var state_43252__$1 = (function (){var statearr_43264 = state_43252;
(statearr_43264[(13)] = inst_43192__$1);

return statearr_43264;
})();
if(cljs.core.truth_(inst_43193)){
var statearr_43265_43360 = state_43252__$1;
(statearr_43265_43360[(1)] = (5));

} else {
var statearr_43266_43361 = state_43252__$1;
(statearr_43266_43361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (15))){
var state_43252__$1 = state_43252;
var statearr_43270_43371 = state_43252__$1;
(statearr_43270_43371[(2)] = null);

(statearr_43270_43371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (21))){
var state_43252__$1 = state_43252;
var statearr_43271_43372 = state_43252__$1;
(statearr_43271_43372[(2)] = null);

(statearr_43271_43372[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (13))){
var inst_43203 = (state_43252[(8)]);
var inst_43205 = (state_43252[(9)]);
var inst_43204 = (state_43252[(10)]);
var inst_43206 = (state_43252[(12)]);
var inst_43213 = (state_43252[(2)]);
var inst_43214 = (inst_43206 + (1));
var tmp43267 = inst_43203;
var tmp43268 = inst_43205;
var tmp43269 = inst_43204;
var inst_43203__$1 = tmp43267;
var inst_43204__$1 = tmp43269;
var inst_43205__$1 = tmp43268;
var inst_43206__$1 = inst_43214;
var state_43252__$1 = (function (){var statearr_43272 = state_43252;
(statearr_43272[(14)] = inst_43213);

(statearr_43272[(8)] = inst_43203__$1);

(statearr_43272[(9)] = inst_43205__$1);

(statearr_43272[(10)] = inst_43204__$1);

(statearr_43272[(12)] = inst_43206__$1);

return statearr_43272;
})();
var statearr_43274_43376 = state_43252__$1;
(statearr_43274_43376[(2)] = null);

(statearr_43274_43376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (22))){
var state_43252__$1 = state_43252;
var statearr_43275_43381 = state_43252__$1;
(statearr_43275_43381[(2)] = null);

(statearr_43275_43381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (6))){
var inst_43192 = (state_43252[(13)]);
var inst_43201 = f.call(null,inst_43192);
var inst_43202 = cljs.core.seq.call(null,inst_43201);
var inst_43203 = inst_43202;
var inst_43204 = null;
var inst_43205 = (0);
var inst_43206 = (0);
var state_43252__$1 = (function (){var statearr_43276 = state_43252;
(statearr_43276[(8)] = inst_43203);

(statearr_43276[(9)] = inst_43205);

(statearr_43276[(10)] = inst_43204);

(statearr_43276[(12)] = inst_43206);

return statearr_43276;
})();
var statearr_43279_43388 = state_43252__$1;
(statearr_43279_43388[(2)] = null);

(statearr_43279_43388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (17))){
var inst_43217 = (state_43252[(7)]);
var inst_43221 = cljs.core.chunk_first.call(null,inst_43217);
var inst_43222 = cljs.core.chunk_rest.call(null,inst_43217);
var inst_43223 = cljs.core.count.call(null,inst_43221);
var inst_43203 = inst_43222;
var inst_43204 = inst_43221;
var inst_43205 = inst_43223;
var inst_43206 = (0);
var state_43252__$1 = (function (){var statearr_43284 = state_43252;
(statearr_43284[(8)] = inst_43203);

(statearr_43284[(9)] = inst_43205);

(statearr_43284[(10)] = inst_43204);

(statearr_43284[(12)] = inst_43206);

return statearr_43284;
})();
var statearr_43286_43403 = state_43252__$1;
(statearr_43286_43403[(2)] = null);

(statearr_43286_43403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (3))){
var inst_43250 = (state_43252[(2)]);
var state_43252__$1 = state_43252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43252__$1,inst_43250);
} else {
if((state_val_43253 === (12))){
var inst_43238 = (state_43252[(2)]);
var state_43252__$1 = state_43252;
var statearr_43288_43410 = state_43252__$1;
(statearr_43288_43410[(2)] = inst_43238);

(statearr_43288_43410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (2))){
var state_43252__$1 = state_43252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43252__$1,(4),in$);
} else {
if((state_val_43253 === (23))){
var inst_43246 = (state_43252[(2)]);
var state_43252__$1 = state_43252;
var statearr_43289_43419 = state_43252__$1;
(statearr_43289_43419[(2)] = inst_43246);

(statearr_43289_43419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (19))){
var inst_43233 = (state_43252[(2)]);
var state_43252__$1 = state_43252;
var statearr_43290_43424 = state_43252__$1;
(statearr_43290_43424[(2)] = inst_43233);

(statearr_43290_43424[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (11))){
var inst_43217 = (state_43252[(7)]);
var inst_43203 = (state_43252[(8)]);
var inst_43217__$1 = cljs.core.seq.call(null,inst_43203);
var state_43252__$1 = (function (){var statearr_43298 = state_43252;
(statearr_43298[(7)] = inst_43217__$1);

return statearr_43298;
})();
if(inst_43217__$1){
var statearr_43299_43437 = state_43252__$1;
(statearr_43299_43437[(1)] = (14));

} else {
var statearr_43300_43438 = state_43252__$1;
(statearr_43300_43438[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (9))){
var inst_43240 = (state_43252[(2)]);
var inst_43241 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43252__$1 = (function (){var statearr_43301 = state_43252;
(statearr_43301[(15)] = inst_43240);

return statearr_43301;
})();
if(cljs.core.truth_(inst_43241)){
var statearr_43311_43439 = state_43252__$1;
(statearr_43311_43439[(1)] = (21));

} else {
var statearr_43312_43440 = state_43252__$1;
(statearr_43312_43440[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (5))){
var inst_43195 = cljs.core.async.close_BANG_.call(null,out);
var state_43252__$1 = state_43252;
var statearr_43316_43441 = state_43252__$1;
(statearr_43316_43441[(2)] = inst_43195);

(statearr_43316_43441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (14))){
var inst_43217 = (state_43252[(7)]);
var inst_43219 = cljs.core.chunked_seq_QMARK_.call(null,inst_43217);
var state_43252__$1 = state_43252;
if(inst_43219){
var statearr_43317_43446 = state_43252__$1;
(statearr_43317_43446[(1)] = (17));

} else {
var statearr_43318_43447 = state_43252__$1;
(statearr_43318_43447[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (16))){
var inst_43236 = (state_43252[(2)]);
var state_43252__$1 = state_43252;
var statearr_43319_43451 = state_43252__$1;
(statearr_43319_43451[(2)] = inst_43236);

(statearr_43319_43451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43253 === (10))){
var inst_43204 = (state_43252[(10)]);
var inst_43206 = (state_43252[(12)]);
var inst_43211 = cljs.core._nth.call(null,inst_43204,inst_43206);
var state_43252__$1 = state_43252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43252__$1,(13),out,inst_43211);
} else {
if((state_val_43253 === (18))){
var inst_43217 = (state_43252[(7)]);
var inst_43227 = cljs.core.first.call(null,inst_43217);
var state_43252__$1 = state_43252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43252__$1,(20),out,inst_43227);
} else {
if((state_val_43253 === (8))){
var inst_43205 = (state_43252[(9)]);
var inst_43206 = (state_43252[(12)]);
var inst_43208 = (inst_43206 < inst_43205);
var inst_43209 = inst_43208;
var state_43252__$1 = state_43252;
if(cljs.core.truth_(inst_43209)){
var statearr_43322_43468 = state_43252__$1;
(statearr_43322_43468[(1)] = (10));

} else {
var statearr_43323_43473 = state_43252__$1;
(statearr_43323_43473[(1)] = (11));

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
var statearr_43324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43324[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__);

(statearr_43324[(1)] = (1));

return statearr_43324;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____1 = (function (state_43252){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_43252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e43332){if((e43332 instanceof Object)){
var ex__33611__auto__ = e43332;
var statearr_43333_43485 = state_43252;
(statearr_43333_43485[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43490 = state_43252;
state_43252 = G__43490;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__ = function(state_43252){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____1.call(this,state_43252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33608__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_43334 = f__33953__auto__.call(null);
(statearr_43334[(6)] = c__33952__auto__);

return statearr_43334;
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
var G__43499 = arguments.length;
switch (G__43499) {
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
var G__43521 = arguments.length;
switch (G__43521) {
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
var G__43528 = arguments.length;
switch (G__43528) {
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
var c__33952__auto___43588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___43588,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___43588,out){
return (function (state_43553){
var state_val_43554 = (state_43553[(1)]);
if((state_val_43554 === (7))){
var inst_43548 = (state_43553[(2)]);
var state_43553__$1 = state_43553;
var statearr_43555_43591 = state_43553__$1;
(statearr_43555_43591[(2)] = inst_43548);

(statearr_43555_43591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43554 === (1))){
var inst_43530 = null;
var state_43553__$1 = (function (){var statearr_43556 = state_43553;
(statearr_43556[(7)] = inst_43530);

return statearr_43556;
})();
var statearr_43557_43592 = state_43553__$1;
(statearr_43557_43592[(2)] = null);

(statearr_43557_43592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43554 === (4))){
var inst_43533 = (state_43553[(8)]);
var inst_43533__$1 = (state_43553[(2)]);
var inst_43534 = (inst_43533__$1 == null);
var inst_43535 = cljs.core.not.call(null,inst_43534);
var state_43553__$1 = (function (){var statearr_43561 = state_43553;
(statearr_43561[(8)] = inst_43533__$1);

return statearr_43561;
})();
if(inst_43535){
var statearr_43562_43597 = state_43553__$1;
(statearr_43562_43597[(1)] = (5));

} else {
var statearr_43563_43598 = state_43553__$1;
(statearr_43563_43598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43554 === (6))){
var state_43553__$1 = state_43553;
var statearr_43567_43599 = state_43553__$1;
(statearr_43567_43599[(2)] = null);

(statearr_43567_43599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43554 === (3))){
var inst_43550 = (state_43553[(2)]);
var inst_43551 = cljs.core.async.close_BANG_.call(null,out);
var state_43553__$1 = (function (){var statearr_43568 = state_43553;
(statearr_43568[(9)] = inst_43550);

return statearr_43568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43553__$1,inst_43551);
} else {
if((state_val_43554 === (2))){
var state_43553__$1 = state_43553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43553__$1,(4),ch);
} else {
if((state_val_43554 === (11))){
var inst_43533 = (state_43553[(8)]);
var inst_43542 = (state_43553[(2)]);
var inst_43530 = inst_43533;
var state_43553__$1 = (function (){var statearr_43569 = state_43553;
(statearr_43569[(10)] = inst_43542);

(statearr_43569[(7)] = inst_43530);

return statearr_43569;
})();
var statearr_43570_43603 = state_43553__$1;
(statearr_43570_43603[(2)] = null);

(statearr_43570_43603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43554 === (9))){
var inst_43533 = (state_43553[(8)]);
var state_43553__$1 = state_43553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43553__$1,(11),out,inst_43533);
} else {
if((state_val_43554 === (5))){
var inst_43530 = (state_43553[(7)]);
var inst_43533 = (state_43553[(8)]);
var inst_43537 = cljs.core._EQ_.call(null,inst_43533,inst_43530);
var state_43553__$1 = state_43553;
if(inst_43537){
var statearr_43574_43606 = state_43553__$1;
(statearr_43574_43606[(1)] = (8));

} else {
var statearr_43575_43607 = state_43553__$1;
(statearr_43575_43607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43554 === (10))){
var inst_43545 = (state_43553[(2)]);
var state_43553__$1 = state_43553;
var statearr_43576_43620 = state_43553__$1;
(statearr_43576_43620[(2)] = inst_43545);

(statearr_43576_43620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43554 === (8))){
var inst_43530 = (state_43553[(7)]);
var tmp43571 = inst_43530;
var inst_43530__$1 = tmp43571;
var state_43553__$1 = (function (){var statearr_43580 = state_43553;
(statearr_43580[(7)] = inst_43530__$1);

return statearr_43580;
})();
var statearr_43581_43623 = state_43553__$1;
(statearr_43581_43623[(2)] = null);

(statearr_43581_43623[(1)] = (2));


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
});})(c__33952__auto___43588,out))
;
return ((function (switch__33607__auto__,c__33952__auto___43588,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_43582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43582[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_43582[(1)] = (1));

return statearr_43582;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_43553){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_43553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e43584){if((e43584 instanceof Object)){
var ex__33611__auto__ = e43584;
var statearr_43585_43624 = state_43553;
(statearr_43585_43624[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43625 = state_43553;
state_43553 = G__43625;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_43553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_43553);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___43588,out))
})();
var state__33954__auto__ = (function (){var statearr_43586 = f__33953__auto__.call(null);
(statearr_43586[(6)] = c__33952__auto___43588);

return statearr_43586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___43588,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43629 = arguments.length;
switch (G__43629) {
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
var c__33952__auto___43713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___43713,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___43713,out){
return (function (state_43668){
var state_val_43669 = (state_43668[(1)]);
if((state_val_43669 === (7))){
var inst_43664 = (state_43668[(2)]);
var state_43668__$1 = state_43668;
var statearr_43670_43717 = state_43668__$1;
(statearr_43670_43717[(2)] = inst_43664);

(statearr_43670_43717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43669 === (1))){
var inst_43630 = (new Array(n));
var inst_43631 = inst_43630;
var inst_43632 = (0);
var state_43668__$1 = (function (){var statearr_43671 = state_43668;
(statearr_43671[(7)] = inst_43631);

(statearr_43671[(8)] = inst_43632);

return statearr_43671;
})();
var statearr_43672_43719 = state_43668__$1;
(statearr_43672_43719[(2)] = null);

(statearr_43672_43719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43669 === (4))){
var inst_43635 = (state_43668[(9)]);
var inst_43635__$1 = (state_43668[(2)]);
var inst_43636 = (inst_43635__$1 == null);
var inst_43637 = cljs.core.not.call(null,inst_43636);
var state_43668__$1 = (function (){var statearr_43673 = state_43668;
(statearr_43673[(9)] = inst_43635__$1);

return statearr_43673;
})();
if(inst_43637){
var statearr_43674_43722 = state_43668__$1;
(statearr_43674_43722[(1)] = (5));

} else {
var statearr_43675_43725 = state_43668__$1;
(statearr_43675_43725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43669 === (15))){
var inst_43657 = (state_43668[(2)]);
var state_43668__$1 = state_43668;
var statearr_43676_43727 = state_43668__$1;
(statearr_43676_43727[(2)] = inst_43657);

(statearr_43676_43727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43669 === (13))){
var state_43668__$1 = state_43668;
var statearr_43677_43728 = state_43668__$1;
(statearr_43677_43728[(2)] = null);

(statearr_43677_43728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43669 === (6))){
var inst_43632 = (state_43668[(8)]);
var inst_43653 = (inst_43632 > (0));
var state_43668__$1 = state_43668;
if(cljs.core.truth_(inst_43653)){
var statearr_43679_43732 = state_43668__$1;
(statearr_43679_43732[(1)] = (12));

} else {
var statearr_43681_43733 = state_43668__$1;
(statearr_43681_43733[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43669 === (3))){
var inst_43666 = (state_43668[(2)]);
var state_43668__$1 = state_43668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43668__$1,inst_43666);
} else {
if((state_val_43669 === (12))){
var inst_43631 = (state_43668[(7)]);
var inst_43655 = cljs.core.vec.call(null,inst_43631);
var state_43668__$1 = state_43668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43668__$1,(15),out,inst_43655);
} else {
if((state_val_43669 === (2))){
var state_43668__$1 = state_43668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43668__$1,(4),ch);
} else {
if((state_val_43669 === (11))){
var inst_43647 = (state_43668[(2)]);
var inst_43648 = (new Array(n));
var inst_43631 = inst_43648;
var inst_43632 = (0);
var state_43668__$1 = (function (){var statearr_43682 = state_43668;
(statearr_43682[(10)] = inst_43647);

(statearr_43682[(7)] = inst_43631);

(statearr_43682[(8)] = inst_43632);

return statearr_43682;
})();
var statearr_43684_43743 = state_43668__$1;
(statearr_43684_43743[(2)] = null);

(statearr_43684_43743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43669 === (9))){
var inst_43631 = (state_43668[(7)]);
var inst_43645 = cljs.core.vec.call(null,inst_43631);
var state_43668__$1 = state_43668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43668__$1,(11),out,inst_43645);
} else {
if((state_val_43669 === (5))){
var inst_43635 = (state_43668[(9)]);
var inst_43640 = (state_43668[(11)]);
var inst_43631 = (state_43668[(7)]);
var inst_43632 = (state_43668[(8)]);
var inst_43639 = (inst_43631[inst_43632] = inst_43635);
var inst_43640__$1 = (inst_43632 + (1));
var inst_43641 = (inst_43640__$1 < n);
var state_43668__$1 = (function (){var statearr_43685 = state_43668;
(statearr_43685[(12)] = inst_43639);

(statearr_43685[(11)] = inst_43640__$1);

return statearr_43685;
})();
if(cljs.core.truth_(inst_43641)){
var statearr_43686_43770 = state_43668__$1;
(statearr_43686_43770[(1)] = (8));

} else {
var statearr_43687_43771 = state_43668__$1;
(statearr_43687_43771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43669 === (14))){
var inst_43661 = (state_43668[(2)]);
var inst_43662 = cljs.core.async.close_BANG_.call(null,out);
var state_43668__$1 = (function (){var statearr_43689 = state_43668;
(statearr_43689[(13)] = inst_43661);

return statearr_43689;
})();
var statearr_43691_43772 = state_43668__$1;
(statearr_43691_43772[(2)] = inst_43662);

(statearr_43691_43772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43669 === (10))){
var inst_43651 = (state_43668[(2)]);
var state_43668__$1 = state_43668;
var statearr_43693_43773 = state_43668__$1;
(statearr_43693_43773[(2)] = inst_43651);

(statearr_43693_43773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43669 === (8))){
var inst_43640 = (state_43668[(11)]);
var inst_43631 = (state_43668[(7)]);
var tmp43688 = inst_43631;
var inst_43631__$1 = tmp43688;
var inst_43632 = inst_43640;
var state_43668__$1 = (function (){var statearr_43698 = state_43668;
(statearr_43698[(7)] = inst_43631__$1);

(statearr_43698[(8)] = inst_43632);

return statearr_43698;
})();
var statearr_43699_43778 = state_43668__$1;
(statearr_43699_43778[(2)] = null);

(statearr_43699_43778[(1)] = (2));


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
});})(c__33952__auto___43713,out))
;
return ((function (switch__33607__auto__,c__33952__auto___43713,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_43700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43700[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_43700[(1)] = (1));

return statearr_43700;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_43668){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_43668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e43701){if((e43701 instanceof Object)){
var ex__33611__auto__ = e43701;
var statearr_43703_43779 = state_43668;
(statearr_43703_43779[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43781 = state_43668;
state_43668 = G__43781;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_43668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_43668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___43713,out))
})();
var state__33954__auto__ = (function (){var statearr_43704 = f__33953__auto__.call(null);
(statearr_43704[(6)] = c__33952__auto___43713);

return statearr_43704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___43713,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43783 = arguments.length;
switch (G__43783) {
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
var c__33952__auto___43862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___43862,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___43862,out){
return (function (state_43828){
var state_val_43829 = (state_43828[(1)]);
if((state_val_43829 === (7))){
var inst_43821 = (state_43828[(2)]);
var state_43828__$1 = state_43828;
var statearr_43830_43867 = state_43828__$1;
(statearr_43830_43867[(2)] = inst_43821);

(statearr_43830_43867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43829 === (1))){
var inst_43784 = [];
var inst_43785 = inst_43784;
var inst_43786 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43828__$1 = (function (){var statearr_43831 = state_43828;
(statearr_43831[(7)] = inst_43785);

(statearr_43831[(8)] = inst_43786);

return statearr_43831;
})();
var statearr_43832_43871 = state_43828__$1;
(statearr_43832_43871[(2)] = null);

(statearr_43832_43871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43829 === (4))){
var inst_43789 = (state_43828[(9)]);
var inst_43789__$1 = (state_43828[(2)]);
var inst_43790 = (inst_43789__$1 == null);
var inst_43791 = cljs.core.not.call(null,inst_43790);
var state_43828__$1 = (function (){var statearr_43836 = state_43828;
(statearr_43836[(9)] = inst_43789__$1);

return statearr_43836;
})();
if(inst_43791){
var statearr_43837_43872 = state_43828__$1;
(statearr_43837_43872[(1)] = (5));

} else {
var statearr_43838_43873 = state_43828__$1;
(statearr_43838_43873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43829 === (15))){
var inst_43815 = (state_43828[(2)]);
var state_43828__$1 = state_43828;
var statearr_43839_43876 = state_43828__$1;
(statearr_43839_43876[(2)] = inst_43815);

(statearr_43839_43876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43829 === (13))){
var state_43828__$1 = state_43828;
var statearr_43840_43879 = state_43828__$1;
(statearr_43840_43879[(2)] = null);

(statearr_43840_43879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43829 === (6))){
var inst_43785 = (state_43828[(7)]);
var inst_43810 = inst_43785.length;
var inst_43811 = (inst_43810 > (0));
var state_43828__$1 = state_43828;
if(cljs.core.truth_(inst_43811)){
var statearr_43841_43880 = state_43828__$1;
(statearr_43841_43880[(1)] = (12));

} else {
var statearr_43842_43881 = state_43828__$1;
(statearr_43842_43881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43829 === (3))){
var inst_43826 = (state_43828[(2)]);
var state_43828__$1 = state_43828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43828__$1,inst_43826);
} else {
if((state_val_43829 === (12))){
var inst_43785 = (state_43828[(7)]);
var inst_43813 = cljs.core.vec.call(null,inst_43785);
var state_43828__$1 = state_43828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43828__$1,(15),out,inst_43813);
} else {
if((state_val_43829 === (2))){
var state_43828__$1 = state_43828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43828__$1,(4),ch);
} else {
if((state_val_43829 === (11))){
var inst_43793 = (state_43828[(10)]);
var inst_43789 = (state_43828[(9)]);
var inst_43803 = (state_43828[(2)]);
var inst_43804 = [];
var inst_43805 = inst_43804.push(inst_43789);
var inst_43785 = inst_43804;
var inst_43786 = inst_43793;
var state_43828__$1 = (function (){var statearr_43843 = state_43828;
(statearr_43843[(11)] = inst_43805);

(statearr_43843[(7)] = inst_43785);

(statearr_43843[(8)] = inst_43786);

(statearr_43843[(12)] = inst_43803);

return statearr_43843;
})();
var statearr_43844_43882 = state_43828__$1;
(statearr_43844_43882[(2)] = null);

(statearr_43844_43882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43829 === (9))){
var inst_43785 = (state_43828[(7)]);
var inst_43801 = cljs.core.vec.call(null,inst_43785);
var state_43828__$1 = state_43828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43828__$1,(11),out,inst_43801);
} else {
if((state_val_43829 === (5))){
var inst_43793 = (state_43828[(10)]);
var inst_43789 = (state_43828[(9)]);
var inst_43786 = (state_43828[(8)]);
var inst_43793__$1 = f.call(null,inst_43789);
var inst_43794 = cljs.core._EQ_.call(null,inst_43793__$1,inst_43786);
var inst_43795 = cljs.core.keyword_identical_QMARK_.call(null,inst_43786,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43796 = (inst_43794) || (inst_43795);
var state_43828__$1 = (function (){var statearr_43845 = state_43828;
(statearr_43845[(10)] = inst_43793__$1);

return statearr_43845;
})();
if(cljs.core.truth_(inst_43796)){
var statearr_43846_43883 = state_43828__$1;
(statearr_43846_43883[(1)] = (8));

} else {
var statearr_43847_43884 = state_43828__$1;
(statearr_43847_43884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43829 === (14))){
var inst_43818 = (state_43828[(2)]);
var inst_43819 = cljs.core.async.close_BANG_.call(null,out);
var state_43828__$1 = (function (){var statearr_43849 = state_43828;
(statearr_43849[(13)] = inst_43818);

return statearr_43849;
})();
var statearr_43850_43885 = state_43828__$1;
(statearr_43850_43885[(2)] = inst_43819);

(statearr_43850_43885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43829 === (10))){
var inst_43808 = (state_43828[(2)]);
var state_43828__$1 = state_43828;
var statearr_43851_43887 = state_43828__$1;
(statearr_43851_43887[(2)] = inst_43808);

(statearr_43851_43887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43829 === (8))){
var inst_43793 = (state_43828[(10)]);
var inst_43785 = (state_43828[(7)]);
var inst_43789 = (state_43828[(9)]);
var inst_43798 = inst_43785.push(inst_43789);
var tmp43848 = inst_43785;
var inst_43785__$1 = tmp43848;
var inst_43786 = inst_43793;
var state_43828__$1 = (function (){var statearr_43852 = state_43828;
(statearr_43852[(14)] = inst_43798);

(statearr_43852[(7)] = inst_43785__$1);

(statearr_43852[(8)] = inst_43786);

return statearr_43852;
})();
var statearr_43853_43888 = state_43828__$1;
(statearr_43853_43888[(2)] = null);

(statearr_43853_43888[(1)] = (2));


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
});})(c__33952__auto___43862,out))
;
return ((function (switch__33607__auto__,c__33952__auto___43862,out){
return (function() {
var cljs$core$async$state_machine__33608__auto__ = null;
var cljs$core$async$state_machine__33608__auto____0 = (function (){
var statearr_43854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43854[(0)] = cljs$core$async$state_machine__33608__auto__);

(statearr_43854[(1)] = (1));

return statearr_43854;
});
var cljs$core$async$state_machine__33608__auto____1 = (function (state_43828){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_43828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e43855){if((e43855 instanceof Object)){
var ex__33611__auto__ = e43855;
var statearr_43856_43890 = state_43828;
(statearr_43856_43890[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43891 = state_43828;
state_43828 = G__43891;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
cljs$core$async$state_machine__33608__auto__ = function(state_43828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33608__auto____1.call(this,state_43828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33608__auto____0;
cljs$core$async$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33608__auto____1;
return cljs$core$async$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___43862,out))
})();
var state__33954__auto__ = (function (){var statearr_43857 = f__33953__auto__.call(null);
(statearr_43857[(6)] = c__33952__auto___43862);

return statearr_43857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___43862,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510360394429
