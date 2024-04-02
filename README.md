# Bethink design system

### Fontawesome PRO

DS requires access to font-awesome PRO. Add `.npmrc` file to root catalog. File should look like:

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=<TOKEN>
```
To obtain the token visit https://fontawesome.com/account/general, look for "Package Token". 
Login credentials: https://bethink.passwd.team/secrets/5ZldBeJcdG5L4YdrovDE

### JSON BIN X-Master-Key
1. Create `.env` file in the project root folder
2. Add key `JSON_BIN_X_ACCESS_KEY`
3. Value for the key take from https://bethink.passwd.team/secrets/dhpIPB7AappD0jOoU0WW

## Developing together with other project
> For development, a package can be linked into another project. This is often useful to test out new features or when trying to debug an issue in a package that manifests itself in another project.

Instruction: https://classic.yarnpkg.com/en/docs/cli/link/

## Releasing
1. Bump version in `package.json`
2. Wait until `Build and Deploy Dist` Github Action finishes
3. Create new tag and release in https://github.com/bethinkpl/design-system/releases
4. Run `npm publish --access public`
