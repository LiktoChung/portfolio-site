<template>
  <section class="contact" id="contact">
    <div class="section-inner">
      <h2 class="section-title">Contact</h2>
      <div class="contact-content">
        <p><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
        <p v-if="contact.phone"><a :href="`tel:${contact.phone}`">{{ contact.phone }}</a></p>
        <p v-if="contact.location" class="contact-location">{{ contact.location }}</p>
        <div class="contact-links">
          <a
            v-for="link in contact.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { contact } from '../data/siteContent.js'
</script>

<style scoped>
.contact {
  padding: 3rem 1.5rem;
  background: var(--section-alt, #f5f5f5);
}
.contact-content p {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: var(--text, #333);
}
.contact-content a {
  color: var(--accent, #42b883);
  text-decoration: none;
}
.contact-content a:hover {
  text-decoration: underline;
}
.contact-location {
  color: var(--text-muted, #666);
}
.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}
.contact-links a {
  padding: 0.4rem 0.8rem;
  background: var(--card-bg, #fff);
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
}
.contact-links a:hover {
  text-decoration: none;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
</style>
