// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37439){
var map__37440 = p__37439;
var map__37440__$1 = ((((!((map__37440 == null)))?((((map__37440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37440):map__37440);
var m = map__37440__$1;
var n = cljs.core.get.call(null,map__37440__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37440__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37442_37477 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37443_37478 = null;
var count__37444_37479 = (0);
var i__37445_37480 = (0);
while(true){
if((i__37445_37480 < count__37444_37479)){
var f_37483 = cljs.core._nth.call(null,chunk__37443_37478,i__37445_37480);
cljs.core.println.call(null,"  ",f_37483);

var G__37484 = seq__37442_37477;
var G__37485 = chunk__37443_37478;
var G__37486 = count__37444_37479;
var G__37487 = (i__37445_37480 + (1));
seq__37442_37477 = G__37484;
chunk__37443_37478 = G__37485;
count__37444_37479 = G__37486;
i__37445_37480 = G__37487;
continue;
} else {
var temp__5278__auto___37488 = cljs.core.seq.call(null,seq__37442_37477);
if(temp__5278__auto___37488){
var seq__37442_37489__$1 = temp__5278__auto___37488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37442_37489__$1)){
var c__31003__auto___37490 = cljs.core.chunk_first.call(null,seq__37442_37489__$1);
var G__37495 = cljs.core.chunk_rest.call(null,seq__37442_37489__$1);
var G__37496 = c__31003__auto___37490;
var G__37497 = cljs.core.count.call(null,c__31003__auto___37490);
var G__37498 = (0);
seq__37442_37477 = G__37495;
chunk__37443_37478 = G__37496;
count__37444_37479 = G__37497;
i__37445_37480 = G__37498;
continue;
} else {
var f_37499 = cljs.core.first.call(null,seq__37442_37489__$1);
cljs.core.println.call(null,"  ",f_37499);

var G__37500 = cljs.core.next.call(null,seq__37442_37489__$1);
var G__37501 = null;
var G__37502 = (0);
var G__37503 = (0);
seq__37442_37477 = G__37500;
chunk__37443_37478 = G__37501;
count__37444_37479 = G__37502;
i__37445_37480 = G__37503;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37504 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30072__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37504);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37504)))?cljs.core.second.call(null,arglists_37504):arglists_37504));
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
var seq__37449_37506 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37450_37507 = null;
var count__37451_37508 = (0);
var i__37452_37509 = (0);
while(true){
if((i__37452_37509 < count__37451_37508)){
var vec__37453_37510 = cljs.core._nth.call(null,chunk__37450_37507,i__37452_37509);
var name_37511 = cljs.core.nth.call(null,vec__37453_37510,(0),null);
var map__37456_37512 = cljs.core.nth.call(null,vec__37453_37510,(1),null);
var map__37456_37513__$1 = ((((!((map__37456_37512 == null)))?((((map__37456_37512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37456_37512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37456_37512):map__37456_37512);
var doc_37514 = cljs.core.get.call(null,map__37456_37513__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37515 = cljs.core.get.call(null,map__37456_37513__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37511);

cljs.core.println.call(null," ",arglists_37515);

if(cljs.core.truth_(doc_37514)){
cljs.core.println.call(null," ",doc_37514);
} else {
}

var G__37520 = seq__37449_37506;
var G__37521 = chunk__37450_37507;
var G__37522 = count__37451_37508;
var G__37523 = (i__37452_37509 + (1));
seq__37449_37506 = G__37520;
chunk__37450_37507 = G__37521;
count__37451_37508 = G__37522;
i__37452_37509 = G__37523;
continue;
} else {
var temp__5278__auto___37524 = cljs.core.seq.call(null,seq__37449_37506);
if(temp__5278__auto___37524){
var seq__37449_37525__$1 = temp__5278__auto___37524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37449_37525__$1)){
var c__31003__auto___37526 = cljs.core.chunk_first.call(null,seq__37449_37525__$1);
var G__37527 = cljs.core.chunk_rest.call(null,seq__37449_37525__$1);
var G__37528 = c__31003__auto___37526;
var G__37529 = cljs.core.count.call(null,c__31003__auto___37526);
var G__37530 = (0);
seq__37449_37506 = G__37527;
chunk__37450_37507 = G__37528;
count__37451_37508 = G__37529;
i__37452_37509 = G__37530;
continue;
} else {
var vec__37458_37531 = cljs.core.first.call(null,seq__37449_37525__$1);
var name_37532 = cljs.core.nth.call(null,vec__37458_37531,(0),null);
var map__37461_37533 = cljs.core.nth.call(null,vec__37458_37531,(1),null);
var map__37461_37534__$1 = ((((!((map__37461_37533 == null)))?((((map__37461_37533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37461_37533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37461_37533):map__37461_37533);
var doc_37535 = cljs.core.get.call(null,map__37461_37534__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37536 = cljs.core.get.call(null,map__37461_37534__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37532);

cljs.core.println.call(null," ",arglists_37536);

if(cljs.core.truth_(doc_37535)){
cljs.core.println.call(null," ",doc_37535);
} else {
}

var G__37537 = cljs.core.next.call(null,seq__37449_37525__$1);
var G__37538 = null;
var G__37539 = (0);
var G__37540 = (0);
seq__37449_37506 = G__37537;
chunk__37450_37507 = G__37538;
count__37451_37508 = G__37539;
i__37452_37509 = G__37540;
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

var seq__37466 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37467 = null;
var count__37468 = (0);
var i__37469 = (0);
while(true){
if((i__37469 < count__37468)){
var role = cljs.core._nth.call(null,chunk__37467,i__37469);
var temp__5278__auto___37541__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___37541__$1)){
var spec_37542 = temp__5278__auto___37541__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37542));
} else {
}

var G__37543 = seq__37466;
var G__37544 = chunk__37467;
var G__37545 = count__37468;
var G__37546 = (i__37469 + (1));
seq__37466 = G__37543;
chunk__37467 = G__37544;
count__37468 = G__37545;
i__37469 = G__37546;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__37466);
if(temp__5278__auto____$1){
var seq__37466__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37466__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__37466__$1);
var G__37547 = cljs.core.chunk_rest.call(null,seq__37466__$1);
var G__37548 = c__31003__auto__;
var G__37549 = cljs.core.count.call(null,c__31003__auto__);
var G__37550 = (0);
seq__37466 = G__37547;
chunk__37467 = G__37548;
count__37468 = G__37549;
i__37469 = G__37550;
continue;
} else {
var role = cljs.core.first.call(null,seq__37466__$1);
var temp__5278__auto___37551__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___37551__$2)){
var spec_37552 = temp__5278__auto___37551__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37552));
} else {
}

var G__37553 = cljs.core.next.call(null,seq__37466__$1);
var G__37554 = null;
var G__37555 = (0);
var G__37556 = (0);
seq__37466 = G__37553;
chunk__37467 = G__37554;
count__37468 = G__37555;
i__37469 = G__37556;
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

//# sourceMappingURL=repl.js.map?rel=1510229215710
