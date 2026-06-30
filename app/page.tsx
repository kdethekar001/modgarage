import Navbar from "../components/Navbar";
import FeaturedBikes from "../components/FeaturedBikes";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-7xl font-bold mb-4">
          ModGarage
        </h1>

        <p className="text-xl text-gray-400 text-center max-w-2xl">
          Build, customize and visualize your dream bike
          <br />
          before spending a single rupee on accessories.
        </p>

       <div className="mt-10 flex gap-6">
  <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
    Start Building
  </button>

  <button className="border border-gray-500 px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
    Explore Bikes
  </button>
</div>
      </main>
    <FeaturedBikes/>
    </>
  );
}