"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projectData = {
  title: "Co-Housing",
  subtitle: "Empowering the Romani Minority in Fushë Kosovë",
  year: "2021",
  category: "Residential",
  client: "Margarita PLAKOLLI",
  location: "Fushë Kosovë, Kosovo",
};

const sections = [
  {
    id: "birds-eye",
    title: "Bird's Eye Perspective",
    image: "/projects/co-housing/birds-eye.jpg",
  },
  {
    id: "concept",
    title: "Concept",
    image: "/projects/co-housing/concept.png",
    description: `Based on the "One size does not fit all" concept, our project takes inspiration from the belief that a standardized approach cannot meet the unique needs of every individual and family. By adopting a scalable construction method and utilizing prefabricated modules, we have designed a flexible and sustainable building structure that ensures long-term continuity.

Our primary objective is to create an environment that nurtures the fulfilment of each resident's aspirations. Through thoughtful design and meticulous attention to detail, we have tailored the co-housing units to accommodate diverse preferences, allowing for a harmonious blend of personal comfort and communal living.

Drawing inspiration from their traditions and values, our design integrates symbolic motifs, vibrant colors, and communal spaces that foster a strong sense of identity and belonging.

Beyond its cultural significance, our co-housing project exemplifies a commitment to sustainability. Using eco-friendly materials, energy-efficient technologies, and communal resource-sharing systems, we aim to minimize our environmental footprint while creating a self-sustaining community.`,
  },
  {
    id: "perspective1",
    title: "Perspective",
    image: "/projects/co-housing/perspective1.jpg",
  },
  {
    id: "perspective2",
    title: "Perspective",
    image: "/projects/co-housing/perspective2.jpg",
  },
  {
    id: "situation",
    title: "Situation Plan 1:500",
    image: "/projects/co-housing/situation-1-500.jpg",
  },
  {
    id: "perspective3",
    title: "Perspective",
    image: "/projects/co-housing/perspective3.jpg",
  },
  {
    id: "perspective4",
    title: "Perspective",
    image: "/projects/co-housing/perspective4.jpg",
  },
  {
    id: "ground-floor",
    title: "Ground Floor Plan",
    image: "/projects/co-housing/ground-floor.jpg",
  },
  {
    id: "first-floor",
    title: "1st Floor Plan",
    image: "/projects/co-housing/first-floor.jpg",
    description: `The common spaces, especially the common house, are where our community comes alive, welcoming all residents and hosting communal activities. These flexible areas serve many purposes:

Shared Meals: We enjoy communal meals here, strengthening our community bonds through food.

Meetings and Celebrations: The common house is the place for gatherings, whether they are formal meetings to address important community issues or festive celebrations of various events.

Social Interaction: Besides planned events, these spaces offer opportunities for casual socializing and fun, where neighbors can chat, relax, and have a good time together.

The design and layout of these spaces are thoughtfully made to fit our entire community, making sure they can comfortably seat around two-thirds of our residents during meal times. Acoustics are carefully planned to create a pleasant environment that suits all age groups, promoting a sense of belonging and unity.`,
  },
  {
    id: "east-facade",
    title: "East Facade",
    image: "/projects/co-housing/east-facade.jpg",
  },
  {
    id: "northeastern-facade",
    title: "Northeastern Facade",
    image: "/projects/co-housing/northeastern-facade.jpg",
  },
  {
    id: "sustainable",
    title: "Sustainable Axonometry",
    image: "/projects/co-housing/sustainable.jpg",
    description: `This presentation reveals an innovative housing design that blends modular prefab homes and cohousing values. These homes are more than efficient and functional, they also reflect a holistic approach to sustainability and well-being.

Our modular prefab homes feature a variety of cutting-edge solutions, such as passive renewable energy systems, eco-friendly and socially responsible materials, rainwater harvesting and gray water recycling systems, an effective hot water system, and a highly insulated building envelope. These components create a comprehensive and eco-conscious living experience, making this project a model of progressive and responsible housing design.`,
  },
];

export default function CoHousingProject() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    // Animate sections on scroll
    const sections = document.querySelectorAll(".project-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen bg-[#0a0a0a] text-white transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="M&P Architecture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span
            className="text-lg font-light tracking-wider hidden md:block"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            M&P Architecture
          </span>
        </Link>
        <Link
          href="/#projects"
          className="text-[#d4a853] uppercase tracking-wider text-sm hover:underline"
        >
          ← Back to Projects
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/co-housing/birds-eye.jpg"
            alt={projectData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-[#d4a853] uppercase tracking-[0.3em] text-sm mb-4 block">
            {projectData.category} · {projectData.year}
          </span>
          <h1
            className="text-5xl md:text-8xl font-light mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {projectData.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            {projectData.subtitle}
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[#d4a853]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 border-b border-white/10 pb-12">
            <div>
              <span className="text-white/40 text-sm uppercase tracking-wider">
                Client
              </span>
              <p className="text-lg mt-2">{projectData.client}</p>
            </div>
            <div>
              <span className="text-white/40 text-sm uppercase tracking-wider">
                Location
              </span>
              <p className="text-lg mt-2">{projectData.location}</p>
            </div>
            <div>
              <span className="text-white/40 text-sm uppercase tracking-wider">
                Year
              </span>
              <p className="text-lg mt-2">{projectData.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 md:px-12 project-section">
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-3xl md:text-4xl font-light mb-8 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            3D Visualization
          </h2>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <video
              controls
              className="w-full h-full object-cover"
              poster="/projects/co-housing/birds-eye.jpg"
            >
              <source
                src="/projects/co-housing/3d-visaulization.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          className="py-20 px-6 md:px-12 project-section"
        >
          <div className="container mx-auto max-w-6xl">
            <h2
              className="text-3xl md:text-4xl font-light mb-8 text-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {section.title}
            </h2>
            {section.description && (
              <p className="text-white/70 text-lg leading-relaxed max-w-4xl mx-auto mb-12 whitespace-pre-line text-center">
                {section.description}
              </p>
            )}
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-contain bg-black/50"
              />
            </div>
          </div>
        </section>
      ))}

      {/* Related Project */}
      <section className="py-20 px-6 md:px-12 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <span className="text-[#d4a853] uppercase tracking-[0.3em] text-sm mb-4 block text-center">
            You may also like
          </span>
          <Link
            href="/projects/time-and-space"
            className="group block text-center"
          >
            <h3
              className="text-4xl md:text-6xl font-light mb-4 group-hover:text-[#d4a853] transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Time and Space
            </h3>
            <p className="text-white/60">2020</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/10">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="M&P Architecture"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm text-white/60">M&P Architecture</span>
          </Link>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
