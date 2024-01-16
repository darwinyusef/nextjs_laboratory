export default function Home() {
  return (
    // <div className="container mx-auto md:block lg:flex gap-2">
    //   <div className="lg:w-2/5 md:w-full shadow-md h-64 bg-pepitoclavo"></div>
    //   <div className="lg:w-2/5 md:w-full hadow-md h-64 bg-Orange"></div>
    //   <div className="lg:w-2/5 md:w-full placeholder:shadow-md h-64 bg-zinc-300"></div>
    // </div>

    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Grid Example</h1>
      <div className="sm:bg-red md:bg-orange lg:bg-orange  text-white rounded-sm p-4">
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0"></div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Company retreats
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Incredible accommodation for your team
              </a>
              <p className="mt-2 text-slate-500">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="sm:bg-red md:bg-orange lg:bg-orange text-white rounded-lg p-4">
          <p className="text-xl font-semibold font-heading">Item 2</p>
        </div>

        <div className="sm:bg-red md:bg-orange lg:bg-orange text-white p-4">
          <p className="text-xl font-semibold font-heading">Item 3</p>
        </div>

        <div className="bg-gradient-to-t from-linear2 to-linear1 p-4">
          <p className="text-xl font-semibold font-body">Item 4</p>
        </div>
      </div>
    </div>
  )
}
