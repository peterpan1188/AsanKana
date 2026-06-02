import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import StoryTestimonials from './components/StoryTestimonials';
import TalkToUs from './components/TalkToUs';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

// Import generated assets natively Supported in Vite
import heroImage from './assets/images/asan_filipino_girl_1780164885318.png';
import mockupImage from './assets/images/asankana_map_right_facing_1780165869301.png';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f041d] font-sans antialiased text-gray-200 overflow-x-hidden selection:bg-emergency-red/30 selection:text-white">
      {/* Dynamic Background Noise Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-repeat bg-center" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      </div>

      {/* Core Layout Structure */}
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* Hero Section */}
          <HeroSection heroImage={heroImage} />

          {/* About Section */}
          <AboutSection mockupImage={mockupImage} />

          {/* Features Section */}
          <FeaturesSection />

          {/* Scenarios / Testimonials Section */}
          <StoryTestimonials />

          {/* Partnership & Talk To Us Section */}
          <TalkToUs />

          {/* Frequently Asked Questions */}
          <FaqSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
