'use client'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function Scroll({ children }) {


  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default Scroll