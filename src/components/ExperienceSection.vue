<template>
  <section class="experience" id="experience">
    <div class="section-inner">
      <h2 class="section-title">Experience</h2>
      <div class="experience-list">
        <article v-for="(job, i) in experience" :key="i" class="job">
          <div class="job-header">
            <h3 class="job-role">{{ job.role }}</h3>
            <p class="job-company">
              <a v-if="job.url" :href="job.url" target="_blank" rel="noopener">{{ job.company }}</a>
              <template v-else>{{ job.company }}</template>
            </p>
            <p class="job-dates">{{ job.dates }}</p>
          </div>
          <ul class="job-bullets">
            <li v-for="(bullet, j) in job.bullets" :key="j">{{ bullet }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experience } from '../data/siteContent.js'
</script>

<style scoped>
.experience {
  padding: 3rem 1.5rem;
  background: var(--section-bg, #fff);
}
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.job {
  padding: 1.25rem;
  background: var(--card-bg, #fafafa);
  border-radius: 8px;
  border-left: 3px solid var(--accent, #42b883);
}
.job-header {
  margin-bottom: 0.75rem;
}
.job-role {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 0.2rem;
  color: var(--text, #333);
}
.job-company {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-muted, #666);
}
.job-company a {
  color: var(--accent, #42b883);
  text-decoration: none;
}
.job-company a:hover {
  text-decoration: underline;
}
.job-dates {
  margin: 0.25rem 0 0;
  font-size: 0.85rem;
  color: var(--text-muted, #888);
}
.job-bullets {
  margin: 0;
  padding-left: 1.25rem;
  line-height: 1.55;
  color: var(--text, #333);
  font-size: 0.95rem;
}
.job-bullets li {
  margin-bottom: 0.35rem;
}
.job-bullets li:last-child {
  margin-bottom: 0;
}
</style>
