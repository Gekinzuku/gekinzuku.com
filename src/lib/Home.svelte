<script>
  const skills = [
    'JavaScript (ES6+)',
    'React / Vue',
    'Node.js',
    'CSS3 / NeonFX',
    'Git / CI/CD'
  ]
</script>

<section class="tab-content active">
  <div class="hero-card">
    <div class="card-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="card-title">user@root:~</span>
    </div>

    <div class="card-body">
      <h1 class="neon-title">WELCOME TO GEKINZUKU</h1>
      <p class="subtitle">&gt; FULL-STACK DEVELOPER // VAPORWAVE ENTHUSIAST</p>
      <hr class="neon-line" />

      <div class="bio">
        <p><span class="prompt">&gt;</span> Initializing profile sequence...</p>
        <p>
          <span class="prompt">&gt;</span> Specializing in interactive web experiences,
          glitch aesthetics, and modern web architectures.
        </p>
        <p><span class="prompt">&gt;</span> Status: <span class="status-online">ONLINE</span></p>
      </div>

      <div class="skills-section">
        <h3>&gt; SYSTEM_CAPABILITIES</h3>
        <div class="tags">
          {#each skills as skill}
            <span class="tag">{skill}</span>
          {/each}
        </div>
      </div>

      <div class="social-links">
        <a
          href="https://github.com/Gekinzuku/gekinzuku.com"
          target="_blank"
          rel="noreferrer"
          class="cyber-btn">&gt; GITHUB</a
        >
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" class="cyber-btn"
          >&gt; LINKEDIN</a
        >
        <a href="mailto:user@example.com" class="cyber-btn">&gt; CONTACT</a>
      </div>
    </div>
  </div>
</section>
