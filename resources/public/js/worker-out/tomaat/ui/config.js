// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.ui.config');
goog.require('cljs.core');
goog.require('goog.string');
tomaat.ui.config.token_input = (function tomaat$ui$config$token_input(p__45517){
var map__45518 = p__45517;
var map__45518__$1 = ((((!((map__45518 == null)))?((((map__45518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45518):map__45518);
var disabled_QMARK_ = cljs.core.get.call(null,map__45518__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__45518__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var token = cljs.core.get.call(null,map__45518__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#user-token.form__input","input#user-token.form__input",1255036031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),token,new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null);
});
tomaat.ui.config.toggle = (function tomaat$ui$config$toggle(p__45521){
var map__45522 = p__45521;
var map__45522__$1 = ((((!((map__45522 == null)))?((((map__45522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45522):map__45522);
var disabled_QMARK_ = cljs.core.get.call(null,map__45522__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var checked_QMARK_ = cljs.core.get.call(null,map__45522__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var on_change = cljs.core.get.call(null,map__45522__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id = cljs.core.get.call(null,map__45522__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.label__input","input.label__input",954584121),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null);
});
tomaat.ui.config.form = (function tomaat$ui$config$form(p__45536){
var map__45537 = p__45536;
var map__45537__$1 = ((((!((map__45537 == null)))?((((map__45537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45537):map__45537);
var disabled_QMARK_ = cljs.core.get.call(null,map__45537__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var update = cljs.core.get.call(null,map__45537__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var token = cljs.core.get.call(null,map__45537__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var slack_me = cljs.core.get.call(null,map__45537__$1,new cljs.core.Keyword(null,"slack-me","slack-me",2098076939));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form","form.form",1777183647),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.form__label","label.form__label",-685562599),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),"user-token"], null),"Slack Token"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tomaat.ui.config.token_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"update","update",1045576396),update,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__45537,map__45537__$1,disabled_QMARK_,update,token,slack_me){
return (function (p1__45531_SHARP_){
return update.call(null,new cljs.core.Keyword(null,"token","token",-1211463215),p1__45531_SHARP_.currentTarget.value);
});})(map__45537,map__45537__$1,disabled_QMARK_,update,token,slack_me))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.form__label.label.form__toggle","label.form__label.label.form__toggle",-379789591),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),"notify",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(slack_me)?"form__toggle--checked":null)], null),"Slack me when time is up",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tomaat.ui.config.toggle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notify",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"checked?","checked?",2024809091),slack_me,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__45537,map__45537__$1,disabled_QMARK_,update,token,slack_me){
return (function (p1__45535_SHARP_){
return update.call(null,new cljs.core.Keyword(null,"slack-me","slack-me",2098076939),p1__45535_SHARP_.currentTarget.checked);
});})(map__45537,map__45537__$1,disabled_QMARK_,update,token,slack_me))
], null)], null)], null)], null);
});
tomaat.ui.config.config_screen = (function tomaat$ui$config$config_screen(p__45545){
var map__45546 = p__45545;
var map__45546__$1 = ((((!((map__45546 == null)))?((((map__45546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45546):map__45546);
var toggle = cljs.core.get.call(null,map__45546__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var started_QMARK_ = cljs.core.get.call(null,map__45546__$1,new cljs.core.Keyword(null,"started?","started?",-1301062863));
var update = cljs.core.get.call(null,map__45546__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var data = cljs.core.get.call(null,map__45546__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen__config.screen__state","div.screen__config.screen__state",-975531584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Settings"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tomaat.ui.config.form,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),started_QMARK_,new cljs.core.Keyword(null,"update","update",1045576396),update,new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"token","token",-1211463215),""),new cljs.core.Keyword(null,"slack-me","slack-me",2098076939),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"slack-me","slack-me",2098076939),false)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.link","button.link",-142903972),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle,new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),goog.string.unescapeEntities("&laquo; back")], null)], null);
});

//# sourceMappingURL=config.js.map?rel=1510360395384
