(ns figwheel.connect.build-main-dev (:require [figwheel.client] [figwheel.client.utils] [tomaat.main.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/tomaat.main.core.reload (apply js/tomaat.main.core.reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'tomaat.main.core/reload' is missing"))), :build-id "main-dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

