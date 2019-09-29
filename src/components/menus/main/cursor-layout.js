const cursorLayout = {
  main: [
    [
      { label: 'activeParty0', action: 'push-cursor' },
      { label: 'activeParty1', action: 'push-cursor' },
      { label: 'activeParty2', action: 'push-cursor' }
    ],
    [
      { label: 'junction', action: 'push-cursor' },
      { label: 'item' },
      { label: 'magic' },
      { label: 'status', action: 'push-cursor' },
      { label: 'gf' },
      { label: 'ability' },
      { label: 'switch' },
      { label: 'card' },
      { label: 'config' },
      { label: 'tutorial' },
      { label: 'save' }
    ]
  ],
  activeParty: [
    [
      { label: 'activeParty0', action: 'pop-cursor' },
      { label: 'activeParty1', action: 'pop-cursor' },
      { label: 'activeParty2', action: 'pop-cursor' }
    ]
  ],
  junction: [
    [
      { label: 'activeParty0', action: 'pop-cursor' },
      { label: 'activeParty1', action: 'pop-cursor' },
      { label: 'activeParty2', action: 'pop-cursor' }
    ]
  ],
  status: [
    [
      { label: 'activeParty0', action: 'pop-cursor' },
      { label: 'activeParty1', action: 'pop-cursor' },
      { label: 'activeParty2', action: 'pop-cursor' }
    ]
  ]
}

const initialCursor = { x: 1, y: 0 }
const initialSubLayouts = ['main']

export default { cursorLayout, initialCursor, initialSubLayouts }
