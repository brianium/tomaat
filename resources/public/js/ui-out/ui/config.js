// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.config');
goog.require('cljs.core');
goog.require('goog.string');
ui.config.form = (function ui$config$form(p__54669){
var map__54670 = p__54669;
var map__54670__$1 = ((((!((map__54670 == null)))?((((map__54670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54670):map__54670);
var disabled_QMARK_ = cljs.core.get.call(null,map__54670__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var update = cljs.core.get.call(null,map__54670__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var token = cljs.core.get.call(null,map__54670__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var slack_me = cljs.core.get.call(null,map__54670__$1,new cljs.core.Keyword(null,"slack-me","slack-me",2098076939));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form","form.form",1777183647),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.form__label","label.form__label",-685562599),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),"user-token"], null),"Slack Token"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#user-token.form__input","input#user-token.form__input",1255036031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),token,new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__54670,map__54670__$1,disabled_QMARK_,update,token,slack_me){
return (function (p1__54667_SHARP_){
return update.call(null,new cljs.core.Keyword(null,"token","token",-1211463215),p1__54667_SHARP_.currentTarget.value);
});})(map__54670,map__54670__$1,disabled_QMARK_,update,token,slack_me))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.form__label.label","label.form__label.label",1171891283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),"notify"], null),"Slack me when time is up",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#notify.label__input","input#notify.label__input",553088640),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),slack_me,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__54670,map__54670__$1,disabled_QMARK_,update,token,slack_me){
return (function (p1__54668_SHARP_){
return update.call(null,new cljs.core.Keyword(null,"slack-me","slack-me",2098076939),p1__54668_SHARP_.currentTarget.checked);
});})(map__54670,map__54670__$1,disabled_QMARK_,update,token,slack_me))
], null)], null)], null)], null);
});
ui.config.config_screen = (function ui$config$config_screen(p__54672){
var map__54673 = p__54672;
var map__54673__$1 = ((((!((map__54673 == null)))?((((map__54673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54673):map__54673);
var toggle = cljs.core.get.call(null,map__54673__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var started_QMARK_ = cljs.core.get.call(null,map__54673__$1,new cljs.core.Keyword(null,"started?","started?",-1301062863));
var update = cljs.core.get.call(null,map__54673__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var data__$1 = cljs.core.get.call(null,map__54673__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen__config.screen__state","div.screen__config.screen__state",-975531584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Settings"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.config.form,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),started_QMARK_,new cljs.core.Keyword(null,"update","update",1045576396),update,new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.get.call(null,data__$1,new cljs.core.Keyword(null,"token","token",-1211463215),""),new cljs.core.Keyword(null,"slack-me","slack-me",2098076939),cljs.core.get.call(null,data__$1,new cljs.core.Keyword(null,"slack-me","slack-me",2098076939),false)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.link","button.link",-142903972),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle,new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),goog.string.unescapeEntities("&laquo; back")], null)], null);
});

//# sourceMappingURL=config.js.map?rel=1510147683269
