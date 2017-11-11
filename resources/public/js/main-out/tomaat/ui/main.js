// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.ui.main');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
tomaat.ui.main.header = (function tomaat$ui$main$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.header__text","h1.header__text",-983164528),"Tomaat!"], null)], null);
});
tomaat.ui.main.timer = (function tomaat$ui$main$timer(time){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timer","div.timer",396383019)], null),cljs.core.interpose.call(null,":",cljs.core.mapv.call(null,(function (p1__38279_SHARP_){
return goog.string.format("%02d",p1__38279_SHARP_);
}),time)));
});
tomaat.ui.main.button = (function tomaat$ui$main$button(var_args){
var args__31356__auto__ = [];
var len__31349__auto___38285 = arguments.length;
var i__31350__auto___38286 = (0);
while(true){
if((i__31350__auto___38286 < len__31349__auto___38285)){
args__31356__auto__.push((arguments[i__31350__auto___38286]));

var G__38287 = (i__31350__auto___38286 + (1));
i__31350__auto___38286 = G__38287;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return tomaat.ui.main.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

tomaat.ui.main.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__38282,children){
var map__38283 = p__38282;
var map__38283__$1 = ((((!((map__38283 == null)))?((((map__38283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38283):map__38283);
var on_click = cljs.core.get.call(null,map__38283__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),children], null);
});

tomaat.ui.main.button.cljs$lang$maxFixedArity = (1);

tomaat.ui.main.button.cljs$lang$applyTo = (function (seq38280){
var G__38281 = cljs.core.first.call(null,seq38280);
var seq38280__$1 = cljs.core.next.call(null,seq38280);
return tomaat.ui.main.button.cljs$core$IFn$_invoke$arity$variadic(G__38281,seq38280__$1);
});

tomaat.ui.main.main_screen = (function tomaat$ui$main$main_screen(p__38301){
var map__38302 = p__38301;
var map__38302__$1 = ((((!((map__38302 == null)))?((((map__38302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38302):map__38302);
var toggle = cljs.core.get.call(null,map__38302__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var start = cljs.core.get.call(null,map__38302__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__38302__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var time = cljs.core.get.call(null,map__38302__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var started_QMARK_ = cljs.core.get.call(null,map__38302__$1,new cljs.core.Keyword(null,"started?","started?",-1301062863));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen__main.screen__state","div.screen__main.screen__state",612403689),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tomaat.ui.main.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tomaat.ui.main.timer,time], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tomaat.ui.main.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(started_QMARK_)?stop:start)], null),(cljs.core.truth_(started_QMARK_)?"Stop Pomodoro":"Start Pomodoro")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.link","button.link",-142903972),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle], null),"settings"], null)], null);
});

//# sourceMappingURL=main.js.map?rel=1510360382457
