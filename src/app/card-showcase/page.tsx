"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CardShowcase() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 flex flex-col items-center justify-center antialiased">
      <h1 className="text-4xl font-bold text-center text-white mb-12">3D Card Examples</h1>
      
      <div className="flex flex-wrap justify-center gap-12">
        {/* Example 1: Product Card */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white"
            >
              MoisAnalytics Pro
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Powerful analytics platform for your business needs with real-time insights and beautiful dashboards.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=1976&auto=format&fit=crop"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="MoisAnalytics Dashboard"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-blue-500 text-white text-xs font-bold"
              >
                Try Now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white border border-neutral-200 dark:border-white/[0.2] text-neutral-700 dark:text-white text-xs font-bold"
              >
                View Demo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Example 2: Team Member Card */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white"
            >
              Meet Our Team
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              We have the best team in the industry, focused on delivering exceptional results.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="MoisAnalytics Team"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-purple-500 text-white text-xs font-bold"
              >
                Join Our Team
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white border border-neutral-200 dark:border-white/[0.2] text-neutral-700 dark:text-white text-xs font-bold"
              >
                Learn More
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div className="mt-16">
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <a href="/">Back to Home</a>
        </Button>
      </div>
    </div>
  );
}
