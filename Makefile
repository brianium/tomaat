.DEFAULT_GOAL := build

install:
	npm install
	npm install -g electron-packager

compile:
	lein build

build: install compile
	electron-packager . Tomaat --out=out --ignore='\b(src\/tomaat|out|target|dev|Procfile~?)\b' --ignore='[.](clj|log)' --ignore='~$$' --overwrite --icon="tomato.icns"

.PHONY: install
