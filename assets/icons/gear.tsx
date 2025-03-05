import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "@/constants/Colors"

export function Gear({theme} : {theme : 'city' | 'sakura' | 'forest'}) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.875 0h-3.75l-1.031 4.129c-.954.254-1.87.634-2.725 1.129l-3.65-2.19-2.652 2.65 2.19 3.651c-.487.844-.87 1.76-1.128 2.723L0 13.125v3.75l4.129 1.031c.259.966.64 1.879 1.129 2.725l-2.19 3.65 2.65 2.652 3.651-2.19c.844.487 1.76.871 2.723 1.128L13.125 30h3.75l1.031-4.129a11.18 11.18 0 002.725-1.128l3.65 2.19 2.652-2.652-2.19-3.65c.487-.844.871-1.76 1.128-2.723L30 16.875v-3.75l-4.129-1.031a11.18 11.18 0 00-1.128-2.725l2.19-3.65-2.652-2.652-3.65 2.19a11.183 11.183 0 00-2.723-1.128L16.875 0zM15 18.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
        fill={colors[theme].done}
      />
    </Svg>
  )
}

