"use client";
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

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
            <span className="text-blue-400 font-bold text-sm uppercase">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Contact Sharp Engineering
            </h1>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to discuss your precision component needs? Reach out to us today for a consultation or quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-8"></div>
              
              <div className="bg-gray-50 border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full px-8 py-4 bg-blue-600 text-white font-bold uppercase text-sm hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-8"></div>

              <div className="space-y-6">
                
                {/* Address */}
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Address</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Plot No. 12, Chhatrapati Shahu<br />
                        Co-operative Industrial Estate<br />
                        Agar Bhag (Shirol)<br />
                        Jaysingpur – 416102<br />
                        Kolhapur, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
<div className="bg-gray-50 border border-gray-200 p-6">
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-blue-600 flex items-center justify-center flex-shrink-0">
      <span className="text-white text-xl">📞</span>
    </div>

    <div>
      <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Phone</h3>

      <a
        href="tel:+919850151717"
        className="text-blue-600 font-bold hover:text-blue-700 block"
      >
        +91 9850151717
      </a>

      <a
        href="tel:+919850857210"
        className="text-blue-600 font-bold hover:text-blue-700 block"
      >
        +91 9850857210
      </a>
    </div>
  </div>
</div>


                {/* Email */}
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Email</h3>
                      <a href="mailto:sharpengineering25@gmail.com" className="text-blue-600 font-bold hover:text-blue-700">
                        sharpengineering25@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🕐</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">Business Hours</h3>
                      <p className="text-gray-700 text-sm">
                        Tuesday - Sunday: 9:00 AM - 6:00 PM<br />
                        Monday: Closed
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase">Clientele</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Trusted by Industry Leaders
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 p-8 text-center hover:border-blue-600 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Netmech Engineering Pvt. Ltd.</h3>
              <p className="text-sm text-gray-600 uppercase">Key Client Partner</p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 text-center hover:border-blue-600 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Engineering Technologies</h3>
              <p className="text-sm text-gray-600 uppercase">Jaysingpur</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contact us today to discuss your precision component requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919850151717" className="px-10 py-4 bg-white text-blue-600 font-bold uppercase text-sm hover:bg-gray-100 transition-colors">
              Call Now
            </a>
            <a href="mailto:sharpengineering25@gmail.com" className="px-10 py-4 border-2 border-white text-white font-bold uppercase text-sm hover:bg-white hover:text-blue-600 transition-all">
              Email Us
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
