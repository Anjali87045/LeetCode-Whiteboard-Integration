"use client"

import { useParams } from "next/navigation"
import { Metadata } from "next"
import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw"
import ExcalidrawWrapper from "@/components/custom/excalidraw-wrapper"
// import dynamic from "next/dynamic"

// export default function Page() {
//   const params = useParams<{ ProblemID: string }>()

//   console.log(params)

//   return <></>
// }

// type Props = {
//   params: { ProblemID: string }

// }

// async function generateMetadata({params}:Props) {

//   const id=params.ProblemID
//   title: "${id}. WHITEBOARD",
//   description: "whiteboard for LeetCode problems",
// }

export default function page() {
  return (
    <>
      <div className="w-screen h-[calc(14)]">
        <ExcalidrawWrapper />
      </div>
    </>
  )
}
