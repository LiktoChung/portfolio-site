<template>
  <section class="education" id="education">
    <div class="section-inner">
      <h2 class="section-title">Education</h2>
      <div class="education-list">
        <article v-for="(edu, i) in education" :key="i" class="edu-item">
          <h3 class="edu-degree">{{ edu.degree }}</h3>
          <p class="edu-institution">{{ edu.institution }}</p>
          <p class="edu-years">{{ edu.years }}</p>
          <p v-if="edu.notes" class="edu-notes">{{ edu.notes }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education } from '../data/siteContent.js'
</script>

<style scoped>
.education {
  padding: 3rem 1.5rem;
  background: var(--section-bg, #fff);
}
.education-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.edu-item {
  padding: 1rem 0;
  border-bottom: 1px solid var(--border, #eee);
}
.edu-item:last-child {
  border-bottom: none;
}
.edu-degree {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 0.2rem;
  color: var(--text, #333);
}
.edu-institution, .edu-years {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-muted, #666);
}
.edu-notes {
  margin: 0.35rem 0 0;
  font-size: 0.9rem;
  color: var(--text-muted, #666);
  line-height: 1.45;
}
</style>
