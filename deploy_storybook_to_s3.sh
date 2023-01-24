#!/usr/bin/env bash

if ! command -v s3cmd &> /dev/null
then
    echo "s3cmd could not be found"
    exit
fi

BUCKET="wnl-design-system-preview"
BRANCH=$(git symbolic-ref --short -q HEAD | grep -oE -- '[A-Z]+-[0-9]+')

if [ ! "$BRANCH" ]
then
  echo "invalid branch name"
  exit
fi

echo "I am building a storybook"
yarn storybook:build

echo "Deploying storybook to $BUCKET as $BRANCH"
s3cmd put -r -P public/storybook/* s3://$BUCKET/$BRANCH/

echo "Your storybook is available on: https://$BUCKET.s3.amazonaws.com/$BRANCH/index.html"
