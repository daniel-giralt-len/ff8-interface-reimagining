import scale from './scale'

const screenSize = {
  width: 320,
  height: 240
}

export default {
  width: screenSize.width * scale,
  height: screenSize.height * scale
}
