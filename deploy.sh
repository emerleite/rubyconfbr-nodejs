#!/bin/bash

usuage() {
  echo "Usuage: ./deploy.sh <mode>
                mode        {js|coffee}"
	echo ""
  exit 1
}

deploy() {
  git commit -am "generate server.js"
  git push joyent master
}

if [ -z $1 ]
then
  usuage
fi

case "$1" in
  js)
    cp server_original.js server.js
    deploy
    ;;
  coffee)
    coffee -c server.coffee
    deploy
    ;;
  *)
    usuage
    ;;
esac

exit 0
