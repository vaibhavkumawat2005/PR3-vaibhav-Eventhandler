import React, { useState } from "react";

function SuperModernForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
    
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = formData;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {

      setUsers([...users, formData]);
    }
    setFormData({ username: "", email: "", password: "" });
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, idx) => idx !== index);
    setUsers(updatedUsers);
  };

  const handleRowMouseOver = (index) => {
    setHoveredRow(index); 
  };

  const handleRowMouseOut = () => {
    setHoveredRow(null); 
  };

  return (
    <div className="super-modern-container">
      <div className="form-card">
        <h1>{editingIndex !== null ? "Edit Account" : "Create an Account"}</h1>
        <form onSubmit={handleSubmit} className="form-content">
          <div className="input-field">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            {editingIndex !== null ? "Update" : "Register"}
          </button>
        </form>
      </div>

      <div className="user-list">
        <h2>Registered Users</h2>
        {users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={idx}
                  onMouseOver={() => handleRowMouseOver(idx)}
                  onMouseOut={handleRowMouseOut}
                  style={{
                    backgroundColor: hoveredRow === idx ? "#f0f8ff" : "transparent",
                    transition: "background-color 0.3s",
                  }}
                >
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <button onClick={() => handleEdit(idx)} className="edit-btn">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(idx)} className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-data">No users yet. Be the first!</p>
        )}
      </div>
    </div>
  );
}

export default SuperModernForm;
