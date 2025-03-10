import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

export function Cross() {
  return (
    <Svg
      viewBox="0 0 36 36"
      width={24}
      height={24}
    >
      <G id="icons">
        <Path
          d="M6.2 3.5L3.5 6.2c-.7.7-.7 1.9 0 2.7l9.2 9.2-9.2 9.2c-.7.7-.7 1.9 0 2.7l2.6 2.6c.7.7 1.9.7 2.7 0l9.2-9.2 9.2 9.2c.7.7 1.9.7 2.7 0l2.6-2.6c.7-.7.7-1.9 0-2.7L23.3 18l9.2-9.2c.7-.7.7-1.9 0-2.7l-2.6-2.6c-.7-.7-1.9-.7-2.7 0L18 12.7 8.8 3.5c-.7-.7-1.9-.7-2.6 0z"
          id="close_1_"
          fill="#222a30"
        />
      </G>
    </Svg>
  )
}
