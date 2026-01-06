export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between px-10 py-6">
      <h1 className="font-bold">SEATED</h1>
      <div className="flex gap-6 text-sm">
        <span>SERVICES</span>
        <span>PROJECTS</span>
        <span>CONTACT</span>
      </div>
    </nav>
  );
}
