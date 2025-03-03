import Link from "next/link"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BlogPreviewProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
}

export function BlogPreview({ title, excerpt, date, category, slug }: BlogPreviewProps) {
  return (
    <Link href={slug} className="block">
      <div className="bg-muted border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 h-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-primary border-primary">
              {category}
            </Badge>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="h-3 w-3 mr-1" />
              {date}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
          <div className="mt-4 text-primary text-sm font-medium">Read more →</div>
        </div>
      </div>
    </Link>
  )
}

