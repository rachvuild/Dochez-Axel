export default function Project({ projetInfo, onClick }) {
  // state (état, données)

  // comportements
  function afficheProjet(nom) {}
  return (
    <li onMouseOver={() => afficheProjet(projetInfo.nom)}>{projetInfo.nom}</li>
  );
}
