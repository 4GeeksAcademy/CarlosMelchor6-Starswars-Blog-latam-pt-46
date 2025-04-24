export const PeopleDetails = ({ data }) => (
    <div className="card-text">
      <p><strong>Género:</strong> {data.gender}</p>
      <p><strong>Año de nacimiento:</strong> {data.birth_year}</p>
      <p><strong>Color de ojos:</strong> {data.eye_color}</p>
      <p><strong>Color de pelo:</strong> {data.hair_color}</p>
      <p><strong>Altura:</strong> {data.height} cm</p>
      <p><strong>Peso:</strong> {data.mass} kg</p>
      <p><strong>Color de piel:</strong> {data.skin_color}</p>
    </div>
  );
  