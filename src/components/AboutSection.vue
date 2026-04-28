<template>
  <section class="about" id="about">
    <div class="section-inner">
      <h2 class="section-title">About</h2>
      <div class="about-content">
        <p v-for="(para, i) in about.summary" :key="i" class="about-text">{{ para }}</p>
        <p v-if="about.location" class="about-meta">{{ about.location }}</p>
        <p v-if="about.availability" class="about-meta">{{ about.availability }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { about } from '../data/siteContent.js'
</script>

<style scoped>
.about {
  padding: 3rem 1.5rem;
  background: var(--section-bg, #fff);
}
.about-text {
  margin: 0 0 1rem;
  line-height: 1.65;
  color: var(--text, #333);
}
.about-text:last-of-type {
  margin-bottom: 0.5rem;
}
.about-meta {
  margin: 0.25rem 0 0;
  font-size: 0.95rem;
  color: var(--text-muted, #666);
}
</style>
