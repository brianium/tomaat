(defproject tomaat "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.9.0-alpha17"]
                 [org.clojure/clojurescript "1.9.908"]
                 [org.clojure/core.async  "0.3.443"]
                 [cljsjs/nodejs-externs "1.0.4-1"]
                 [reagent "0.7.0"]]

  :plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            [lein-cooper "1.2.2"]
            [lein-shell "0.5.0"]]

  :source-paths ["src"]

  :cljsbuild {:builds
              [{:id           "electron"
                :source-paths ["src/electron"]
                :compiler     {:main           electron.core
                               :output-to      "resources/main.js"
                               :output-dir     "resources/public/js/electron"
                               ;; anything other than simple seems to jack things up
                               :optimizations  :simple
                               :cache-analysis true
                               :pretty-print   true
                               :install-deps   true
                               :target         :nodejs
                               :npm-deps       {:electron "1.7.9"}}}

               {:id           "ui-dev"
                :source-paths ["src/ui"]
                :compiler     {:main          ui.core
                               :output-to     "resources/public/js/ui.js"
                               :output-dir    "resources/public/js/ui-out"
                               :asset-path    "js/ui-out"
                               :optimizations :simple
                               :install-deps  true
                               :hashbang      false
                               :target        :nodejs
                               :npm-deps      {:electron "1.7.9"}}}

               {:id           "worker-dev"
                :source-paths ["src/worker"]
                :compiler     {:main          worker.core
                               :output-to     "resources/public/js/worker.js"
                               :output-dir    "resources/public/js/worker-out"
                               :asset-path    "js/worker-out"
                               :optimizations :simple
                               :install-deps  true
                               :hashbang      false
                               :target        :nodejs
                               :npm-deps      {:electron "1.7.9"}}}]}

  :aliases {"electron" ["shell" "node_modules/.bin/electron" "resources/main.js"]
            "noderepl"     ["run" "-m" "clojure.main" "repl.clj"]}


  ;; Setting up nREPL for Figwheel and ClojureScript dev
  ;; Please see:
  ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl
  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.4"]
                                  [figwheel-sidecar "0.5.13"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src/tomaat" "dev"]
                   :plugins      [[cider/cider-nrepl "0.15.1"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :clean-targets ^{:protect false} ["resources/main.js"
                                                     "resources/public/js"
                                                     :target-path]}})
