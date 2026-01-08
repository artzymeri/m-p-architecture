"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projectData = {
  title: "Time and Space",
  subtitle: "A Modular Project Inspired by Watch Faces",
  year: "2020",
  category: "Industrial",
  client: "Margarita PLAKOLLI",
  location: "Gjakova, Kosovo",
};

const sections = [
  {
    id: "perspective1",
    title: "Perspective",
    image: "/projects/time-and-space/perspective1.jpg",
  },
  {
    id: "perspective2",
    title: "Perspective",
    image: "/projects/time-and-space/perspective2.jpg",
  },
  {
    id: "concept",
    title: "Concept",
    image: "/projects/time-and-space/concept.jpg",
    description: `Our concept is inspired by the elegant simplicity of a rectangle, which we have artfully combined with the shapes of watch faces to represent "the passage of time". This creates a seamless, integrated space that blends lush greenery with geometric harmony.

The rectangular structure and the symbolic shapes of watches form a design that transcends traditional boundaries. It's a space where architecture and nature become one, a living testament to the balance of structure and sustainability.`,
  },
  {
    id: "perspective3",
    title: "Perspective",
    image: "/projects/time-and-space/perspective3.jpg",
  },
  {
    id: "situation-1000",
    title: "Situation 1:1000",
    image: "/projects/time-and-space/situation-1-1000.jpg",
  },
  {
    id: "situation-500",
    title: "Situation 1:500",
    image: "/projects/time-and-space/situation-1-500.jpg",
    description: `This site offers a rare opportunity to develop an 8-hectare green landscape with a level terrain. It is situated in the industrial zone of Gjakova, a thriving city with direct access to the Prizren-Gjakova regional road.

Its strategic location, close to the city and next to a river stream, makes it an optimal choice. The area is also home to small and medium-sized manufacturing enterprises, adding to its industrial appeal.`,
  },
  {
    id: "ground-floor",
    title: "Ground Floor Plan",
    image: "/projects/time-and-space/ground-floor-plan.jpg",
    description: `Our plan covers all the essential components for a successful watch industry. We have designed a production hall that optimizes workflow and efficiency by categorizing the different stages of manufacturing.

We have also created spaces for showcasing, catering, dining, relaxing, communicating, welcoming, and changing. We have used efficient materials and abundant green spaces to make this project environmentally friendly.`,
  },
  {
    id: "first-floor",
    title: "1st Floor Plan",
    image: "/projects/time-and-space/first-floor-plan.jpg",
  },
  {
    id: "roof-details",
    title: "Roof Details",
    image: "/projects/time-and-space/roof-details.jpg",
  },
  {
    id: "section",
    title: "Section A-A & B-B",
    image: "/projects/time-and-space/section-aa-bb.jpg",
  },
  {
    id: "axonometric",
    title: "Axonometric Perspective",
    image: "/projects/time-and-space/axonometric-perspective.png",
  },
  {
    id: "birds-eye",
    title: "Bird's Eye Perspective",
    image: "/projects/time-and-space/birds-eye.jpg",
  },
];

export default function TimeAndSpaceProject() {
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
            src="/projects/time-and-space/birds-eye.jpg"
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
          <Link href="/projects/co-housing" className="group block text-center">
            <h3
              className="text-4xl md:text-6xl font-light mb-4 group-hover:text-[#d4a853] transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Co-Housing
            </h3>
            <p className="text-white/60">2021</p>
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
