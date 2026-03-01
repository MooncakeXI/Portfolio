import { useRef, useCallback } from 'react'

export function useMagnetic<T extends HTMLElement>(strength: number = 0.3) {
  const ref = useRef<T>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
    el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    setTimeout(() => {
      if (el) el.style.transition = ''
    }, 400)
  }, [])

  return { ref, handleMouseMove, handleMouseLeave }
}
