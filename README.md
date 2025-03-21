# Old way of using redux practices (learning purposes)

Install redux library
```bash
  npm i redux
```
<br>

Install this package to "establish the connection" between react and redux
```bash
  npm i react-redux
```
<br>

Install a redux middleware, which is sitting between the dispatch function and the store
```bash
 npm i redux-thunk
```
<br>

After import the middleware "thunk", and use function called: applyMiddleware() to inject middleware "thunk"
```bash
  applyMiddleWare(thunk)
```
<br>

Install redux devtools extantion
```bash
npm i redux-devtools-extension
```
<br>

After Instalation, use function to apply those developer tools we just wrap injected middleware int o a function
```bash
composeWithDevTools(applyMiddleware(thunk))
```
