"use client";
import { useState, useEffect } from 'react';

export default function AboutPage() {
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
              <a href="/about" className="text-sm font-semibold text-gray-900 hover:text-blue-600 uppercase">About</a>
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
      <section className="pt-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold text-sm uppercase">About Company</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Excellence in Precision Engineering Since 1998
            </h1>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Sharp Engineering is a leading manufacturer and supplier of high-precision machined auto components based in Jaysingpur, Kolhapur, Maharashtra, India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Established in 1998, Sharp Engineering has built a reputation as a trusted manufacturer of high-precision machined auto components. Our state-of-the-art 3000 sq. ft. facility is equipped with advanced CNC, VMC, and SPM machines, enabling us to deliver superior-quality components to the automotive industry.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                As an ISO 9001:2015 certified company, we are recognized for our unwavering commitment to quality, innovation, and customer satisfaction. Our partnership with industry leaders like Netmech Engg. Pvt. Ltd. underscores our reputation as a trusted supplier in the automotive sector.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With over 27 years of industry experience, we combine technical expertise with modern manufacturing capabilities to deliver components that meet the most stringent quality standards.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 border-l-4 border-blue-600 p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">1998</div>
                <div className="text-sm text-gray-600 uppercase mb-3">Established</div>
                <p className="text-gray-700 text-sm">Founded in Jaysingpur with a vision to deliver precision engineering excellence.</p>
              </div>
              
              <div className="bg-gray-50 border-l-4 border-blue-600 p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">3000</div>
                <div className="text-sm text-gray-600 uppercase mb-3">Sq. Ft. Facility</div>
                <p className="text-gray-700 text-sm">State-of-the-art manufacturing facility equipped with advanced machinery.</p>
              </div>
              
              <div className="bg-gray-50 border-l-4 border-blue-600 p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">ISO</div>
                <div className="text-sm text-gray-600 uppercase mb-3">9001:2015 Certified</div>
                <p className="text-gray-700 text-sm">Commitment to international quality management standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white border-2 border-blue-600 p-10">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <span className="text-white text-2xl">👁</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be a globally recognized leader in precision engineering, delivering innovative and reliable automotive solutions through continuous improvement and technological advancement.
              </p>
            </div>
            
            <div className="bg-white border-2 border-blue-600 p-10">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase">Our Mission</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-xl">•</span>
                  <span>Consistently exceed customer expectations through quality, precision, and timely delivery</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-xl">•</span>
                  <span>Leverage advanced manufacturing technologies and skilled workforce for sustainable growth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-xl">•</span>
                  <span>Foster long-term partnerships with clients by ensuring competitive pricing and superior service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase">Why Choose Us</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Our Key Strengths
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">ISO Certified Quality</h3>
              <p className="text-gray-600 text-sm">
                ISO 9001:2015 certification ensures adherence to international quality standards with rigorous inspection at every production stage.
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">⚙</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Advanced Machinery</h3>
              <p className="text-gray-600 text-sm">
                Equipped with 6 CNC machines, 4 VMC machines, and 2 SPM machines for precision manufacturing and scalability.
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Skilled Workforce</h3>
              <p className="text-gray-600 text-sm">
                Experienced technicians and engineers with deep expertise in precision machining and quality control.
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm">
                Optimized manufacturing processes and efficient operations enable us to offer competitive pricing without compromising quality.
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">On-Time Delivery</h3>
              <p className="text-gray-600 text-sm">
                Commitment to meeting deadlines with efficient production planning and streamlined logistics.
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Customer-Centric</h3>
              <p className="text-gray-600 text-sm">
                Building long-term partnerships through responsive service, custom solutions, and unwavering support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-bold text-sm uppercase">Milestones</span>
            <h2 className="text-4xl font-bold mt-4 mb-4">
              Achievements & Recognition
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-8 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 uppercase">Industry Recognition</h3>
              <p className="text-gray-400 text-sm">
                Consistent supplier recognition by Netmech Engg. Pvt. Ltd. for quality and reliability.
              </p>
            </div>

            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-8 text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 uppercase">Capacity Expansion</h3>
              <p className="text-gray-400 text-sm">
                Successful expansion of production capacity with addition of advanced VMC and CNC machines.
              </p>
            </div>

            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 p-8 text-center">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3 uppercase">27+ Years Legacy</h3>
              <p className="text-gray-400 text-sm">
                Long-term industry presence since 1998, building trust and expertise across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss how Sharp Engineering can meet your precision component needs.
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
