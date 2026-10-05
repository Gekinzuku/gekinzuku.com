<script>
  import { projects } from './projects.js'
</script>

<section class="tab-content active">
  <div class="hero-card">
    <div class="card-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="card-title">user@root:~/projects</span>
    </div>

    <div class="card-body">
      <h2 class="neon-title-secondary">&gt; PROJECT_DIRECTORY</h2>
      <p class="subtitle">
        // Expandable modules. Add new entries in <code>src/lib/projects.js</code>
      </p>
      <hr class="neon-line" />

      <div class="projects-grid" id="projects-list">
        {#if projects.length === 0}
          <div class="empty-state">
            <p class="blink">&gt; NO PROJECTS DEPLOYED YET_</p>
            <p class="sub-text">
              Check <code>src/lib/projects.js</code> to create your first page!
            </p>
          </div>
        {:else}
          {#each projects as project (project.id)}
            <a class="project-card" href="#/projects/{project.id}">
              <h3>&gt; {project.title}</h3>
              {#if project.summary}
                <p>{project.summary}</p>
              {/if}
              {#if project.stack && project.stack.length}
                <div class="card-meta">
                  {#each project.stack as tech}
                    <span class="tag">{tech}</span>
                  {/each}
                </div>
              {/if}
            </a>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</section>
