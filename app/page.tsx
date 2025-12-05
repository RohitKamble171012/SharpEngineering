"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Navigation */}
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
              <a href="/" className="text-sm font-semibold text-gray-900 hover:text-blue-600 uppercase">Home</a>
              <a href="/about" className="text-sm font-semibold text-gray-700 hover:text-blue-600 uppercase">About</a>
              <a href="/products" className="text-sm font-semibold text-gray-700 hover:text-blue-600 uppercase">Products</a>
              <a href="/capabilities" className="text-sm font-semibold text-gray-700 hover:text-blue-600 uppercase">Capabilities</a>
              <a href="/quality" className="text-sm font-semibold text-gray-700 hover:text-blue-600 uppercase">Quality</a>
              <a href="/contact" className="px-6 py-2 bg-blue-600 text-white text-sm font-bold uppercase hover:bg-blue-700 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="text-blue-600 font-bold text-sm uppercase">ISO 9001:2015 Certified</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                SHARP ENGINEERING
              </h1>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Sharp Engineering has been a trusted manufacturer of high-precision automotive components since 1998. 
                With state-of-the-art CNC and VMC machinery, we deliver superior quality components to leading manufacturers.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="/products" className="px-8 py-3 bg-blue-600 text-white font-bold uppercase text-sm hover:bg-blue-700 transition-colors">
                  Our Products
                </a>
                <a href="/contact" className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-bold uppercase text-sm hover:bg-gray-900 hover:text-white transition-all">
                  Get Quote
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-blue-600">27+</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">12+</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Machines</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">3000</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Sq.Ft.</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <div className="text-center">
                  <img src="factory.png" alt="" className='w-200 h-96'/>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 bg-blue-600 text-white p-6 shadow-xl">
                <div className="text-3xl font-bold mb-1">ISO 9001:2015</div>
                <div className="text-sm uppercase">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase">About Company</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                Established 1998 Jaysingpur, Maharashtra
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sharp Engineering is an ISO 9001:2015 certified manufacturer specializing in precision-machined automotive 
                components. Our 3000 sq. ft. facility in Jaysingpur, Kolhapur is equipped with advanced CNC, VMC, and SPM machines.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                We serve industry leaders including Netmech Engineering Pvt. Ltd., delivering components that meet stringent 
                quality standards with precision and efficiency.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm">Advanced CNC and VMC Machining</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm">ISO 9001:2015 Quality Management</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm">Trusted by Leading Manufacturers</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border border-gray-200 p-8 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a globally recognized leader in precision engineering, delivering innovative and reliable 
                  automotive solutions through continuous improvement.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">Our Mission</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-sm">Exceed customer expectations through quality</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-sm">Leverage advanced manufacturing technologies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-sm">Foster long-term partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase">Product Range</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Precision Components
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src="drum.png" alt="Drum Gear Shift" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Drum Gear Shift</h3>
                <p className="text-sm text-gray-600 mb-4">Transmission Components</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>CNC Machined</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>High Durability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>ISO Certified</span>
                  </li>
                </ul>
                <a href="/products" className="text-blue-600 font-bold text-sm uppercase hover:text-blue-700">
                  View Details →
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src="rotor.png" alt="Rotor Oil Filter" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Rotor Oil Filter</h3>
                <p className="text-sm text-gray-600 mb-4">Engine Filtration</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>High Efficiency</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>Extended Life</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>OEM Quality</span>
                  </li>
                </ul>
                <a href="/products" className="text-blue-600 font-bold text-sm uppercase hover:text-blue-700">
                  View Details →
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src="piston.png" alt="Pistons" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Pistons</h3>
                <p className="text-sm text-gray-600 mb-4">Engine Components</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>Forged Aluminum</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>Heat Resistant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>Performance Grade</span>
                  </li>
                </ul>
                <a href="/products" className="text-blue-600 font-bold text-sm uppercase hover:text-blue-700">
                  View Details →
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/products" className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-bold uppercase text-sm hover:bg-gray-900 hover:text-white transition-all">
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-bold text-sm uppercase">Infrastructure</span>
            <h2 className="text-4xl font-bold mt-4 mb-4">Manufacturing Capabilities</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">06</div>
              <div className="text-sm uppercase text-gray-400">CNC Machines</div>
              <p className="text-xs text-gray-500 mt-2">Galaxy, Jobber, LMW</p>
            </div>
            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">04</div>
              <div className="text-sm uppercase text-gray-400">VMC Machines</div>
              <p className="text-xs text-gray-500 mt-2">AMS, HAAS, DT1</p>
            </div>
            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">02</div>
              <div className="text-sm uppercase text-gray-400">SPM Machines</div>
              <p className="text-xs text-gray-500 mt-2">Custom Solutions</p>
            </div>
            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">3000</div>
              <div className="text-sm uppercase text-gray-400">Sq.Ft. Facility</div>
              <p className="text-xs text-gray-500 mt-2">Production Space</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-8">
              <h3 className="text-xl font-bold mb-3 uppercase">CNC Machining</h3>
              <p className="text-gray-400 text-sm mb-4">
                6 CNC machines with chuck capacities of 165mm and 200mm for precision operations.
              </p>
              <div className="text-xs text-blue-400 font-bold uppercase">Tolerance: ±0.01mm</div>
            </div>
            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-8">
              <h3 className="text-xl font-bold mb-3 uppercase">VMC Operations</h3>
              <p className="text-gray-400 text-sm mb-4">
                4 VMC machines with rotary tables for complex multi-axis machining.
              </p>
              <div className="text-xs text-blue-400 font-bold uppercase">5-Axis Capability</div>
            </div>
            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-8">
              <h3 className="text-xl font-bold mb-3 uppercase">Special Purpose</h3>
              <p className="text-gray-400 text-sm mb-4">
                2 SPM machines for complex components and high-volume production.
              </p>
              <div className="text-xs text-blue-400 font-bold uppercase">Custom Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase">Quality Control</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                ISO 9001:2015 Certified Quality
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-8">
                Rigorous inspection at every stage with advanced metrology equipment ensuring zero-defect manufacturing.
              </p>

              <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm">Equipment</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Digital Height Gauge</span>
                    <span className="text-gray-500">0-300mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Digital Micrometer</span>
                    <span className="text-gray-500">0-25mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Digital Vernier</span>
                    <span className="text-gray-500">0-150mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Surface Plate</span>
                    <span className="text-gray-500">630x630mm</span>
                  </div>
                </div>
              </div>

              <a href="/quality" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold uppercase text-sm hover:bg-blue-700 transition-colors">
                Quality Policy
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 border-2 border-gray-200 p-8 text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">ISO</div>
                <div className="text-sm text-gray-600 uppercase">9001:2015</div>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 p-8 text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600 uppercase">Inspected</div>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 p-8 text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">Zero</div>
                <div className="text-sm text-gray-600 uppercase">Defect</div>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 p-8 text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">27+</div>
                <div className="text-sm text-gray-600 uppercase">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner with Sharp Engineering
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Request a quote for precision automotive components.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-10 py-4 bg-white text-blue-600 font-bold uppercase text-sm hover:bg-gray-100 transition-colors">
              Request Quote
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