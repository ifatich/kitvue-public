export default () => {
  const scrollTo = (id, block = 'start') => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block })
    }
  }

  return { scrollTo }
}
