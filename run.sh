#!/bin/bash

URL="http://localhost:4000"

echo ""
echo "  Compilando Less..."

mkdir -p assets/css
for file in style/*.less; do
  name=$(basename "$file" .less)
  lessc "$file" "assets/css/$name.css"
done

echo "  Less compilado!"
echo ""
echo "  Iniciando Jekyll..."
echo ""

# Watch do Less em background — aguarda modificação real antes de recompilar
(
  inotifywait -q -m -e modify --include '\.less$' style/ | while read -r dir event file; do
    echo "  Recompilando $file..."
    lessc "style/$file" "assets/css/${file%.less}.css"
    echo "  $file recompilado!"
  done
) &
LESS_WATCH_PID=$!

# Abre o browser após 3 segundos
(sleep 3 && xdg-open "$URL") &

echo -e "  Acesse: \e]8;;$URL\e\\$URL\e]8;;\e\\"
echo ""

trap "kill $LESS_WATCH_PID 2>/dev/null" EXIT
bundle exec jekyll serve --livereload --force_polling
