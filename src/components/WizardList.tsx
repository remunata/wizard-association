import { useEffect, useState } from "react";
import Wizard from "../data/Wizard";
import defaultImage from "../assets/default.png";

const SERVER_URL = "http://localhost:3000";

function WizardList() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [wizards, setWizards] = useState<Wizard[]>([]);

  useEffect(() => {
    fetch(SERVER_URL + "/wizards")
      .then((res) => res.json())
      .then((result) => {
        setWizards(result.data);
        setIsLoaded(true);
      });
  }, []);

  const wizardsList = wizards.map((wizard, idx) => (
    <div
      key={wizard.id}
      className="border-none rounded-lg shadow-lg bg-stone-100 overflow-hidden
      scale-0 opacity-0 transition duration-300 ease-in-out
      group-target:scale-100 group-target:opacity-100"
      style={{ transitionDelay: 50 * idx + "ms" }}
    >
      <div className="overflow-hidden aspect-square">
        <img
          src={
            wizard.image_name === null
              ? defaultImage
              : SERVER_URL + "/files/" + wizard.image_name
          }
          alt={wizard.name}
        />
      </div>
      <div className="p-4">
        <div>
          <span className="text-emerald-800">{wizard.title}</span>
        </div>
        <div>
          <a href="#" className="text-xl font-medium">
            {wizard.name}
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      id="list"
      className="group opacity-0 absolute target:opacity-100 transition duration-300 delay-150 ease-in-out"
    >
      {isLoaded && (
        <div className="flex justify-center items-center h-screen">
          <div className="w-3/4">
            <h1 className="text-5xl font-medium">Wizards List</h1>
            <div className="mt-10 grid grid-cols-4 gap-8">{wizardsList}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WizardList;
