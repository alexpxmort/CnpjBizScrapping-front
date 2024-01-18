// components/AppLayout.js
import Header from '../Header';

const MainContent = ({ children }) => (
  <div className="flex-1">
    <div className="container mx-auto pt-8">
      {/* Adjust the grid to a single column on small screens */}
      <div className="grid grid-cols-1 gap-6">{children}</div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="text-white p-8 bg-gray-200 text-center">
    <div className="container mx-auto ml-2">
      <p className="text-green-600 font-bold text-lg" style={{ color: '#417162' }}>
        &copy; 2024 DexTI
      </p>
    </div>
  </footer>
);

const AppLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <MainContent>{children}</MainContent>
    <Footer />
  </div>
);

export default AppLayout;
