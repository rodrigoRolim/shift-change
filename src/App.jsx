import { Suspense } from 'react'
import './App.scss'
import { mapComponentToPath } from './router'

function App() {
  const Router = mapComponentToPath[window.location.pathname]
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  )
}

export default App
