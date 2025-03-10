import * as React from "react"
import Svg, { Defs, Path, ClipPath, Use } from "react-native-svg"

export function Lock() {
  return (
    <Svg
      height={36}
      viewBox="0 0 48 48"
      width={36}
      opacity={0.3}
    >
      <Defs>
        <Path d="M0 0h48v48H0V0z" id="a" />
      </Defs>
      <ClipPath id="b">
        <Use xlinkHref="#a" />
      </ClipPath>
      <Path
        clipPath="url(#b)"
        d="M24 34c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm12-18h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zm-18.2-4c0-3.42 2.78-6.2 6.2-6.2s6.2 2.78 6.2 6.2v4H17.8v-4zM36 40H12V20h24v20z"
      />
    </Svg>
  )
}


