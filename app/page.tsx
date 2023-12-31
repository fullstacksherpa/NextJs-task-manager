"use client"
import Tasks from './components/Tasks/Tasks'
import { useGlobalState } from './context/globalProvider'
import CreateContent from './components/Modals/CreateContent'


export default function Home() {
  const {tasks} = useGlobalState()
  return (
  
   
    <>
    {/* <CreateContent/> */}
    <Tasks title='all tasks' tasks={tasks}/>
    </>
    
    
  )
}
