# Bethink design system

### Fontawesome PRO

DS requires access to font-awesome PRO. Add `.npmrc` file to root catalog. File should looks like:

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=<TOKEN>
```

## Developing together with other project
> For development, a package can be linked into another project. This is often useful to test out new features or when trying to debug an issue in a package that manifests itself in another project.

Instruction: https://classic.yarnpkg.com/en/docs/cli/link/

## Usage

Components like input/select/checkbox etc have to be  placed inside `App` component (`lib/js/atoms/App`)

## Consequences of using Vuetify
Vuetify is distributed with css reset and global styles. In order to keep existing application styles we had to disable these global styles using `postcss` - see [.postcssrc.js](.postcssrc.js)

## Releasing
1. Bump version in `package.json`
2. Wait until `Build and Deploy Dist` Github Action finishes
3. Create new tag and release in https://github.com/bethinkpl/design-system/releases
