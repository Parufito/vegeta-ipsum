#!/bin/bash
# setup.sh: Personalitza el template i genera icones

# Llegeix variables del .env
if [ -f assets/.env ]; then
  source assets/.env
  missing_vars=""
  for var in APP_NAME SHORT_NAME DESCRIPTION URL; do
    if [ -z "${!var}" ]; then
      missing_vars="$missing_vars $var"
    fi
  done
  if [ -n "$missing_vars" ]; then
    echo "Falten variables al .env:$missing_vars"
    exit 1
  fi
else
  echo ".env no trobat! Crea'l amb APP_NAME, SHORT_NAME, DESCRIPTION, URL, etc."
  exit 1
fi

ICON_SRC="assets/square.png"
SOCIALMEDIA_SRC="assets/horizontal.png"

# Substitueix [CHANGEME ...] a tots els fitxers
set -e
echo "Actualitzant fitxers de configuració..."

find . -type f \( -name "*.html" -o -name "*.js" -o -name "*.json" \) -exec \
  sed -i \
    -e "s/\[CHANGEME - Web App Title\]/${APP_NAME//\//\\/}/g" \
    -e "s/\[CHANGEME - Short name\]/${SHORT_NAME//\//\\/}/g" \
    -e "s/\[CHANGEME - Descripció WebApp\]/${DESCRIPTION//\//\\/}/g" \
    -e "s|\[CHANGEME - WebApp URL\]|$URL|g" \
    {} +

# Genera icones
convert "$ICON_SRC" -resize 512x512 images/icon-512x512.png
convert "$ICON_SRC" -resize 192x192 images/icon-192x192.png
convert "$ICON_SRC" -resize 180x180 images/apple-touch-icon.png
convert "$ICON_SRC" -resize 32x32 favicon.ico

# Genera imatges xarxes socials
convert "$SOCIALMEDIA_SRC" -resize 1200x630^ -gravity center -extent 1200x630 images/og-card.png
convert "$SOCIALMEDIA_SRC" -resize 1200x628^ -gravity center -extent 1200x628 images/twitter-card.png

echo "Personalització i generació d'icones completada."
echo "Revisa que els fitxers s'han actualitzat correctament:"
echo "- manifest.json"
echo "- service-worker.js"
echo "- index.html"