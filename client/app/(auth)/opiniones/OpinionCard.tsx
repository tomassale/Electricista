import { memo } from 'react'
import StarRating from './StarRating'

interface Opinion {
  id: number
  stars: number
  person: string
  opinion: string
}

interface OpinionCardProps {
  opinion: Opinion
  prefix?: string
}

function OpinionCard({ opinion, prefix = 'first' }: OpinionCardProps) {
  return (
    <div key={`${prefix}-${opinion.id}`} className="opinion-item">
      <p className="opinion-text">
        {opinion.opinion}
        <span className="opinion-person"> {opinion.person}</span>
      </p>
      <StarRating rating={opinion.stars} id={opinion.id} />
    </div>
  )
}

export default memo(OpinionCard)

