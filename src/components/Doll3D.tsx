import { useState } from "react";

const Doll3D = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isWaving, setIsWaving] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateY = (e.clientX - centerX) / 10;
    const rotateX = -(e.clientY - centerY) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleWave = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 font-montserrat">
          🎪 Моя 3D Кукла
        </h1>

        <div
          className="relative cursor-pointer select-none"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleWave}
          style={{ perspective: "1000px" }}
        >
          <div
            className="transition-transform duration-300 ease-out"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Голова */}
            <div className="relative mx-auto mb-4">
              <div
                className="w-32 h-32 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full relative shadow-lg"
                style={{ transform: "translateZ(20px)" }}
              >
                {/* Глаза */}
                <div className="absolute top-8 left-6 w-4 h-4 bg-white rounded-full shadow-inner">
                  <div className="w-2 h-2 bg-black rounded-full mt-1 ml-1"></div>
                </div>
                <div className="absolute top-8 right-6 w-4 h-4 bg-white rounded-full shadow-inner">
                  <div className="w-2 h-2 bg-black rounded-full mt-1 ml-1"></div>
                </div>

                {/* Нос */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full"></div>

                {/* Рот */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-3 border-2 border-red-400 border-t-0 rounded-b-full"></div>

                {/* Волосы */}
                <div
                  className="absolute -top-4 left-4 w-24 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-t-full shadow-md"
                  style={{ transform: "translateZ(-10px)" }}
                ></div>

                {/* Бантик */}
                <div
                  className="absolute -top-2 right-8 w-6 h-4 bg-red-400 transform rotate-12 rounded shadow-sm"
                  style={{ transform: "translateZ(15px) rotate(12deg)" }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Тело */}
            <div className="relative mx-auto mb-4">
              <div
                className="w-24 h-32 bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg shadow-lg mx-auto"
                style={{ transform: "translateZ(10px)" }}
              >
                {/* Пуговицы */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
              </div>

              {/* Руки */}
              <div
                className={`absolute top-2 -left-8 w-6 h-20 bg-pink-200 rounded-full shadow-md origin-top transition-transform duration-300 ${isWaving ? "animate-pulse" : ""}`}
                style={{
                  transform: `translateZ(5px) ${isWaving ? "rotate(-30deg)" : "rotate(-10deg)"}`,
                  transformOrigin: "top center",
                }}
              >
                {/* Ладонь */}
                <div className="absolute bottom-0 w-4 h-4 bg-pink-300 rounded-full shadow-sm"></div>
              </div>

              <div
                className="absolute top-2 -right-8 w-6 h-20 bg-pink-200 rounded-full shadow-md origin-top"
                style={{ transform: "translateZ(5px) rotate(10deg)" }}
              >
                {/* Ладонь */}
                <div className="absolute bottom-0 w-4 h-4 bg-pink-300 rounded-full shadow-sm"></div>
              </div>
            </div>

            {/* Ноги */}
            <div className="relative mx-auto">
              <div className="flex justify-center space-x-4">
                <div
                  className="w-6 h-24 bg-pink-200 rounded-full shadow-md"
                  style={{ transform: "translateZ(8px)" }}
                >
                  {/* Туфелька */}
                  <div className="absolute bottom-0 w-8 h-6 bg-red-500 rounded-full shadow-lg transform -translate-x-1"></div>
                </div>
                <div
                  className="w-6 h-24 bg-pink-200 rounded-full shadow-md"
                  style={{ transform: "translateZ(8px)" }}
                >
                  {/* Туфелька */}
                  <div className="absolute bottom-0 w-8 h-6 bg-red-500 rounded-full shadow-lg transform -translate-x-1"></div>
                </div>
              </div>
            </div>

            {/* Тень */}
            <div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black opacity-10 rounded-full blur-sm"
              style={{ transform: "translateZ(-30px) translateX(-50%)" }}
            ></div>
          </div>
        </div>

        <p className="mt-8 text-gray-600 text-lg">
          Наведи курсор и кликни на куклу! 🎭
        </p>
      </div>
    </div>
  );
};

export default Doll3D;
