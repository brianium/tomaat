// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45134){
var map__45135 = p__45134;
var map__45135__$1 = ((((!((map__45135 == null)))?((((map__45135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45135):map__45135);
var m = map__45135__$1;
var n = cljs.core.get.call(null,map__45135__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__45135__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45141_45209 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45142_45210 = null;
var count__45143_45211 = (0);
var i__45144_45212 = (0);
while(true){
if((i__45144_45212 < count__45143_45211)){
var f_45217 = cljs.core._nth.call(null,chunk__45142_45210,i__45144_45212);
cljs.core.println.call(null,"  ",f_45217);

var G__45218 = seq__45141_45209;
var G__45219 = chunk__45142_45210;
var G__45220 = count__45143_45211;
var G__45221 = (i__45144_45212 + (1));
seq__45141_45209 = G__45218;
chunk__45142_45210 = G__45219;
count__45143_45211 = G__45220;
i__45144_45212 = G__45221;
continue;
} else {
var temp__5278__auto___45224 = cljs.core.seq.call(null,seq__45141_45209);
if(temp__5278__auto___45224){
var seq__45141_45225__$1 = temp__5278__auto___45224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45141_45225__$1)){
var c__31003__auto___45226 = cljs.core.chunk_first.call(null,seq__45141_45225__$1);
var G__45227 = cljs.core.chunk_rest.call(null,seq__45141_45225__$1);
var G__45228 = c__31003__auto___45226;
var G__45229 = cljs.core.count.call(null,c__31003__auto___45226);
var G__45230 = (0);
seq__45141_45209 = G__45227;
chunk__45142_45210 = G__45228;
count__45143_45211 = G__45229;
i__45144_45212 = G__45230;
continue;
} else {
var f_45233 = cljs.core.first.call(null,seq__45141_45225__$1);
cljs.core.println.call(null,"  ",f_45233);

var G__45238 = cljs.core.next.call(null,seq__45141_45225__$1);
var G__45239 = null;
var G__45240 = (0);
var G__45241 = (0);
seq__45141_45209 = G__45238;
chunk__45142_45210 = G__45239;
count__45143_45211 = G__45240;
i__45144_45212 = G__45241;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45243 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30072__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45243);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45243)))?cljs.core.second.call(null,arglists_45243):arglists_45243));
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
var seq__45158_45274 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45159_45275 = null;
var count__45160_45276 = (0);
var i__45161_45277 = (0);
while(true){
if((i__45161_45277 < count__45160_45276)){
var vec__45162_45290 = cljs.core._nth.call(null,chunk__45159_45275,i__45161_45277);
var name_45291 = cljs.core.nth.call(null,vec__45162_45290,(0),null);
var map__45165_45292 = cljs.core.nth.call(null,vec__45162_45290,(1),null);
var map__45165_45293__$1 = ((((!((map__45165_45292 == null)))?((((map__45165_45292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45165_45292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45165_45292):map__45165_45292);
var doc_45294 = cljs.core.get.call(null,map__45165_45293__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45295 = cljs.core.get.call(null,map__45165_45293__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45291);

cljs.core.println.call(null," ",arglists_45295);

if(cljs.core.truth_(doc_45294)){
cljs.core.println.call(null," ",doc_45294);
} else {
}

var G__45317 = seq__45158_45274;
var G__45318 = chunk__45159_45275;
var G__45319 = count__45160_45276;
var G__45320 = (i__45161_45277 + (1));
seq__45158_45274 = G__45317;
chunk__45159_45275 = G__45318;
count__45160_45276 = G__45319;
i__45161_45277 = G__45320;
continue;
} else {
var temp__5278__auto___45321 = cljs.core.seq.call(null,seq__45158_45274);
if(temp__5278__auto___45321){
var seq__45158_45322__$1 = temp__5278__auto___45321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45158_45322__$1)){
var c__31003__auto___45323 = cljs.core.chunk_first.call(null,seq__45158_45322__$1);
var G__45324 = cljs.core.chunk_rest.call(null,seq__45158_45322__$1);
var G__45325 = c__31003__auto___45323;
var G__45326 = cljs.core.count.call(null,c__31003__auto___45323);
var G__45327 = (0);
seq__45158_45274 = G__45324;
chunk__45159_45275 = G__45325;
count__45160_45276 = G__45326;
i__45161_45277 = G__45327;
continue;
} else {
var vec__45178_45328 = cljs.core.first.call(null,seq__45158_45322__$1);
var name_45329 = cljs.core.nth.call(null,vec__45178_45328,(0),null);
var map__45181_45330 = cljs.core.nth.call(null,vec__45178_45328,(1),null);
var map__45181_45331__$1 = ((((!((map__45181_45330 == null)))?((((map__45181_45330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45181_45330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45181_45330):map__45181_45330);
var doc_45332 = cljs.core.get.call(null,map__45181_45331__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45333 = cljs.core.get.call(null,map__45181_45331__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45329);

cljs.core.println.call(null," ",arglists_45333);

if(cljs.core.truth_(doc_45332)){
cljs.core.println.call(null," ",doc_45332);
} else {
}

var G__45334 = cljs.core.next.call(null,seq__45158_45322__$1);
var G__45335 = null;
var G__45336 = (0);
var G__45337 = (0);
seq__45158_45274 = G__45334;
chunk__45159_45275 = G__45335;
count__45160_45276 = G__45336;
i__45161_45277 = G__45337;
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

var seq__45188 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45189 = null;
var count__45190 = (0);
var i__45191 = (0);
while(true){
if((i__45191 < count__45190)){
var role = cljs.core._nth.call(null,chunk__45189,i__45191);
var temp__5278__auto___45338__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___45338__$1)){
var spec_45339 = temp__5278__auto___45338__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_45339));
} else {
}

var G__45340 = seq__45188;
var G__45341 = chunk__45189;
var G__45342 = count__45190;
var G__45343 = (i__45191 + (1));
seq__45188 = G__45340;
chunk__45189 = G__45341;
count__45190 = G__45342;
i__45191 = G__45343;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__45188);
if(temp__5278__auto____$1){
var seq__45188__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45188__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__45188__$1);
var G__45344 = cljs.core.chunk_rest.call(null,seq__45188__$1);
var G__45345 = c__31003__auto__;
var G__45346 = cljs.core.count.call(null,c__31003__auto__);
var G__45347 = (0);
seq__45188 = G__45344;
chunk__45189 = G__45345;
count__45190 = G__45346;
i__45191 = G__45347;
continue;
} else {
var role = cljs.core.first.call(null,seq__45188__$1);
var temp__5278__auto___45348__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___45348__$2)){
var spec_45349 = temp__5278__auto___45348__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_45349));
} else {
}

var G__45350 = cljs.core.next.call(null,seq__45188__$1);
var G__45351 = null;
var G__45352 = (0);
var G__45353 = (0);
seq__45188 = G__45350;
chunk__45189 = G__45351;
count__45190 = G__45352;
i__45191 = G__45353;
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

//# sourceMappingURL=repl.js.map?rel=1510360395323
