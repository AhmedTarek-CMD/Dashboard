const Header = ({ title }) => {
  return (
    <header className="border-b border-gray-700 bg-opacity-50 shadow-lg backdrop-blur-md bg-gray-800">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-gray-100 font-semibold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
