"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded", container);
  };

  
  const options = {
    background: {
      color: {
        value: "#ffffff",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" }, 
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        push: { quantity: 4 },
        grab: { distance: 140, links: { opacity: 1 } },
      },
    },
    particles: {
      color: { value: "#2563eb" }, 
      links: {
        color: "#2563eb",
        distance: 150,
        enable: true, 
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5, 
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  } as const;

  if (init) {
    return (
      <div className="absolute inset-0 -z-10">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return null;
}