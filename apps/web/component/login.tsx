"use client"
import { useState } from "react"
import { loginAction } from "@/action/auth";

export function Login() {
  const [isVewModal, setIsVewModal] = useState(false);

  return (
    <div>
      <div 
      className="
      text-sg font-bold w-34 h-10 flex rounded-full
      justify-center items-center
      bg-(--rev-button) hover:bg-(--rev-hover-button) text-(--rev-text-primary)"
      onClick={() => setIsVewModal(true)}>
        ログイン
      </div>

      {/* ログインモーダル */}
      {isVewModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center" onClick={() => setIsVewModal(false)}>
          <div className="p-4 min-w-80 w-3/10 h-128 bg-(--surface) rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <form action={loginAction}>
              <input type="email" className="" placeholder="email"/>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}