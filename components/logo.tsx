import { Zap } from "lucide-react"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "horizontal" | "stacked"
}

export function Logo({ size = "md", variant = "horizontal" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  }

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
  }

  if (variant === "stacked") {
    return (
      <div className="flex flex-col items-center">
        <div className="text-blue-600 animate-pulse-subtle">
          <Zap className={iconSizes[size]} strokeWidth={2.5} />
        </div>
        <span
          className={`font-bold ${sizeClasses[size]} bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2`}
        >
          zip<span className="font-extrabold">Demon</span>
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center">
      <div className="text-blue-600 mr-2 animate-pulse-subtle">
        <Zap className={iconSizes[size]} strokeWidth={2.5} />
      </div>
      <span
        className={`font-bold ${sizeClasses[size]} bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
      >
        zip<span className="font-extrabold">Demon</span>
      </span>
    </div>
  )
}
