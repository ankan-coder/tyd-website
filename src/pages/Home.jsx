import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import doctorImage from "../assets/images/doctor-talking-with-patient.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Doctor using digital platform"
    },
    {
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      alt: "Patient using mobile app"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Healthcare technology"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-container" id="home-container">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Simplifying Patient Care</h1>
          <p style={{margin: "0 auto"}}>
            A powerful new platform for doctors to receive structured symptom
            reports, manage breast cancer care, and reach more patients.
          </p>
          <Link to="/partner" className="cta-button" style={{marginTop: "30px"}}>
            Join as Beta Partner
          </Link>
        </div>
        <div className="hero-image">
          <img src={doctorImage} alt="Doctor talking with patient" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2>About Us</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>About TellyouDoc</h3>
            <p className="about-headline">A Startup Born to Bridge Healthcare Gaps</p>
            <p>
              TellyouDoc is developed at IIIT Guwahati to revolutionize how Indians access healthcare. 
              We simplify symptom sharing, doctor connection, and follow-ups—digitally and securely.
            </p>
            <div className="about-quote">
              <p>"We believe the future of healthcare is doctor-connected, patient-empowered."</p>
            </div>

            <h3>Vision</h3>
            <p>
              To revolutionize healthcare accessibility by bridging the gap
              between patients and doctors, empowering individuals with
              seamless, digital access to quality medical consultations, and
              building healthier communities across India.
            </p>

            <h3>Mission</h3>
            <p>
              Our mission is to simplify healthcare access for everyone through
              a user-friendly platform where patients can connect with trusted
              doctors, track and communicate symptoms, and receive expert
              medical guidance. We are committed to leveraging technology to
              enhance patient outcomes, support doctors in expanding their
              reach, and prioritize secure, efficient, and compassionate
              healthcare for all.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="product-section">
        <div className="section-header">
          <h2>What TellYouDoc Offers</h2>
          <p className="section-subtitle">Empowering healthcare through innovative technology solutions</p>
        </div>
        <div className="product-content">
          <div className="product-text">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-search-plus"></i>
              </div>
              <div className="feature-content">
                <h3>Symptom Explorer</h3>
                <p>Intuitive interface for patients to describe symptoms in simple, structured steps, ensuring accurate and comprehensive medical information.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="feature-content">
                <h3>Doctor Dashboard</h3>
                <p>Comprehensive platform for managing appointments, patient records, and schedules with advanced analytics and reporting tools.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <div className="feature-content">
                <h3>Breast Cancer Support</h3>
                <p>Specialized tools and resources for breast cancer screening, diagnosis, and ongoing care management.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-language"></i>
              </div>
              <div className="feature-content">
                <h3>Multilingual Support</h3>
                <p>Seamless communication in Assamese, Bengali, Hindi, and English, breaking language barriers in healthcare.</p>
              </div>
            </div>
          </div>
          <div className="product-carousel">
            <div className="carousel-container">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={slide.image} alt={slide.alt} />
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-header">
          <h2>How It Works</h2>
        </div>
        <div className="how-it-works-container">
          <div className="how-it-works-group">
            <h3>For Patients</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <p>Describe your symptoms in just a few taps.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <p>
                  Choose a doctor based on specialty, ratings, and availability.
                </p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <p>Book an appointment and consult</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <p>
                  Access your consultation history and prescriptions anytime.
                </p>
              </div>
            </div>
          </div>
          <div className="how-it-works-group">
            <h3>For Doctors</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <p>Create a profile and list specialties.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <p>Set your availability and manage your schedule.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <p>Receive patient bookings and manage consultations.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <p>Access patient statistics and trends to enhance care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="founders-section">
        <div className="section-header">
          <h2>Our Founders</h2>
          <p className="section-subtitle">Visionary leaders driving healthcare innovation</p>
        </div>
        <div className="founders-container">
          <div className="founder-card">
            <div className="founder-image-container">
              <div className="founder-image">
                <img src="https://ieee-ims.org/sites/ieeeims/files/styles/cc_imgstyle_4_x_5/public/contacts/photo/profile_pic.jpg?h=6b0b5157&itok=lCD0DDnm" alt="Dr. Shovan Barma" />
              </div>
              <div className="founder-overlay">
                <div className="founder-titles">
                  <p className="title">Founder, tellyoudoc</p>
                  <p className="title">Associate Professor, IIIT Guwahati</p>
                </div>
              </div>
            </div>
            <div className="founder-content">
              <h3>Dr. Shovan Barma</h3>
              <div className="founder-bio">
                <p>Dr. Shovan Barma is the visionary behind tellyoudoc, a digital health platform designed to simplify the way patients connect with doctors—especially in critical and chronic care like breast cancer. Dr. Barma serves as an Associate Professor in the Department of ECE at IIIT Guwahati.</p>
                <p>With a Ph.D. from NCKU, Taiwan, Dr. Barma has spent over a decade researching AI based intelligent systems design and their application in real-world healthcare.</p>
                <p>Tellyoudoc was born out of his observation that many Indian patients struggle to express their medical problems clearly during consultation, and often fail to track their regular symptoms pre/post consultation or during medication, leading to delayed diagnosis and poor outcomes. He recognized the need for a solution that bridges this communication gap—empowering patients with easy-to-use tools and enabling doctors with structured data.</p>
                <p>Under his leadership, tellyoudoc combines technology, empathy, and clinical insight to make healthcare simpler, smarter, and more connected—for both patients and doctors.</p>
              </div>
            </div>
          </div>

          <div className="founder-card">
            <div className="founder-image-container">
              <div className="founder-image">
                <img src="https://www.drsoumendas.com/wp-content/uploads/2021/05/dr-soumen-das-about-image-1-800x878.jpg" alt="Dr. Soumen Das" />
              </div>
              <div className="founder-overlay">
                <div className="founder-titles">
                  <p className="title">Co-founder, tellyoudoc</p>
                  <p className="title">Senior Consultant, Surgical Oncology</p>
                  <p className="title">Founder, Institute of Breast Diseases, Kolkata</p>
                </div>
              </div>
            </div>
            <div className="founder-content">
              <h3>Dr. Soumen Das</h3>
              <div className="founder-bio">
                <p>Dr. Soumen Das is a nationally acclaimed breast cancer surgeon and co-founder of TellyouDoc, a digital health platform created to transform how breast cancer patients are diagnosed, monitored, and treated. He currently serves as a Senior Consultant in Surgical Oncology and is the founder of the Institute of Breast Diseases, Kolkata—India's first dedicated breast care center.</p>
                <p>An alumnus of Medical College, Kolkata, Dr. Das topped the university in surgery and went on to complete his MS in General Surgery. He later trained at Tata Memorial Hospital, Mumbai, and earned prestigious fellowships including FRCS (Glasgow), FACS (USA), and European Breast Surgical Oncology Certification, becoming the first Indian surgeon to hold this distinction.</p>
                <p>TellyouDoc was co-founded by Dr. Das after years of witnessing patients struggle to explain symptoms clearly during consultations, and the lack of tools to track symptoms regularly throughout treatment. These gaps often led to delayed diagnoses and compromised outcomes.</p>
                <p>He envisioned a system where structured symptom tracking and clinical clarity come together—helping doctors make timely decisions and patients stay engaged in their care. Through his clinical leadership, TellyouDoc brings deep medical insight to its mission of making breast cancer care more responsive, personalized, and data-driven.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p className="section-subtitle">Get in touch with our team for any queries or support</p>
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
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
