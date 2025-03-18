import { Metadata } from 'next';
import Link from 'next/link';
import { MovingBorder } from '@/components/aceternity/moving-border';

export const metadata: Metadata = {
  title: 'Contact Us | Mois Analytics',
  description: 'Get in touch with our data analytics experts. We\'re here to help you transform your business with data-driven insights.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Temporary Simple Version */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Mois Analytics</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-blue-600 font-medium">
              Case Studies
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="inline-block px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-200"
            >
              Client Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl mb-8">
              Have questions about our services? Ready to start your data journey? Contact us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Our team of data experts is ready to help you transform your business with data-driven insights. Reach out to us using any of the methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="mailto:info@moisanalytics.nl" className="text-blue-600 hover:underline">
                      info@moisanalytics.nl
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a href="tel:+31612345678" className="text-blue-600 hover:underline">
                      +31 6 12345678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office</h3>
                    <address className="not-italic text-gray-600">
                      Mois Analytics<br />
                      Herengracht 182<br />
                      1016 BR Amsterdam<br />
                      The Netherlands
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <MovingBorder className="p-0.5 bg-gradient-to-r from-blue-500 to-indigo-500">
                <div className="bg-white p-8 rounded-md">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="data-analysis">Data Analysis</option>
                        <option value="data-visualization">Data Visualization</option>
                        <option value="business-intelligence">Business Intelligence</option>
                        <option value="predictive-analytics">Predictive Analytics</option>
                        <option value="data-consulting">Data Consulting</option>
                        <option value="data-integration">Data Integration</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </MovingBorder>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
          <div className="h-96 bg-gray-300 rounded-lg">
            {/* In a real implementation, you would embed a Google Map or similar here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mois Analytics</h3>
              <p className="text-gray-400">
                Professional data analytics consultancy based in The Netherlands.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/data-analysis" className="text-gray-400 hover:text-white">
                    Data Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/services/data-visualization" className="text-gray-400 hover:text-white">
                    Data Visualization
                  </Link>
                </li>
                <li>
                  <Link href="/services/business-intelligence" className="text-gray-400 hover:text-white">
                    Business Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/services/predictive-analytics" className="text-gray-400 hover:text-white">
                    Predictive Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/services/data-consulting" className="text-gray-400 hover:text-white">
                    Data Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-400 hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@moisanalytics.nl" className="text-gray-400 hover:text-white">
                    info@moisanalytics.nl
                  </a>
                </li>
                <li>
                  <a href="tel:+31612345678" className="text-gray-400 hover:text-white">
                    +31 6 12345678
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Mois Analytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
