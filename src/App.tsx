import { Plus } from 'lucide-react'

export function App() {
  return (
    <div className="py-10 space-y-8">
      <div>
        header
      </div>
      <main className="max-w-6xl mx-auto space-y-5">
        <h1 className="text-xl font-bold">Tags</h1>
        <button>
          <Plus />
          Create New
        </button>
      </main>
    </div>
  )
}