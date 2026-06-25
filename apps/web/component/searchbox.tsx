"use client"
import { useState } from "react"

export default function SearchBox() {
    const [currentText, setCurrentText] = useState<string>("")

    const HandleChange = (text: string): void => {
        setCurrentText(text);
    }

    return (
        <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="検索"
            className="h-11 w-lg mx-auto rounded-full flex text-center items-center justify-center outline-0 overflow-x-scroll"
            style={{backgroundColor: "var(--surface)",}}
            value={currentText}
            onChange={(e) => {HandleChange(e.target.value)}}/>
        
    )
}