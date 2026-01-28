export default function CoverageItem({zone}: Readonly<{zone: string}>) {
  return (
    <div className='coverageitem'>
      <p>{zone}</p>
    </div>
  )
}