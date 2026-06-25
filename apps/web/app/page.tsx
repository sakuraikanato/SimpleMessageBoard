"use server"
import SearchBox from "component/searchbox"
import Thread from "@/component/thread"
import { threads } from "@/utils/test_data/thread"

export default async function Page() {

  return (
    <div>
      <div 
        className="w-full h-16 flex items-center border-b px-2" 
        style={{borderColor: 'var(--border)'}}>
        
        <div className="text-2xl text-center">TEST</div>
        <SearchBox/>
      </div>

      <div>
        {threads.map((thread) => (
          <Thread key={thread.id} id={thread.id} title={thread.title} short_content={thread.message}/>
        ))}
      </div>
    </div>
  )
}