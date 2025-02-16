const Header = () => {
  return (
    <header className="bg-blue-600 text-white fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">GyanBox</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-gray-300 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">Features</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
