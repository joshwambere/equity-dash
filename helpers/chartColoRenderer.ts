export const chartColoRenderer = (item: string) => {
  try {
    if (item === 'all') {
      return '#313622'
    } else if (item === 'male') {
      return '#00A082'
    } else if (item === 'female') {
      return '#A6CE39'
    } else {
      return ''
    }
  } catch (error) {
    return error
  }
}
