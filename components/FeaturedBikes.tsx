export default function FeaturedBikes() {
  return (
    <section className="bg-black text-white py-24 px-10">

      <h2 className="text-5xl font-bold text-center mb-16">
        Featured Bikes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-zinc-900 rounded-2xl p-6 hover:scale-105 transition duration-300">
          <div className="h-56 bg-zinc-800 rounded-xl mb-6 flex items-center justify-center">
            <span className="text-gray-500">
              Bike Image
            </span>
          </div>

          <h3 className="text-2xl font-bold">
            KTM Duke 390
          </h3>

          <p className="text-gray-400 mt-2">
            Fully customizable in realistic 3D.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 hover:scale-105 transition duration-300">
          <div className="h-56 bg-zinc-800 rounded-xl mb-6 flex items-center justify-center">
            <span className="text-gray-500">
              Bike Image
            </span>
          </div>

          <h3 className="text-2xl font-bold">
            Yamaha R15
          </h3>

          <p className="text-gray-400 mt-2">
            Build your dream bike before buying.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 hover:scale-105 transition duration-300">
          <div className="h-56 bg-zinc-800 rounded-xl mb-6 flex items-center justify-center">
            <span className="text-gray-500">
              Bike Image
            </span>
          </div>

          <h3 className="text-2xl font-bold">
            BMW S1000RR
          </h3>

          <p className="text-gray-400 mt-2">
            Experience every modification in 3D.
          </p>
        </div>

      </div>

    </section>
  );
}