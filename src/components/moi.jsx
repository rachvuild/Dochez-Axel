export default function Fruit({ MoiInfo, onClick }) {
  return (
    <div className="info">
      <div className="containt-h2">
        <div className="back"></div>
        <hr />
        <h2>{MoiInfo.nom}</h2>
        <hr />
      </div>
    </div>
  );
}
