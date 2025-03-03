import Link from "next/link"
import { Calendar } from "lucide-react"

interface AnnouncementCardProps {
  title: string
  date: string
  description: string
  link: string
}

export function AnnouncementCard({ title, date, description, link }: AnnouncementCardProps) {
  return (
    <div className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="flex items-center text-muted-foreground mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Link
          href={link}
          className="mt-4 md:mt-0 inline-flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors whitespace-nowrap"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

