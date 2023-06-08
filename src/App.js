import "./styles.css";
import Moi from "./components/moi";
import { useState } from "react";

export default function App() {
  // state (état, données)
  const [moi, setMois] = useState([
    { id: 1, nom: "Moi" },
    { id: 2, nom: "Mon travail" },
    { id: 3, nom: "Contact" }
  ]);
  // comportements

  // affichage (render)
  return (
    <div>
      <div className="name">
        <h1>Axel Dochez</h1>
        <p>Developper Web junior</p>
      </div>
      <div className="list">
        {moi.map((moi) => (
          <Moi
            MoiInfo={moi}
            // onClick={() => afficherFruitPrefere(moi.nom)}
            key={moi.id}
          />
        ))}
      </div>
    </div>
  );
}
