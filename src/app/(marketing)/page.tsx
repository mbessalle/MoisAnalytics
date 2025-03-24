import Link from 'next/link';
import { Metadata } from 'next';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

export const metadata: Metadata = {
  title: 'Mois Analytics | Data-Driven Insights for Your Business',
  description: 'Transform your business with data-driven insights. Mois Analytics provides professional data analysis, visualization, and business intelligence services.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Turn Your Data into Business Success
            </h1>
            <p className="text-xl mb-8">
              Professional data analytics consultancy helping Dutch businesses make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-blue-50 transition duration-200"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <CardContainer className="w-full">
              <CardBody className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-200 w-full h-full">
                <CardItem translateZ={20}>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </CardItem>
                <CardItem translateZ={40}>
                  <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
                </CardItem>
                <CardItem translateZ={30}>
                  <p className="text-gray-600 mb-4">
                    Transform raw data into actionable insights with our professional data analysis services.
                  </p>
                </CardItem>
                <CardItem translateZ={50}>
                  <Link href="/services/data-analysis" className="text-blue-600 font-medium hover:underline">
                    Learn more →
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Service 2 */}
            <CardContainer className="w-full">
              <CardBody className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-200 w-full h-full">
                <CardItem translateZ={20}>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                </CardItem>
                <CardItem translateZ={40}>
                  <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
                </CardItem>
                <CardItem translateZ={30}>
                  <p className="text-gray-600 mb-4">
                    Present your data in compelling visual formats that make complex information easy to understand.
                  </p>
                </CardItem>
                <CardItem translateZ={50}>
                  <Link href="/services/data-visualization" className="text-blue-600 font-medium hover:underline">
                    Learn more →
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Service 3 */}
            <CardContainer className="w-full">
              <CardBody className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-200 w-full h-full">
                <CardItem translateZ={20}>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </CardItem>
                <CardItem translateZ={40}>
                  <h3 className="text-xl font-semibold mb-2">Business Intelligence</h3>
                </CardItem>
                <CardItem translateZ={30}>
                  <p className="text-gray-600 mb-4">
                    Get comprehensive business intelligence solutions to drive informed decision-making across your organization.
                  </p>
                </CardItem>
                <CardItem translateZ={50}>
                  <Link href="/services/business-intelligence" className="text-blue-600 font-medium hover:underline">
                    Learn more →
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <CardContainer className="w-full">
              <CardBody className="bg-white rounded-lg overflow-hidden shadow-md w-full h-full">
                <CardItem translateZ={0}>
                  <div className="h-64 bg-gray-300"></div>
                </CardItem>
                <CardItem translateZ={20}>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Retail Chain Sales Optimization</h3>
                    <p className="text-gray-600 mb-4">
                      Helped a major Dutch retail chain increase sales by 15% through data-driven optimization.
                    </p>
                    <Link href="/case-studies/retail-chain-sales-optimization" className="text-blue-600 font-medium hover:underline">
                      Read case study →
                    </Link>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Case Study 2 */}
            <CardContainer className="w-full">
              <CardBody className="bg-white rounded-lg overflow-hidden shadow-md w-full h-full">
                <CardItem translateZ={0}>
                  <div className="h-64 bg-gray-300"></div>
                </CardItem>
                <CardItem translateZ={20}>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Financial Services Dashboard</h3>
                    <p className="text-gray-600 mb-4">
                      Created an interactive executive dashboard for a financial services company, improving decision-making speed by 40%.
                    </p>
                    <Link href="/case-studies/financial-services-dashboard" className="text-blue-600 font-medium hover:underline">
                      Read case study →
                    </Link>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <CardContainer className="w-full">
              <CardBody className="bg-white p-8 rounded-lg shadow-md w-full h-full">
                <CardItem translateZ={20} className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Jan de Vries</h4>
                    <p className="text-sm text-gray-600">CTO, Dutch Retail Group</p>
                  </div>
                </CardItem>
                <CardItem translateZ={40} className="text-gray-700 italic">
                  "Mois Analytics transformed our approach to data. Their insights helped us optimize our operations and significantly increase our sales. Their team was professional, thorough, and delivered beyond our expectations."
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Testimonial 2 */}
            <CardContainer className="w-full">
              <CardBody className="bg-white p-8 rounded-lg shadow-md w-full h-full">
                <CardItem translateZ={20} className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sophie Bakker</h4>
                    <p className="text-sm text-gray-600">Head of Strategy, Amsterdam Financial Group</p>
                  </div>
                </CardItem>
                <CardItem translateZ={40} className="text-gray-700 italic">
                  "The dashboard created by Mois Analytics has become an essential tool for our executive team. It presents complex data in a clear, actionable format that has improved our decision-making process tremendously."
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how Mois Analytics can help your organization leverage the power of data.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-blue-50 transition duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
