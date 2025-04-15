import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import aboutImage from "../assets/images/about-us-2.png";
import heroBackground from "../assets/images/home-hero.jpg";
import doctorImage from "../assets/images/dr-soumen-das.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [patientSlide, setPatientSlide] = useState(0);
  const [doctorSlide, setDoctorSlide] = useState(0);
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Doctor using digital platform",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      alt: "Patient using mobile app",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Healthcare technology",
    },
  ];

  const patientSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Patient reporting symptoms",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Patient choosing doctor",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Patient accessing health records",
    },
  ];

  const doctorSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      alt: "Doctor using dashboard",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      alt: "Doctor reviewing patient data",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Remote consultation",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPatientSlide((prev) => (prev + 1) % patientSlides.length);
    }, 4000); // Change patient slides every 4 seconds

    return () => clearInterval(interval);
  }, [patientSlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDoctorSlide((prev) => (prev + 1) % doctorSlides.length);
    }, 4500); // Change doctor slides every 4.5 seconds

    return () => clearInterval(interval);
  }, [doctorSlides.length]);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  const handlePatientIndicatorClick = (index) => {
    setPatientSlide(index);
  };

  const handleDoctorIndicatorClick = (index) => {
    setDoctorSlide(index);
  };

  return (
    <div className="home-container" id="home-container">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <img src={heroBackground} alt="Healthcare background" />
        </div>
        <div className="product-content hero-content-wrapper">
          <div className="about-content hero-text">
            <div className="about-text">
              <div className="about-header" style={{ textAlign: "left" }}>
                <span className="about-label hero-label">Healthcare Tech</span>
                <h5 className="about-title hero-title">
                  <span>Simplifying</span> Patient Care
                </h5>
              </div>

              <div className="about-info" style={{ textAlign: "left" }}>
                <p className="hero-description">
                  A powerful new platform for doctors to receive structured
                  symptom reports, manage breast cancer care, and reach more
                  patients.
                </p>
                <div className="hero-cta">
                  <Link to="/partner" className="cta-button">
                    Be Beta Partner
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-space"></div>
        </div>
        <div className="scroll-indicator">
          <a href="#about">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2>About Us</h2>
          <p className="section-subtitle">
            Learn about our mission to transform healthcare through innovation
          </p>
        </div>
        <div className="product-content">
          <div className="product-image">
            <img src={aboutImage} alt="Healthcare Innovation" />
          </div>
          <div className="about-content" style={{ textAlign: "left" }}>
            <div className="about-text">
              <div className="about-header" style={{ textAlign: "left" }}>
                <h5 className="about-title">
                  Transforming Healthcare Through Innovation
                </h5>
              </div>

              <div className="about-info" style={{ textAlign: "left" }}>
                <div className="about-item">
                  <div
                    className="about-item-label"
                    style={{ display: "block" }}
                  >
                    <i className="fas fa-eye"></i> Vision:
                  </div>
                  To revolutionize healthcare accessibility by bridging the gap
                  between patients and doctors, empowering individuals with
                  seamless, digital access to quality medical consultations, and
                  building healthier communities across India.
                </div>

                <div className="about-item">
                  <div
                    className="about-item-label"
                    style={{ display: "block" }}
                  >
                    <i className="fas fa-bullseye"></i> Mission:
                  </div>
                  Our mission is to simplify healthcare access for everyone
                  through a user-friendly platform where patients can connect
                  with trusted doctors, track and communicate symptoms, and
                  receive expert medical guidance. We are committed to
                  leveraging technology to enhance patient outcomes, support
                  doctors in expanding their reach, and prioritize secure,
                  efficient, and compassionate healthcare for all.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="product-section">
        <div className="section-header">
          <h2>What TellYouDoc Offers</h2>
          <p className="section-subtitle">
            Streamlined healthcare solutions empowering doctors and patients
            with innovative technology
          </p>
        </div>
        <div className="product-content">
          <div className="about-content" style={{ textAlign: "left" }}>
            <div className="about-text">
              <div className="about-header" style={{ textAlign: "left" }}>
                <span className="about-label">Key Features</span>
                <h5 className="about-title">
                  Innovative Tools for Modern Healthcare
                </h5>
              </div>

              <div className="about-info" style={{ textAlign: "left" }}>
                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-search-plus"></i> Symptom Explorer:
                  </span>
                  Detailed symptom reporting system with patient-friendly
                  interfaces for accurate diagnosis, enabling efficient
                  consultation preparation and better health outcomes.
                </div>

                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-user-md"></i> Intelligent Dashboard:
                  </span>
                  Comprehensive patient management interface with real-time
                  analytics for healthcare providers, helping doctors organize
                  consultations and track patient progress efficiently.
                </div>

                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-heartbeat"></i> Cancer Care Support:
                  </span>
                  Specialized tools for breast cancer treatment monitoring and
                  patient progress tracking, providing continuous support
                  through the treatment journey.
                </div>

                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-language"></i> Language Inclusivity:
                  </span>
                  Multi-language support to serve diverse patient populations
                  across different regions, breaking down communication barriers
                  in healthcare.
                </div>
              </div>
            </div>
          </div>
          <div className="product-carousel">
            <div className="carousel-container">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${
                    index === currentSlide ? "active" : ""
                  }`}
                >
                  <img src={slide.image} alt={slide.alt} />
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => handleIndicatorClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section for Patients */}
      <section id="patient-workflow" className="patient-workflow-section">
        <div className="section-header">
          <h2>How It Works for Patients</h2>
          <p className="section-subtitle">
            Helps patients to get a structured report of their symptoms and get
            a better understanding of their health
          </p>
        </div>
        <div className="patient-workflow-content">
          <div className="patient-workflow-carousel">
            <div className="carousel-container">
              {patientSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${
                    index === patientSlide ? "active" : ""
                  }`}
                >
                  <img src={slide.image} alt={slide.alt} />
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {patientSlides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === patientSlide ? "active" : ""
                  }`}
                  onClick={() => handlePatientIndicatorClick(index)}
                ></button>
              ))}
            </div>
          </div>
          <div className="patient-workflow-info" style={{ textAlign: "left" }}>
            <div className="about-text">
              <div className="about-info" style={{ textAlign: "left" }}>
                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-user-plus"></i> Step 1:
                  </span>
                  Describe your symptoms in simple language using our intuitive
                  interface, designed to capture comprehensive details even if
                  you're not sure of medical terminology.
                </div>

                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-search"></i> Step 2:
                  </span>
                  Receive a structured symptom report and choose a doctor based
                  on specialty, ratings, availability, and location that best
                  matches your needs.
                </div>

                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-calendar-check"></i> Step 3:
                  </span>
                  Book an appointment directly through the platform and share
                  your symptom report for a more efficient and productive
                  consultation.
                </div>

                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-file-medical"></i> Step 4:
                  </span>
                  Access your complete medical history, consultation notes,
                  prescriptions, and follow-up schedules anytime from your
                  secure patient dashboard.
                </div>

                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-chart-line"></i> Step 5:
                  </span>
                  Track your symptoms over time, monitor your treatment
                  progress, and receive timely reminders for medication and
                  follow-up appointments.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section for Doctors */}
      <section id="doctor-workflow" className="doctor-workflow-section">
        <div className="section-header">
          <h2>How It Works for Doctors</h2>
          <p className="section-subtitle">
            Helps doctors to manage their patient data and provide better care
          </p>
        </div>
        <div className="doctor-workflow-content">
          <div className="doctor-workflow-carousel">
            <div className="carousel-container">
              {doctorSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${
                    index === doctorSlide ? "active" : ""
                  }`}
                >
                  <img src={slide.image} alt={slide.alt} />
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {doctorSlides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === doctorSlide ? "active" : ""
                  }`}
                  onClick={() => handleDoctorIndicatorClick(index)}
                ></button>
              ))}
            </div>
          </div>
          <div className="doctor-workflow-info" style={{ textAlign: "left" }}>
            <div className="about-text">
              <div className="about-info" style={{ textAlign: "left" }}>
                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-user-plus"></i> Step 1:
                  </span>
                  Receive structured symptom reports from patients before
                  consultations, allowing you to prepare more effectively and
                  focus on diagnosis rather than data collection.
                </div>

                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-laptop-medical"></i> Step 2:
                  </span>
                  Access a comprehensive dashboard displaying your upcoming
                  appointments, patient history, and clinical notes in one
                  centralized location with an intuitive interface.
                </div>

                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-calendar-check"></i> Step 3:
                  </span>
                  Conduct efficient consultations with pre-populated patient
                  data and symptom reports, enabling more productive patient
                  interactions and better clinical outcomes.
                </div>

                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-chart-line"></i> Step 4:
                  </span>
                  Monitor patient progress over time with visual analytics and
                  trends, particularly valuable for tracking chronic conditions
                  and treatment effectiveness.
                </div>

                <div className="about-item">
                  <span className="about-item-label">
                    <i className="fas fa-clipboard-list"></i> Step 5:
                  </span>
                  Create care plans and follow-up schedules that automatically
                  sync with patients' accounts, ensuring better adherence and
                  continuity of care between visits.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="founders-section">
        <div className="section-header">
          <h2>Core Team</h2>
          <p className="section-subtitle">
            Meet the visionaries behind TellYouDoc's innovative healthcare
            platform
          </p>
        </div>
        <div className="founders-container">
          <div className="founder-card">
            <div className="founder-header">
              <div className="founder-image">
                <img
                  src="https://ieee-ims.org/sites/ieeeims/files/styles/cc_imgstyle_4_x_5/public/contacts/photo/profile_pic.jpg?h=6b0b5157&itok=lCD0DDnm"
                  alt="Dr. Shovan Barma"
                />
              </div>
              <div className="founder-title-group" style={{alignSelf: "flex-end"}}>
                <h3>Dr. Shovan Barma</h3>
                <p className="founder-role">
                  Founder,{" "}
                  <span style={{ color: "orange", fontWeight: 800 }}>
                    tellyou
                  </span>
                  <span style={{ color: "green", fontWeight: 800 }}>doc</span>
                </p>
                <p className="founder-affiliation">
                  Associate Professor, IIIT Guwahati
                </p>
              </div>
            </div>
            <p className="founder-summary">
              Dr. Shovan Barma is the visionary behind tellyoudoc, a digital
              health platform designed to simplify the way patients connect with
              doctors—especially in critical and chronic care like breast
              cancer. Dr. Barma serves as an Associate Professor in the
              Department of ECE at IIIT Guwahati. With a Ph.D. from NCKU,
              Taiwan, Dr. Barma has spent over a decade researching AI based
              intelligent systems design and their application in real-world
              healthcare. The{" "}
              <span style={{ color: "orange", fontWeight: 800 }}>tellyou</span>
              <span style={{ color: "green", fontWeight: 800 }}>doc</span>{" "}
              platform was born out of his observation that many Indian patients
              struggle to express their medical problems clearly during
              consultation, and often fail to track their regular symptoms
              pre/post consultation or during medication, leading to delayed
              diagnosis and poor outcomes. He recognized the need for a solution
              that bridges this communication gap—empowering patients with
              easy-to-use tools and enabling doctors with structured data. Under
              his leadership, tellyoudoc combines technology, empathy, and
              clinical insight to make healthcare simpler, smarter, and more
              connected—for both patients and doctors.
            </p>
          </div>

          <div className="founder-card">
            <div className="founder-header">
              <div className="founder-image">
                <img
                  src={doctorImage}
                  alt="Dr. Soumen Das"
                />
              </div>
              <div className="founder-title-group" style={{alignSelf: "flex-end"}}>
                <h3>Dr. Soumen Das</h3>
                <p className="founder-role">
                  Co-Founder,{" "}
                  <span style={{ color: "orange", fontWeight: 800 }}>
                    tellyou
                  </span>
                  <span style={{ color: "green", fontWeight: 800 }}>doc</span>
                </p>
                <p className="founder-affiliation">
                  Senior Consultant, Surgical Oncology
                </p>
              </div>
            </div>
            <p className="founder-summary">
              Dr. Soumen Das is a nationally acclaimed breast cancer surgeon and
              co-founder of TellyouDoc, a digital health platform created to
              transform how breast cancer patients are diagnosed, monitored, and
              treated. He currently serves as a Senior Consultant in Surgical
              Oncology and is the founder of the Institute of Breast Diseases,
              Kolkata—India's first dedicated breast care center. An alumnus of
              Medical College, Kolkata, Dr. Das topped the university in surgery
              and went on to complete his MS in General Surgery. He later
              trained at Tata Memorial Hospital, Mumbai, and earned prestigious
              fellowships including FRCS (Glasgow), FACS (USA), and European
              Breast Surgical Oncology Certification, becoming the first Indian
              surgeon to hold this distinction. The{" "}
              <span style={{ color: "orange", fontWeight: 800 }}>tellyou</span>
              <span style={{ color: "green", fontWeight: 800 }}>doc</span>{" "}
              platform was co-founded by Dr. Das after years of witnessing
              patients struggle to explain symptoms clearly during
              consultations, and the lack of tools to track symptoms regularly
              throughout treatment. These gaps often led to delayed diagnoses
              and compromised outcomes. often led to delayed diagnoses and
              compromised outcomes. He envisioned a system where structured
              symptom tracking and clinical clarity come together—helping
              doctors make timely decisions and patients stay engaged in their
              care. Through his clinical leadership, TellyouDoc brings deep
              medical insight to its mission of making breast cancer care more
              responsive, personalized, and data-driven.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with our team for any queries or support
          </p>
        </div>

        {/* Map and Form Section */}
        <div className="contact-main-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13529.697901375239!2d91.56677739023964!3d26.080930042668633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5987e09da847%3A0xfc90e6da1b4547c1!2sIndian%20Institute%20of%20Information%20Technology%20Guwahati%20(IIITG)!5e0!3m2!1sen!2sin!4v1744633602270!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IIIT Guwahati Location Map"
            ></iframe>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-group">
                <input type="text" id="name" placeholder=" " required />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="form-group">
                <input type="text" id="subject" placeholder=" " required />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-group">
                <textarea id="message" placeholder=" " required></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button type="submit" className="submit-button">
                Click to contact us
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
