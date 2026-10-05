/**
 * PROJECT REGISTRY
 * -----------------
 * Push a new object here and it will automatically appear in the
 * PROJECT_DIRECTORY grid and get its own detail page at
 * `#/projects/<id>`.
 *
 * Delete the sample entry below to restore the original
 * "> NO PROJECTS DEPLOYED YET_" empty state.
 */
export const projects = [
  {
    id: 'sample-project',
    title: 'SAMPLE_PROJECT',
    summary: 'A placeholder module demonstrating the directory + detail flow.',
    category: 'WEB APP / SVELTE + VITE',
    description: [
      'Project Description goes here...',
      'Add screenshots, embedded demos, or full technical specifications.'
    ],
    stack: ['Svelte', 'Vite', 'CSS3 / NeonFX'],
    demo: 'https://example.com',
    source: 'https://github.com/Gekinzuku/gekinzuku.com'
  }
]

export function getProject(id) {
  return projects.find((project) => project.id === id)
}
