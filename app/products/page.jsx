"use client";
import { useState, useEffect } from 'react';

export default function ProductsPage() {
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
              <a href="/products" className="text-sm font-semibold text-gray-900 hover:text-blue-600 uppercase">Products</a>
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
      <section className="pt-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold text-sm uppercase">Product Range</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Precision Machined Auto Components
            </h1>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              High-quality, precision-engineered components for the automotive industry, manufactured with advanced CNC and VMC technology.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Product 1: Drum Gear Shift */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div className="order-2 md:order-1">
              <span className="text-blue-600 font-bold text-sm uppercase">Transmission Component</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                Drum Gear Shift
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Precision-machined drum gear shift components designed for smooth transmission operation in motorcycles. Manufactured using advanced CNC technology to ensure exact specifications and optimal performance.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">High-precision CNC machined for tight tolerances</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Superior durability and wear resistance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">ISO 9001:2015 quality certified</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Smooth gear shifting performance</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">CNC</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Machined</div>
                </div>
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">±0.01</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Tolerance</div>
                </div>
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Tested</div>
                </div>
              </div>

              <a href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold uppercase text-sm hover:bg-blue-700 transition-colors">
                Request Quote
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gray-200 h-96 flex items-center justify-center border border-gray-300">
               <img src="drum.png" alt="" className='w-200 h-96' />
              </div>
            </div>
          </div>

          {/* Product 2: Rotor Oil Filter */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <div className="bg-gray-200 h-96 flex items-center justify-center border border-gray-300">
                <img src="rotor.png" alt="" className='w-200 h-96'/>
              </div>
            </div>
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase">Engine Filtration</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                Rotor Oil Filter
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                High-efficiency rotor oil filter components engineered for optimal engine protection. Precision-manufactured to ensure maximum filtration efficiency and extended engine life.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">High-efficiency filtration performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Extended service life and durability</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">OEM quality standards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Precision-machined for perfect fit</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">VMC</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Technology</div>
                </div>
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">High</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Efficiency</div>
                </div>
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">OEM</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Quality</div>
                </div>
              </div>

              <a href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold uppercase text-sm hover:bg-blue-700 transition-colors">
                Request Quote
              </a>
            </div>
          </div>

          {/* Product 3: Pistons */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div className="order-2 md:order-1">
              <span className="text-blue-600 font-bold text-sm uppercase">Engine Component</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                Pistons
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Performance-grade pistons manufactured with precision for optimal engine performance. Engineered to withstand high temperatures and pressures while maintaining dimensional accuracy.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Forged aluminum construction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Superior heat resistance properties</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Performance-grade specifications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Precision-machined ring grooves</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">Heat</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Resistant</div>
                </div>
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">Forged</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Aluminum</div>
                </div>
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">Grade</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Performance</div>
                </div>
              </div>

              <a href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold uppercase text-sm hover:bg-blue-700 transition-colors">
                Request Quote
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gray-200 h-96 flex items-center justify-center border border-gray-300">
                <img src="piston.png" alt="" className='w-200 h-96'/>
              </div>
            </div>
          </div>

          {/* Product 4: Axles & Shafts */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <div className="bg-gray-200 h-96 flex items-center justify-center border border-gray-300">
                <img src="axles.png" className='h-96 w-100' alt="" />
                <img src="shafts.png" className='h-96 w-100' alt="" />
              </div>
            </div>
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase">Drivetrain Components</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                Axles & Shafts
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Critical drivetrain elements engineered for strength and reliability. Precision-machined to ensure smooth power transmission and optimal vehicle performance.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">High-strength material construction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Precision ground surfaces</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Balanced for smooth operation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Heavy-duty load capacity</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">High</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Strength</div>
                </div>
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">Ground</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Precision</div>
                </div>
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">Load</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Capacity</div>
                </div>
              </div>

              <a href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold uppercase text-sm hover:bg-blue-700 transition-colors">
                Request Quote
              </a>
            </div>
          </div>

          {/* Product 5: Cam Shafts */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-blue-600 font-bold text-sm uppercase">Engine Timing</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                Cam Shafts
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Precision-engineered cam shafts for optimal engine timing and valve operation. Manufactured with advanced CNC technology to ensure exact cam profiles and timing accuracy.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Precision cam lobe profiles</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Optimal valve timing performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Hardened bearing surfaces</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm">Enhanced durability and longevity</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">CNC</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Precision</div>
                </div>
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">Timing</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Accuracy</div>
                </div>
                <div className="bg-gray-50 p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">Hard</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Surface</div>
                </div>
              </div>

              <a href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold uppercase text-sm hover:bg-blue-700 transition-colors">
                Request Quote
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gray-200 h-96 flex items-center justify-center border border-gray-300">
                <img src="camshafts.png" className='w-200 h-96' alt="" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Custom Components?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Our facility is equipped to handle custom orders and specialized components. Contact us to discuss your specific requirements.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-blue-600 text-white font-bold uppercase text-sm hover:bg-blue-700 transition-colors">
            Discuss Your Project
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-cover flex items-center justify-center">
                <img src="logo.png" alt="Sharp Engineering Logo" className="w-10 h-10 object-contain" />
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
