import Contact from '@/components/Contact'
import HomePage from '@/components/HomePage'
import Me from '@/components/Me'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <HomePage />
      <Projects />
      <Skills />
      <Me />
      <Contact />
    </div>
  )
}
