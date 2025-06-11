import { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = () => {
    if (username.trim() && email.trim()) {
      const newUser = { username, email };
      setUsers([...users, newUser]);
      setUsername("");
      setEmail("");
    }
  };

  const handleRemoveUser = (indexToRemove) => {
    setUsers(users.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="widget-card">
      <h2>Users</h2>
      <div className="user-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index}>
            {user.username} ({user.email})
            <button onClick={() => handleRemoveUser(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
