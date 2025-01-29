import React from 'react';
import { ArrowRight, Code2, Cpu, Shield, Zap, Github, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-lg z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">Lexus</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-400 transition">Features</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition">
                Download
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Lexus Software
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Advanced scripting utility with unparalleled performance and security.
            Experience the next generation of development tools.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full flex items-center justify-center space-x-2 transition">
              <span>Download Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-700 hover:border-gray-600 px-8 py-3 rounded-full transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Advanced Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-blue-500" />,
                title: "High Performance",
                description: "Optimized execution with minimal impact on system resources"
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-500" />,
                title: "Secure Design",
                description: "Advanced protection against detection"
              },
              {
                icon: <Cpu className="w-8 h-8 text-blue-500" />,
                title: "Real-time Updates",
                description: "Automatic patches and feature updates"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Why Choose Lexus?</h2>
            <div className="space-y-4">
              <p className="text-gray-400">
                Lexus is built with performance and reliability in mind. Our software utilizes cutting-edge 
                technology to ensure smooth operation while maintaining the highest level of security.
              </p>
              <p className="text-gray-400">
                With regular updates and dedicated support, we ensure you always have access to the latest 
                features and improvements. Join thousands of satisfied users who trust Lexus for their 
                development needs.
              </p>
              <div className="pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="w-6 h-6 text-blue-500" />
              <span className="font-bold">Lexus</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2024 Lexus Software. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;