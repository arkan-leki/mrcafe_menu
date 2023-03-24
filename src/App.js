// import './App.css';
import Menu from './components/MenuList';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ItemsContextProvider from "./context/ItemsContext";
import BottomNav from './components/BottomNav';
import SocialBar from './components/SocialBar';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

function App() {

  return (
    <ItemsContextProvider>
      <div className="min-h-screen bg-hero-bg bg-[#0b4030]  bg-contain bg-repeat "
        dir='rtl'>
        <header className="bg-[#000] shadow-md bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
              <div className="flex items-center justify-start lg:w-0 lg:flex-1 gap-1">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="/brand.png"
                  alt="Brand Logo"
                />
                <span className="ml-2 flex items-center text-xl gap-x-2 text-gray-100">
                  <h1 className='font-sans font-extrabold'>Mr.Cafe</h1>
                  <h1 >مستەرکافێ </h1>
                </span>
              </div>
              <a href='https://vm.tiktok.com/ZMYU2QNEs/' className="flex items-center cursor-pointer" id="app-title">
                <FaMapMarkerAlt color='white' size={25} />
                <ReactTooltip
                  anchorId="app-title"
                  place="bottom"
                  content="کەلار، ناوبازر تەنیشت مۆتەخانەی ئەڵوەن"
                />
              </a>
            </div>
          </div>
        </header>
        <div className='text-black h-full text-lg mt-auto pb-20 ' >
          <SocialBar />
          <Menu />
        </div>
        <BottomNav />
      </div>
    </ItemsContextProvider>

  );
}

export default App;
