// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38781){
var map__38782 = p__38781;
var map__38782__$1 = ((((!((map__38782 == null)))?((((map__38782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38782):map__38782);
var m = map__38782__$1;
var n = cljs.core.get.call(null,map__38782__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38782__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38784_38806 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38785_38807 = null;
var count__38786_38808 = (0);
var i__38787_38809 = (0);
while(true){
if((i__38787_38809 < count__38786_38808)){
var f_38810 = cljs.core._nth.call(null,chunk__38785_38807,i__38787_38809);
cljs.core.println.call(null,"  ",f_38810);

var G__38811 = seq__38784_38806;
var G__38812 = chunk__38785_38807;
var G__38813 = count__38786_38808;
var G__38814 = (i__38787_38809 + (1));
seq__38784_38806 = G__38811;
chunk__38785_38807 = G__38812;
count__38786_38808 = G__38813;
i__38787_38809 = G__38814;
continue;
} else {
var temp__5278__auto___38815 = cljs.core.seq.call(null,seq__38784_38806);
if(temp__5278__auto___38815){
var seq__38784_38816__$1 = temp__5278__auto___38815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38784_38816__$1)){
var c__31003__auto___38817 = cljs.core.chunk_first.call(null,seq__38784_38816__$1);
var G__38818 = cljs.core.chunk_rest.call(null,seq__38784_38816__$1);
var G__38819 = c__31003__auto___38817;
var G__38820 = cljs.core.count.call(null,c__31003__auto___38817);
var G__38821 = (0);
seq__38784_38806 = G__38818;
chunk__38785_38807 = G__38819;
count__38786_38808 = G__38820;
i__38787_38809 = G__38821;
continue;
} else {
var f_38822 = cljs.core.first.call(null,seq__38784_38816__$1);
cljs.core.println.call(null,"  ",f_38822);

var G__38823 = cljs.core.next.call(null,seq__38784_38816__$1);
var G__38824 = null;
var G__38825 = (0);
var G__38826 = (0);
seq__38784_38806 = G__38823;
chunk__38785_38807 = G__38824;
count__38786_38808 = G__38825;
i__38787_38809 = G__38826;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38827 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30072__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38827);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38827)))?cljs.core.second.call(null,arglists_38827):arglists_38827));
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
var seq__38788_38828 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38789_38829 = null;
var count__38790_38830 = (0);
var i__38791_38831 = (0);
while(true){
if((i__38791_38831 < count__38790_38830)){
var vec__38792_38832 = cljs.core._nth.call(null,chunk__38789_38829,i__38791_38831);
var name_38833 = cljs.core.nth.call(null,vec__38792_38832,(0),null);
var map__38795_38834 = cljs.core.nth.call(null,vec__38792_38832,(1),null);
var map__38795_38835__$1 = ((((!((map__38795_38834 == null)))?((((map__38795_38834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38795_38834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38795_38834):map__38795_38834);
var doc_38836 = cljs.core.get.call(null,map__38795_38835__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38837 = cljs.core.get.call(null,map__38795_38835__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38833);

cljs.core.println.call(null," ",arglists_38837);

if(cljs.core.truth_(doc_38836)){
cljs.core.println.call(null," ",doc_38836);
} else {
}

var G__38838 = seq__38788_38828;
var G__38839 = chunk__38789_38829;
var G__38840 = count__38790_38830;
var G__38841 = (i__38791_38831 + (1));
seq__38788_38828 = G__38838;
chunk__38789_38829 = G__38839;
count__38790_38830 = G__38840;
i__38791_38831 = G__38841;
continue;
} else {
var temp__5278__auto___38842 = cljs.core.seq.call(null,seq__38788_38828);
if(temp__5278__auto___38842){
var seq__38788_38843__$1 = temp__5278__auto___38842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38788_38843__$1)){
var c__31003__auto___38844 = cljs.core.chunk_first.call(null,seq__38788_38843__$1);
var G__38845 = cljs.core.chunk_rest.call(null,seq__38788_38843__$1);
var G__38846 = c__31003__auto___38844;
var G__38847 = cljs.core.count.call(null,c__31003__auto___38844);
var G__38848 = (0);
seq__38788_38828 = G__38845;
chunk__38789_38829 = G__38846;
count__38790_38830 = G__38847;
i__38791_38831 = G__38848;
continue;
} else {
var vec__38797_38849 = cljs.core.first.call(null,seq__38788_38843__$1);
var name_38850 = cljs.core.nth.call(null,vec__38797_38849,(0),null);
var map__38800_38851 = cljs.core.nth.call(null,vec__38797_38849,(1),null);
var map__38800_38852__$1 = ((((!((map__38800_38851 == null)))?((((map__38800_38851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38800_38851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38800_38851):map__38800_38851);
var doc_38853 = cljs.core.get.call(null,map__38800_38852__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38854 = cljs.core.get.call(null,map__38800_38852__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38850);

cljs.core.println.call(null," ",arglists_38854);

if(cljs.core.truth_(doc_38853)){
cljs.core.println.call(null," ",doc_38853);
} else {
}

var G__38855 = cljs.core.next.call(null,seq__38788_38843__$1);
var G__38856 = null;
var G__38857 = (0);
var G__38858 = (0);
seq__38788_38828 = G__38855;
chunk__38789_38829 = G__38856;
count__38790_38830 = G__38857;
i__38791_38831 = G__38858;
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

var seq__38802 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38803 = null;
var count__38804 = (0);
var i__38805 = (0);
while(true){
if((i__38805 < count__38804)){
var role = cljs.core._nth.call(null,chunk__38803,i__38805);
var temp__5278__auto___38859__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38859__$1)){
var spec_38860 = temp__5278__auto___38859__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38860));
} else {
}

var G__38861 = seq__38802;
var G__38862 = chunk__38803;
var G__38863 = count__38804;
var G__38864 = (i__38805 + (1));
seq__38802 = G__38861;
chunk__38803 = G__38862;
count__38804 = G__38863;
i__38805 = G__38864;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__38802);
if(temp__5278__auto____$1){
var seq__38802__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38802__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__38802__$1);
var G__38865 = cljs.core.chunk_rest.call(null,seq__38802__$1);
var G__38866 = c__31003__auto__;
var G__38867 = cljs.core.count.call(null,c__31003__auto__);
var G__38868 = (0);
seq__38802 = G__38865;
chunk__38803 = G__38866;
count__38804 = G__38867;
i__38805 = G__38868;
continue;
} else {
var role = cljs.core.first.call(null,seq__38802__$1);
var temp__5278__auto___38869__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38869__$2)){
var spec_38870 = temp__5278__auto___38869__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38870));
} else {
}

var G__38871 = cljs.core.next.call(null,seq__38802__$1);
var G__38872 = null;
var G__38873 = (0);
var G__38874 = (0);
seq__38802 = G__38871;
chunk__38803 = G__38872;
count__38804 = G__38873;
i__38805 = G__38874;
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

//# sourceMappingURL=repl.js.map?rel=1510085336184
