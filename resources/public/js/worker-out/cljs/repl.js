// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37322){
var map__37323 = p__37322;
var map__37323__$1 = ((((!((map__37323 == null)))?((((map__37323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37323):map__37323);
var m = map__37323__$1;
var n = cljs.core.get.call(null,map__37323__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37323__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37327_37370 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37328_37371 = null;
var count__37329_37372 = (0);
var i__37330_37373 = (0);
while(true){
if((i__37330_37373 < count__37329_37372)){
var f_37374 = cljs.core._nth.call(null,chunk__37328_37371,i__37330_37373);
cljs.core.println.call(null,"  ",f_37374);

var G__37375 = seq__37327_37370;
var G__37376 = chunk__37328_37371;
var G__37377 = count__37329_37372;
var G__37378 = (i__37330_37373 + (1));
seq__37327_37370 = G__37375;
chunk__37328_37371 = G__37376;
count__37329_37372 = G__37377;
i__37330_37373 = G__37378;
continue;
} else {
var temp__5278__auto___37379 = cljs.core.seq.call(null,seq__37327_37370);
if(temp__5278__auto___37379){
var seq__37327_37380__$1 = temp__5278__auto___37379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37327_37380__$1)){
var c__31003__auto___37381 = cljs.core.chunk_first.call(null,seq__37327_37380__$1);
var G__37382 = cljs.core.chunk_rest.call(null,seq__37327_37380__$1);
var G__37383 = c__31003__auto___37381;
var G__37384 = cljs.core.count.call(null,c__31003__auto___37381);
var G__37385 = (0);
seq__37327_37370 = G__37382;
chunk__37328_37371 = G__37383;
count__37329_37372 = G__37384;
i__37330_37373 = G__37385;
continue;
} else {
var f_37386 = cljs.core.first.call(null,seq__37327_37380__$1);
cljs.core.println.call(null,"  ",f_37386);

var G__37387 = cljs.core.next.call(null,seq__37327_37380__$1);
var G__37388 = null;
var G__37389 = (0);
var G__37390 = (0);
seq__37327_37370 = G__37387;
chunk__37328_37371 = G__37388;
count__37329_37372 = G__37389;
i__37330_37373 = G__37390;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37391 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30072__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37391);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37391)))?cljs.core.second.call(null,arglists_37391):arglists_37391));
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
var seq__37335_37395 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37336_37396 = null;
var count__37337_37397 = (0);
var i__37338_37398 = (0);
while(true){
if((i__37338_37398 < count__37337_37397)){
var vec__37339_37400 = cljs.core._nth.call(null,chunk__37336_37396,i__37338_37398);
var name_37401 = cljs.core.nth.call(null,vec__37339_37400,(0),null);
var map__37342_37402 = cljs.core.nth.call(null,vec__37339_37400,(1),null);
var map__37342_37403__$1 = ((((!((map__37342_37402 == null)))?((((map__37342_37402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37342_37402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37342_37402):map__37342_37402);
var doc_37404 = cljs.core.get.call(null,map__37342_37403__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37405 = cljs.core.get.call(null,map__37342_37403__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37401);

cljs.core.println.call(null," ",arglists_37405);

if(cljs.core.truth_(doc_37404)){
cljs.core.println.call(null," ",doc_37404);
} else {
}

var G__37407 = seq__37335_37395;
var G__37408 = chunk__37336_37396;
var G__37409 = count__37337_37397;
var G__37410 = (i__37338_37398 + (1));
seq__37335_37395 = G__37407;
chunk__37336_37396 = G__37408;
count__37337_37397 = G__37409;
i__37338_37398 = G__37410;
continue;
} else {
var temp__5278__auto___37414 = cljs.core.seq.call(null,seq__37335_37395);
if(temp__5278__auto___37414){
var seq__37335_37415__$1 = temp__5278__auto___37414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37335_37415__$1)){
var c__31003__auto___37416 = cljs.core.chunk_first.call(null,seq__37335_37415__$1);
var G__37417 = cljs.core.chunk_rest.call(null,seq__37335_37415__$1);
var G__37418 = c__31003__auto___37416;
var G__37419 = cljs.core.count.call(null,c__31003__auto___37416);
var G__37420 = (0);
seq__37335_37395 = G__37417;
chunk__37336_37396 = G__37418;
count__37337_37397 = G__37419;
i__37338_37398 = G__37420;
continue;
} else {
var vec__37346_37421 = cljs.core.first.call(null,seq__37335_37415__$1);
var name_37422 = cljs.core.nth.call(null,vec__37346_37421,(0),null);
var map__37349_37423 = cljs.core.nth.call(null,vec__37346_37421,(1),null);
var map__37349_37424__$1 = ((((!((map__37349_37423 == null)))?((((map__37349_37423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37349_37423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37349_37423):map__37349_37423);
var doc_37425 = cljs.core.get.call(null,map__37349_37424__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37426 = cljs.core.get.call(null,map__37349_37424__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37422);

cljs.core.println.call(null," ",arglists_37426);

if(cljs.core.truth_(doc_37425)){
cljs.core.println.call(null," ",doc_37425);
} else {
}

var G__37430 = cljs.core.next.call(null,seq__37335_37415__$1);
var G__37431 = null;
var G__37432 = (0);
var G__37433 = (0);
seq__37335_37395 = G__37430;
chunk__37336_37396 = G__37431;
count__37337_37397 = G__37432;
i__37338_37398 = G__37433;
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

var seq__37355 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37356 = null;
var count__37357 = (0);
var i__37358 = (0);
while(true){
if((i__37358 < count__37357)){
var role = cljs.core._nth.call(null,chunk__37356,i__37358);
var temp__5278__auto___37438__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___37438__$1)){
var spec_37439 = temp__5278__auto___37438__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37439));
} else {
}

var G__37440 = seq__37355;
var G__37441 = chunk__37356;
var G__37442 = count__37357;
var G__37443 = (i__37358 + (1));
seq__37355 = G__37440;
chunk__37356 = G__37441;
count__37357 = G__37442;
i__37358 = G__37443;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__37355);
if(temp__5278__auto____$1){
var seq__37355__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37355__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__37355__$1);
var G__37446 = cljs.core.chunk_rest.call(null,seq__37355__$1);
var G__37447 = c__31003__auto__;
var G__37448 = cljs.core.count.call(null,c__31003__auto__);
var G__37449 = (0);
seq__37355 = G__37446;
chunk__37356 = G__37447;
count__37357 = G__37448;
i__37358 = G__37449;
continue;
} else {
var role = cljs.core.first.call(null,seq__37355__$1);
var temp__5278__auto___37451__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___37451__$2)){
var spec_37452 = temp__5278__auto___37451__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37452));
} else {
}

var G__37453 = cljs.core.next.call(null,seq__37355__$1);
var G__37454 = null;
var G__37455 = (0);
var G__37456 = (0);
seq__37355 = G__37453;
chunk__37356 = G__37454;
count__37357 = G__37455;
i__37358 = G__37456;
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

//# sourceMappingURL=repl.js.map?rel=1510143299490
