import App from "./App.html"
import { Store } from "svelte/store.js"

const store = new Store({
  elements: []
})

const app = new App({
  target: document.body,
  store
})

export default app
