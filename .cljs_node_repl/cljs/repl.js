// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36077){
var map__36078 = p__36077;
var map__36078__$1 = ((((!((map__36078 == null)))?((((map__36078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36078):map__36078);
var m = map__36078__$1;
var n = cljs.core.get.call(null,map__36078__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36078__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36080_36102 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36081_36103 = null;
var count__36082_36104 = (0);
var i__36083_36105 = (0);
while(true){
if((i__36083_36105 < count__36082_36104)){
var f_36106 = cljs.core._nth.call(null,chunk__36081_36103,i__36083_36105);
cljs.core.println.call(null,"  ",f_36106);

var G__36107 = seq__36080_36102;
var G__36108 = chunk__36081_36103;
var G__36109 = count__36082_36104;
var G__36110 = (i__36083_36105 + (1));
seq__36080_36102 = G__36107;
chunk__36081_36103 = G__36108;
count__36082_36104 = G__36109;
i__36083_36105 = G__36110;
continue;
} else {
var temp__5278__auto___36111 = cljs.core.seq.call(null,seq__36080_36102);
if(temp__5278__auto___36111){
var seq__36080_36112__$1 = temp__5278__auto___36111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36080_36112__$1)){
var c__33104__auto___36113 = cljs.core.chunk_first.call(null,seq__36080_36112__$1);
var G__36114 = cljs.core.chunk_rest.call(null,seq__36080_36112__$1);
var G__36115 = c__33104__auto___36113;
var G__36116 = cljs.core.count.call(null,c__33104__auto___36113);
var G__36117 = (0);
seq__36080_36102 = G__36114;
chunk__36081_36103 = G__36115;
count__36082_36104 = G__36116;
i__36083_36105 = G__36117;
continue;
} else {
var f_36118 = cljs.core.first.call(null,seq__36080_36112__$1);
cljs.core.println.call(null,"  ",f_36118);

var G__36119 = cljs.core.next.call(null,seq__36080_36112__$1);
var G__36120 = null;
var G__36121 = (0);
var G__36122 = (0);
seq__36080_36102 = G__36119;
chunk__36081_36103 = G__36120;
count__36082_36104 = G__36121;
i__36083_36105 = G__36122;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36123 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__32173__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__32173__auto__)){
return or__32173__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36123);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36123)))?cljs.core.second.call(null,arglists_36123):arglists_36123));
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
var seq__36084_36124 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36085_36125 = null;
var count__36086_36126 = (0);
var i__36087_36127 = (0);
while(true){
if((i__36087_36127 < count__36086_36126)){
var vec__36088_36128 = cljs.core._nth.call(null,chunk__36085_36125,i__36087_36127);
var name_36129 = cljs.core.nth.call(null,vec__36088_36128,(0),null);
var map__36091_36130 = cljs.core.nth.call(null,vec__36088_36128,(1),null);
var map__36091_36131__$1 = ((((!((map__36091_36130 == null)))?((((map__36091_36130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36091_36130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36091_36130):map__36091_36130);
var doc_36132 = cljs.core.get.call(null,map__36091_36131__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36133 = cljs.core.get.call(null,map__36091_36131__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36129);

cljs.core.println.call(null," ",arglists_36133);

if(cljs.core.truth_(doc_36132)){
cljs.core.println.call(null," ",doc_36132);
} else {
}

var G__36134 = seq__36084_36124;
var G__36135 = chunk__36085_36125;
var G__36136 = count__36086_36126;
var G__36137 = (i__36087_36127 + (1));
seq__36084_36124 = G__36134;
chunk__36085_36125 = G__36135;
count__36086_36126 = G__36136;
i__36087_36127 = G__36137;
continue;
} else {
var temp__5278__auto___36138 = cljs.core.seq.call(null,seq__36084_36124);
if(temp__5278__auto___36138){
var seq__36084_36139__$1 = temp__5278__auto___36138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36084_36139__$1)){
var c__33104__auto___36140 = cljs.core.chunk_first.call(null,seq__36084_36139__$1);
var G__36141 = cljs.core.chunk_rest.call(null,seq__36084_36139__$1);
var G__36142 = c__33104__auto___36140;
var G__36143 = cljs.core.count.call(null,c__33104__auto___36140);
var G__36144 = (0);
seq__36084_36124 = G__36141;
chunk__36085_36125 = G__36142;
count__36086_36126 = G__36143;
i__36087_36127 = G__36144;
continue;
} else {
var vec__36093_36145 = cljs.core.first.call(null,seq__36084_36139__$1);
var name_36146 = cljs.core.nth.call(null,vec__36093_36145,(0),null);
var map__36096_36147 = cljs.core.nth.call(null,vec__36093_36145,(1),null);
var map__36096_36148__$1 = ((((!((map__36096_36147 == null)))?((((map__36096_36147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36096_36147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36096_36147):map__36096_36147);
var doc_36149 = cljs.core.get.call(null,map__36096_36148__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36150 = cljs.core.get.call(null,map__36096_36148__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36146);

cljs.core.println.call(null," ",arglists_36150);

if(cljs.core.truth_(doc_36149)){
cljs.core.println.call(null," ",doc_36149);
} else {
}

var G__36151 = cljs.core.next.call(null,seq__36084_36139__$1);
var G__36152 = null;
var G__36153 = (0);
var G__36154 = (0);
seq__36084_36124 = G__36151;
chunk__36085_36125 = G__36152;
count__36086_36126 = G__36153;
i__36087_36127 = G__36154;
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

var seq__36098 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36099 = null;
var count__36100 = (0);
var i__36101 = (0);
while(true){
if((i__36101 < count__36100)){
var role = cljs.core._nth.call(null,chunk__36099,i__36101);
var temp__5278__auto___36155__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___36155__$1)){
var spec_36156 = temp__5278__auto___36155__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36156));
} else {
}

var G__36157 = seq__36098;
var G__36158 = chunk__36099;
var G__36159 = count__36100;
var G__36160 = (i__36101 + (1));
seq__36098 = G__36157;
chunk__36099 = G__36158;
count__36100 = G__36159;
i__36101 = G__36160;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__36098);
if(temp__5278__auto____$1){
var seq__36098__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36098__$1)){
var c__33104__auto__ = cljs.core.chunk_first.call(null,seq__36098__$1);
var G__36161 = cljs.core.chunk_rest.call(null,seq__36098__$1);
var G__36162 = c__33104__auto__;
var G__36163 = cljs.core.count.call(null,c__33104__auto__);
var G__36164 = (0);
seq__36098 = G__36161;
chunk__36099 = G__36162;
count__36100 = G__36163;
i__36101 = G__36164;
continue;
} else {
var role = cljs.core.first.call(null,seq__36098__$1);
var temp__5278__auto___36165__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___36165__$2)){
var spec_36166 = temp__5278__auto___36165__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36166));
} else {
}

var G__36167 = cljs.core.next.call(null,seq__36098__$1);
var G__36168 = null;
var G__36169 = (0);
var G__36170 = (0);
seq__36098 = G__36167;
chunk__36099 = G__36168;
count__36100 = G__36169;
i__36101 = G__36170;
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

//# sourceMappingURL=repl.js.map
