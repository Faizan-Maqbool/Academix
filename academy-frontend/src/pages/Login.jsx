import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const result = await login(email, password);
    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div style={containerStyle}>
      <div className="card" style={authCardStyle}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "2rem", color: "var(--primary-color)" }}>🎓 Academix</h1>
          <p style={{ color: "var(--text-muted)" }}>Sign in to continue to your dashboard</p>
        </div>

        {error && <div style={errorStyle}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              placeholder="name@academy.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={submitBtnStyle}>
            Sign In
          </button>
        </form>

        <p style={{ marginTop: "25px", textAlign: "center", fontSize: "0.95rem" }}>
          New to Academix? <Link to="/signup" style={{ color: "var(--primary-color)", fontWeight: "600", textDecoration: "none" }}>Create an account</Link>
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
  backgroundColor: "var(--primary-color)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(67, 97, 238, 0.2)"
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

export default Login;
