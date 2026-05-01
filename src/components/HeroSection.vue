<template>
  <header class="hero" id="hero">
    <div class="hero-inner">
      <img
        v-if="hero.avatar"
        :src="hero.avatar"
        alt=""
        class="hero-avatar"
        @click="onAvatarClick"
      />
      <h1 class="hero-name">{{ hero.name }}</h1>
      <p class="hero-title">{{ hero.title }}</p>
      <p class="hero-tagline">{{ hero.tagline }}</p>
      <a v-if="hero.ctaText" :href="hero.ctaHref" class="hero-cta">{{ hero.ctaText }}</a>
    </div>
  </header>
</template>

<script setup>
import { hero } from '../data/siteContent.js'

const OTHER_PATH = '/other.html'
const CLICKS_NEEDED = 5
/** Clicks must land within this many ms of the previous click to count as "in a row". */
const CLICK_GAP_MS = 2000

let avatarClickStreak = 0
let lastAvatarClickAt = 0

function onAvatarClick() {
  const now = Date.now()
  if (now - lastAvatarClickAt > CLICK_GAP_MS) {
    avatarClickStreak = 0
  }
  lastAvatarClickAt = now
  avatarClickStreak += 1
  if (avatarClickStreak >= CLICKS_NEEDED) {
    avatarClickStreak = 0
    window.location.assign(OTHER_PATH)
  }
}
</script>

<style scoped>
.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1.5rem;
  background: var(--hero-bg, #1a1a2e);
  color: var(--hero-text, #eee);
}
.hero-inner {
  max-width: 42rem;
}
.hero-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}
.hero-name {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 0.25rem;
  letter-spacing: -0.02em;
}
.hero-title {
  font-size: 1.25rem;
  color: var(--accent, #42b883);
  margin: 0 0 0.5rem;
  font-weight: 500;
}
.hero-tagline {
  font-size: 1rem;
  opacity: 0.9;
  margin: 0 0 1.5rem;
  line-height: 1.5;
}
.hero-cta {
  display: inline-block;
  padding: 0.6rem 1.25rem;
  background: var(--accent, #42b883);
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: opacity 0.2s;
}
.hero-cta:hover {
  opacity: 0.9;
}
</style>
