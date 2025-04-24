export const VehicleDetails = ({ data }) => (
    <div className="card-text">
      <p><strong>Modelo:</strong> {data.model}</p>
      <p><strong>Fabricante:</strong> {data.manufacturer}</p>
      <p><strong>Clase:</strong> {data.vehicle_class}</p>
      <p><strong>Costo en créditos:</strong> {data.cost_in_credits}</p>
      <p><strong>Velocidad máxima:</strong> {data.max_atmosphering_speed}</p>
      <p><strong>Longitud:</strong> {data.length}</p>
      <p><strong>Capacidad de carga:</strong> {data.cargo_capacity}</p>
    </div>
  );  