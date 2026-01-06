export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between px-10 py-6">
      <h1 className="font-bold text-4xl">SEATED</h1>
      <div className="flex gap-6 text-sm">
        <button className="border-black border p-2 rounded-full text-black bg-white font-bold">
          SERVICES
        </button>
        <button className="border-black border p-2 rounded-full text-black bg-white font-bold">
          PROJECTS
        </button>
        <button className="border-black border p-2 rounded-full text-black bg-white font-bold">
          CONTACT
        </button>
      </div>
    </nav>
  );
}
