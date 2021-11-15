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
