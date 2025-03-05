import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

export function China(props : any) {
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
      <G id="XMLID_1_">
        <Path id="XMLID_7_" d="M0 106.7H512V405.4H0z" fill="#cb2127" />
        <Path
          id="XMLID_6_"
          d="M49.3 214.8L58.9 185 33.6 166.5 64.9 166.4 74.7 136.7 84.4 166.4 115.7 166.5 90.4 185 100 214.8 74.7 196.4z"
        />
        <Path
          id="XMLID_5_"
          d="M136.6 230.9L147.2 235.1 154.5 226.4 153.7 237.8 164.3 242.1 153.2 244.9 152.4 256.2 146.3 246.6 135.3 249.3 142.6 240.5z"
        />
        <Path
          id="XMLID_4_"
          d="M193.8 173.6L182.6 171.7 177.2 181.7 175.6 170.4 164.4 168.4 174.6 163.4 173 152.1 181 160.3 191.2 155.3 185.9 165.4z"
        />
        <Path
          id="XMLID_3_"
          d="M170 224.6L173.5 213.8 164.3 207.1 175.7 207.1 179.2 196.2 182.7 207.1 194.1 207.1 184.9 213.8 188.4 224.6 179.2 218z"
        />
        <Path
          id="XMLID_2_"
          d="M137.1 125.7L147.5 130.4 155.3 122.1 153.9 133.4 164.2 138.3 153 140.5 151.6 151.8 146.1 141.8 134.9 144 142.6 135.6z"
        />
      </G>
    </Svg>
  )
}

