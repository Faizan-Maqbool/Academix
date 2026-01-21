import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [error, setError] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const result = await register(formData);
    if (result.success) {
      alert("Registration successful! Please wait for Admin approval.");
      navigate("/login");
    } else {
      setError(result.message);
    }
  };

  return (
    <div style={containerStyle}>
      <div className="card" style={authCardStyle}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "2rem", color: "var(--primary-color)" }}>🎓 Academix</h1>
          <p style={{ color: "var(--text-muted)" }}>Join our learning community</p>
        </div>

        {error && <div style={errorStyle}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            <label style={labelStyle}>Account Type</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="student">I am a Student</option>
              <option value="teacher">I am a Teacher</option>
            </select>
          </div>
          <button type="submit" style={submitBtnStyle}>
            Create Account
          </button>
        </form>

        <p style={{ marginTop: "25px", textAlign: "center", fontSize: "0.95rem" }}>
          Already have an account? <Link to="/login" style={{ color: "var(--primary-color)", fontWeight: "600", textDecoration: "none" }}>Log in</Link>
        </p>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  padding: "20px"
};

const authCardStyle = {
  width: "100%",
  maxWidth: "450px",
  padding: "40px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
};

const labelStyle = {
  fontSize: "0.9rem",
  fontWeight: "600",
  color: "#444"
};

const submitBtnStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "var(--success-color)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(76, 175, 80, 0.2)"
};

const errorStyle = {
  backgroundColor: "#fff5f5",
  color: "var(--danger-color)",
  padding: "12px",
  borderRadius: "8px",
  marginBottom: "20px",
  fontSize: "0.9rem",
  border: "1px solid rgba(244, 67, 54, 0.1)"
};

export default Signup;
