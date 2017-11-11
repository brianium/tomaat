// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52054){
var map__52055 = p__52054;
var map__52055__$1 = ((((!((map__52055 == null)))?((((map__52055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52055):map__52055);
var m = map__52055__$1;
var n = cljs.core.get.call(null,map__52055__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__52055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__52057_52079 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52058_52080 = null;
var count__52059_52081 = (0);
var i__52060_52082 = (0);
while(true){
if((i__52060_52082 < count__52059_52081)){
var f_52083 = cljs.core._nth.call(null,chunk__52058_52080,i__52060_52082);
cljs.core.println.call(null,"  ",f_52083);

var G__52084 = seq__52057_52079;
var G__52085 = chunk__52058_52080;
var G__52086 = count__52059_52081;
var G__52087 = (i__52060_52082 + (1));
seq__52057_52079 = G__52084;
chunk__52058_52080 = G__52085;
count__52059_52081 = G__52086;
i__52060_52082 = G__52087;
continue;
} else {
var temp__5278__auto___52088 = cljs.core.seq.call(null,seq__52057_52079);
if(temp__5278__auto___52088){
var seq__52057_52089__$1 = temp__5278__auto___52088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52057_52089__$1)){
var c__31003__auto___52090 = cljs.core.chunk_first.call(null,seq__52057_52089__$1);
var G__52091 = cljs.core.chunk_rest.call(null,seq__52057_52089__$1);
var G__52092 = c__31003__auto___52090;
var G__52093 = cljs.core.count.call(null,c__31003__auto___52090);
var G__52094 = (0);
seq__52057_52079 = G__52091;
chunk__52058_52080 = G__52092;
count__52059_52081 = G__52093;
i__52060_52082 = G__52094;
continue;
} else {
var f_52095 = cljs.core.first.call(null,seq__52057_52089__$1);
cljs.core.println.call(null,"  ",f_52095);

var G__52096 = cljs.core.next.call(null,seq__52057_52089__$1);
var G__52097 = null;
var G__52098 = (0);
var G__52099 = (0);
seq__52057_52079 = G__52096;
chunk__52058_52080 = G__52097;
count__52059_52081 = G__52098;
i__52060_52082 = G__52099;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52100 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30072__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_52100);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_52100)))?cljs.core.second.call(null,arglists_52100):arglists_52100));
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
var seq__52061_52101 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52062_52102 = null;
var count__52063_52103 = (0);
var i__52064_52104 = (0);
while(true){
if((i__52064_52104 < count__52063_52103)){
var vec__52065_52105 = cljs.core._nth.call(null,chunk__52062_52102,i__52064_52104);
var name_52106 = cljs.core.nth.call(null,vec__52065_52105,(0),null);
var map__52068_52107 = cljs.core.nth.call(null,vec__52065_52105,(1),null);
var map__52068_52108__$1 = ((((!((map__52068_52107 == null)))?((((map__52068_52107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52068_52107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52068_52107):map__52068_52107);
var doc_52109 = cljs.core.get.call(null,map__52068_52108__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52110 = cljs.core.get.call(null,map__52068_52108__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52106);

cljs.core.println.call(null," ",arglists_52110);

if(cljs.core.truth_(doc_52109)){
cljs.core.println.call(null," ",doc_52109);
} else {
}

var G__52111 = seq__52061_52101;
var G__52112 = chunk__52062_52102;
var G__52113 = count__52063_52103;
var G__52114 = (i__52064_52104 + (1));
seq__52061_52101 = G__52111;
chunk__52062_52102 = G__52112;
count__52063_52103 = G__52113;
i__52064_52104 = G__52114;
continue;
} else {
var temp__5278__auto___52115 = cljs.core.seq.call(null,seq__52061_52101);
if(temp__5278__auto___52115){
var seq__52061_52116__$1 = temp__5278__auto___52115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52061_52116__$1)){
var c__31003__auto___52117 = cljs.core.chunk_first.call(null,seq__52061_52116__$1);
var G__52118 = cljs.core.chunk_rest.call(null,seq__52061_52116__$1);
var G__52119 = c__31003__auto___52117;
var G__52120 = cljs.core.count.call(null,c__31003__auto___52117);
var G__52121 = (0);
seq__52061_52101 = G__52118;
chunk__52062_52102 = G__52119;
count__52063_52103 = G__52120;
i__52064_52104 = G__52121;
continue;
} else {
var vec__52070_52122 = cljs.core.first.call(null,seq__52061_52116__$1);
var name_52123 = cljs.core.nth.call(null,vec__52070_52122,(0),null);
var map__52073_52124 = cljs.core.nth.call(null,vec__52070_52122,(1),null);
var map__52073_52125__$1 = ((((!((map__52073_52124 == null)))?((((map__52073_52124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52073_52124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52073_52124):map__52073_52124);
var doc_52126 = cljs.core.get.call(null,map__52073_52125__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52127 = cljs.core.get.call(null,map__52073_52125__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52123);

cljs.core.println.call(null," ",arglists_52127);

if(cljs.core.truth_(doc_52126)){
cljs.core.println.call(null," ",doc_52126);
} else {
}

var G__52128 = cljs.core.next.call(null,seq__52061_52116__$1);
var G__52129 = null;
var G__52130 = (0);
var G__52131 = (0);
seq__52061_52101 = G__52128;
chunk__52062_52102 = G__52129;
count__52063_52103 = G__52130;
i__52064_52104 = G__52131;
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

var seq__52075 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52076 = null;
var count__52077 = (0);
var i__52078 = (0);
while(true){
if((i__52078 < count__52077)){
var role = cljs.core._nth.call(null,chunk__52076,i__52078);
var temp__5278__auto___52132__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___52132__$1)){
var spec_52133 = temp__5278__auto___52132__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_52133));
} else {
}

var G__52134 = seq__52075;
var G__52135 = chunk__52076;
var G__52136 = count__52077;
var G__52137 = (i__52078 + (1));
seq__52075 = G__52134;
chunk__52076 = G__52135;
count__52077 = G__52136;
i__52078 = G__52137;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__52075);
if(temp__5278__auto____$1){
var seq__52075__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52075__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__52075__$1);
var G__52138 = cljs.core.chunk_rest.call(null,seq__52075__$1);
var G__52139 = c__31003__auto__;
var G__52140 = cljs.core.count.call(null,c__31003__auto__);
var G__52141 = (0);
seq__52075 = G__52138;
chunk__52076 = G__52139;
count__52077 = G__52140;
i__52078 = G__52141;
continue;
} else {
var role = cljs.core.first.call(null,seq__52075__$1);
var temp__5278__auto___52142__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___52142__$2)){
var spec_52143 = temp__5278__auto___52142__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_52143));
} else {
}

var G__52144 = cljs.core.next.call(null,seq__52075__$1);
var G__52145 = null;
var G__52146 = (0);
var G__52147 = (0);
seq__52075 = G__52144;
chunk__52076 = G__52145;
count__52077 = G__52146;
i__52078 = G__52147;
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

//# sourceMappingURL=repl.js.map?rel=1510360406980
