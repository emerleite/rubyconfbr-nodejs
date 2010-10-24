#!/bin/bash

usuage() {
  echo "Usuage: ./deploy.sh <mode>
                mode                 {js|coffee}"
	echo ""
  exit 1
}

if [ -z $1 ]
then
  usuage
fi

case "$1" in
  js)
    cp server_original.js server.js
    git commit -am "generate server.jsi from js"
    git push joyent master
    ;;
  coffee)
    coffee -c server.coffee
    git commit -am "generate server.jsi from coffeescript"
    git push joyent master
    ;;
  *)
    usuage
    ;;
esac

exit 0
