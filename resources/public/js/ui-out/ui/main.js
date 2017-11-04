// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.main');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
ui.main.header = (function ui$main$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.header__text","h1.header__text",-983164528),"Tomaat!"], null)], null);
});
ui.main.timer = (function ui$main$timer(time){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timer","div.timer",396383019)], null),cljs.core.interpose.call(null,":",cljs.core.mapv.call(null,(function (p1__46031_SHARP_){
return goog.string.format("%02d",p1__46031_SHARP_);
}),time)));
});
ui.main.button = (function ui$main$button(var_args){
var args__34055__auto__ = [];
var len__34048__auto___46037 = arguments.length;
var i__34049__auto___46038 = (0);
while(true){
if((i__34049__auto___46038 < len__34048__auto___46037)){
args__34055__auto__.push((arguments[i__34049__auto___46038]));

var G__46039 = (i__34049__auto___46038 + (1));
i__34049__auto___46038 = G__46039;
continue;
} else {
}
break;
}

var argseq__34056__auto__ = ((((1) < args__34055__auto__.length))?(new cljs.core.IndexedSeq(args__34055__auto__.slice((1)),(0),null)):null);
return ui.main.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34056__auto__);
});

ui.main.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__46034,children){
var map__46035 = p__46034;
var map__46035__$1 = ((((!((map__46035 == null)))?((((map__46035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46035):map__46035);
var on_click = cljs.core.get.call(null,map__46035__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),children], null);
});

ui.main.button.cljs$lang$maxFixedArity = (1);

ui.main.button.cljs$lang$applyTo = (function (seq46032){
var G__46033 = cljs.core.first.call(null,seq46032);
var seq46032__$1 = cljs.core.next.call(null,seq46032);
return ui.main.button.cljs$core$IFn$_invoke$arity$variadic(G__46033,seq46032__$1);
});

ui.main.main_screen = (function ui$main$main_screen(p__46040){
var map__46041 = p__46040;
var map__46041__$1 = ((((!((map__46041 == null)))?((((map__46041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46041):map__46041);
var toggle = cljs.core.get.call(null,map__46041__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var start = cljs.core.get.call(null,map__46041__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__46041__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var time = cljs.core.get.call(null,map__46041__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var started_QMARK_ = cljs.core.get.call(null,map__46041__$1,new cljs.core.Keyword(null,"started?","started?",-1301062863));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen__main.screen__state","div.screen__main.screen__state",612403689),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.main.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.main.timer,time], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.main.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(started_QMARK_)?stop:start)], null),(cljs.core.truth_(started_QMARK_)?"Stop Pomodoro":"Start Pomodoro")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.link","button.link",-142903972),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle], null),"settings"], null)], null);
});
