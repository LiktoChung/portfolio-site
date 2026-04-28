<template>
  <section class="projects" id="projects">
    <div class="section-inner">
      <h2 class="section-title">Projects</h2>
      <div class="project-filters">
        <button
          v-for="f in filters"
          :key="f.id"
          :class="['filter-btn', { active: activeFilter === f.id }]"
          @click="activeFilter = f.id"
        >
          {{ f.label }}
        </button>
      </div>
      <div class="project-list">
        <article
          v-for="(proj, i) in filteredProjects"
          :key="i"
          class="project-card"
          :data-type="proj.type"
        >
          <h3 class="project-name">{{ proj.name }}</h3>
          <p class="project-role">{{ proj.role }}</p>
          <p class="project-desc">{{ proj.description }}</p>
          <p class="project-outcome">{{ proj.outcome }}</p>
          <div class="project-tech">
            <span v-for="t in proj.tech" :key="t" class="tech-tag">{{ t }}</span>
          </div>
          <div v-if="proj.link || proj.repo" class="project-links">
            <a v-if="proj.link" :href="proj.link" target="_blank" rel="noopener">Live</a>
            <a v-if="proj.repo" :href="proj.repo" target="_blank" rel="noopener">Repo</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/siteContent.js'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'webapp', label: 'Web apps' },
  { id: 'embedded', label: 'Embedded / C' },
  { id: 'migration', label: 'Migrations' },
]

const activeFilter = ref('all')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter((p) => p.type === activeFilter.value)
})
</script>

<style scoped>
.projects {
  padding: 3rem 1.5rem;
  background: var(--section-alt, #f5f5f5);
}
.project-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.filter-btn {
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--border, #ddd);
  background: var(--card-bg, #fff);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--text, #333);
}
.filter-btn:hover {
  border-color: var(--accent, #42b883);
  color: var(--accent, #42b883);
}
.filter-btn.active {
  background: var(--accent, #42b883);
  border-color: var(--accent, #42b883);
  color: #fff;
}
.project-list {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.project-card {
  padding: 1.25rem;
  background: var(--card-bg, #fff);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.project-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
  color: var(--text, #333);
}
.project-role {
  font-size: 0.85rem;
  color: var(--text-muted, #666);
  margin: 0 0 0.5rem;
}
.project-desc, .project-outcome {
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 0.5rem;
  color: var(--text, #333);
}
.project-outcome {
  font-style: italic;
  color: var(--text-muted, #666);
}
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.75rem;
}
.tech-tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  background: var(--section-alt, #eee);
  border-radius: 4px;
  color: var(--text-muted, #555);
}
.project-links {
  margin-top: 0.75rem;
  display: flex;
  gap: 1rem;
}
.project-links a {
  color: var(--accent, #42b883);
  text-decoration: none;
  font-size: 0.9rem;
}
.project-links a:hover {
  text-decoration: underline;
}
</style>
