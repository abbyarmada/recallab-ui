#!/bin/bash

FILES=$(find "$1" -type f -name '*.*')

for entry in $FILES
do
  fullPath=$(realpath $entry)
  stylefmt -c .stylelintrc.json "$entry" "$entry"
done

# ./node_modules/.bin/stylefmt -c .stylelintrc.json $1 $1
