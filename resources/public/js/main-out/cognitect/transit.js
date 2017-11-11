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
var seq__31988_31992 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__31989_31993 = null;
var count__31990_31994 = (0);
var i__31991_31995 = (0);
while(true){
if((i__31991_31995 < count__31990_31994)){
var k_31996 = cljs.core._nth.call(null,chunk__31989_31993,i__31991_31995);
var v_31997 = (b[k_31996]);
(a[k_31996] = v_31997);

var G__31998 = seq__31988_31992;
var G__31999 = chunk__31989_31993;
var G__32000 = count__31990_31994;
var G__32001 = (i__31991_31995 + (1));
seq__31988_31992 = G__31998;
chunk__31989_31993 = G__31999;
count__31990_31994 = G__32000;
i__31991_31995 = G__32001;
continue;
} else {
var temp__5278__auto___32002 = cljs.core.seq.call(null,seq__31988_31992);
if(temp__5278__auto___32002){
var seq__31988_32003__$1 = temp__5278__auto___32002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31988_32003__$1)){
var c__31003__auto___32004 = cljs.core.chunk_first.call(null,seq__31988_32003__$1);
var G__32005 = cljs.core.chunk_rest.call(null,seq__31988_32003__$1);
var G__32006 = c__31003__auto___32004;
var G__32007 = cljs.core.count.call(null,c__31003__auto___32004);
var G__32008 = (0);
seq__31988_31992 = G__32005;
chunk__31989_31993 = G__32006;
count__31990_31994 = G__32007;
i__31991_31995 = G__32008;
continue;
} else {
var k_32009 = cljs.core.first.call(null,seq__31988_32003__$1);
var v_32010 = (b[k_32009]);
(a[k_32009] = v_32010);

var G__32011 = cljs.core.next.call(null,seq__31988_32003__$1);
var G__32012 = null;
var G__32013 = (0);
var G__32014 = (0);
seq__31988_31992 = G__32011;
chunk__31989_31993 = G__32012;
count__31990_31994 = G__32013;
i__31991_31995 = G__32014;
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
var G__32043 = arguments.length;
switch (G__32043) {
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
var G__32057 = (i + (2));
var G__32058 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__32057;
ret = G__32058;
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
var seq__32074_32081 = cljs.core.seq.call(null,v);
var chunk__32075_32082 = null;
var count__32076_32083 = (0);
var i__32077_32084 = (0);
while(true){
if((i__32077_32084 < count__32076_32083)){
var x_32085 = cljs.core._nth.call(null,chunk__32075_32082,i__32077_32084);
ret.push(x_32085);

var G__32086 = seq__32074_32081;
var G__32087 = chunk__32075_32082;
var G__32088 = count__32076_32083;
var G__32089 = (i__32077_32084 + (1));
seq__32074_32081 = G__32086;
chunk__32075_32082 = G__32087;
count__32076_32083 = G__32088;
i__32077_32084 = G__32089;
continue;
} else {
var temp__5278__auto___32091 = cljs.core.seq.call(null,seq__32074_32081);
if(temp__5278__auto___32091){
var seq__32074_32092__$1 = temp__5278__auto___32091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32074_32092__$1)){
var c__31003__auto___32093 = cljs.core.chunk_first.call(null,seq__32074_32092__$1);
var G__32094 = cljs.core.chunk_rest.call(null,seq__32074_32092__$1);
var G__32095 = c__31003__auto___32093;
var G__32096 = cljs.core.count.call(null,c__31003__auto___32093);
var G__32097 = (0);
seq__32074_32081 = G__32094;
chunk__32075_32082 = G__32095;
count__32076_32083 = G__32096;
i__32077_32084 = G__32097;
continue;
} else {
var x_32098 = cljs.core.first.call(null,seq__32074_32092__$1);
ret.push(x_32098);

var G__32099 = cljs.core.next.call(null,seq__32074_32092__$1);
var G__32100 = null;
var G__32101 = (0);
var G__32102 = (0);
seq__32074_32081 = G__32099;
chunk__32075_32082 = G__32100;
count__32076_32083 = G__32101;
i__32077_32084 = G__32102;
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
var seq__32103_32107 = cljs.core.seq.call(null,v);
var chunk__32104_32108 = null;
var count__32105_32109 = (0);
var i__32106_32110 = (0);
while(true){
if((i__32106_32110 < count__32105_32109)){
var x_32111 = cljs.core._nth.call(null,chunk__32104_32108,i__32106_32110);
ret.push(x_32111);

var G__32112 = seq__32103_32107;
var G__32113 = chunk__32104_32108;
var G__32114 = count__32105_32109;
var G__32115 = (i__32106_32110 + (1));
seq__32103_32107 = G__32112;
chunk__32104_32108 = G__32113;
count__32105_32109 = G__32114;
i__32106_32110 = G__32115;
continue;
} else {
var temp__5278__auto___32116 = cljs.core.seq.call(null,seq__32103_32107);
if(temp__5278__auto___32116){
var seq__32103_32117__$1 = temp__5278__auto___32116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32103_32117__$1)){
var c__31003__auto___32118 = cljs.core.chunk_first.call(null,seq__32103_32117__$1);
var G__32119 = cljs.core.chunk_rest.call(null,seq__32103_32117__$1);
var G__32120 = c__31003__auto___32118;
var G__32121 = cljs.core.count.call(null,c__31003__auto___32118);
var G__32122 = (0);
seq__32103_32107 = G__32119;
chunk__32104_32108 = G__32120;
count__32105_32109 = G__32121;
i__32106_32110 = G__32122;
continue;
} else {
var x_32123 = cljs.core.first.call(null,seq__32103_32117__$1);
ret.push(x_32123);

var G__32124 = cljs.core.next.call(null,seq__32103_32117__$1);
var G__32125 = null;
var G__32126 = (0);
var G__32127 = (0);
seq__32103_32107 = G__32124;
chunk__32104_32108 = G__32125;
count__32105_32109 = G__32126;
i__32106_32110 = G__32127;
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
var seq__32130_32138 = cljs.core.seq.call(null,v);
var chunk__32131_32139 = null;
var count__32132_32140 = (0);
var i__32133_32141 = (0);
while(true){
if((i__32133_32141 < count__32132_32140)){
var x_32142 = cljs.core._nth.call(null,chunk__32131_32139,i__32133_32141);
ret.push(x_32142);

var G__32143 = seq__32130_32138;
var G__32144 = chunk__32131_32139;
var G__32145 = count__32132_32140;
var G__32146 = (i__32133_32141 + (1));
seq__32130_32138 = G__32143;
chunk__32131_32139 = G__32144;
count__32132_32140 = G__32145;
i__32133_32141 = G__32146;
continue;
} else {
var temp__5278__auto___32147 = cljs.core.seq.call(null,seq__32130_32138);
if(temp__5278__auto___32147){
var seq__32130_32148__$1 = temp__5278__auto___32147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32130_32148__$1)){
var c__31003__auto___32149 = cljs.core.chunk_first.call(null,seq__32130_32148__$1);
var G__32150 = cljs.core.chunk_rest.call(null,seq__32130_32148__$1);
var G__32151 = c__31003__auto___32149;
var G__32152 = cljs.core.count.call(null,c__31003__auto___32149);
var G__32153 = (0);
seq__32130_32138 = G__32150;
chunk__32131_32139 = G__32151;
count__32132_32140 = G__32152;
i__32133_32141 = G__32153;
continue;
} else {
var x_32156 = cljs.core.first.call(null,seq__32130_32148__$1);
ret.push(x_32156);

var G__32158 = cljs.core.next.call(null,seq__32130_32148__$1);
var G__32159 = null;
var G__32160 = (0);
var G__32161 = (0);
seq__32130_32138 = G__32158;
chunk__32131_32139 = G__32159;
count__32132_32140 = G__32160;
i__32133_32141 = G__32161;
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
var G__32187 = arguments.length;
switch (G__32187) {
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
var G__32194 = obj;
G__32194.push(kfn.call(null,k),vfn.call(null,v));

return G__32194;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x32196 = cljs.core.clone.call(null,handlers);
x32196.forEach = ((function (x32196,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__32201 = cljs.core.seq.call(null,coll);
var chunk__32202 = null;
var count__32203 = (0);
var i__32204 = (0);
while(true){
if((i__32204 < count__32203)){
var vec__32206 = cljs.core._nth.call(null,chunk__32202,i__32204);
var k = cljs.core.nth.call(null,vec__32206,(0),null);
var v = cljs.core.nth.call(null,vec__32206,(1),null);
f.call(null,v,k);

var G__32250 = seq__32201;
var G__32251 = chunk__32202;
var G__32252 = count__32203;
var G__32253 = (i__32204 + (1));
seq__32201 = G__32250;
chunk__32202 = G__32251;
count__32203 = G__32252;
i__32204 = G__32253;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__32201);
if(temp__5278__auto__){
var seq__32201__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32201__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__32201__$1);
var G__32257 = cljs.core.chunk_rest.call(null,seq__32201__$1);
var G__32258 = c__31003__auto__;
var G__32259 = cljs.core.count.call(null,c__31003__auto__);
var G__32260 = (0);
seq__32201 = G__32257;
chunk__32202 = G__32258;
count__32203 = G__32259;
i__32204 = G__32260;
continue;
} else {
var vec__32215 = cljs.core.first.call(null,seq__32201__$1);
var k = cljs.core.nth.call(null,vec__32215,(0),null);
var v = cljs.core.nth.call(null,vec__32215,(1),null);
f.call(null,v,k);

var G__32263 = cljs.core.next.call(null,seq__32201__$1);
var G__32264 = null;
var G__32265 = (0);
var G__32266 = (0);
seq__32201 = G__32263;
chunk__32202 = G__32264;
count__32203 = G__32265;
i__32204 = G__32266;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32196,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x32196;
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
var G__32279 = arguments.length;
switch (G__32279) {
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
if(typeof cognitect.transit.t_cognitect$transit32301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit32301 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta32303){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta32303 = meta32303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cognitect.transit.t_cognitect$transit32301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32304,meta32303__$1){
var self__ = this;
var _32304__$1 = this;
return (new cognitect.transit.t_cognitect$transit32301(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta32303__$1));
});

cognitect.transit.t_cognitect$transit32301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32304){
var self__ = this;
var _32304__$1 = this;
return self__.meta32303;
});

cognitect.transit.t_cognitect$transit32301.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit32301.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit32301.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit32301.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit32301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta32303","meta32303",420337623,null)], null);
});

cognitect.transit.t_cognitect$transit32301.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit32301.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit32301";

cognitect.transit.t_cognitect$transit32301.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cognitect.transit/t_cognitect$transit32301");
});

cognitect.transit.__GT_t_cognitect$transit32301 = (function cognitect$transit$__GT_t_cognitect$transit32301(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta32303){
return (new cognitect.transit.t_cognitect$transit32301(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta32303));
});

}

return (new cognitect.transit.t_cognitect$transit32301(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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

//# sourceMappingURL=transit.js.map?rel=1510360378922
