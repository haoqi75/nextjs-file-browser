import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function FileBrowser({ files }) {
  const router = useRouter()
  const { path } = router.query
  const decodedPath = decodeURIComponent(path)

  const navigateUp = () => {
    const parentPath = decodedPath.split('/').slice(0, -1).join('/')
    router.push(`/${encodeURIComponent(parentPath)}`)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Browsing: {decodedPath}</title>
      </Head>

      <main className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Directory: {decodedPath}</h1>
          <button
            onClick={navigateUp}
            className="text-sm text-indigo-600 hover:text-indigo-800"
          >
            Go up one level
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg">
          <ul className="divide-y divide-gray-200">
            {files.map((file, index) => (
              <li key={index}>
                <Link href={`/${encodeURIComponent(file.path)}`}>
                  <a className="block hover:bg-gray-50 px-4 py-4">
                    <div className="flex items-center">
                      <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                          {file.isDirectory ? (
                            <svg className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                          ) : (
                            <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                        </div>
                        <div className="min-w-0 flex-1 px-4">
                          <p className="text-sm font-medium text-indigo-600 truncate">{file.name}</p>
                          <p className="text-sm text-gray-500">{file.size}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { path } = context.params
  const decodedPath = decodeURIComponent(path)

  // In a real app, you would read files from the filesystem here
  // For demo purposes, we'll use mock data
  const mockFiles = [
    { name: 'Documents', isDirectory: true, path: `${decodedPath}/Documents`, size: '--' },
    { name: 'Images', isDirectory: true, path: `${decodedPath}/Images`, size: '--' },
    { name: 'README.md', isDirectory: false, path: `${decodedPath}/README.md`, size: '2.5 KB' },
    { name: 'config.json', isDirectory: false, path: `${decodedPath}/config.json`, size: '1.2 KB' },
  ]

  return {
    props: {
      files: mockFiles,
    },
  }
}