(() => {
  'use strict'
  window.FerroArcanoUI = {
    dialog(layer, close) {
      const panel = layer.querySelector('[role="dialog"]')
      let previousFocus
      let previousOverflow
      panel.tabIndex = -1
      layer.addEventListener('keydown', event => {
        if (event.key === 'Escape') { event.preventDefault(); close(); return }
        if (event.key !== 'Tab') return
        const items = [...panel.querySelectorAll('a[href], button, input, select, textarea, [tabindex="0"]')].filter(el => !el.disabled && el.getClientRects().length)
        const first = items[0] || panel, last = items[items.length - 1] || panel
        if (event.shiftKey && (document.activeElement === first || document.activeElement === panel)) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && (document.activeElement === last || document.activeElement === panel)) { event.preventDefault(); first.focus() }
      })
      return {
        open() { if (layer.classList.contains('open')) return; previousFocus = document.activeElement; previousOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; layer.classList.add('open'); layer.setAttribute('aria-hidden', 'false'); panel.focus() },
        close() { if (!layer.classList.contains('open')) return; layer.classList.remove('open'); layer.setAttribute('aria-hidden', 'true'); document.body.style.overflow = previousOverflow; if (previousFocus?.isConnected) previousFocus.focus() }
      }
    }
  }
})()
