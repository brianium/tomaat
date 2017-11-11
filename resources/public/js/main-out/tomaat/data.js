// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.data');
goog.require('cljs.core');
tomaat.data.node$module$electron = require('electron');
tomaat.data.node$module$path = require('path');
tomaat.data.node$module$fs = require('fs');
tomaat.data.db_path = (function tomaat$data$db_path(){
return tomaat.data.node$module$path.join.call(null,(function (){var or__30072__auto__ = tomaat.data.node$module$electron.app;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return tomaat.data.node$module$electron.remote.app;
}
})().getPath("userData"),"tomaat.json");
});
tomaat.data.json_parse = (function tomaat$data$json_parse(string){
return JSON.parse(string);
});
tomaat.data.json_stringify = (function tomaat$data$json_stringify(data){
return JSON.stringify(data);
});
tomaat.data.read = (function tomaat$data$read(){
try{return cljs.core.js__GT_clj.call(null,tomaat.data.json_parse.call(null,tomaat.data.node$module$fs.readFileSync.call(null,tomaat.data.db_path.call(null))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}catch (e38343){if((e38343 instanceof Object)){
var e = e38343;
return cljs.core.PersistentArrayMap.EMPTY;
} else {
throw e38343;

}
}});
tomaat.data.write_file_sync = (function tomaat$data$write_file_sync(data,path){
return tomaat.data.node$module$fs.writeFileSync.call(null,path,data);
});
tomaat.data.write = (function tomaat$data$write(data){
return tomaat.data.write_file_sync.call(null,tomaat.data.json_stringify.call(null,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,tomaat.data.read.call(null),data))),tomaat.data.db_path.call(null));
});

//# sourceMappingURL=data.js.map?rel=1510360382464
