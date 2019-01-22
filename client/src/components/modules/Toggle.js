//button for making content on home page active 
//thinking of using https://react.semantic-ui.com/modules/transition/#types-group

import React from 'react'
import { Button } from 'semantic-ui-react'

const Toggle = () => (
  <Button.Group fluid>
      <Button>Feed</Button>
      <Button>Saved</Button>
  </Button.Group>
)

export default Toggle