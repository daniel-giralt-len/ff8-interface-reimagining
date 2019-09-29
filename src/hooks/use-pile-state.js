import { useState } from 'react'

const usePileState = initialState => {
  const [state, setState] = useState(initialState)
  const getTop = () => state[state.length - 1]
  const pushState = element => setState([...state, element])
  const popState = () => {
    const topElement = getTop()
    setState(state.splice(0, state.length - 1))
    return topElement
  }
  return [state, getTop, pushState, popState]
}

export default usePileState
