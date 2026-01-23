import opiniones from '@/public/json/opinions.json'
import OpinionCard from './OpinionCard'

export default function Carousel({classN} : {classN:string}) {
  return (
    <div className={classN}>
      {opiniones.map((obj) => (
        <OpinionCard key={`first-${obj.id}`} opinion={obj} prefix="first" />
      ))}
      {opiniones.map((obj) => (
        <OpinionCard key={`second-${obj.id}`} opinion={obj} prefix="second" />
      ))}
    </div>
  )
}