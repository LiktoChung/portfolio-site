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
      <div class="hero-actions">
        <a v-if="hero.ctaText" :href="hero.ctaHref" class="hero-cta">{{ hero.ctaText }}</a>
        <button
          type="button"
          class="hero-pdf"
          :disabled="pdfLoading"
          @click="onDownloadPdf"
        >
          {{ pdfLoading ? 'Generating PDF…' : 'Download CV (PDF)' }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { hero } from '../data/siteContent.js'
import { downloadPortfolioPdf } from '../lib/cvPdf.js'

const OTHER_PATH = '/other.html'
const CLICKS_NEEDED = 5
/** Clicks must land within this many ms of the previous click to count as "in a row". */
const CLICK_GAP_MS = 2000

const pdfLoading = ref(false)

let avatarClickStreak = 0
let lastAvatarClickAt = 0

function cvPdfFilename() {
  const base = hero.name
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
  return `${base || 'Portfolio'}-CV.pdf`
}

async function onDownloadPdf() {
  if (pdfLoading.value) return
  pdfLoading.value = true
  try {
    await downloadPortfolioPdf({ filename: cvPdfFilename() })
  } catch (err) {
    console.error(err)
    window.alert(
      'Could not create the PDF. You can try again, or use your browser’s Print dialog and choose “Save as PDF”.',
    )
  } finally {
    pdfLoading.value = false
  }
}

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
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
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
.hero-pdf {
  display: inline-block;
  padding: 0.55rem 1.2rem;
  background: transparent;
  color: var(--accent, #42b883);
  border: 2px solid var(--accent, #42b883);
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
}
.hero-pdf:hover:not(:disabled) {
  background: rgba(66, 184, 131, 0.12);
}
.hero-pdf:disabled {
  opacity: 0.65;
  cursor: wait;
}
</style>
