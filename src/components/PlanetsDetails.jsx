export const PlanetDetails = ({ data }) => (
    <div className="card-text">
      <p><strong>Clima:</strong> {data.climate}</p>
      <p><strong>Terreno:</strong> {data.terrain}</p>
      <p><strong>Población:</strong> {data.population}</p>
      <p><strong>Diámetro:</strong> {data.diameter}</p>
      <p><strong>Periodo de rotación:</strong> {data.rotation_period}</p>
      <p><strong>Periodo orbital:</strong> {data.orbital_period}</p>
    </div>
  );
  