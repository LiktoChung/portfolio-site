import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'
import { site } from './data/siteContent.js'

if (site?.title) {
  document.title = site.title
}

createApp(App).mount('#app')
