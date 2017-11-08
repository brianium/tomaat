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
var G__39792 = arguments.length;
switch (G__39792) {
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
if(typeof cljs.core.async.t_cljs$core$async39793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39793 = (function (f,blockable,meta39794){
this.f = f;
this.blockable = blockable;
this.meta39794 = meta39794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39795,meta39794__$1){
var self__ = this;
var _39795__$1 = this;
return (new cljs.core.async.t_cljs$core$async39793(self__.f,self__.blockable,meta39794__$1));
});

cljs.core.async.t_cljs$core$async39793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39795){
var self__ = this;
var _39795__$1 = this;
return self__.meta39794;
});

cljs.core.async.t_cljs$core$async39793.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39793.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39794","meta39794",-713453779,null)], null);
});

cljs.core.async.t_cljs$core$async39793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39793";

cljs.core.async.t_cljs$core$async39793.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async39793");
});

cljs.core.async.__GT_t_cljs$core$async39793 = (function cljs$core$async$__GT_t_cljs$core$async39793(f__$1,blockable__$1,meta39794){
return (new cljs.core.async.t_cljs$core$async39793(f__$1,blockable__$1,meta39794));
});

}

return (new cljs.core.async.t_cljs$core$async39793(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39821 = arguments.length;
switch (G__39821) {
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
var G__39835 = arguments.length;
switch (G__39835) {
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
var G__39855 = arguments.length;
switch (G__39855) {
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
var val_39873 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39873);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39873,ret){
return (function (){
return fn1.call(null,val_39873);
});})(val_39873,ret))
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
var G__39897 = arguments.length;
switch (G__39897) {
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
var n__31115__auto___39909 = n;
var x_39910 = (0);
while(true){
if((x_39910 < n__31115__auto___39909)){
(a[x_39910] = (0));

var G__39912 = (x_39910 + (1));
x_39910 = G__39912;
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

var G__39914 = (i + (1));
i = G__39914;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39916 = (function (flag,meta39917){
this.flag = flag;
this.meta39917 = meta39917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39918,meta39917__$1){
var self__ = this;
var _39918__$1 = this;
return (new cljs.core.async.t_cljs$core$async39916(self__.flag,meta39917__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39918){
var self__ = this;
var _39918__$1 = this;
return self__.meta39917;
});})(flag))
;

cljs.core.async.t_cljs$core$async39916.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39916.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39916.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39917","meta39917",-1295497023,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39916";

cljs.core.async.t_cljs$core$async39916.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async39916");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39916 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39916(flag__$1,meta39917){
return (new cljs.core.async.t_cljs$core$async39916(flag__$1,meta39917));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39916(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39937 = (function (flag,cb,meta39938){
this.flag = flag;
this.cb = cb;
this.meta39938 = meta39938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39939,meta39938__$1){
var self__ = this;
var _39939__$1 = this;
return (new cljs.core.async.t_cljs$core$async39937(self__.flag,self__.cb,meta39938__$1));
});

cljs.core.async.t_cljs$core$async39937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39939){
var self__ = this;
var _39939__$1 = this;
return self__.meta39938;
});

cljs.core.async.t_cljs$core$async39937.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39938","meta39938",1864513665,null)], null);
});

cljs.core.async.t_cljs$core$async39937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39937";

cljs.core.async.t_cljs$core$async39937.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async39937");
});

cljs.core.async.__GT_t_cljs$core$async39937 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39937(flag__$1,cb__$1,meta39938){
return (new cljs.core.async.t_cljs$core$async39937(flag__$1,cb__$1,meta39938));
});

}

return (new cljs.core.async.t_cljs$core$async39937(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39951_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39951_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39952_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39952_SHARP_,port], null));
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
var G__39958 = (i + (1));
i = G__39958;
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
var len__31349__auto___39973 = arguments.length;
var i__31350__auto___39974 = (0);
while(true){
if((i__31350__auto___39974 < len__31349__auto___39973)){
args__31356__auto__.push((arguments[i__31350__auto___39974]));

var G__39976 = (i__31350__auto___39974 + (1));
i__31350__auto___39974 = G__39976;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39964){
var map__39965 = p__39964;
var map__39965__$1 = ((((!((map__39965 == null)))?((((map__39965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39965):map__39965);
var opts = map__39965__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39960){
var G__39961 = cljs.core.first.call(null,seq39960);
var seq39960__$1 = cljs.core.next.call(null,seq39960);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39961,seq39960__$1);
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
var G__39988 = arguments.length;
switch (G__39988) {
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
var c__33728__auto___40046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___40046){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___40046){
return (function (state_40016){
var state_val_40017 = (state_40016[(1)]);
if((state_val_40017 === (7))){
var inst_40012 = (state_40016[(2)]);
var state_40016__$1 = state_40016;
var statearr_40018_40048 = state_40016__$1;
(statearr_40018_40048[(2)] = inst_40012);

(statearr_40018_40048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (1))){
var state_40016__$1 = state_40016;
var statearr_40019_40050 = state_40016__$1;
(statearr_40019_40050[(2)] = null);

(statearr_40019_40050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (4))){
var inst_39995 = (state_40016[(7)]);
var inst_39995__$1 = (state_40016[(2)]);
var inst_39996 = (inst_39995__$1 == null);
var state_40016__$1 = (function (){var statearr_40020 = state_40016;
(statearr_40020[(7)] = inst_39995__$1);

return statearr_40020;
})();
if(cljs.core.truth_(inst_39996)){
var statearr_40021_40051 = state_40016__$1;
(statearr_40021_40051[(1)] = (5));

} else {
var statearr_40022_40052 = state_40016__$1;
(statearr_40022_40052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (13))){
var state_40016__$1 = state_40016;
var statearr_40023_40053 = state_40016__$1;
(statearr_40023_40053[(2)] = null);

(statearr_40023_40053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (6))){
var inst_39995 = (state_40016[(7)]);
var state_40016__$1 = state_40016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40016__$1,(11),to,inst_39995);
} else {
if((state_val_40017 === (3))){
var inst_40014 = (state_40016[(2)]);
var state_40016__$1 = state_40016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40016__$1,inst_40014);
} else {
if((state_val_40017 === (12))){
var state_40016__$1 = state_40016;
var statearr_40024_40056 = state_40016__$1;
(statearr_40024_40056[(2)] = null);

(statearr_40024_40056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (2))){
var state_40016__$1 = state_40016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40016__$1,(4),from);
} else {
if((state_val_40017 === (11))){
var inst_40005 = (state_40016[(2)]);
var state_40016__$1 = state_40016;
if(cljs.core.truth_(inst_40005)){
var statearr_40025_40057 = state_40016__$1;
(statearr_40025_40057[(1)] = (12));

} else {
var statearr_40026_40058 = state_40016__$1;
(statearr_40026_40058[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (9))){
var state_40016__$1 = state_40016;
var statearr_40027_40059 = state_40016__$1;
(statearr_40027_40059[(2)] = null);

(statearr_40027_40059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (5))){
var state_40016__$1 = state_40016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40029_40061 = state_40016__$1;
(statearr_40029_40061[(1)] = (8));

} else {
var statearr_40031_40062 = state_40016__$1;
(statearr_40031_40062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (14))){
var inst_40010 = (state_40016[(2)]);
var state_40016__$1 = state_40016;
var statearr_40032_40065 = state_40016__$1;
(statearr_40032_40065[(2)] = inst_40010);

(statearr_40032_40065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (10))){
var inst_40002 = (state_40016[(2)]);
var state_40016__$1 = state_40016;
var statearr_40033_40066 = state_40016__$1;
(statearr_40033_40066[(2)] = inst_40002);

(statearr_40033_40066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (8))){
var inst_39999 = cljs.core.async.close_BANG_.call(null,to);
var state_40016__$1 = state_40016;
var statearr_40034_40070 = state_40016__$1;
(statearr_40034_40070[(2)] = inst_39999);

(statearr_40034_40070[(1)] = (10));


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
});})(c__33728__auto___40046))
;
return ((function (switch__33334__auto__,c__33728__auto___40046){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_40035 = [null,null,null,null,null,null,null,null];
(statearr_40035[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_40035[(1)] = (1));

return statearr_40035;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_40016){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_40016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e40036){if((e40036 instanceof Object)){
var ex__33338__auto__ = e40036;
var statearr_40037_40071 = state_40016;
(statearr_40037_40071[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40072 = state_40016;
state_40016 = G__40072;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_40016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_40016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___40046))
})();
var state__33730__auto__ = (function (){var statearr_40038 = f__33729__auto__.call(null);
(statearr_40038[(6)] = c__33728__auto___40046);

return statearr_40038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___40046))
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
return (function (p__40073){
var vec__40074 = p__40073;
var v = cljs.core.nth.call(null,vec__40074,(0),null);
var p = cljs.core.nth.call(null,vec__40074,(1),null);
var job = vec__40074;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33728__auto___40269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___40269,res,vec__40074,v,p,job,jobs,results){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___40269,res,vec__40074,v,p,job,jobs,results){
return (function (state_40081){
var state_val_40082 = (state_40081[(1)]);
if((state_val_40082 === (1))){
var state_40081__$1 = state_40081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40081__$1,(2),res,v);
} else {
if((state_val_40082 === (2))){
var inst_40078 = (state_40081[(2)]);
var inst_40079 = cljs.core.async.close_BANG_.call(null,res);
var state_40081__$1 = (function (){var statearr_40084 = state_40081;
(statearr_40084[(7)] = inst_40078);

return statearr_40084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40081__$1,inst_40079);
} else {
return null;
}
}
});})(c__33728__auto___40269,res,vec__40074,v,p,job,jobs,results))
;
return ((function (switch__33334__auto__,c__33728__auto___40269,res,vec__40074,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0 = (function (){
var statearr_40085 = [null,null,null,null,null,null,null,null];
(statearr_40085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__);

(statearr_40085[(1)] = (1));

return statearr_40085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1 = (function (state_40081){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_40081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e40088){if((e40088 instanceof Object)){
var ex__33338__auto__ = e40088;
var statearr_40089_40276 = state_40081;
(statearr_40089_40276[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40278 = state_40081;
state_40081 = G__40278;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = function(state_40081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1.call(this,state_40081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___40269,res,vec__40074,v,p,job,jobs,results))
})();
var state__33730__auto__ = (function (){var statearr_40091 = f__33729__auto__.call(null);
(statearr_40091[(6)] = c__33728__auto___40269);

return statearr_40091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___40269,res,vec__40074,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40092){
var vec__40093 = p__40092;
var v = cljs.core.nth.call(null,vec__40093,(0),null);
var p = cljs.core.nth.call(null,vec__40093,(1),null);
var job = vec__40093;
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
var n__31115__auto___40279 = n;
var __40280 = (0);
while(true){
if((__40280 < n__31115__auto___40279)){
var G__40097_40281 = type;
var G__40097_40282__$1 = (((G__40097_40281 instanceof cljs.core.Keyword))?G__40097_40281.fqn:null);
switch (G__40097_40282__$1) {
case "compute":
var c__33728__auto___40284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40280,c__33728__auto___40284,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (__40280,c__33728__auto___40284,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async){
return (function (state_40110){
var state_val_40111 = (state_40110[(1)]);
if((state_val_40111 === (1))){
var state_40110__$1 = state_40110;
var statearr_40113_40286 = state_40110__$1;
(statearr_40113_40286[(2)] = null);

(statearr_40113_40286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40111 === (2))){
var state_40110__$1 = state_40110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40110__$1,(4),jobs);
} else {
if((state_val_40111 === (3))){
var inst_40108 = (state_40110[(2)]);
var state_40110__$1 = state_40110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40110__$1,inst_40108);
} else {
if((state_val_40111 === (4))){
var inst_40100 = (state_40110[(2)]);
var inst_40101 = process.call(null,inst_40100);
var state_40110__$1 = state_40110;
if(cljs.core.truth_(inst_40101)){
var statearr_40114_40288 = state_40110__$1;
(statearr_40114_40288[(1)] = (5));

} else {
var statearr_40115_40292 = state_40110__$1;
(statearr_40115_40292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40111 === (5))){
var state_40110__$1 = state_40110;
var statearr_40116_40293 = state_40110__$1;
(statearr_40116_40293[(2)] = null);

(statearr_40116_40293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40111 === (6))){
var state_40110__$1 = state_40110;
var statearr_40117_40295 = state_40110__$1;
(statearr_40117_40295[(2)] = null);

(statearr_40117_40295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40111 === (7))){
var inst_40106 = (state_40110[(2)]);
var state_40110__$1 = state_40110;
var statearr_40118_40296 = state_40110__$1;
(statearr_40118_40296[(2)] = inst_40106);

(statearr_40118_40296[(1)] = (3));


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
});})(__40280,c__33728__auto___40284,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async))
;
return ((function (__40280,switch__33334__auto__,c__33728__auto___40284,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0 = (function (){
var statearr_40120 = [null,null,null,null,null,null,null];
(statearr_40120[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__);

(statearr_40120[(1)] = (1));

return statearr_40120;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1 = (function (state_40110){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_40110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e40121){if((e40121 instanceof Object)){
var ex__33338__auto__ = e40121;
var statearr_40122_40297 = state_40110;
(statearr_40122_40297[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40298 = state_40110;
state_40110 = G__40298;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = function(state_40110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1.call(this,state_40110);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__;
})()
;})(__40280,switch__33334__auto__,c__33728__auto___40284,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async))
})();
var state__33730__auto__ = (function (){var statearr_40123 = f__33729__auto__.call(null);
(statearr_40123[(6)] = c__33728__auto___40284);

return statearr_40123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(__40280,c__33728__auto___40284,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async))
);


break;
case "async":
var c__33728__auto___40299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40280,c__33728__auto___40299,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (__40280,c__33728__auto___40299,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async){
return (function (state_40136){
var state_val_40137 = (state_40136[(1)]);
if((state_val_40137 === (1))){
var state_40136__$1 = state_40136;
var statearr_40138_40301 = state_40136__$1;
(statearr_40138_40301[(2)] = null);

(statearr_40138_40301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40137 === (2))){
var state_40136__$1 = state_40136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40136__$1,(4),jobs);
} else {
if((state_val_40137 === (3))){
var inst_40134 = (state_40136[(2)]);
var state_40136__$1 = state_40136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40136__$1,inst_40134);
} else {
if((state_val_40137 === (4))){
var inst_40126 = (state_40136[(2)]);
var inst_40127 = async.call(null,inst_40126);
var state_40136__$1 = state_40136;
if(cljs.core.truth_(inst_40127)){
var statearr_40139_40303 = state_40136__$1;
(statearr_40139_40303[(1)] = (5));

} else {
var statearr_40140_40304 = state_40136__$1;
(statearr_40140_40304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40137 === (5))){
var state_40136__$1 = state_40136;
var statearr_40143_40305 = state_40136__$1;
(statearr_40143_40305[(2)] = null);

(statearr_40143_40305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40137 === (6))){
var state_40136__$1 = state_40136;
var statearr_40144_40307 = state_40136__$1;
(statearr_40144_40307[(2)] = null);

(statearr_40144_40307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40137 === (7))){
var inst_40132 = (state_40136[(2)]);
var state_40136__$1 = state_40136;
var statearr_40146_40308 = state_40136__$1;
(statearr_40146_40308[(2)] = inst_40132);

(statearr_40146_40308[(1)] = (3));


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
});})(__40280,c__33728__auto___40299,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async))
;
return ((function (__40280,switch__33334__auto__,c__33728__auto___40299,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0 = (function (){
var statearr_40149 = [null,null,null,null,null,null,null];
(statearr_40149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__);

(statearr_40149[(1)] = (1));

return statearr_40149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1 = (function (state_40136){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_40136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e40150){if((e40150 instanceof Object)){
var ex__33338__auto__ = e40150;
var statearr_40151_40313 = state_40136;
(statearr_40151_40313[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40314 = state_40136;
state_40136 = G__40314;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = function(state_40136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1.call(this,state_40136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__;
})()
;})(__40280,switch__33334__auto__,c__33728__auto___40299,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async))
})();
var state__33730__auto__ = (function (){var statearr_40154 = f__33729__auto__.call(null);
(statearr_40154[(6)] = c__33728__auto___40299);

return statearr_40154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(__40280,c__33728__auto___40299,G__40097_40281,G__40097_40282__$1,n__31115__auto___40279,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40097_40282__$1)].join('')));

}

var G__40315 = (__40280 + (1));
__40280 = G__40315;
continue;
} else {
}
break;
}

var c__33728__auto___40316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___40316,jobs,results,process,async){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___40316,jobs,results,process,async){
return (function (state_40176){
var state_val_40177 = (state_40176[(1)]);
if((state_val_40177 === (1))){
var state_40176__$1 = state_40176;
var statearr_40179_40317 = state_40176__$1;
(statearr_40179_40317[(2)] = null);

(statearr_40179_40317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40177 === (2))){
var state_40176__$1 = state_40176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40176__$1,(4),from);
} else {
if((state_val_40177 === (3))){
var inst_40174 = (state_40176[(2)]);
var state_40176__$1 = state_40176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40176__$1,inst_40174);
} else {
if((state_val_40177 === (4))){
var inst_40157 = (state_40176[(7)]);
var inst_40157__$1 = (state_40176[(2)]);
var inst_40158 = (inst_40157__$1 == null);
var state_40176__$1 = (function (){var statearr_40183 = state_40176;
(statearr_40183[(7)] = inst_40157__$1);

return statearr_40183;
})();
if(cljs.core.truth_(inst_40158)){
var statearr_40184_40318 = state_40176__$1;
(statearr_40184_40318[(1)] = (5));

} else {
var statearr_40186_40319 = state_40176__$1;
(statearr_40186_40319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40177 === (5))){
var inst_40160 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40176__$1 = state_40176;
var statearr_40188_40320 = state_40176__$1;
(statearr_40188_40320[(2)] = inst_40160);

(statearr_40188_40320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40177 === (6))){
var inst_40162 = (state_40176[(8)]);
var inst_40157 = (state_40176[(7)]);
var inst_40162__$1 = cljs.core.async.chan.call(null,(1));
var inst_40163 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40164 = [inst_40157,inst_40162__$1];
var inst_40165 = (new cljs.core.PersistentVector(null,2,(5),inst_40163,inst_40164,null));
var state_40176__$1 = (function (){var statearr_40189 = state_40176;
(statearr_40189[(8)] = inst_40162__$1);

return statearr_40189;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40176__$1,(8),jobs,inst_40165);
} else {
if((state_val_40177 === (7))){
var inst_40172 = (state_40176[(2)]);
var state_40176__$1 = state_40176;
var statearr_40191_40321 = state_40176__$1;
(statearr_40191_40321[(2)] = inst_40172);

(statearr_40191_40321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40177 === (8))){
var inst_40162 = (state_40176[(8)]);
var inst_40167 = (state_40176[(2)]);
var state_40176__$1 = (function (){var statearr_40193 = state_40176;
(statearr_40193[(9)] = inst_40167);

return statearr_40193;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40176__$1,(9),results,inst_40162);
} else {
if((state_val_40177 === (9))){
var inst_40169 = (state_40176[(2)]);
var state_40176__$1 = (function (){var statearr_40194 = state_40176;
(statearr_40194[(10)] = inst_40169);

return statearr_40194;
})();
var statearr_40195_40323 = state_40176__$1;
(statearr_40195_40323[(2)] = null);

(statearr_40195_40323[(1)] = (2));


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
});})(c__33728__auto___40316,jobs,results,process,async))
;
return ((function (switch__33334__auto__,c__33728__auto___40316,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0 = (function (){
var statearr_40196 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__);

(statearr_40196[(1)] = (1));

return statearr_40196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1 = (function (state_40176){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_40176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e40197){if((e40197 instanceof Object)){
var ex__33338__auto__ = e40197;
var statearr_40198_40324 = state_40176;
(statearr_40198_40324[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40325 = state_40176;
state_40176 = G__40325;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = function(state_40176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1.call(this,state_40176);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___40316,jobs,results,process,async))
})();
var state__33730__auto__ = (function (){var statearr_40199 = f__33729__auto__.call(null);
(statearr_40199[(6)] = c__33728__auto___40316);

return statearr_40199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___40316,jobs,results,process,async))
);


var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__,jobs,results,process,async){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__,jobs,results,process,async){
return (function (state_40238){
var state_val_40239 = (state_40238[(1)]);
if((state_val_40239 === (7))){
var inst_40234 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40240_40335 = state_40238__$1;
(statearr_40240_40335[(2)] = inst_40234);

(statearr_40240_40335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (20))){
var state_40238__$1 = state_40238;
var statearr_40241_40336 = state_40238__$1;
(statearr_40241_40336[(2)] = null);

(statearr_40241_40336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (1))){
var state_40238__$1 = state_40238;
var statearr_40242_40340 = state_40238__$1;
(statearr_40242_40340[(2)] = null);

(statearr_40242_40340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (4))){
var inst_40202 = (state_40238[(7)]);
var inst_40202__$1 = (state_40238[(2)]);
var inst_40203 = (inst_40202__$1 == null);
var state_40238__$1 = (function (){var statearr_40243 = state_40238;
(statearr_40243[(7)] = inst_40202__$1);

return statearr_40243;
})();
if(cljs.core.truth_(inst_40203)){
var statearr_40244_40342 = state_40238__$1;
(statearr_40244_40342[(1)] = (5));

} else {
var statearr_40245_40343 = state_40238__$1;
(statearr_40245_40343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (15))){
var inst_40215 = (state_40238[(8)]);
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40238__$1,(18),to,inst_40215);
} else {
if((state_val_40239 === (21))){
var inst_40229 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40246_40344 = state_40238__$1;
(statearr_40246_40344[(2)] = inst_40229);

(statearr_40246_40344[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (13))){
var inst_40231 = (state_40238[(2)]);
var state_40238__$1 = (function (){var statearr_40247 = state_40238;
(statearr_40247[(9)] = inst_40231);

return statearr_40247;
})();
var statearr_40248_40349 = state_40238__$1;
(statearr_40248_40349[(2)] = null);

(statearr_40248_40349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (6))){
var inst_40202 = (state_40238[(7)]);
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40238__$1,(11),inst_40202);
} else {
if((state_val_40239 === (17))){
var inst_40224 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
if(cljs.core.truth_(inst_40224)){
var statearr_40249_40350 = state_40238__$1;
(statearr_40249_40350[(1)] = (19));

} else {
var statearr_40250_40351 = state_40238__$1;
(statearr_40250_40351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (3))){
var inst_40236 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40238__$1,inst_40236);
} else {
if((state_val_40239 === (12))){
var inst_40212 = (state_40238[(10)]);
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40238__$1,(14),inst_40212);
} else {
if((state_val_40239 === (2))){
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40238__$1,(4),results);
} else {
if((state_val_40239 === (19))){
var state_40238__$1 = state_40238;
var statearr_40251_40355 = state_40238__$1;
(statearr_40251_40355[(2)] = null);

(statearr_40251_40355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (11))){
var inst_40212 = (state_40238[(2)]);
var state_40238__$1 = (function (){var statearr_40252 = state_40238;
(statearr_40252[(10)] = inst_40212);

return statearr_40252;
})();
var statearr_40253_40356 = state_40238__$1;
(statearr_40253_40356[(2)] = null);

(statearr_40253_40356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (9))){
var state_40238__$1 = state_40238;
var statearr_40254_40357 = state_40238__$1;
(statearr_40254_40357[(2)] = null);

(statearr_40254_40357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (5))){
var state_40238__$1 = state_40238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40255_40359 = state_40238__$1;
(statearr_40255_40359[(1)] = (8));

} else {
var statearr_40256_40361 = state_40238__$1;
(statearr_40256_40361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (14))){
var inst_40215 = (state_40238[(8)]);
var inst_40217 = (state_40238[(11)]);
var inst_40215__$1 = (state_40238[(2)]);
var inst_40216 = (inst_40215__$1 == null);
var inst_40217__$1 = cljs.core.not.call(null,inst_40216);
var state_40238__$1 = (function (){var statearr_40257 = state_40238;
(statearr_40257[(8)] = inst_40215__$1);

(statearr_40257[(11)] = inst_40217__$1);

return statearr_40257;
})();
if(inst_40217__$1){
var statearr_40258_40368 = state_40238__$1;
(statearr_40258_40368[(1)] = (15));

} else {
var statearr_40259_40369 = state_40238__$1;
(statearr_40259_40369[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (16))){
var inst_40217 = (state_40238[(11)]);
var state_40238__$1 = state_40238;
var statearr_40260_40370 = state_40238__$1;
(statearr_40260_40370[(2)] = inst_40217);

(statearr_40260_40370[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (10))){
var inst_40209 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40261_40372 = state_40238__$1;
(statearr_40261_40372[(2)] = inst_40209);

(statearr_40261_40372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (18))){
var inst_40221 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40262_40373 = state_40238__$1;
(statearr_40262_40373[(2)] = inst_40221);

(statearr_40262_40373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (8))){
var inst_40206 = cljs.core.async.close_BANG_.call(null,to);
var state_40238__$1 = state_40238;
var statearr_40263_40375 = state_40238__$1;
(statearr_40263_40375[(2)] = inst_40206);

(statearr_40263_40375[(1)] = (10));


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
var statearr_40265 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__);

(statearr_40265[(1)] = (1));

return statearr_40265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1 = (function (state_40238){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_40238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e40266){if((e40266 instanceof Object)){
var ex__33338__auto__ = e40266;
var statearr_40267_40377 = state_40238;
(statearr_40267_40377[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40379 = state_40238;
state_40238 = G__40379;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__ = function(state_40238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1.call(this,state_40238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__,jobs,results,process,async))
})();
var state__33730__auto__ = (function (){var statearr_40268 = f__33729__auto__.call(null);
(statearr_40268[(6)] = c__33728__auto__);

return statearr_40268;
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
var G__40382 = arguments.length;
switch (G__40382) {
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
var G__40392 = arguments.length;
switch (G__40392) {
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
var G__40396 = arguments.length;
switch (G__40396) {
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
var c__33728__auto___40457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___40457,tc,fc){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___40457,tc,fc){
return (function (state_40424){
var state_val_40425 = (state_40424[(1)]);
if((state_val_40425 === (7))){
var inst_40420 = (state_40424[(2)]);
var state_40424__$1 = state_40424;
var statearr_40426_40458 = state_40424__$1;
(statearr_40426_40458[(2)] = inst_40420);

(statearr_40426_40458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (1))){
var state_40424__$1 = state_40424;
var statearr_40427_40459 = state_40424__$1;
(statearr_40427_40459[(2)] = null);

(statearr_40427_40459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (4))){
var inst_40401 = (state_40424[(7)]);
var inst_40401__$1 = (state_40424[(2)]);
var inst_40402 = (inst_40401__$1 == null);
var state_40424__$1 = (function (){var statearr_40428 = state_40424;
(statearr_40428[(7)] = inst_40401__$1);

return statearr_40428;
})();
if(cljs.core.truth_(inst_40402)){
var statearr_40429_40462 = state_40424__$1;
(statearr_40429_40462[(1)] = (5));

} else {
var statearr_40430_40464 = state_40424__$1;
(statearr_40430_40464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (13))){
var state_40424__$1 = state_40424;
var statearr_40431_40472 = state_40424__$1;
(statearr_40431_40472[(2)] = null);

(statearr_40431_40472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (6))){
var inst_40401 = (state_40424[(7)]);
var inst_40407 = p.call(null,inst_40401);
var state_40424__$1 = state_40424;
if(cljs.core.truth_(inst_40407)){
var statearr_40432_40473 = state_40424__$1;
(statearr_40432_40473[(1)] = (9));

} else {
var statearr_40433_40474 = state_40424__$1;
(statearr_40433_40474[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (3))){
var inst_40422 = (state_40424[(2)]);
var state_40424__$1 = state_40424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40424__$1,inst_40422);
} else {
if((state_val_40425 === (12))){
var state_40424__$1 = state_40424;
var statearr_40434_40476 = state_40424__$1;
(statearr_40434_40476[(2)] = null);

(statearr_40434_40476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (2))){
var state_40424__$1 = state_40424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40424__$1,(4),ch);
} else {
if((state_val_40425 === (11))){
var inst_40401 = (state_40424[(7)]);
var inst_40411 = (state_40424[(2)]);
var state_40424__$1 = state_40424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40424__$1,(8),inst_40411,inst_40401);
} else {
if((state_val_40425 === (9))){
var state_40424__$1 = state_40424;
var statearr_40438_40480 = state_40424__$1;
(statearr_40438_40480[(2)] = tc);

(statearr_40438_40480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (5))){
var inst_40404 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40405 = cljs.core.async.close_BANG_.call(null,fc);
var state_40424__$1 = (function (){var statearr_40444 = state_40424;
(statearr_40444[(8)] = inst_40404);

return statearr_40444;
})();
var statearr_40445_40482 = state_40424__$1;
(statearr_40445_40482[(2)] = inst_40405);

(statearr_40445_40482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (14))){
var inst_40418 = (state_40424[(2)]);
var state_40424__$1 = state_40424;
var statearr_40446_40483 = state_40424__$1;
(statearr_40446_40483[(2)] = inst_40418);

(statearr_40446_40483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (10))){
var state_40424__$1 = state_40424;
var statearr_40447_40484 = state_40424__$1;
(statearr_40447_40484[(2)] = fc);

(statearr_40447_40484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (8))){
var inst_40413 = (state_40424[(2)]);
var state_40424__$1 = state_40424;
if(cljs.core.truth_(inst_40413)){
var statearr_40449_40485 = state_40424__$1;
(statearr_40449_40485[(1)] = (12));

} else {
var statearr_40450_40486 = state_40424__$1;
(statearr_40450_40486[(1)] = (13));

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
});})(c__33728__auto___40457,tc,fc))
;
return ((function (switch__33334__auto__,c__33728__auto___40457,tc,fc){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_40451 = [null,null,null,null,null,null,null,null,null];
(statearr_40451[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_40451[(1)] = (1));

return statearr_40451;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_40424){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_40424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e40453){if((e40453 instanceof Object)){
var ex__33338__auto__ = e40453;
var statearr_40454_40488 = state_40424;
(statearr_40454_40488[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40489 = state_40424;
state_40424 = G__40489;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_40424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_40424);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___40457,tc,fc))
})();
var state__33730__auto__ = (function (){var statearr_40455 = f__33729__auto__.call(null);
(statearr_40455[(6)] = c__33728__auto___40457);

return statearr_40455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___40457,tc,fc))
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
return (function (state_40510){
var state_val_40511 = (state_40510[(1)]);
if((state_val_40511 === (7))){
var inst_40506 = (state_40510[(2)]);
var state_40510__$1 = state_40510;
var statearr_40512_40532 = state_40510__$1;
(statearr_40512_40532[(2)] = inst_40506);

(statearr_40512_40532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (1))){
var inst_40490 = init;
var state_40510__$1 = (function (){var statearr_40513 = state_40510;
(statearr_40513[(7)] = inst_40490);

return statearr_40513;
})();
var statearr_40514_40535 = state_40510__$1;
(statearr_40514_40535[(2)] = null);

(statearr_40514_40535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (4))){
var inst_40493 = (state_40510[(8)]);
var inst_40493__$1 = (state_40510[(2)]);
var inst_40494 = (inst_40493__$1 == null);
var state_40510__$1 = (function (){var statearr_40515 = state_40510;
(statearr_40515[(8)] = inst_40493__$1);

return statearr_40515;
})();
if(cljs.core.truth_(inst_40494)){
var statearr_40516_40536 = state_40510__$1;
(statearr_40516_40536[(1)] = (5));

} else {
var statearr_40517_40539 = state_40510__$1;
(statearr_40517_40539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (6))){
var inst_40490 = (state_40510[(7)]);
var inst_40493 = (state_40510[(8)]);
var inst_40497 = (state_40510[(9)]);
var inst_40497__$1 = f.call(null,inst_40490,inst_40493);
var inst_40498 = cljs.core.reduced_QMARK_.call(null,inst_40497__$1);
var state_40510__$1 = (function (){var statearr_40518 = state_40510;
(statearr_40518[(9)] = inst_40497__$1);

return statearr_40518;
})();
if(inst_40498){
var statearr_40519_40541 = state_40510__$1;
(statearr_40519_40541[(1)] = (8));

} else {
var statearr_40520_40542 = state_40510__$1;
(statearr_40520_40542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (3))){
var inst_40508 = (state_40510[(2)]);
var state_40510__$1 = state_40510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40510__$1,inst_40508);
} else {
if((state_val_40511 === (2))){
var state_40510__$1 = state_40510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40510__$1,(4),ch);
} else {
if((state_val_40511 === (9))){
var inst_40497 = (state_40510[(9)]);
var inst_40490 = inst_40497;
var state_40510__$1 = (function (){var statearr_40521 = state_40510;
(statearr_40521[(7)] = inst_40490);

return statearr_40521;
})();
var statearr_40522_40551 = state_40510__$1;
(statearr_40522_40551[(2)] = null);

(statearr_40522_40551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (5))){
var inst_40490 = (state_40510[(7)]);
var state_40510__$1 = state_40510;
var statearr_40523_40552 = state_40510__$1;
(statearr_40523_40552[(2)] = inst_40490);

(statearr_40523_40552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (10))){
var inst_40504 = (state_40510[(2)]);
var state_40510__$1 = state_40510;
var statearr_40524_40554 = state_40510__$1;
(statearr_40524_40554[(2)] = inst_40504);

(statearr_40524_40554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (8))){
var inst_40497 = (state_40510[(9)]);
var inst_40500 = cljs.core.deref.call(null,inst_40497);
var state_40510__$1 = state_40510;
var statearr_40525_40555 = state_40510__$1;
(statearr_40525_40555[(2)] = inst_40500);

(statearr_40525_40555[(1)] = (10));


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
var statearr_40526 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40526[(0)] = cljs$core$async$reduce_$_state_machine__33335__auto__);

(statearr_40526[(1)] = (1));

return statearr_40526;
});
var cljs$core$async$reduce_$_state_machine__33335__auto____1 = (function (state_40510){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_40510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e40527){if((e40527 instanceof Object)){
var ex__33338__auto__ = e40527;
var statearr_40528_40559 = state_40510;
(statearr_40528_40559[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40560 = state_40510;
state_40510 = G__40560;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33335__auto__ = function(state_40510){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33335__auto____1.call(this,state_40510);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33335__auto____0;
cljs$core$async$reduce_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33335__auto____1;
return cljs$core$async$reduce_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_40529 = f__33729__auto__.call(null);
(statearr_40529[(6)] = c__33728__auto__);

return statearr_40529;
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
return (function (state_40568){
var state_val_40569 = (state_40568[(1)]);
if((state_val_40569 === (1))){
var inst_40563 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40568__$1 = state_40568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40568__$1,(2),inst_40563);
} else {
if((state_val_40569 === (2))){
var inst_40565 = (state_40568[(2)]);
var inst_40566 = f__$1.call(null,inst_40565);
var state_40568__$1 = state_40568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40568__$1,inst_40566);
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
var statearr_40571 = [null,null,null,null,null,null,null];
(statearr_40571[(0)] = cljs$core$async$transduce_$_state_machine__33335__auto__);

(statearr_40571[(1)] = (1));

return statearr_40571;
});
var cljs$core$async$transduce_$_state_machine__33335__auto____1 = (function (state_40568){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_40568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e40572){if((e40572 instanceof Object)){
var ex__33338__auto__ = e40572;
var statearr_40573_40582 = state_40568;
(statearr_40573_40582[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40583 = state_40568;
state_40568 = G__40583;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33335__auto__ = function(state_40568){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33335__auto____1.call(this,state_40568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33335__auto____0;
cljs$core$async$transduce_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33335__auto____1;
return cljs$core$async$transduce_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__,f__$1))
})();
var state__33730__auto__ = (function (){var statearr_40578 = f__33729__auto__.call(null);
(statearr_40578[(6)] = c__33728__auto__);

return statearr_40578;
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
var G__40588 = arguments.length;
switch (G__40588) {
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
return (function (state_40617){
var state_val_40618 = (state_40617[(1)]);
if((state_val_40618 === (7))){
var inst_40597 = (state_40617[(2)]);
var state_40617__$1 = state_40617;
var statearr_40621_40653 = state_40617__$1;
(statearr_40621_40653[(2)] = inst_40597);

(statearr_40621_40653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (1))){
var inst_40591 = cljs.core.seq.call(null,coll);
var inst_40592 = inst_40591;
var state_40617__$1 = (function (){var statearr_40623 = state_40617;
(statearr_40623[(7)] = inst_40592);

return statearr_40623;
})();
var statearr_40624_40654 = state_40617__$1;
(statearr_40624_40654[(2)] = null);

(statearr_40624_40654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (4))){
var inst_40592 = (state_40617[(7)]);
var inst_40595 = cljs.core.first.call(null,inst_40592);
var state_40617__$1 = state_40617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40617__$1,(7),ch,inst_40595);
} else {
if((state_val_40618 === (13))){
var inst_40609 = (state_40617[(2)]);
var state_40617__$1 = state_40617;
var statearr_40628_40655 = state_40617__$1;
(statearr_40628_40655[(2)] = inst_40609);

(statearr_40628_40655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (6))){
var inst_40600 = (state_40617[(2)]);
var state_40617__$1 = state_40617;
if(cljs.core.truth_(inst_40600)){
var statearr_40630_40656 = state_40617__$1;
(statearr_40630_40656[(1)] = (8));

} else {
var statearr_40631_40657 = state_40617__$1;
(statearr_40631_40657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (3))){
var inst_40613 = (state_40617[(2)]);
var state_40617__$1 = state_40617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40617__$1,inst_40613);
} else {
if((state_val_40618 === (12))){
var state_40617__$1 = state_40617;
var statearr_40632_40661 = state_40617__$1;
(statearr_40632_40661[(2)] = null);

(statearr_40632_40661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (2))){
var inst_40592 = (state_40617[(7)]);
var state_40617__$1 = state_40617;
if(cljs.core.truth_(inst_40592)){
var statearr_40633_40662 = state_40617__$1;
(statearr_40633_40662[(1)] = (4));

} else {
var statearr_40634_40663 = state_40617__$1;
(statearr_40634_40663[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (11))){
var inst_40606 = cljs.core.async.close_BANG_.call(null,ch);
var state_40617__$1 = state_40617;
var statearr_40638_40665 = state_40617__$1;
(statearr_40638_40665[(2)] = inst_40606);

(statearr_40638_40665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (9))){
var state_40617__$1 = state_40617;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40639_40666 = state_40617__$1;
(statearr_40639_40666[(1)] = (11));

} else {
var statearr_40640_40667 = state_40617__$1;
(statearr_40640_40667[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (5))){
var inst_40592 = (state_40617[(7)]);
var state_40617__$1 = state_40617;
var statearr_40641_40672 = state_40617__$1;
(statearr_40641_40672[(2)] = inst_40592);

(statearr_40641_40672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (10))){
var inst_40611 = (state_40617[(2)]);
var state_40617__$1 = state_40617;
var statearr_40643_40674 = state_40617__$1;
(statearr_40643_40674[(2)] = inst_40611);

(statearr_40643_40674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (8))){
var inst_40592 = (state_40617[(7)]);
var inst_40602 = cljs.core.next.call(null,inst_40592);
var inst_40592__$1 = inst_40602;
var state_40617__$1 = (function (){var statearr_40644 = state_40617;
(statearr_40644[(7)] = inst_40592__$1);

return statearr_40644;
})();
var statearr_40645_40677 = state_40617__$1;
(statearr_40645_40677[(2)] = null);

(statearr_40645_40677[(1)] = (2));


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
var statearr_40648 = [null,null,null,null,null,null,null,null];
(statearr_40648[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_40648[(1)] = (1));

return statearr_40648;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_40617){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_40617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e40649){if((e40649 instanceof Object)){
var ex__33338__auto__ = e40649;
var statearr_40650_40679 = state_40617;
(statearr_40650_40679[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40680 = state_40617;
state_40617 = G__40680;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_40617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_40617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_40651 = f__33729__auto__.call(null);
(statearr_40651[(6)] = c__33728__auto__);

return statearr_40651;
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
if(typeof cljs.core.async.t_cljs$core$async40709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40709 = (function (ch,cs,meta40710){
this.ch = ch;
this.cs = cs;
this.meta40710 = meta40710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40711,meta40710__$1){
var self__ = this;
var _40711__$1 = this;
return (new cljs.core.async.t_cljs$core$async40709(self__.ch,self__.cs,meta40710__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40711){
var self__ = this;
var _40711__$1 = this;
return self__.meta40710;
});})(cs))
;

cljs.core.async.t_cljs$core$async40709.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40709.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40709.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40709.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40709.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40709.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40710","meta40710",-1801676938,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40709";

cljs.core.async.t_cljs$core$async40709.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async40709");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40709 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40709(ch__$1,cs__$1,meta40710){
return (new cljs.core.async.t_cljs$core$async40709(ch__$1,cs__$1,meta40710));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40709(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33728__auto___41033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___41033,cs,m,dchan,dctr,done){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___41033,cs,m,dchan,dctr,done){
return (function (state_40860){
var state_val_40861 = (state_40860[(1)]);
if((state_val_40861 === (7))){
var inst_40856 = (state_40860[(2)]);
var state_40860__$1 = state_40860;
var statearr_40862_41040 = state_40860__$1;
(statearr_40862_41040[(2)] = inst_40856);

(statearr_40862_41040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (20))){
var inst_40755 = (state_40860[(7)]);
var inst_40767 = cljs.core.first.call(null,inst_40755);
var inst_40768 = cljs.core.nth.call(null,inst_40767,(0),null);
var inst_40769 = cljs.core.nth.call(null,inst_40767,(1),null);
var state_40860__$1 = (function (){var statearr_40863 = state_40860;
(statearr_40863[(8)] = inst_40768);

return statearr_40863;
})();
if(cljs.core.truth_(inst_40769)){
var statearr_40864_41046 = state_40860__$1;
(statearr_40864_41046[(1)] = (22));

} else {
var statearr_40865_41047 = state_40860__$1;
(statearr_40865_41047[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (27))){
var inst_40724 = (state_40860[(9)]);
var inst_40807 = (state_40860[(10)]);
var inst_40802 = (state_40860[(11)]);
var inst_40800 = (state_40860[(12)]);
var inst_40807__$1 = cljs.core._nth.call(null,inst_40800,inst_40802);
var inst_40809 = cljs.core.async.put_BANG_.call(null,inst_40807__$1,inst_40724,done);
var state_40860__$1 = (function (){var statearr_40866 = state_40860;
(statearr_40866[(10)] = inst_40807__$1);

return statearr_40866;
})();
if(cljs.core.truth_(inst_40809)){
var statearr_40867_41050 = state_40860__$1;
(statearr_40867_41050[(1)] = (30));

} else {
var statearr_40868_41051 = state_40860__$1;
(statearr_40868_41051[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (1))){
var state_40860__$1 = state_40860;
var statearr_40869_41055 = state_40860__$1;
(statearr_40869_41055[(2)] = null);

(statearr_40869_41055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (24))){
var inst_40755 = (state_40860[(7)]);
var inst_40774 = (state_40860[(2)]);
var inst_40775 = cljs.core.next.call(null,inst_40755);
var inst_40733 = inst_40775;
var inst_40734 = null;
var inst_40735 = (0);
var inst_40736 = (0);
var state_40860__$1 = (function (){var statearr_40874 = state_40860;
(statearr_40874[(13)] = inst_40774);

(statearr_40874[(14)] = inst_40734);

(statearr_40874[(15)] = inst_40735);

(statearr_40874[(16)] = inst_40736);

(statearr_40874[(17)] = inst_40733);

return statearr_40874;
})();
var statearr_40875_41060 = state_40860__$1;
(statearr_40875_41060[(2)] = null);

(statearr_40875_41060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (39))){
var state_40860__$1 = state_40860;
var statearr_40879_41066 = state_40860__$1;
(statearr_40879_41066[(2)] = null);

(statearr_40879_41066[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (4))){
var inst_40724 = (state_40860[(9)]);
var inst_40724__$1 = (state_40860[(2)]);
var inst_40725 = (inst_40724__$1 == null);
var state_40860__$1 = (function (){var statearr_40880 = state_40860;
(statearr_40880[(9)] = inst_40724__$1);

return statearr_40880;
})();
if(cljs.core.truth_(inst_40725)){
var statearr_40881_41072 = state_40860__$1;
(statearr_40881_41072[(1)] = (5));

} else {
var statearr_40882_41073 = state_40860__$1;
(statearr_40882_41073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (15))){
var inst_40734 = (state_40860[(14)]);
var inst_40735 = (state_40860[(15)]);
var inst_40736 = (state_40860[(16)]);
var inst_40733 = (state_40860[(17)]);
var inst_40751 = (state_40860[(2)]);
var inst_40752 = (inst_40736 + (1));
var tmp40876 = inst_40734;
var tmp40877 = inst_40735;
var tmp40878 = inst_40733;
var inst_40733__$1 = tmp40878;
var inst_40734__$1 = tmp40876;
var inst_40735__$1 = tmp40877;
var inst_40736__$1 = inst_40752;
var state_40860__$1 = (function (){var statearr_40883 = state_40860;
(statearr_40883[(14)] = inst_40734__$1);

(statearr_40883[(15)] = inst_40735__$1);

(statearr_40883[(16)] = inst_40736__$1);

(statearr_40883[(17)] = inst_40733__$1);

(statearr_40883[(18)] = inst_40751);

return statearr_40883;
})();
var statearr_40889_41080 = state_40860__$1;
(statearr_40889_41080[(2)] = null);

(statearr_40889_41080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (21))){
var inst_40778 = (state_40860[(2)]);
var state_40860__$1 = state_40860;
var statearr_40893_41085 = state_40860__$1;
(statearr_40893_41085[(2)] = inst_40778);

(statearr_40893_41085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (31))){
var inst_40807 = (state_40860[(10)]);
var inst_40812 = done.call(null,null);
var inst_40813 = cljs.core.async.untap_STAR_.call(null,m,inst_40807);
var state_40860__$1 = (function (){var statearr_40896 = state_40860;
(statearr_40896[(19)] = inst_40812);

return statearr_40896;
})();
var statearr_40901_41088 = state_40860__$1;
(statearr_40901_41088[(2)] = inst_40813);

(statearr_40901_41088[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (32))){
var inst_40799 = (state_40860[(20)]);
var inst_40802 = (state_40860[(11)]);
var inst_40800 = (state_40860[(12)]);
var inst_40801 = (state_40860[(21)]);
var inst_40815 = (state_40860[(2)]);
var inst_40816 = (inst_40802 + (1));
var tmp40890 = inst_40799;
var tmp40891 = inst_40800;
var tmp40892 = inst_40801;
var inst_40799__$1 = tmp40890;
var inst_40800__$1 = tmp40891;
var inst_40801__$1 = tmp40892;
var inst_40802__$1 = inst_40816;
var state_40860__$1 = (function (){var statearr_40904 = state_40860;
(statearr_40904[(20)] = inst_40799__$1);

(statearr_40904[(22)] = inst_40815);

(statearr_40904[(11)] = inst_40802__$1);

(statearr_40904[(12)] = inst_40800__$1);

(statearr_40904[(21)] = inst_40801__$1);

return statearr_40904;
})();
var statearr_40910_41092 = state_40860__$1;
(statearr_40910_41092[(2)] = null);

(statearr_40910_41092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (40))){
var inst_40828 = (state_40860[(23)]);
var inst_40832 = done.call(null,null);
var inst_40833 = cljs.core.async.untap_STAR_.call(null,m,inst_40828);
var state_40860__$1 = (function (){var statearr_40913 = state_40860;
(statearr_40913[(24)] = inst_40832);

return statearr_40913;
})();
var statearr_40914_41093 = state_40860__$1;
(statearr_40914_41093[(2)] = inst_40833);

(statearr_40914_41093[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (33))){
var inst_40819 = (state_40860[(25)]);
var inst_40821 = cljs.core.chunked_seq_QMARK_.call(null,inst_40819);
var state_40860__$1 = state_40860;
if(inst_40821){
var statearr_40919_41095 = state_40860__$1;
(statearr_40919_41095[(1)] = (36));

} else {
var statearr_40920_41096 = state_40860__$1;
(statearr_40920_41096[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (13))){
var inst_40745 = (state_40860[(26)]);
var inst_40748 = cljs.core.async.close_BANG_.call(null,inst_40745);
var state_40860__$1 = state_40860;
var statearr_40921_41097 = state_40860__$1;
(statearr_40921_41097[(2)] = inst_40748);

(statearr_40921_41097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (22))){
var inst_40768 = (state_40860[(8)]);
var inst_40771 = cljs.core.async.close_BANG_.call(null,inst_40768);
var state_40860__$1 = state_40860;
var statearr_40923_41100 = state_40860__$1;
(statearr_40923_41100[(2)] = inst_40771);

(statearr_40923_41100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (36))){
var inst_40819 = (state_40860[(25)]);
var inst_40823 = cljs.core.chunk_first.call(null,inst_40819);
var inst_40824 = cljs.core.chunk_rest.call(null,inst_40819);
var inst_40825 = cljs.core.count.call(null,inst_40823);
var inst_40799 = inst_40824;
var inst_40800 = inst_40823;
var inst_40801 = inst_40825;
var inst_40802 = (0);
var state_40860__$1 = (function (){var statearr_40924 = state_40860;
(statearr_40924[(20)] = inst_40799);

(statearr_40924[(11)] = inst_40802);

(statearr_40924[(12)] = inst_40800);

(statearr_40924[(21)] = inst_40801);

return statearr_40924;
})();
var statearr_40926_41102 = state_40860__$1;
(statearr_40926_41102[(2)] = null);

(statearr_40926_41102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (41))){
var inst_40819 = (state_40860[(25)]);
var inst_40835 = (state_40860[(2)]);
var inst_40836 = cljs.core.next.call(null,inst_40819);
var inst_40799 = inst_40836;
var inst_40800 = null;
var inst_40801 = (0);
var inst_40802 = (0);
var state_40860__$1 = (function (){var statearr_40928 = state_40860;
(statearr_40928[(27)] = inst_40835);

(statearr_40928[(20)] = inst_40799);

(statearr_40928[(11)] = inst_40802);

(statearr_40928[(12)] = inst_40800);

(statearr_40928[(21)] = inst_40801);

return statearr_40928;
})();
var statearr_40929_41104 = state_40860__$1;
(statearr_40929_41104[(2)] = null);

(statearr_40929_41104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (43))){
var state_40860__$1 = state_40860;
var statearr_40931_41107 = state_40860__$1;
(statearr_40931_41107[(2)] = null);

(statearr_40931_41107[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (29))){
var inst_40844 = (state_40860[(2)]);
var state_40860__$1 = state_40860;
var statearr_40932_41109 = state_40860__$1;
(statearr_40932_41109[(2)] = inst_40844);

(statearr_40932_41109[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (44))){
var inst_40853 = (state_40860[(2)]);
var state_40860__$1 = (function (){var statearr_40934 = state_40860;
(statearr_40934[(28)] = inst_40853);

return statearr_40934;
})();
var statearr_40935_41110 = state_40860__$1;
(statearr_40935_41110[(2)] = null);

(statearr_40935_41110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (6))){
var inst_40788 = (state_40860[(29)]);
var inst_40787 = cljs.core.deref.call(null,cs);
var inst_40788__$1 = cljs.core.keys.call(null,inst_40787);
var inst_40789 = cljs.core.count.call(null,inst_40788__$1);
var inst_40790 = cljs.core.reset_BANG_.call(null,dctr,inst_40789);
var inst_40798 = cljs.core.seq.call(null,inst_40788__$1);
var inst_40799 = inst_40798;
var inst_40800 = null;
var inst_40801 = (0);
var inst_40802 = (0);
var state_40860__$1 = (function (){var statearr_40936 = state_40860;
(statearr_40936[(29)] = inst_40788__$1);

(statearr_40936[(20)] = inst_40799);

(statearr_40936[(30)] = inst_40790);

(statearr_40936[(11)] = inst_40802);

(statearr_40936[(12)] = inst_40800);

(statearr_40936[(21)] = inst_40801);

return statearr_40936;
})();
var statearr_40937_41116 = state_40860__$1;
(statearr_40937_41116[(2)] = null);

(statearr_40937_41116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (28))){
var inst_40799 = (state_40860[(20)]);
var inst_40819 = (state_40860[(25)]);
var inst_40819__$1 = cljs.core.seq.call(null,inst_40799);
var state_40860__$1 = (function (){var statearr_40938 = state_40860;
(statearr_40938[(25)] = inst_40819__$1);

return statearr_40938;
})();
if(inst_40819__$1){
var statearr_40939_41120 = state_40860__$1;
(statearr_40939_41120[(1)] = (33));

} else {
var statearr_40940_41121 = state_40860__$1;
(statearr_40940_41121[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (25))){
var inst_40802 = (state_40860[(11)]);
var inst_40801 = (state_40860[(21)]);
var inst_40804 = (inst_40802 < inst_40801);
var inst_40805 = inst_40804;
var state_40860__$1 = state_40860;
if(cljs.core.truth_(inst_40805)){
var statearr_40941_41123 = state_40860__$1;
(statearr_40941_41123[(1)] = (27));

} else {
var statearr_40943_41124 = state_40860__$1;
(statearr_40943_41124[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (34))){
var state_40860__$1 = state_40860;
var statearr_40944_41125 = state_40860__$1;
(statearr_40944_41125[(2)] = null);

(statearr_40944_41125[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (17))){
var state_40860__$1 = state_40860;
var statearr_40947_41127 = state_40860__$1;
(statearr_40947_41127[(2)] = null);

(statearr_40947_41127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (3))){
var inst_40858 = (state_40860[(2)]);
var state_40860__$1 = state_40860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40860__$1,inst_40858);
} else {
if((state_val_40861 === (12))){
var inst_40783 = (state_40860[(2)]);
var state_40860__$1 = state_40860;
var statearr_40948_41128 = state_40860__$1;
(statearr_40948_41128[(2)] = inst_40783);

(statearr_40948_41128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (2))){
var state_40860__$1 = state_40860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40860__$1,(4),ch);
} else {
if((state_val_40861 === (23))){
var state_40860__$1 = state_40860;
var statearr_40950_41132 = state_40860__$1;
(statearr_40950_41132[(2)] = null);

(statearr_40950_41132[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (35))){
var inst_40842 = (state_40860[(2)]);
var state_40860__$1 = state_40860;
var statearr_40951_41133 = state_40860__$1;
(statearr_40951_41133[(2)] = inst_40842);

(statearr_40951_41133[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (19))){
var inst_40755 = (state_40860[(7)]);
var inst_40759 = cljs.core.chunk_first.call(null,inst_40755);
var inst_40760 = cljs.core.chunk_rest.call(null,inst_40755);
var inst_40761 = cljs.core.count.call(null,inst_40759);
var inst_40733 = inst_40760;
var inst_40734 = inst_40759;
var inst_40735 = inst_40761;
var inst_40736 = (0);
var state_40860__$1 = (function (){var statearr_40953 = state_40860;
(statearr_40953[(14)] = inst_40734);

(statearr_40953[(15)] = inst_40735);

(statearr_40953[(16)] = inst_40736);

(statearr_40953[(17)] = inst_40733);

return statearr_40953;
})();
var statearr_40955_41140 = state_40860__$1;
(statearr_40955_41140[(2)] = null);

(statearr_40955_41140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (11))){
var inst_40733 = (state_40860[(17)]);
var inst_40755 = (state_40860[(7)]);
var inst_40755__$1 = cljs.core.seq.call(null,inst_40733);
var state_40860__$1 = (function (){var statearr_40956 = state_40860;
(statearr_40956[(7)] = inst_40755__$1);

return statearr_40956;
})();
if(inst_40755__$1){
var statearr_40957_41146 = state_40860__$1;
(statearr_40957_41146[(1)] = (16));

} else {
var statearr_40958_41148 = state_40860__$1;
(statearr_40958_41148[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (9))){
var inst_40785 = (state_40860[(2)]);
var state_40860__$1 = state_40860;
var statearr_40960_41152 = state_40860__$1;
(statearr_40960_41152[(2)] = inst_40785);

(statearr_40960_41152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (5))){
var inst_40731 = cljs.core.deref.call(null,cs);
var inst_40732 = cljs.core.seq.call(null,inst_40731);
var inst_40733 = inst_40732;
var inst_40734 = null;
var inst_40735 = (0);
var inst_40736 = (0);
var state_40860__$1 = (function (){var statearr_40961 = state_40860;
(statearr_40961[(14)] = inst_40734);

(statearr_40961[(15)] = inst_40735);

(statearr_40961[(16)] = inst_40736);

(statearr_40961[(17)] = inst_40733);

return statearr_40961;
})();
var statearr_40963_41159 = state_40860__$1;
(statearr_40963_41159[(2)] = null);

(statearr_40963_41159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (14))){
var state_40860__$1 = state_40860;
var statearr_40964_41163 = state_40860__$1;
(statearr_40964_41163[(2)] = null);

(statearr_40964_41163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (45))){
var inst_40850 = (state_40860[(2)]);
var state_40860__$1 = state_40860;
var statearr_40965_41168 = state_40860__$1;
(statearr_40965_41168[(2)] = inst_40850);

(statearr_40965_41168[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (26))){
var inst_40788 = (state_40860[(29)]);
var inst_40846 = (state_40860[(2)]);
var inst_40847 = cljs.core.seq.call(null,inst_40788);
var state_40860__$1 = (function (){var statearr_40967 = state_40860;
(statearr_40967[(31)] = inst_40846);

return statearr_40967;
})();
if(inst_40847){
var statearr_40968_41174 = state_40860__$1;
(statearr_40968_41174[(1)] = (42));

} else {
var statearr_40969_41175 = state_40860__$1;
(statearr_40969_41175[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (16))){
var inst_40755 = (state_40860[(7)]);
var inst_40757 = cljs.core.chunked_seq_QMARK_.call(null,inst_40755);
var state_40860__$1 = state_40860;
if(inst_40757){
var statearr_40971_41177 = state_40860__$1;
(statearr_40971_41177[(1)] = (19));

} else {
var statearr_40972_41178 = state_40860__$1;
(statearr_40972_41178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (38))){
var inst_40839 = (state_40860[(2)]);
var state_40860__$1 = state_40860;
var statearr_40974_41179 = state_40860__$1;
(statearr_40974_41179[(2)] = inst_40839);

(statearr_40974_41179[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (30))){
var state_40860__$1 = state_40860;
var statearr_40976_41183 = state_40860__$1;
(statearr_40976_41183[(2)] = null);

(statearr_40976_41183[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (10))){
var inst_40734 = (state_40860[(14)]);
var inst_40736 = (state_40860[(16)]);
var inst_40744 = cljs.core._nth.call(null,inst_40734,inst_40736);
var inst_40745 = cljs.core.nth.call(null,inst_40744,(0),null);
var inst_40746 = cljs.core.nth.call(null,inst_40744,(1),null);
var state_40860__$1 = (function (){var statearr_40978 = state_40860;
(statearr_40978[(26)] = inst_40745);

return statearr_40978;
})();
if(cljs.core.truth_(inst_40746)){
var statearr_40979_41188 = state_40860__$1;
(statearr_40979_41188[(1)] = (13));

} else {
var statearr_40981_41190 = state_40860__$1;
(statearr_40981_41190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (18))){
var inst_40781 = (state_40860[(2)]);
var state_40860__$1 = state_40860;
var statearr_40982_41192 = state_40860__$1;
(statearr_40982_41192[(2)] = inst_40781);

(statearr_40982_41192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (42))){
var state_40860__$1 = state_40860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40860__$1,(45),dchan);
} else {
if((state_val_40861 === (37))){
var inst_40724 = (state_40860[(9)]);
var inst_40819 = (state_40860[(25)]);
var inst_40828 = (state_40860[(23)]);
var inst_40828__$1 = cljs.core.first.call(null,inst_40819);
var inst_40829 = cljs.core.async.put_BANG_.call(null,inst_40828__$1,inst_40724,done);
var state_40860__$1 = (function (){var statearr_40985 = state_40860;
(statearr_40985[(23)] = inst_40828__$1);

return statearr_40985;
})();
if(cljs.core.truth_(inst_40829)){
var statearr_40986_41198 = state_40860__$1;
(statearr_40986_41198[(1)] = (39));

} else {
var statearr_40987_41199 = state_40860__$1;
(statearr_40987_41199[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40861 === (8))){
var inst_40735 = (state_40860[(15)]);
var inst_40736 = (state_40860[(16)]);
var inst_40738 = (inst_40736 < inst_40735);
var inst_40739 = inst_40738;
var state_40860__$1 = state_40860;
if(cljs.core.truth_(inst_40739)){
var statearr_40990_41205 = state_40860__$1;
(statearr_40990_41205[(1)] = (10));

} else {
var statearr_40991_41207 = state_40860__$1;
(statearr_40991_41207[(1)] = (11));

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
});})(c__33728__auto___41033,cs,m,dchan,dctr,done))
;
return ((function (switch__33334__auto__,c__33728__auto___41033,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33335__auto__ = null;
var cljs$core$async$mult_$_state_machine__33335__auto____0 = (function (){
var statearr_40998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40998[(0)] = cljs$core$async$mult_$_state_machine__33335__auto__);

(statearr_40998[(1)] = (1));

return statearr_40998;
});
var cljs$core$async$mult_$_state_machine__33335__auto____1 = (function (state_40860){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_40860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e41000){if((e41000 instanceof Object)){
var ex__33338__auto__ = e41000;
var statearr_41001_41216 = state_40860;
(statearr_41001_41216[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41217 = state_40860;
state_40860 = G__41217;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33335__auto__ = function(state_40860){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33335__auto____1.call(this,state_40860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33335__auto____0;
cljs$core$async$mult_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33335__auto____1;
return cljs$core$async$mult_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___41033,cs,m,dchan,dctr,done))
})();
var state__33730__auto__ = (function (){var statearr_41005 = f__33729__auto__.call(null);
(statearr_41005[(6)] = c__33728__auto___41033);

return statearr_41005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___41033,cs,m,dchan,dctr,done))
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
var G__41226 = arguments.length;
switch (G__41226) {
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
var len__31349__auto___41355 = arguments.length;
var i__31350__auto___41356 = (0);
while(true){
if((i__31350__auto___41356 < len__31349__auto___41355)){
args__31356__auto__.push((arguments[i__31350__auto___41356]));

var G__41361 = (i__31350__auto___41356 + (1));
i__31350__auto___41356 = G__41361;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((3) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41323){
var map__41324 = p__41323;
var map__41324__$1 = ((((!((map__41324 == null)))?((((map__41324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41324):map__41324);
var opts = map__41324__$1;
var statearr_41330_41381 = state;
(statearr_41330_41381[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__41324,map__41324__$1,opts){
return (function (val){
var statearr_41335_41386 = state;
(statearr_41335_41386[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41324,map__41324__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_41337_41387 = state;
(statearr_41337_41387[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41310){
var G__41311 = cljs.core.first.call(null,seq41310);
var seq41310__$1 = cljs.core.next.call(null,seq41310);
var G__41312 = cljs.core.first.call(null,seq41310__$1);
var seq41310__$2 = cljs.core.next.call(null,seq41310__$1);
var G__41313 = cljs.core.first.call(null,seq41310__$2);
var seq41310__$3 = cljs.core.next.call(null,seq41310__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41311,G__41312,G__41313,seq41310__$3);
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
if(typeof cljs.core.async.t_cljs$core$async41395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41395 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta41396){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta41396 = meta41396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41397,meta41396__$1){
var self__ = this;
var _41397__$1 = this;
return (new cljs.core.async.t_cljs$core$async41395(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta41396__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41397){
var self__ = this;
var _41397__$1 = this;
return self__.meta41396;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41395.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41395.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41395.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41395.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41395.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41395.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41395.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async41395.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta41396","meta41396",-1199123810,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41395";

cljs.core.async.t_cljs$core$async41395.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async41395");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41395 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41395(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41396){
return (new cljs.core.async.t_cljs$core$async41395(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41396));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41395(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33728__auto___41637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___41637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___41637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41511){
var state_val_41512 = (state_41511[(1)]);
if((state_val_41512 === (7))){
var inst_41419 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
var statearr_41513_41641 = state_41511__$1;
(statearr_41513_41641[(2)] = inst_41419);

(statearr_41513_41641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (20))){
var inst_41431 = (state_41511[(7)]);
var state_41511__$1 = state_41511;
var statearr_41515_41643 = state_41511__$1;
(statearr_41515_41643[(2)] = inst_41431);

(statearr_41515_41643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (27))){
var state_41511__$1 = state_41511;
var statearr_41516_41644 = state_41511__$1;
(statearr_41516_41644[(2)] = null);

(statearr_41516_41644[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (1))){
var inst_41405 = (state_41511[(8)]);
var inst_41405__$1 = calc_state.call(null);
var inst_41407 = (inst_41405__$1 == null);
var inst_41408 = cljs.core.not.call(null,inst_41407);
var state_41511__$1 = (function (){var statearr_41518 = state_41511;
(statearr_41518[(8)] = inst_41405__$1);

return statearr_41518;
})();
if(inst_41408){
var statearr_41519_41646 = state_41511__$1;
(statearr_41519_41646[(1)] = (2));

} else {
var statearr_41520_41647 = state_41511__$1;
(statearr_41520_41647[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (24))){
var inst_41466 = (state_41511[(9)]);
var inst_41457 = (state_41511[(10)]);
var inst_41482 = (state_41511[(11)]);
var inst_41482__$1 = inst_41457.call(null,inst_41466);
var state_41511__$1 = (function (){var statearr_41521 = state_41511;
(statearr_41521[(11)] = inst_41482__$1);

return statearr_41521;
})();
if(cljs.core.truth_(inst_41482__$1)){
var statearr_41522_41653 = state_41511__$1;
(statearr_41522_41653[(1)] = (29));

} else {
var statearr_41523_41655 = state_41511__$1;
(statearr_41523_41655[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (4))){
var inst_41422 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
if(cljs.core.truth_(inst_41422)){
var statearr_41525_41657 = state_41511__$1;
(statearr_41525_41657[(1)] = (8));

} else {
var statearr_41526_41659 = state_41511__$1;
(statearr_41526_41659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (15))){
var inst_41450 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
if(cljs.core.truth_(inst_41450)){
var statearr_41527_41660 = state_41511__$1;
(statearr_41527_41660[(1)] = (19));

} else {
var statearr_41528_41661 = state_41511__$1;
(statearr_41528_41661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (21))){
var inst_41456 = (state_41511[(12)]);
var inst_41456__$1 = (state_41511[(2)]);
var inst_41457 = cljs.core.get.call(null,inst_41456__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41458 = cljs.core.get.call(null,inst_41456__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41459 = cljs.core.get.call(null,inst_41456__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41511__$1 = (function (){var statearr_41531 = state_41511;
(statearr_41531[(12)] = inst_41456__$1);

(statearr_41531[(10)] = inst_41457);

(statearr_41531[(13)] = inst_41458);

return statearr_41531;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41511__$1,(22),inst_41459);
} else {
if((state_val_41512 === (31))){
var inst_41491 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
if(cljs.core.truth_(inst_41491)){
var statearr_41533_41668 = state_41511__$1;
(statearr_41533_41668[(1)] = (32));

} else {
var statearr_41534_41669 = state_41511__$1;
(statearr_41534_41669[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (32))){
var inst_41465 = (state_41511[(14)]);
var state_41511__$1 = state_41511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41511__$1,(35),out,inst_41465);
} else {
if((state_val_41512 === (33))){
var inst_41456 = (state_41511[(12)]);
var inst_41431 = inst_41456;
var state_41511__$1 = (function (){var statearr_41536 = state_41511;
(statearr_41536[(7)] = inst_41431);

return statearr_41536;
})();
var statearr_41539_41675 = state_41511__$1;
(statearr_41539_41675[(2)] = null);

(statearr_41539_41675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (13))){
var inst_41431 = (state_41511[(7)]);
var inst_41439 = inst_41431.cljs$lang$protocol_mask$partition0$;
var inst_41440 = (inst_41439 & (64));
var inst_41441 = inst_41431.cljs$core$ISeq$;
var inst_41442 = (cljs.core.PROTOCOL_SENTINEL === inst_41441);
var inst_41443 = (inst_41440) || (inst_41442);
var state_41511__$1 = state_41511;
if(cljs.core.truth_(inst_41443)){
var statearr_41542_41679 = state_41511__$1;
(statearr_41542_41679[(1)] = (16));

} else {
var statearr_41543_41680 = state_41511__$1;
(statearr_41543_41680[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (22))){
var inst_41466 = (state_41511[(9)]);
var inst_41465 = (state_41511[(14)]);
var inst_41464 = (state_41511[(2)]);
var inst_41465__$1 = cljs.core.nth.call(null,inst_41464,(0),null);
var inst_41466__$1 = cljs.core.nth.call(null,inst_41464,(1),null);
var inst_41468 = (inst_41465__$1 == null);
var inst_41469 = cljs.core._EQ_.call(null,inst_41466__$1,change);
var inst_41470 = (inst_41468) || (inst_41469);
var state_41511__$1 = (function (){var statearr_41544 = state_41511;
(statearr_41544[(9)] = inst_41466__$1);

(statearr_41544[(14)] = inst_41465__$1);

return statearr_41544;
})();
if(cljs.core.truth_(inst_41470)){
var statearr_41545_41685 = state_41511__$1;
(statearr_41545_41685[(1)] = (23));

} else {
var statearr_41546_41686 = state_41511__$1;
(statearr_41546_41686[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (36))){
var inst_41456 = (state_41511[(12)]);
var inst_41431 = inst_41456;
var state_41511__$1 = (function (){var statearr_41548 = state_41511;
(statearr_41548[(7)] = inst_41431);

return statearr_41548;
})();
var statearr_41549_41688 = state_41511__$1;
(statearr_41549_41688[(2)] = null);

(statearr_41549_41688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (29))){
var inst_41482 = (state_41511[(11)]);
var state_41511__$1 = state_41511;
var statearr_41550_41689 = state_41511__$1;
(statearr_41550_41689[(2)] = inst_41482);

(statearr_41550_41689[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (6))){
var state_41511__$1 = state_41511;
var statearr_41551_41693 = state_41511__$1;
(statearr_41551_41693[(2)] = false);

(statearr_41551_41693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (28))){
var inst_41477 = (state_41511[(2)]);
var inst_41478 = calc_state.call(null);
var inst_41431 = inst_41478;
var state_41511__$1 = (function (){var statearr_41552 = state_41511;
(statearr_41552[(7)] = inst_41431);

(statearr_41552[(15)] = inst_41477);

return statearr_41552;
})();
var statearr_41553_41694 = state_41511__$1;
(statearr_41553_41694[(2)] = null);

(statearr_41553_41694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (25))){
var inst_41505 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
var statearr_41554_41696 = state_41511__$1;
(statearr_41554_41696[(2)] = inst_41505);

(statearr_41554_41696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (34))){
var inst_41503 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
var statearr_41555_41698 = state_41511__$1;
(statearr_41555_41698[(2)] = inst_41503);

(statearr_41555_41698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (17))){
var state_41511__$1 = state_41511;
var statearr_41556_41701 = state_41511__$1;
(statearr_41556_41701[(2)] = false);

(statearr_41556_41701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (3))){
var state_41511__$1 = state_41511;
var statearr_41558_41702 = state_41511__$1;
(statearr_41558_41702[(2)] = false);

(statearr_41558_41702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (12))){
var inst_41508 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41511__$1,inst_41508);
} else {
if((state_val_41512 === (2))){
var inst_41405 = (state_41511[(8)]);
var inst_41411 = inst_41405.cljs$lang$protocol_mask$partition0$;
var inst_41412 = (inst_41411 & (64));
var inst_41413 = inst_41405.cljs$core$ISeq$;
var inst_41414 = (cljs.core.PROTOCOL_SENTINEL === inst_41413);
var inst_41415 = (inst_41412) || (inst_41414);
var state_41511__$1 = state_41511;
if(cljs.core.truth_(inst_41415)){
var statearr_41559_41705 = state_41511__$1;
(statearr_41559_41705[(1)] = (5));

} else {
var statearr_41560_41707 = state_41511__$1;
(statearr_41560_41707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (23))){
var inst_41465 = (state_41511[(14)]);
var inst_41472 = (inst_41465 == null);
var state_41511__$1 = state_41511;
if(cljs.core.truth_(inst_41472)){
var statearr_41564_41709 = state_41511__$1;
(statearr_41564_41709[(1)] = (26));

} else {
var statearr_41565_41713 = state_41511__$1;
(statearr_41565_41713[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (35))){
var inst_41494 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
if(cljs.core.truth_(inst_41494)){
var statearr_41566_41714 = state_41511__$1;
(statearr_41566_41714[(1)] = (36));

} else {
var statearr_41568_41716 = state_41511__$1;
(statearr_41568_41716[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (19))){
var inst_41431 = (state_41511[(7)]);
var inst_41453 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41431);
var state_41511__$1 = state_41511;
var statearr_41569_41717 = state_41511__$1;
(statearr_41569_41717[(2)] = inst_41453);

(statearr_41569_41717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (11))){
var inst_41431 = (state_41511[(7)]);
var inst_41435 = (inst_41431 == null);
var inst_41436 = cljs.core.not.call(null,inst_41435);
var state_41511__$1 = state_41511;
if(inst_41436){
var statearr_41570_41721 = state_41511__$1;
(statearr_41570_41721[(1)] = (13));

} else {
var statearr_41571_41724 = state_41511__$1;
(statearr_41571_41724[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (9))){
var inst_41405 = (state_41511[(8)]);
var state_41511__$1 = state_41511;
var statearr_41572_41726 = state_41511__$1;
(statearr_41572_41726[(2)] = inst_41405);

(statearr_41572_41726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (5))){
var state_41511__$1 = state_41511;
var statearr_41573_41728 = state_41511__$1;
(statearr_41573_41728[(2)] = true);

(statearr_41573_41728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (14))){
var state_41511__$1 = state_41511;
var statearr_41574_41729 = state_41511__$1;
(statearr_41574_41729[(2)] = false);

(statearr_41574_41729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (26))){
var inst_41466 = (state_41511[(9)]);
var inst_41474 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41466);
var state_41511__$1 = state_41511;
var statearr_41576_41733 = state_41511__$1;
(statearr_41576_41733[(2)] = inst_41474);

(statearr_41576_41733[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (16))){
var state_41511__$1 = state_41511;
var statearr_41577_41734 = state_41511__$1;
(statearr_41577_41734[(2)] = true);

(statearr_41577_41734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (38))){
var inst_41499 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
var statearr_41578_41735 = state_41511__$1;
(statearr_41578_41735[(2)] = inst_41499);

(statearr_41578_41735[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (30))){
var inst_41466 = (state_41511[(9)]);
var inst_41457 = (state_41511[(10)]);
var inst_41458 = (state_41511[(13)]);
var inst_41486 = cljs.core.empty_QMARK_.call(null,inst_41457);
var inst_41487 = inst_41458.call(null,inst_41466);
var inst_41488 = cljs.core.not.call(null,inst_41487);
var inst_41489 = (inst_41486) && (inst_41488);
var state_41511__$1 = state_41511;
var statearr_41579_41744 = state_41511__$1;
(statearr_41579_41744[(2)] = inst_41489);

(statearr_41579_41744[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (10))){
var inst_41405 = (state_41511[(8)]);
var inst_41427 = (state_41511[(2)]);
var inst_41428 = cljs.core.get.call(null,inst_41427,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41429 = cljs.core.get.call(null,inst_41427,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41430 = cljs.core.get.call(null,inst_41427,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41431 = inst_41405;
var state_41511__$1 = (function (){var statearr_41580 = state_41511;
(statearr_41580[(16)] = inst_41429);

(statearr_41580[(17)] = inst_41428);

(statearr_41580[(7)] = inst_41431);

(statearr_41580[(18)] = inst_41430);

return statearr_41580;
})();
var statearr_41582_41748 = state_41511__$1;
(statearr_41582_41748[(2)] = null);

(statearr_41582_41748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (18))){
var inst_41447 = (state_41511[(2)]);
var state_41511__$1 = state_41511;
var statearr_41583_41749 = state_41511__$1;
(statearr_41583_41749[(2)] = inst_41447);

(statearr_41583_41749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (37))){
var state_41511__$1 = state_41511;
var statearr_41584_41753 = state_41511__$1;
(statearr_41584_41753[(2)] = null);

(statearr_41584_41753[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41512 === (8))){
var inst_41405 = (state_41511[(8)]);
var inst_41424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41405);
var state_41511__$1 = state_41511;
var statearr_41585_41754 = state_41511__$1;
(statearr_41585_41754[(2)] = inst_41424);

(statearr_41585_41754[(1)] = (10));


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
});})(c__33728__auto___41637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33334__auto__,c__33728__auto___41637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33335__auto__ = null;
var cljs$core$async$mix_$_state_machine__33335__auto____0 = (function (){
var statearr_41586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41586[(0)] = cljs$core$async$mix_$_state_machine__33335__auto__);

(statearr_41586[(1)] = (1));

return statearr_41586;
});
var cljs$core$async$mix_$_state_machine__33335__auto____1 = (function (state_41511){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_41511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e41588){if((e41588 instanceof Object)){
var ex__33338__auto__ = e41588;
var statearr_41589_41762 = state_41511;
(statearr_41589_41762[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41764 = state_41511;
state_41511 = G__41764;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33335__auto__ = function(state_41511){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33335__auto____1.call(this,state_41511);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33335__auto____0;
cljs$core$async$mix_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33335__auto____1;
return cljs$core$async$mix_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___41637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33730__auto__ = (function (){var statearr_41591 = f__33729__auto__.call(null);
(statearr_41591[(6)] = c__33728__auto___41637);

return statearr_41591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___41637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__41776 = arguments.length;
switch (G__41776) {
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
var G__41784 = arguments.length;
switch (G__41784) {
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
return (function (p1__41782_SHARP_){
if(cljs.core.truth_(p1__41782_SHARP_.call(null,topic))){
return p1__41782_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41782_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30072__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41785 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41786){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41786 = meta41786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41787,meta41786__$1){
var self__ = this;
var _41787__$1 = this;
return (new cljs.core.async.t_cljs$core$async41785(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41786__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41787){
var self__ = this;
var _41787__$1 = this;
return self__.meta41786;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41785.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41785.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41785.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41785.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async41785.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41785.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41785.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41786","meta41786",316323020,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41785";

cljs.core.async.t_cljs$core$async41785.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async41785");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41785 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41785(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41786){
return (new cljs.core.async.t_cljs$core$async41785(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41786));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41785(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33728__auto___41920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___41920,mults,ensure_mult,p){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___41920,mults,ensure_mult,p){
return (function (state_41864){
var state_val_41865 = (state_41864[(1)]);
if((state_val_41865 === (7))){
var inst_41860 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
var statearr_41866_41921 = state_41864__$1;
(statearr_41866_41921[(2)] = inst_41860);

(statearr_41866_41921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (20))){
var state_41864__$1 = state_41864;
var statearr_41867_41922 = state_41864__$1;
(statearr_41867_41922[(2)] = null);

(statearr_41867_41922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (1))){
var state_41864__$1 = state_41864;
var statearr_41868_41923 = state_41864__$1;
(statearr_41868_41923[(2)] = null);

(statearr_41868_41923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (24))){
var inst_41843 = (state_41864[(7)]);
var inst_41852 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41843);
var state_41864__$1 = state_41864;
var statearr_41869_41924 = state_41864__$1;
(statearr_41869_41924[(2)] = inst_41852);

(statearr_41869_41924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (4))){
var inst_41795 = (state_41864[(8)]);
var inst_41795__$1 = (state_41864[(2)]);
var inst_41796 = (inst_41795__$1 == null);
var state_41864__$1 = (function (){var statearr_41870 = state_41864;
(statearr_41870[(8)] = inst_41795__$1);

return statearr_41870;
})();
if(cljs.core.truth_(inst_41796)){
var statearr_41871_41925 = state_41864__$1;
(statearr_41871_41925[(1)] = (5));

} else {
var statearr_41872_41926 = state_41864__$1;
(statearr_41872_41926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (15))){
var inst_41837 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
var statearr_41877_41927 = state_41864__$1;
(statearr_41877_41927[(2)] = inst_41837);

(statearr_41877_41927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (21))){
var inst_41857 = (state_41864[(2)]);
var state_41864__$1 = (function (){var statearr_41879 = state_41864;
(statearr_41879[(9)] = inst_41857);

return statearr_41879;
})();
var statearr_41880_41928 = state_41864__$1;
(statearr_41880_41928[(2)] = null);

(statearr_41880_41928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (13))){
var inst_41819 = (state_41864[(10)]);
var inst_41821 = cljs.core.chunked_seq_QMARK_.call(null,inst_41819);
var state_41864__$1 = state_41864;
if(inst_41821){
var statearr_41881_41929 = state_41864__$1;
(statearr_41881_41929[(1)] = (16));

} else {
var statearr_41882_41930 = state_41864__$1;
(statearr_41882_41930[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (22))){
var inst_41849 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
if(cljs.core.truth_(inst_41849)){
var statearr_41883_41931 = state_41864__$1;
(statearr_41883_41931[(1)] = (23));

} else {
var statearr_41884_41932 = state_41864__$1;
(statearr_41884_41932[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (6))){
var inst_41843 = (state_41864[(7)]);
var inst_41845 = (state_41864[(11)]);
var inst_41795 = (state_41864[(8)]);
var inst_41843__$1 = topic_fn.call(null,inst_41795);
var inst_41844 = cljs.core.deref.call(null,mults);
var inst_41845__$1 = cljs.core.get.call(null,inst_41844,inst_41843__$1);
var state_41864__$1 = (function (){var statearr_41886 = state_41864;
(statearr_41886[(7)] = inst_41843__$1);

(statearr_41886[(11)] = inst_41845__$1);

return statearr_41886;
})();
if(cljs.core.truth_(inst_41845__$1)){
var statearr_41887_41943 = state_41864__$1;
(statearr_41887_41943[(1)] = (19));

} else {
var statearr_41888_41944 = state_41864__$1;
(statearr_41888_41944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (25))){
var inst_41854 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
var statearr_41889_41945 = state_41864__$1;
(statearr_41889_41945[(2)] = inst_41854);

(statearr_41889_41945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (17))){
var inst_41819 = (state_41864[(10)]);
var inst_41828 = cljs.core.first.call(null,inst_41819);
var inst_41829 = cljs.core.async.muxch_STAR_.call(null,inst_41828);
var inst_41830 = cljs.core.async.close_BANG_.call(null,inst_41829);
var inst_41831 = cljs.core.next.call(null,inst_41819);
var inst_41805 = inst_41831;
var inst_41806 = null;
var inst_41807 = (0);
var inst_41808 = (0);
var state_41864__$1 = (function (){var statearr_41890 = state_41864;
(statearr_41890[(12)] = inst_41808);

(statearr_41890[(13)] = inst_41805);

(statearr_41890[(14)] = inst_41806);

(statearr_41890[(15)] = inst_41830);

(statearr_41890[(16)] = inst_41807);

return statearr_41890;
})();
var statearr_41891_41946 = state_41864__$1;
(statearr_41891_41946[(2)] = null);

(statearr_41891_41946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (3))){
var inst_41862 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41864__$1,inst_41862);
} else {
if((state_val_41865 === (12))){
var inst_41839 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
var statearr_41892_41950 = state_41864__$1;
(statearr_41892_41950[(2)] = inst_41839);

(statearr_41892_41950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (2))){
var state_41864__$1 = state_41864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41864__$1,(4),ch);
} else {
if((state_val_41865 === (23))){
var state_41864__$1 = state_41864;
var statearr_41893_41951 = state_41864__$1;
(statearr_41893_41951[(2)] = null);

(statearr_41893_41951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (19))){
var inst_41845 = (state_41864[(11)]);
var inst_41795 = (state_41864[(8)]);
var inst_41847 = cljs.core.async.muxch_STAR_.call(null,inst_41845);
var state_41864__$1 = state_41864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41864__$1,(22),inst_41847,inst_41795);
} else {
if((state_val_41865 === (11))){
var inst_41805 = (state_41864[(13)]);
var inst_41819 = (state_41864[(10)]);
var inst_41819__$1 = cljs.core.seq.call(null,inst_41805);
var state_41864__$1 = (function (){var statearr_41894 = state_41864;
(statearr_41894[(10)] = inst_41819__$1);

return statearr_41894;
})();
if(inst_41819__$1){
var statearr_41895_41952 = state_41864__$1;
(statearr_41895_41952[(1)] = (13));

} else {
var statearr_41896_41953 = state_41864__$1;
(statearr_41896_41953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (9))){
var inst_41841 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
var statearr_41897_41956 = state_41864__$1;
(statearr_41897_41956[(2)] = inst_41841);

(statearr_41897_41956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (5))){
var inst_41802 = cljs.core.deref.call(null,mults);
var inst_41803 = cljs.core.vals.call(null,inst_41802);
var inst_41804 = cljs.core.seq.call(null,inst_41803);
var inst_41805 = inst_41804;
var inst_41806 = null;
var inst_41807 = (0);
var inst_41808 = (0);
var state_41864__$1 = (function (){var statearr_41898 = state_41864;
(statearr_41898[(12)] = inst_41808);

(statearr_41898[(13)] = inst_41805);

(statearr_41898[(14)] = inst_41806);

(statearr_41898[(16)] = inst_41807);

return statearr_41898;
})();
var statearr_41899_41960 = state_41864__$1;
(statearr_41899_41960[(2)] = null);

(statearr_41899_41960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (14))){
var state_41864__$1 = state_41864;
var statearr_41903_41961 = state_41864__$1;
(statearr_41903_41961[(2)] = null);

(statearr_41903_41961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (16))){
var inst_41819 = (state_41864[(10)]);
var inst_41823 = cljs.core.chunk_first.call(null,inst_41819);
var inst_41824 = cljs.core.chunk_rest.call(null,inst_41819);
var inst_41825 = cljs.core.count.call(null,inst_41823);
var inst_41805 = inst_41824;
var inst_41806 = inst_41823;
var inst_41807 = inst_41825;
var inst_41808 = (0);
var state_41864__$1 = (function (){var statearr_41904 = state_41864;
(statearr_41904[(12)] = inst_41808);

(statearr_41904[(13)] = inst_41805);

(statearr_41904[(14)] = inst_41806);

(statearr_41904[(16)] = inst_41807);

return statearr_41904;
})();
var statearr_41908_41962 = state_41864__$1;
(statearr_41908_41962[(2)] = null);

(statearr_41908_41962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (10))){
var inst_41808 = (state_41864[(12)]);
var inst_41805 = (state_41864[(13)]);
var inst_41806 = (state_41864[(14)]);
var inst_41807 = (state_41864[(16)]);
var inst_41813 = cljs.core._nth.call(null,inst_41806,inst_41808);
var inst_41814 = cljs.core.async.muxch_STAR_.call(null,inst_41813);
var inst_41815 = cljs.core.async.close_BANG_.call(null,inst_41814);
var inst_41816 = (inst_41808 + (1));
var tmp41900 = inst_41805;
var tmp41901 = inst_41806;
var tmp41902 = inst_41807;
var inst_41805__$1 = tmp41900;
var inst_41806__$1 = tmp41901;
var inst_41807__$1 = tmp41902;
var inst_41808__$1 = inst_41816;
var state_41864__$1 = (function (){var statearr_41909 = state_41864;
(statearr_41909[(12)] = inst_41808__$1);

(statearr_41909[(13)] = inst_41805__$1);

(statearr_41909[(14)] = inst_41806__$1);

(statearr_41909[(17)] = inst_41815);

(statearr_41909[(16)] = inst_41807__$1);

return statearr_41909;
})();
var statearr_41910_41964 = state_41864__$1;
(statearr_41910_41964[(2)] = null);

(statearr_41910_41964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (18))){
var inst_41834 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
var statearr_41911_41965 = state_41864__$1;
(statearr_41911_41965[(2)] = inst_41834);

(statearr_41911_41965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (8))){
var inst_41808 = (state_41864[(12)]);
var inst_41807 = (state_41864[(16)]);
var inst_41810 = (inst_41808 < inst_41807);
var inst_41811 = inst_41810;
var state_41864__$1 = state_41864;
if(cljs.core.truth_(inst_41811)){
var statearr_41912_41967 = state_41864__$1;
(statearr_41912_41967[(1)] = (10));

} else {
var statearr_41913_41968 = state_41864__$1;
(statearr_41913_41968[(1)] = (11));

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
});})(c__33728__auto___41920,mults,ensure_mult,p))
;
return ((function (switch__33334__auto__,c__33728__auto___41920,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_41914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41914[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_41914[(1)] = (1));

return statearr_41914;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_41864){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_41864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e41915){if((e41915 instanceof Object)){
var ex__33338__auto__ = e41915;
var statearr_41916_41969 = state_41864;
(statearr_41916_41969[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41970 = state_41864;
state_41864 = G__41970;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_41864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_41864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___41920,mults,ensure_mult,p))
})();
var state__33730__auto__ = (function (){var statearr_41917 = f__33729__auto__.call(null);
(statearr_41917[(6)] = c__33728__auto___41920);

return statearr_41917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___41920,mults,ensure_mult,p))
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
var G__41972 = arguments.length;
switch (G__41972) {
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
var G__41985 = arguments.length;
switch (G__41985) {
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
var G__41988 = arguments.length;
switch (G__41988) {
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
var c__33728__auto___42066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___42066,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___42066,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42028){
var state_val_42029 = (state_42028[(1)]);
if((state_val_42029 === (7))){
var state_42028__$1 = state_42028;
var statearr_42030_42071 = state_42028__$1;
(statearr_42030_42071[(2)] = null);

(statearr_42030_42071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (1))){
var state_42028__$1 = state_42028;
var statearr_42031_42074 = state_42028__$1;
(statearr_42031_42074[(2)] = null);

(statearr_42031_42074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (4))){
var inst_41992 = (state_42028[(7)]);
var inst_41994 = (inst_41992 < cnt);
var state_42028__$1 = state_42028;
if(cljs.core.truth_(inst_41994)){
var statearr_42033_42075 = state_42028__$1;
(statearr_42033_42075[(1)] = (6));

} else {
var statearr_42034_42076 = state_42028__$1;
(statearr_42034_42076[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (15))){
var inst_42024 = (state_42028[(2)]);
var state_42028__$1 = state_42028;
var statearr_42035_42077 = state_42028__$1;
(statearr_42035_42077[(2)] = inst_42024);

(statearr_42035_42077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (13))){
var inst_42017 = cljs.core.async.close_BANG_.call(null,out);
var state_42028__$1 = state_42028;
var statearr_42036_42078 = state_42028__$1;
(statearr_42036_42078[(2)] = inst_42017);

(statearr_42036_42078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (6))){
var state_42028__$1 = state_42028;
var statearr_42037_42080 = state_42028__$1;
(statearr_42037_42080[(2)] = null);

(statearr_42037_42080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (3))){
var inst_42026 = (state_42028[(2)]);
var state_42028__$1 = state_42028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42028__$1,inst_42026);
} else {
if((state_val_42029 === (12))){
var inst_42014 = (state_42028[(8)]);
var inst_42014__$1 = (state_42028[(2)]);
var inst_42015 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42014__$1);
var state_42028__$1 = (function (){var statearr_42038 = state_42028;
(statearr_42038[(8)] = inst_42014__$1);

return statearr_42038;
})();
if(cljs.core.truth_(inst_42015)){
var statearr_42039_42081 = state_42028__$1;
(statearr_42039_42081[(1)] = (13));

} else {
var statearr_42040_42082 = state_42028__$1;
(statearr_42040_42082[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (2))){
var inst_41991 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41992 = (0);
var state_42028__$1 = (function (){var statearr_42042 = state_42028;
(statearr_42042[(9)] = inst_41991);

(statearr_42042[(7)] = inst_41992);

return statearr_42042;
})();
var statearr_42043_42083 = state_42028__$1;
(statearr_42043_42083[(2)] = null);

(statearr_42043_42083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (11))){
var inst_41992 = (state_42028[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42028,(10),Object,null,(9));
var inst_42001 = chs__$1.call(null,inst_41992);
var inst_42002 = done.call(null,inst_41992);
var inst_42003 = cljs.core.async.take_BANG_.call(null,inst_42001,inst_42002);
var state_42028__$1 = state_42028;
var statearr_42044_42084 = state_42028__$1;
(statearr_42044_42084[(2)] = inst_42003);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42028__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (9))){
var inst_41992 = (state_42028[(7)]);
var inst_42005 = (state_42028[(2)]);
var inst_42006 = (inst_41992 + (1));
var inst_41992__$1 = inst_42006;
var state_42028__$1 = (function (){var statearr_42045 = state_42028;
(statearr_42045[(7)] = inst_41992__$1);

(statearr_42045[(10)] = inst_42005);

return statearr_42045;
})();
var statearr_42046_42088 = state_42028__$1;
(statearr_42046_42088[(2)] = null);

(statearr_42046_42088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (5))){
var inst_42012 = (state_42028[(2)]);
var state_42028__$1 = (function (){var statearr_42047 = state_42028;
(statearr_42047[(11)] = inst_42012);

return statearr_42047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42028__$1,(12),dchan);
} else {
if((state_val_42029 === (14))){
var inst_42014 = (state_42028[(8)]);
var inst_42019 = cljs.core.apply.call(null,f,inst_42014);
var state_42028__$1 = state_42028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42028__$1,(16),out,inst_42019);
} else {
if((state_val_42029 === (16))){
var inst_42021 = (state_42028[(2)]);
var state_42028__$1 = (function (){var statearr_42048 = state_42028;
(statearr_42048[(12)] = inst_42021);

return statearr_42048;
})();
var statearr_42049_42089 = state_42028__$1;
(statearr_42049_42089[(2)] = null);

(statearr_42049_42089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (10))){
var inst_41996 = (state_42028[(2)]);
var inst_41997 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42028__$1 = (function (){var statearr_42051 = state_42028;
(statearr_42051[(13)] = inst_41996);

return statearr_42051;
})();
var statearr_42052_42091 = state_42028__$1;
(statearr_42052_42091[(2)] = inst_41997);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42028__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42029 === (8))){
var inst_42010 = (state_42028[(2)]);
var state_42028__$1 = state_42028;
var statearr_42053_42094 = state_42028__$1;
(statearr_42053_42094[(2)] = inst_42010);

(statearr_42053_42094[(1)] = (5));


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
});})(c__33728__auto___42066,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33334__auto__,c__33728__auto___42066,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_42054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42054[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_42054[(1)] = (1));

return statearr_42054;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_42028){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_42028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e42055){if((e42055 instanceof Object)){
var ex__33338__auto__ = e42055;
var statearr_42056_42101 = state_42028;
(statearr_42056_42101[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42102 = state_42028;
state_42028 = G__42102;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_42028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_42028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___42066,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33730__auto__ = (function (){var statearr_42057 = f__33729__auto__.call(null);
(statearr_42057[(6)] = c__33728__auto___42066);

return statearr_42057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___42066,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__42108 = arguments.length;
switch (G__42108) {
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
var c__33728__auto___42176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___42176,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___42176,out){
return (function (state_42140){
var state_val_42141 = (state_42140[(1)]);
if((state_val_42141 === (7))){
var inst_42119 = (state_42140[(7)]);
var inst_42120 = (state_42140[(8)]);
var inst_42119__$1 = (state_42140[(2)]);
var inst_42120__$1 = cljs.core.nth.call(null,inst_42119__$1,(0),null);
var inst_42121 = cljs.core.nth.call(null,inst_42119__$1,(1),null);
var inst_42122 = (inst_42120__$1 == null);
var state_42140__$1 = (function (){var statearr_42145 = state_42140;
(statearr_42145[(7)] = inst_42119__$1);

(statearr_42145[(9)] = inst_42121);

(statearr_42145[(8)] = inst_42120__$1);

return statearr_42145;
})();
if(cljs.core.truth_(inst_42122)){
var statearr_42146_42178 = state_42140__$1;
(statearr_42146_42178[(1)] = (8));

} else {
var statearr_42147_42179 = state_42140__$1;
(statearr_42147_42179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (1))){
var inst_42109 = cljs.core.vec.call(null,chs);
var inst_42110 = inst_42109;
var state_42140__$1 = (function (){var statearr_42148 = state_42140;
(statearr_42148[(10)] = inst_42110);

return statearr_42148;
})();
var statearr_42149_42182 = state_42140__$1;
(statearr_42149_42182[(2)] = null);

(statearr_42149_42182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (4))){
var inst_42110 = (state_42140[(10)]);
var state_42140__$1 = state_42140;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42140__$1,(7),inst_42110);
} else {
if((state_val_42141 === (6))){
var inst_42136 = (state_42140[(2)]);
var state_42140__$1 = state_42140;
var statearr_42150_42195 = state_42140__$1;
(statearr_42150_42195[(2)] = inst_42136);

(statearr_42150_42195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (3))){
var inst_42138 = (state_42140[(2)]);
var state_42140__$1 = state_42140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42140__$1,inst_42138);
} else {
if((state_val_42141 === (2))){
var inst_42110 = (state_42140[(10)]);
var inst_42112 = cljs.core.count.call(null,inst_42110);
var inst_42113 = (inst_42112 > (0));
var state_42140__$1 = state_42140;
if(cljs.core.truth_(inst_42113)){
var statearr_42153_42205 = state_42140__$1;
(statearr_42153_42205[(1)] = (4));

} else {
var statearr_42157_42206 = state_42140__$1;
(statearr_42157_42206[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (11))){
var inst_42110 = (state_42140[(10)]);
var inst_42129 = (state_42140[(2)]);
var tmp42151 = inst_42110;
var inst_42110__$1 = tmp42151;
var state_42140__$1 = (function (){var statearr_42158 = state_42140;
(statearr_42158[(10)] = inst_42110__$1);

(statearr_42158[(11)] = inst_42129);

return statearr_42158;
})();
var statearr_42159_42213 = state_42140__$1;
(statearr_42159_42213[(2)] = null);

(statearr_42159_42213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (9))){
var inst_42120 = (state_42140[(8)]);
var state_42140__$1 = state_42140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42140__$1,(11),out,inst_42120);
} else {
if((state_val_42141 === (5))){
var inst_42134 = cljs.core.async.close_BANG_.call(null,out);
var state_42140__$1 = state_42140;
var statearr_42164_42216 = state_42140__$1;
(statearr_42164_42216[(2)] = inst_42134);

(statearr_42164_42216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (10))){
var inst_42132 = (state_42140[(2)]);
var state_42140__$1 = state_42140;
var statearr_42165_42217 = state_42140__$1;
(statearr_42165_42217[(2)] = inst_42132);

(statearr_42165_42217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (8))){
var inst_42119 = (state_42140[(7)]);
var inst_42110 = (state_42140[(10)]);
var inst_42121 = (state_42140[(9)]);
var inst_42120 = (state_42140[(8)]);
var inst_42124 = (function (){var cs = inst_42110;
var vec__42115 = inst_42119;
var v = inst_42120;
var c = inst_42121;
return ((function (cs,vec__42115,v,c,inst_42119,inst_42110,inst_42121,inst_42120,state_val_42141,c__33728__auto___42176,out){
return (function (p1__42106_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42106_SHARP_);
});
;})(cs,vec__42115,v,c,inst_42119,inst_42110,inst_42121,inst_42120,state_val_42141,c__33728__auto___42176,out))
})();
var inst_42125 = cljs.core.filterv.call(null,inst_42124,inst_42110);
var inst_42110__$1 = inst_42125;
var state_42140__$1 = (function (){var statearr_42166 = state_42140;
(statearr_42166[(10)] = inst_42110__$1);

return statearr_42166;
})();
var statearr_42167_42234 = state_42140__$1;
(statearr_42167_42234[(2)] = null);

(statearr_42167_42234[(1)] = (2));


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
});})(c__33728__auto___42176,out))
;
return ((function (switch__33334__auto__,c__33728__auto___42176,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_42168 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42168[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_42168[(1)] = (1));

return statearr_42168;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_42140){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_42140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e42169){if((e42169 instanceof Object)){
var ex__33338__auto__ = e42169;
var statearr_42170_42245 = state_42140;
(statearr_42170_42245[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42246 = state_42140;
state_42140 = G__42246;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_42140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_42140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___42176,out))
})();
var state__33730__auto__ = (function (){var statearr_42171 = f__33729__auto__.call(null);
(statearr_42171[(6)] = c__33728__auto___42176);

return statearr_42171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___42176,out))
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
var G__42263 = arguments.length;
switch (G__42263) {
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
var c__33728__auto___42360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___42360,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___42360,out){
return (function (state_42290){
var state_val_42291 = (state_42290[(1)]);
if((state_val_42291 === (7))){
var inst_42272 = (state_42290[(7)]);
var inst_42272__$1 = (state_42290[(2)]);
var inst_42273 = (inst_42272__$1 == null);
var inst_42274 = cljs.core.not.call(null,inst_42273);
var state_42290__$1 = (function (){var statearr_42292 = state_42290;
(statearr_42292[(7)] = inst_42272__$1);

return statearr_42292;
})();
if(inst_42274){
var statearr_42293_42361 = state_42290__$1;
(statearr_42293_42361[(1)] = (8));

} else {
var statearr_42294_42362 = state_42290__$1;
(statearr_42294_42362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42291 === (1))){
var inst_42267 = (0);
var state_42290__$1 = (function (){var statearr_42299 = state_42290;
(statearr_42299[(8)] = inst_42267);

return statearr_42299;
})();
var statearr_42300_42363 = state_42290__$1;
(statearr_42300_42363[(2)] = null);

(statearr_42300_42363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42291 === (4))){
var state_42290__$1 = state_42290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42290__$1,(7),ch);
} else {
if((state_val_42291 === (6))){
var inst_42285 = (state_42290[(2)]);
var state_42290__$1 = state_42290;
var statearr_42304_42368 = state_42290__$1;
(statearr_42304_42368[(2)] = inst_42285);

(statearr_42304_42368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42291 === (3))){
var inst_42287 = (state_42290[(2)]);
var inst_42288 = cljs.core.async.close_BANG_.call(null,out);
var state_42290__$1 = (function (){var statearr_42305 = state_42290;
(statearr_42305[(9)] = inst_42287);

return statearr_42305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42290__$1,inst_42288);
} else {
if((state_val_42291 === (2))){
var inst_42267 = (state_42290[(8)]);
var inst_42269 = (inst_42267 < n);
var state_42290__$1 = state_42290;
if(cljs.core.truth_(inst_42269)){
var statearr_42306_42372 = state_42290__$1;
(statearr_42306_42372[(1)] = (4));

} else {
var statearr_42307_42373 = state_42290__$1;
(statearr_42307_42373[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42291 === (11))){
var inst_42267 = (state_42290[(8)]);
var inst_42277 = (state_42290[(2)]);
var inst_42278 = (inst_42267 + (1));
var inst_42267__$1 = inst_42278;
var state_42290__$1 = (function (){var statearr_42312 = state_42290;
(statearr_42312[(10)] = inst_42277);

(statearr_42312[(8)] = inst_42267__$1);

return statearr_42312;
})();
var statearr_42313_42385 = state_42290__$1;
(statearr_42313_42385[(2)] = null);

(statearr_42313_42385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42291 === (9))){
var state_42290__$1 = state_42290;
var statearr_42315_42392 = state_42290__$1;
(statearr_42315_42392[(2)] = null);

(statearr_42315_42392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42291 === (5))){
var state_42290__$1 = state_42290;
var statearr_42317_42393 = state_42290__$1;
(statearr_42317_42393[(2)] = null);

(statearr_42317_42393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42291 === (10))){
var inst_42282 = (state_42290[(2)]);
var state_42290__$1 = state_42290;
var statearr_42323_42394 = state_42290__$1;
(statearr_42323_42394[(2)] = inst_42282);

(statearr_42323_42394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42291 === (8))){
var inst_42272 = (state_42290[(7)]);
var state_42290__$1 = state_42290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42290__$1,(11),out,inst_42272);
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
});})(c__33728__auto___42360,out))
;
return ((function (switch__33334__auto__,c__33728__auto___42360,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_42327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42327[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_42327[(1)] = (1));

return statearr_42327;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_42290){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_42290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e42329){if((e42329 instanceof Object)){
var ex__33338__auto__ = e42329;
var statearr_42330_42410 = state_42290;
(statearr_42330_42410[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42416 = state_42290;
state_42290 = G__42416;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_42290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_42290);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___42360,out))
})();
var state__33730__auto__ = (function (){var statearr_42331 = f__33729__auto__.call(null);
(statearr_42331[(6)] = c__33728__auto___42360);

return statearr_42331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___42360,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42427 = (function (f,ch,meta42428){
this.f = f;
this.ch = ch;
this.meta42428 = meta42428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42429,meta42428__$1){
var self__ = this;
var _42429__$1 = this;
return (new cljs.core.async.t_cljs$core$async42427(self__.f,self__.ch,meta42428__$1));
});

cljs.core.async.t_cljs$core$async42427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42429){
var self__ = this;
var _42429__$1 = this;
return self__.meta42428;
});

cljs.core.async.t_cljs$core$async42427.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42427.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42427.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42427.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42427.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42446 = (function (f,ch,meta42428,_,fn1,meta42447){
this.f = f;
this.ch = ch;
this.meta42428 = meta42428;
this._ = _;
this.fn1 = fn1;
this.meta42447 = meta42447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42448,meta42447__$1){
var self__ = this;
var _42448__$1 = this;
return (new cljs.core.async.t_cljs$core$async42446(self__.f,self__.ch,self__.meta42428,self__._,self__.fn1,meta42447__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42448){
var self__ = this;
var _42448__$1 = this;
return self__.meta42447;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42446.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42446.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42426_SHARP_){
return f1.call(null,(((p1__42426_SHARP_ == null))?null:self__.f.call(null,p1__42426_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42446.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42428","meta42428",-1697620776,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42427","cljs.core.async/t_cljs$core$async42427",-1479640211,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42447","meta42447",-633050123,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42446";

cljs.core.async.t_cljs$core$async42446.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async42446");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42446 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42446(f__$1,ch__$1,meta42428__$1,___$2,fn1__$1,meta42447){
return (new cljs.core.async.t_cljs$core$async42446(f__$1,ch__$1,meta42428__$1,___$2,fn1__$1,meta42447));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42446(self__.f,self__.ch,self__.meta42428,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async42427.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42427.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42428","meta42428",-1697620776,null)], null);
});

cljs.core.async.t_cljs$core$async42427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42427";

cljs.core.async.t_cljs$core$async42427.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async42427");
});

cljs.core.async.__GT_t_cljs$core$async42427 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42427(f__$1,ch__$1,meta42428){
return (new cljs.core.async.t_cljs$core$async42427(f__$1,ch__$1,meta42428));
});

}

return (new cljs.core.async.t_cljs$core$async42427(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42472 = (function (f,ch,meta42473){
this.f = f;
this.ch = ch;
this.meta42473 = meta42473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42474,meta42473__$1){
var self__ = this;
var _42474__$1 = this;
return (new cljs.core.async.t_cljs$core$async42472(self__.f,self__.ch,meta42473__$1));
});

cljs.core.async.t_cljs$core$async42472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42474){
var self__ = this;
var _42474__$1 = this;
return self__.meta42473;
});

cljs.core.async.t_cljs$core$async42472.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42472.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42472.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42473","meta42473",1631960154,null)], null);
});

cljs.core.async.t_cljs$core$async42472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42472";

cljs.core.async.t_cljs$core$async42472.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async42472");
});

cljs.core.async.__GT_t_cljs$core$async42472 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42472(f__$1,ch__$1,meta42473){
return (new cljs.core.async.t_cljs$core$async42472(f__$1,ch__$1,meta42473));
});

}

return (new cljs.core.async.t_cljs$core$async42472(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42493 = (function (p,ch,meta42494){
this.p = p;
this.ch = ch;
this.meta42494 = meta42494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42495,meta42494__$1){
var self__ = this;
var _42495__$1 = this;
return (new cljs.core.async.t_cljs$core$async42493(self__.p,self__.ch,meta42494__$1));
});

cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42495){
var self__ = this;
var _42495__$1 = this;
return self__.meta42494;
});

cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42494","meta42494",479661301,null)], null);
});

cljs.core.async.t_cljs$core$async42493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42493";

cljs.core.async.t_cljs$core$async42493.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.core.async/t_cljs$core$async42493");
});

cljs.core.async.__GT_t_cljs$core$async42493 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42493(p__$1,ch__$1,meta42494){
return (new cljs.core.async.t_cljs$core$async42493(p__$1,ch__$1,meta42494));
});

}

return (new cljs.core.async.t_cljs$core$async42493(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42529 = arguments.length;
switch (G__42529) {
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
var c__33728__auto___42588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___42588,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___42588,out){
return (function (state_42556){
var state_val_42557 = (state_42556[(1)]);
if((state_val_42557 === (7))){
var inst_42552 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
var statearr_42560_42591 = state_42556__$1;
(statearr_42560_42591[(2)] = inst_42552);

(statearr_42560_42591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (1))){
var state_42556__$1 = state_42556;
var statearr_42561_42595 = state_42556__$1;
(statearr_42561_42595[(2)] = null);

(statearr_42561_42595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (4))){
var inst_42538 = (state_42556[(7)]);
var inst_42538__$1 = (state_42556[(2)]);
var inst_42539 = (inst_42538__$1 == null);
var state_42556__$1 = (function (){var statearr_42562 = state_42556;
(statearr_42562[(7)] = inst_42538__$1);

return statearr_42562;
})();
if(cljs.core.truth_(inst_42539)){
var statearr_42563_42596 = state_42556__$1;
(statearr_42563_42596[(1)] = (5));

} else {
var statearr_42564_42597 = state_42556__$1;
(statearr_42564_42597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (6))){
var inst_42538 = (state_42556[(7)]);
var inst_42543 = p.call(null,inst_42538);
var state_42556__$1 = state_42556;
if(cljs.core.truth_(inst_42543)){
var statearr_42565_42601 = state_42556__$1;
(statearr_42565_42601[(1)] = (8));

} else {
var statearr_42566_42602 = state_42556__$1;
(statearr_42566_42602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (3))){
var inst_42554 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42556__$1,inst_42554);
} else {
if((state_val_42557 === (2))){
var state_42556__$1 = state_42556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42556__$1,(4),ch);
} else {
if((state_val_42557 === (11))){
var inst_42546 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
var statearr_42568_42603 = state_42556__$1;
(statearr_42568_42603[(2)] = inst_42546);

(statearr_42568_42603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (9))){
var state_42556__$1 = state_42556;
var statearr_42569_42610 = state_42556__$1;
(statearr_42569_42610[(2)] = null);

(statearr_42569_42610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (5))){
var inst_42541 = cljs.core.async.close_BANG_.call(null,out);
var state_42556__$1 = state_42556;
var statearr_42570_42624 = state_42556__$1;
(statearr_42570_42624[(2)] = inst_42541);

(statearr_42570_42624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (10))){
var inst_42549 = (state_42556[(2)]);
var state_42556__$1 = (function (){var statearr_42571 = state_42556;
(statearr_42571[(8)] = inst_42549);

return statearr_42571;
})();
var statearr_42572_42625 = state_42556__$1;
(statearr_42572_42625[(2)] = null);

(statearr_42572_42625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (8))){
var inst_42538 = (state_42556[(7)]);
var state_42556__$1 = state_42556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42556__$1,(11),out,inst_42538);
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
});})(c__33728__auto___42588,out))
;
return ((function (switch__33334__auto__,c__33728__auto___42588,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_42573 = [null,null,null,null,null,null,null,null,null];
(statearr_42573[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_42573[(1)] = (1));

return statearr_42573;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_42556){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_42556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e42574){if((e42574 instanceof Object)){
var ex__33338__auto__ = e42574;
var statearr_42575_42639 = state_42556;
(statearr_42575_42639[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42644 = state_42556;
state_42556 = G__42644;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_42556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_42556);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___42588,out))
})();
var state__33730__auto__ = (function (){var statearr_42576 = f__33729__auto__.call(null);
(statearr_42576[(6)] = c__33728__auto___42588);

return statearr_42576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___42588,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42649 = arguments.length;
switch (G__42649) {
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
return (function (state_42716){
var state_val_42723 = (state_42716[(1)]);
if((state_val_42723 === (7))){
var inst_42712 = (state_42716[(2)]);
var state_42716__$1 = state_42716;
var statearr_42724_42773 = state_42716__$1;
(statearr_42724_42773[(2)] = inst_42712);

(statearr_42724_42773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (20))){
var inst_42682 = (state_42716[(7)]);
var inst_42693 = (state_42716[(2)]);
var inst_42694 = cljs.core.next.call(null,inst_42682);
var inst_42668 = inst_42694;
var inst_42669 = null;
var inst_42670 = (0);
var inst_42671 = (0);
var state_42716__$1 = (function (){var statearr_42725 = state_42716;
(statearr_42725[(8)] = inst_42671);

(statearr_42725[(9)] = inst_42668);

(statearr_42725[(10)] = inst_42693);

(statearr_42725[(11)] = inst_42670);

(statearr_42725[(12)] = inst_42669);

return statearr_42725;
})();
var statearr_42726_42778 = state_42716__$1;
(statearr_42726_42778[(2)] = null);

(statearr_42726_42778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (1))){
var state_42716__$1 = state_42716;
var statearr_42727_42782 = state_42716__$1;
(statearr_42727_42782[(2)] = null);

(statearr_42727_42782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (4))){
var inst_42657 = (state_42716[(13)]);
var inst_42657__$1 = (state_42716[(2)]);
var inst_42658 = (inst_42657__$1 == null);
var state_42716__$1 = (function (){var statearr_42728 = state_42716;
(statearr_42728[(13)] = inst_42657__$1);

return statearr_42728;
})();
if(cljs.core.truth_(inst_42658)){
var statearr_42729_42783 = state_42716__$1;
(statearr_42729_42783[(1)] = (5));

} else {
var statearr_42730_42784 = state_42716__$1;
(statearr_42730_42784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (15))){
var state_42716__$1 = state_42716;
var statearr_42734_42785 = state_42716__$1;
(statearr_42734_42785[(2)] = null);

(statearr_42734_42785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (21))){
var state_42716__$1 = state_42716;
var statearr_42735_42790 = state_42716__$1;
(statearr_42735_42790[(2)] = null);

(statearr_42735_42790[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (13))){
var inst_42671 = (state_42716[(8)]);
var inst_42668 = (state_42716[(9)]);
var inst_42670 = (state_42716[(11)]);
var inst_42669 = (state_42716[(12)]);
var inst_42678 = (state_42716[(2)]);
var inst_42679 = (inst_42671 + (1));
var tmp42731 = inst_42668;
var tmp42732 = inst_42670;
var tmp42733 = inst_42669;
var inst_42668__$1 = tmp42731;
var inst_42669__$1 = tmp42733;
var inst_42670__$1 = tmp42732;
var inst_42671__$1 = inst_42679;
var state_42716__$1 = (function (){var statearr_42736 = state_42716;
(statearr_42736[(8)] = inst_42671__$1);

(statearr_42736[(9)] = inst_42668__$1);

(statearr_42736[(11)] = inst_42670__$1);

(statearr_42736[(12)] = inst_42669__$1);

(statearr_42736[(14)] = inst_42678);

return statearr_42736;
})();
var statearr_42737_42791 = state_42716__$1;
(statearr_42737_42791[(2)] = null);

(statearr_42737_42791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (22))){
var state_42716__$1 = state_42716;
var statearr_42738_42792 = state_42716__$1;
(statearr_42738_42792[(2)] = null);

(statearr_42738_42792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (6))){
var inst_42657 = (state_42716[(13)]);
var inst_42666 = f.call(null,inst_42657);
var inst_42667 = cljs.core.seq.call(null,inst_42666);
var inst_42668 = inst_42667;
var inst_42669 = null;
var inst_42670 = (0);
var inst_42671 = (0);
var state_42716__$1 = (function (){var statearr_42739 = state_42716;
(statearr_42739[(8)] = inst_42671);

(statearr_42739[(9)] = inst_42668);

(statearr_42739[(11)] = inst_42670);

(statearr_42739[(12)] = inst_42669);

return statearr_42739;
})();
var statearr_42740_42796 = state_42716__$1;
(statearr_42740_42796[(2)] = null);

(statearr_42740_42796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (17))){
var inst_42682 = (state_42716[(7)]);
var inst_42686 = cljs.core.chunk_first.call(null,inst_42682);
var inst_42687 = cljs.core.chunk_rest.call(null,inst_42682);
var inst_42688 = cljs.core.count.call(null,inst_42686);
var inst_42668 = inst_42687;
var inst_42669 = inst_42686;
var inst_42670 = inst_42688;
var inst_42671 = (0);
var state_42716__$1 = (function (){var statearr_42741 = state_42716;
(statearr_42741[(8)] = inst_42671);

(statearr_42741[(9)] = inst_42668);

(statearr_42741[(11)] = inst_42670);

(statearr_42741[(12)] = inst_42669);

return statearr_42741;
})();
var statearr_42742_42800 = state_42716__$1;
(statearr_42742_42800[(2)] = null);

(statearr_42742_42800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (3))){
var inst_42714 = (state_42716[(2)]);
var state_42716__$1 = state_42716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42716__$1,inst_42714);
} else {
if((state_val_42723 === (12))){
var inst_42702 = (state_42716[(2)]);
var state_42716__$1 = state_42716;
var statearr_42743_42801 = state_42716__$1;
(statearr_42743_42801[(2)] = inst_42702);

(statearr_42743_42801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (2))){
var state_42716__$1 = state_42716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42716__$1,(4),in$);
} else {
if((state_val_42723 === (23))){
var inst_42710 = (state_42716[(2)]);
var state_42716__$1 = state_42716;
var statearr_42744_42805 = state_42716__$1;
(statearr_42744_42805[(2)] = inst_42710);

(statearr_42744_42805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (19))){
var inst_42697 = (state_42716[(2)]);
var state_42716__$1 = state_42716;
var statearr_42745_42806 = state_42716__$1;
(statearr_42745_42806[(2)] = inst_42697);

(statearr_42745_42806[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (11))){
var inst_42668 = (state_42716[(9)]);
var inst_42682 = (state_42716[(7)]);
var inst_42682__$1 = cljs.core.seq.call(null,inst_42668);
var state_42716__$1 = (function (){var statearr_42746 = state_42716;
(statearr_42746[(7)] = inst_42682__$1);

return statearr_42746;
})();
if(inst_42682__$1){
var statearr_42750_42807 = state_42716__$1;
(statearr_42750_42807[(1)] = (14));

} else {
var statearr_42751_42808 = state_42716__$1;
(statearr_42751_42808[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (9))){
var inst_42704 = (state_42716[(2)]);
var inst_42705 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42716__$1 = (function (){var statearr_42752 = state_42716;
(statearr_42752[(15)] = inst_42704);

return statearr_42752;
})();
if(cljs.core.truth_(inst_42705)){
var statearr_42753_42809 = state_42716__$1;
(statearr_42753_42809[(1)] = (21));

} else {
var statearr_42754_42812 = state_42716__$1;
(statearr_42754_42812[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (5))){
var inst_42660 = cljs.core.async.close_BANG_.call(null,out);
var state_42716__$1 = state_42716;
var statearr_42761_42813 = state_42716__$1;
(statearr_42761_42813[(2)] = inst_42660);

(statearr_42761_42813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (14))){
var inst_42682 = (state_42716[(7)]);
var inst_42684 = cljs.core.chunked_seq_QMARK_.call(null,inst_42682);
var state_42716__$1 = state_42716;
if(inst_42684){
var statearr_42762_42814 = state_42716__$1;
(statearr_42762_42814[(1)] = (17));

} else {
var statearr_42763_42815 = state_42716__$1;
(statearr_42763_42815[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (16))){
var inst_42700 = (state_42716[(2)]);
var state_42716__$1 = state_42716;
var statearr_42764_42816 = state_42716__$1;
(statearr_42764_42816[(2)] = inst_42700);

(statearr_42764_42816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (10))){
var inst_42671 = (state_42716[(8)]);
var inst_42669 = (state_42716[(12)]);
var inst_42676 = cljs.core._nth.call(null,inst_42669,inst_42671);
var state_42716__$1 = state_42716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42716__$1,(13),out,inst_42676);
} else {
if((state_val_42723 === (18))){
var inst_42682 = (state_42716[(7)]);
var inst_42691 = cljs.core.first.call(null,inst_42682);
var state_42716__$1 = state_42716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42716__$1,(20),out,inst_42691);
} else {
if((state_val_42723 === (8))){
var inst_42671 = (state_42716[(8)]);
var inst_42670 = (state_42716[(11)]);
var inst_42673 = (inst_42671 < inst_42670);
var inst_42674 = inst_42673;
var state_42716__$1 = state_42716;
if(cljs.core.truth_(inst_42674)){
var statearr_42765_42821 = state_42716__$1;
(statearr_42765_42821[(1)] = (10));

} else {
var statearr_42766_42822 = state_42716__$1;
(statearr_42766_42822[(1)] = (11));

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
var statearr_42767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42767[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33335__auto__);

(statearr_42767[(1)] = (1));

return statearr_42767;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33335__auto____1 = (function (state_42716){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_42716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e42768){if((e42768 instanceof Object)){
var ex__33338__auto__ = e42768;
var statearr_42769_42826 = state_42716;
(statearr_42769_42826[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42827 = state_42716;
state_42716 = G__42827;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33335__auto__ = function(state_42716){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33335__auto____1.call(this,state_42716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33335__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33335__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_42770 = f__33729__auto__.call(null);
(statearr_42770[(6)] = c__33728__auto__);

return statearr_42770;
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
var G__42841 = arguments.length;
switch (G__42841) {
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
var G__42844 = arguments.length;
switch (G__42844) {
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
var G__42850 = arguments.length;
switch (G__42850) {
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
var c__33728__auto___42913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___42913,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___42913,out){
return (function (state_42878){
var state_val_42879 = (state_42878[(1)]);
if((state_val_42879 === (7))){
var inst_42873 = (state_42878[(2)]);
var state_42878__$1 = state_42878;
var statearr_42880_42917 = state_42878__$1;
(statearr_42880_42917[(2)] = inst_42873);

(statearr_42880_42917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (1))){
var inst_42855 = null;
var state_42878__$1 = (function (){var statearr_42881 = state_42878;
(statearr_42881[(7)] = inst_42855);

return statearr_42881;
})();
var statearr_42882_42918 = state_42878__$1;
(statearr_42882_42918[(2)] = null);

(statearr_42882_42918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (4))){
var inst_42858 = (state_42878[(8)]);
var inst_42858__$1 = (state_42878[(2)]);
var inst_42859 = (inst_42858__$1 == null);
var inst_42860 = cljs.core.not.call(null,inst_42859);
var state_42878__$1 = (function (){var statearr_42883 = state_42878;
(statearr_42883[(8)] = inst_42858__$1);

return statearr_42883;
})();
if(inst_42860){
var statearr_42884_42919 = state_42878__$1;
(statearr_42884_42919[(1)] = (5));

} else {
var statearr_42885_42920 = state_42878__$1;
(statearr_42885_42920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (6))){
var state_42878__$1 = state_42878;
var statearr_42886_42921 = state_42878__$1;
(statearr_42886_42921[(2)] = null);

(statearr_42886_42921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (3))){
var inst_42875 = (state_42878[(2)]);
var inst_42876 = cljs.core.async.close_BANG_.call(null,out);
var state_42878__$1 = (function (){var statearr_42887 = state_42878;
(statearr_42887[(9)] = inst_42875);

return statearr_42887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42878__$1,inst_42876);
} else {
if((state_val_42879 === (2))){
var state_42878__$1 = state_42878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42878__$1,(4),ch);
} else {
if((state_val_42879 === (11))){
var inst_42858 = (state_42878[(8)]);
var inst_42867 = (state_42878[(2)]);
var inst_42855 = inst_42858;
var state_42878__$1 = (function (){var statearr_42888 = state_42878;
(statearr_42888[(7)] = inst_42855);

(statearr_42888[(10)] = inst_42867);

return statearr_42888;
})();
var statearr_42889_42922 = state_42878__$1;
(statearr_42889_42922[(2)] = null);

(statearr_42889_42922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (9))){
var inst_42858 = (state_42878[(8)]);
var state_42878__$1 = state_42878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42878__$1,(11),out,inst_42858);
} else {
if((state_val_42879 === (5))){
var inst_42855 = (state_42878[(7)]);
var inst_42858 = (state_42878[(8)]);
var inst_42862 = cljs.core._EQ_.call(null,inst_42858,inst_42855);
var state_42878__$1 = state_42878;
if(inst_42862){
var statearr_42891_42933 = state_42878__$1;
(statearr_42891_42933[(1)] = (8));

} else {
var statearr_42892_42934 = state_42878__$1;
(statearr_42892_42934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (10))){
var inst_42870 = (state_42878[(2)]);
var state_42878__$1 = state_42878;
var statearr_42898_42938 = state_42878__$1;
(statearr_42898_42938[(2)] = inst_42870);

(statearr_42898_42938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (8))){
var inst_42855 = (state_42878[(7)]);
var tmp42890 = inst_42855;
var inst_42855__$1 = tmp42890;
var state_42878__$1 = (function (){var statearr_42899 = state_42878;
(statearr_42899[(7)] = inst_42855__$1);

return statearr_42899;
})();
var statearr_42900_42939 = state_42878__$1;
(statearr_42900_42939[(2)] = null);

(statearr_42900_42939[(1)] = (2));


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
});})(c__33728__auto___42913,out))
;
return ((function (switch__33334__auto__,c__33728__auto___42913,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_42901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42901[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_42901[(1)] = (1));

return statearr_42901;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_42878){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_42878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e42902){if((e42902 instanceof Object)){
var ex__33338__auto__ = e42902;
var statearr_42903_42943 = state_42878;
(statearr_42903_42943[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42944 = state_42878;
state_42878 = G__42944;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_42878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_42878);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___42913,out))
})();
var state__33730__auto__ = (function (){var statearr_42908 = f__33729__auto__.call(null);
(statearr_42908[(6)] = c__33728__auto___42913);

return statearr_42908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___42913,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42950 = arguments.length;
switch (G__42950) {
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
var c__33728__auto___43027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___43027,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___43027,out){
return (function (state_42992){
var state_val_42993 = (state_42992[(1)]);
if((state_val_42993 === (7))){
var inst_42988 = (state_42992[(2)]);
var state_42992__$1 = state_42992;
var statearr_42994_43028 = state_42992__$1;
(statearr_42994_43028[(2)] = inst_42988);

(statearr_42994_43028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42993 === (1))){
var inst_42955 = (new Array(n));
var inst_42956 = inst_42955;
var inst_42957 = (0);
var state_42992__$1 = (function (){var statearr_42995 = state_42992;
(statearr_42995[(7)] = inst_42957);

(statearr_42995[(8)] = inst_42956);

return statearr_42995;
})();
var statearr_42996_43029 = state_42992__$1;
(statearr_42996_43029[(2)] = null);

(statearr_42996_43029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42993 === (4))){
var inst_42960 = (state_42992[(9)]);
var inst_42960__$1 = (state_42992[(2)]);
var inst_42961 = (inst_42960__$1 == null);
var inst_42962 = cljs.core.not.call(null,inst_42961);
var state_42992__$1 = (function (){var statearr_42997 = state_42992;
(statearr_42997[(9)] = inst_42960__$1);

return statearr_42997;
})();
if(inst_42962){
var statearr_42998_43030 = state_42992__$1;
(statearr_42998_43030[(1)] = (5));

} else {
var statearr_42999_43031 = state_42992__$1;
(statearr_42999_43031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42993 === (15))){
var inst_42982 = (state_42992[(2)]);
var state_42992__$1 = state_42992;
var statearr_43001_43032 = state_42992__$1;
(statearr_43001_43032[(2)] = inst_42982);

(statearr_43001_43032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42993 === (13))){
var state_42992__$1 = state_42992;
var statearr_43002_43036 = state_42992__$1;
(statearr_43002_43036[(2)] = null);

(statearr_43002_43036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42993 === (6))){
var inst_42957 = (state_42992[(7)]);
var inst_42978 = (inst_42957 > (0));
var state_42992__$1 = state_42992;
if(cljs.core.truth_(inst_42978)){
var statearr_43003_43037 = state_42992__$1;
(statearr_43003_43037[(1)] = (12));

} else {
var statearr_43004_43038 = state_42992__$1;
(statearr_43004_43038[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42993 === (3))){
var inst_42990 = (state_42992[(2)]);
var state_42992__$1 = state_42992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42992__$1,inst_42990);
} else {
if((state_val_42993 === (12))){
var inst_42956 = (state_42992[(8)]);
var inst_42980 = cljs.core.vec.call(null,inst_42956);
var state_42992__$1 = state_42992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42992__$1,(15),out,inst_42980);
} else {
if((state_val_42993 === (2))){
var state_42992__$1 = state_42992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42992__$1,(4),ch);
} else {
if((state_val_42993 === (11))){
var inst_42972 = (state_42992[(2)]);
var inst_42973 = (new Array(n));
var inst_42956 = inst_42973;
var inst_42957 = (0);
var state_42992__$1 = (function (){var statearr_43008 = state_42992;
(statearr_43008[(7)] = inst_42957);

(statearr_43008[(8)] = inst_42956);

(statearr_43008[(10)] = inst_42972);

return statearr_43008;
})();
var statearr_43009_43042 = state_42992__$1;
(statearr_43009_43042[(2)] = null);

(statearr_43009_43042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42993 === (9))){
var inst_42956 = (state_42992[(8)]);
var inst_42970 = cljs.core.vec.call(null,inst_42956);
var state_42992__$1 = state_42992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42992__$1,(11),out,inst_42970);
} else {
if((state_val_42993 === (5))){
var inst_42965 = (state_42992[(11)]);
var inst_42957 = (state_42992[(7)]);
var inst_42960 = (state_42992[(9)]);
var inst_42956 = (state_42992[(8)]);
var inst_42964 = (inst_42956[inst_42957] = inst_42960);
var inst_42965__$1 = (inst_42957 + (1));
var inst_42966 = (inst_42965__$1 < n);
var state_42992__$1 = (function (){var statearr_43010 = state_42992;
(statearr_43010[(11)] = inst_42965__$1);

(statearr_43010[(12)] = inst_42964);

return statearr_43010;
})();
if(cljs.core.truth_(inst_42966)){
var statearr_43011_43043 = state_42992__$1;
(statearr_43011_43043[(1)] = (8));

} else {
var statearr_43012_43044 = state_42992__$1;
(statearr_43012_43044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42993 === (14))){
var inst_42985 = (state_42992[(2)]);
var inst_42986 = cljs.core.async.close_BANG_.call(null,out);
var state_42992__$1 = (function (){var statearr_43017 = state_42992;
(statearr_43017[(13)] = inst_42985);

return statearr_43017;
})();
var statearr_43018_43045 = state_42992__$1;
(statearr_43018_43045[(2)] = inst_42986);

(statearr_43018_43045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42993 === (10))){
var inst_42976 = (state_42992[(2)]);
var state_42992__$1 = state_42992;
var statearr_43019_43046 = state_42992__$1;
(statearr_43019_43046[(2)] = inst_42976);

(statearr_43019_43046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42993 === (8))){
var inst_42965 = (state_42992[(11)]);
var inst_42956 = (state_42992[(8)]);
var tmp43016 = inst_42956;
var inst_42956__$1 = tmp43016;
var inst_42957 = inst_42965;
var state_42992__$1 = (function (){var statearr_43020 = state_42992;
(statearr_43020[(7)] = inst_42957);

(statearr_43020[(8)] = inst_42956__$1);

return statearr_43020;
})();
var statearr_43021_43047 = state_42992__$1;
(statearr_43021_43047[(2)] = null);

(statearr_43021_43047[(1)] = (2));


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
});})(c__33728__auto___43027,out))
;
return ((function (switch__33334__auto__,c__33728__auto___43027,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_43022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43022[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_43022[(1)] = (1));

return statearr_43022;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_42992){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_42992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e43023){if((e43023 instanceof Object)){
var ex__33338__auto__ = e43023;
var statearr_43024_43053 = state_42992;
(statearr_43024_43053[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43054 = state_42992;
state_42992 = G__43054;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_42992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_42992);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___43027,out))
})();
var state__33730__auto__ = (function (){var statearr_43025 = f__33729__auto__.call(null);
(statearr_43025[(6)] = c__33728__auto___43027);

return statearr_43025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___43027,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43057 = arguments.length;
switch (G__43057) {
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
var c__33728__auto___43145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___43145,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___43145,out){
return (function (state_43100){
var state_val_43101 = (state_43100[(1)]);
if((state_val_43101 === (7))){
var inst_43096 = (state_43100[(2)]);
var state_43100__$1 = state_43100;
var statearr_43102_43146 = state_43100__$1;
(statearr_43102_43146[(2)] = inst_43096);

(statearr_43102_43146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43101 === (1))){
var inst_43058 = [];
var inst_43059 = inst_43058;
var inst_43060 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43100__$1 = (function (){var statearr_43103 = state_43100;
(statearr_43103[(7)] = inst_43060);

(statearr_43103[(8)] = inst_43059);

return statearr_43103;
})();
var statearr_43104_43147 = state_43100__$1;
(statearr_43104_43147[(2)] = null);

(statearr_43104_43147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43101 === (4))){
var inst_43063 = (state_43100[(9)]);
var inst_43063__$1 = (state_43100[(2)]);
var inst_43064 = (inst_43063__$1 == null);
var inst_43065 = cljs.core.not.call(null,inst_43064);
var state_43100__$1 = (function (){var statearr_43105 = state_43100;
(statearr_43105[(9)] = inst_43063__$1);

return statearr_43105;
})();
if(inst_43065){
var statearr_43106_43152 = state_43100__$1;
(statearr_43106_43152[(1)] = (5));

} else {
var statearr_43107_43153 = state_43100__$1;
(statearr_43107_43153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43101 === (15))){
var inst_43090 = (state_43100[(2)]);
var state_43100__$1 = state_43100;
var statearr_43108_43154 = state_43100__$1;
(statearr_43108_43154[(2)] = inst_43090);

(statearr_43108_43154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43101 === (13))){
var state_43100__$1 = state_43100;
var statearr_43109_43155 = state_43100__$1;
(statearr_43109_43155[(2)] = null);

(statearr_43109_43155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43101 === (6))){
var inst_43059 = (state_43100[(8)]);
var inst_43085 = inst_43059.length;
var inst_43086 = (inst_43085 > (0));
var state_43100__$1 = state_43100;
if(cljs.core.truth_(inst_43086)){
var statearr_43110_43156 = state_43100__$1;
(statearr_43110_43156[(1)] = (12));

} else {
var statearr_43111_43157 = state_43100__$1;
(statearr_43111_43157[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43101 === (3))){
var inst_43098 = (state_43100[(2)]);
var state_43100__$1 = state_43100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43100__$1,inst_43098);
} else {
if((state_val_43101 === (12))){
var inst_43059 = (state_43100[(8)]);
var inst_43088 = cljs.core.vec.call(null,inst_43059);
var state_43100__$1 = state_43100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43100__$1,(15),out,inst_43088);
} else {
if((state_val_43101 === (2))){
var state_43100__$1 = state_43100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43100__$1,(4),ch);
} else {
if((state_val_43101 === (11))){
var inst_43063 = (state_43100[(9)]);
var inst_43067 = (state_43100[(10)]);
var inst_43078 = (state_43100[(2)]);
var inst_43079 = [];
var inst_43080 = inst_43079.push(inst_43063);
var inst_43059 = inst_43079;
var inst_43060 = inst_43067;
var state_43100__$1 = (function (){var statearr_43116 = state_43100;
(statearr_43116[(7)] = inst_43060);

(statearr_43116[(11)] = inst_43080);

(statearr_43116[(12)] = inst_43078);

(statearr_43116[(8)] = inst_43059);

return statearr_43116;
})();
var statearr_43117_43191 = state_43100__$1;
(statearr_43117_43191[(2)] = null);

(statearr_43117_43191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43101 === (9))){
var inst_43059 = (state_43100[(8)]);
var inst_43076 = cljs.core.vec.call(null,inst_43059);
var state_43100__$1 = state_43100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43100__$1,(11),out,inst_43076);
} else {
if((state_val_43101 === (5))){
var inst_43060 = (state_43100[(7)]);
var inst_43063 = (state_43100[(9)]);
var inst_43067 = (state_43100[(10)]);
var inst_43067__$1 = f.call(null,inst_43063);
var inst_43069 = cljs.core._EQ_.call(null,inst_43067__$1,inst_43060);
var inst_43070 = cljs.core.keyword_identical_QMARK_.call(null,inst_43060,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43071 = (inst_43069) || (inst_43070);
var state_43100__$1 = (function (){var statearr_43119 = state_43100;
(statearr_43119[(10)] = inst_43067__$1);

return statearr_43119;
})();
if(cljs.core.truth_(inst_43071)){
var statearr_43120_43201 = state_43100__$1;
(statearr_43120_43201[(1)] = (8));

} else {
var statearr_43121_43202 = state_43100__$1;
(statearr_43121_43202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43101 === (14))){
var inst_43093 = (state_43100[(2)]);
var inst_43094 = cljs.core.async.close_BANG_.call(null,out);
var state_43100__$1 = (function (){var statearr_43123 = state_43100;
(statearr_43123[(13)] = inst_43093);

return statearr_43123;
})();
var statearr_43124_43203 = state_43100__$1;
(statearr_43124_43203[(2)] = inst_43094);

(statearr_43124_43203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43101 === (10))){
var inst_43083 = (state_43100[(2)]);
var state_43100__$1 = state_43100;
var statearr_43130_43204 = state_43100__$1;
(statearr_43130_43204[(2)] = inst_43083);

(statearr_43130_43204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43101 === (8))){
var inst_43063 = (state_43100[(9)]);
var inst_43059 = (state_43100[(8)]);
var inst_43067 = (state_43100[(10)]);
var inst_43073 = inst_43059.push(inst_43063);
var tmp43122 = inst_43059;
var inst_43059__$1 = tmp43122;
var inst_43060 = inst_43067;
var state_43100__$1 = (function (){var statearr_43131 = state_43100;
(statearr_43131[(7)] = inst_43060);

(statearr_43131[(14)] = inst_43073);

(statearr_43131[(8)] = inst_43059__$1);

return statearr_43131;
})();
var statearr_43132_43206 = state_43100__$1;
(statearr_43132_43206[(2)] = null);

(statearr_43132_43206[(1)] = (2));


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
});})(c__33728__auto___43145,out))
;
return ((function (switch__33334__auto__,c__33728__auto___43145,out){
return (function() {
var cljs$core$async$state_machine__33335__auto__ = null;
var cljs$core$async$state_machine__33335__auto____0 = (function (){
var statearr_43133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43133[(0)] = cljs$core$async$state_machine__33335__auto__);

(statearr_43133[(1)] = (1));

return statearr_43133;
});
var cljs$core$async$state_machine__33335__auto____1 = (function (state_43100){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_43100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e43134){if((e43134 instanceof Object)){
var ex__33338__auto__ = e43134;
var statearr_43135_43207 = state_43100;
(statearr_43135_43207[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43208 = state_43100;
state_43100 = G__43208;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs$core$async$state_machine__33335__auto__ = function(state_43100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33335__auto____1.call(this,state_43100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33335__auto____0;
cljs$core$async$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33335__auto____1;
return cljs$core$async$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___43145,out))
})();
var state__33730__auto__ = (function (){var statearr_43139 = f__33729__auto__.call(null);
(statearr_43139[(6)] = c__33728__auto___43145);

return statearr_43139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___43145,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510143308201
