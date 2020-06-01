import { writable } from 'svelte/store'

function createContent() {
  const { set, update, subscribe } = writable(null)

  return {
    set, update, subscribe
  }
}

export const content = createContent()