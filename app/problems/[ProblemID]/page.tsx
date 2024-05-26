"use client"

import { useParams } from "next/navigation"
import { Metadata } from "next"
import { Excalidraw } from "@excalidraw/excalidraw"
// import dynamic from "next/dynamic"

// export default function Page() {
//   const params = useParams<{ ProblemID: string }>()

//   console.log(params)

//   return <></>
// }

const metadata: Metadata = {
  title: "${params.ProblemID}. WHITEBOARD",
  description: "whiteboard for LeetCode problems",
}

export default function page() {
  return (
    <>
      <div style={{ height: "500px" }}>
        <Excalidraw />
      </div>
    </>
  )
}
