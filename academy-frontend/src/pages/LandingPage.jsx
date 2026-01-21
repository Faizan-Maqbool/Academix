import { Link } from "react-router-dom";
import logo from "../assets/images/Acadmixlogo.png";
import faizanImg from "../assets/images/faizanprofile.jpg";

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation Header */}
      <nav style={navStyle}>
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "90px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img 
                src={logo} 

                alt="Academix Logo" 
                style={{ 
                  height: "65px", 
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                }} 
              />
              <span style={{
                fontSize: "1.8rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.5px"
              }}>
                ACADEMIX
              </span>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <Link to="/login" style={outlineBtnStyle}>Login</Link>
              <Link to="/signup" style={primaryBtnStyle}>Join Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Centered Logo Section */}
      <div style={centeredLogoSection}>
        <div style={centeredLogoContainer}>
          <div style={logoGlowEffect}>
            <img 
              src={logo} 
              alt="Academix Logo" 
              style={centeredLogoStyle}
            />
          </div>
          <h1 style={centeredLogoTitle}>
            ACADEMIX
          </h1>
          <p style={centeredLogoSubtitle}>
            Where Excellence Meets Education...
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <header style={heroSectionStyle}>
        <div style={containerStyle}>
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={heroTitleStyle}>
              Empowering Minds. Shaping Futures. 
              <span style={{ color: "var(--primary-color)" }}> Delivering Results.</span>
            </h2>
            <p style={heroSubtitleStyle}>
              Academix is a modern, results-driven educational academy built on strong academic foundations, 
              expert mentorship, and digital innovation. With over 4.5 years of proven excellence, 
              we transform students into high achievers.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "40px" }}>
              <div style={badgeStyle}>
                <span style={badgeIcon}>📘</span> Matric ,Inter and IGCSE Specialist
              </div>
              <div style={badgeStyle}>
                <span style={badgeIcon}>🎓</span> Board & Entry Test Specialist
              </div>
              <div style={badgeStyle}>
                <span style={badgeIcon}>💻</span> Digital Student Portal
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div className="grid grid-2" style={{ alignItems: "center", gap: "80px" }}>
            <div>
              <div style={sectionHeader}>
                <h3 style={sectionTitle}>About Academix</h3>
                <div style={titleUnderline}></div>
              </div>
              <p style={paragraphStyle}>
                Academix is a trusted educational institution that has been successfully serving students 
                for more than 4.5 years, delivering exceptional academic results and building strong 
                conceptual foundations that last a lifetime.
              </p>
              <p style={paragraphStyle}>
                What started as a physical academy has now evolved into a cutting-edge digital academic platform, 
                allowing students and teachers to stay connected through a secure and intelligent online portal 
                designed for modern learning needs.
              </p>
              <div style={statsContainer}>
                <div style={statItem}>
                  <div style={statNumber}>4.5+</div>
                  <div style={statLabel}>Years Excellence</div>
                </div>
                <div style={statItem}>
                  <div style={statNumber}>50+</div>
                  <div style={statLabel}>Students Taught</div>
                </div>
                <div style={statItem}>
                  <div style={statNumber}>90%</div>
                  <div style={statLabel}>Success Rate</div>
                </div>
              </div>
            </div>
            <div style={missionCardContainer}>
              <div style={missionCard}>
                <div style={missionIcon}>🎯</div>
                <h4 style={missionTitle}>Our Mission</h4>
                <p style={missionText}>
                  To provide high-quality, concept-based education using modern teaching methodologies 
                  and technology, empowering students to achieve their full potential and excel in their 
                  academic journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section style={{ ...sectionStyle, backgroundColor: "#ffffff" }}>
        <div style={containerStyle}>
          <div style={sectionHeader}>
            <h3 style={sectionTitle}>Meet Our Founder</h3>
            <div style={titleUnderline}></div>
          </div>
          <div className="grid grid-2" style={{ alignItems: "center", gap: "80px", marginTop: "50px" }}>
            <div style={{ textAlign: "center", position: "relative" }}>
              <div style={founderImageContainer}>
                <img 
                  src={faizanImg} 
                  alt="Faizan Maqbool" 
                  style={founderImageStyle}
                />
                <div style={imageDecoration}></div>
              </div>
              <div style={founderBadge}>
  
              </div>
            </div>
            <div>
              <span style={founderLabel}>Founder & Lead Instructor</span>
              <h3 style={founderName}>Faizan Maqbool</h3>
              <p style={founderRole}>
                Founder | Computer Science Graduate | Entrepreneur
              </p>
              <p style={paragraphStyle}>
                Faizan Maqbool is a passionate educator and a Computer Science graduate engineer with 
                a strong academic and technical background. With over 4.5 years of professional tutoring, 
                he combines education with technology for smarter learning and exceptional results.
              </p>
              <ul style={featureListStyle}>
                <li style={featureItem}><span style={checkIcon}></span> 4.5+ years of professional tutoring experience</li>
                <li style={featureItem}><span style={checkIcon}></span> Graduate Engineer & Computer Science Specialist</li>
                <li style={featureItem}><span style={checkIcon}></span> Physics & Analytical Thinking Expert</li>
                <li style={featureItem}><span style={checkIcon}></span> Concept-based teaching philosophy advocate</li>
                <li style={featureItem}><span style={checkIcon}></span> Digital education pioneer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame / Brilliant Students */}
      <section style={hallOfFameSection}>
        <div style={containerStyle}>
          <div style={sectionHeader}>
            <h3 style={{ ...sectionTitle, color: "white" }}>Hall of Fame</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "15px", fontSize: "1.1rem" }}>
              Celebrating our brilliant students and their exceptional achievements
            </p>
            <div style={{ ...titleUnderline, backgroundColor: "var(--accent-color)" }}></div>
          </div>
          
          <div style={studentsGrid}>
            {[
              { name: "Muhammad Bin Farhan", achievement: "94% in Mathematics 11th", subject: "FBISE Board Examination 2025", color: "#4361ee" },
              { name: "Faheem Abbas", achievement: "100% in Computer Science & 94% in Mathematics", subject: "FBISE Board Examination 2025", color: "#7209b7" },
              { name: "Saad Farooq", achievement: "Secure Admission at AIR University", subject: "Engineering Entrance", color: "#f72585" },
              { name: "Muhammad Bin Farhan", achievement: "85% in HSSC-1", subject: "FBISE Board Examination 2025", color: "#4361ee" },
              { name: "Faheem Abbas", achievement: "89% in SSC-1", subject: "FBISE Board Examination 2025", color: "#4361ee" },
               { name: "Muhammad Ibraheem", achievement: "80% in SSC-1", subject: "FBISE Board Examination 2024", color: "#4361ee" }
        
            ].map((student, index) => (
              <div key={index} style={studentCardStyle(student.color)}>
                <div style={studentCardHeader}>
                  <div style={studentAvatar}>
                    {student.name.charAt(0)}
                  </div>
                  <div style={studentMedal}>🏅</div>
                </div>
                <h4 style={studentNameStyle}>{student.name}</h4>
                <div style={studentAchievement}>{student.achievement}</div>
                <p style={studentSubject}>{student.subject}</p>
                <div style={studentCardFooter}>
                  <span style={achievementBadge}>High Achiever</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={ctaSection}>
        <div style={containerStyle}>
          <div style={ctaContent}>
            <h3 style={ctaTitle}>Ready to Excel with Academix?</h3>
            <p style={ctaText}>
              Join hundreds of successful students who have transformed their academic journey with our 
              expert guidance and innovative learning platform.
            </p>
            <div style={ctaButtons}>
              <Link to="/signup" style={ctaPrimaryBtn}>Start Your Journey</Link>
              <Link to="/login" style={ctaSecondaryBtn}>Schedule a Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <div style={containerStyle}>
          <div style={footerContent}>
            <div style={footerLogoSection}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <img 
                  src={logo} 
                  alt="Academix Logo" 
                  style={{ height: "40px", width: "auto" }} 
                />
                <span style={footerLogoText}>ACADEMIX</span>
              </div>
              <p style={footerTagline}>
                Empowering the next generation of thinkers, innovators, and leaders through 
                quality education and mentorship.
              </p>
            </div>
            <div style={footerLinks}>
              <div style={footerColumn}>
                <h4 style={footerColumnTitle}>Quick Links</h4>
                <Link to="/" style={footerLink}>Home</Link>
                <Link to="/about" style={footerLink}>About</Link>
                <Link to="/courses" style={footerLink}>Courses</Link>
                <Link to="/contact" style={footerLink}>Contact</Link>
              </div>
              <div style={footerColumn}>
                <h4 style={footerColumnTitle}>Subjects</h4>
                <span style={footerLink}>Computer Science</span>
                <span style={footerLink}>Physics</span>
                <span style={footerLink}>Mathematics</span>
                <span style={footerLink}>Entry Test Prep</span>
              </div>
              <div style={footerColumn}>
                <h4 style={footerColumnTitle}>Contact Us</h4>
                <span style={footerLink}>📞 0342 5957917</span>
                <span style={footerLink}>📧 Acadmix.education@gmail.com</span>
              </div>
            </div>
          </div>
          <div style={footerBottom}>
            <p style={footerCopyright}>© 2026 ACADEMIX. Built for Excellence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Styles
const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px"
};

const navStyle = {
  position: "sticky",
  top: 0,
  backgroundColor: "rgba(255,255,255,0.95)",
  backdropFilter: "blur(10px)",
  zIndex: 1000,
  borderBottom: "1px solid #e2e8f0",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
};

// Centered Logo Section Styles
const centeredLogoSection = {
  padding: "80px 0 60px",
  background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
  position: "relative",
  overflow: "hidden"
};

const centeredLogoContainer = {
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto",
  padding: "40px 20px",
  position: "relative"
};

const logoGlowEffect = {
  display: "inline-block",
  padding: "30px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, rgba(67, 97, 238, 0.1) 0%, rgba(114, 9, 183, 0.1) 100%)",
  boxShadow: "0 20px 60px rgba(67, 97, 238, 0.2)",
  marginBottom: "30px",
  animation: "float 6s ease-in-out infinite"
};

const centeredLogoStyle = {
  height: "150px",
  width: "auto",
  objectFit: "contain",
  filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.1))"
};

const centeredLogoTitle = {
  fontSize: "4.5rem",
  fontWeight: "800",
  background: "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "10px",
  letterSpacing: "-1px"
};

const centeredLogoSubtitle = {
  fontSize: "1.4rem",
  color: "#64748b",
  fontWeight: "500",
  marginTop: "10px"
};

// Hero Section Styles
const heroSectionStyle = {
  padding: "100px 0 120px",
  position: "relative",
  background: "radial-gradient(circle at 50% 0%, rgba(67, 97, 238, 0.05) 0%, transparent 50%)"
};

const heroTitleStyle = {
  fontSize: "3.8rem",
  lineHeight: "1.1",
  marginBottom: "30px",
  color: "#1e293b",
  fontWeight: "800",
  letterSpacing: "-0.5px"
};

const heroSubtitleStyle = {
  fontSize: "1.3rem",
  color: "#64748b",
  marginBottom: "40px",
  lineHeight: "1.6",
  maxWidth: "800px",
  margin: "0 auto 50px"
};

const badgeStyle = {
  padding: "16px 28px",
  backgroundColor: "white",
  borderRadius: "16px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
  fontSize: "1.05rem",
  fontWeight: "600",
  color: "var(--primary-color)",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer"
};

const badgeIcon = {
  fontSize: "1.2rem"
};

// Section Styles
const sectionStyle = {
  padding: "120px 0",
  backgroundColor: "#f8fafc"
};

const sectionHeader = {
  textAlign: "center",
  marginBottom: "60px"
};

const sectionTitle = {
  fontSize: "2.8rem",
  marginBottom: "15px",
  color: "#1e293b",
  fontWeight: "700"
};

const titleUnderline = {
  width: "80px",
  height: "4px",
  background: "linear-gradient(to right, var(--primary-color), var(--secondary-color))",
  margin: "0 auto",
  borderRadius: "2px"
};

const paragraphStyle = {
  fontSize: "1.15rem",
  color: "#475569",
  marginBottom: "25px",
  lineHeight: "1.7"
};

// Stats Styles
const statsContainer = {
  display: "flex",
  gap: "40px",
  marginTop: "40px",
  flexWrap: "wrap"
};

const statItem = {
  textAlign: "center",
  flex: "1",
  minWidth: "120px"
};

const statNumber = {
  fontSize: "2.5rem",
  fontWeight: "800",
  color: "var(--primary-color)",
  marginBottom: "5px"
};

const statLabel = {
  fontSize: "1rem",
  color: "#64748b",
  fontWeight: "500"
};

// Mission Card Styles
const missionCardContainer = {
  textAlign: "center",
  position: "relative"
};

const missionCard = {
  padding: "50px 40px",
  background: "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)",
  color: "white",
  borderRadius: "24px",
  boxShadow: "0 30px 60px rgba(67, 97, 238, 0.3)",
  position: "relative",
  overflow: "hidden"
};

const missionIcon = {
  fontSize: "3rem",
  marginBottom: "25px",
  display: "block"
};

const missionTitle = {
  fontSize: "2rem",
  marginBottom: "20px",
  fontWeight: "700"
};

const missionText = {
  fontSize: "1.1rem",
  opacity: 0.9,
  lineHeight: "1.6"
};

// Founder Styles
const founderImageContainer = {
  width: "380px",
  height: "480px",
  borderRadius: "24px",
  margin: "0 auto",
  overflow: "hidden",
  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
  position: "relative",
  border: "12px solid white"
};

const founderImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px"
};

const imageDecoration = {
  position: "absolute",
  top: "-20px",
  left: "-20px",
  right: "-20px",
  bottom: "-20px",
  border: "2px solid var(--primary-color)",
  borderRadius: "32px",
  zIndex: -1,
  opacity: 0.3
};

const founderBadge = {
  position: "absolute",
  top: "30px",
  right: "30px",
  backgroundColor: "var(--accent-color)",
  color: "white",
  padding: "8px 16px",
  borderRadius: "20px",
  fontSize: "0.9rem",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  boxShadow: "0 8px 20px rgba(247, 37, 133, 0.3)"
};

const founderLabel = {
  color: "var(--primary-color)",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  fontSize: "0.95rem",
  display: "block",
  marginBottom: "10px"
};

const founderName = {
  fontSize: "3rem",
  margin: "10px 0 15px",
  color: "#1e293b",
  fontWeight: "800",
  lineHeight: "1.1"
};

const founderRole = {
  fontSize: "1.2rem",
  fontWeight: "600",
  color: "var(--secondary-color)",
  marginBottom: "30px",
  lineHeight: "1.4"
};

const featureListStyle = {
  listStyle: "none",
  padding: 0,
  marginTop: "30px"
};

const featureItem = {
  marginBottom: "15px",
  fontSize: "1.1rem",
  color: "#475569",
  display: "flex",
  alignItems: "flex-start",
  gap: "12px"
};

const checkIcon = {
  color: "#06d6a0",
  fontSize: "1.2rem",
  flexShrink: 0
};

// Hall of Fame Styles
const hallOfFameSection = {
  padding: "120px 0",
  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  color: "white",
  position: "relative",
  overflow: "hidden"
};

const studentsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
  marginTop: "50px"
};

const studentCardStyle = (color) => ({
  backgroundColor: "#2d3748",
  borderRadius: "20px",
  padding: "35px",
  textAlign: "center",
  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  borderTop: `5px solid ${color}`,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: `0 30px 60px ${color}40`
  }
});

const studentCardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "25px"
};

const studentAvatar = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "white"
};

const studentMedal = {
  fontSize: "2rem"
};

const studentNameStyle = {
  fontSize: "1.5rem",
  marginBottom: "10px",
  fontWeight: "700",
  color: "white"
};

const studentAchievement = {
  fontSize: "2.2rem",
  fontWeight: "800",
  marginBottom: "10px",
  background: "linear-gradient(135deg, #fff 0%, #a5b4fc 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const studentSubject = {
  fontSize: "1rem",
  opacity: 0.7,
  marginBottom: "20px"
};

const studentCardFooter = {
  marginTop: "20px"
};

const achievementBadge = {
  backgroundColor: "rgba(255,255,255,0.1)",
  padding: "6px 16px",
  borderRadius: "20px",
  fontSize: "0.85rem",
  fontWeight: "600",
  color: "var(--accent-color)"
};

// CTA Styles
const ctaSection = {
  padding: "100px 0",
  background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
};

const ctaContent = {
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto"
};

const ctaTitle = {
  fontSize: "3rem",
  marginBottom: "25px",
  color: "#1e293b",
  fontWeight: "800"
};

const ctaText = {
  fontSize: "1.3rem",
  color: "#64748b",
  marginBottom: "40px",
  lineHeight: "1.6"
};

const ctaButtons = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap"
};

const ctaPrimaryBtn = {
  padding: "18px 40px",
  backgroundColor: "var(--primary-color)",
  color: "white",
  textDecoration: "none",
  borderRadius: "12px",
  fontWeight: "700",
  fontSize: "1.1rem",
  boxShadow: "0 10px 30px rgba(67, 97, 238, 0.3)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  display: "inline-block",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 15px 40px rgba(67, 97, 238, 0.4)"
  }
};

const ctaSecondaryBtn = {
  padding: "18px 40px",
  border: "2px solid var(--primary-color)",
  color: "var(--primary-color)",
  textDecoration: "none",
  borderRadius: "12px",
  fontWeight: "700",
  fontSize: "1.1rem",
  transition: "all 0.3s ease",
  display: "inline-block",
  "&:hover": {
    backgroundColor: "var(--primary-color)",
    color: "white"
  }
};

// Footer Styles
const footerStyle = {
  padding: "80px 0 40px",
  backgroundColor: "#1e293b",
  color: "white"
};

const footerContent = {
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "80px",
  marginBottom: "60px"
};

const footerLogoSection = {
  maxWidth: "400px"
};

const footerLogoText = {
  fontSize: "1.8rem",
  fontWeight: "800",
  background: "linear-gradient(135deg, #fff 0%, #a5b4fc 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const footerTagline = {
  fontSize: "1rem",
  color: "#cbd5e1",
  lineHeight: "1.6",
  marginTop: "15px"
};

const footerLinks = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "40px"
};

const footerColumn = {
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const footerColumnTitle = {
  fontSize: "1.2rem",
  fontWeight: "700",
  marginBottom: "20px",
  color: "white"
};

const footerLink = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "var(--primary-color)"
  }
};

const footerBottom = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "40px",
  borderTop: "1px solid #334155"
};

const footerCopyright = {
  color: "#94a3b8",
  fontSize: "0.95rem"
};

const footerSocial = {
  display: "flex",
  gap: "20px"
};

const socialIcon = {
  fontSize: "1.2rem",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)"
  }
};

// Button Styles
const primaryBtnStyle = {
  padding: "14px 32px",
  backgroundColor: "var(--primary-color)",
  color: "white",
  textDecoration: "none",
  borderRadius: "10px",
  fontWeight: "700",
  fontSize: "1rem",
  boxShadow: "0 8px 25px rgba(67, 97, 238, 0.3)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 12px 30px rgba(67, 97, 238, 0.4)"
  }
};

const outlineBtnStyle = {
  padding: "14px 32px",
  border: "2px solid var(--primary-color)",
  color: "var(--primary-color)",
  textDecoration: "none",
  borderRadius: "10px",
  fontWeight: "700",
  fontSize: "1rem",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "var(--primary-color)",
    color: "white"
  }
};

// Add CSS for animations
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .grid.grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  @media (max-width: 768px) {
    .grid.grid-2 {
      grid-template-columns: 1fr;
    }
    
    .grid.grid-3 {
      grid-template-columns: 1fr;
    }
    
    ${centeredLogoTitle} {
      font-size: 3rem;
    }
    
    ${heroTitleStyle} {
      font-size: 2.5rem;
    }
    
    ${footerContent} {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    
    ${founderImageContainer} {
      width: 300px;
      height: 380px;
    }
  }
`;

// Add styles to document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default LandingPage;