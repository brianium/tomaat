// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__40231_40235 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__40232_40236 = null;
var count__40233_40237 = (0);
var i__40234_40238 = (0);
while(true){
if((i__40234_40238 < count__40233_40237)){
var k_40240 = cljs.core._nth.call(null,chunk__40232_40236,i__40234_40238);
var v_40244 = (b[k_40240]);
(a[k_40240] = v_40244);

var G__40245 = seq__40231_40235;
var G__40246 = chunk__40232_40236;
var G__40247 = count__40233_40237;
var G__40248 = (i__40234_40238 + (1));
seq__40231_40235 = G__40245;
chunk__40232_40236 = G__40246;
count__40233_40237 = G__40247;
i__40234_40238 = G__40248;
continue;
} else {
var temp__5278__auto___40249 = cljs.core.seq.call(null,seq__40231_40235);
if(temp__5278__auto___40249){
var seq__40231_40250__$1 = temp__5278__auto___40249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40231_40250__$1)){
var c__31003__auto___40251 = cljs.core.chunk_first.call(null,seq__40231_40250__$1);
var G__40252 = cljs.core.chunk_rest.call(null,seq__40231_40250__$1);
var G__40253 = c__31003__auto___40251;
var G__40254 = cljs.core.count.call(null,c__31003__auto___40251);
var G__40255 = (0);
seq__40231_40235 = G__40252;
chunk__40232_40236 = G__40253;
count__40233_40237 = G__40254;
i__40234_40238 = G__40255;
continue;
} else {
var k_40256 = cljs.core.first.call(null,seq__40231_40250__$1);
var v_40257 = (b[k_40256]);
(a[k_40256] = v_40257);

var G__40258 = cljs.core.next.call(null,seq__40231_40250__$1);
var G__40259 = null;
var G__40260 = (0);
var G__40261 = (0);
seq__40231_40235 = G__40258;
chunk__40232_40236 = G__40259;
count__40233_40237 = G__40260;
i__40234_40238 = G__40261;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
});
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__40271 = arguments.length;
switch (G__40271) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__40279 = (i + (2));
var G__40280 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__40279;
ret = G__40280;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
});
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__40308_40328 = cljs.core.seq.call(null,v);
var chunk__40309_40329 = null;
var count__40310_40330 = (0);
var i__40311_40331 = (0);
while(true){
if((i__40311_40331 < count__40310_40330)){
var x_40332 = cljs.core._nth.call(null,chunk__40309_40329,i__40311_40331);
ret.push(x_40332);

var G__40333 = seq__40308_40328;
var G__40334 = chunk__40309_40329;
var G__40335 = count__40310_40330;
var G__40336 = (i__40311_40331 + (1));
seq__40308_40328 = G__40333;
chunk__40309_40329 = G__40334;
count__40310_40330 = G__40335;
i__40311_40331 = G__40336;
continue;
} else {
var temp__5278__auto___40337 = cljs.core.seq.call(null,seq__40308_40328);
if(temp__5278__auto___40337){
var seq__40308_40338__$1 = temp__5278__auto___40337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40308_40338__$1)){
var c__31003__auto___40339 = cljs.core.chunk_first.call(null,seq__40308_40338__$1);
var G__40340 = cljs.core.chunk_rest.call(null,seq__40308_40338__$1);
var G__40341 = c__31003__auto___40339;
var G__40342 = cljs.core.count.call(null,c__31003__auto___40339);
var G__40343 = (0);
seq__40308_40328 = G__40340;
chunk__40309_40329 = G__40341;
count__40310_40330 = G__40342;
i__40311_40331 = G__40343;
continue;
} else {
var x_40344 = cljs.core.first.call(null,seq__40308_40338__$1);
ret.push(x_40344);

var G__40345 = cljs.core.next.call(null,seq__40308_40338__$1);
var G__40346 = null;
var G__40347 = (0);
var G__40348 = (0);
seq__40308_40328 = G__40345;
chunk__40309_40329 = G__40346;
count__40310_40330 = G__40347;
i__40311_40331 = G__40348;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
});
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
});
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__40352_40356 = cljs.core.seq.call(null,v);
var chunk__40353_40357 = null;
var count__40354_40358 = (0);
var i__40355_40359 = (0);
while(true){
if((i__40355_40359 < count__40354_40358)){
var x_40361 = cljs.core._nth.call(null,chunk__40353_40357,i__40355_40359);
ret.push(x_40361);

var G__40363 = seq__40352_40356;
var G__40364 = chunk__40353_40357;
var G__40365 = count__40354_40358;
var G__40366 = (i__40355_40359 + (1));
seq__40352_40356 = G__40363;
chunk__40353_40357 = G__40364;
count__40354_40358 = G__40365;
i__40355_40359 = G__40366;
continue;
} else {
var temp__5278__auto___40367 = cljs.core.seq.call(null,seq__40352_40356);
if(temp__5278__auto___40367){
var seq__40352_40368__$1 = temp__5278__auto___40367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40352_40368__$1)){
var c__31003__auto___40369 = cljs.core.chunk_first.call(null,seq__40352_40368__$1);
var G__40370 = cljs.core.chunk_rest.call(null,seq__40352_40368__$1);
var G__40371 = c__31003__auto___40369;
var G__40372 = cljs.core.count.call(null,c__31003__auto___40369);
var G__40373 = (0);
seq__40352_40356 = G__40370;
chunk__40353_40357 = G__40371;
count__40354_40358 = G__40372;
i__40355_40359 = G__40373;
continue;
} else {
var x_40374 = cljs.core.first.call(null,seq__40352_40368__$1);
ret.push(x_40374);

var G__40376 = cljs.core.next.call(null,seq__40352_40368__$1);
var G__40377 = null;
var G__40378 = (0);
var G__40379 = (0);
seq__40352_40356 = G__40376;
chunk__40353_40357 = G__40377;
count__40354_40358 = G__40378;
i__40355_40359 = G__40379;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__40383_40391 = cljs.core.seq.call(null,v);
var chunk__40384_40392 = null;
var count__40385_40393 = (0);
var i__40386_40394 = (0);
while(true){
if((i__40386_40394 < count__40385_40393)){
var x_40395 = cljs.core._nth.call(null,chunk__40384_40392,i__40386_40394);
ret.push(x_40395);

var G__40396 = seq__40383_40391;
var G__40397 = chunk__40384_40392;
var G__40398 = count__40385_40393;
var G__40399 = (i__40386_40394 + (1));
seq__40383_40391 = G__40396;
chunk__40384_40392 = G__40397;
count__40385_40393 = G__40398;
i__40386_40394 = G__40399;
continue;
} else {
var temp__5278__auto___40400 = cljs.core.seq.call(null,seq__40383_40391);
if(temp__5278__auto___40400){
var seq__40383_40401__$1 = temp__5278__auto___40400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40383_40401__$1)){
var c__31003__auto___40402 = cljs.core.chunk_first.call(null,seq__40383_40401__$1);
var G__40403 = cljs.core.chunk_rest.call(null,seq__40383_40401__$1);
var G__40404 = c__31003__auto___40402;
var G__40405 = cljs.core.count.call(null,c__31003__auto___40402);
var G__40406 = (0);
seq__40383_40391 = G__40403;
chunk__40384_40392 = G__40404;
count__40385_40393 = G__40405;
i__40386_40394 = G__40406;
continue;
} else {
var x_40408 = cljs.core.first.call(null,seq__40383_40401__$1);
ret.push(x_40408);

var G__40410 = cljs.core.next.call(null,seq__40383_40401__$1);
var G__40411 = null;
var G__40412 = (0);
var G__40413 = (0);
seq__40383_40391 = G__40410;
chunk__40384_40392 = G__40411;
count__40385_40393 = G__40412;
i__40386_40394 = G__40413;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__40418 = arguments.length;
switch (G__40418) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__40420 = obj;
G__40420.push(kfn.call(null,k),vfn.call(null,v));

return G__40420;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x40421 = cljs.core.clone.call(null,handlers);
x40421.forEach = ((function (x40421,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__40422 = cljs.core.seq.call(null,coll);
var chunk__40423 = null;
var count__40424 = (0);
var i__40425 = (0);
while(true){
if((i__40425 < count__40424)){
var vec__40426 = cljs.core._nth.call(null,chunk__40423,i__40425);
var k = cljs.core.nth.call(null,vec__40426,(0),null);
var v = cljs.core.nth.call(null,vec__40426,(1),null);
f.call(null,v,k);

var G__40441 = seq__40422;
var G__40442 = chunk__40423;
var G__40443 = count__40424;
var G__40444 = (i__40425 + (1));
seq__40422 = G__40441;
chunk__40423 = G__40442;
count__40424 = G__40443;
i__40425 = G__40444;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__40422);
if(temp__5278__auto__){
var seq__40422__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40422__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__40422__$1);
var G__40445 = cljs.core.chunk_rest.call(null,seq__40422__$1);
var G__40446 = c__31003__auto__;
var G__40447 = cljs.core.count.call(null,c__31003__auto__);
var G__40448 = (0);
seq__40422 = G__40445;
chunk__40423 = G__40446;
count__40424 = G__40447;
i__40425 = G__40448;
continue;
} else {
var vec__40429 = cljs.core.first.call(null,seq__40422__$1);
var k = cljs.core.nth.call(null,vec__40429,(0),null);
var v = cljs.core.nth.call(null,vec__40429,(1),null);
f.call(null,v,k);

var G__40449 = cljs.core.next.call(null,seq__40422__$1);
var G__40450 = null;
var G__40451 = (0);
var G__40452 = (0);
seq__40422 = G__40449;
chunk__40423 = G__40450;
count__40424 = G__40451;
i__40425 = G__40452;
continue;
}
} else {
return null;
}
}
break;
}
});})(x40421,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x40421;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__40455 = arguments.length;
switch (G__40455) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit40456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit40456 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta40457){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta40457 = meta40457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cognitect.transit.t_cognitect$transit40456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40458,meta40457__$1){
var self__ = this;
var _40458__$1 = this;
return (new cognitect.transit.t_cognitect$transit40456(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta40457__$1));
});

cognitect.transit.t_cognitect$transit40456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40458){
var self__ = this;
var _40458__$1 = this;
return self__.meta40457;
});

cognitect.transit.t_cognitect$transit40456.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit40456.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit40456.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit40456.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit40456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta40457","meta40457",-520187780,null)], null);
});

cognitect.transit.t_cognitect$transit40456.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit40456.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit40456";

cognitect.transit.t_cognitect$transit40456.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cognitect.transit/t_cognitect$transit40456");
});

cognitect.transit.__GT_t_cognitect$transit40456 = (function cognitect$transit$__GT_t_cognitect$transit40456(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta40457){
return (new cognitect.transit.t_cognitect$transit40456(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta40457));
});

}

return (new cognitect.transit.t_cognitect$transit40456(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__30072__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});

//# sourceMappingURL=transit.js.map?rel=1510360393150
