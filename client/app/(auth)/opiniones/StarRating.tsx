import { memo } from 'react'

interface StarRatingProps {
  readonly rating: number
  readonly id: number
}

function StarRating({ rating, id }: StarRatingProps) {
  return (
    <div className="opinion-rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <span 
          key={`star-${id}-${i}`} 
          className={i < rating ? 'star-filled' : 'star-empty'}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default memo(StarRating)


