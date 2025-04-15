import { useState, useEffect } from 'react';
import '../styles/Partner.css';
import doctorImage from "../assets/images/doctor-with-report.png";


const Partner = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    city: '',
    state: '',
    specialization: '',
    hospitalName: '',
    qualification: '',
    experience: '',
    reason: ''
  });

  // State to track which inputs have focus
  const [focusedInput, setFocusedInput] = useState(null);

  // Responsive styles object for reuse
  const responsive = {
    container: {
      padding: "clamp(20px, 5vw, 80px) clamp(15px, 3vw, 40px)",
    },
    heading: {
      fontSize: "clamp(24px, 5vw, 32px)",
    },
    subheading: {
      fontSize: "clamp(20px, 4vw, 24px)",
    },
    paragraph: {
      fontSize: "clamp(14px, 3vw, 16px)",
    },
    smallText: {
      fontSize: "clamp(12px, 2vw, 14px)",
    }
  };

  // Add smooth scrolling behavior
  useEffect(() => {
    // Apply smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add click handlers for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };
    
    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });
    
    // Cleanup event listeners
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  // Add smooth transition for all interactive elements
  const interactiveStyle = {
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  // Update button styles to include smooth transitions
  const buttonStyle = {
    ...interactiveStyle,
    width: "100%",
    backgroundColor: "#4A90E2",
    color: "white",
    padding: "15px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "600",
    boxShadow: "0 4px 10px rgba(74, 144, 226, 0.3)",
  };

  // Update CTA button styles
  const ctaButtonStyle = {
    ...interactiveStyle,
    background: "#4A90E2", 
    padding: "clamp(8px, 2vw, 10px) clamp(15px, 3vw, 20px)", 
    borderRadius: "5px", 
    color: "white", 
    textDecoration: "none",
    border: "1px solid #4A90E2",
    boxSizing: "border-box",
    fontSize: responsive.smallText.fontSize
  };

  // Update secondary CTA button styles
  const secondaryCtaButtonStyle = {
    ...interactiveStyle,
    background: "#f5f5f5", 
    padding: "clamp(8px, 2vw, 10px) clamp(15px, 3vw, 20px)", 
    borderRadius: "5px", 
    color: "#333", 
    textDecoration: "none", 
    border: "1px solid #ddd",
    boxSizing: "border-box",
    fontSize: responsive.smallText.fontSize
  };

  // Update form input styles to include smooth transitions
  const inputStyle = (name) => ({
    ...interactiveStyle,
    width: "100%",
    padding: "15px 15px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "white",
    outline: "none",
    height: "55px",
    boxSizing: "border-box",
    borderColor: focusedInput === name || formData[name] ? "#4A90E2" : "#ddd"
  });

  // Update textarea styles to include smooth transitions
  const textareaStyle = (name) => ({
    ...inputStyle(name),
    height: "120px",
    resize: "vertical",
    paddingTop: "25px",
    paddingBottom: "10px",
    verticalAlign: "top",
    lineHeight: "1.5",
    textAlign: "left"
  });

  // Update select styles to include smooth transitions
  const selectStyle = (name) => ({
    ...inputStyle(name),
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"%23666\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    backgroundSize: "20px"
  });

  // Update label styles to include smooth transitions
  const labelStyle = (name) => ({
    ...interactiveStyle,
    position: "absolute",
    left: "15px",
    top: formData[name] || focusedInput === name ? "-10px" : "50%",
    transform: formData[name] || focusedInput === name ? "translateY(0)" : "translateY(-50%)",
    fontSize: formData[name] || focusedInput === name ? "12px" : "16px",
    color: formData[name] || focusedInput === name ? "#4A90E2" : "#666",
    pointerEvents: "none",
    backgroundColor: formData[name] || focusedInput === name ? "white" : "transparent",
    padding: formData[name] || focusedInput === name ? "0 5px" : "0",
    zIndex: "1"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    // Reset the form
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      city: '',
      state: '',
      specialization: '',
      hospitalName: '',
      qualification: '',
      experience: '',
      reason: ''
    });
  };

  // Style for the floating label form groups
  const formGroupStyle = {
    marginBottom: "25px",
    position: "relative"
  };

  return (
    <div className="partner-container">
      {/* Hero Section */}
      <section className="partner-hero" style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: responsive.container.padding,
        gap: "clamp(20px, 5vw, 40px)",
        textAlign: "center",
      }}>
        <div className="hero-content" style={{
          textAlign: "center", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          maxWidth: "800px",
          width: "100%"
        }}>
          <h1 style={{ fontSize: responsive.heading.fontSize }}>Simplifying Patient Care.</h1>
          <p style={{ fontSize: responsive.paragraph.fontSize, margin: "clamp(10px, 3vw, 20px) 0" }}>A powerful new platform for doctors to receive structured symptom reports, manage breast cancer care, and reach more patients—starting with our exclusive beta launch.</p>
          <div className="cta-buttons" style={{
            margin: "clamp(15px, 3vw, 20px) auto", 
            display: "flex", 
            justifyContent: "center", 
            gap: "clamp(10px, 2vw, 15px)", 
            width: "100%",
            flexWrap: "wrap"
          }}>
            <a href="#partner-form" className="cta-button primary" style={ctaButtonStyle}>Become a Beta Partner</a>
            <a href="#how-it-works" className="cta-button secondary" style={secondaryCtaButtonStyle}>See How It Works</a>
          </div>
        </div>
        <div className="hero-image" style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          justifyContent: "center"
        }}>
          <img 
            src={doctorImage} 
            alt="Doctor using digital health platform" 
            style={{
              marginTop: "clamp(20px, 5vw, 40px)",
              maxWidth: "100%",
              height: "auto"
            }} 
          />
        </div>
      </section>

      {/* Benefits of Beta Partner */}
      <section id="benefits" className="benefits-section" style={{
        padding: responsive.container.padding,
        backgroundColor: "#fff",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%"
        }}>
          <div style={{ 
            textAlign: "center", 
            marginBottom: "clamp(30px, 6vw, 50px)" 
          }}>
            <h2 style={{ 
              fontSize: responsive.heading.fontSize, 
              color: "#2c3e50", 
              marginBottom: "clamp(10px, 3vw, 16px)",
              fontWeight: "600"
            }}>Benefits of Becoming a Beta Partner</h2>
            <p style={{
              fontSize: responsive.paragraph.fontSize,
              color: "#5a6a7e",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
              padding: "0 clamp(10px, 3vw, 20px)"
            }}>
              Join us early and help shape the future of healthcare in India
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
            gap: "clamp(25px, 5vw, 40px)",
            maxWidth: "1200px",
            margin: "0 auto 60px",
          }}>
            {/* Benefit 1 */}
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "clamp(25px, 5vw, 35px)",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(74, 144, 226, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}>
              <div style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "rgba(74, 144, 226, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "clamp(15px, 4vw, 25px)",
                fontSize: "30px",
                color: "#4A90E2"
              }}>🚀</div>
              <h3 style={{
                fontSize: "clamp(18px, 4vw, 22px)",
                color: "#2c3e50",
                marginBottom: "clamp(10px, 3vw, 15px)",
                fontWeight: "600"
              }}>Early Access</h3>
              <p style={{
                color: "#5a6a7e",
                fontSize: responsive.paragraph.fontSize,
                lineHeight: "1.6",
                marginBottom: "clamp(15px, 4vw, 25px)",
                flex: "1"
              }}>Be among the first to try our innovative platform and gain a competitive edge in digital healthcare.</p>
              <div style={{
                fontWeight: "500",
                color: "#4A90E2",
                fontSize: responsive.smallText.fontSize
              }}>Limited spots available</div>
            </div>

            {/* Benefit 2 */}
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "clamp(25px, 5vw, 35px)",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(74, 144, 226, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}>
              <div style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "rgba(74, 144, 226, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "clamp(15px, 4vw, 25px)",
                fontSize: "30px",
                color: "#4A90E2"
              }}>✍️</div>
              <h3 style={{
                fontSize: "clamp(18px, 4vw, 22px)",
                color: "#2c3e50",
                marginBottom: "clamp(10px, 3vw, 15px)",
                fontWeight: "600"
              }}>Shape the Product</h3>
              <p style={{
                color: "#5a6a7e",
                fontSize: responsive.paragraph.fontSize,
                lineHeight: "1.6",
                marginBottom: "clamp(15px, 4vw, 25px)",
                flex: "1"
              }}>Your feedback directly influences our development. Help us create a platform perfectly tailored to doctors' needs.</p>
              <div style={{
                fontWeight: "500",
                color: "#4A90E2",
                fontSize: responsive.smallText.fontSize
              }}>Direct access to development team</div>
            </div>

            {/* Benefit 3 */}
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "clamp(25px, 5vw, 35px)",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(74, 144, 226, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}>
              <div style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "rgba(74, 144, 226, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "clamp(15px, 4vw, 25px)",
                fontSize: "30px",
                color: "#4A90E2"
              }}>📊</div>
              <h3 style={{
                fontSize: "clamp(18px, 4vw, 22px)",
                color: "#2c3e50",
                marginBottom: "clamp(10px, 3vw, 15px)",
                fontWeight: "600"
              }}>Expand Your Practice</h3>
              <p style={{
                color: "#5a6a7e",
                fontSize: responsive.paragraph.fontSize,
                lineHeight: "1.6",
                marginBottom: "clamp(15px, 4vw, 25px)",
                flex: "1"
              }}>Connect with more patients and build your digital presence. Our platform helps doctors reach patients beyond physical boundaries.</p>
              <div style={{
                fontWeight: "500",
                color: "#4A90E2",
                fontSize: responsive.smallText.fontSize
              }}>Increase your patient base</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Doctors */}
      <section id="how-it-works" className="doctor-workflow-section" style={{
        padding: responsive.container.padding,
        backgroundColor: "#f8fafc",
        borderTop: "1px solid #eaeef2",
        borderBottom: "1px solid #eaeef2"
      }}>
        <div style={{
          margin: "0 auto",
          width: "100%"
        }}>
          <div style={{ 
            textAlign: "center", 
            marginBottom: "clamp(30px, 8vw, 60px)" 
          }}>
            <h2 style={{ 
              fontSize: responsive.heading.fontSize, 
              color: "#2c3e50", 
              marginBottom: "clamp(10px, 3vw, 16px)",
              fontWeight: "600"
            }}>How It Works for Doctors</h2>
            <p style={{
              fontSize: responsive.paragraph.fontSize,
              color: "#5a6a7e",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
              padding: "0 clamp(10px, 3vw, 20px)"
            }}>
              Our streamlined system helps you connect with patients and manage care efficiently
            </p>
          </div>
          
          <div className="doctor-workflow-content" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
            gap: "clamp(30px, 5vw, 60px)",
            alignItems: "center",
            width: "100%"
          }}>
            {/* Left side - Video container */}
            <div style={{ 
              height: "clamp(250px, 50vw, 400px)",
              backgroundColor: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              position: "relative",
              width: "100%"
            }}>
              <iframe 
                src="https://www.youtube.com/embed/Bv-J4XSRLx4" 
                title="How TellYouDoc Works for Doctors"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px"
                }}
              ></iframe>
            </div>

            {/* Right side - Content */}
            <div className="doctor-workflow-info" style={{ textAlign: "left", width: "100%" }}>
              <div className="about-text">
                <div className="about-info" style={{ textAlign: "left" }}>
                  <div className="about-item" style={{ 
                    marginBottom: "clamp(15px, 4vw, 25px)",
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <span className="about-item-label" style={{
                      fontSize: "clamp(16px, 4vw, 18px)",
                      color: "#4A90E2",
                      fontWeight: "600",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <i className="fas fa-user-plus" style={{ marginRight: "10px" }}></i> Step 1:
                    </span>
                    <p style={{ 
                      marginLeft: "28px", 
                      fontSize: responsive.paragraph.fontSize,
                      color: "#5a6a7e",
                      lineHeight: "1.6"
                    }}>
                      Create Your Profile: Join via QR or Email, and set your Schedule.
                    </p>
                  </div>

                  <div className="about-item" style={{ 
                    marginBottom: "clamp(15px, 4vw, 25px)",
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <span className="about-item-label" style={{
                      fontSize: "clamp(16px, 4vw, 18px)",
                      color: "#4A90E2",
                      fontWeight: "600",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <i className="fas fa-laptop-medical" style={{ marginRight: "10px" }}></i> Step 2:
                    </span>
                    <p style={{ 
                      marginLeft: "28px", 
                      fontSize: responsive.paragraph.fontSize,
                      color: "#5a6a7e",
                      lineHeight: "1.6"
                    }}>
                      Get Patient Requests: Receive symptom records, respond with notes.
                    </p>
                  </div>

                  <div className="about-item" style={{ 
                    marginBottom: "clamp(15px, 4vw, 25px)",
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <span className="about-item-label" style={{
                      fontSize: "clamp(16px, 4vw, 18px)",
                      color: "#4A90E2",
                      fontWeight: "600",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <i className="fas fa-calendar-check" style={{ marginRight: "10px" }}></i> Step 3:
                    </span>
                    <p style={{ 
                      marginLeft: "28px", 
                      fontSize: responsive.paragraph.fontSize,
                      color: "#5a6a7e",
                      lineHeight: "1.6"
                    }}>
                      Grow Your Practice: Access stats, connects with more patients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Partner Form */}
      <section id="partner-form" className="form-section" style={{
        padding: responsive.container.padding,
        backgroundColor: "#f8fafc",
        borderTop: "1px solid #eaeef2",
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          width: "100%"
        }}>
          <div style={{ 
            textAlign: "center", 
            marginBottom: "clamp(30px, 6vw, 50px)" 
          }}>
            <h2 style={{ 
              fontSize: responsive.heading.fontSize, 
              color: "#2c3e50", 
              marginBottom: "clamp(10px, 3vw, 16px)",
              fontWeight: "600"
            }}>Join the TellYouDoc Beta Program</h2>
            <p style={{
              fontSize: responsive.paragraph.fontSize,
              color: "#5a6a7e",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
              padding: "0 clamp(10px, 3vw, 20px)"
            }}>
              Fill in your details below and become part of our exclusive network of healthcare professionals
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{
            padding: "clamp(20px, 5vw, 40px)",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
          }}>
            <div style={formGroupStyle}>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                onFocus={() => handleFocus('fullName')}
                onBlur={handleBlur}
                style={inputStyle('fullName')}
                required 
              />
              <label htmlFor="fullName" style={labelStyle('fullName')}>Full Name</label>
            </div>
            
            <div style={formGroupStyle}>
              <input 
                type="tel" 
                id="mobileNumber" 
                name="mobileNumber" 
                value={formData.mobileNumber} 
                onChange={handleChange}
                onFocus={() => handleFocus('mobileNumber')}
                onBlur={handleBlur}
                style={inputStyle('mobileNumber')}
                required 
              />
              <label htmlFor="mobileNumber" style={labelStyle('mobileNumber')}>Mobile Number</label>
            </div>
            
            <div style={formGroupStyle}>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                style={inputStyle('email')}
                required 
              />
              <label htmlFor="email" style={labelStyle('email')}>Email Address</label>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
              <div style={formGroupStyle}>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  value={formData.city} 
                  onChange={handleChange}
                  onFocus={() => handleFocus('city')}
                  onBlur={handleBlur}
                  style={inputStyle('city')}
                  required 
                />
                <label htmlFor="city" style={labelStyle('city')}>City</label>
              </div>
              
              <div style={formGroupStyle}>
                <select 
                  id="state" 
                  name="state" 
                  value={formData.state} 
                  onChange={handleChange}
                  onFocus={() => handleFocus('state')}
                  onBlur={handleBlur}
                  style={selectStyle('state')}
                  required
                >
                  <option value=""></option>
                  <option value="Assam">Assam</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Other">Other</option>
                </select>
                <label htmlFor="state" style={labelStyle('state')}>State</label>
              </div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
              <div style={formGroupStyle}>
                <select 
                  id="specialization" 
                  name="specialization" 
                  value={formData.specialization} 
                  onChange={handleChange}
                  onFocus={() => handleFocus('specialization')}
                  onBlur={handleBlur}
                  style={selectStyle('specialization')}
                  required
                >
                  <option value=""></option>
                  <option value="Oncologist">Oncologist</option>
                  <option value="General Physician">General Physician</option>
                  <option value="Surgeon">Surgeon</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Other">Other</option>
                </select>
                <label htmlFor="specialization" style={labelStyle('specialization')}>Medical Specialization</label>
              </div>
              
              <div style={formGroupStyle}>
                <input 
                  type="text" 
                  id="qualification" 
                  name="qualification" 
                  value={formData.qualification} 
                  onChange={handleChange}
                  onFocus={() => handleFocus('qualification')}
                  onBlur={handleBlur}
                  style={inputStyle('qualification')}
                  required 
                />
                <label htmlFor="qualification" style={labelStyle('qualification')}>Medical Qualification</label>
              </div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
              <div style={formGroupStyle}>
                <input 
                  type="text" 
                  id="hospitalName" 
                  name="hospitalName" 
                  value={formData.hospitalName} 
                  onChange={handleChange}
                  onFocus={() => handleFocus('hospitalName')}
                  onBlur={handleBlur}
                  style={inputStyle('hospitalName')}
                />
                <label htmlFor="hospitalName" style={labelStyle('hospitalName')}>Hospital / Clinic Name</label>
              </div>
              
              <div style={formGroupStyle}>
                <input 
                  type="number" 
                  id="experience" 
                  name="experience" 
                  min="0" 
                  max="50" 
                  value={formData.experience} 
                  onChange={handleChange}
                  onFocus={() => handleFocus('experience')}
                  onBlur={handleBlur}
                  style={inputStyle('experience')}
                  required 
                />
                <label htmlFor="experience" style={labelStyle('experience')}>Years of Experience</label>
              </div>
            </div>
            
            <div style={formGroupStyle}>
              <textarea 
                id="reason" 
                name="reason" 
                maxLength="100" 
                value={formData.reason} 
                onChange={handleChange}
                onFocus={() => handleFocus('reason')}
                onBlur={handleBlur}
                style={textareaStyle('reason')}
              ></textarea>
              <label htmlFor="reason" style={labelStyle('reason')}>Reason to Join (optional)</label>
            </div>
            
            <button type="submit" style={{
              width: "100%",
              backgroundColor: "#4A90E2",
              color: "white",
              padding: "15px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              marginTop: "10px",
              boxShadow: "0 4px 10px rgba(74, 144, 226, 0.3)",
            }}>Apply Now</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Partner; 