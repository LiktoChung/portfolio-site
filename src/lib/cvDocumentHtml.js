import cvDocumentCss from '../assets/cvDocument.css?raw'
import {
  hero,
  about,
  skills,
  experience,
  education,
  site,
} from '../data/siteContent.js'

export { cvDocumentCss }

function esc(s) {
  if (s == null || s === '') return ''
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Resolve relative paths (e.g. /avatar.jpg) against the current page */
function absUrl(path) {
  if (!path) return ''
  try {
    return new URL(path, window.location.href).href
  } catch {
    return path
  }
}

/** Inline SVGs for PDF (same paths as SiteFooter) — html2canvas paints reliably */
const ICON_LINKEDIN = `<svg class="cv-social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 103.28 5 1.97 1.97 0 005.25 3zM20.44 13.18c0-3.11-1.66-4.56-3.88-4.56a3.35 3.35 0 00-3 1.65V8.5h-3.24V20h3.38v-5.7c0-1.5.28-2.95 2.15-2.95s1.89 1.75 1.89 3V20h3.38z"/></svg>`

const ICON_GITHUB = `<svg class="cv-social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5A12 12 0 000 12.67a12.2 12.2 0 008.2 11.58c.6.12.82-.27.82-.58v-2.03c-3.33.75-4.03-1.65-4.03-1.65a3.25 3.25 0 00-1.37-1.84c-1.12-.79.08-.78.08-.78a2.57 2.57 0 011.87 1.3 2.6 2.6 0 003.56 1.04 2.72 2.72 0 01.78-1.72c-2.66-.31-5.46-1.38-5.46-6.12a4.88 4.88 0 011.23-3.37 4.56 4.56 0 01.12-3.33s1.02-.34 3.34 1.29a11.23 11.23 0 016.08 0c2.31-1.63 3.33-1.29 3.33-1.29a4.56 4.56 0 01.12 3.33 4.88 4.88 0 011.23 3.37c0 4.75-2.8 5.8-5.48 6.1a3.04 3.04 0 01.86 2.38v3.53c0 .32.22.71.83.58A12.2 12.2 0 0024 12.67 12 12 0 0012 .5z"/></svg>`

function socialIconSvg(icon) {
  if (icon === 'linkedin') return ICON_LINKEDIN
  if (icon === 'github') return ICON_GITHUB
  return ''
}

function contactStackHtml() {
  const contact = site.footerContact
  const lines = []
  if (contact.email) {
    lines.push(
      `<p class="cv-contact-line"><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></p>`,
    )
  }
  if (contact.location) {
    lines.push(`<p class="cv-contact-line">${esc(contact.location)}</p>`)
  }
  if (contact.phone) {
    lines.push(`<p class="cv-contact-line">${esc(contact.phone)}</p>`)
  }
  if (!lines.length) return ''
  return `<div class="cv-contact-stack">${lines.join('')}</div>`
}

function socialStackHtml() {
  const links = site.footerContact.links || []
  if (!links.length) return ''
  const rows = links
    .map((link) => {
      const icon = socialIconSvg(link.icon)
      return `<a class="cv-social-link" href="${esc(link.url)}" rel="noreferrer noopener">${icon}<span class="cv-social-label">${esc(link.label)}</span></a>`
    })
    .join('')
  return `<div class="cv-social-stack">${rows}</div>`
}

function headerAsideHtml() {
  const stack = contactStackHtml()
  const social = socialStackHtml()
  if (!stack && !social) return ''
  return `<div class="cv-header-aside">${stack}${social}</div>`
}

function headerHtml() {
  const aside = headerAsideHtml()
  const nameBlock = `<div class="cv-header-text">
          <h1 class="cv-name">${esc(hero.name)}</h1>
          <p class="cv-title">${esc(hero.title)}</p>
          <p class="cv-tagline">${esc(hero.tagline)}</p>
        </div>`
  if (hero.avatar) {
    const src = esc(absUrl(hero.avatar))
    return `<header class="cv-header">
      <div class="cv-header-main">
        <img src="${src}" alt="" class="cv-avatar" width="56" height="56" />
        ${nameBlock}
        ${aside}
      </div>
    </header>`
  }
  return `<header class="cv-header">
      <div class="cv-header-main cv-header-main--no-avatar">
        ${nameBlock}
        ${aside}
      </div>
    </header>`
}

function profileHtml() {
  const lines = about.summary.map((line) => `<li>${esc(line)}</li>`).join('')
  let meta = ''
  if (about.location || about.availability) {
    const parts = [about.location, about.availability].filter(Boolean)
    meta = `<p class="cv-meta">${esc(parts.join(' · '))}</p>`
  }
  return `<section class="cv-section cv-section--profile">
    <h2 class="cv-h2">Profile</h2>
    <ul class="cv-list">${lines}</ul>
    ${meta}
  </section>`
}

function skillsHtml() {
  const blocks = skills
    .map(
      (g) => `<div class="cv-skill-group">
      <h3 class="cv-h3">${esc(g.title)}</h3>
      <p class="cv-skill-items">${esc(g.items.join(' · '))}</p>
    </div>`,
    )
    .join('')
  return `<section class="cv-section cv-section--skills"><h2 class="cv-h2">Skills</h2><div class="cv-skills-stack">${blocks}</div></section>`
}

function experienceHtml() {
  const jobs = experience
    .map((job) => {
      const company =
        job.url != null && job.url !== ''
          ? `<a href="${esc(job.url)}">${esc(job.company)}</a>`
          : esc(job.company)
      const bullets = job.bullets
        .map((b) => `<li>${esc(b)}</li>`)
        .join('')
      return `<article class="cv-job">
        <div class="cv-job-head">
          <h3 class="cv-h3 cv-job-role">${esc(job.role)}</h3>
          <span class="cv-dates">${esc(job.dates)}</span>
        </div>
        <p class="cv-company">${company}</p>
        <ul class="cv-list cv-list-tight">${bullets}</ul>
      </article>`
    })
    .join('')
  return `<section class="cv-section cv-section--experience"><h2 class="cv-h2">Experience</h2>${jobs}</section>`
}

function educationHtml() {
  const blocks = education
    .map((edu) => {
      const notes = edu.notes ? `<p class="cv-desc">${esc(edu.notes)}</p>` : ''
      return `<article class="cv-edu">
        <div class="cv-job-head">
          <h3 class="cv-h3">${esc(edu.degree)}</h3>
          <span class="cv-dates">${esc(edu.years)}</span>
        </div>
        <p class="cv-company">${esc(edu.institution)}</p>
        ${notes}
      </article>`
    })
    .join('')
  return `<section class="cv-section"><h2 class="cv-h2">Education</h2>${blocks}</section>`
}

/** Inner `<div class="cv-pdf">…</div>` only — inject into main document with cvDocumentCss for html2pdf. */
export function buildCvBodyInnerHtml() {
  return `<div class="cv-pdf">
    ${headerHtml()}
    ${profileHtml()}
    ${skillsHtml()}
    ${experienceHtml()}
    ${educationHtml()}
  </div>`
}

/**
 * Full HTML document for CV (print window). Single source of truth: siteContent.js
 */
export function buildCvDocumentHtml() {
  const body = buildCvBodyInnerHtml()
  return `<!DOCTYPE html><html lang="en"><head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${esc(hero.name)} — CV</title>
<style>${cvDocumentCss}</style>
</head><body>${body}</body></html>`
}

/** Opens CV in a new tab and triggers the print dialog (user can choose “Save as PDF”). */
export function openCvPrintDialog() {
  const html = buildCvDocumentHtml()
  const w = window.open('', '_blank', 'noopener,noreferrer')
  if (!w) {
    return false
  }
  w.document.open()
  w.document.write(html)
  w.document.close()
  w.focus()

  const printWhenReady = () => {
    try {
      w.print()
    } catch {
      /* ignore */
    }
  }

  if (w.document.readyState === 'complete') {
    requestAnimationFrame(printWhenReady)
  } else {
    w.addEventListener('load', printWhenReady, { once: true })
  }
  return true
}
