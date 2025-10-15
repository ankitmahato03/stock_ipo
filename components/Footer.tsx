export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white rounded-2xl p-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Listing Day Gains. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
