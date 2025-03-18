import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/aceternity/spotlight';

export const metadata: Metadata = {
  title: 'Services | Mois Analytics',
  description: 'Explore our comprehensive data analytics services including data analysis, visualization, business intelligence, and predictive analytics.',
};

const services = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with our professional data analysis services.',
    features: [
      'Comprehensive data cleaning and preparation',
      'Statistical analysis and pattern identification',
      'Custom reporting and insights generation',
      'Data quality assessment and improvement',
      'Correlation and causation analysis'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    description: 'Present your data in compelling visual formats that make complex information easy to understand.',
    features: [
      'Interactive dashboards and reports',
      'Custom chart and graph creation',
      'Real-time data visualization',
      'Geospatial data mapping',
      'Executive-level presentation materials'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Get comprehensive business intelligence solutions to drive informed decision-making across your organization.',
    features: [
      'KPI development and tracking',
      'Competitive analysis and benchmarking',
      'Performance monitoring systems',
      'Automated reporting workflows',
      'Strategic insights and recommendations'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Leverage advanced statistical techniques and machine learning to forecast future trends and outcomes.',
    features: [
      'Demand forecasting and planning',
      'Risk assessment and mitigation',
      'Customer behavior prediction',
      'Market trend forecasting',
      'Scenario planning and analysis'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'data-consulting',
    title: 'Data Consulting',
    description: 'Expert guidance on data strategy, architecture, and governance to maximize the value of your data assets.',
    features: [
      'Data strategy development',
      'Data governance frameworks',
      'Technology stack assessment',
      'Data team training and mentoring',
      'Process optimization and automation'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 'data-integration',
    title: 'Data Integration',
    description: 'Seamlessly connect and unify your data sources to create a single source of truth for your organization.',
    features: [
      'ETL/ELT pipeline development',
      'Data warehouse implementation',
      'Legacy system integration',
      'API development and management',
      'Real-time data synchronization'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  }
];

export default function ServicesPage() {
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
            <Link href="/services" className="text-gray-900 hover:text-blue-600 font-medium">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Data Analytics Services
            </h1>
            <p className="text-xl mb-8">
              Comprehensive data solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Spotlight key={service.id} className="group">
                <Card className="h-full border-2 border-gray-100 hover:border-blue-100 transition-all duration-200">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/services/${service.id}`} passHref>
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Spotlight>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Contact us today to discuss how Mois Analytics can help your organization leverage the power of data.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" passHref>
              <Button size="lg" className="px-8">Get in Touch</Button>
            </Link>
            <Link href="/case-studies" passHref>
              <Button size="lg" variant="outline" className="px-8">View Case Studies</Button>
            </Link>
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
