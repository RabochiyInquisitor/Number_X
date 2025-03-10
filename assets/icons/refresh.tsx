import { colors } from "@/constants/Colors"
import { RootState } from "@/store"
import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { useSelector } from "react-redux"

export function Refresh() {
    const theme = useSelector((state: RootState) => state.theme.theme)
    return (
        <Svg
        height="32px"
        viewBox="0 0 32 32"
        width="32px"
        fill={colors[theme].done}
        >
        <Path d="M28 16c-1.219 0-1.797.859-2 1.766C25.269 21.03 22.167 26 16 26c-5.523 0-10-4.478-10-10S10.477 6 16 6c2.24 0 4.295.753 5.96 2H20a2 2 0 000 4h6a2 2 0 002-2V4a2 2 0 00-4 0v.518A13.904 13.904 0 0016 2C8.268 2 2 8.268 2 16s6.268 14 14 14c9.979 0 14-9.5 14-11.875C30 16.672 28.938 16 28 16z" />
        </Svg>
    )
}


