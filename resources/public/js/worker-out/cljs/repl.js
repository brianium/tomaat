// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43837){
var map__43838 = p__43837;
var map__43838__$1 = ((((!((map__43838 == null)))?((((map__43838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43838):map__43838);
var m = map__43838__$1;
var n = cljs.core.get.call(null,map__43838__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43838__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__43840_43862 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43841_43863 = null;
var count__43842_43864 = (0);
var i__43843_43865 = (0);
while(true){
if((i__43843_43865 < count__43842_43864)){
var f_43866 = cljs.core._nth.call(null,chunk__43841_43863,i__43843_43865);
cljs.core.println.call(null,"  ",f_43866);

var G__43867 = seq__43840_43862;
var G__43868 = chunk__43841_43863;
var G__43869 = count__43842_43864;
var G__43870 = (i__43843_43865 + (1));
seq__43840_43862 = G__43867;
chunk__43841_43863 = G__43868;
count__43842_43864 = G__43869;
i__43843_43865 = G__43870;
continue;
} else {
var temp__5278__auto___43871 = cljs.core.seq.call(null,seq__43840_43862);
if(temp__5278__auto___43871){
var seq__43840_43872__$1 = temp__5278__auto___43871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43840_43872__$1)){
var c__31003__auto___43873 = cljs.core.chunk_first.call(null,seq__43840_43872__$1);
var G__43874 = cljs.core.chunk_rest.call(null,seq__43840_43872__$1);
var G__43875 = c__31003__auto___43873;
var G__43876 = cljs.core.count.call(null,c__31003__auto___43873);
var G__43877 = (0);
seq__43840_43862 = G__43874;
chunk__43841_43863 = G__43875;
count__43842_43864 = G__43876;
i__43843_43865 = G__43877;
continue;
} else {
var f_43878 = cljs.core.first.call(null,seq__43840_43872__$1);
cljs.core.println.call(null,"  ",f_43878);

var G__43879 = cljs.core.next.call(null,seq__43840_43872__$1);
var G__43880 = null;
var G__43881 = (0);
var G__43882 = (0);
seq__43840_43862 = G__43879;
chunk__43841_43863 = G__43880;
count__43842_43864 = G__43881;
i__43843_43865 = G__43882;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43883 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30072__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43883);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43883)))?cljs.core.second.call(null,arglists_43883):arglists_43883));
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
var seq__43844_43884 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43845_43885 = null;
var count__43846_43886 = (0);
var i__43847_43887 = (0);
while(true){
if((i__43847_43887 < count__43846_43886)){
var vec__43848_43888 = cljs.core._nth.call(null,chunk__43845_43885,i__43847_43887);
var name_43889 = cljs.core.nth.call(null,vec__43848_43888,(0),null);
var map__43851_43890 = cljs.core.nth.call(null,vec__43848_43888,(1),null);
var map__43851_43891__$1 = ((((!((map__43851_43890 == null)))?((((map__43851_43890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43851_43890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43851_43890):map__43851_43890);
var doc_43892 = cljs.core.get.call(null,map__43851_43891__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43893 = cljs.core.get.call(null,map__43851_43891__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43889);

cljs.core.println.call(null," ",arglists_43893);

if(cljs.core.truth_(doc_43892)){
cljs.core.println.call(null," ",doc_43892);
} else {
}

var G__43894 = seq__43844_43884;
var G__43895 = chunk__43845_43885;
var G__43896 = count__43846_43886;
var G__43897 = (i__43847_43887 + (1));
seq__43844_43884 = G__43894;
chunk__43845_43885 = G__43895;
count__43846_43886 = G__43896;
i__43847_43887 = G__43897;
continue;
} else {
var temp__5278__auto___43898 = cljs.core.seq.call(null,seq__43844_43884);
if(temp__5278__auto___43898){
var seq__43844_43899__$1 = temp__5278__auto___43898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43844_43899__$1)){
var c__31003__auto___43900 = cljs.core.chunk_first.call(null,seq__43844_43899__$1);
var G__43901 = cljs.core.chunk_rest.call(null,seq__43844_43899__$1);
var G__43902 = c__31003__auto___43900;
var G__43903 = cljs.core.count.call(null,c__31003__auto___43900);
var G__43904 = (0);
seq__43844_43884 = G__43901;
chunk__43845_43885 = G__43902;
count__43846_43886 = G__43903;
i__43847_43887 = G__43904;
continue;
} else {
var vec__43853_43905 = cljs.core.first.call(null,seq__43844_43899__$1);
var name_43906 = cljs.core.nth.call(null,vec__43853_43905,(0),null);
var map__43856_43907 = cljs.core.nth.call(null,vec__43853_43905,(1),null);
var map__43856_43908__$1 = ((((!((map__43856_43907 == null)))?((((map__43856_43907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43856_43907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43856_43907):map__43856_43907);
var doc_43909 = cljs.core.get.call(null,map__43856_43908__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43910 = cljs.core.get.call(null,map__43856_43908__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43906);

cljs.core.println.call(null," ",arglists_43910);

if(cljs.core.truth_(doc_43909)){
cljs.core.println.call(null," ",doc_43909);
} else {
}

var G__43911 = cljs.core.next.call(null,seq__43844_43899__$1);
var G__43912 = null;
var G__43913 = (0);
var G__43914 = (0);
seq__43844_43884 = G__43911;
chunk__43845_43885 = G__43912;
count__43846_43886 = G__43913;
i__43847_43887 = G__43914;
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

var seq__43858 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43859 = null;
var count__43860 = (0);
var i__43861 = (0);
while(true){
if((i__43861 < count__43860)){
var role = cljs.core._nth.call(null,chunk__43859,i__43861);
var temp__5278__auto___43915__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___43915__$1)){
var spec_43916 = temp__5278__auto___43915__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43916));
} else {
}

var G__43917 = seq__43858;
var G__43918 = chunk__43859;
var G__43919 = count__43860;
var G__43920 = (i__43861 + (1));
seq__43858 = G__43917;
chunk__43859 = G__43918;
count__43860 = G__43919;
i__43861 = G__43920;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__43858);
if(temp__5278__auto____$1){
var seq__43858__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43858__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__43858__$1);
var G__43921 = cljs.core.chunk_rest.call(null,seq__43858__$1);
var G__43922 = c__31003__auto__;
var G__43923 = cljs.core.count.call(null,c__31003__auto__);
var G__43924 = (0);
seq__43858 = G__43921;
chunk__43859 = G__43922;
count__43860 = G__43923;
i__43861 = G__43924;
continue;
} else {
var role = cljs.core.first.call(null,seq__43858__$1);
var temp__5278__auto___43925__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___43925__$2)){
var spec_43926 = temp__5278__auto___43925__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43926));
} else {
}

var G__43927 = cljs.core.next.call(null,seq__43858__$1);
var G__43928 = null;
var G__43929 = (0);
var G__43930 = (0);
seq__43858 = G__43927;
chunk__43859 = G__43928;
count__43860 = G__43929;
i__43861 = G__43930;
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

//# sourceMappingURL=repl.js.map?rel=1510229224297
