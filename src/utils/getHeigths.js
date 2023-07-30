export const getHeight = (item) => {
  const a = []
  const l = item.current.children.length
  const mb = 24
  let count = 0
  for(let i = 0; i < l; i++){
    count += item.current.children[i].offsetHeight + mb
     a.push(count)
    }
  return a
}