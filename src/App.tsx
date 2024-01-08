import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import WizardList from "./components/WizardList";

function App() {
  return (
    <>
      <div className="mx-auto w-full h-screen flex item-center">
        <Sidebar />
        <main className="w-3/4 bg-neutral-200">
          <Home />
          <WizardList />
        </main>
      </div>
    </>
  );
}

export default App;
