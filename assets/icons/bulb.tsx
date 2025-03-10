import { colors } from "@/constants/Colors"
import { RootState } from "@/store"
import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { useSelector } from "react-redux"

export function Bulb() {
    const theme = useSelector((state : RootState) => state.theme.theme)
    return (
        <Svg
        data-name="\u0421\u043B\u043E\u0439 1"
        viewBox="0 0 128 128"
        width={24}
        height={24}
        fill={colors[theme].done}
        >
        <Path d="M7.55 52.45H23.04V60.45H7.55z" />
        <Path d="M104.96 52.45H120.44999999999999V60.45H104.96z" />
        <Path
            transform="rotate(-45 29.339 21.797)"
            d="M25.35 13.82H33.35V29.77H25.35z"
        />
        <Path d="M60 0H68V15.49H60z" />
        <Path
            transform="rotate(-45 98.65 21.798)"
            d="M90.68 17.8H106.63000000000001V25.8H90.68z"
        />
        <Path
            transform="rotate(-45 29.343 91.096)"
            d="M21.37 87.1H37.32V95.1H21.37z"
        />
        <Path
            transform="rotate(-45 98.653 91.096)"
            d="M94.65 83.13H102.65V99.08H94.65z"
        />
        <Path d="M47.09 111.09a16.91 16.91 0 1033.82 0V100H47.09zM80.91 95.89a19.15 19.15 0 016.24-14.31 34.76 34.76 0 10-46.4-.08 19.34 19.34 0 016.34 14.39V96h33.82z" />
        </Svg>
  )
}

