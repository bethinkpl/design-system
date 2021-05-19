# Bethink design system

### Typescript
You have to transpile it in the project where it is included as dependency. Make sure you don't exclude this package in your `webpack` config file:
```
{
    test: /\.ts$/,
    exclude: /node_modules\/(?!(design-system)\/).*|vue\/src/,
    loader: 'ts-loader',
    options: {
        ...
    },
},
```

### svg-loader
We use svg files as Vue components. You have to add svg-loader to your webpack config:
```
{
    test: /\.svg$/,
    use: ['babel-loader', 'vue-svg-loader'],
},
```

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