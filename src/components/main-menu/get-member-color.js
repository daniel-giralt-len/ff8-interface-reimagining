const getMemberColorByStatus = ({ isKO, isCritical }) => {
  if (isKO) {
    return 'grey'
  }
  if (isCritical) {
    return 'yellow'
  }
  return 'inherit'
}

export default getMemberColorByStatus
