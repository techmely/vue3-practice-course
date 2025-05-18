import { analyticsService } from "@/libs/analytics/analytics.service"

export function initGlobalFunction() {
  initTrackingObserver()
}

function initTrackingObserver() {
 const handlerTracking = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  const el = target.closest("[data-tracking-event]")
  if (!el) return

  const event = el.getAttribute('data-tracking-event')
  const paramsAttrs = el.getAttribute('data-tracking-params')

  let params: Record<string, any> = {}
  try {
    if (paramsAttrs) {
      params = JSON.parse(paramsAttrs) || {}
    }
  } catch (error) {
    console.error('Error parsing tracking params', error)
  }

  if (event) {
    console.log('Capture event', event, params)
    analyticsService.capture(event, params)
  }
 }

 document.addEventListener('click', handlerTracking) 
}
