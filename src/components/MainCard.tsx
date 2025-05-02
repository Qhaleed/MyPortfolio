import "./MainCard.css";

function MainCard() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden ">
      {/* Subtle Animated Wave Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#4b5563" /* gray-400 */
            fillOpacity="1"
            d="
            M0,160 
            C360,150 1080,170 1440,160 
            L1440,320 
            L0,320 
            Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              //   values="
              //   M0,180 C360,170 1080,170 1440,180 L1440,320 L0,320 Z;
              //   M0,180 C360,175 1080,165 1440,180 L1440,320 L0,320 Z;
              //   M0,180 C360,170 1080,170 1440,10 L1440,320 L0,320 Z
              // "
              values="
              M0,180 C360,150 1080,210 1440,180 L1440,320 L0,320 Z;
              M0,180 C360,190 1080,170 1440,180 L1440,320 L0,320 Z;
              M0,180 C360,150 1080,210 1440,180 L1440,320 L0,320 Z
            "
            />
          </path>
        </svg>
      </div>

      <div className="w-200 h-130 rounded-lg border overflow-hidden">
        <div className="bg-gray-600 text-white px-5 py-3 rounded-tl-lg rounded-tr-lg">
          Home
        </div>
        <div className="flex flex-col pt-40 bg-white h-full rounded-bl-lg rounded-br-lg">
          <h1 className="text-7xl text-center">
            hi! <span className="text-cyan-500">i'm Qhal</span>
          </h1>
          <h2 className="text-xl pt-5 text-center">
            Developer, System Designer, and Con Artist
          </h2>
          <ul className="flex gap-3 pt-5 justify-center">
            <li>About</li>
            <li>Links</li>
            <li>Works</li>
            <li>Faq</li>
            <li>Contact</li>
            <li>About</li>
            <li>Links</li>
            <li>Works</li>
            <li>Faq</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
