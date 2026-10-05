<script>
  import { route } from './lib/router.js'
  import Scanlines from './lib/Scanlines.svelte'
  import Header from './lib/Header.svelte'
  import Footer from './lib/Footer.svelte'
  import Home from './lib/Home.svelte'
  import Projects from './lib/Projects.svelte'
  import ProjectDetail from './lib/ProjectDetail.svelte'
</script>

<svelte:body class="crt" />

<Scanlines />
<Header />

<main class="main-container">
  {#if $route.name === 'home'}
    <Home />
  {:else if $route.name === 'projects'}
    <Projects />
  {:else if $route.name === 'project'}
    <ProjectDetail id={$route.id} />
  {:else}
    <Home />
  {/if}
</main>

<Footer />
