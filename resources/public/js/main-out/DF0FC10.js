goog.provide('cljs.nodejscli');
goog.require('cljs.core');
goog.require('cljs.nodejs');
if(COMPILED){
goog.global = global;
} else {
}
if(cljs.core.fn_QMARK_.call(null,cljs.core._STAR_main_cli_fn_STAR_)){
cljs.core.apply.call(null,cljs.core._STAR_main_cli_fn_STAR_,cljs.core.drop.call(null,(2),process.argv));
} else {
}
