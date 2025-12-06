"use client";
import { useState, useEffect } from 'react';

export default function QualityPage() {
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
              <a href="/capabilities" className="text-sm font-semibold text-gray-700 hover:text-blue-600 uppercase">Capabilities</a>
              <a href="/quality" className="text-sm font-semibold text-gray-900 hover:text-blue-600 uppercase">Quality</a>
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
            <span className="text-blue-400 font-bold text-sm uppercase">Quality Assurance</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              ISO 9001:2015 Certified Excellence
            </h1>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Commitment to zero-defect manufacturing through rigorous quality control at every stage of production.
            </p>
          </div>
        </div>
      </section>

      {/* ISO Certification */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-32 h-32 bg-blue-600 flex items-center justify-center mb-8">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold">ISO</div>
                  <div className="text-sm">9001:2015</div>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                ISO 9001:2015 Certified
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sharp Engineering is proud to be ISO 9001:2015 certified, demonstrating our commitment to maintaining international quality management standards. This certification validates our systematic approach to quality control and continuous improvement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our quality management system ensures that every component we manufacture meets or exceeds customer specifications and industry benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 border-2 border-gray-200 p-8 text-center hover:border-blue-600 transition-colors">
                <div className="text-5xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600 uppercase">Inspection</div>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 p-8 text-center hover:border-blue-600 transition-colors">
                <div className="text-5xl font-bold text-gray-900 mb-2">Zero</div>
                <div className="text-sm text-gray-600 uppercase">Defect Goal</div>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 p-8 text-center hover:border-blue-600 transition-colors">
                <div className="text-5xl font-bold text-gray-900 mb-2">27+</div>
                <div className="text-sm text-gray-600 uppercase">Years</div>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 p-8 text-center hover:border-blue-600 transition-colors">
                <div className="text-5xl font-bold text-gray-900 mb-2">ISO</div>
                <div className="text-sm text-gray-600 uppercase">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase">Our Commitment</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Quality Policy
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-blue-600 p-10 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At Sharp Engineering, quality is not just a goal but a fundamental principle that guides every aspect of our operations. We are committed to delivering precision-machined components that consistently meet and exceed customer expectations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our ISO 9001:2015 certification reflects our dedication to maintaining the highest standards of quality management, continuous improvement, and customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">Rigorous inspection at every production stage</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">↑</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Continuous Improvement</h3>
                <p className="text-gray-600 text-sm">Ongoing process optimization and enhancement</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">★</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Industry Benchmarks</h3>
                <p className="text-gray-600 text-sm">Meeting and exceeding industry standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-gray-100 h-96 flex items-center justify-center border border-gray-300">
                <img src="iso.png" alt="" className='w-100 h-96' />
              </div>
            </div>

            <div>
              <span className="text-blue-600 font-bold text-sm uppercase">Metrology</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                Advanced Inspection Equipment
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our quality assurance laboratory is equipped with state-of-the-art digital measuring instruments to ensure precision and accuracy in every component we manufacture.
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 uppercase text-sm">Digital Height Gauge</h3>
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Range: 0-300 mm</div>
                    <div>Least Count: 0.010 mm</div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 uppercase text-sm">Digital Micrometer</h3>
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Range: 0-25 mm</div>
                    <div>Least Count: 0.001 mm</div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 uppercase text-sm">Digital Vernier Caliper</h3>
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Range: 0-150 mm</div>
                    <div>Least Count: 0.010 mm</div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 uppercase text-sm">Granite Surface Plate</h3>
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div>Size: 630 x 630 mm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-bold text-sm uppercase">Process</span>
            <h2 className="text-4xl font-bold mt-4 mb-4">
              Quality Control Process
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every component undergoes rigorous inspection at multiple stages to ensure zero-defect manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">Material Inspection</h3>
              <p className="text-gray-400 text-sm">
                Verification of raw material specifications and quality before production begins.
              </p>
            </div>

            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">In-Process Check</h3>
              <p className="text-gray-400 text-sm">
                Continuous monitoring during machining operations to maintain tight tolerances.
              </p>
            </div>

            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">Final Inspection</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive testing of finished components against specifications.
              </p>
            </div>

            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">Documentation</h3>
              <p className="text-gray-400 text-sm">
                Complete quality records and traceability for every batch produced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase">Our Promise</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Quality Commitments
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 border-l-4 border-blue-600 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">Zero Defect Goal</h3>
              <p className="text-gray-700 leading-relaxed">
                We strive for zero-defect manufacturing through comprehensive quality control measures, skilled workforce, and continuous process improvement initiatives.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-blue-600 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">100% Inspection</h3>
              <p className="text-gray-700 leading-relaxed">
                Every component undergoes thorough inspection using advanced measuring instruments to ensure compliance with specifications and quality standards.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-blue-600 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">Continuous Improvement</h3>
              <p className="text-gray-700 leading-relaxed">
                Regular review of processes, adoption of best practices, and investment in technology to enhance quality and operational efficiency.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-blue-600 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">Customer Satisfaction</h3>
              <p className="text-gray-700 leading-relaxed">
                Committed to exceeding customer expectations through quality products, timely delivery, and responsive service at every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white border-2 border-blue-600 p-12 text-center">
            <div className="w-32 h-32 bg-blue-600 flex items-center justify-center mx-auto mb-8">
              <div className="text-white">
                <div className="text-5xl font-bold">ISO</div>
                <div className="text-lg">9001:2015</div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certified Quality Management System
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our ISO 9001:2015 certification demonstrates our commitment to maintaining international quality management standards and delivering consistent, high-quality products to our customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-50 px-6 py-3 border border-gray-200">
                <div className="text-xs text-gray-600 uppercase">Certified Since</div>
                <div className="text-xl font-bold text-blue-600">ISO 9001:2015</div>
              </div>
              <div className="bg-gray-50 px-6 py-3 border border-gray-200">
                <div className="text-xs text-gray-600 uppercase">Experience</div>
                <div className="text-xl font-bold text-blue-600">27+ Years</div>
              </div>
              <div className="bg-gray-50 px-6 py-3 border border-gray-200">
                <div className="text-xs text-gray-600 uppercase">Commitment</div>
                <div className="text-xl font-bold text-blue-600">Zero Defect</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience Our Quality Commitment
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Partner with Sharp Engineering for ISO-certified precision components.
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
