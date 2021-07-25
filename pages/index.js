import Head from 'next/head'
import Image from 'next/image'

const name = "Next.js"

export default function Index() {
  return (
    <div>
      <div className="hero">
        <h1 className="title">Hello, {name} World!</h1>
        <p className="text-center text-teal-500 text-2xl py-4">Input an algorithm.</p>
        <a className="btn-blue" href="#">Go!</a>
      </div>
    </div>
  )
}
