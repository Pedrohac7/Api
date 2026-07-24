import { Link, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { ApiSection } from './components/ApiSection'
import { DashboardPreview } from './components/DashboardPreview'
import { TechStack } from './components/TechStack'
import { CodePreview } from './components/CodePreview'
import { Footer } from './components/Footer'

function Home() {
  return <><Navbar /><main><Hero /><Features /><ApiSection /><DashboardPreview /><TechStack /><CodePreview /></main><Footer /></>
}

function Placeholder({ title }: { title: string }) {
  return <><Navbar /><main className="placeholder-page"><span className="eyebrow">Node Multi-Tenant API</span><h1>{title}</h1><p>This showcase focuses on a clean multi-tenant API workflow.</p><Link className="btn btn-primary px-4" to="/">Back home</Link></main></>
}

export default function App() {
  return <Routes><Route path="/" element={<Home />} /><Route path="/api" element={<Placeholder title="API reference" />} /><Route path="/login" element={<Placeholder title="Sign in" />} /></Routes>
}
