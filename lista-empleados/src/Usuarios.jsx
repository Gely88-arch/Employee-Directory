function Usuarios({ user }) {
  const fullName =
    typeof user.name === 'object'
      ? `${user.name.first} ${user.name.last}`
      : user.name || 'Sin nombre';

  const initials = fullName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');

  const company = user.company?.name || user.company || 'Random Corp';

  return (
    <div className="card">
      <div className="avatar">{initials}</div>
      <h3>{fullName}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Teléfono:</strong> {user.phone}</p>
      <p><strong>Empresa:</strong> {company}</p>
    </div>
  );
}

export default Usuarios;