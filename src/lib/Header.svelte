<script>
  import { route, navigate } from './router.js'

  const links = [
    { label: '> _HOME', hash: '#/', match: ['home'] },
    { label: '> _PROJECTS', hash: '#/projects', match: ['projects', 'project'] }
  ]
</script>

<header class="header">
  <div class="logo">
    <span class="glitch" data-text="SYSTEM//OS">GEKINZUKU</span>
    <span class="version">v2.0.84</span>
  </div>

  <nav class="nav">
    {#each links as link}
      <button
        type="button"
        class="nav-btn"
        class:active={link.match.includes($route.name)}
        on:click={() => navigate(link.hash)}
      >
        {link.label}
      </button>
    {/each}
  </nav>
</header>
