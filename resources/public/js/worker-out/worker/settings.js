// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('worker.settings');
goog.require('cljs.core');
goog.require('data.core');
/**
 * Merge the given settings into stored settings for Tomaat
 */
worker.settings.update_settings = (function worker$settings$update_settings(event,id,settings){
return data.core.write.call(null,cljs.core.js__GT_clj.call(null,settings,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});

//# sourceMappingURL=settings.js.map?rel=1510147247983
