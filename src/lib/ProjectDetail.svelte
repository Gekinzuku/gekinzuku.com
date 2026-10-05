<script>
  import { getProject } from './projects.js'

  export let id

  $: project = getProject(id)
</script>

<section class="tab-content active">
  <div class="hero-card">
    <div class="card-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="card-title">user@root:~/projects/{id}</span>
    </div>

    <div class="card-body">
      {#if project}
        <h1 class="neon-title">&gt; {project.title}</h1>
        {#if project.category}
          <p class="subtitle">// {project.category}</p>
        {/if}
        <hr class="neon-line" />

        <div class="bio">
          {#each project.description || [] as line}
            <p><span class="prompt">&gt;</span> {line}</p>
          {/each}
        </div>

        {#if project.stack && project.stack.length}
          <div class="skills-section">
            <h3>&gt; TECH_STACK</h3>
            <div class="tags">
              {#each project.stack as tech}
                <span class="tag">{tech}</span>
              {/each}
            </div>
          </div>
        {/if}

        <div class="social-links">
          {#if project.demo}
            <a href={project.demo} target="_blank" rel="noreferrer" class="cyber-btn"
              >&gt; LIVE DEMO</a
            >
          {/if}
          {#if project.source}
            <a href={project.source} target="_blank" rel="noreferrer" class="cyber-btn"
              >&gt; SOURCE CODE</a
            >
          {/if}
          <a href="#/projects" class="cyber-btn">&lt; _RETURN TO DIRECTORY</a>
        </div>
      {:else}
        <h1 class="neon-title">&gt; 404</h1>
        <p class="subtitle">// MODULE NOT FOUND</p>
        <hr class="neon-line" />

        <div class="bio">
          <p>
            <span class="prompt">&gt;</span> No project registered under id
            <code>{id}</code>.
          </p>
        </div>

        <div class="social-links">
          <a href="#/projects" class="cyber-btn">&lt; _RETURN TO DIRECTORY</a>
          <a href="#/" class="cyber-btn">&lt; _RETURN HOME</a>
        </div>
      {/if}
    </div>
  </div>
</section>
