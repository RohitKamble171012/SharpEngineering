"use client";
import { useState, useEffect } from 'react';

export default function CapabilitiesPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cover flex items-center justify-center">
                <img src="logo.png" alt="Sharp Engineering Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 uppercase">Sharp Engineering</h1>
                <p className="text-xs text-gray-600">ISO 9001:2015 • Est. 1998</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sm font-semibold text-gray-700 hover:text-blue-600 uppercase">Home</a>
              <a href="/about" className="text-sm font-semibold text-gray-700 hover:text-blue-600 uppercase">About</a>
              <a href="/products" className="text-sm font-semibold text-gray-700 hover:text-blue-600 uppercase">Products</a>
              <a href="/capabilities" className="text-sm font-semibold text-gray-900 hover:text-blue-600 uppercase">Capabilities</a>
              <a href="/quality" className="text-sm font-semibold text-gray-700 hover:text-blue-600 uppercase">Quality</a>
              <a href="/contact" className="px-6 py-2 bg-blue-600 text-white text-sm font-bold uppercase hover:bg-blue-700 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold text-sm uppercase">Infrastructure</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Advanced Manufacturing Capabilities
            </h1>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              State-of-the-art facility equipped with cutting-edge CNC, VMC, and SPM machines for precision manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-50 border-2 border-blue-600 p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">06</div>
              <div className="text-sm uppercase text-gray-600 font-bold">CNC Machines</div>
              <p className="text-xs text-gray-500 mt-2">Galaxy, Jobber, LMW</p>
            </div>
            <div className="bg-gray-50 border-2 border-blue-600 p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">04</div>
              <div className="text-sm uppercase text-gray-600 font-bold">VMC Machines</div>
              <p className="text-xs text-gray-500 mt-2">AMS, HAAS, DT1</p>
            </div>
            <div className="bg-gray-50 border-2 border-blue-600 p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">02</div>
              <div className="text-sm uppercase text-gray-600 font-bold">SPM Machines</div>
              <p className="text-xs text-gray-500 mt-2">Custom Solutions</p>
            </div>
            <div className="bg-gray-50 border-2 border-blue-600 p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">3000</div>
              <div className="text-sm uppercase text-gray-600 font-bold">Sq. Ft.</div>
              <p className="text-xs text-gray-500 mt-2">Production Space</p>
            </div>
          </div>
        </div>
      </section>

      {/* CNC Machining */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase">Precision Turning</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                CNC Machining
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our facility houses 6 advanced CNC machines from leading manufacturers including Galaxy, Jobber, and LMW. These machines deliver exceptional precision and consistency for complex turning operations.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Chuck Capacity</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">165mm Capacity</span>
                    <span className="text-blue-600 font-bold">03 Machines</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700 text-sm">200mm Capacity</span>
                    <span className="text-blue-600 font-bold">03 Machines</span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Tolerance</h3>
                  <div className="text-3xl font-bold text-blue-600">±0.01mm</div>
                  <p className="text-gray-600 text-sm mt-2">High-precision machining accuracy</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm">Complex turning operations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm">High-volume production capability</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm">Consistent quality and repeatability</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-200 h-96 flex items-center justify-center border border-gray-300">
               <img src="cnc.png" className='w-200 h-96' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VMC Operations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-200 h-96 flex items-center justify-center border border-gray-300">
                <img src="vmc.png" className='w-200 h-96' alt="" />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="text-blue-600 font-bold text-sm uppercase">Multi-Axis Machining</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                VMC Operations
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our 4 VMC machines from AMS, HAAS, and DT1 are equipped with rotary tables, enabling complex multi-axis machining operations. These machines provide exceptional versatility for intricate component manufacturing.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Equipment</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-700 font-semibold">AMS Make</div>
                      <div className="text-gray-600">High Precision</div>
                    </div>
                    <div>
                      <div className="text-gray-700 font-semibold">HAAS Make</div>
                      <div className="text-gray-600">Advanced Control</div>
                    </div>
                    <div>
                      <div className="text-gray-700 font-semibold">DT1 Make</div>
                      <div className="text-gray-600">Reliable Performance</div>
                    </div>
                    <div>
                      <div className="text-gray-700 font-semibold">Rotary Tables</div>
                      <div className="text-gray-600">5-Axis Capability</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm">Multi-axis machining for complex geometries</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm">High-speed cutting operations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm">Automated tool changing for efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Key Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase">Manufacturing Excellence</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Key Manufacturing Strengths
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-200 p-8">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Skilled Workforce</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Experienced technicians and engineers with deep expertise in precision machining, quality control, and process optimization.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Modern Infrastructure</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                3000 sq. ft. dedicated production space with climate-controlled environment and organized workflow for optimal efficiency.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Flexible Production</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Capable of handling both custom orders and bulk production with quick setup changes and scalable operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase">Manufacturing Excellence</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Key Manufacturing Strengths
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Skilled Workforce</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Experienced technicians and engineers with deep expertise in precision machining, quality control, and process optimization.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Modern Infrastructure</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                3000 sq. ft. dedicated production space with climate-controlled environment and organized workflow for optimal efficiency.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Flexible Production</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Capable of handling both custom orders and bulk production with quick setup changes and scalable operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold text-sm uppercase">Capacity</span>
            <h2 className="text-4xl font-bold mt-4 mb-4">
              Production Capacity Overview
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our facility is designed for high-volume production while maintaining exceptional quality standards across all operations.
            </p>
          </div>

          {/* Machine Specifications Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white bg-opacity-5 border-2 border-blue-600 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold uppercase">CNC Capacity</h3>
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">6</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b border-white border-opacity-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm">165mm Chuck</span>
                    <span className="text-blue-400 font-bold">3 Units</span>
                  </div>
                  <div className="text-xs text-gray-400">Galaxy, Jobber, LMW Make</div>
                </div>
                <div className="pb-4 border-b border-white border-opacity-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm">200mm Chuck</span>
                    <span className="text-blue-400 font-bold">3 Units</span>
                  </div>
                  <div className="text-xs text-gray-400">High Capacity Operations</div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Tolerance</span>
                    <span className="text-blue-400 font-bold">±0.01mm</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-5 border-2 border-blue-600 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold uppercase">VMC Capacity</h3>
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b border-white border-opacity-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm">Multi-Axis</span>
                    <span className="text-blue-400 font-bold">5-Axis</span>
                  </div>
                  <div className="text-xs text-gray-400">Rotary Table Equipped</div>
                </div>
                <div className="pb-4 border-b border-white border-opacity-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm">Makes</span>
                    <span className="text-blue-400 font-bold">AMS, HAAS, DT1</span>
                  </div>
                  <div className="text-xs text-gray-400">Premium Equipment</div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Complex Parts</span>
                    <span className="text-blue-400 font-bold">✓ Capable</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-5 border-2 border-blue-600 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold uppercase">SPM Capacity</h3>
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b border-white border-opacity-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm">Custom Design</span>
                    <span className="text-blue-400 font-bold">✓</span>
                  </div>
                  <div className="text-xs text-gray-400">Tailored Solutions</div>
                </div>
                <div className="pb-4 border-b border-white border-opacity-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm">High Volume</span>
                    <span className="text-blue-400 font-bold">✓</span>
                  </div>
                  <div className="text-xs text-gray-400">Batch Production</div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Specialized</span>
                    <span className="text-blue-400 font-bold">✓ Parts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Production Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-600 bg-opacity-20 border border-blue-600 p-8">
              <h3 className="text-2xl font-bold mb-6 uppercase flex items-center">
                <span className="mr-3">⚙️</span> Technical Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white border-opacity-20">
                  <span className="text-gray-200">Precision Tolerance</span>
                  <span className="text-blue-300 font-bold">±0.01mm</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white border-opacity-20">
                  <span className="text-gray-200">Production Space</span>
                  <span className="text-blue-300 font-bold">3000 Sq.Ft.</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white border-opacity-20">
                  <span className="text-gray-200">Total Machines</span>
                  <span className="text-blue-300 font-bold">12 Units</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white border-opacity-20">
                  <span className="text-gray-200">Quality Check</span>
                  <span className="text-blue-300 font-bold">100% Inspected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-200">ISO Certified</span>
                  <span className="text-blue-300 font-bold">9001:2015</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 bg-opacity-20 border border-blue-600 p-8">
              <h3 className="text-2xl font-bold mb-6 uppercase flex items-center">
                <span className="mr-3">📊</span> Production Features
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">High Precision Manufacturing</div>
                    <div className="text-gray-300 text-sm">Tight tolerance control for critical components</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Scalable Operations</div>
                    <div className="text-gray-300 text-sm">From prototype to bulk production runs</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Optimized Workflows</div>
                    <div className="text-gray-300 text-sm">Efficient production processes and scheduling</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Quality Assurance</div>
                    <div className="text-gray-300 text-sm">In-process and final inspection protocols</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Custom Solutions</div>
                    <div className="text-gray-300 text-sm">Tailored manufacturing for unique requirements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Discuss Your Manufacturing Needs
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's explore how our capabilities can meet your precision component requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-10 py-4 bg-white text-blue-600 font-bold uppercase text-sm hover:bg-gray-100 transition-colors">
              Get In Touch
            </a>
            <a href="tel:+919850151717" className="px-10 py-4 border-2 border-white text-white font-bold uppercase text-sm hover:bg-white hover:text-blue-600 transition-all">
              Call +91 9850151717
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SE</span>
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase">Sharp Engineering</h3>
                  <p className="text-xs text-gray-500">Est. 1998</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                ISO 9001:2015 Certified manufacturer of precision auto components.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/products" className="hover:text-white">Products</a></li>
                <li><a href="/capabilities" className="hover:text-white">Capabilities</a></li>
                <li><a href="/quality" className="hover:text-white">Quality</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-sm">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>+91 9850151717</li>
                <li>+91 9850857210</li>
                <li>sharpengineering25@gmail.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-sm">Address</h4>
              <p className="text-sm">
                Plot No. 12, Chhatrapati Shahu Estate<br />
                Jaysingpur 416102<br />
                Kolhapur, Maharashtra
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 Sharp Engineering. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
