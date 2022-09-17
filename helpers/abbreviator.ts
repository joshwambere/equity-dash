export const abbreviator = (text: string) => {
  const abbr = text
    .split(' ')
    .map((item) => item[0])
    .join('')
    .toUpperCase()
  return abbr
}
