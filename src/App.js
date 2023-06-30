import { useState } from "react";
import "./styles.css";
import Moi from "./components/moi";
import Projet from "./components/projet";

export default function App() {
  // state (état, données)
  const [moi, setMois] = useState([
    { id: 1, nom: "Moi" },
    { id: 2, nom: "Mon travail" },
    { id: 3, nom: "Contact" },
  ]);
  const [list, setlist] = useState([]);
  const [projets, setprojets] = useState([]);
  // comportements
  function afficheMoi(id) {
    setprojets([null]);
    if (id == 1) {
      const copieprojet = [];
      setprojets(copieprojet);
      setlist(
        <div className="adroit">
          <div className="apropos">
            <h3>À propos</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque dapibus lorem id lectus facilisis, tincidunt laoreet
              mi rhoncus. Ut et risus blandit, euismod nulla quis, pretium
              sapien. Vivamus sit amet semper enim. Vivamus viverra odio
              condimentum imperdiet pulvinar. Maecenas eget elit mauris. Nullam
              ut mauris nisi. Vivamus feugiat ultrices mattis.
            </p>
          </div>
        </div>
      );
    }
    if (id == 2) {
      setlist();
      const copieprojet = [];
      copieprojet.push(
        { id: 1, nom: "GSB", description: "", image: "" },
        { id: 2, nom: "Stage", description: "", image: "" },
        { id: 3, nom: "EFS", description: "", image: "" },
        { id: 4, nom: "Chat", description: "", image: "" }
      );
      setprojets(copieprojet);
    }
    if (id == 3) {
      setlist();
    }
  }

  // affichage (render)
  return (
    <div>
      <div className="name">
        <h1>Axel Dochez</h1>
        <p>Developper Web junior</p>
      </div>
      {list}
      <div className="list">
        <div onClick={() => afficheMoi(1)} className="info">
          <div className="containt-h2">
            <div className="back"></div>
            <hr />
            <h2>Moi</h2>
            <hr />
          </div>
        </div>
        <div onClick={() => afficheMoi(2)} className="info">
          <div className="containt-h2">
            <div className="back"></div>
            <hr />
            <h2>Mon travail</h2>
            <hr />
          </div>
        </div>
        <ul>
          {projets.map((projet) => (
            <Projet projetInfo={projet} key={projet.id} />
          ))}
        </ul>
        <div onClick={() => afficheMoi(3)} className="info">
          <div className="containt-h2">
            <div className="back"></div>
            <hr />
            <h2>Contact</h2>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
