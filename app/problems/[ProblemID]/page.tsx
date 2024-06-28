"use client"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import { useEffect } from "react"

const ExcalidrawWrapper = dynamic(
  async () =>
    (await import("../../../components/custom/excalidraw-wrapper")).default,
  {
    ssr: false,
  }
)

export default function page() {
  const params = useParams<{ ProblemID: string }>()
  const identifier = params.ProblemID

  useEffect(() => {
    document.title = params.ProblemID + "- whiteboard"
  })

  return (
    <main>
      <div className="h-screen z-50">
        <ExcalidrawWrapper />
      </div>
    </main>
  )
}
