import { writable } from 'svelte/store'

/**
 * Minimal dependency-free hash router.
 *
 *   #/                     -> { name: 'home' }
 *   #/projects             -> { name: 'projects' }
 *   #/projects/<id>        -> { name: 'project', id: '<id>' }
 */
function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '')
  const parts = raw.split('/').filter(Boolean)

  if (parts[0] === 'projects') {
    return parts[1]
      ? { name: 'project', id: decodeURIComponent(parts[1]) }
      : { name: 'projects' }
  }

  return { name: 'home' }
}

export const route = writable(
  typeof window === 'undefined' ? { name: 'home' } : parseHash()
)

export function navigate(path) {
  if (typeof window === 'undefined') return
  window.location.hash = path
}

if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', () => route.set(parseHash()))
}
