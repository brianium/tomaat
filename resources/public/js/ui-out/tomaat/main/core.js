// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.main.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
tomaat.main.core.node$module$electron = require('electron');
tomaat.main.core.node$module$path = require('path');
cljs.nodejs.enable_util_print_BANG_.call(null);
if(typeof tomaat.main.core._STAR_main_window !== 'undefined'){
} else {
tomaat.main.core._STAR_main_window = cljs.core.atom.call(null,null);
}
/**
 * We want a boss development environment. :asset-path settings
 *   jack with live reloading, so this function will help us determine
 *   the url of the worker document based on environment
 */
tomaat.main.core.index_url = (function tomaat$main$core$index_url(){
var env = process.env.NODE_ENV;
if(cljs.core._EQ_.call(null,env,"production")){
return ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname),"/public/index.html"].join('');
} else {
return ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tomaat.main.core.node$module$path.resolve.call(null,tomaat.main.core.node$module$path.join.call(null,__dirname,"../../../../","index.html")))].join('');
}
});
tomaat.main.core.create_window = (function tomaat$main$core$create_window(){
cljs.core.reset_BANG_.call(null,tomaat.main.core._STAR_main_window,(new tomaat.main.core.node$module$electron.BrowserWindow(({"width": (300), "height": (500), "resizable": false}))));

cljs.core.deref.call(null,tomaat.main.core._STAR_main_window).loadURL(tomaat.main.core.index_url.call(null));

return cljs.core.deref.call(null,tomaat.main.core._STAR_main_window).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,tomaat.main.core._STAR_main_window,null);
}));
});
tomaat.main.core.quit_app = (function tomaat$main$core$quit_app(){
if(cljs.core._EQ_.call(null,"darwin",process.platform)){
return null;
} else {
return tomaat.main.core.node$module$electron.app.quit();
}
});
tomaat.main.core.activate = (function tomaat$main$core$activate(){
if((cljs.core.deref.call(null,tomaat.main.core._STAR_main_window) == null)){
return tomaat.main.core.create_window.call(null);
} else {
return null;
}
});
tomaat.main.core.reload = (function tomaat$main$core$reload(){
if((cljs.core.deref.call(null,tomaat.main.core._STAR_main_window) == null)){
return null;
} else {
tomaat.main.core.node$module$electron.app.relaunch();

return tomaat.main.core.node$module$electron.app.quit();
}
});
tomaat.main.core._main = (function tomaat$main$core$_main(){
tomaat.main.core.node$module$electron.app.on("ready",tomaat.main.core.create_window);

tomaat.main.core.node$module$electron.app.on("window-all-closed",tomaat.main.core.quit_app);

return tomaat.main.core.node$module$electron.app.on("activate",tomaat.main.core.activate);
});
cljs.core._STAR_main_cli_fn_STAR_ = tomaat.main.core._main;

//# sourceMappingURL=core.js.map?rel=1510360406337
