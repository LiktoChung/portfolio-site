<template>
  <section class="skills" id="skills">
    <div class="section-inner">
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        <div v-for="group in skills" :key="group.title" class="skill-group">
          <h3 class="skill-group-title">{{ group.title }}</h3>
          <ul class="skill-tags">
            <li v-for="item in group.items" :key="item" class="skill-tag">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from '../data/siteContent.js'
</script>

<style scoped>
.skills {
  padding: 3rem 1.5rem;
  background: var(--section-alt, #f5f5f5);
}
.skills-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
.skill-group-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: var(--text, #333);
}
.skill-tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.skill-tag {
  padding: 0.35rem 0.75rem;
  background: var(--card-bg, #fff);
  border-radius: 6px;
  font-size: 0.9rem;
  color: var(--text, #333);
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
}
</style>
