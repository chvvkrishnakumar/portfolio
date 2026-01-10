
import { useEffect, useMemo, useState } from "react"
import { Cloud, fetchSimpleIcons, type ICloud, renderSimpleIcon, type SimpleIcon } from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    dragControl: false,
    pinchZoom: false,
    freezeActive: false,
    shuffleTags: true,
    shape: "sphere",
    zoom: 1,
    noSelect: true,
    textColour: "#ffffff",
    textHeight: 15,
    textFont: "Helvetica, Arial, sans-serif",
    weight: true,
    weightFrom: null,
    weightMode: "size",
    weightSize: 1,
    weightSizeMin: 0.3,
    weightSizeMax: 3,
    weightGradient: {
      0: "#9333ea", // purple-600
      0.33: "#06b6d4", // cyan-500
      0.66: "#8b5cf6", // violet-500
      1: "#06b6d4", // cyan-500
    },
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  })
}

export type DynamicCloudProps = {
  iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null)

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null

    return Object.values(data.simpleIcons).map((icon) => renderCustomIcon(icon, "dark"))
  }, [data])

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
      {null}
    </Cloud>
  )
}
