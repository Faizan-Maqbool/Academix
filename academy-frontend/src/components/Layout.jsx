import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Acadmixlogo.png";

const Layout = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (!user || location.pathname === "/") return <>{children}</>;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Mobile Navbar */}
      <nav style={{ 
        position: "fixed", top: 0, width: "100%", height: "60px", background: "var(--white)", 
        alignItems: "center", justifyContent: "space-between", padding: "0 20px",
        boxShadow: "var(--shadow)", zIndex: 1000, display: window.innerWidth < 768 ? "flex" : "none"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={logo} alt="Logo" style={{ height: "30px" }} />
          <h2 style={{ fontSize: "1.2rem", color: "var(--primary-color)" }}>Academix</h2>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer" }}>
          ☰
        </button>
      </nav>

      {/* Sidebar */}
      <aside style={{ 
        transition: "width 0.3s ease",
        overflow: "hidden",
        backgroundColor: "var(--primary-color)", 
        color: "var(--white)",
        display: window.innerWidth >= 768 ? "flex" : (sidebarOpen ? "flex" : "none"),
        flexDirection: "column",
        position: window.innerWidth < 768 ? "fixed" : "relative",
        height: "100vh",
        zIndex: 1001,
        width: window.innerWidth >= 768 ? "260px" : (sidebarOpen ? "250px" : "0")
      }}>
        <div style={{ padding: "30px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "40px" }}>
            <img src={logo} alt="Logo" style={{ height: "40px", filter: "brightness(0) invert(1)" }} />
            <h2 style={{ fontSize: "1.5rem" }}>Academix</h2>
          </div>
          <nav>
            <ul style={{ listStyle: "none" }}>
              <li style={navItemStyle}><Link to="/dashboard" style={{ color: "white", textDecoration: "none" }} onClick={() => setSidebarOpen(false)}>🏠 Dashboard</Link></li>
              {user.role === "student" && (
                <>
                  <li style={navItemStyle}>📚 Assignments</li>
                  <li style={navItemStyle}>📉 Marks</li>
                  <li style={navItemStyle}>✅ Attendance</li>
                </>
              )}
              {user.role === "teacher" && (
                <>
                  <li style={navItemStyle}>👨‍🏫 My Classes</li>
                  <li style={navItemStyle}>➕ Add Content</li>
                  <li style={navItemStyle}>📢 Broadcast</li>
                </>
              )}
            </ul>
          </nav>
        </div>
        <div style={{ marginTop: "auto", padding: "20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p style={{ fontSize: "0.9rem", marginBottom: "15px" }}>Logged in as:<br/><strong>{user.name}</strong></p>
          <button onClick={handleLogout} style={{ 
            width: "100%", padding: "10px", backgroundColor: "rgba(255,255,255,0.2)", 
            color: "white", border: "none", borderRadius: "8px", cursor: "pointer" 
          }}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ 
        flex: 1, 
        padding: window.innerWidth < 768 ? "80px 20px 20px" : "40px", 
        backgroundColor: "var(--bg-light)",
        overflowY: "auto"
      }}>
        {children}
      </main>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && window.innerWidth < 768 && (
        <div 
          onClick={() => setSidebarOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000 }}
        />
      )}
    </div>
  );
};

const navItemStyle = {
  padding: "12px 0",
  fontSize: "1.1rem",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
  cursor: "pointer",
  transition: "opacity 0.2s"
};

export default Layout;
