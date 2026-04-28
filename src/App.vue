<template>
  <div class="app">
    <AppNav />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import AppNav from './components/AppNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
.app {
  min-height: 100vh;
}
</style>
