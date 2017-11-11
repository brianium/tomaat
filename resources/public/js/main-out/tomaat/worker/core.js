// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.worker.core');
goog.require('cljs.core');
goog.require('tomaat.worker.util');
goog.require('tomaat.worker.timer');
goog.require('tomaat.worker.settings');
goog.require('tomaat.worker.slack');
tomaat.worker.core.start = cljs.core.juxt.call(null,tomaat.worker.timer.start,tomaat.worker.slack.start_pomodoro);
tomaat.worker.core.stop = cljs.core.juxt.call(null,tomaat.worker.timer.stop,tomaat.worker.slack.stop_pomodoro);
tomaat.worker.core._main = (function tomaat$worker$core$_main(){
tomaat.worker.util.on.call(null,"start-timer",tomaat.worker.core.start);

tomaat.worker.util.on.call(null,"stop-timer",tomaat.worker.core.stop);

return tomaat.worker.util.on.call(null,"update-settings",tomaat.worker.settings.update_settings);
});
cljs.core._STAR_main_cli_fn_STAR_ = tomaat.worker.core._main;

//# sourceMappingURL=core.js.map?rel=1510360382915
