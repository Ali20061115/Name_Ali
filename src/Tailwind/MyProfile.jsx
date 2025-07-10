import React from "react";
import './Tailwind.css'
const MyProfile = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
      <img
        className="w-32 h-32 mx-auto rounded-full shadow-lg"
        src="https://i.pinimg.com/736x/2a/63/e8/2a63e87d60d9452487425c7a65a909e1.jpg"
        alt="Менің суретім"
      />
      <h1 className="mt-4 text-2xl font-semibold text-gray-800">Менің атым Ali</h1>
      <p className="mt-2 text-gray-600">
        {/* Мен React пен Tailwind үйреніп жүрген жас веб-әзірлеушімін. Жаңа
        технологияларды зерттегенді жақсы көремін. */}
        Өте қарапайым адам!
      </p>
      <button className="mt-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600">
        Байланысу
      </button>
    </div>
  );
};

export default MyProfile;