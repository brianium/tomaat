(ns figwheel.connect.build-worker-dev (:require [figwheel.client] [figwheel.client.utils] [tomaat.worker.core]))
(figwheel.client/start {:build-id "worker-dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

