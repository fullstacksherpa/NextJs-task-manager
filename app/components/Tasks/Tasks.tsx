'use client'

import { useGlobalState } from "@/app/context/globalProvider"

const Tasks = () => {
    const {theme} = useGlobalState();
  return (
    <main className={`p-4 w-full bg-[${theme.colorBg2}] border-2 border-solid border-[${theme.borderColor2}] rounded-md overflow-y-auto h-full`}>Tasks</main>
  )
}

export default Tasks