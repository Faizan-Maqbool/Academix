import { useState, useEffect } from "react";
import API from "../services/api";

const AdminDashboard = () => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchPendingUsers();
    fetchNotifications();
  }, []);

  const fetchPendingUsers = async () => {
    try {
      const { data } = await API.get("/admin/pending-users");
      setPendingUsers(data);
    } catch (error) {
      console.error("Error fetching pending users", error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const { data } = await API.get("/notification/my");
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications", error);
    }
  };

  const approveUser = async (userId) => {
    setMessage("");
    try {
      const { data } = await API.put(`/admin/approve-user/${userId}`);
      setMessage(data.message || "User approved successfully!");
      fetchPendingUsers();
    } catch (error) {
      console.error("Error approving user", error);
      setMessage(error.response?.data?.message || "Failed to approve user.");
    }
  };

  return (
    <div>
      <h3>Admin Panel</h3>
      {message && <p style={{ color: "green" }}>{message}</p>}
      
      <div style={{ marginBottom: "30px" }}>
        <h4>Pending Approvals</h4>
        {pendingUsers.length === 0 ? (
          <p>No pending approvals.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingUsers.map((user) => (
                <tr key={user._id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px 0" }}>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button 
                      onClick={() => approveUser(user._id)}
                      style={{ padding: "5px 10px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer" }}
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div>
        <h4>Recent Notifications</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {notifications.map((n) => (
            <li key={n._id} style={{ padding: "10px", backgroundColor: "#f9f9f9", marginBottom: "5px", borderRadius: "4px" }}>
              {n.message} <small style={{ color: "#888" }}>({new Date(n.createdAt).toLocaleDateString()})</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
