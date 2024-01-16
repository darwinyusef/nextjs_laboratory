export default function Home() {
  return (
    <div className="w-full">
      <div className="container mx-auto pr-9 pl-9 ">
        <div className="flex justify-center flex-col text-center">
          <strong className="font-mono">Texto en negrita</strong>
          <br />
          <h1 className="font-serif text-9xl italic bg-red-500 text-white">
            Texto en h1
          </h1>
          <h2 className="font-serif text-4xl font-black antialiased bg-indigo-500 text-white">
            Texto en h2
          </h2>
          <h3 className="font-serif text-xl subpixel-antialiased bg-green-500 text-white">
            Texto en h3
          </h3>
          <h4 className="font-serif text-lg bg-purple-500 text-white">
            Texto en h4
          </h4>
          <p className="font-sans text-base bg-pink-500 text-white">
            Este es un párrafo de ejemplo.
          </p>
        </div>
      </div>
      <hr />
    </div>
  )
}
