import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export function LevelStar() {
  return (
    <Svg
      width={57}
      height={53}
      viewBox="0 0 57 53"
      fill="none"
    >
      <G filter="url(#filter0_d_69_93)">
        <Path
          d="M28.5 0l-7.167 14.833L4.5 16.875 16.708 28.25 14 44.5l14.5-7.791L43 44.5l-2.958-16.469L52.5 16.917l-16.833-2.125L28.5 0z"
          fill="#241F20"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}


