import Link from 'next/link';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
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
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">
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

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
