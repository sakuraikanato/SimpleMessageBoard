import SearchBox from "component/searchbox"

export default function Page() {
  return (
    <div>
      <div 
        className="w-full h-16 flex items-center border-b px-2" 
        style={{borderColor: 'var(--border)'}}>
        
        <div className="text-2xl text-center">TEST</div>
        <SearchBox/>
      </div>
    </div>
  )
}