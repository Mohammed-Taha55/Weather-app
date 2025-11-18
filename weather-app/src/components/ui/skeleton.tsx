import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("dark:bg-accent bg-foreground/25 animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
