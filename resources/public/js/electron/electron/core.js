// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('electron.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
electron.core.node$module$electron = require('electron');
cljs.nodejs.enable_util_print_BANG_.call(null);
electron.core._STAR_main_window = cljs.core.atom.call(null,null);
electron.core.create_window = (function electron$core$create_window(){
cljs.core.println.call(null,"Creating window");

cljs.core.reset_BANG_.call(null,electron.core._STAR_main_window,(new electron.core.node$module$electron.BrowserWindow(({"width": (300), "height": (500), "resizable": false}))));

cljs.core.deref.call(null,electron.core._STAR_main_window).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname),"/public/index.html"].join(''));

return cljs.core.deref.call(null,electron.core._STAR_main_window).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,electron.core._STAR_main_window,null);
}));
});
electron.core.node$module$electron.app.on("ready",electron.core.create_window);
electron.core.quit_app = (function electron$core$quit_app(){
if(cljs.core._EQ_.call(null,"darwin",process.platform)){
return null;
} else {
return electron.core.node$module$electron.app.quit();
}
});
electron.core.node$module$electron.app.on("window-all-closed",electron.core.quit_app);
electron.core.activate = (function electron$core$activate(){
if((cljs.core.deref.call(null,electron.core._STAR_main_window) == null)){
return electron.core.create_window.call(null);
} else {
return null;
}
});
electron.core.node$module$electron.app.on("activate",electron.core.activate);
