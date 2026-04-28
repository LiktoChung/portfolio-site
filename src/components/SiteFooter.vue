<template>
  <footer class="footer">
    <div class="footer-inner">
      <p class="contact-line">
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        <span v-if="contact.location"> • {{ contact.location }}</span>
        <span v-if="contact.phone"> • {{ contact.phone }}</span>
      </p>
      <p v-if="hasLinks" class="links-line">
        <a
          v-for="link in contact.links"
          :key="link.label"
          class="footer-link"
          :href="link.url"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            v-if="link.icon === 'linkedin'"
            class="link-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 103.28 5 1.97 1.97 0 005.25 3zM20.44 13.18c0-3.11-1.66-4.56-3.88-4.56a3.35 3.35 0 00-3 1.65V8.5h-3.24V20h3.38v-5.7c0-1.5.28-2.95 2.15-2.95s1.89 1.75 1.89 3V20h3.38z"
              fill="currentColor"
            />
          </svg>
          <svg
            v-else-if="link.icon === 'github'"
            class="link-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 .5A12 12 0 000 12.67a12.2 12.2 0 008.2 11.58c.6.12.82-.27.82-.58v-2.03c-3.33.75-4.03-1.65-4.03-1.65a3.25 3.25 0 00-1.37-1.84c-1.12-.79.08-.78.08-.78a2.57 2.57 0 011.87 1.3 2.6 2.6 0 003.56 1.04 2.72 2.72 0 01.78-1.72c-2.66-.31-5.46-1.38-5.46-6.12a4.88 4.88 0 011.23-3.37 4.56 4.56 0 01.12-3.33s1.02-.34 3.34 1.29a11.23 11.23 0 016.08 0c2.31-1.63 3.33-1.29 3.33-1.29a4.56 4.56 0 01.12 3.33 4.88 4.88 0 011.23 3.37c0 4.75-2.8 5.8-5.48 6.1a3.04 3.04 0 01.86 2.38v3.53c0 .32.22.71.83.58A12.2 12.2 0 0024 12.67 12 12 0 0012 .5z"
              fill="currentColor"
            />
          </svg>
          <span>{{ link.label }}</span>
        </a>
      </p>
      <p v-if="footerText" class="footer-text">{{ footerText }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { site } from '../data/siteContent.js'

const footerText = site.footerText
const contact = site.footerContact
const hasLinks = computed(() => Array.isArray(contact.links) && contact.links.length > 0)
</script>

<style scoped>
.footer {
  padding: 1.5rem;
  text-align: center;
  background: var(--hero-bg, #1a1a2e);
  color: var(--hero-text, #eee);
  font-size: 0.9rem;
  opacity: 0.9;
}
.footer-inner {
  max-width: 960px;
  margin: 0 auto;
}
.footer p {
  margin: 0.25rem 0;
}
.footer a {
  color: inherit;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
.links-line {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.85rem;
  font-size: 0.95rem;
}
.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
.link-icon {
  width: 1rem;
  height: 1rem;
  flex: 0 0 auto;
}
.footer-text {
  opacity: 0.85;
}
</style>
