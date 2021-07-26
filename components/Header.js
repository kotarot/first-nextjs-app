export default function Header() {
  const helloName = 'Next.js'

  return (
    <div className="mt-4">
      <h1 className="title">Hello, {helloName} World!</h1>
      <p className="text-center text-teal-500 text-2xl py-4">A demo of <a href="https://js.cubing.net/cubing/" rel="nofollow" className="underline">cubing.js</a>.</p>
    </div>
  )
}
