import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-center gap-8">
      <Link className="text-blue-600 font-bold" to="/">Home</Link>
      <Link className="text-blue-600 font-bold" to="/about">About</Link>
      <Link className="text-blue-600 font-bold" to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;