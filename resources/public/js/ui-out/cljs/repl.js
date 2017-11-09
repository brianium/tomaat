// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50185){
var map__50186 = p__50185;
var map__50186__$1 = ((((!((map__50186 == null)))?((((map__50186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50186):map__50186);
var m = map__50186__$1;
var n = cljs.core.get.call(null,map__50186__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__50186__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50188_50222 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50189_50223 = null;
var count__50190_50224 = (0);
var i__50191_50225 = (0);
while(true){
if((i__50191_50225 < count__50190_50224)){
var f_50226 = cljs.core._nth.call(null,chunk__50189_50223,i__50191_50225);
cljs.core.println.call(null,"  ",f_50226);

var G__50227 = seq__50188_50222;
var G__50228 = chunk__50189_50223;
var G__50229 = count__50190_50224;
var G__50230 = (i__50191_50225 + (1));
seq__50188_50222 = G__50227;
chunk__50189_50223 = G__50228;
count__50190_50224 = G__50229;
i__50191_50225 = G__50230;
continue;
} else {
var temp__5278__auto___50231 = cljs.core.seq.call(null,seq__50188_50222);
if(temp__5278__auto___50231){
var seq__50188_50232__$1 = temp__5278__auto___50231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50188_50232__$1)){
var c__31003__auto___50233 = cljs.core.chunk_first.call(null,seq__50188_50232__$1);
var G__50234 = cljs.core.chunk_rest.call(null,seq__50188_50232__$1);
var G__50235 = c__31003__auto___50233;
var G__50236 = cljs.core.count.call(null,c__31003__auto___50233);
var G__50237 = (0);
seq__50188_50222 = G__50234;
chunk__50189_50223 = G__50235;
count__50190_50224 = G__50236;
i__50191_50225 = G__50237;
continue;
} else {
var f_50238 = cljs.core.first.call(null,seq__50188_50232__$1);
cljs.core.println.call(null,"  ",f_50238);

var G__50239 = cljs.core.next.call(null,seq__50188_50232__$1);
var G__50240 = null;
var G__50241 = (0);
var G__50242 = (0);
seq__50188_50222 = G__50239;
chunk__50189_50223 = G__50240;
count__50190_50224 = G__50241;
i__50191_50225 = G__50242;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50243 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30072__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_50243);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_50243)))?cljs.core.second.call(null,arglists_50243):arglists_50243));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50192_50247 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50193_50248 = null;
var count__50194_50249 = (0);
var i__50195_50250 = (0);
while(true){
if((i__50195_50250 < count__50194_50249)){
var vec__50196_50251 = cljs.core._nth.call(null,chunk__50193_50248,i__50195_50250);
var name_50252 = cljs.core.nth.call(null,vec__50196_50251,(0),null);
var map__50199_50253 = cljs.core.nth.call(null,vec__50196_50251,(1),null);
var map__50199_50254__$1 = ((((!((map__50199_50253 == null)))?((((map__50199_50253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50199_50253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50199_50253):map__50199_50253);
var doc_50255 = cljs.core.get.call(null,map__50199_50254__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50256 = cljs.core.get.call(null,map__50199_50254__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50252);

cljs.core.println.call(null," ",arglists_50256);

if(cljs.core.truth_(doc_50255)){
cljs.core.println.call(null," ",doc_50255);
} else {
}

var G__50258 = seq__50192_50247;
var G__50259 = chunk__50193_50248;
var G__50260 = count__50194_50249;
var G__50261 = (i__50195_50250 + (1));
seq__50192_50247 = G__50258;
chunk__50193_50248 = G__50259;
count__50194_50249 = G__50260;
i__50195_50250 = G__50261;
continue;
} else {
var temp__5278__auto___50262 = cljs.core.seq.call(null,seq__50192_50247);
if(temp__5278__auto___50262){
var seq__50192_50263__$1 = temp__5278__auto___50262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50192_50263__$1)){
var c__31003__auto___50264 = cljs.core.chunk_first.call(null,seq__50192_50263__$1);
var G__50265 = cljs.core.chunk_rest.call(null,seq__50192_50263__$1);
var G__50266 = c__31003__auto___50264;
var G__50267 = cljs.core.count.call(null,c__31003__auto___50264);
var G__50268 = (0);
seq__50192_50247 = G__50265;
chunk__50193_50248 = G__50266;
count__50194_50249 = G__50267;
i__50195_50250 = G__50268;
continue;
} else {
var vec__50203_50269 = cljs.core.first.call(null,seq__50192_50263__$1);
var name_50270 = cljs.core.nth.call(null,vec__50203_50269,(0),null);
var map__50206_50271 = cljs.core.nth.call(null,vec__50203_50269,(1),null);
var map__50206_50272__$1 = ((((!((map__50206_50271 == null)))?((((map__50206_50271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50206_50271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50206_50271):map__50206_50271);
var doc_50273 = cljs.core.get.call(null,map__50206_50272__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50274 = cljs.core.get.call(null,map__50206_50272__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50270);

cljs.core.println.call(null," ",arglists_50274);

if(cljs.core.truth_(doc_50273)){
cljs.core.println.call(null," ",doc_50273);
} else {
}

var G__50279 = cljs.core.next.call(null,seq__50192_50263__$1);
var G__50280 = null;
var G__50281 = (0);
var G__50282 = (0);
seq__50192_50247 = G__50279;
chunk__50193_50248 = G__50280;
count__50194_50249 = G__50281;
i__50195_50250 = G__50282;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__50208 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50209 = null;
var count__50210 = (0);
var i__50211 = (0);
while(true){
if((i__50211 < count__50210)){
var role = cljs.core._nth.call(null,chunk__50209,i__50211);
var temp__5278__auto___50283__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___50283__$1)){
var spec_50284 = temp__5278__auto___50283__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50284));
} else {
}

var G__50285 = seq__50208;
var G__50286 = chunk__50209;
var G__50287 = count__50210;
var G__50288 = (i__50211 + (1));
seq__50208 = G__50285;
chunk__50209 = G__50286;
count__50210 = G__50287;
i__50211 = G__50288;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__50208);
if(temp__5278__auto____$1){
var seq__50208__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50208__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__50208__$1);
var G__50291 = cljs.core.chunk_rest.call(null,seq__50208__$1);
var G__50292 = c__31003__auto__;
var G__50293 = cljs.core.count.call(null,c__31003__auto__);
var G__50294 = (0);
seq__50208 = G__50291;
chunk__50209 = G__50292;
count__50210 = G__50293;
i__50211 = G__50294;
continue;
} else {
var role = cljs.core.first.call(null,seq__50208__$1);
var temp__5278__auto___50296__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___50296__$2)){
var spec_50297 = temp__5278__auto___50296__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50297));
} else {
}

var G__50298 = cljs.core.next.call(null,seq__50208__$1);
var G__50299 = null;
var G__50300 = (0);
var G__50301 = (0);
seq__50208 = G__50298;
chunk__50209 = G__50299;
count__50210 = G__50300;
i__50211 = G__50301;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1510229232741
