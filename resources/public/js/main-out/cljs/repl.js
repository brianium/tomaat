// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38121){
var map__38122 = p__38121;
var map__38122__$1 = ((((!((map__38122 == null)))?((((map__38122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38122):map__38122);
var m = map__38122__$1;
var n = cljs.core.get.call(null,map__38122__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38122__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38125_38163 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38126_38164 = null;
var count__38127_38165 = (0);
var i__38128_38166 = (0);
while(true){
if((i__38128_38166 < count__38127_38165)){
var f_38167 = cljs.core._nth.call(null,chunk__38126_38164,i__38128_38166);
cljs.core.println.call(null,"  ",f_38167);

var G__38168 = seq__38125_38163;
var G__38169 = chunk__38126_38164;
var G__38170 = count__38127_38165;
var G__38171 = (i__38128_38166 + (1));
seq__38125_38163 = G__38168;
chunk__38126_38164 = G__38169;
count__38127_38165 = G__38170;
i__38128_38166 = G__38171;
continue;
} else {
var temp__5278__auto___38172 = cljs.core.seq.call(null,seq__38125_38163);
if(temp__5278__auto___38172){
var seq__38125_38173__$1 = temp__5278__auto___38172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38125_38173__$1)){
var c__31003__auto___38174 = cljs.core.chunk_first.call(null,seq__38125_38173__$1);
var G__38175 = cljs.core.chunk_rest.call(null,seq__38125_38173__$1);
var G__38176 = c__31003__auto___38174;
var G__38177 = cljs.core.count.call(null,c__31003__auto___38174);
var G__38178 = (0);
seq__38125_38163 = G__38175;
chunk__38126_38164 = G__38176;
count__38127_38165 = G__38177;
i__38128_38166 = G__38178;
continue;
} else {
var f_38179 = cljs.core.first.call(null,seq__38125_38173__$1);
cljs.core.println.call(null,"  ",f_38179);

var G__38180 = cljs.core.next.call(null,seq__38125_38173__$1);
var G__38181 = null;
var G__38182 = (0);
var G__38183 = (0);
seq__38125_38163 = G__38180;
chunk__38126_38164 = G__38181;
count__38127_38165 = G__38182;
i__38128_38166 = G__38183;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38186 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30072__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38186);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38186)))?cljs.core.second.call(null,arglists_38186):arglists_38186));
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
var seq__38133_38187 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38134_38188 = null;
var count__38135_38189 = (0);
var i__38136_38190 = (0);
while(true){
if((i__38136_38190 < count__38135_38189)){
var vec__38139_38191 = cljs.core._nth.call(null,chunk__38134_38188,i__38136_38190);
var name_38192 = cljs.core.nth.call(null,vec__38139_38191,(0),null);
var map__38142_38193 = cljs.core.nth.call(null,vec__38139_38191,(1),null);
var map__38142_38194__$1 = ((((!((map__38142_38193 == null)))?((((map__38142_38193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38142_38193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38142_38193):map__38142_38193);
var doc_38195 = cljs.core.get.call(null,map__38142_38194__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38196 = cljs.core.get.call(null,map__38142_38194__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38192);

cljs.core.println.call(null," ",arglists_38196);

if(cljs.core.truth_(doc_38195)){
cljs.core.println.call(null," ",doc_38195);
} else {
}

var G__38197 = seq__38133_38187;
var G__38198 = chunk__38134_38188;
var G__38199 = count__38135_38189;
var G__38200 = (i__38136_38190 + (1));
seq__38133_38187 = G__38197;
chunk__38134_38188 = G__38198;
count__38135_38189 = G__38199;
i__38136_38190 = G__38200;
continue;
} else {
var temp__5278__auto___38201 = cljs.core.seq.call(null,seq__38133_38187);
if(temp__5278__auto___38201){
var seq__38133_38202__$1 = temp__5278__auto___38201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38133_38202__$1)){
var c__31003__auto___38203 = cljs.core.chunk_first.call(null,seq__38133_38202__$1);
var G__38204 = cljs.core.chunk_rest.call(null,seq__38133_38202__$1);
var G__38205 = c__31003__auto___38203;
var G__38206 = cljs.core.count.call(null,c__31003__auto___38203);
var G__38207 = (0);
seq__38133_38187 = G__38204;
chunk__38134_38188 = G__38205;
count__38135_38189 = G__38206;
i__38136_38190 = G__38207;
continue;
} else {
var vec__38147_38208 = cljs.core.first.call(null,seq__38133_38202__$1);
var name_38209 = cljs.core.nth.call(null,vec__38147_38208,(0),null);
var map__38150_38210 = cljs.core.nth.call(null,vec__38147_38208,(1),null);
var map__38150_38211__$1 = ((((!((map__38150_38210 == null)))?((((map__38150_38210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38150_38210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38150_38210):map__38150_38210);
var doc_38212 = cljs.core.get.call(null,map__38150_38211__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38213 = cljs.core.get.call(null,map__38150_38211__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38209);

cljs.core.println.call(null," ",arglists_38213);

if(cljs.core.truth_(doc_38212)){
cljs.core.println.call(null," ",doc_38212);
} else {
}

var G__38214 = cljs.core.next.call(null,seq__38133_38202__$1);
var G__38215 = null;
var G__38216 = (0);
var G__38217 = (0);
seq__38133_38187 = G__38214;
chunk__38134_38188 = G__38215;
count__38135_38189 = G__38216;
i__38136_38190 = G__38217;
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

var seq__38158 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38159 = null;
var count__38160 = (0);
var i__38161 = (0);
while(true){
if((i__38161 < count__38160)){
var role = cljs.core._nth.call(null,chunk__38159,i__38161);
var temp__5278__auto___38221__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38221__$1)){
var spec_38222 = temp__5278__auto___38221__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38222));
} else {
}

var G__38223 = seq__38158;
var G__38224 = chunk__38159;
var G__38225 = count__38160;
var G__38226 = (i__38161 + (1));
seq__38158 = G__38223;
chunk__38159 = G__38224;
count__38160 = G__38225;
i__38161 = G__38226;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__38158);
if(temp__5278__auto____$1){
var seq__38158__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38158__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__38158__$1);
var G__38227 = cljs.core.chunk_rest.call(null,seq__38158__$1);
var G__38228 = c__31003__auto__;
var G__38229 = cljs.core.count.call(null,c__31003__auto__);
var G__38230 = (0);
seq__38158 = G__38227;
chunk__38159 = G__38228;
count__38160 = G__38229;
i__38161 = G__38230;
continue;
} else {
var role = cljs.core.first.call(null,seq__38158__$1);
var temp__5278__auto___38231__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38231__$2)){
var spec_38232 = temp__5278__auto___38231__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38232));
} else {
}

var G__38233 = cljs.core.next.call(null,seq__38158__$1);
var G__38234 = null;
var G__38235 = (0);
var G__38236 = (0);
seq__38158 = G__38233;
chunk__38159 = G__38234;
count__38160 = G__38235;
i__38161 = G__38236;
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

//# sourceMappingURL=repl.js.map?rel=1510360382388
