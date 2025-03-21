# Old way of using redux practices

## Instruction for the instalations

- **Install redux library**
```bash
  npm i redux
```

- **Install this package to "establish the connection" between react and redux**
```bash
  npm i react-redux
```

- **Install a redux middleware, which is sitting between the dispatch function and the store**
```bash
 npm i redux-thunk
```

- **After import the middleware "thunk", and use function called: applyMiddleware() to inject middleware "thunk"**
```bash
  applyMiddleWare(thunk)
```

- **Install redux devtools extantion**
```bash
npm i redux-devtools-extension
```

- **After Instalation, use function to apply those developer tools** - use function
```bash
composeWithDevTools(applyMiddleware(thunk))
```
