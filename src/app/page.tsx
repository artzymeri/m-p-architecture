"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Project data from portfolio
const projects = [
  {
    id: 1,
    title: "Co-Housing",
    subtitle: "Empowering the Romani Minority in Fushë Kosovë",
    description: "A flexible and sustainable building structure using prefabricated modules, designed to nurture the fulfilment of each resident's aspirations.",
    year: "2021",
    category: "Residential",
    image: "/projects/co-housing/birds-eye.png",
    slug: "co-housing",
  },
  {
    id: 2,
    title: "Time and Space",
    subtitle: "A Modular Project Inspired by Watch Faces",
    description: "Inspired by the elegant simplicity of a rectangle combined with watch face shapes to represent the passage of time.",
    year: "2020",
    category: "Industrial",
    image: "/projects/time-and-space/birds-eye.jpg",
    slug: "time-and-space",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Intro animation
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShowIntro(false);
        setIsLoaded(true);
      },
    });

    // Logo reveal animation
    tl.fromTo(
      ".intro-logo",
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
    )
      .to(".intro-logo", {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
      })
      .to(".intro-text span", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.2")
      .to(".intro-line", {
        scaleX: 1,
        duration: 0.8,
        ease: "power3.inOut",
      }, "-=0.3")
      .to(introRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        delay: 0.5,
      });
  }, []);

  // Main animations
  useEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      // Scroll progress
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });

      // Hero text reveal
      gsap.fromTo(
        ".hero-title .char",
        { y: 200, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.03,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 }
      );

      gsap.fromTo(
        ".hero-cta",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 1 }
      );

      // Header logo
      gsap.fromTo(
        ".header-logo",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      // Nav items
      gsap.fromTo(
        ".nav-item",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out", delay: 0.7 }
      );

      // Floating elements
      gsap.to(".float-element", {
        y: -30,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });

      // Parallax hero background
      gsap.to(".hero-bg", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // About section reveal
      gsap.fromTo(
        ".about-text",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Project cards animation
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 150, opacity: 0, rotateY: 15 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Parallax image effect
        gsap.to(card.querySelector(".project-image"), {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Marquee speed control
      gsap.to(".marquee-content", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });

      // Stats counter
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-value") || "0");
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Horizontal line animations
      gsap.utils.toArray<HTMLElement>(".reveal-line").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Contact section
      gsap.fromTo(
        ".contact-title .word",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  // Split text helper
  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <>
      {/* Intro Screen */}
      <div
        ref={introRef}
        className={`fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center ${!showIntro ? "pointer-events-none" : ""}`}
      >
        <div className="relative">
          <div className="intro-logo relative">
            <Image
              src="/logo.png"
              alt="M.P. Architecture"
              width={200}
              height={200}
              className="w-32 h-32 md:w-48 md:h-48 object-contain"
              priority
            />
          </div>
        </div>
        <div className="intro-text mt-8 overflow-hidden">
          {"MARGARITA PLAKOLLI".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block text-2xl md:text-4xl font-light tracking-[0.3em] text-white opacity-0 translate-y-full"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        <div className="intro-line w-32 h-[1px] bg-[#d4a853] mt-6 scale-x-0" />
      </div>

      {/* Noise Overlay */}
      <div className="noise" />

      {/* Scroll Progress */}
      <div className="scroll-progress scale-x-0" />

      <div ref={containerRef} className="relative">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass">
          <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
            <div className="header-logo">
              <Image
                src="/logo.png"
                alt="M.P. Architecture"
                width={60}
                height={60}
                className="w-12 h-12 object-contain"
              />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {["Work", "About", "Services", "Contact"].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-item text-sm uppercase tracking-[0.2em] text-white/70 hover:text-[#d4a853] transition-colors duration-300 magnetic-button"
                >
                  {item}
                </a>
              ))}
            </nav>
            <a 
              href="#contact"
              className="nav-item magnetic-button px-6 py-2 border border-[#d4a853] text-[#d4a853] text-sm uppercase tracking-wider hover:bg-[#d4a853] hover:text-black transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Elements */}
          <div className="hero-bg absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a853]/10 rounded-full blur-3xl float-element" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4a853]/5 rounded-full blur-3xl float-element" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
            <h1
              className="hero-title text-5xl md:text-7xl lg:text-9xl font-light tracking-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="block overflow-hidden">
                <span className="inline-block">{splitText("ARCHITECTURE")}</span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block">{splitText("REIMAGINED")}</span>
              </span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Creating spaces that inspire, empower communities, and blend seamlessly with nature through innovative and sustainable design.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#work"
                className="magnetic-button group relative px-8 py-4 bg-[#d4a853] text-black font-medium uppercase tracking-wider overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </a>
              <a
                href="#contact"
                className="magnetic-button px-8 py-4 border border-white/30 text-white font-medium uppercase tracking-wider hover:border-[#d4a853] hover:text-[#d4a853] transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-[#d4a853] to-transparent" />
          </div>
        </section>

        {/* Marquee Section */}
        <section className="py-12 border-y border-white/10 overflow-hidden">
          <div className="marquee">
            <div className="marquee-content flex gap-16 text-6xl md:text-8xl font-light text-white/10 whitespace-nowrap">
              <span>ARCHITECTURE</span>
              <span className="text-[#d4a853]/30">•</span>
              <span>INNOVATION</span>
              <span className="text-[#d4a853]/30">•</span>
              <span>SUSTAINABILITY</span>
              <span className="text-[#d4a853]/30">•</span>
              <span>COMMUNITY</span>
              <span className="text-[#d4a853]/30">•</span>
              <span>ARCHITECTURE</span>
              <span className="text-[#d4a853]/30">•</span>
              <span>INNOVATION</span>
              <span className="text-[#d4a853]/30">•</span>
              <span>SUSTAINABILITY</span>
              <span className="text-[#d4a853]/30">•</span>
              <span>COMMUNITY</span>
              <span className="text-[#d4a853]/30">•</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section py-32 md:py-48">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="about-text">
                <span className="text-[#d4a853] uppercase tracking-[0.3em] text-sm mb-4 block">About</span>
                <h2
                  className="text-4xl md:text-6xl font-light mb-8"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Crafting Tomorrow&apos;s
                  <span className="text-gradient block">Living Spaces</span>
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  Based on the &quot;One size does not fit all&quot; concept, our projects take inspiration from the belief that a standardized approach cannot meet the unique needs of every individual and family.
                </p>
                <p className="text-white/60 text-lg leading-relaxed">
                  By adopting scalable construction methods and utilizing prefabricated modules, we design flexible and sustainable building structures that ensure long-term continuity and foster a strong sense of identity and belonging.
                </p>
              </div>
              <div className="relative">
                <div className="blob w-full aspect-square bg-gradient-to-br from-[#d4a853]/20 to-[#d4a853]/5 glow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="stat-number text-7xl md:text-9xl font-light text-[#d4a853]" data-value="15">0</div>
                    <span className="text-white/60 uppercase tracking-[0.2em] text-sm">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-32 md:py-48">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-[#d4a853] uppercase tracking-[0.3em] text-sm mb-4 block">Portfolio</span>
                <h2
                  className="text-4xl md:text-6xl font-light"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Selected
                  <span className="text-gradient block">Projects</span>
                </h2>
              </div>
              <a href="#" className="hidden md:block magnetic-button text-[#d4a853] uppercase tracking-wider text-sm hover:underline">
                View All →
              </a>
            </div>

            <div className="space-y-32">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  className={`project-card grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`relative overflow-hidden aspect-[4/3] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="project-image object-cover"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="text-[#d4a853] text-sm uppercase tracking-wider">{project.category}</span>
                    </div>
                  </div>
                  <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <span className="text-white/30 text-7xl font-light">0{project.id}</span>
                    <h3
                      className="text-3xl md:text-5xl font-light mb-4 -mt-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[#d4a853] mb-4">{project.subtitle}</p>
                    <p className="text-white/60 mb-8 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-8">
                      <span className="text-white/40">{project.year}</span>
                      <div className="reveal-line flex-1 h-[1px] bg-white/20" />
                      <a
                        href={`/projects/${project.slug}`}
                        className="magnetic-button text-[#d4a853] uppercase tracking-wider text-sm hover:underline"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-gradient-to-b from-transparent via-[#d4a853]/5 to-transparent">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-[#d4a853] uppercase tracking-[0.3em] text-sm mb-4 block">What We Do</span>
              <h2
                className="text-4xl md:text-6xl font-light"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Our
                <span className="text-gradient"> Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Architectural Design",
                  description: "Comprehensive design solutions from concept to completion, tailored to your unique vision and requirements.",
                  icon: "◈",
                },
                {
                  title: "Sustainable Planning",
                  description: "Eco-conscious design strategies that minimize environmental impact while maximizing efficiency and comfort.",
                  icon: "◇",
                },
                {
                  title: "Interior Design",
                  description: "Creating harmonious interior spaces that reflect your personality and enhance daily living experiences.",
                  icon: "○",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group p-8 border border-white/10 hover:border-[#d4a853]/50 transition-all duration-500 hover:bg-[#d4a853]/5"
                >
                  <span className="text-5xl text-[#d4a853] mb-6 block group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                  <h3
                    className="text-2xl font-light mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section py-32 md:py-48">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="contact-title text-5xl md:text-7xl lg:text-8xl font-light mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="word inline-block">Let&apos;s</span>{" "}
                <span className="word inline-block text-gradient">Create</span>{" "}
                <span className="word inline-block">Together</span>
              </h2>
              <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
                Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s create something extraordinary.
              </p>
              <a
                href="mailto:hello@mparchitecture.com"
                className="magnetic-button inline-block text-3xl md:text-5xl text-[#d4a853] hover:text-white transition-colors duration-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                hello@mparchitecture.com
              </a>

              <div className="mt-20 flex flex-wrap justify-center gap-8">
                {["LinkedIn", "Instagram", "Behance", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="magnetic-button text-white/40 hover:text-[#d4a853] uppercase tracking-wider text-sm transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.png"
                  alt="M.P. Architecture"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-white/60 text-sm">© 2024 Margarita Plakolli. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-white/40 hover:text-[#d4a853] text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/40 hover:text-[#d4a853] text-sm transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
