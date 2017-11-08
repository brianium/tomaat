(ns figwheel.connect.build-worker-dev (:require [worker.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "worker-dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

