import { useState, useEffect } from 'react';
import Usuarios from './Usuarios';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      setEmployees(data.results || []);
    } catch (error) {
      console.error('Error al obtener los empleados:', error);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <main className="container">
      <h1>Employee Directory</h1>

      {loading && <p className="status-message">Cargando empleados...</p>}

      {!loading && employees.length === 0 && (
        <p className="status-message">No se encontraron empleados.</p>
      )}

      {!loading && employees.length > 0 && (
        <div className="grid">
          {employees.map((user, index) => (
            <Usuarios
              key={user.login?.uuid || user.id?.value || index}
              user={user}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;