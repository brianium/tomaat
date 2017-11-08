// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('main.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
main.core.node$module$electron = require('electron');
cljs.nodejs.enable_util_print_BANG_.call(null);
main.core._STAR_main_window = cljs.core.atom.call(null,null);
main.core.create_window = (function main$core$create_window(){
cljs.core.reset_BANG_.call(null,main.core._STAR_main_window,(new main.core.node$module$electron.BrowserWindow(({"width": (300), "height": (500), "resizable": false}))));

cljs.core.deref.call(null,main.core._STAR_main_window).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname),"/public/index.html"].join(''));

return cljs.core.deref.call(null,main.core._STAR_main_window).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,main.core._STAR_main_window,null);
}));
});
main.core.node$module$electron.app.on("ready",main.core.create_window);
main.core.quit_app = (function main$core$quit_app(){
if(cljs.core._EQ_.call(null,"darwin",process.platform)){
return null;
} else {
return main.core.node$module$electron.app.quit();
}
});
main.core.node$module$electron.app.on("window-all-closed",main.core.quit_app);
main.core.activate = (function main$core$activate(){
if((cljs.core.deref.call(null,main.core._STAR_main_window) == null)){
return main.core.create_window.call(null);
} else {
return null;
}
});
main.core.node$module$electron.app.on("activate",main.core.activate);
