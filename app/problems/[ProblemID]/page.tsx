"use client"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import { useEffect } from "react"

/*const ExcalidrawWrapper = dynamic(
  async () =>
    (await import("../../../components/custom/excalidraw-wrapper")).default,
  {
    ssr: false,
  }
)*/

export default function Page() {
  const params = useParams<{ ProblemID: string }>()
  const identifier = params.ProblemID

  useEffect(() => {
    document.title = identifier + "- whiteboard"
  })

  return (
    <main>
      <div className="h-screen z-50">
        <ExcalidrawWrapper identifier={identifier} />
      </div>
    </main>
  )
}
