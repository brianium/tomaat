// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43898){
var map__43902 = p__43898;
var map__43902__$1 = ((((!((map__43902 == null)))?((((map__43902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43902):map__43902);
var m = map__43902__$1;
var n = cljs.core.get.call(null,map__43902__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__43905_43931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43906_43932 = null;
var count__43907_43933 = (0);
var i__43908_43934 = (0);
while(true){
if((i__43908_43934 < count__43907_43933)){
var f_43935 = cljs.core._nth.call(null,chunk__43906_43932,i__43908_43934);
cljs.core.println.call(null,"  ",f_43935);

var G__43936 = seq__43905_43931;
var G__43937 = chunk__43906_43932;
var G__43938 = count__43907_43933;
var G__43939 = (i__43908_43934 + (1));
seq__43905_43931 = G__43936;
chunk__43906_43932 = G__43937;
count__43907_43933 = G__43938;
i__43908_43934 = G__43939;
continue;
} else {
var temp__5278__auto___43940 = cljs.core.seq.call(null,seq__43905_43931);
if(temp__5278__auto___43940){
var seq__43905_43945__$1 = temp__5278__auto___43940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43905_43945__$1)){
var c__31003__auto___43946 = cljs.core.chunk_first.call(null,seq__43905_43945__$1);
var G__43947 = cljs.core.chunk_rest.call(null,seq__43905_43945__$1);
var G__43948 = c__31003__auto___43946;
var G__43949 = cljs.core.count.call(null,c__31003__auto___43946);
var G__43950 = (0);
seq__43905_43931 = G__43947;
chunk__43906_43932 = G__43948;
count__43907_43933 = G__43949;
i__43908_43934 = G__43950;
continue;
} else {
var f_43951 = cljs.core.first.call(null,seq__43905_43945__$1);
cljs.core.println.call(null,"  ",f_43951);

var G__43952 = cljs.core.next.call(null,seq__43905_43945__$1);
var G__43953 = null;
var G__43954 = (0);
var G__43955 = (0);
seq__43905_43931 = G__43952;
chunk__43906_43932 = G__43953;
count__43907_43933 = G__43954;
i__43908_43934 = G__43955;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43956 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30072__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43956);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43956)))?cljs.core.second.call(null,arglists_43956):arglists_43956));
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
var seq__43909_43960 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43910_43961 = null;
var count__43911_43962 = (0);
var i__43912_43963 = (0);
while(true){
if((i__43912_43963 < count__43911_43962)){
var vec__43913_43964 = cljs.core._nth.call(null,chunk__43910_43961,i__43912_43963);
var name_43965 = cljs.core.nth.call(null,vec__43913_43964,(0),null);
var map__43916_43966 = cljs.core.nth.call(null,vec__43913_43964,(1),null);
var map__43916_43967__$1 = ((((!((map__43916_43966 == null)))?((((map__43916_43966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43916_43966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43916_43966):map__43916_43966);
var doc_43968 = cljs.core.get.call(null,map__43916_43967__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43969 = cljs.core.get.call(null,map__43916_43967__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43965);

cljs.core.println.call(null," ",arglists_43969);

if(cljs.core.truth_(doc_43968)){
cljs.core.println.call(null," ",doc_43968);
} else {
}

var G__43971 = seq__43909_43960;
var G__43972 = chunk__43910_43961;
var G__43973 = count__43911_43962;
var G__43974 = (i__43912_43963 + (1));
seq__43909_43960 = G__43971;
chunk__43910_43961 = G__43972;
count__43911_43962 = G__43973;
i__43912_43963 = G__43974;
continue;
} else {
var temp__5278__auto___43975 = cljs.core.seq.call(null,seq__43909_43960);
if(temp__5278__auto___43975){
var seq__43909_43976__$1 = temp__5278__auto___43975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43909_43976__$1)){
var c__31003__auto___43977 = cljs.core.chunk_first.call(null,seq__43909_43976__$1);
var G__43978 = cljs.core.chunk_rest.call(null,seq__43909_43976__$1);
var G__43979 = c__31003__auto___43977;
var G__43980 = cljs.core.count.call(null,c__31003__auto___43977);
var G__43981 = (0);
seq__43909_43960 = G__43978;
chunk__43910_43961 = G__43979;
count__43911_43962 = G__43980;
i__43912_43963 = G__43981;
continue;
} else {
var vec__43921_43982 = cljs.core.first.call(null,seq__43909_43976__$1);
var name_43983 = cljs.core.nth.call(null,vec__43921_43982,(0),null);
var map__43924_43984 = cljs.core.nth.call(null,vec__43921_43982,(1),null);
var map__43924_43985__$1 = ((((!((map__43924_43984 == null)))?((((map__43924_43984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43924_43984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43924_43984):map__43924_43984);
var doc_43986 = cljs.core.get.call(null,map__43924_43985__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43987 = cljs.core.get.call(null,map__43924_43985__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43983);

cljs.core.println.call(null," ",arglists_43987);

if(cljs.core.truth_(doc_43986)){
cljs.core.println.call(null," ",doc_43986);
} else {
}

var G__43988 = cljs.core.next.call(null,seq__43909_43976__$1);
var G__43989 = null;
var G__43990 = (0);
var G__43991 = (0);
seq__43909_43960 = G__43988;
chunk__43910_43961 = G__43989;
count__43911_43962 = G__43990;
i__43912_43963 = G__43991;
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

var seq__43926 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43927 = null;
var count__43928 = (0);
var i__43929 = (0);
while(true){
if((i__43929 < count__43928)){
var role = cljs.core._nth.call(null,chunk__43927,i__43929);
var temp__5278__auto___43992__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___43992__$1)){
var spec_43993 = temp__5278__auto___43992__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43993));
} else {
}

var G__43994 = seq__43926;
var G__43995 = chunk__43927;
var G__43996 = count__43928;
var G__43997 = (i__43929 + (1));
seq__43926 = G__43994;
chunk__43927 = G__43995;
count__43928 = G__43996;
i__43929 = G__43997;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__43926);
if(temp__5278__auto____$1){
var seq__43926__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43926__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__43926__$1);
var G__43998 = cljs.core.chunk_rest.call(null,seq__43926__$1);
var G__43999 = c__31003__auto__;
var G__44000 = cljs.core.count.call(null,c__31003__auto__);
var G__44001 = (0);
seq__43926 = G__43998;
chunk__43927 = G__43999;
count__43928 = G__44000;
i__43929 = G__44001;
continue;
} else {
var role = cljs.core.first.call(null,seq__43926__$1);
var temp__5278__auto___44002__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___44002__$2)){
var spec_44003 = temp__5278__auto___44002__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_44003));
} else {
}

var G__44004 = cljs.core.next.call(null,seq__43926__$1);
var G__44005 = null;
var G__44006 = (0);
var G__44007 = (0);
seq__43926 = G__44004;
chunk__43927 = G__44005;
count__43928 = G__44006;
i__43929 = G__44007;
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

//# sourceMappingURL=repl.js.map?rel=1510143308778
