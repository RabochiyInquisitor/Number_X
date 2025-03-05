import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Russia(props : any) {
  return (
    <Svg
      id="Layer_1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 512 512"
      width={30}
      height={30}
      {...props}
    >
      <Path d="M0 106.7H512V206.3H0z" fill="#f4f4f4" />
      <Path d="M0 206.2H512V305.79999999999995H0z" fill="#324095" />
      <Path d="M0 305.8H512V405.4H0z" fill="#d81f26" />
    </Svg>
  )
}


