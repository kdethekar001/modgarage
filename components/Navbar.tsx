export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-6 bg-black border-b border-gray-800">

      <h1 className="text-2xl font-bold text-white">
        ModGarage
      </h1>

      <div className="flex gap-8 text-gray-300">

        <a href="#" className="hover:text-white">
          Home
        </a>

        <a href="#" className="hover:text-white">
          Bikes
        </a>

        <a href="#" className="hover:text-white">
          Accessories
        </a>

        <a href="#" className="hover:text-white">
          About
        </a>

      </div>

    </nav>
  );
}