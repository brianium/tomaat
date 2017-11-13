.DEFAULT_GOAL := build

install:
	npm install
	npm install -g electron-packager

compile:
	lein build

clean:
	rm -rf out

build: clean install compile
	electron-packager . Tomaat --out=out --ignore='\b(src\/tomaat|out|target|dev|Procfile~?)\b' --ignore='[.](clj|log)' --ignore='~$$' --ignore='\b(node_modules\/(?!react|react-dom|create-react-class|fbjs|loose-envify|object-assign))\b' --overwrite --icon="tomato.icns"
	cd out/*/Tomaat.app/Contents/Resources/app/ && ls -d node_modules/* | grep -Ev 'react|create-react-class|fbjs|loose-envify|object-assign|electron-default-menu|prop-types' | xargs rm -rf

.PHONY: install
