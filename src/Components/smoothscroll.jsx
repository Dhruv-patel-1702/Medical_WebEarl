import { ReactLenis } from '@studio-freight/react-lenis'

function smoothscroll({children}) {
  return (
    <ReactLenis root options={{
        lerp:1
    }}
    >
      {children }
    </ReactLenis>
  )
}

export default smoothscroll