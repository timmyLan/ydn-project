Koa2 and koa-hbs Example
===

## Requirements

- Node v7 or greater

## Get Started

```bash
npm install
npm start
```

## What The

The `koa-convert` module uses `co` to wrap old Koa v1 generator functions and
return a `Promise`. It's highly effective. However, `koa-hbs` attaches the
`render` function to the current Koa context for any given request. The `render`
function is a generator function and as such cannot be `await`ed. To use the
function, we have to follow the same pattern as `koa-convert`. We wrap the
function using `co` and reattach it to the context. That allows us to use it
as we would any other async/await method.
