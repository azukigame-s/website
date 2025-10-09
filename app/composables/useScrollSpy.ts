export const useScrollSpy = () => {
  const activeId = useState<string>('activeId', () => 'top')
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const header = document.querySelector('header') as HTMLElement | null
    const headerH = header?.offsetHeight ?? 0
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  const observeIds = (ids: string[]) => {
    ids.forEach((id) => {
      const target = document.getElementById(id)
      if (!target) return
      const io = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) activeId.value = id
          })
        },
        { rootMargin: '-40% 0px -50% 0px' }
      )
      io.observe(target)
      onBeforeUnmount(() => io.disconnect())
    })
  }
  return { activeId, observeIds, scrollTo }
}
