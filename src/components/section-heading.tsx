import { useScrollReveal } from '@/hooks/use-scroll-reveal'

interface SectionHeadingProps {
  index: string
  title: string
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="reveal mb-12 flex items-center gap-3">
      <span className="font-mono text-sm text-primary">{index}.</span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="ml-4 h-px flex-1 bg-border" />
    </div>
  )
}
