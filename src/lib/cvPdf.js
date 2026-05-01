import {
  buildCvBodyInnerHtml,
  cvDocumentCss,
  openCvPrintDialog,
} from './cvDocumentHtml.js'

function waitForPaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve)
    })
  })
}

function waitForImages(root) {
  const imgs = root.querySelectorAll('img')
  return Promise.all(
    [...imgs].map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete && img.naturalHeight > 0) {
            resolve()
            return
          }
          img.addEventListener('load', () => resolve(), { once: true })
          img.addEventListener('error', () => resolve(), { once: true })
        }),
    ),
  )
}

/**
 * Injects plain CV HTML + shared CSS into the current document (off-screen), runs html2pdf
 * on that subtree, then removes both. Avoids Vue/iframes so html2canvas paints reliably.
 */
export async function downloadPortfolioPdf(options = {}) {
  const { filename = 'Portfolio-CV.pdf' } = options

  const styleEl = document.createElement('style')
  styleEl.setAttribute('data-cv-pdf-export', '')
  styleEl.textContent = cvDocumentCss
  document.head.appendChild(styleEl)

  const holder = document.createElement('div')
  holder.setAttribute('data-cv-pdf-export', '')
  holder.setAttribute('aria-hidden', 'true')
  /* Match jsPDF inner width: 210mm − 6mm left − 6mm right (see margin below) */
  holder.style.cssText =
    'position:fixed;left:-9999px;top:0;width:198mm;max-width:198mm;box-sizing:border-box;pointer-events:none;overflow:visible'
  holder.innerHTML = buildCvBodyInnerHtml()
  document.body.appendChild(holder)

  const root = holder.querySelector('.cv-pdf')
  if (!root) {
    styleEl.remove()
    holder.remove()
    if (!openCvPrintDialog()) {
      window.alert(
        'Could not build the CV layout. Allow pop-ups to use Print → Save as PDF.',
      )
    }
    return
  }

  try {
    await waitForImages(holder)
    await waitForPaint()

    const { default: html2pdf } = await import('html2pdf.js')
    await html2pdf()
      .set({
        margin: [6, 6, 6, 6],
        filename,
        image: { type: 'jpeg', quality: 0.92 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: '#ffffff',
          scrollX: 0,
          scrollY: 0,
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        /* Prefer one tall page; split only if content truly exceeds A4 */
        pagebreak: { mode: ['css', 'legacy'] },
      })
      .from(root)
      .save()
  } catch (e) {
    console.error(e)
    if (!openCvPrintDialog()) {
      window.alert(
        'Automatic PDF export failed. Allow pop-ups for the print window, or use Print → Save as PDF.',
      )
    }
  } finally {
    styleEl.remove()
    holder.remove()
  }
}
