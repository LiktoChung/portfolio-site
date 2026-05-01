<template>
  <nav class="nav" aria-label="Main">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">{{ heroName }}</a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { hero } from '../data/siteContent.js'

const heroName = hero.name
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.nav-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.nav-logo {
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
}
.nav-logo:hover {
  color: var(--accent, #42b883);
}
.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
}
.nav-links a {
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  font-size: 0.9rem;
}
.nav-links a:hover {
  color: var(--accent, #42b883);
}
</style>
