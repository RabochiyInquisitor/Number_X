import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "@/constants/Colors"

export function Help({theme} : {theme : 'city' | 'sakura' | 'forest'}) {
  return (
    <Svg
      viewBox="0 0 20 20"
      width={30}
      height={30}
    >
      <Path
        d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm1 17H9v-2h2v2zm2.1-7.7l-.9.9c-.8.7-1.2 1.3-1.2 2.8H9v-.5c0-1.1.4-2.1 1.2-2.8l1.2-1.3c.4-.3.6-.8.6-1.4 0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.2 1.8-4 4-4s4 1.8 4 4c0 .9-.4 1.7-.9 2.3z"
        transform="translate(-422 -254) translate(422 254)"
        fill={colors[theme].done}
        fillRule="evenodd"
        stroke="none"
        strokeWidth={1}
      />
    </Svg>
  )
}

