// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('main.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
main.core.node$module$electron = require('electron');
main.core.node$module$path = require('path');
cljs.nodejs.enable_util_print_BANG_.call(null);
if(typeof main.core._STAR_main_window !== 'undefined'){
} else {
main.core._STAR_main_window = cljs.core.atom.call(null,null);
}
/**
 * We want a boss development environment. :asset-path settings
 *   jack with live reloading, so this function will help us determine
 *   the url of the worker document based on environment
 */
main.core.index_url = (function main$core$index_url(){
console.log(__dirname);

return ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(main.core.node$module$path.resolve.call(null,main.core.node$module$path.join.call(null,__dirname,"../../../","index.html")))].join('');
});
main.core.create_window = (function main$core$create_window(){
cljs.core.reset_BANG_.call(null,main.core._STAR_main_window,(new main.core.node$module$electron.BrowserWindow(({"width": (300), "height": (500), "resizable": false}))));

cljs.core.deref.call(null,main.core._STAR_main_window).loadURL(main.core.index_url.call(null));

return cljs.core.deref.call(null,main.core._STAR_main_window).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,main.core._STAR_main_window,null);
}));
});
main.core.quit_app = (function main$core$quit_app(){
if(cljs.core._EQ_.call(null,"darwin",process.platform)){
return null;
} else {
return main.core.node$module$electron.app.quit();
}
});
main.core.activate = (function main$core$activate(){
if((cljs.core.deref.call(null,main.core._STAR_main_window) == null)){
return main.core.create_window.call(null);
} else {
return null;
}
});
main.core.reload = (function main$core$reload(){
if((cljs.core.deref.call(null,main.core._STAR_main_window) == null)){
return null;
} else {
main.core.node$module$electron.app.relaunch();

return main.core.node$module$electron.app.quit();
}
});
main.core._main = (function main$core$_main(){
main.core.node$module$electron.app.on("ready",main.core.create_window);

main.core.node$module$electron.app.on("window-all-closed",main.core.quit_app);

return main.core.node$module$electron.app.on("activate",main.core.activate);
});
cljs.core._STAR_main_cli_fn_STAR_ = main.core._main;

//# sourceMappingURL=core.js.map?rel=1510234293456
