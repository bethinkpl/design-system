#!/usr/bin/env bash

if ! command -v s3cmd &> /dev/null
then
    echo "s3cmd could not be found"
    exit
fi

BUCKET="wnl-design-system-preview"
BRANCH=$(git symbolic-ref --short -q HEAD | grep -oE -- '[A-Z]+-[0-9]+')
LOCAL_DIRECTORY="public/storybook"

if [ ! "$BRANCH" ]
then
  echo "invalid branch name"
  exit
fi

echo "I am building a storybook"
yarn storybook:build

echo "Deploying storybook to $BUCKET as $BRANCH"
s3cmd put -r -P $LOCAL_DIRECTORY/* s3://$BUCKET/$BRANCH/

echo "Setting Content-Type to application/javascript for all .js files"
find "$LOCAL_DIRECTORY" -type f -name "*.js" | while read FILE; do
    RELATIVE_PATH="${FILE#"$LOCAL_DIRECTORY/"}"
    echo "s3://$BUCKET/$BRANCH/$RELATIVE_PATH"
    s3cmd modify --add-header="Content-Type: application/javascript" s3://$BUCKET/$BRANCH/$RELATIVE_PATH
done

echo "Setting Content-Type to text/css for all .css files"
find "$LOCAL_DIRECTORY" -type f -name "*.css" | while read FILE; do
    RELATIVE_PATH="${FILE#"$LOCAL_DIRECTORY/"}"
    echo "s3://$BUCKET/$BRANCH/$RELATIVE_PATH"
    s3cmd modify --add-header="Content-Type: text/css" s3://$BUCKET/$BRANCH/$RELATIVE_PATH
done

echo "Your storybook is available on: https://$BUCKET.s3.amazonaws.com/$BRANCH/index.html"
