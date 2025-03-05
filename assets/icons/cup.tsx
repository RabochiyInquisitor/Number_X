import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "@/constants/Colors"

export function Cup({theme} : {theme : 'city' | 'sakura' | 'forest'}) {
  return (
    <Svg 
        viewBox="0 0 24 24" 
        width={30}
        height={30}
    >
      <Path
        d="M18 3V2H6v1a4 4 0 100 8h.81A6 6 0 0011 13.91V16H7.22l-1.5 6h12.56l-1.5-6H13v-2.09A6 6 0 0017.19 11H18a4 4 0 000-8zM6 9a2 2 0 01-2-2 2 2 0 012-2v3a5.47 5.47 0 00.09 1zm13.41-.59A2 2 0 0118 9h-.09A5.47 5.47 0 0018 8V5a2 2 0 012 2 2 2 0 01-.59 1.41z"
        data-name="Layer 2"
        fill={colors[theme].done}
      />
    </Svg>
  )
}


