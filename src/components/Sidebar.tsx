function Sidebar() {
  return (
    <div className="w-1/4 bg-teal-900">
      <div className="flex items-center h-full w-full">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-stone-200 text-center">
            Wizard Association
          </h1>
          <nav className="items-center mt-10 w-full">
            <a href="#home">
              <div className="py-3 flex justify-center items-center text-2xl text-stone-200 font-extralight
                hover:font-normal hover:bg-teal-700
                transition duration-150 ease-in-out">
                Home
              </div>
            </a>
            <a href="#list">
              <div className="py-3 flex justify-center items-center text-2xl text-stone-200 font-extralight
                hover:font-normal hover:bg-teal-700
                transition duration-150 ease-in-out">
                Wizards List
              </div>
            </a>
            <a href="#recruit">
              <div className="py-3 flex justify-center items-center text-2xl text-stone-200 font-extralight
                hover:font-normal hover:bg-teal-700
                transition duration-150 ease-in-out">
                Recruit
              </div>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
