import { useState, useEffect } from "react";
import API from "../services/api";

const StudentDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [showRequest, setShowRequest] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [requestMessage, setRequestMessage] = useState("");

  useEffect(() => {
    fetchNotifications();
    fetchTeachers();
  }, []);

  const fetchNotifications = async () => {
    try {
      const { data } = await API.get("/notification/my");
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications", error);
    }
  };

  const fetchTeachers = async () => {
    try {
      const { data } = await API.get("/users/teachers");
      setTeachers(data);
    } catch (error) {
      console.error("Error fetching teachers", error);
    }
  };

  const sendRequest = async (e) => {
    e.preventDefault();
    try {
      await API.post("/student/request-teacher", { 
        teacherId: selectedTeacher, 
        message: requestMessage 
      });
      alert("Request sent successfully!");
      setShowRequest(false);
    } catch (error) {
      alert("Failed to send request.");
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <header style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.8rem", color: "var(--text-dark)" }}>Welcome Back! 👋</h2>
        <p style={{ color: "var(--text-muted)" }}>Here's what's happening in your classes today.</p>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-3" style={{ marginBottom: "30px" }}>
        <div className="card" style={{ borderLeft: "5px solid var(--primary-color)" }}>
          <h5 style={{ color: "var(--text-muted)", fontSize: "0.9rem", textTransform: "uppercase" }}>Attendance</h5>
          <h3 style={{ fontSize: "1.5rem", margin: "10px 0" }}>92%</h3>
          <p style={{ color: "var(--success-color)", fontSize: "0.8rem" }}>↑ 2% from last month</p>
        </div>
        <div className="card" style={{ borderLeft: "5px solid var(--accent-color)" }}>
          <h5 style={{ color: "var(--text-muted)", fontSize: "0.9rem", textTransform: "uppercase" }}>Avg. Marks</h5>
          <h3 style={{ fontSize: "1.5rem", margin: "10px 0" }}>85/100</h3>
          <p style={{ color: "var(--primary-color)", fontSize: "0.8rem" }}>Top 10% of class</p>
        </div>
        <div className="card" style={{ borderLeft: "5px solid var(--warning-color)" }}>
          <h5 style={{ color: "var(--text-muted)", fontSize: "0.9rem", textTransform: "uppercase" }}>Assignments</h5>
          <h3 style={{ fontSize: "1.5rem", margin: "10px 0" }}>3 Pending</h3>
          <p style={{ color: "var(--danger-color)", fontSize: "0.8rem" }}>Next due in 2 days</p>
        </div>
      </div>

      <div className="grid grid-2">
        {/* Main Actions Area */}
        <section>
          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h4>Quick Actions</h4>
            </div>
            <div className="grid grid-2">
              <button onClick={() => alert("Assignments view coming soon!")} style={actionBtnStyle}>
                <span style={{ fontSize: "1.5rem" }}>📚</span><br/>View Assignments
              </button>
              <button onClick={() => alert("Marks view coming soon!")} style={actionBtnStyle}>
                <span style={{ fontSize: "1.5rem" }}>📉</span><br/>Exam Results
              </button>
              <button onClick={() => setShowRequest(!showRequest)} style={{ ...actionBtnStyle, gridColumn: "span 2", backgroundColor: "var(--primary-color)", color: "white" }}>
                Connect with a Teacher
              </button>
            </div>

            {showRequest && (
              <form onSubmit={sendRequest} style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f0f2f5", borderRadius: "12px" }}>
                <h5 style={{ marginBottom: "15px" }}>Join a New Class</h5>
                <select 
                  value={selectedTeacher} 
                  onChange={(e) => setSelectedTeacher(e.target.value)} 
                  required
                >
                  <option value="">Choose a Teacher</option>
                  {teachers.map(t => <option key={t._id} value={t._id}>{t.name} ({t.email})</option>)}
                </select>
                <textarea 
                  placeholder="Tell the teacher which class you'd like to join..." 
                  value={requestMessage} 
                  onChange={(e) => setRequestMessage(e.target.value)} 
                  required 
                  style={{ minHeight: "80px", marginTop: "10px" }}
                />
                <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "var(--success-color)", color: "white", border: "none", borderRadius: "8px", marginTop: "15px", cursor: "pointer" }}>
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Notifications Area */}
        <section>
          <div className="card" style={{ height: "100%" }}>
            <h4 style={{ marginBottom: "20px" }}>Latest Notifications 🔔</h4>
            {notifications.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px 0", color: "var(--text-muted)" }}>
                <p>No new updates for you.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {notifications.map((n) => (
                  <div key={n._id} style={{ padding: "15px", backgroundColor: "#f8f9fa", borderRadius: "10px", borderLeft: "3px solid var(--accent-color)" }}>
                    <p style={{ fontSize: "0.95rem", marginBottom: "5px" }}>{n.message}</p>
                    <small style={{ color: "var(--text-muted)" }}>{new Date(n.createdAt).toLocaleDateString()}</small>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

const actionBtnStyle = {
  padding: "20px",
  backgroundColor: "white",
  border: "1px solid #eee",
  borderRadius: "12px",
  cursor: "pointer",
  textAlign: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
};

export default StudentDashboard;
