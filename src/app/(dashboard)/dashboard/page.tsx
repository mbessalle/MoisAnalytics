import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Mois Analytics',
  description: 'Access your analytics dashboard and reports',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Dashboard Stats Overview */}
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Reports</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">12</dd>
                    </dl>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">New Insights</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">4</dd>
                    </dl>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Last Updated</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">Today</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Reports Section */}
            <div className="mt-8">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-lg font-medium text-gray-900">Recent Reports</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Your most recent analytics reports and insights.
                  </p>
                </div>
                <div className="border-t border-gray-200">
                  <ul role="list" className="divide-y divide-gray-200">
                    <li className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">Q1 Sales Analysis</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            New
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            Quarterly sales performance analysis with recommendations
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>Updated 3 days ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">Customer Segmentation Report</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            Standard
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            Detailed analysis of customer segments and behavior patterns
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>Updated 2 weeks ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">Market Trends Overview</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            Standard
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            Monthly analysis of market trends and competitive landscape
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>Updated 1 month ago</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
