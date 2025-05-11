"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth";

    // Function to determine which section is currently in view
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], div[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find which section is in view
      let currentActiveSection = activeSection;
      
      sections.forEach((section) => {
        const sectionId = section.id;
        
        // Only consider sections we care about
        if (["hero", "about", "projects", "testimonials", "contact"].includes(sectionId)) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const sectionBottom = sectionTop + section.getBoundingClientRect().height;
          
          // Check if we're in this section
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            currentActiveSection = sectionId;
          }
        }
      });
      
      // Update active section if changed
      if (currentActiveSection !== activeSection) {
        setActiveSection(currentActiveSection);
      }
    };

    // Add scroll listener with debouncing
    let scrollTimeout: NodeJS.Timeout;
    
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", debouncedScroll);
    window.addEventListener("resize", handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeSection]);

  // Handle smooth scrolling when clicking on navigation links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the section's position
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      
      // Scroll to section with smooth animation
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
      
      // Update active section
      setActiveSection(sectionId);
    }
  };

  return <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className={`nav-item ${activeSection === "hero" ? "bg-white text-gray-900" : ""}`}>Home</a>
      <a href="#about" onClick={(e) => handleNavClick(e, "about")} className={`nav-item ${activeSection === "about" ? "bg-white text-gray-900" : ""}`}>About</a>
      <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className={`nav-item ${activeSection === "projects" ? "bg-white text-gray-900" : ""}`}>Projects</a>
      <a href="#testimonials" onClick={(e) => handleNavClick(e, "testimonials")} className={`nav-item ${activeSection === "testimonials" ? "bg-white text-gray-900" : ""}`}>Testimonials</a>
    </nav>
  </div>;
};