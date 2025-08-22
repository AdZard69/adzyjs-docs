"use client";

import React from "react";

// --- Reusable Components for a cleaner structure ---

// Icon for feature cards
const FeatureIcon = ({ children }) => (
  <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-zinc-800/80 to-gray-800/60 border border-gray-500/30 text-gray-200 shadow-lg mb-4">
    {children}
  </div>
);

// Feature card component
const FeatureCard = ({ icon, title, description, imageSrc, imageAlt, isLarge = false }) => (
  <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-zinc-500/40 via-gray-400/30 to-neutral-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,200,200,0.25)] hover:-translate-y-1">
    <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-gray-900/60 p-6 shadow-xl border border-gray-600/20">
      <FeatureIcon>{icon}</FeatureIcon>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {/* Feature artwork */}
      <div className={`w-full rounded-lg overflow-hidden bg-gray-800/50 border border-gray-600/30 ${isLarge ? 'h-96' : 'h-40'}`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x200/374151/9CA3AF?text=Feature+Art";
          }}
        />
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-zinc-300/10 via-gray-300/10 to-neutral-300/10"></div>
  </div>
);

// Code block component
const CodeBlock = ({ title, subtitle, subtitleColor, imgSrc, alt }) => (
  <div className="flex flex-col items-center text-center">
    <p className="text-lg font-medium text-gray-300">{title}</p>
    <p className={`text-2xl font-bold ${subtitleColor}`}>{subtitle}</p>
    <div className="mt-4 w-full max-w-sm rounded-xl bg-gray-900/50 p-2 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
      <img
        src={imgSrc}
        alt={alt}
        className="rounded-lg w-full h-auto object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/400x800/000000/FFFFFF?text=Code";
        }}
      />
    </div>
  </div>
);

// TechLogo component for React & Minecraft logos
const TechLogo = ({ imgSrc, alt }) => (
  <div className="bg-zinc-900/50 p-4 rounded-full shadow-lg ring-1 ring-white/10 backdrop-blur-sm">
    {/* Increased size significantly */}
    <img
      src={imgSrc}
      alt={alt}
      className="sm:w-60 sm:h-60 w-20 h-20 md:w-100 md:h-100 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/240x240/FFFFFF/000000?text=Logo";
      }}
    />
  </div>
);

// --- Main HomePage Component ---

const Homepage = () => {
  // URLs for your images (assuming they are in the `public` folder)
  const adzyLogoUrl = "/adzyjs-logo.png";
  const reactLogoUrl = "/react-logo.png";
  const minecraftLogoUrl = "/minecraft-logo.png";
  const badCodeUrl = "/bad-code.png";
  const betterCodeUrl = "/better-code.png";

  return (
    <div className="min-h-screen w-full bg-neutral-900 text-white font-sans overflow-x-hidden">
      {/* Enhanced Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-neutral-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(64,64,64,0.3),transparent_70%)]"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-900 to-transparent"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center px-4">
        {/* Section 1: Hero - Rebuilt to match your Figma layout */}
        <section className="w-full max-w-5xl flex flex-col items-center text-center pt-8 md:pt-12">
          {/* Grouping AdzyJS Logo and Text */}
          <div className="flex flex-col items-center mb-10">
            <img
              src={adzyLogoUrl}
              alt="AdzyJS Logo"
              className="w-40 h-40 md:w-40 md:h-40 rounded-full mb-4 shadow-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/112x112/FFFFFF/000000?text=AdzyJS";
              }}
            />
            <h1 className="text-4xl md:text-8xl font-bold tracking-tight text-white leading-tight pb-2">
              <span className="inline-block">
                <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  AdzyJS
                </span>
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300">
              The easiest way to render animated, custom-skinned Minecraft 3D
              Models in your Project.
            </p>
          </div>

          {/* HUGE React + Minecraft Logos */}
          <div className="flex items-center justify-center space-x-6 md:space-x-10 mb-12">
            <TechLogo imgSrc={reactLogoUrl} alt="React Logo" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500 flex-shrink-0"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <TechLogo imgSrc={minecraftLogoUrl} alt="Minecraft Logo" />
          </div>

          <a
            href="/docs"
            className="group relative mt-8 inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-zinc-800 via-gray-800 to-neutral-800 rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,200,200,0.25)] hover:scale-105 hover:-translate-y-1 overflow-hidden border border-gray-500/30"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 via-gray-700 to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
              Get Started
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zinc-400 via-gray-400 to-neutral-400 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="h-full w-full rounded-2xl bg-gradient-to-r from-zinc-900 via-gray-900 to-neutral-900"></div>
            </div>
          </a>
        </section>

        {/* Section 2: Key Features */}
        <section className="mt-24 md:mt-32 w-full max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why AdzyJS?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                         {/* Left: Large Dynamic Skins Component */}
             <div className="lg:col-span-8 space-y-8">
               <FeatureCard
                 icon={
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="text-gray-300"
                   >
                     <path d="M21 15s-2 6-6 6-6-6-6-6" />
                     <path d="M15 14s1 6 6 6" />
                     <path d="M9 14s-1 6-6 6" />
                     <path d="M12 2v10c0 3.3-2.7 6-6 6s-6-2.7-6-6" />
                     <path d="M12 2v10c0 3.3 2.7 6 6 6s6-2.7 6-6" />
                   </svg>
                 }
                 title="Dynamic Skins"
                 description="Easily load any custom Minecraft skin from a URL with a single prop."
                 imageSrc="/adzyjs-ad-2.png"
                 imageAlt="Simple code after AdzyJS showing easy skin loading"
                 isLarge={true}
               />
               
               {/* Developer/Designer Message Component */}
               <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-zinc-500/40 via-gray-400/30 to-neutral-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,200,200,0.25)] hover:-translate-y-1">
                 <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-gray-900/60 p-8 shadow-xl border border-gray-600/20 text-center">
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                     FOR DEVELOPERS, DESIGNERS
                   </h3>
                   <p className="text-lg md:text-xl text-gray-300 font-medium">
                     BY A DEVELOPER AND DESIGNER
                   </p>
                   <div className="mt-6 flex items-center justify-center gap-4 text-gray-400">
                     <div className="flex items-center gap-2">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                       </svg>
                       <span className="text-sm font-medium">AdZard</span>
                     </div>
                     {/* <div className="w-px h-4 bg-gray-600"></div> */}
                     {/* <div className="flex items-center gap-2">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                       </svg>
                       <span className="text-sm font-medium"></span>
                     </div> */}
                   </div>
                 </div>
                 <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-zinc-300/10 via-gray-300/10 to-neutral-300/10"></div>
               </div>
             </div>
            
            {/* Right: Stacked API and Configured Components */}
            <div className="lg:col-span-4 space-y-8">
              {/* Top: Declarative API Component */}
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-300"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                }
                title="Declarative API"
                description="A single, intuitive <Player /> component handles everything. No more manual setup."
                imageSrc="/adzyjs-ad-1.png"
                imageAlt="Complex code before AdzyJS showing manual setup"
              />
              
              {/* Bottom: Pixel-Perfect Component */}
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-300"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                }
                title="Pixel-Perfect"
                description="Materials are automatically configured to preserve the iconic Minecraft aesthetic."
                imageSrc="/adzyjs-ad-3.png"
                imageAlt="Minecraft aesthetic preserved with pixel-perfect rendering"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Before & After */}
        <section className="mt-24 md:mt-32 w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-8 md:gap-12">
            <CodeBlock
              title="Manually making a model..."
              subtitle="Before AdzyJS"
              subtitleColor="text-red-500"
              imgSrc={badCodeUrl}
              alt="Complex code before AdzyJS"
            />
            <div className="flex justify-center items-center my-8 md:my-0 h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500 transform md:rotate-0 rotate-90"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
            <div className="space-y-8">
              <CodeBlock
                title="Crazy, right?"
                subtitle="After AdzyJS"
                subtitleColor="text-green-500"
                imgSrc={betterCodeUrl}
                alt="Simple code after AdzyJS"
              />

              {/* What AdzyJS Does Section - Below the right image */}
              <div className="space-y-8 pt-8">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  What AdzyJS Solves
                </h3>

                <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-zinc-500/40 via-gray-400/30 to-neutral-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,200,200,0.25)] hover:-translate-y-1">
                  <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-gray-900/60 p-6 shadow-xl border border-gray-600/20">
                    <FeatureIcon>
                      <span className="text-red-400">❌</span>
                    </FeatureIcon>
                    <h4 className="text-xl font-bold text-white mb-4">Traditional Workflow Problems</h4>
                    <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                      <li>• Manual model creation in Blockbench</li>
                      <li>• Complex GLTF export and conversion</li>
                      <li>• Hours of Three.js material debugging</li>
                      <li>• Transparency sorting issues</li>
                      <li>• Manual skin integration</li>
                      <li>• Pixel-perfect material configuration</li>
                    </ul>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-zinc-300/10 via-gray-300/10 to-neutral-300/10"></div>
                </div>

                <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-zinc-500/40 via-gray-400/30 to-neutral-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,200,200,0.25)] hover:-translate-y-1">
                  <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-gray-900/60 p-6 shadow-xl border border-gray-600/20">
                    <FeatureIcon>
                      <span className="text-green-400">✅</span>
                    </FeatureIcon>
                    <h4 className="text-xl font-bold text-white mb-4">Complete Abstraction</h4>
                    <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                      <li>
                        • Single{" "}
                        <code className="bg-zinc-800 px-2 py-1 rounded text-gray-300">
                          &lt;Player /&gt;
                        </code>{" "}
                        component
                      </li>
                      <li>• Automatic 3D model loading</li>
                      <li>• Smart material creation</li>
                      <li>• Built-in transparency fixes</li>
                      <li>• Pixel-perfect texture filtering</li>
                    </ul>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-zinc-300/10 via-gray-300/10 to-neutral-300/10"></div>
                </div>

                <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-zinc-500/40 via-gray-400/30 to-neutral-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,200,200,0.25)] hover:-translate-y-1">
                  <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-gray-900/60 p-6 shadow-xl border border-gray-600/20">
                    <FeatureIcon>
                      <span className="text-blue-400">🚀</span>
                    </FeatureIcon>
                    <h4 className="text-xl font-bold text-white mb-4">Developer Experience</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Just provide a{" "}
                      <span className="text-blue-400 font-semibold">
                        Minecraft skin URL path
                      </span>{" "}
                      and get a beautiful, correctly textured 3D character
                      instantly.
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-zinc-300/10 via-gray-300/10 to-neutral-300/10"></div>
                </div>

                {/* Use Cases */}
                <div className="text-center pt-4">
                  <h4 className="text-lg font-bold text-white mb-6">
                    Perfect For
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-zinc-500/40 via-gray-400/30 to-neutral-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,200,200,0.25)] hover:-translate-y-1">
                      <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-gray-900/60 p-4 shadow-xl border border-gray-600/20 text-center flex flex-col items-center justify-center">
                        <FeatureIcon>
                          <span className="text-2xl">🎨</span>
                        </FeatureIcon>
                        <p className="text-sm text-white font-medium text-center">
                          Portfolios
                        </p>
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-zinc-300/10 via-gray-300/10 to-neutral-300/10"></div>
                    </div>
                    <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-zinc-500/40 via-gray-400/30 to-neutral-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,200,200,0.25)] hover:-translate-y-1">
                      <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-gray-900/60 p-4 shadow-xl border border-gray-600/20 text-center flex flex-col items-center justify-center">
                        <FeatureIcon>
                          <span className="text-2xl">🎮</span>
                        </FeatureIcon>
                        <p className="text-sm text-white font-medium text-center">Games</p>
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-zinc-300/10 via-gray-300/10 to-neutral-300/10"></div>
                    </div>
                    <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-zinc-500/40 via-gray-400/30 to-neutral-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,200,200,0.25)] hover:-translate-y-1">
                      <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-gray-900/60 p-4 shadow-xl border border-gray-600/20 text-center flex flex-col items-center justify-center">
                        <FeatureIcon>
                          <span className="text-2xl">🔬</span>
                        </FeatureIcon>
                        <p className="text-sm text-white font-medium text-center">
                          Experiments
                        </p>
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-zinc-300/10 via-gray-300/10 to-neutral-300/10"></div>
                    </div>
                    <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-zinc-500/40 via-gray-400/30 to-neutral-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,200,200,0.25)] hover:-translate-y-1">
                      <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-gray-900/60 p-4 shadow-xl border border-gray-600/20 text-center flex flex-col items-center justify-center">
                        <FeatureIcon>
                          <span className="text-2xl">💡</span>
                        </FeatureIcon>
                        <p className="text-sm text-white font-medium text-center">
                          Fan Projects
                        </p>
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-zinc-300/10 via-gray-300/10 to-neutral-300/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 md:mt-32 pb-16 text-center">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Links */}
            <div className="flex items-center justify-center space-x-8">
              {/* GitHub Link */}
              <a
                href="https://github.com/adzard69/adzyjs"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl p-3 bg-gradient-to-r from-zinc-800 via-gray-800 to-neutral-800 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,200,200,0.2)] hover:scale-105 border border-gray-500/30"
              >
                <svg
                  className="w-6 h-6 text-gray-200 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* YouTube Link */}
              <a
                href="https://youtube.com/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl p-3 bg-gradient-to-r from-zinc-800 via-gray-800 to-neutral-800 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,200,200,0.2)] hover:scale-105 border border-gray-500/30"
              >
                <svg
                  className="w-6 h-6 text-gray-200 group-hover:text-red-500 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Live Demo Link */}
              <a
                href="https://your-demo-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl px-4 py-3 bg-gradient-to-r from-zinc-800 via-gray-800 to-neutral-800 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,200,200,0.2)] hover:scale-105 border border-gray-500/30"
              >
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-gray-200 group-hover:text-green-400 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                    Live Demo
                  </span>
                </div>
              </a>
            </div>

            {/* Footer Text */}
            <p className="text-gray-500">AdzyJS is an open source project.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Homepage;
