# Bethink design system

### Fontawesome PRO

DS requires access to font-awesome PRO. Add `FONT_AWESOME_AUTH_TOKEN` environment variable to your .zshrc, .bashrc

```
export FONT_AWESOME_AUTH_TOKEN=<TOKEN>
```

To obtain the token visit https://fontawesome.com/account/general, look for "Package Token". 
Login credentials: https://bethink.passwd.team/secrets/5ZldBeJcdG5L4YdrovDE

### JSON BIN X-Master-Key
1. Create `.env` file in the project root folder
2. Add key `JSON_BIN_X_ACCESS_KEY`
3. Value for the key take from https://bethink.passwd.team/secrets/dhpIPB7AappD0jOoU0WW

## Developing together with wnl-platform
https://bethink.atlassian.net/wiki/spaces/IT/pages/1095073793/Jak+prowadzi+r+wnoleg+prac+z+platform+i+Design+System

## Deploying for design review
Add a comment with `/review` in your PR to deploy Storybook to S3. Once the deployment is complete, a new comment with the URL will be posted.
If you use the review command more than once and the changes are not visible in the link, add a query parameter to avoid issues with caching.
`?cd=123`

## Releasing
Build, deploy Storybook and publish to NPM by triggering the **Publish to NPM** action manually: Actions → Publish to NPM → Run workflow

> **Note:** `NPM_TOKEN` must be set in repository secrets. The recommended token type is a [Granular Access Token](https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-granular-access-tokens-on-the-website) scoped to this package only. Avoid running `npm publish` locally.
