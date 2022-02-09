#!/usr/bin/env sh

set -e

yarn build

cd dist

git init
git add -A
git commit -m "New Deployment"
git push -f git@github.com:ismaelgomez1986/proyectoFinal-ajedrez.git master:gh-pages

cd -