// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('data.core');
goog.require('cljs.core');
data.core.node$module$electron = require('electron');
data.core.node$module$path = require('path');
data.core.node$module$fs = require('fs');
data.core.db_path = (function data$core$db_path(){
return data.core.node$module$path.join.call(null,(function (){var or__11708__auto__ = data.core.node$module$electron.app;
if(cljs.core.truth_(or__11708__auto__)){
return or__11708__auto__;
} else {
return data.core.node$module$electron.remote.app;
}
})().getPath("userData"),"tomaat.json");
});
data.core.json_parse = (function data$core$json_parse(string){
return JSON.parse(string);
});
data.core.json_stringify = (function data$core$json_stringify(data__$1){
return JSON.stringify(data__$1);
});
data.core.read = (function data$core$read(){
try{return cljs.core.js__GT_clj.call(null,data.core.json_parse.call(null,data.core.node$module$fs.readFileSync.call(null,data.core.db_path.call(null))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}catch (e16658){if((e16658 instanceof Object)){
var e = e16658;
return cljs.core.PersistentArrayMap.EMPTY;
} else {
throw e16658;

}
}});
data.core.write_file_sync = (function data$core$write_file_sync(data__$1,path){
return data.core.node$module$fs.writeFileSync.call(null,path,data__$1);
});
data.core.write = (function data$core$write(data__$1){
return data.core.write_file_sync.call(null,data.core.json_stringify.call(null,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,data.core.read.call(null),data__$1))),data.core.db_path.call(null));
});
