import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Home() {
  const router = useRouter()
  const [path, setPath] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/${encodeURIComponent(path)}`)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>File Browser</title>
        <meta name="description" content="Simple file browser" />
      </Head>

      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">File Browser</h1>
        
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="path" className="block text-sm font-medium text-gray-700">
                Enter directory path
              </label>
              <input
                type="text"
                id="path"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g. /path/to/directory"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Browse
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}