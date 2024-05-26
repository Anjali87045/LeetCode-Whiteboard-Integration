import { Metadata } from "next"

type Props = {
  params: { ProblemID: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.ProblemID
  // const url = `https://leetcodeboard-sigma.vercel.app/problems/${id}`
  const post = await fetch(
    "https://leetcodeboard-sigma.vercel.app/problems/${id}"
  ).then((res) => res.json())
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function page({ params }: Props) {
  const id = params.ProblemID
  // const url = `https://leetcodeboard-sigma.vercel.app/problems/${id}`
  // fetch again!
  // But don't worry, Next.js caches the `fetch()` calls
  const post = await fetch(
    "https://leetcodeboard-sigma.vercel.app/problems/${id}"
  ).then((res) => res.json())
  return (
    <>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="flex border-2 border-white rounded-lg p-6">
            HELLO {params.ProblemID}
          </div>
        </div>
      </div>
    </>
  )
}
