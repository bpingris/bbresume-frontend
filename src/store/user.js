import { writable } from 'svelte/store'
import data from '../../public/resume/data.json'

function createUser() {
  const { set, update, subscribe } = writable(data)

  return {
    set, update, subscribe
  }
}

export const user = createUser()