// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.worker.settings');
goog.require('cljs.core');
goog.require('tomaat.data');
/**
 * Merge the given settings into stored settings for Tomaat
 */
tomaat.worker.settings.update_settings = (function tomaat$worker$settings$update_settings(event,id,settings){
return tomaat.data.write.call(null,cljs.core.js__GT_clj.call(null,settings,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});

//# sourceMappingURL=settings.js.map?rel=1510360406293
