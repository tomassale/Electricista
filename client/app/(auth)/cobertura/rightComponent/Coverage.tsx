import coverage from '@/public/json/coverage.json'
import CoverageItem from './CoverageItem'

export default function Coverage() {
  return (
    <div className='zonas'>
      {coverage.map((obj) => (
          <CoverageItem key={obj.id} zone={obj.city}/>
      ))}
    </div>
  )
}