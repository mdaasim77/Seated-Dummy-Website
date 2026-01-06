export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between px-10 py-6 z-50">
      <h1 className="text-xl font-serif">NYC Studio</h1>
      <div className="flex gap-8 text-sm">
        <a href="#">Work</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
