export const getWidth = (item) => {
  const a = []
  const l = item.current.children.length
  const gap = parseInt(window.getComputedStyle(item.current).gap)
  for(let i = 0; i < l; i++){
    a.push(item.current.children[i].offsetWidth + gap)
  }
  console.log(a)
  return a
}