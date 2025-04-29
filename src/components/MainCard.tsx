import "./MainCard.css";

function MainCard() {
  return (
    <div className="bg-gray-400 p-10 flex items-center justify-center h-screen">
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
