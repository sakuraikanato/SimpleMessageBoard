"use server"
import SearchBox from "component/searchbox"
import Thread from "@/component/thread"
import { threads } from "@/utils/test_data/thread"
import { Login } from "@/component/login"

export default async function Page() {

  return (
    <div>
      <div className="w-full h-16 flex items-center justify-between border-b border-(--border) px-2" >
        
        <div className="text-2xl text-center">TEST</div>
        <SearchBox/>
        <Login/>
      </div>

      <div>
        {threads.map((thread) => (
          <Thread key={thread.id} id={thread.id} title={thread.title} short_content={thread.message}/>
        ))}
      </div>
    </div>
  )
}