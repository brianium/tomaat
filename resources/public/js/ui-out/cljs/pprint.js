// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49101 = arguments.length;
var i__31350__auto___49102 = (0);
while(true){
if((i__31350__auto___49102 < len__31349__auto___49101)){
args__31356__auto__.push((arguments[i__31350__auto___49102]));

var G__49104 = (i__31350__auto___49102 + (1));
i__31350__auto___49102 = G__49104;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq49097){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49097));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49110 = arguments.length;
var i__31350__auto___49111 = (0);
while(true){
if((i__31350__auto___49111 < len__31349__auto___49110)){
args__31356__auto__.push((arguments[i__31350__auto___49111]));

var G__49112 = (i__31350__auto___49111 + (1));
i__31350__auto___49111 = G__49112;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq49107){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49107));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__49114 = cljs.core._EQ_;
var expr__49115 = c;
if(cljs.core.truth_(pred__49114.call(null,"\b",expr__49115))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__49114.call(null,"\t",expr__49115))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__49114.call(null,"\n",expr__49115))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__49114.call(null,"\f",expr__49115))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__49114.call(null,"\r",expr__49115))){
return "\\return";
} else {
if(cljs.core.truth_(pred__49114.call(null,"\"",expr__49115))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__49114.call(null,"\\",expr__49115))){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49128 = arguments.length;
var i__31350__auto___49129 = (0);
while(true){
if((i__31350__auto___49129 < len__31349__auto___49128)){
args__31356__auto__.push((arguments[i__31350__auto___49129]));

var G__49130 = (i__31350__auto___49129 + (1));
i__31350__auto___49129 = G__49130;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq49118){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49118));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49137 = arguments.length;
var i__31350__auto___49140 = (0);
while(true){
if((i__31350__auto___49140 < len__31349__auto___49137)){
args__31356__auto__.push((arguments[i__31350__auto___49140]));

var G__49141 = (i__31350__auto___49140 + (1));
i__31350__auto___49140 = G__49141;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq49134){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49134));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__49156 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__49156,(0),null);
var new_context = cljs.core.nth.call(null,vec__49156,(1),null);
var G__49163 = new_context;
var G__49164 = remainder;
var G__49165 = cljs.core.conj.call(null,acc,result);
context = G__49163;
lis__$1 = G__49164;
acc = G__49165;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__49168 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__49168,(0),null);
var new_context = cljs.core.nth.call(null,vec__49168,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__49176 = new_context;
var G__49177 = cljs.core.conj.call(null,acc,result);
context = G__49176;
acc = G__49177;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__49184 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__49184,(0),null);
var continue$ = cljs.core.nth.call(null,vec__49184,(1),null);
var new_context = cljs.core.nth.call(null,vec__49184,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__49224 = new_context;
var G__49225 = cljs.core.conj.call(null,acc,result);
context = G__49224;
acc = G__49225;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__30954__auto__ = (function cljs$pprint$unzip_map_$_iter__49230(s__49231){
return (new cljs.core.LazySeq(null,(function (){
var s__49231__$1 = s__49231;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__49231__$1);
if(temp__5278__auto__){
var s__49231__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49231__$2)){
var c__30952__auto__ = cljs.core.chunk_first.call(null,s__49231__$2);
var size__30953__auto__ = cljs.core.count.call(null,c__30952__auto__);
var b__49233 = cljs.core.chunk_buffer.call(null,size__30953__auto__);
if((function (){var i__49232 = (0);
while(true){
if((i__49232 < size__30953__auto__)){
var vec__49236 = cljs.core._nth.call(null,c__30952__auto__,i__49232);
var k = cljs.core.nth.call(null,vec__49236,(0),null);
var vec__49239 = cljs.core.nth.call(null,vec__49236,(1),null);
var v1 = cljs.core.nth.call(null,vec__49239,(0),null);
var v2 = cljs.core.nth.call(null,vec__49239,(1),null);
cljs.core.chunk_append.call(null,b__49233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__49313 = (i__49232 + (1));
i__49232 = G__49313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49233),cljs$pprint$unzip_map_$_iter__49230.call(null,cljs.core.chunk_rest.call(null,s__49231__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49233),null);
}
} else {
var vec__49251 = cljs.core.first.call(null,s__49231__$2);
var k = cljs.core.nth.call(null,vec__49251,(0),null);
var vec__49254 = cljs.core.nth.call(null,vec__49251,(1),null);
var v1 = cljs.core.nth.call(null,vec__49254,(0),null);
var v2 = cljs.core.nth.call(null,vec__49254,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__49230.call(null,cljs.core.rest.call(null,s__49231__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30954__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__30954__auto__ = (function cljs$pprint$unzip_map_$_iter__49258(s__49259){
return (new cljs.core.LazySeq(null,(function (){
var s__49259__$1 = s__49259;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__49259__$1);
if(temp__5278__auto__){
var s__49259__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49259__$2)){
var c__30952__auto__ = cljs.core.chunk_first.call(null,s__49259__$2);
var size__30953__auto__ = cljs.core.count.call(null,c__30952__auto__);
var b__49261 = cljs.core.chunk_buffer.call(null,size__30953__auto__);
if((function (){var i__49260 = (0);
while(true){
if((i__49260 < size__30953__auto__)){
var vec__49266 = cljs.core._nth.call(null,c__30952__auto__,i__49260);
var k = cljs.core.nth.call(null,vec__49266,(0),null);
var vec__49269 = cljs.core.nth.call(null,vec__49266,(1),null);
var v1 = cljs.core.nth.call(null,vec__49269,(0),null);
var v2 = cljs.core.nth.call(null,vec__49269,(1),null);
cljs.core.chunk_append.call(null,b__49261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__49318 = (i__49260 + (1));
i__49260 = G__49318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49261),cljs$pprint$unzip_map_$_iter__49258.call(null,cljs.core.chunk_rest.call(null,s__49259__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49261),null);
}
} else {
var vec__49279 = cljs.core.first.call(null,s__49259__$2);
var k = cljs.core.nth.call(null,vec__49279,(0),null);
var vec__49282 = cljs.core.nth.call(null,vec__49279,(1),null);
var v1 = cljs.core.nth.call(null,vec__49282,(0),null);
var v2 = cljs.core.nth.call(null,vec__49282,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__49258.call(null,cljs.core.rest.call(null,s__49259__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30954__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__30954__auto__ = (function cljs$pprint$tuple_map_$_iter__49321(s__49322){
return (new cljs.core.LazySeq(null,(function (){
var s__49322__$1 = s__49322;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__49322__$1);
if(temp__5278__auto__){
var s__49322__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49322__$2)){
var c__30952__auto__ = cljs.core.chunk_first.call(null,s__49322__$2);
var size__30953__auto__ = cljs.core.count.call(null,c__30952__auto__);
var b__49324 = cljs.core.chunk_buffer.call(null,size__30953__auto__);
if((function (){var i__49323 = (0);
while(true){
if((i__49323 < size__30953__auto__)){
var vec__49328 = cljs.core._nth.call(null,c__30952__auto__,i__49323);
var k = cljs.core.nth.call(null,vec__49328,(0),null);
var v = cljs.core.nth.call(null,vec__49328,(1),null);
cljs.core.chunk_append.call(null,b__49324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__49339 = (i__49323 + (1));
i__49323 = G__49339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49324),cljs$pprint$tuple_map_$_iter__49321.call(null,cljs.core.chunk_rest.call(null,s__49322__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49324),null);
}
} else {
var vec__49332 = cljs.core.first.call(null,s__49322__$2);
var k = cljs.core.nth.call(null,vec__49332,(0),null);
var v = cljs.core.nth.call(null,vec__49332,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__49321.call(null,cljs.core.rest.call(null,s__49322__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30954__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__49345 = (n - (1));
n = G__49345;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.call(null,n,len)) || (!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,n);
} else {
var G__49357 = (n + (1));
n = G__49357;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos))))){
return pos;
} else {
var G__49358 = (pos + (1));
pos = G__49358;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__30805__auto__ = (((pp == null))?null:pp);
var m__30806__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,pp);
} else {
var m__30806__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__49431 = arguments.length;
switch (G__49431) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if(typeof cljs.pprint.t_cljs$pprint49437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint49437 = (function (writer,max_columns,fields,meta49438){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta49438 = meta49438;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint49437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_49439,meta49438__$1){
var self__ = this;
var _49439__$1 = this;
return (new cljs.pprint.t_cljs$pprint49437(self__.writer,self__.max_columns,self__.fields,meta49438__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint49437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_49439){
var self__ = this;
var _49439__$1 = this;
return self__.meta49438;
});})(fields))
;

cljs.pprint.t_cljs$pprint49437.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint49437.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint49437.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__49448 = cljs.core._EQ_;
var expr__49449 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__49448.call(null,String,expr__49449))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__49448,expr__49449,this$__$1,fields){
return (function (p1__49428_SHARP_){
return cljs.core._EQ_.call(null,p1__49428_SHARP_,"\n");
});})(s,nl,pred__49448,expr__49449,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__49448.call(null,Number,expr__49449))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__49449)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint49437.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta49438","meta49438",-1589759862,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint49437.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint49437.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint49437";

cljs.pprint.t_cljs$pprint49437.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.pprint/t_cljs$pprint49437");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint49437 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint49437(writer__$1,max_columns__$1,fields__$1,meta49438){
return (new cljs.pprint.t_cljs$pprint49437(writer__$1,max_columns__$1,fields__$1,meta49438));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint49437(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30760__auto__,k__30761__auto__){
var self__ = this;
var this__30760__auto____$1 = this;
return this__30760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30761__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30762__auto__,k49470,else__30763__auto__){
var self__ = this;
var this__30762__auto____$1 = this;
var G__49477 = k49470;
var G__49477__$1 = (((G__49477 instanceof cljs.core.Keyword))?G__49477.fqn:null);
switch (G__49477__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49470,else__30763__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30774__auto__,writer__30775__auto__,opts__30776__auto__){
var self__ = this;
var this__30774__auto____$1 = this;
var pr_pair__30777__auto__ = ((function (this__30774__auto____$1){
return (function (keyval__30778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,cljs.core.pr_writer,""," ","",opts__30776__auto__,keyval__30778__auto__);
});})(this__30774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,pr_pair__30777__auto__,"#cljs.pprint.logical-block{",", ","}",opts__30776__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49469){
var self__ = this;
var G__49469__$1 = this;
return (new cljs.core.RecordIter((0),G__49469__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30758__auto__){
var self__ = this;
var this__30758__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30755__auto__){
var self__ = this;
var this__30755__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30764__auto__){
var self__ = this;
var this__30764__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30756__auto__){
var self__ = this;
var this__30756__auto____$1 = this;
var h__30528__auto__ = self__.__hash;
if(!((h__30528__auto__ == null))){
return h__30528__auto__;
} else {
var h__30528__auto____$1 = ((function (h__30528__auto__,this__30756__auto____$1){
return (function (coll__30757__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__30757__auto__));
});})(h__30528__auto__,this__30756__auto____$1))
.call(null,this__30756__auto____$1);
self__.__hash = h__30528__auto____$1;

return h__30528__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49471,other49472){
var self__ = this;
var this49471__$1 = this;
return (!((other49472 == null))) && ((this49471__$1.constructor === other49472.constructor)) && (cljs.core._EQ_.call(null,this49471__$1.parent,other49472.parent)) && (cljs.core._EQ_.call(null,this49471__$1.section,other49472.section)) && (cljs.core._EQ_.call(null,this49471__$1.start_col,other49472.start_col)) && (cljs.core._EQ_.call(null,this49471__$1.indent,other49472.indent)) && (cljs.core._EQ_.call(null,this49471__$1.done_nl,other49472.done_nl)) && (cljs.core._EQ_.call(null,this49471__$1.intra_block_nl,other49472.intra_block_nl)) && (cljs.core._EQ_.call(null,this49471__$1.prefix,other49472.prefix)) && (cljs.core._EQ_.call(null,this49471__$1.per_line_prefix,other49472.per_line_prefix)) && (cljs.core._EQ_.call(null,this49471__$1.suffix,other49472.suffix)) && (cljs.core._EQ_.call(null,this49471__$1.logical_block_callback,other49472.logical_block_callback)) && (cljs.core._EQ_.call(null,this49471__$1.__extmap,other49472.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30769__auto__,k__30770__auto__){
var self__ = this;
var this__30769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__30770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30769__auto____$1),self__.__meta),k__30770__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30770__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30767__auto__,k__30768__auto__,G__49469){
var self__ = this;
var this__30767__auto____$1 = this;
var pred__49532 = cljs.core.keyword_identical_QMARK_;
var expr__49533 = k__30768__auto__;
if(cljs.core.truth_(pred__49532.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__49533))){
return (new cljs.pprint.logical_block(G__49469,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49532.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__49533))){
return (new cljs.pprint.logical_block(self__.parent,G__49469,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49532.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__49533))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__49469,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49532.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__49533))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__49469,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49532.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__49533))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__49469,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49532.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__49533))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__49469,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49532.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__49533))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__49469,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49532.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__49533))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__49469,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49532.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__49533))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__49469,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49532.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__49533))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__49469,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30768__auto__,G__49469),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30772__auto__){
var self__ = this;
var this__30772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30759__auto__,G__49469){
var self__ = this;
var this__30759__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__49469,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30765__auto__,entry__30766__auto__){
var self__ = this;
var this__30765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30766__auto__)){
return this__30765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30766__auto__,(0)),cljs.core._nth.call(null,entry__30766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30765__auto____$1,entry__30766__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__30798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__30798__auto__,writer__30799__auto__){
return cljs.core._write.call(null,writer__30799__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__49475){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__49475),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__49475),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__49475),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__49475),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__49475),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__49475),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__49475),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__49475),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__49475),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__49475),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49475,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__49610 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__49610;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30760__auto__,k__30761__auto__){
var self__ = this;
var this__30760__auto____$1 = this;
return this__30760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30761__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30762__auto__,k49612,else__30763__auto__){
var self__ = this;
var this__30762__auto____$1 = this;
var G__49617 = k49612;
var G__49617__$1 = (((G__49617 instanceof cljs.core.Keyword))?G__49617.fqn:null);
switch (G__49617__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49612,else__30763__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30774__auto__,writer__30775__auto__,opts__30776__auto__){
var self__ = this;
var this__30774__auto____$1 = this;
var pr_pair__30777__auto__ = ((function (this__30774__auto____$1){
return (function (keyval__30778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,cljs.core.pr_writer,""," ","",opts__30776__auto__,keyval__30778__auto__);
});})(this__30774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,pr_pair__30777__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__30776__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49611){
var self__ = this;
var G__49611__$1 = this;
return (new cljs.core.RecordIter((0),G__49611__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30758__auto__){
var self__ = this;
var this__30758__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30755__auto__){
var self__ = this;
var this__30755__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30764__auto__){
var self__ = this;
var this__30764__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30756__auto__){
var self__ = this;
var this__30756__auto____$1 = this;
var h__30528__auto__ = self__.__hash;
if(!((h__30528__auto__ == null))){
return h__30528__auto__;
} else {
var h__30528__auto____$1 = ((function (h__30528__auto__,this__30756__auto____$1){
return (function (coll__30757__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__30757__auto__));
});})(h__30528__auto__,this__30756__auto____$1))
.call(null,this__30756__auto____$1);
self__.__hash = h__30528__auto____$1;

return h__30528__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49613,other49614){
var self__ = this;
var this49613__$1 = this;
return (!((other49614 == null))) && ((this49613__$1.constructor === other49614.constructor)) && (cljs.core._EQ_.call(null,this49613__$1.type_tag,other49614.type_tag)) && (cljs.core._EQ_.call(null,this49613__$1.data,other49614.data)) && (cljs.core._EQ_.call(null,this49613__$1.trailing_white_space,other49614.trailing_white_space)) && (cljs.core._EQ_.call(null,this49613__$1.start_pos,other49614.start_pos)) && (cljs.core._EQ_.call(null,this49613__$1.end_pos,other49614.end_pos)) && (cljs.core._EQ_.call(null,this49613__$1.__extmap,other49614.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30769__auto__,k__30770__auto__){
var self__ = this;
var this__30769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__30770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30769__auto____$1),self__.__meta),k__30770__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30770__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30767__auto__,k__30768__auto__,G__49611){
var self__ = this;
var this__30767__auto____$1 = this;
var pred__49625 = cljs.core.keyword_identical_QMARK_;
var expr__49626 = k__30768__auto__;
if(cljs.core.truth_(pred__49625.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__49626))){
return (new cljs.pprint.buffer_blob(G__49611,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49625.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__49626))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__49611,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49625.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__49626))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__49611,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49625.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__49626))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__49611,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49625.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__49626))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__49611,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30768__auto__,G__49611),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30772__auto__){
var self__ = this;
var this__30772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30759__auto__,G__49611){
var self__ = this;
var this__30759__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__49611,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30765__auto__,entry__30766__auto__){
var self__ = this;
var this__30765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30766__auto__)){
return this__30765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30766__auto__,(0)),cljs.core._nth.call(null,entry__30766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30765__auto____$1,entry__30766__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__30798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__30798__auto__,writer__30799__auto__){
return cljs.core._write.call(null,writer__30799__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__49615){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__49615),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__49615),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__49615),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__49615),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__49615),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49615,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__33662__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__33662__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30760__auto__,k__30761__auto__){
var self__ = this;
var this__30760__auto____$1 = this;
return this__30760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30761__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30762__auto__,k49712,else__30763__auto__){
var self__ = this;
var this__30762__auto____$1 = this;
var G__49740 = k49712;
var G__49740__$1 = (((G__49740 instanceof cljs.core.Keyword))?G__49740.fqn:null);
switch (G__49740__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49712,else__30763__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30774__auto__,writer__30775__auto__,opts__30776__auto__){
var self__ = this;
var this__30774__auto____$1 = this;
var pr_pair__30777__auto__ = ((function (this__30774__auto____$1){
return (function (keyval__30778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,cljs.core.pr_writer,""," ","",opts__30776__auto__,keyval__30778__auto__);
});})(this__30774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,pr_pair__30777__auto__,"#cljs.pprint.nl-t{",", ","}",opts__30776__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49711){
var self__ = this;
var G__49711__$1 = this;
return (new cljs.core.RecordIter((0),G__49711__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30758__auto__){
var self__ = this;
var this__30758__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30755__auto__){
var self__ = this;
var this__30755__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30764__auto__){
var self__ = this;
var this__30764__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30756__auto__){
var self__ = this;
var this__30756__auto____$1 = this;
var h__30528__auto__ = self__.__hash;
if(!((h__30528__auto__ == null))){
return h__30528__auto__;
} else {
var h__30528__auto____$1 = ((function (h__30528__auto__,this__30756__auto____$1){
return (function (coll__30757__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__30757__auto__));
});})(h__30528__auto__,this__30756__auto____$1))
.call(null,this__30756__auto____$1);
self__.__hash = h__30528__auto____$1;

return h__30528__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49713,other49714){
var self__ = this;
var this49713__$1 = this;
return (!((other49714 == null))) && ((this49713__$1.constructor === other49714.constructor)) && (cljs.core._EQ_.call(null,this49713__$1.type_tag,other49714.type_tag)) && (cljs.core._EQ_.call(null,this49713__$1.type,other49714.type)) && (cljs.core._EQ_.call(null,this49713__$1.logical_block,other49714.logical_block)) && (cljs.core._EQ_.call(null,this49713__$1.start_pos,other49714.start_pos)) && (cljs.core._EQ_.call(null,this49713__$1.end_pos,other49714.end_pos)) && (cljs.core._EQ_.call(null,this49713__$1.__extmap,other49714.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30769__auto__,k__30770__auto__){
var self__ = this;
var this__30769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__30770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30769__auto____$1),self__.__meta),k__30770__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30770__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30767__auto__,k__30768__auto__,G__49711){
var self__ = this;
var this__30767__auto____$1 = this;
var pred__49803 = cljs.core.keyword_identical_QMARK_;
var expr__49804 = k__30768__auto__;
if(cljs.core.truth_(pred__49803.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__49804))){
return (new cljs.pprint.nl_t(G__49711,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49803.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__49804))){
return (new cljs.pprint.nl_t(self__.type_tag,G__49711,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49803.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__49804))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__49711,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49803.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__49804))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__49711,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49803.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__49804))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__49711,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30768__auto__,G__49711),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30772__auto__){
var self__ = this;
var this__30772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30759__auto__,G__49711){
var self__ = this;
var this__30759__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__49711,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30765__auto__,entry__30766__auto__){
var self__ = this;
var this__30765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30766__auto__)){
return this__30765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30766__auto__,(0)),cljs.core._nth.call(null,entry__30766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30765__auto____$1,entry__30766__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__30798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__30798__auto__,writer__30799__auto__){
return cljs.core._write.call(null,writer__30799__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__49715){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__49715),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__49715),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__49715),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__49715),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__49715),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49715,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__33662__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__33662__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30760__auto__,k__30761__auto__){
var self__ = this;
var this__30760__auto____$1 = this;
return this__30760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30761__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30762__auto__,k49858,else__30763__auto__){
var self__ = this;
var this__30762__auto____$1 = this;
var G__49864 = k49858;
var G__49864__$1 = (((G__49864 instanceof cljs.core.Keyword))?G__49864.fqn:null);
switch (G__49864__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49858,else__30763__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30774__auto__,writer__30775__auto__,opts__30776__auto__){
var self__ = this;
var this__30774__auto____$1 = this;
var pr_pair__30777__auto__ = ((function (this__30774__auto____$1){
return (function (keyval__30778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,cljs.core.pr_writer,""," ","",opts__30776__auto__,keyval__30778__auto__);
});})(this__30774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,pr_pair__30777__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__30776__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49857){
var self__ = this;
var G__49857__$1 = this;
return (new cljs.core.RecordIter((0),G__49857__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30758__auto__){
var self__ = this;
var this__30758__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30755__auto__){
var self__ = this;
var this__30755__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30764__auto__){
var self__ = this;
var this__30764__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30756__auto__){
var self__ = this;
var this__30756__auto____$1 = this;
var h__30528__auto__ = self__.__hash;
if(!((h__30528__auto__ == null))){
return h__30528__auto__;
} else {
var h__30528__auto____$1 = ((function (h__30528__auto__,this__30756__auto____$1){
return (function (coll__30757__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__30757__auto__));
});})(h__30528__auto__,this__30756__auto____$1))
.call(null,this__30756__auto____$1);
self__.__hash = h__30528__auto____$1;

return h__30528__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49859,other49860){
var self__ = this;
var this49859__$1 = this;
return (!((other49860 == null))) && ((this49859__$1.constructor === other49860.constructor)) && (cljs.core._EQ_.call(null,this49859__$1.type_tag,other49860.type_tag)) && (cljs.core._EQ_.call(null,this49859__$1.logical_block,other49860.logical_block)) && (cljs.core._EQ_.call(null,this49859__$1.start_pos,other49860.start_pos)) && (cljs.core._EQ_.call(null,this49859__$1.end_pos,other49860.end_pos)) && (cljs.core._EQ_.call(null,this49859__$1.__extmap,other49860.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30769__auto__,k__30770__auto__){
var self__ = this;
var this__30769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__30770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30769__auto____$1),self__.__meta),k__30770__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30770__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30767__auto__,k__30768__auto__,G__49857){
var self__ = this;
var this__30767__auto____$1 = this;
var pred__49874 = cljs.core.keyword_identical_QMARK_;
var expr__49875 = k__30768__auto__;
if(cljs.core.truth_(pred__49874.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__49875))){
return (new cljs.pprint.start_block_t(G__49857,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49874.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__49875))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__49857,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49874.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__49875))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__49857,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49874.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__49875))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__49857,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30768__auto__,G__49857),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30772__auto__){
var self__ = this;
var this__30772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30759__auto__,G__49857){
var self__ = this;
var this__30759__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__49857,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30765__auto__,entry__30766__auto__){
var self__ = this;
var this__30765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30766__auto__)){
return this__30765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30766__auto__,(0)),cljs.core._nth.call(null,entry__30766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30765__auto____$1,entry__30766__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__30798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__30798__auto__,writer__30799__auto__){
return cljs.core._write.call(null,writer__30799__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__49862){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__49862),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__49862),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__49862),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__49862),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49862,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__33662__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__33662__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30760__auto__,k__30761__auto__){
var self__ = this;
var this__30760__auto____$1 = this;
return this__30760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30761__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30762__auto__,k49963,else__30763__auto__){
var self__ = this;
var this__30762__auto____$1 = this;
var G__49973 = k49963;
var G__49973__$1 = (((G__49973 instanceof cljs.core.Keyword))?G__49973.fqn:null);
switch (G__49973__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49963,else__30763__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30774__auto__,writer__30775__auto__,opts__30776__auto__){
var self__ = this;
var this__30774__auto____$1 = this;
var pr_pair__30777__auto__ = ((function (this__30774__auto____$1){
return (function (keyval__30778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,cljs.core.pr_writer,""," ","",opts__30776__auto__,keyval__30778__auto__);
});})(this__30774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,pr_pair__30777__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__30776__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49962){
var self__ = this;
var G__49962__$1 = this;
return (new cljs.core.RecordIter((0),G__49962__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30758__auto__){
var self__ = this;
var this__30758__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30755__auto__){
var self__ = this;
var this__30755__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30764__auto__){
var self__ = this;
var this__30764__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30756__auto__){
var self__ = this;
var this__30756__auto____$1 = this;
var h__30528__auto__ = self__.__hash;
if(!((h__30528__auto__ == null))){
return h__30528__auto__;
} else {
var h__30528__auto____$1 = ((function (h__30528__auto__,this__30756__auto____$1){
return (function (coll__30757__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__30757__auto__));
});})(h__30528__auto__,this__30756__auto____$1))
.call(null,this__30756__auto____$1);
self__.__hash = h__30528__auto____$1;

return h__30528__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49964,other49965){
var self__ = this;
var this49964__$1 = this;
return (!((other49965 == null))) && ((this49964__$1.constructor === other49965.constructor)) && (cljs.core._EQ_.call(null,this49964__$1.type_tag,other49965.type_tag)) && (cljs.core._EQ_.call(null,this49964__$1.logical_block,other49965.logical_block)) && (cljs.core._EQ_.call(null,this49964__$1.start_pos,other49965.start_pos)) && (cljs.core._EQ_.call(null,this49964__$1.end_pos,other49965.end_pos)) && (cljs.core._EQ_.call(null,this49964__$1.__extmap,other49965.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30769__auto__,k__30770__auto__){
var self__ = this;
var this__30769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__30770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30769__auto____$1),self__.__meta),k__30770__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30770__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30767__auto__,k__30768__auto__,G__49962){
var self__ = this;
var this__30767__auto____$1 = this;
var pred__49987 = cljs.core.keyword_identical_QMARK_;
var expr__49988 = k__30768__auto__;
if(cljs.core.truth_(pred__49987.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__49988))){
return (new cljs.pprint.end_block_t(G__49962,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49987.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__49988))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__49962,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49987.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__49988))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__49962,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49987.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__49988))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__49962,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30768__auto__,G__49962),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30772__auto__){
var self__ = this;
var this__30772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30759__auto__,G__49962){
var self__ = this;
var this__30759__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__49962,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30765__auto__,entry__30766__auto__){
var self__ = this;
var this__30765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30766__auto__)){
return this__30765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30766__auto__,(0)),cljs.core._nth.call(null,entry__30766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30765__auto____$1,entry__30766__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__30798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__30798__auto__,writer__30799__auto__){
return cljs.core._write.call(null,writer__30799__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__49967){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__49967),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__49967),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__49967),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__49967),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49967,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__33662__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__33662__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30760__auto__,k__30761__auto__){
var self__ = this;
var this__30760__auto____$1 = this;
return this__30760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30761__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30762__auto__,k50097,else__30763__auto__){
var self__ = this;
var this__30762__auto____$1 = this;
var G__50105 = k50097;
var G__50105__$1 = (((G__50105 instanceof cljs.core.Keyword))?G__50105.fqn:null);
switch (G__50105__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50097,else__30763__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30774__auto__,writer__30775__auto__,opts__30776__auto__){
var self__ = this;
var this__30774__auto____$1 = this;
var pr_pair__30777__auto__ = ((function (this__30774__auto____$1){
return (function (keyval__30778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,cljs.core.pr_writer,""," ","",opts__30776__auto__,keyval__30778__auto__);
});})(this__30774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,pr_pair__30777__auto__,"#cljs.pprint.indent-t{",", ","}",opts__30776__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50096){
var self__ = this;
var G__50096__$1 = this;
return (new cljs.core.RecordIter((0),G__50096__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30758__auto__){
var self__ = this;
var this__30758__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30755__auto__){
var self__ = this;
var this__30755__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30764__auto__){
var self__ = this;
var this__30764__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30756__auto__){
var self__ = this;
var this__30756__auto____$1 = this;
var h__30528__auto__ = self__.__hash;
if(!((h__30528__auto__ == null))){
return h__30528__auto__;
} else {
var h__30528__auto____$1 = ((function (h__30528__auto__,this__30756__auto____$1){
return (function (coll__30757__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__30757__auto__));
});})(h__30528__auto__,this__30756__auto____$1))
.call(null,this__30756__auto____$1);
self__.__hash = h__30528__auto____$1;

return h__30528__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50098,other50099){
var self__ = this;
var this50098__$1 = this;
return (!((other50099 == null))) && ((this50098__$1.constructor === other50099.constructor)) && (cljs.core._EQ_.call(null,this50098__$1.type_tag,other50099.type_tag)) && (cljs.core._EQ_.call(null,this50098__$1.logical_block,other50099.logical_block)) && (cljs.core._EQ_.call(null,this50098__$1.relative_to,other50099.relative_to)) && (cljs.core._EQ_.call(null,this50098__$1.offset,other50099.offset)) && (cljs.core._EQ_.call(null,this50098__$1.start_pos,other50099.start_pos)) && (cljs.core._EQ_.call(null,this50098__$1.end_pos,other50099.end_pos)) && (cljs.core._EQ_.call(null,this50098__$1.__extmap,other50099.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30769__auto__,k__30770__auto__){
var self__ = this;
var this__30769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__30770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30769__auto____$1),self__.__meta),k__30770__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30770__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30767__auto__,k__30768__auto__,G__50096){
var self__ = this;
var this__30767__auto____$1 = this;
var pred__50121 = cljs.core.keyword_identical_QMARK_;
var expr__50122 = k__30768__auto__;
if(cljs.core.truth_(pred__50121.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__50122))){
return (new cljs.pprint.indent_t(G__50096,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50121.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__50122))){
return (new cljs.pprint.indent_t(self__.type_tag,G__50096,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50121.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__50122))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__50096,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50121.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__50122))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__50096,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50121.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__50122))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__50096,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50121.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__50122))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__50096,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30768__auto__,G__50096),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30772__auto__){
var self__ = this;
var this__30772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30759__auto__,G__50096){
var self__ = this;
var this__30759__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__50096,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30765__auto__,entry__30766__auto__){
var self__ = this;
var this__30765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30766__auto__)){
return this__30765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30766__auto__,(0)),cljs.core._nth.call(null,entry__30766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30765__auto____$1,entry__30766__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__30798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__30798__auto__,writer__30799__auto__){
return cljs.core._write.call(null,writer__30799__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__50102){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__50102),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__50102),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__50102),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__50102),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__50102),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__50102),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50102,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__33662__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__33662__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__31125__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31126__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31127__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31128__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31129__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__31125__auto__,prefer_table__31126__auto__,method_cache__31127__auto__,cached_hierarchy__31128__auto__,hierarchy__31129__auto__){
return (function (p1__50224_SHARP_,p2__50223_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__50223_SHARP_);
});})(method_table__31125__auto__,prefer_table__31126__auto__,method_cache__31127__auto__,cached_hierarchy__31128__auto__,hierarchy__31129__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31129__auto__,method_table__31125__auto__,prefer_table__31126__auto__,method_cache__31127__auto__,cached_hierarchy__31128__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5278__auto___50230 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5278__auto___50230)){
var cb_50231 = temp__5278__auto___50230;
cb_50231.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5278__auto___50232 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5278__auto___50232)){
var prefix_50233 = temp__5278__auto___50232;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_50233);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5278__auto___50235 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5278__auto___50235)){
var cb_50236 = temp__5278__auto___50235;
cb_50236.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__5278__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5278__auto__)){
var suffix = temp__5278__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__50238 = cljs.core._EQ_;
var expr__50239 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__50238.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__50239))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__50238.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__50239))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__50239)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__30072__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__30072__auto__){
return or__30072__auto__;
} else {
var and__30060__auto__ = !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889)));
if(and__30060__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__30060__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__5276__auto___50244 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5276__auto___50244)){
var tws_50245 = temp__5276__auto___50244;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_50245);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__50247 = cljs.core.seq.call(null,tokens);
var chunk__50248 = null;
var count__50249 = (0);
var i__50250 = (0);
while(true){
if((i__50250 < count__50249)){
var token = cljs.core._nth.call(null,chunk__50248,i__50250);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__5276__auto___50258 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5276__auto___50258)){
var tws_50259 = temp__5276__auto___50258;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_50259);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_50261 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__30060__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__30060__auto__)){
return tws_50261;
} else {
return and__30060__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_50261);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__50265 = seq__50247;
var G__50266 = chunk__50248;
var G__50267 = count__50249;
var G__50268 = (i__50250 + (1));
seq__50247 = G__50265;
chunk__50248 = G__50266;
count__50249 = G__50267;
i__50250 = G__50268;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__50247);
if(temp__5278__auto__){
var seq__50247__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50247__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__50247__$1);
var G__50269 = cljs.core.chunk_rest.call(null,seq__50247__$1);
var G__50270 = c__31003__auto__;
var G__50271 = cljs.core.count.call(null,c__31003__auto__);
var G__50272 = (0);
seq__50247 = G__50269;
chunk__50248 = G__50270;
count__50249 = G__50271;
i__50250 = G__50272;
continue;
} else {
var token = cljs.core.first.call(null,seq__50247__$1);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__5276__auto___50274 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5276__auto___50274)){
var tws_50277 = temp__5276__auto___50274;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_50277);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_50279 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__30060__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__30060__auto__)){
return tws_50279;
} else {
return and__30060__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_50279);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__50281 = cljs.core.next.call(null,seq__50247__$1);
var G__50282 = null;
var G__50283 = (0);
var G__50284 = (0);
seq__50247 = G__50281;
chunk__50248 = G__50282;
count__50249 = G__50283;
i__50250 = G__50284;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__30072__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__30060__auto__ = miser_width;
if(cljs.core.truth_(and__30060__auto__)){
var and__30060__auto____$1 = maxcol;
if(cljs.core.truth_(and__30060__auto____$1)){
var and__30060__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__30060__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__30060__auto____$2;
}
} else {
return and__30060__auto____$1;
}
} else {
return and__30060__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__31125__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31126__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31127__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31128__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31129__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__31125__auto__,prefer_table__31126__auto__,method_cache__31127__auto__,cached_hierarchy__31128__auto__,hierarchy__31129__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__31125__auto__,prefer_table__31126__auto__,method_cache__31127__auto__,cached_hierarchy__31128__auto__,hierarchy__31129__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31129__auto__,method_table__31125__auto__,prefer_table__31126__auto__,method_cache__31127__auto__,cached_hierarchy__31128__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__30072__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var or__30072__auto____$1 = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection));
if(or__30072__auto____$1){
return or__30072__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__50307_SHARP_){
return cljs.core.not.call(null,(function (){var and__30060__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__50307_SHARP_);
if(cljs.core.truth_(and__30060__auto__)){
return cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__50307_SHARP_),lb);
} else {
return and__30060__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__50313_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__50313_SHARP_);
return cljs.core.not.call(null,(function (){var and__30060__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__50313_SHARP_);
if(cljs.core.truth_(and__30060__auto__)){
var or__30072__auto__ = cljs.core._EQ_.call(null,nl_lb,lb);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb);
}
} else {
return and__30060__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__50319 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__50319;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_50326 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_50326);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__50328_SHARP_){
return cljs.core.not.call(null,cljs.pprint.nl_t_QMARK_.call(null,p1__50328_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__50333 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__50333,(0),null);
var b = cljs.core.nth.call(null,vec__50333,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__50336 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__50336,(0),null);
var remainder = cljs.core.nth.call(null,vec__50336,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if(!((buffer === new_buffer))){
var G__50347 = new_buffer;
buffer = G__50347;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__5276__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5276__auto__)){
var buf = temp__5276__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5278__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5278__auto__)){
var tws = temp__5278__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_50370 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_50371 = (oldpos_50370 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_50371);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_50370,newpos_50371));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__50360_50373 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__50361_50374 = null;
var count__50362_50375 = (0);
var i__50363_50376 = (0);
while(true){
if((i__50363_50376 < count__50362_50375)){
var l_50379__$1 = cljs.core._nth.call(null,chunk__50361_50374,i__50363_50376);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_50379__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__50380 = seq__50360_50373;
var G__50381 = chunk__50361_50374;
var G__50382 = count__50362_50375;
var G__50383 = (i__50363_50376 + (1));
seq__50360_50373 = G__50380;
chunk__50361_50374 = G__50381;
count__50362_50375 = G__50382;
i__50363_50376 = G__50383;
continue;
} else {
var temp__5278__auto___50384 = cljs.core.seq.call(null,seq__50360_50373);
if(temp__5278__auto___50384){
var seq__50360_50385__$1 = temp__5278__auto___50384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50360_50385__$1)){
var c__31003__auto___50386 = cljs.core.chunk_first.call(null,seq__50360_50385__$1);
var G__50387 = cljs.core.chunk_rest.call(null,seq__50360_50385__$1);
var G__50388 = c__31003__auto___50386;
var G__50389 = cljs.core.count.call(null,c__31003__auto___50386);
var G__50390 = (0);
seq__50360_50373 = G__50387;
chunk__50361_50374 = G__50388;
count__50362_50375 = G__50389;
i__50363_50376 = G__50390;
continue;
} else {
var l_50391__$1 = cljs.core.first.call(null,seq__50360_50385__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_50391__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__50393 = cljs.core.next.call(null,seq__50360_50385__$1);
var G__50394 = null;
var G__50395 = (0);
var G__50396 = (0);
seq__50360_50373 = G__50393;
chunk__50361_50374 = G__50394;
count__50362_50375 = G__50395;
i__50363_50376 = G__50396;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint50397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint50397 = (function (writer,max_columns,miser_width,lb,fields,meta50398){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta50398 = meta50398;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint50397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_50399,meta50398__$1){
var self__ = this;
var _50399__$1 = this;
return (new cljs.pprint.t_cljs$pprint50397(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta50398__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint50397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_50399){
var self__ = this;
var _50399__$1 = this;
return self__.meta50398;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint50397.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint50397.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__50400 = cljs.core._EQ_;
var expr__50401 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__50400.call(null,String,expr__50401))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__50400.call(null,Number,expr__50401))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__50401)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint50397.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint50397.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint50397.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint50397.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta50398","meta50398",-1782305078,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint50397.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint50397.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint50397";

cljs.pprint.t_cljs$pprint50397.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.pprint/t_cljs$pprint50397");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint50397 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint50397(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta50398){
return (new cljs.pprint.t_cljs$pprint50397(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta50398));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint50397(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__5278__auto___50405 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5278__auto___50405)){
var cb_50406 = temp__5278__auto___50405;
cb_50406.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__5278__auto___50407 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5278__auto___50407)){
var cb_50408 = temp__5278__auto___50407;
cb_50408.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_50409 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_50410 = (oldpos_50409 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_50410);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_50409,newpos_50410));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__50411 = cljs.core._EQ_;
var expr__50412 = relative_to;
if(cljs.core.truth_(pred__50411.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__50412))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__50411.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__50412))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__50412)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__50416_SHARP_){
var temp__5278__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__50416_SHARP_));
if(cljs.core.truth_(temp__5278__auto__)){
var v = temp__5278__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__50416_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__30060__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__30060__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__30060__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__30060__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__30060__auto__)){
var and__30060__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__30060__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__30060__auto____$1;
}
} else {
return and__30060__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50449 = arguments.length;
var i__31350__auto___50450 = (0);
while(true){
if((i__31350__auto___50450 < len__31349__auto___50449)){
args__31356__auto__.push((arguments[i__31350__auto___50450]));

var G__50451 = (i__31350__auto___50450 + (1));
i__31350__auto___50450 = G__50451;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR_50432 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_50433 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_50434 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_50435 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_50436 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_50437 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_50438 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_50439 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_50440 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_50441 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_50442 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_50443 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__33645__auto___50474 = base_writer;
var new_writer__33646__auto___50475 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__33645__auto___50474));
var _STAR_out_STAR_50444_50476 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__33646__auto___50475)?cljs.pprint.make_pretty_writer.call(null,base_writer__33645__auto___50474,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__33645__auto___50474);

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_50444_50476;
}} else {
var _STAR_out_STAR_50448_50478 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_50448_50478;
}}

if(optval === true){
cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_50443;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_50442;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_50441;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_50440;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_50439;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_50438;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_50437;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_50436;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50435;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_50434;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_50433;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_50432;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq50430){
var G__50431 = cljs.core.first.call(null,seq50430);
var seq50430__$1 = cljs.core.next.call(null,seq50430);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__50431,seq50430__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__50480 = arguments.length;
switch (G__50480) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_50482 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_50482;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__33645__auto__ = writer;
var new_writer__33646__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__33645__auto__));
var _STAR_out_STAR_50483 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__33646__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__33645__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__33645__auto__);

try{var _STAR_print_pretty_STAR_50484_50490 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_50484_50490;
}
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_)))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_50483;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__30060__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__30060__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__30060__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50506 = arguments.length;
var i__31350__auto___50508 = (0);
while(true){
if((i__31350__auto___50508 < len__31349__auto___50506)){
args__31356__auto__.push((arguments[i__31350__auto___50508]));

var G__50511 = (i__31350__auto___50508 + (1));
i__31350__auto___50508 = G__50511;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((2) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31357__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq50503){
var G__50504 = cljs.core.first.call(null,seq50503);
var seq50503__$1 = cljs.core.next.call(null,seq50503);
var G__50505 = cljs.core.first.call(null,seq50503__$1);
var seq50503__$2 = cljs.core.next.call(null,seq50503__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__50504,G__50505,seq50503__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30760__auto__,k__30761__auto__){
var self__ = this;
var this__30760__auto____$1 = this;
return this__30760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30761__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30762__auto__,k50522,else__30763__auto__){
var self__ = this;
var this__30762__auto____$1 = this;
var G__50527 = k50522;
var G__50527__$1 = (((G__50527 instanceof cljs.core.Keyword))?G__50527.fqn:null);
switch (G__50527__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50522,else__30763__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30774__auto__,writer__30775__auto__,opts__30776__auto__){
var self__ = this;
var this__30774__auto____$1 = this;
var pr_pair__30777__auto__ = ((function (this__30774__auto____$1){
return (function (keyval__30778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,cljs.core.pr_writer,""," ","",opts__30776__auto__,keyval__30778__auto__);
});})(this__30774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,pr_pair__30777__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__30776__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50521){
var self__ = this;
var G__50521__$1 = this;
return (new cljs.core.RecordIter((0),G__50521__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30758__auto__){
var self__ = this;
var this__30758__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30755__auto__){
var self__ = this;
var this__30755__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30764__auto__){
var self__ = this;
var this__30764__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30756__auto__){
var self__ = this;
var this__30756__auto____$1 = this;
var h__30528__auto__ = self__.__hash;
if(!((h__30528__auto__ == null))){
return h__30528__auto__;
} else {
var h__30528__auto____$1 = ((function (h__30528__auto__,this__30756__auto____$1){
return (function (coll__30757__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__30757__auto__));
});})(h__30528__auto__,this__30756__auto____$1))
.call(null,this__30756__auto____$1);
self__.__hash = h__30528__auto____$1;

return h__30528__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50523,other50524){
var self__ = this;
var this50523__$1 = this;
return (!((other50524 == null))) && ((this50523__$1.constructor === other50524.constructor)) && (cljs.core._EQ_.call(null,this50523__$1.seq,other50524.seq)) && (cljs.core._EQ_.call(null,this50523__$1.rest,other50524.rest)) && (cljs.core._EQ_.call(null,this50523__$1.pos,other50524.pos)) && (cljs.core._EQ_.call(null,this50523__$1.__extmap,other50524.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30769__auto__,k__30770__auto__){
var self__ = this;
var this__30769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__30770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30769__auto____$1),self__.__meta),k__30770__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30770__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30767__auto__,k__30768__auto__,G__50521){
var self__ = this;
var this__30767__auto____$1 = this;
var pred__50533 = cljs.core.keyword_identical_QMARK_;
var expr__50534 = k__30768__auto__;
if(cljs.core.truth_(pred__50533.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__50534))){
return (new cljs.pprint.arg_navigator(G__50521,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50533.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__50534))){
return (new cljs.pprint.arg_navigator(self__.seq,G__50521,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50533.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__50534))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__50521,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30768__auto__,G__50521),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30772__auto__){
var self__ = this;
var this__30772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30759__auto__,G__50521){
var self__ = this;
var this__30759__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__50521,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30765__auto__,entry__30766__auto__){
var self__ = this;
var this__30765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30766__auto__)){
return this__30765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30766__auto__,(0)),cljs.core._nth.call(null,entry__30766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30765__auto____$1,entry__30766__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__30798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__30798__auto__,writer__30799__auto__){
return cljs.core._write.call(null,writer__30799__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__50525){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__50525),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__50525),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__50525),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50525,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__50587 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__50587,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__50587,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30760__auto__,k__30761__auto__){
var self__ = this;
var this__30760__auto____$1 = this;
return this__30760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30761__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30762__auto__,k50614,else__30763__auto__){
var self__ = this;
var this__30762__auto____$1 = this;
var G__50626 = k50614;
var G__50626__$1 = (((G__50626 instanceof cljs.core.Keyword))?G__50626.fqn:null);
switch (G__50626__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50614,else__30763__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30774__auto__,writer__30775__auto__,opts__30776__auto__){
var self__ = this;
var this__30774__auto____$1 = this;
var pr_pair__30777__auto__ = ((function (this__30774__auto____$1){
return (function (keyval__30778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,cljs.core.pr_writer,""," ","",opts__30776__auto__,keyval__30778__auto__);
});})(this__30774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30775__auto__,pr_pair__30777__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__30776__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50613){
var self__ = this;
var G__50613__$1 = this;
return (new cljs.core.RecordIter((0),G__50613__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30758__auto__){
var self__ = this;
var this__30758__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30755__auto__){
var self__ = this;
var this__30755__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30764__auto__){
var self__ = this;
var this__30764__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30756__auto__){
var self__ = this;
var this__30756__auto____$1 = this;
var h__30528__auto__ = self__.__hash;
if(!((h__30528__auto__ == null))){
return h__30528__auto__;
} else {
var h__30528__auto____$1 = ((function (h__30528__auto__,this__30756__auto____$1){
return (function (coll__30757__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__30757__auto__));
});})(h__30528__auto__,this__30756__auto____$1))
.call(null,this__30756__auto____$1);
self__.__hash = h__30528__auto____$1;

return h__30528__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50615,other50616){
var self__ = this;
var this50615__$1 = this;
return (!((other50616 == null))) && ((this50615__$1.constructor === other50616.constructor)) && (cljs.core._EQ_.call(null,this50615__$1.func,other50616.func)) && (cljs.core._EQ_.call(null,this50615__$1.def,other50616.def)) && (cljs.core._EQ_.call(null,this50615__$1.params,other50616.params)) && (cljs.core._EQ_.call(null,this50615__$1.offset,other50616.offset)) && (cljs.core._EQ_.call(null,this50615__$1.__extmap,other50616.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30769__auto__,k__30770__auto__){
var self__ = this;
var this__30769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__30770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30769__auto____$1),self__.__meta),k__30770__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30770__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30767__auto__,k__30768__auto__,G__50613){
var self__ = this;
var this__30767__auto____$1 = this;
var pred__50656 = cljs.core.keyword_identical_QMARK_;
var expr__50657 = k__30768__auto__;
if(cljs.core.truth_(pred__50656.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__50657))){
return (new cljs.pprint.compiled_directive(G__50613,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50656.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__50657))){
return (new cljs.pprint.compiled_directive(self__.func,G__50613,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50656.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__50657))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__50613,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50656.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__50657))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__50613,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30768__auto__,G__50613),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30772__auto__){
var self__ = this;
var this__30772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30759__auto__,G__50613){
var self__ = this;
var this__30759__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__50613,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30765__auto__,entry__30766__auto__){
var self__ = this;
var this__30765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30766__auto__)){
return this__30765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30766__auto__,(0)),cljs.core._nth.call(null,entry__30766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30765__auto____$1,entry__30766__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__30798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__30798__auto__,writer__30799__auto__){
return cljs.core._write.call(null,writer__30799__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__50617){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__50617),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__50617),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__50617),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__50617),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50617,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__50758,navigator){
var vec__50759 = p__50758;
var param = cljs.core.nth.call(null,vec__50759,(0),null);
var vec__50762 = cljs.core.nth.call(null,vec__50759,(1),null);
var raw_val = cljs.core.nth.call(null,vec__50762,(0),null);
var offset = cljs.core.nth.call(null,vec__50762,(1),null);
var vec__50765 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__50765,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__50765,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__50775 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__50775,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__50775,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__30072__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__50778 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__50778,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__50778,(1),null);
var base_output = (function (){var or__30072__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__50787_SHARP_){
if((p1__50787_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__50787_SHARP_,base),cljs.core.quot.call(null,p1__50787_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__50793_SHARP_){
if((p1__50793_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__50793_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__50793_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__50815 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__50815,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__50815,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_.call(null,arg))){
var neg_50834 = (arg < (0));
var pos_arg_50835 = ((neg_50834)?(- arg):arg);
var raw_str_50836 = cljs.pprint.opt_base_str.call(null,base,pos_arg_50835);
var group_str_50837 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_50834,pos_arg_50835,raw_str_50836,vec__50815,arg,arg_navigator__$1){
return (function (p1__50814_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__50814_SHARP_);
});})(neg_50834,pos_arg_50835,raw_str_50836,vec__50815,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_50836));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_50836);
var signed_str_50838 = ((neg_50834)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_50837)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_50837)].join(''):group_str_50837
));
var padded_str_50839 = (((signed_str_50838.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_50838.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_50838)].join(''):signed_str_50838);
cljs.pprint.print.call(null,padded_str_50839);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,this$))) && (!(cljs.core.empty_QMARK_.call(null,acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__50893 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__50894 = (pos - (1));
var G__50895 = cljs.core.first.call(null,remainder);
var G__50896 = cljs.core.next.call(null,remainder);
acc = G__50893;
pos = G__50894;
this$ = G__50895;
remainder = G__50896;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__50904 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__50904,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__50904,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_50910 = (((arg < (0)))?(- arg):arg);
var parts_50911 = cljs.pprint.remainders.call(null,(1000),abs_arg_50910);
if((cljs.core.count.call(null,parts_50911) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_50916 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_50911);
var full_str_50917 = cljs.pprint.add_english_scales.call(null,parts_strs_50916,(0));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_50917)].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__50928 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__50928,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__50928,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_50940 = (((arg < (0)))?(- arg):arg);
var parts_50941 = cljs.pprint.remainders.call(null,(1000),abs_arg_50940);
if((cljs.core.count.call(null,parts_50941) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_50942 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_50941));
var head_str_50943 = cljs.pprint.add_english_scales.call(null,parts_strs_50942,(1));
var tail_str_50944 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_50941));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,head_str_50943))) && (!(cljs.core.empty_QMARK_.call(null,tail_str_50944))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_50943),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_50944)].join(''):((!(cljs.core.empty_QMARK_.call(null,head_str_50943)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_50943),"th"].join(''):tail_str_50944
)))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_50951 = cljs.core.rem.call(null,arg,(100));
var not_teens_50952 = (((11) < low_two_digits_50951)) || (((19) > low_two_digits_50951));
var low_digit_50953 = cljs.core.rem.call(null,low_two_digits_50951,(10));
cljs.pprint.print.call(null,((((low_digit_50953 === (1))) && (not_teens_50952))?"st":((((low_digit_50953 === (2))) && (not_teens_50952))?"nd":((((low_digit_50953 === (3))) && (not_teens_50952))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__50961 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__50961,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__50961,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_50973 = cljs.pprint.remainders.call(null,(10),arg);
var acc_50974 = cljs.core.PersistentVector.EMPTY;
var pos_50975 = (cljs.core.count.call(null,digits_50973) - (1));
var digits_50976__$1 = digits_50973;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_50976__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_50974));
} else {
var digit_50977 = cljs.core.first.call(null,digits_50976__$1);
var G__50978 = ((cljs.core._EQ_.call(null,(0),digit_50977))?acc_50974:cljs.core.conj.call(null,acc_50974,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_50975),(digit_50977 - (1)))));
var G__50979 = (pos_50975 - (1));
var G__50980 = cljs.core.next.call(null,digits_50976__$1);
acc_50974 = G__50978;
pos_50975 = G__50979;
digits_50976__$1 = G__50980;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__50994 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__50994,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__50994,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__51006 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__51006,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51006,(1),null);
var pred__51009_51012 = cljs.core._EQ_;
var expr__51010_51013 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__51009_51012.call(null,"o",expr__51010_51013))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__51009_51012.call(null,"u",expr__51010_51013))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__51009_51012.call(null,null,expr__51010_51013))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__51010_51013)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__51016 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__51016,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51016,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__51026 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__51026,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__51026,(1),null);
var vec__51029 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__51029,(0),null);
var offsets = cljs.core.nth.call(null,vec__51029,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__51050 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__51050,(0),null);
var e = cljs.core.nth.call(null,vec__51050,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = ((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+")))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__51060 = (i - (1));
i = G__51060;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__30072__auto__ = d;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__30424__auto__ = (2);
var y__30425__auto__ = w;
return ((x__30424__auto__ > y__30425__auto__) ? x__30424__auto__ : y__30425__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__30424__auto__ = (e + (1));
var y__30425__auto__ = (w__$1 - (1));
return ((x__30424__auto__ > y__30425__auto__) ? x__30424__auto__ : y__30425__auto__);
})():(w__$1 + e)
));
var vec__51061 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__51061,(0),null);
var e1 = cljs.core.nth.call(null,vec__51061,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__51061,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__51061,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__51065 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__51065,(0),null);
var e1 = cljs.core.nth.call(null,vec__51065,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__51078 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__51078,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51078,(1),null);
var vec__51081 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__51081,(0),null);
var abs = cljs.core.nth.call(null,vec__51081,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__51084 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__51084,(0),null);
var exp = cljs.core.nth.call(null,vec__51084,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__30072__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp));
var vec__51087 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__51087,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__51087,(1),null);
var expanded = cljs.core.nth.call(null,vec__51087,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__30060__auto__ = w;
if(cljs.core.truth_(and__30060__auto__)){
var and__30060__auto____$1 = d;
if(cljs.core.truth_(and__30060__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__30060__auto____$1;
}
} else {
return and__30060__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_51102 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_51103 = (cljs.core.truth_(add_sign)?(len_51102 + (1)):len_51102);
var prepend_zero_51104__$1 = (prepend_zero) && (!((signed_len_51103 >= w)));
var append_zero_51105__$1 = (append_zero) && (!((signed_len_51103 >= w)));
var full_len_51106 = (((prepend_zero_51104__$1) || (append_zero_51105__$1))?(signed_len_51103 + (1)):signed_len_51103);
if(cljs.core.truth_((function (){var and__30060__auto__ = (full_len_51106 > w);
if(and__30060__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__30060__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_51106),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_51104__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_51105__$1)?"0":null))].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__51117 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__51117,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51117,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__51133_51147 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__51134_51148 = G__51133_51147;
var mantissa_51149 = cljs.core.nth.call(null,vec__51134_51148,(0),null);
var exp_51150 = cljs.core.nth.call(null,vec__51134_51148,(1),null);
var G__51133_51151__$1 = G__51133_51147;
while(true){
var vec__51137_51152 = G__51133_51151__$1;
var mantissa_51153__$1 = cljs.core.nth.call(null,vec__51137_51152,(0),null);
var exp_51154__$1 = cljs.core.nth.call(null,vec__51137_51152,(1),null);
var w_51156 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_51157 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_51158 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_51159 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_51160 = (function (){var or__30072__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return "E";
}
})();
var add_sign_51161 = (function (){var or__30072__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_51162 = (k_51159 <= (0));
var scaled_exp_51163 = (exp_51154__$1 - (k_51159 - (1)));
var scaled_exp_str_51164 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_51163))].join('');
var scaled_exp_str_51165__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_51160),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_51163 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_51158)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_51158 - cljs.core.count.call(null,scaled_exp_str_51164)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_51164)].join('');
var exp_width_51166 = cljs.core.count.call(null,scaled_exp_str_51165__$1);
var base_mantissa_width_51167 = cljs.core.count.call(null,mantissa_51153__$1);
var scaled_mantissa_51168 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_51159),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_51153__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_51157)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_51157 - (base_mantissa_width_51167 - (1))) - (((k_51159 < (0)))?(- k_51159):(0))),"0")):null))].join('');
var w_mantissa_51169 = (cljs.core.truth_(w_51156)?(w_51156 - exp_width_51166):null);
var vec__51140_51170 = cljs.pprint.round_str.call(null,scaled_mantissa_51168,(0),((cljs.core._EQ_.call(null,k_51159,(0)))?(d_51157 - (1)):(((k_51159 > (0)))?d_51157:(((k_51159 < (0)))?(d_51157 - (1)):null))),(cljs.core.truth_(w_mantissa_51169)?(w_mantissa_51169 - (cljs.core.truth_(add_sign_51161)?(1):(0))):null));
var rounded_mantissa_51171 = cljs.core.nth.call(null,vec__51140_51170,(0),null);
var __51172 = cljs.core.nth.call(null,vec__51140_51170,(1),null);
var incr_exp_51173 = cljs.core.nth.call(null,vec__51140_51170,(2),null);
var full_mantissa_51174 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_51171,k_51159);
var append_zero_51175 = (cljs.core._EQ_.call(null,k_51159,cljs.core.count.call(null,rounded_mantissa_51171))) && ((d_51157 == null));
if(cljs.core.not.call(null,incr_exp_51173)){
if(cljs.core.truth_(w_51156)){
var len_51177 = (cljs.core.count.call(null,full_mantissa_51174) + exp_width_51166);
var signed_len_51178 = (cljs.core.truth_(add_sign_51161)?(len_51177 + (1)):len_51177);
var prepend_zero_51179__$1 = (prepend_zero_51162) && (!(cljs.core._EQ_.call(null,signed_len_51178,w_51156)));
var full_len_51180 = ((prepend_zero_51179__$1)?(signed_len_51178 + (1)):signed_len_51178);
var append_zero_51181__$1 = (append_zero_51175) && ((full_len_51180 < w_51156));
if(cljs.core.truth_((function (){var and__30060__auto__ = (function (){var or__30072__auto__ = (full_len_51180 > w_51156);
if(or__30072__auto__){
return or__30072__auto__;
} else {
var and__30060__auto__ = e_51158;
if(cljs.core.truth_(and__30060__auto__)){
return ((exp_width_51166 - (2)) > e_51158);
} else {
return and__30060__auto__;
}
}
})();
if(cljs.core.truth_(and__30060__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__30060__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_51156,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_51156 - full_len_51180) - ((append_zero_51181__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_51161)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_51179__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_51174),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_51181__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_51165__$1)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_51161)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_51162)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_51174),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_51175)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_51165__$1)].join(''));
}
} else {
var G__51189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_51171,(exp_51154__$1 + (1))], null);
G__51133_51151__$1 = G__51189;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__51190 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__51190,(0),null);
var _ = cljs.core.nth.call(null,vec__51190,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__51193 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__51193,(0),null);
var exp = cljs.core.nth.call(null,vec__51193,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__30424__auto__ = cljs.core.count.call(null,mantissa);
var y__30425__auto__ = (function (){var x__30431__auto__ = n;
var y__30432__auto__ = (7);
return ((x__30431__auto__ < y__30432__auto__) ? x__30431__auto__ : y__30432__auto__);
})();
return ((x__30424__auto__ > y__30425__auto__) ? x__30424__auto__ : y__30425__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__51201 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__51201,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51201,(1),null);
var vec__51204 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__51204,(0),null);
var exp = cljs.core.nth.call(null,vec__51204,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__30072__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (arg < (0));
}
})();
var vec__51207 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__51207,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__51207,(1),null);
var expanded = cljs.core.nth.call(null,vec__51207,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__30060__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__30060__auto__)){
return add_sign;
} else {
return and__30060__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__30060__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__30060__auto__){
return add_sign;
} else {
return and__30060__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__51219 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__51219,(0),null);
var navigator = cljs.core.nth.call(null,vec__51219,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__51222 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__51222,(0),null);
var navigator = cljs.core.nth.call(null,vec__51222,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__51227 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__51227,(0),null);
var navigator = cljs.core.nth.call(null,vec__51227,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__51230 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__51230,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51230,(1),null);
var vec__51233 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__51233,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__51233,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__30072__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__30072__auto__){
return or__30072__auto__;
} else {
var and__30060__auto__ = max_count;
if(cljs.core.truth_(and__30060__auto__)){
return (count >= max_count);
} else {
return and__30060__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__51240 = (count + (1));
var G__51241 = iter_result;
var G__51242 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__51240;
args__$1 = G__51241;
last_pos = G__51242;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__51246 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__51246,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51246,(1),null);
var vec__51249 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__51249,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__51249,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__30072__auto__ = (cljs.core.empty_QMARK_.call(null,arg_list__$1)) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__30072__auto__){
return or__30072__auto__;
} else {
var and__30060__auto__ = max_count;
if(cljs.core.truth_(and__30060__auto__)){
return (count >= max_count);
} else {
return and__30060__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__51256 = (count + (1));
var G__51257 = cljs.core.next.call(null,arg_list__$1);
count = G__51256;
arg_list__$1 = G__51257;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__51259 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__51259,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51259,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__30072__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__30072__auto__){
return or__30072__auto__;
} else {
var and__30060__auto__ = max_count;
if(cljs.core.truth_(and__30060__auto__)){
return (count >= max_count);
} else {
return and__30060__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__51263 = (count + (1));
var G__51264 = iter_result;
var G__51265 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__51263;
navigator__$2 = G__51264;
last_pos = G__51265;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__51266 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__51266,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51266,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__30072__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__30072__auto__){
return or__30072__auto__;
} else {
var and__30060__auto__ = max_count;
if(cljs.core.truth_(and__30060__auto__)){
return (count >= max_count);
} else {
return and__30060__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__51269 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__51269,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__51269,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__51272 = (count + (1));
var G__51273 = navigator__$3;
count = G__51272;
navigator__$2 = G__51273;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__51274 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_51277 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_51277;
}})();
var iter_result = cljs.core.nth.call(null,vec__51274,(0),null);
var result_str = cljs.core.nth.call(null,vec__51274,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__51298 = cljs.core.next.call(null,clauses__$1);
var G__51299 = cljs.core.conj.call(null,acc,result_str);
var G__51300 = iter_result;
clauses__$1 = G__51298;
acc = G__51299;
navigator__$1 = G__51300;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__51301 = (function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5278__auto__)){
var else$ = temp__5278__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__51304 = cljs.core.nth.call(null,vec__51301,(0),null);
var eol_str = cljs.core.nth.call(null,vec__51304,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__51301,(1),null);
var navigator__$1 = (function (){var or__30072__auto__ = new_navigator;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return navigator;
}
})();
var vec__51307 = (function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5278__auto__)){
var p = temp__5278__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__51307,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__51307,(1),null);
var navigator__$2 = (function (){var or__30072__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__30072__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__30072__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__51310 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__51310,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__51310,(1),null);
var slots = (function (){var x__30424__auto__ = (1);
var y__30425__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__30424__auto__ > y__30425__auto__) ? x__30424__auto__ : y__30425__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__30424__auto__ = minpad;
var y__30425__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__30424__auto__ > y__30425__auto__) ? x__30424__auto__ : y__30425__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__30060__auto__ = eol_str;
if(cljs.core.truth_(and__30060__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__30060__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_51345__$1 = slots;
var extra_pad_51346__$1 = extra_pad;
var strs_51347__$1 = strs;
var pad_only_51348 = (function (){var or__30072__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_51347__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_51347__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_51348))?cljs.core.first.call(null,strs_51347__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__30072__auto__ = pad_only_51348;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var or__30072__auto____$1 = cljs.core.next.call(null,strs_51347__$1);
if(or__30072__auto____$1){
return or__30072__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_51346__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__51349 = (slots_51345__$1 - (1));
var G__51350 = (extra_pad_51346__$1 - (1));
var G__51351 = (cljs.core.truth_(pad_only_51348)?strs_51347__$1:cljs.core.next.call(null,strs_51347__$1));
var G__51352 = false;
slots_51345__$1 = G__51349;
extra_pad_51346__$1 = G__51350;
strs_51347__$1 = G__51351;
pad_only_51348 = G__51352;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint51354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint51354 = (function (writer,meta51355){
this.writer = writer;
this.meta51355 = meta51355;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint51354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51356,meta51355__$1){
var self__ = this;
var _51356__$1 = this;
return (new cljs.pprint.t_cljs$pprint51354(self__.writer,meta51355__$1));
});

cljs.pprint.t_cljs$pprint51354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51356){
var self__ = this;
var _51356__$1 = this;
return self__.meta51355;
});

cljs.pprint.t_cljs$pprint51354.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint51354.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__51357 = cljs.core._EQ_;
var expr__51358 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__51357.call(null,String,expr__51358))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__51357.call(null,Number,expr__51358))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__51358)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint51354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta51355","meta51355",-1654144640,null)], null);
});

cljs.pprint.t_cljs$pprint51354.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint51354.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint51354";

cljs.pprint.t_cljs$pprint51354.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.pprint/t_cljs$pprint51354");
});

cljs.pprint.__GT_t_cljs$pprint51354 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint51354(writer__$1,meta51355){
return (new cljs.pprint.t_cljs$pprint51354(writer__$1,meta51355));
});

}

return (new cljs.pprint.t_cljs$pprint51354(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint51362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint51362 = (function (writer,meta51363){
this.writer = writer;
this.meta51363 = meta51363;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint51362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51364,meta51363__$1){
var self__ = this;
var _51364__$1 = this;
return (new cljs.pprint.t_cljs$pprint51362(self__.writer,meta51363__$1));
});

cljs.pprint.t_cljs$pprint51362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51364){
var self__ = this;
var _51364__$1 = this;
return self__.meta51363;
});

cljs.pprint.t_cljs$pprint51362.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint51362.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__51365 = cljs.core._EQ_;
var expr__51366 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__51365.call(null,String,expr__51366))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__51365.call(null,Number,expr__51366))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__51366)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint51362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta51363","meta51363",-1299630810,null)], null);
});

cljs.pprint.t_cljs$pprint51362.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint51362.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint51362";

cljs.pprint.t_cljs$pprint51362.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.pprint/t_cljs$pprint51362");
});

cljs.pprint.__GT_t_cljs$pprint51362 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint51362(writer__$1,meta51363){
return (new cljs.pprint.t_cljs$pprint51362(writer__$1,meta51363));
});

}

return (new cljs.pprint.t_cljs$pprint51362(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__30060__auto__ = first_QMARK_;
if(cljs.core.truth_(and__30060__auto__)){
var and__30060__auto____$1 = f;
if(cljs.core.truth_(and__30060__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__30060__auto____$1;
}
} else {
return and__30060__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__30060__auto__ = m;
if(cljs.core.truth_(and__30060__auto__)){
return (m.index + (1));
} else {
return and__30060__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if(typeof cljs.pprint.t_cljs$pprint51368 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint51368 = (function (writer,last_was_whitespace_QMARK_,meta51369){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta51369 = meta51369;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint51368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_51370,meta51369__$1){
var self__ = this;
var _51370__$1 = this;
return (new cljs.pprint.t_cljs$pprint51368(self__.writer,self__.last_was_whitespace_QMARK_,meta51369__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint51368.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_51370){
var self__ = this;
var _51370__$1 = this;
return self__.meta51369;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint51368.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint51368.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__51371 = cljs.core._EQ_;
var expr__51372 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__51371.call(null,String,expr__51372))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__51371.call(null,Number,expr__51372))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__51372)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint51368.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta51369","meta51369",-2104048657,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint51368.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint51368.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint51368";

cljs.pprint.t_cljs$pprint51368.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.pprint/t_cljs$pprint51368");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint51368 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint51368(writer__$1,last_was_whitespace_QMARK___$1,meta51369){
return (new cljs.pprint.t_cljs$pprint51368(writer__$1,last_was_whitespace_QMARK___$1,meta51369));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint51368(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if(typeof cljs.pprint.t_cljs$pprint51385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint51385 = (function (writer,capped,meta51386){
this.writer = writer;
this.capped = capped;
this.meta51386 = meta51386;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint51385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_51387,meta51386__$1){
var self__ = this;
var _51387__$1 = this;
return (new cljs.pprint.t_cljs$pprint51385(self__.writer,self__.capped,meta51386__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint51385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_51387){
var self__ = this;
var _51387__$1 = this;
return self__.meta51386;
});})(capped))
;

cljs.pprint.t_cljs$pprint51385.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint51385.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__51388 = cljs.core._EQ_;
var expr__51389 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__51388.call(null,String,expr__51389))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__30060__auto__ = m;
if(cljs.core.truth_(and__30060__auto__)){
return m.index;
} else {
return and__30060__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__51388.call(null,Number,expr__51389))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__30060__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__30060__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__30060__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__51389)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint51385.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta51386","meta51386",1188309201,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint51385.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint51385.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint51385";

cljs.pprint.t_cljs$pprint51385.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.pprint/t_cljs$pprint51385");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint51385 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint51385(writer__$1,capped__$1,meta51386){
return (new cljs.pprint.t_cljs$pprint51385(writer__$1,capped__$1,meta51386));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint51385(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_51392 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = make_writer.call(null,cljs.core._STAR_out_STAR_);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_51392;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_51402 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_51403 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_51404 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_51405 = (((current_51404 < colnum_51402))?(colnum_51402 - current_51404):((cljs.core._EQ_.call(null,colinc_51403,(0)))?(0):(colinc_51403 - cljs.core.rem.call(null,(current_51404 - colnum_51402),colinc_51403))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_51405," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_51409 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_51410 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_51411 = (colrel_51409 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_51412 = (((colinc_51410 > (0)))?cljs.core.rem.call(null,start_col_51411,colinc_51410):(0));
var space_count_51413 = (colrel_51409 + ((cljs.core._EQ_.call(null,(0),offset_51412))?(0):(colinc_51410 - offset_51412)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_51413," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__51424 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__51424,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51424,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51430_51455 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51431_51456 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51431_51456;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51430_51455;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__51457_SHARP_,p2__51458_SHARP_,p3__51459_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__51457_SHARP_,p2__51458_SHARP_,p3__51459_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__51460_SHARP_,p2__51461_SHARP_,p3__51462_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__51460_SHARP_,p2__51461_SHARP_,p3__51462_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__51463_SHARP_,p2__51464_SHARP_,p3__51465_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__51463_SHARP_,p2__51464_SHARP_,p3__51465_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__51466_SHARP_,p2__51467_SHARP_,p3__51468_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__51466_SHARP_,p2__51467_SHARP_,p3__51468_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__51469_SHARP_,p2__51470_SHARP_,p3__51471_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__51469_SHARP_,p2__51470_SHARP_,p3__51471_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__51472_SHARP_,p2__51473_SHARP_,p3__51474_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__51472_SHARP_,p2__51473_SHARP_,p3__51474_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__51475_SHARP_,p2__51476_SHARP_,p3__51477_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__51475_SHARP_),p1__51475_SHARP_,p2__51476_SHARP_,p3__51477_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__30060__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__30060__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__30060__auto__;
}
})())){
return (function (p1__51478_SHARP_,p2__51479_SHARP_,p3__51480_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__51478_SHARP_,p2__51479_SHARP_,p3__51480_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__51481_SHARP_,p2__51482_SHARP_,p3__51483_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__51481_SHARP_,p2__51482_SHARP_,p3__51483_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__51484_SHARP_,p2__51485_SHARP_,p3__51486_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__51484_SHARP_,p2__51485_SHARP_,p3__51486_SHARP_);
});
} else {
return (function (p1__51487_SHARP_,p2__51488_SHARP_,p3__51489_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__51487_SHARP_,p2__51488_SHARP_,p3__51489_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__51500 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__51500,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__51500,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__31115__auto___51527 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_51528 = (0);
while(true){
if((i_51528 < n__31115__auto___51527)){
cljs.pprint.prn.call(null);

var G__51529 = (i_51528 + (1));
i_51528 = G__51529;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_51530 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_51530 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__31115__auto___51531 = (cnt_51530 - (1));
var i_51532 = (0);
while(true){
if((i_51532 < n__31115__auto___51531)){
cljs.pprint.prn.call(null);

var G__51533 = (i_51532 + (1));
i_51532 = G__51533;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__31115__auto___51534 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_51535 = (0);
while(true){
if((i_51535 < n__31115__auto___51534)){
cljs.pprint.print.call(null,"\f");

var G__51536 = (i_51535 + (1));
i_51535 = G__51536;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__51490_SHARP_,p2__51491_SHARP_,p3__51492_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__51490_SHARP_,p2__51491_SHARP_,p3__51492_SHARP_);
});
} else {
return (function (p1__51493_SHARP_,p2__51494_SHARP_,p3__51495_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__51493_SHARP_,p2__51494_SHARP_,p3__51495_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__51503 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__51503,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51503,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__51506 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__51506,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51506,(1),null);
var vec__51509 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__51509,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__51509,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__30060__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__30060__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__30060__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__51496_SHARP_,p2__51497_SHARP_,p3__51498_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__51496_SHARP_,p2__51497_SHARP_,p3__51498_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__30060__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__30060__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__30060__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__30060__auto__ = arg1;
if(cljs.core.truth_(and__30060__auto__)){
var and__30060__auto____$1 = arg2;
if(cljs.core.truth_(and__30060__auto____$1)){
return arg3;
} else {
return and__30060__auto____$1;
}
} else {
return and__30060__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__30060__auto__ = arg1;
if(cljs.core.truth_(and__30060__auto__)){
return arg2;
} else {
return and__30060__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__30072__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__51512 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__51512,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51512,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__51515 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__51515,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__51515,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__51558){
var vec__51559 = p__51558;
var s = cljs.core.nth.call(null,vec__51559,(0),null);
var offset = cljs.core.nth.call(null,vec__51559,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__51559,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__51571){
var vec__51572 = p__51571;
var p = cljs.core.nth.call(null,vec__51572,(0),null);
var offset = cljs.core.nth.call(null,vec__51572,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):(((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0)))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__51576){
var vec__51577 = p__51576;
var s__$1 = cljs.core.nth.call(null,vec__51577,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__51577,(1),null);
var flags = cljs.core.nth.call(null,vec__51577,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__30060__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__30060__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__30060__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__30060__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__30060__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__30060__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__30060__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__30060__auto__){
var and__30060__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__30060__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__30060__auto____$1;
}
} else {
return and__30060__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__30431__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__30432__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__30431__auto__ < y__30432__auto__) ? x__30431__auto__ : y__30432__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__51586_SHARP_,p2__51587_SHARP_){
var val = cljs.core.first.call(null,p1__51586_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__51587_SHARP_)),cljs.core.type.call(null,val))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,p2__51587_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__51586_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__30954__auto__ = (function cljs$pprint$map_params_$_iter__51591(s__51592){
return (new cljs.core.LazySeq(null,(function (){
var s__51592__$1 = s__51592;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__51592__$1);
if(temp__5278__auto__){
var s__51592__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51592__$2)){
var c__30952__auto__ = cljs.core.chunk_first.call(null,s__51592__$2);
var size__30953__auto__ = cljs.core.count.call(null,c__30952__auto__);
var b__51594 = cljs.core.chunk_buffer.call(null,size__30953__auto__);
if((function (){var i__51593 = (0);
while(true){
if((i__51593 < size__30953__auto__)){
var vec__51595 = cljs.core._nth.call(null,c__30952__auto__,i__51593);
var name = cljs.core.nth.call(null,vec__51595,(0),null);
var vec__51598 = cljs.core.nth.call(null,vec__51595,(1),null);
var default$ = cljs.core.nth.call(null,vec__51598,(0),null);
cljs.core.chunk_append.call(null,b__51594,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__51625 = (i__51593 + (1));
i__51593 = G__51625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51594),cljs$pprint$map_params_$_iter__51591.call(null,cljs.core.chunk_rest.call(null,s__51592__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51594),null);
}
} else {
var vec__51601 = cljs.core.first.call(null,s__51592__$2);
var name = cljs.core.nth.call(null,vec__51601,(0),null);
var vec__51604 = cljs.core.nth.call(null,vec__51601,(1),null);
var default$ = cljs.core.nth.call(null,vec__51604,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__51591.call(null,cljs.core.rest.call(null,s__51592__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30954__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__51588_SHARP_,p2__51589_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__51588_SHARP_,p2__51589_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__51590_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__51590_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__51626 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__51626,(0),null);
var vec__51629 = cljs.core.nth.call(null,vec__51626,(1),null);
var rest = cljs.core.nth.call(null,vec__51629,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__51629,(1),null);
var vec__51632 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__51632,(0),null);
var vec__51635 = cljs.core.nth.call(null,vec__51632,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__51635,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__51635,(1),null);
var flags = cljs.core.nth.call(null,vec__51635,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__30060__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__30060__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__30060__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__51654 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__51654,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__51654,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__51660){
var vec__51661 = p__51660;
var clause_map = cljs.core.nth.call(null,vec__51661,(0),null);
var saw_else = cljs.core.nth.call(null,vec__51661,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__51661,(2),null);
var vec__51664 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__51664,(0),null);
var vec__51667 = cljs.core.nth.call(null,vec__51664,(1),null);
var type = cljs.core.nth.call(null,vec__51667,(0),null);
var right_params = cljs.core.nth.call(null,vec__51667,(1),null);
var else_params = cljs.core.nth.call(null,vec__51667,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__51667,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_51680 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR_51680){
return (function (p__51681){
var vec__51682 = p__51681;
var s = cljs.core.nth.call(null,vec__51682,(0),null);
var offset = cljs.core.nth.call(null,vec__51682,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_51680))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_51680;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__30072__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var or__30072__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__30072__auto____$1)){
return or__30072__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__51685 = cljs.core.next.call(null,format__$1);
format__$1 = G__51685;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__51687 = arguments.length;
switch (G__51687) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not.call(null,stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__30060__auto__ = cljs.pprint.needs_pretty.call(null,format);
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream));
} else {
return and__30060__auto__;
}
})())?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR_51688 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_51688;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__51691 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__51691,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__51691,(1),null);
var vec__51694 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__51694,(0),null);
var offsets = cljs.core.nth.call(null,vec__51694,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__30060__auto__ = macro_char;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__30060__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51704_51711 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51705_51712 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count51706_51713 = (0);
var alis_51714__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count51706_51713 < cljs.core._STAR_print_length_STAR_))){
if(alis_51714__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_51714__$1));

if(cljs.core.next.call(null,alis_51714__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__51719 = (length_count51706_51713 + (1));
var G__51720 = cljs.core.next.call(null,alis_51714__$1);
length_count51706_51713 = G__51719;
alis_51714__$1 = G__51720;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51705_51712;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51704_51711;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51721_51724 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51722_51725 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count51723_51726 = (0);
var aseq_51727 = cljs.core.seq.call(null,avec);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count51723_51726 < cljs.core._STAR_print_length_STAR_))){
if(aseq_51727){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_51727));

if(cljs.core.next.call(null,aseq_51727)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__51728 = (length_count51723_51726 + (1));
var G__51729 = cljs.core.next.call(null,aseq_51727);
length_count51723_51726 = G__51728;
aseq_51727 = G__51729;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51722_51725;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51721_51724;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__33710__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__){
return (function() { 
var G__51730__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51730 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51731__i = 0, G__51731__a = new Array(arguments.length -  0);
while (G__51731__i < G__51731__a.length) {G__51731__a[G__51731__i] = arguments[G__51731__i + 0]; ++G__51731__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51731__a,0,null);
} 
return G__51730__delegate.call(this,args__33712__auto__);};
G__51730.cljs$lang$maxFixedArity = 0;
G__51730.cljs$lang$applyTo = (function (arglist__51732){
var args__33712__auto__ = cljs.core.seq(arglist__51732);
return G__51730__delegate(args__33712__auto__);
});
G__51730.cljs$core$IFn$_invoke$arity$variadic = G__51730__delegate;
return G__51730;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__51733 = ((!(cljs.core.record_QMARK_.call(null,amap)))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",(15),(1),(9804),(9804),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__51733,(0),null);
var lift_map = cljs.core.nth.call(null,vec__51733,(1),null);
var amap__$1 = (function (){var or__30072__auto__ = lift_map;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51736_51741 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51737_51742 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count51738_51743 = (0);
var aseq_51744 = cljs.core.seq.call(null,amap__$1);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count51738_51743 < cljs.core._STAR_print_length_STAR_))){
if(aseq_51744){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51739_51745 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51740_51746 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_51744));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_51744)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51740_51746;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51739_51745;
}}


if(cljs.core.next.call(null,aseq_51744)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__51750 = (length_count51738_51743 + (1));
var G__51751 = cljs.core.next.call(null,aseq_51744);
length_count51738_51743 = G__51750;
aseq_51744 = G__51751;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51737_51742;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51736_51741;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__33710__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__){
return (function() { 
var G__51753__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51753 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51755__i = 0, G__51755__a = new Array(arguments.length -  0);
while (G__51755__i < G__51755__a.length) {G__51755__a[G__51755__i] = arguments[G__51755__i + 0]; ++G__51755__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51755__a,0,null);
} 
return G__51753__delegate.call(this,args__33712__auto__);};
G__51753.cljs$lang$maxFixedArity = 0;
G__51753.cljs$lang$applyTo = (function (arglist__51756){
var args__33712__auto__ = cljs.core.seq(arglist__51756);
return G__51753__delegate(args__33712__auto__);
});
G__51753.cljs$core$IFn$_invoke$arity$variadic = G__51753__delegate;
return G__51753;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__30072__auto__ = (function (){var temp__5278__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5278__auto__)){
var match = temp__5278__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51758_51762 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51759_51763 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__30060__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__30060__auto__){
return !(cljs.core._realized_QMARK_.call(null,o));
} else {
return and__30060__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51759_51763;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51758_51762;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__33710__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__){
return (function() { 
var G__51764__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51764 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51765__i = 0, G__51765__a = new Array(arguments.length -  0);
while (G__51765__i < G__51765__a.length) {G__51765__a[G__51765__i] = arguments[G__51765__i + 0]; ++G__51765__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51765__a,0,null);
} 
return G__51764__delegate.call(this,args__33712__auto__);};
G__51764.cljs$lang$maxFixedArity = 0;
G__51764.cljs$lang$applyTo = (function (arglist__51766){
var args__33712__auto__ = cljs.core.seq(arglist__51766);
return G__51764__delegate(args__33712__auto__);
});
G__51764.cljs$core$IFn$_invoke$arity$variadic = G__51764__delegate;
return G__51764;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__31125__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31126__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31127__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31128__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31129__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31129__auto__,method_table__31125__auto__,prefer_table__31126__auto__,method_cache__31127__auto__,cached_hierarchy__31128__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__51781 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__51781,(0),null);
var end = cljs.core.nth.call(null,vec__51781,(1),null);
var vec__51784 = reference;
var seq__51785 = cljs.core.seq.call(null,vec__51784);
var first__51786 = cljs.core.first.call(null,seq__51785);
var seq__51785__$1 = cljs.core.next.call(null,seq__51785);
var keyw = first__51786;
var args = seq__51785__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51790_51803 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51791_51804 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__33710__auto__ = "~w~:i";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args){
return (function() { 
var G__51808__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51808 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51809__i = 0, G__51809__a = new Array(arguments.length -  0);
while (G__51809__i < G__51809__a.length) {G__51809__a[G__51809__i] = arguments[G__51809__i + 0]; ++G__51809__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51809__a,0,null);
} 
return G__51808__delegate.call(this,args__33712__auto__);};
G__51808.cljs$lang$maxFixedArity = 0;
G__51808.cljs$lang$applyTo = (function (arglist__51810){
var args__33712__auto__ = cljs.core.seq(arglist__51810);
return G__51808__delegate(args__33712__auto__);
});
G__51808.cljs$core$IFn$_invoke$arity$variadic = G__51808__delegate;
return G__51808;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args))
})().call(null,keyw);

var args_51811__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_51811__$1)){
(function (){var format_in__33710__auto__ = " ";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (args_51811__$1,format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args){
return (function() { 
var G__51812__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51812 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51813__i = 0, G__51813__a = new Array(arguments.length -  0);
while (G__51813__i < G__51813__a.length) {G__51813__a[G__51813__i] = arguments[G__51813__i + 0]; ++G__51813__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51813__a,0,null);
} 
return G__51812__delegate.call(this,args__33712__auto__);};
G__51812.cljs$lang$maxFixedArity = 0;
G__51812.cljs$lang$applyTo = (function (arglist__51814){
var args__33712__auto__ = cljs.core.seq(arglist__51814);
return G__51812__delegate(args__33712__auto__);
});
G__51812.cljs$core$IFn$_invoke$arity$variadic = G__51812__delegate;
return G__51812;
})()
;
;})(args_51811__$1,format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args))
})().call(null);

var arg_51815 = cljs.core.first.call(null,args_51811__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_51815)){
var vec__51792_51816 = cljs.pprint.brackets.call(null,arg_51815);
var start_51817__$1 = cljs.core.nth.call(null,vec__51792_51816,(0),null);
var end_51818__$1 = cljs.core.nth.call(null,vec__51792_51816,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51795_51819 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51796_51820 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_51817__$1,null,end_51818__$1);

if((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_51815),(3))) && ((cljs.core.second.call(null,arg_51815) instanceof cljs.core.Keyword))){
var vec__51797_51821 = arg_51815;
var ns_51822 = cljs.core.nth.call(null,vec__51797_51821,(0),null);
var kw_51823 = cljs.core.nth.call(null,vec__51797_51821,(1),null);
var lis_51824 = cljs.core.nth.call(null,vec__51797_51821,(2),null);
(function (){var format_in__33710__auto__ = "~w ~w ";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (args_51811__$1,format_in__33710__auto__,cf__33711__auto__,vec__51797_51821,ns_51822,kw_51823,lis_51824,_STAR_current_level_STAR_51795_51819,_STAR_current_length_STAR_51796_51820,vec__51792_51816,start_51817__$1,end_51818__$1,arg_51815,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args){
return (function() { 
var G__51825__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51825 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51826__i = 0, G__51826__a = new Array(arguments.length -  0);
while (G__51826__i < G__51826__a.length) {G__51826__a[G__51826__i] = arguments[G__51826__i + 0]; ++G__51826__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51826__a,0,null);
} 
return G__51825__delegate.call(this,args__33712__auto__);};
G__51825.cljs$lang$maxFixedArity = 0;
G__51825.cljs$lang$applyTo = (function (arglist__51827){
var args__33712__auto__ = cljs.core.seq(arglist__51827);
return G__51825__delegate(args__33712__auto__);
});
G__51825.cljs$core$IFn$_invoke$arity$variadic = G__51825__delegate;
return G__51825;
})()
;
;})(args_51811__$1,format_in__33710__auto__,cf__33711__auto__,vec__51797_51821,ns_51822,kw_51823,lis_51824,_STAR_current_level_STAR_51795_51819,_STAR_current_length_STAR_51796_51820,vec__51792_51816,start_51817__$1,end_51818__$1,arg_51815,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args))
})().call(null,ns_51822,kw_51823);

if(cljs.core.sequential_QMARK_.call(null,lis_51824)){
(function (){var format_in__33710__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_51824))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (args_51811__$1,format_in__33710__auto__,cf__33711__auto__,vec__51797_51821,ns_51822,kw_51823,lis_51824,_STAR_current_level_STAR_51795_51819,_STAR_current_length_STAR_51796_51820,vec__51792_51816,start_51817__$1,end_51818__$1,arg_51815,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args){
return (function() { 
var G__51828__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51828 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51829__i = 0, G__51829__a = new Array(arguments.length -  0);
while (G__51829__i < G__51829__a.length) {G__51829__a[G__51829__i] = arguments[G__51829__i + 0]; ++G__51829__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51829__a,0,null);
} 
return G__51828__delegate.call(this,args__33712__auto__);};
G__51828.cljs$lang$maxFixedArity = 0;
G__51828.cljs$lang$applyTo = (function (arglist__51830){
var args__33712__auto__ = cljs.core.seq(arglist__51830);
return G__51828__delegate(args__33712__auto__);
});
G__51828.cljs$core$IFn$_invoke$arity$variadic = G__51828__delegate;
return G__51828;
})()
;
;})(args_51811__$1,format_in__33710__auto__,cf__33711__auto__,vec__51797_51821,ns_51822,kw_51823,lis_51824,_STAR_current_level_STAR_51795_51819,_STAR_current_length_STAR_51796_51820,vec__51792_51816,start_51817__$1,end_51818__$1,arg_51815,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args))
})().call(null,lis_51824);
} else {
cljs.pprint.write_out.call(null,lis_51824);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__33710__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (args_51811__$1,format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51795_51819,_STAR_current_length_STAR_51796_51820,vec__51792_51816,start_51817__$1,end_51818__$1,arg_51815,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args){
return (function() { 
var G__51831__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51831 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51832__i = 0, G__51832__a = new Array(arguments.length -  0);
while (G__51832__i < G__51832__a.length) {G__51832__a[G__51832__i] = arguments[G__51832__i + 0]; ++G__51832__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51832__a,0,null);
} 
return G__51831__delegate.call(this,args__33712__auto__);};
G__51831.cljs$lang$maxFixedArity = 0;
G__51831.cljs$lang$applyTo = (function (arglist__51833){
var args__33712__auto__ = cljs.core.seq(arglist__51833);
return G__51831__delegate(args__33712__auto__);
});
G__51831.cljs$core$IFn$_invoke$arity$variadic = G__51831__delegate;
return G__51831;
})()
;
;})(args_51811__$1,format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51795_51819,_STAR_current_length_STAR_51796_51820,vec__51792_51816,start_51817__$1,end_51818__$1,arg_51815,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args))
})(),arg_51815);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51796_51820;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51795_51819;
}}


if(cljs.core.next.call(null,args_51811__$1)){
(function (){var format_in__33710__auto__ = "~_";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (args_51811__$1,format_in__33710__auto__,cf__33711__auto__,vec__51792_51816,start_51817__$1,end_51818__$1,arg_51815,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args){
return (function() { 
var G__51834__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51834 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51835__i = 0, G__51835__a = new Array(arguments.length -  0);
while (G__51835__i < G__51835__a.length) {G__51835__a[G__51835__i] = arguments[G__51835__i + 0]; ++G__51835__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51835__a,0,null);
} 
return G__51834__delegate.call(this,args__33712__auto__);};
G__51834.cljs$lang$maxFixedArity = 0;
G__51834.cljs$lang$applyTo = (function (arglist__51836){
var args__33712__auto__ = cljs.core.seq(arglist__51836);
return G__51834__delegate(args__33712__auto__);
});
G__51834.cljs$core$IFn$_invoke$arity$variadic = G__51834__delegate;
return G__51834;
})()
;
;})(args_51811__$1,format_in__33710__auto__,cf__33711__auto__,vec__51792_51816,start_51817__$1,end_51818__$1,arg_51815,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_51815);

if(cljs.core.next.call(null,args_51811__$1)){
(function (){var format_in__33710__auto__ = "~:_";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (args_51811__$1,format_in__33710__auto__,cf__33711__auto__,arg_51815,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args){
return (function() { 
var G__51837__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51837 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51839__i = 0, G__51839__a = new Array(arguments.length -  0);
while (G__51839__i < G__51839__a.length) {G__51839__a[G__51839__i] = arguments[G__51839__i + 0]; ++G__51839__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51839__a,0,null);
} 
return G__51837__delegate.call(this,args__33712__auto__);};
G__51837.cljs$lang$maxFixedArity = 0;
G__51837.cljs$lang$applyTo = (function (arglist__51840){
var args__33712__auto__ = cljs.core.seq(arglist__51840);
return G__51837__delegate(args__33712__auto__);
});
G__51837.cljs$core$IFn$_invoke$arity$variadic = G__51837__delegate;
return G__51837;
})()
;
;})(args_51811__$1,format_in__33710__auto__,cf__33711__auto__,arg_51815,_STAR_current_level_STAR_51790_51803,_STAR_current_length_STAR_51791_51804,vec__51781,start,end,vec__51784,seq__51785,first__51786,seq__51785__$1,keyw,args))
})().call(null);
} else {
}
}

var G__51844 = cljs.core.next.call(null,args_51811__$1);
args_51811__$1 = G__51844;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51791_51804;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51790_51803;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__51845 = alis;
var seq__51846 = cljs.core.seq.call(null,vec__51845);
var first__51847 = cljs.core.first.call(null,seq__51846);
var seq__51846__$1 = cljs.core.next.call(null,seq__51846);
var ns_sym = first__51847;
var first__51847__$1 = cljs.core.first.call(null,seq__51846__$1);
var seq__51846__$2 = cljs.core.next.call(null,seq__51846__$1);
var ns_name = first__51847__$1;
var stuff = seq__51846__$2;
var vec__51848 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__51848,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__51848,(1),null);
var vec__51851 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__51851,(0),null);
var references = cljs.core.nth.call(null,vec__51851,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51854_51860 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51855_51861 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__33710__auto__ = "~w ~1I~@_~w";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51854_51860,_STAR_current_length_STAR_51855_51861,vec__51845,seq__51846,first__51847,seq__51846__$1,ns_sym,first__51847__$1,seq__51846__$2,ns_name,stuff,vec__51848,doc_str,stuff__$1,vec__51851,attr_map,references){
return (function() { 
var G__51864__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51864 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51865__i = 0, G__51865__a = new Array(arguments.length -  0);
while (G__51865__i < G__51865__a.length) {G__51865__a[G__51865__i] = arguments[G__51865__i + 0]; ++G__51865__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51865__a,0,null);
} 
return G__51864__delegate.call(this,args__33712__auto__);};
G__51864.cljs$lang$maxFixedArity = 0;
G__51864.cljs$lang$applyTo = (function (arglist__51866){
var args__33712__auto__ = cljs.core.seq(arglist__51866);
return G__51864__delegate(args__33712__auto__);
});
G__51864.cljs$core$IFn$_invoke$arity$variadic = G__51864__delegate;
return G__51864;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51854_51860,_STAR_current_length_STAR_51855_51861,vec__51845,seq__51846,first__51847,seq__51846__$1,ns_sym,first__51847__$1,seq__51846__$2,ns_name,stuff,vec__51848,doc_str,stuff__$1,vec__51851,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__30072__auto__ = doc_str;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var or__30072__auto____$1 = attr_map;
if(cljs.core.truth_(or__30072__auto____$1)){
return or__30072__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__33710__auto__ = "~@:_";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51854_51860,_STAR_current_length_STAR_51855_51861,vec__51845,seq__51846,first__51847,seq__51846__$1,ns_sym,first__51847__$1,seq__51846__$2,ns_name,stuff,vec__51848,doc_str,stuff__$1,vec__51851,attr_map,references){
return (function() { 
var G__51867__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51867 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51868__i = 0, G__51868__a = new Array(arguments.length -  0);
while (G__51868__i < G__51868__a.length) {G__51868__a[G__51868__i] = arguments[G__51868__i + 0]; ++G__51868__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51868__a,0,null);
} 
return G__51867__delegate.call(this,args__33712__auto__);};
G__51867.cljs$lang$maxFixedArity = 0;
G__51867.cljs$lang$applyTo = (function (arglist__51869){
var args__33712__auto__ = cljs.core.seq(arglist__51869);
return G__51867__delegate(args__33712__auto__);
});
G__51867.cljs$core$IFn$_invoke$arity$variadic = G__51867__delegate;
return G__51867;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51854_51860,_STAR_current_length_STAR_51855_51861,vec__51845,seq__51846,first__51847,seq__51846__$1,ns_sym,first__51847__$1,seq__51846__$2,ns_name,stuff,vec__51848,doc_str,stuff__$1,vec__51851,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__30072__auto__ = attr_map;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__33710__auto__ = "~w~:[~;~:@_~]";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51854_51860,_STAR_current_length_STAR_51855_51861,vec__51845,seq__51846,first__51847,seq__51846__$1,ns_sym,first__51847__$1,seq__51846__$2,ns_name,stuff,vec__51848,doc_str,stuff__$1,vec__51851,attr_map,references){
return (function() { 
var G__51870__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51870 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51871__i = 0, G__51871__a = new Array(arguments.length -  0);
while (G__51871__i < G__51871__a.length) {G__51871__a[G__51871__i] = arguments[G__51871__i + 0]; ++G__51871__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51871__a,0,null);
} 
return G__51870__delegate.call(this,args__33712__auto__);};
G__51870.cljs$lang$maxFixedArity = 0;
G__51870.cljs$lang$applyTo = (function (arglist__51872){
var args__33712__auto__ = cljs.core.seq(arglist__51872);
return G__51870__delegate(args__33712__auto__);
});
G__51870.cljs$core$IFn$_invoke$arity$variadic = G__51870__delegate;
return G__51870;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51854_51860,_STAR_current_length_STAR_51855_51861,vec__51845,seq__51846,first__51847,seq__51846__$1,ns_sym,first__51847__$1,seq__51846__$2,ns_name,stuff,vec__51848,doc_str,stuff__$1,vec__51851,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_51873__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_51873__$1));

var temp__5278__auto___51874 = cljs.core.next.call(null,references_51873__$1);
if(temp__5278__auto___51874){
var references_51875__$2 = temp__5278__auto___51874;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__51876 = references_51875__$2;
references_51873__$1 = G__51876;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51855_51861;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51854_51860;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__33710__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__){
return (function() { 
var G__51877__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51877 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51878__i = 0, G__51878__a = new Array(arguments.length -  0);
while (G__51878__i < G__51878__a.length) {G__51878__a[G__51878__i] = arguments[G__51878__i + 0]; ++G__51878__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51878__a,0,null);
} 
return G__51877__delegate.call(this,args__33712__auto__);};
G__51877.cljs$lang$maxFixedArity = 0;
G__51877.cljs$lang$applyTo = (function (arglist__51879){
var args__33712__auto__ = cljs.core.seq(arglist__51879);
return G__51877__delegate(args__33712__auto__);
});
G__51877.cljs$core$IFn$_invoke$arity$variadic = G__51877__delegate;
return G__51877;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__33710__auto__ = " ~_";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__){
return (function() { 
var G__51880__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51880 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51881__i = 0, G__51881__a = new Array(arguments.length -  0);
while (G__51881__i < G__51881__a.length) {G__51881__a[G__51881__i] = arguments[G__51881__i + 0]; ++G__51881__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51881__a,0,null);
} 
return G__51880__delegate.call(this,args__33712__auto__);};
G__51880.cljs$lang$maxFixedArity = 0;
G__51880.cljs$lang$applyTo = (function (arglist__51882){
var args__33712__auto__ = cljs.core.seq(arglist__51882);
return G__51880__delegate(args__33712__auto__);
});
G__51880.cljs$core$IFn$_invoke$arity$variadic = G__51880__delegate;
return G__51880;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__))
})().call(null);
} else {
(function (){var format_in__33710__auto__ = " ~@_";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__){
return (function() { 
var G__51884__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51884 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51887__i = 0, G__51887__a = new Array(arguments.length -  0);
while (G__51887__i < G__51887__a.length) {G__51887__a[G__51887__i] = arguments[G__51887__i + 0]; ++G__51887__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51887__a,0,null);
} 
return G__51884__delegate.call(this,args__33712__auto__);};
G__51884.cljs$lang$maxFixedArity = 0;
G__51884.cljs$lang$applyTo = (function (arglist__51888){
var args__33712__auto__ = cljs.core.seq(arglist__51888);
return G__51884__delegate(args__33712__auto__);
});
G__51884.cljs$core$IFn$_invoke$arity$variadic = G__51884__delegate;
return G__51884;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__))
})().call(null);
}

return (function (){var format_in__33710__auto__ = "~{~w~^ ~_~}";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__){
return (function() { 
var G__51889__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51889 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51891__i = 0, G__51891__a = new Array(arguments.length -  0);
while (G__51891__i < G__51891__a.length) {G__51891__a[G__51891__i] = arguments[G__51891__i + 0]; ++G__51891__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51891__a,0,null);
} 
return G__51889__delegate.call(this,args__33712__auto__);};
G__51889.cljs$lang$maxFixedArity = 0;
G__51889.cljs$lang$applyTo = (function (arglist__51893){
var args__33712__auto__ = cljs.core.seq(arglist__51893);
return G__51889__delegate(args__33712__auto__);
});
G__51889.cljs$core$IFn$_invoke$arity$variadic = G__51889__delegate;
return G__51889;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__33710__auto__ = " ~_~{~w~^ ~_~}";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__){
return (function() { 
var G__51894__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51894 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51895__i = 0, G__51895__a = new Array(arguments.length -  0);
while (G__51895__i < G__51895__a.length) {G__51895__a[G__51895__i] = arguments[G__51895__i + 0]; ++G__51895__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51895__a,0,null);
} 
return G__51894__delegate.call(this,args__33712__auto__);};
G__51894.cljs$lang$maxFixedArity = 0;
G__51894.cljs$lang$applyTo = (function (arglist__51896){
var args__33712__auto__ = cljs.core.seq(arglist__51896);
return G__51894__delegate(args__33712__auto__);
});
G__51894.cljs$core$IFn$_invoke$arity$variadic = G__51894__delegate;
return G__51894;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__51897 = alis;
var seq__51898 = cljs.core.seq.call(null,vec__51897);
var first__51899 = cljs.core.first.call(null,seq__51898);
var seq__51898__$1 = cljs.core.next.call(null,seq__51898);
var defn_sym = first__51899;
var first__51899__$1 = cljs.core.first.call(null,seq__51898__$1);
var seq__51898__$2 = cljs.core.next.call(null,seq__51898__$1);
var defn_name = first__51899__$1;
var stuff = seq__51898__$2;
var vec__51900 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__51900,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__51900,(1),null);
var vec__51903 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__51903,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__51903,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51906_51914 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51907_51915 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__33710__auto__ = "~w ~1I~@_~w";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51906_51914,_STAR_current_length_STAR_51907_51915,vec__51897,seq__51898,first__51899,seq__51898__$1,defn_sym,first__51899__$1,seq__51898__$2,defn_name,stuff,vec__51900,doc_str,stuff__$1,vec__51903,attr_map,stuff__$2){
return (function() { 
var G__51916__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51916 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51917__i = 0, G__51917__a = new Array(arguments.length -  0);
while (G__51917__i < G__51917__a.length) {G__51917__a[G__51917__i] = arguments[G__51917__i + 0]; ++G__51917__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51917__a,0,null);
} 
return G__51916__delegate.call(this,args__33712__auto__);};
G__51916.cljs$lang$maxFixedArity = 0;
G__51916.cljs$lang$applyTo = (function (arglist__51918){
var args__33712__auto__ = cljs.core.seq(arglist__51918);
return G__51916__delegate(args__33712__auto__);
});
G__51916.cljs$core$IFn$_invoke$arity$variadic = G__51916__delegate;
return G__51916;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51906_51914,_STAR_current_length_STAR_51907_51915,vec__51897,seq__51898,first__51899,seq__51898__$1,defn_sym,first__51899__$1,seq__51898__$2,defn_name,stuff,vec__51900,doc_str,stuff__$1,vec__51903,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__33710__auto__ = " ~_~w";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51906_51914,_STAR_current_length_STAR_51907_51915,vec__51897,seq__51898,first__51899,seq__51898__$1,defn_sym,first__51899__$1,seq__51898__$2,defn_name,stuff,vec__51900,doc_str,stuff__$1,vec__51903,attr_map,stuff__$2){
return (function() { 
var G__51922__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51922 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51923__i = 0, G__51923__a = new Array(arguments.length -  0);
while (G__51923__i < G__51923__a.length) {G__51923__a[G__51923__i] = arguments[G__51923__i + 0]; ++G__51923__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51923__a,0,null);
} 
return G__51922__delegate.call(this,args__33712__auto__);};
G__51922.cljs$lang$maxFixedArity = 0;
G__51922.cljs$lang$applyTo = (function (arglist__51924){
var args__33712__auto__ = cljs.core.seq(arglist__51924);
return G__51922__delegate(args__33712__auto__);
});
G__51922.cljs$core$IFn$_invoke$arity$variadic = G__51922__delegate;
return G__51922;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51906_51914,_STAR_current_length_STAR_51907_51915,vec__51897,seq__51898,first__51899,seq__51898__$1,defn_sym,first__51899__$1,seq__51898__$2,defn_name,stuff,vec__51900,doc_str,stuff__$1,vec__51903,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__33710__auto__ = " ~_~w";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51906_51914,_STAR_current_length_STAR_51907_51915,vec__51897,seq__51898,first__51899,seq__51898__$1,defn_sym,first__51899__$1,seq__51898__$2,defn_name,stuff,vec__51900,doc_str,stuff__$1,vec__51903,attr_map,stuff__$2){
return (function() { 
var G__51925__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51925 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51926__i = 0, G__51926__a = new Array(arguments.length -  0);
while (G__51926__i < G__51926__a.length) {G__51926__a[G__51926__i] = arguments[G__51926__i + 0]; ++G__51926__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51926__a,0,null);
} 
return G__51925__delegate.call(this,args__33712__auto__);};
G__51925.cljs$lang$maxFixedArity = 0;
G__51925.cljs$lang$applyTo = (function (arglist__51927){
var args__33712__auto__ = cljs.core.seq(arglist__51927);
return G__51925__delegate(args__33712__auto__);
});
G__51925.cljs$core$IFn$_invoke$arity$variadic = G__51925__delegate;
return G__51925;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51906_51914,_STAR_current_length_STAR_51907_51915,vec__51897,seq__51898,first__51899,seq__51898__$1,defn_sym,first__51899__$1,seq__51898__$2,defn_name,stuff,vec__51900,doc_str,stuff__$1,vec__51903,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__30072__auto__ = doc_str;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__30072__auto__ = doc_str;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51907_51915;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51906_51914;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51928_51933 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51929_51934 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count51930_51935 = (0);
var binding_51936 = binding_vec;
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count51930_51935 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq.call(null,binding_51936)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51931_51937 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51932_51938 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_51936));

if(cljs.core.next.call(null,binding_51936)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_51936));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51932_51938;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51931_51937;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_51936))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__51939 = (length_count51930_51935 + (1));
var G__51940 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_51936));
length_count51930_51935 = G__51939;
binding_51936 = G__51940;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51929_51934;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51928_51933;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51944_51946 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51945_51947 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis)))){
(function (){var format_in__33710__auto__ = "~w ~1I~@_";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51944_51946,_STAR_current_length_STAR_51945_51947,base_sym){
return (function() { 
var G__51948__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51948 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51949__i = 0, G__51949__a = new Array(arguments.length -  0);
while (G__51949__i < G__51949__a.length) {G__51949__a[G__51949__i] = arguments[G__51949__i + 0]; ++G__51949__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51949__a,0,null);
} 
return G__51948__delegate.call(this,args__33712__auto__);};
G__51948.cljs$lang$maxFixedArity = 0;
G__51948.cljs$lang$applyTo = (function (arglist__51950){
var args__33712__auto__ = cljs.core.seq(arglist__51950);
return G__51948__delegate(args__33712__auto__);
});
G__51948.cljs$core$IFn$_invoke$arity$variadic = G__51948__delegate;
return G__51948;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51944_51946,_STAR_current_length_STAR_51945_51947,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__33710__auto__ = " ~_~{~w~^ ~_~}";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51944_51946,_STAR_current_length_STAR_51945_51947,base_sym){
return (function() { 
var G__51951__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51951 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51952__i = 0, G__51952__a = new Array(arguments.length -  0);
while (G__51952__i < G__51952__a.length) {G__51952__a[G__51952__i] = arguments[G__51952__i + 0]; ++G__51952__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51952__a,0,null);
} 
return G__51951__delegate.call(this,args__33712__auto__);};
G__51951.cljs$lang$maxFixedArity = 0;
G__51951.cljs$lang$applyTo = (function (arglist__51953){
var args__33712__auto__ = cljs.core.seq(arglist__51953);
return G__51951__delegate(args__33712__auto__);
});
G__51951.cljs$core$IFn$_invoke$arity$variadic = G__51951__delegate;
return G__51951;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51944_51946,_STAR_current_length_STAR_51945_51947,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51945_51947;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51944_51946;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__33710__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__){
return (function() { 
var G__51954__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51954 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51955__i = 0, G__51955__a = new Array(arguments.length -  0);
while (G__51955__i < G__51955__a.length) {G__51955__a[G__51955__i] = arguments[G__51955__i + 0]; ++G__51955__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51955__a,0,null);
} 
return G__51954__delegate.call(this,args__33712__auto__);};
G__51954.cljs$lang$maxFixedArity = 0;
G__51954.cljs$lang$applyTo = (function (arglist__51956){
var args__33712__auto__ = cljs.core.seq(arglist__51956);
return G__51954__delegate(args__33712__auto__);
});
G__51954.cljs$core$IFn$_invoke$arity$variadic = G__51954__delegate;
return G__51954;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51957_51962 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51958_51963 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count51959_51964 = (0);
var alis_51965__$1 = cljs.core.next.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count51959_51964 < cljs.core._STAR_print_length_STAR_))){
if(alis_51965__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51960_51966 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51961_51967 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_51965__$1));

if(cljs.core.next.call(null,alis_51965__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_51965__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51961_51967;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51960_51966;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_51965__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__51968 = (length_count51959_51964 + (1));
var G__51969 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_51965__$1));
length_count51959_51964 = G__51968;
alis_51965__$1 = G__51969;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51958_51963;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51957_51962;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51972_51979 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51973_51980 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__33710__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51972_51979,_STAR_current_length_STAR_51973_51980){
return (function() { 
var G__51981__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51981 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51982__i = 0, G__51982__a = new Array(arguments.length -  0);
while (G__51982__i < G__51982__a.length) {G__51982__a[G__51982__i] = arguments[G__51982__i + 0]; ++G__51982__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51982__a,0,null);
} 
return G__51981__delegate.call(this,args__33712__auto__);};
G__51981.cljs$lang$maxFixedArity = 0;
G__51981.cljs$lang$applyTo = (function (arglist__51983){
var args__33712__auto__ = cljs.core.seq(arglist__51983);
return G__51981__delegate(args__33712__auto__);
});
G__51981.cljs$core$IFn$_invoke$arity$variadic = G__51981__delegate;
return G__51981;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__,_STAR_current_level_STAR_51972_51979,_STAR_current_length_STAR_51973_51980))
})(),alis);

var length_count51974_51984 = (0);
var alis_51985__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count51974_51984 < cljs.core._STAR_print_length_STAR_))){
if(alis_51985__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_51975_51986 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_51976_51987 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_51985__$1));

if(cljs.core.next.call(null,alis_51985__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_51985__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51976_51987;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51975_51986;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_51985__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__51988 = (length_count51974_51984 + (1));
var G__51989 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_51985__$1));
length_count51974_51984 = G__51988;
alis_51985__$1 = G__51989;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_51973_51980;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_51972_51979;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR_51992 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR_51992,args,nlis){
return (function (p1__51990_SHARP_,p2__51991_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__51990_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51991_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_51992,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));

try{return (function (){var format_in__33710__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__33711__auto__ = ((typeof format_in__33710__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__33710__auto__):format_in__33710__auto__);
return ((function (format_in__33710__auto__,cf__33711__auto__,_STAR_symbol_map_STAR_51992,args,nlis){
return (function() { 
var G__51995__delegate = function (args__33712__auto__){
var navigator__33713__auto__ = cljs.pprint.init_navigator.call(null,args__33712__auto__);
return cljs.pprint.execute_format.call(null,cf__33711__auto__,navigator__33713__auto__);
};
var G__51995 = function (var_args){
var args__33712__auto__ = null;
if (arguments.length > 0) {
var G__51996__i = 0, G__51996__a = new Array(arguments.length -  0);
while (G__51996__i < G__51996__a.length) {G__51996__a[G__51996__i] = arguments[G__51996__i + 0]; ++G__51996__i;}
  args__33712__auto__ = new cljs.core.IndexedSeq(G__51996__a,0,null);
} 
return G__51995__delegate.call(this,args__33712__auto__);};
G__51995.cljs$lang$maxFixedArity = 0;
G__51995.cljs$lang$applyTo = (function (arglist__51997){
var args__33712__auto__ = cljs.core.seq(arglist__51997);
return G__51995__delegate(args__33712__auto__);
});
G__51995.cljs$core$IFn$_invoke$arity$variadic = G__51995__delegate;
return G__51995;
})()
;
;})(format_in__33710__auto__,cf__33711__auto__,_STAR_symbol_map_STAR_51992,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_51992;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_52000_52003 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_52001_52004 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count52002_52005 = (0);
var alis_52006__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count52002_52005 < cljs.core._STAR_print_length_STAR_))){
if(alis_52006__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_52006__$1));

if(cljs.core.next.call(null,alis_52006__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__52007 = (length_count52002_52005 + (1));
var G__52008 = cljs.core.next.call(null,alis_52006__$1);
length_count52002_52005 = G__52007;
alis_52006__$1 = G__52008;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_52001_52004;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_52000_52003;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__30954__auto__ = (function cljs$pprint$two_forms_$_iter__52009(s__52010){
return (new cljs.core.LazySeq(null,(function (){
var s__52010__$1 = s__52010;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__52010__$1);
if(temp__5278__auto__){
var s__52010__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52010__$2)){
var c__30952__auto__ = cljs.core.chunk_first.call(null,s__52010__$2);
var size__30953__auto__ = cljs.core.count.call(null,c__30952__auto__);
var b__52012 = cljs.core.chunk_buffer.call(null,size__30953__auto__);
if((function (){var i__52011 = (0);
while(true){
if((i__52011 < size__30953__auto__)){
var x = cljs.core._nth.call(null,c__30952__auto__,i__52011);
cljs.core.chunk_append.call(null,b__52012,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__52013 = (i__52011 + (1));
i__52011 = G__52013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52012),cljs$pprint$two_forms_$_iter__52009.call(null,cljs.core.chunk_rest.call(null,s__52010__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52012),null);
}
} else {
var x = cljs.core.first.call(null,s__52010__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__52009.call(null,cljs.core.rest.call(null,s__52010__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30954__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__52014_SHARP_){
var vec__52015 = p1__52014_SHARP_;
var s = cljs.core.nth.call(null,vec__52015,(0),null);
var f = cljs.core.nth.call(null,vec__52015,(1),null);
if(cljs.core.not.call(null,(function (){var or__30072__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__52014_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__5276__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__5276__auto__)){
var special_form = temp__5276__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5276__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__5276__auto__)){
var arg_num = temp__5276__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__31125__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31126__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31127__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31128__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31129__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31129__auto__,method_table__31125__auto__,prefer_table__31126__auto__,method_cache__31127__auto__,cached_hierarchy__31128__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__30424__auto__ = (0);
var y__30425__auto__ = (width - cljs.core.count.call(null,s));
return ((x__30424__auto__ > y__30425__auto__) ? x__30424__auto__ : y__30425__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__52022 = arguments.length;
switch (G__52022) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_52023 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,((function (_STAR_print_newline_STAR_52023){
return (function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.call(null,((function (_STAR_print_newline_STAR_52023){
return (function (p1__52018_SHARP_){
return cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__52018_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_52023))
,rows));
});})(_STAR_print_newline_STAR_52023))
,ks);
var spacers = cljs.core.map.call(null,((function (widths,_STAR_print_newline_STAR_52023){
return (function (p1__52019_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__52019_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_52023))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_52023){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__30954__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_52023){
return (function cljs$pprint$iter__52024(s__52025){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_52023){
return (function (){
var s__52025__$1 = s__52025;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__52025__$1);
if(temp__5278__auto__){
var s__52025__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52025__$2)){
var c__30952__auto__ = cljs.core.chunk_first.call(null,s__52025__$2);
var size__30953__auto__ = cljs.core.count.call(null,c__30952__auto__);
var b__52027 = cljs.core.chunk_buffer.call(null,size__30953__auto__);
if((function (){var i__52026 = (0);
while(true){
if((i__52026 < size__30953__auto__)){
var vec__52028 = cljs.core._nth.call(null,c__30952__auto__,i__52026);
var col = cljs.core.nth.call(null,vec__52028,(0),null);
var width = cljs.core.nth.call(null,vec__52028,(1),null);
cljs.core.chunk_append.call(null,b__52027,cljs.pprint.add_padding.call(null,width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__52039 = (i__52026 + (1));
i__52026 = G__52039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52027),cljs$pprint$iter__52024.call(null,cljs.core.chunk_rest.call(null,s__52025__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52027),null);
}
} else {
var vec__52031 = cljs.core.first.call(null,s__52025__$2);
var col = cljs.core.nth.call(null,vec__52031,(0),null);
var width = cljs.core.nth.call(null,vec__52031,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__52024.call(null,cljs.core.rest.call(null,s__52025__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_52023))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_52023))
;
return iter__30954__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__30954__auto__,widths,spacers,_STAR_print_newline_STAR_52023){
return (function (p1__52020_SHARP_){
return cljs.core.get.call(null,row,p1__52020_SHARP_);
});})(iter__30954__auto__,widths,spacers,_STAR_print_newline_STAR_52023))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_52023))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__52034 = cljs.core.seq.call(null,rows);
var chunk__52035 = null;
var count__52036 = (0);
var i__52037 = (0);
while(true){
if((i__52037 < count__52036)){
var row = cljs.core._nth.call(null,chunk__52035,i__52037);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__52040 = seq__52034;
var G__52041 = chunk__52035;
var G__52042 = count__52036;
var G__52043 = (i__52037 + (1));
seq__52034 = G__52040;
chunk__52035 = G__52041;
count__52036 = G__52042;
i__52037 = G__52043;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__52034);
if(temp__5278__auto__){
var seq__52034__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52034__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__52034__$1);
var G__52044 = cljs.core.chunk_rest.call(null,seq__52034__$1);
var G__52045 = c__31003__auto__;
var G__52046 = cljs.core.count.call(null,c__31003__auto__);
var G__52047 = (0);
seq__52034 = G__52044;
chunk__52035 = G__52045;
count__52036 = G__52046;
i__52037 = G__52047;
continue;
} else {
var row = cljs.core.first.call(null,seq__52034__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__52048 = cljs.core.next.call(null,seq__52034__$1);
var G__52049 = null;
var G__52050 = (0);
var G__52051 = (0);
seq__52034 = G__52048;
chunk__52035 = G__52049;
count__52036 = G__52050;
i__52037 = G__52051;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52023;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=pprint.js.map?rel=1510360406896
