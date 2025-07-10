import React from "react";
import './Tailwind.css'
export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto p-4">

      <div className="flex justify-center gap-4 mb-6">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Category</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Collection</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Price</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">All</button>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img src="https://i.pinimg.com/736x/43/53/3e/43533e0a30184ce85d13df50c379b295.jpg" alt="Sun-gloss" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-lg font-medium">Sun-gloss</h2>
          <p className="text-gray-500">$1.75</p>
          <button className="mt-2 px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">PLACE BID</button>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img src="https://i.pinimg.com/736x/1f/cf/06/1fcf0685562ec08fe0eb009fff0507b5.jpg" alt="Sun-gloss" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-lg font-medium">Sun-gloss</h2>
          <p className="text-gray-500">$1.75</p>
          <button className="mt-2 px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">PLACE BID</button>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img src="https://i.pinimg.com/736x/6d/56/30/6d5630956be395622a228b0a8d1c8a8d.jpg" alt="Sun-gloss" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-lg font-medium">Sun-gloss</h2>
          <p className="text-gray-500">$1.75</p>
          <button className="mt-2 px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">PLACE BID</button>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img src="https://i.pinimg.com/736x/ad/2d/80/ad2d80feebad39d7a21b678ace807aa5.jpg" alt="Nufwey" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-lg font-medium">Nufwey</h2>
          <p className="text-gray-500">$1.75</p>
          <button className="mt-2 px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">PLACE BID</button>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img src="https://i.pinimg.com/736x/73/d2/bb/73d2bb8be018f3554d5c481ba277bdf8.jpg" alt="Sun-gloss" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-lg font-medium">Sun-gloss</h2>
          <p className="text-gray-500">$1.75</p>
          <button className="mt-2 px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">PLACE BID</button>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img src="https://i.pinimg.com/736x/4a/e2/40/4ae24046d9e50c3f3ed29aa997d7a1bb.jpg" alt="Nufwey" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-lg font-medium">Nufwey</h2>
          <p className="text-gray-500">$1.75</p>
          <button className="mt-2 px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">PLACE BID</button>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img src="https://i.pinimg.com/736x/5f/23/3b/5f233bc71990666102f632a299573f4e.jpg " alt="Sun-gloss" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-lg font-medium">Sun-gloss</h2>
          <p className="text-gray-500">$1.75</p>
          <button className="mt-2 px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">PLACE BID</button>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img src="https://i.pinimg.com/736x/6a/fc/d2/6afcd2b514304d2a0fa7e1189a21329f.jpg" alt="Sun-gloss" className="w-full h-40 object-cover rounded-md mb-2" />
          <h2 className="text-lg font-medium">Sun-gloss</h2>
          <p className="text-gray-500">$1.75</p>
          <button className="mt-2 px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800">PLACE BID</button>
        </div>
      </div>
    </div>
  );
}