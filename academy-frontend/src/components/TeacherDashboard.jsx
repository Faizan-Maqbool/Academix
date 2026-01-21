import { useState, useEffect } from "react";
import API from "../services/api";

const TeacherDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [myClasses, setMyClasses] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [className, setClassName] = useState("");
  const [showAssignmentForm, setShowAssignmentForm] = useState(false);
  const [assignmentData, setAssignmentData] = useState({
    classId: "",
    title: "",
    description: "",
    dueDate: "",
    marks: ""
  });

  useEffect(() => {
    fetchNotifications();
    fetchMyClasses();
    fetchAllStudents();
  }, []);

  const fetchNotifications = async () => {
    try {
      const { data } = await API.get("/notification/my");
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications", error);
    }
  };

  const fetchMyClasses = async () => {
    try {
      const { data } = await API.get("/teacher/my-students");
      setMyClasses(data);
    } catch (error) {
      console.error("Error fetching my students", error);
    }
  };

  const fetchAllStudents = async () => {
    try {
      const { data } = await API.get("/users/students");
      setAllStudents(data);
    } catch (error) {
      console.error("Error fetching all students", error);
    }
  };

  const addStudent = async (e) => {
    e.preventDefault();
    try {
      await API.post("/teacher/add-student", { studentId: selectedStudent, className });
      alert("Student added successfully!");
      fetchMyClasses();
      setShowAddStudent(false);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add student");
    }
  };

  const handleCreateAssignment = async (e) => {
    e.preventDefault();
    try {
      await API.post("/teacher/assignment/create", assignmentData);
      alert("Assignment created!");
      setShowAssignmentForm(false);
      setAssignmentData({ classId: "", title: "", description: "", dueDate: "", marks: "" });
    } catch (error) {
      alert("Failed to create assignment");
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <header style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.8rem", color: "var(--text-dark)" }}>Teacher Command Center 🎒</h2>
        <p style={{ color: "var(--text-muted)" }}>Manage your students and educational content.</p>
      </header>

      <div className="grid grid-3" style={{ marginBottom: "30px" }}>
        <div className="card" style={{ backgroundColor: "var(--primary-color)", color: "white" }}>
          <h5 style={{ opacity: 0.8 }}>Total Students</h5>
          <h3 style={{ fontSize: "2rem" }}>{myClasses.reduce((acc, curr) => acc + curr.students.length, 0)}</h3>
        </div>
        <div className="card" style={{ backgroundColor: "var(--secondary-color)", color: "white" }}>
          <h5 style={{ opacity: 0.8 }}>Active Classes</h5>
          <h3 style={{ fontSize: "2rem" }}>{myClasses.length}</h3>
        </div>
        <div className="card" style={{ backgroundColor: "var(--accent-color)", color: "white" }}>
          <h5 style={{ opacity: 0.8 }}>Pending Requests</h5>
          <h3 style={{ fontSize: "2rem" }}>{notifications.length}</h3>
        </div>
      </div>

      <div className="grid grid-2">
        {/* Left Column: Management */}
        <section>
          <div className="card">
            <h4>Management Tools</h4>
            <div className="grid grid-2" style={{ marginTop: "20px" }}>
              <button onClick={() => setShowAddStudent(!showAddStudent)} style={actionBtnStyle}>
                <span style={{ fontSize: "1.5rem" }}>👤</span><br/>Add Student
              </button>
              <button onClick={() => setShowAssignmentForm(!showAssignmentForm)} style={actionBtnStyle}>
                <span style={{ fontSize: "1.5rem" }}>📝</span><br/>Create Task
              </button>
              <button style={actionBtnStyle}>
                <span style={{ fontSize: "1.5rem" }}>📅</span><br/>Attendance
              </button>
              <button style={actionBtnStyle}>
                <span style={{ fontSize: "1.5rem" }}>📢</span><br/>Broadcast
              </button>
            </div>

            {/* Modals/Forms Overlay Style */}
            {showAddStudent && (
              <form onSubmit={addStudent} style={formStyle}>
                <h5>Enroll New Student</h5>
                <input 
                  type="text" placeholder="Class Name" 
                  value={className} onChange={(e) => setClassName(e.target.value)} required 
                />
                <select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)} required>
                  <option value="">Select a student...</option>
                  {allStudents.map(s => <option key={s._id} value={s._id}>{s.name}</option>)}
                </select>
                <button type="submit" style={submitBtnStyle}>Add to Class</button>
              </form>
            )}

            {showAssignmentForm && (
              <form onSubmit={handleCreateAssignment} style={formStyle}>
                <h5>Post New Assignment</h5>
                <select 
                  value={assignmentData.classId} 
                  onChange={(e) => setAssignmentData({ ...assignmentData, classId: e.target.value })} 
                  required
                >
                  <option value="">Select Class</option>
                  {myClasses.map(c => <option key={c._id} value={c._id}>{c.className}</option>)}
                </select>
                <input 
                  type="text" placeholder="Assignment Title" 
                  value={assignmentData.title} 
                  onChange={(e) => setAssignmentData({ ...assignmentData, title: e.target.value })} 
                  required 
                />
                <input 
                  type="date" 
                  value={assignmentData.dueDate} 
                  onChange={(e) => setAssignmentData({ ...assignmentData, dueDate: e.target.value })} 
                  required 
                />
                <button type="submit" style={{ ...submitBtnStyle, backgroundColor: "var(--primary-color)" }}>Publish Assignment</button>
              </form>
            )}
          </div>

          <div className="card">
            <h4>My Enrolled Students</h4>
            {myClasses.map(c => (
              <details key={c._id} style={{ marginTop: "10px", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                <summary style={{ cursor: "pointer", fontWeight: "bold" }}>{c.className} ({c.students.length} Students)</summary>
                <ul style={{ marginTop: "10px", fontSize: "0.9rem" }}>
                  {c.students.map(s => <li key={s._id}>{s.name} - {s.email}</li>)}
                </ul>
              </details>
            ))}
          </div>
        </section>

        {/* Right Column: Inbox */}
        <section>
          <div className="card" style={{ height: "100%" }}>
            <h4>Notification Inbox 📩</h4>
            <div style={{ marginTop: "20px" }}>
              {notifications.length === 0 ? <p style={{ textAlign: "center", padding: "20px" }}>Empty</p> : (
                notifications.map((n) => (
                  <div key={n._id} style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                    <p style={{ fontSize: "0.9rem" }}>{n.message}</p>
                    <small style={{ color: "#aaa" }}>{new Date(n.createdAt).toLocaleTimeString()}</small>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const actionBtnStyle = {
  padding: "15px",
  backgroundColor: "white",
  border: "1px solid #eee",
  borderRadius: "12px",
  cursor: "pointer",
  textAlign: "center"
};

const formStyle = {
  marginTop: "20px",
  padding: "20px",
  backgroundColor: "#f0f4ff",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const submitBtnStyle = {
  padding: "12px",
  backgroundColor: "var(--success-color)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

export default TeacherDashboard;
