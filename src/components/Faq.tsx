import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function InvestmentAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto bg-[#1C1C1E] rounded-2xl overflow-hidden border border-[#2C2C2E]">
      <AccordionItem value="item-1" className="border-b border-[#2C2C2E]">
        <AccordionTrigger className="px-6 py-5 hover:bg-[#2C2C2E] transition-all duration-300 ease-in-out">
          <span className="text-lg font-medium text-white">Investment Strategies</span>
        </AccordionTrigger>
        <AccordionContent className="px-6 py-5 bg-[#2C2C2E] text-[#A1A1A6]">
          <p className="mb-4">Our investment strategies are tailored to various risk profiles:</p>
          <ul className="space-y-2">
            <li><span className="text-[#0A84FF]">•</span> <strong className="text-white">Conservative:</strong> Capital preservation with low-risk investments.</li>
            <li><span className="text-[#0A84FF]">•</span> <strong className="text-white">Balanced:</strong> Mix of growth and income for moderate returns.</li>
            <li><span className="text-[#0A84FF]">•</span> <strong className="text-white">Aggressive:</strong> High-growth potential for risk-tolerant investors.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b border-[#2C2C2E]">
        <AccordionTrigger className="px-6 py-5 hover:bg-[#2C2C2E] transition-all duration-300 ease-in-out">
          <span className="text-lg font-medium text-white">Asset Allocation</span>
        </AccordionTrigger>
        <AccordionContent className="px-6 py-5 bg-[#2C2C2E] text-[#A1A1A6]">
          <p className="mb-4">Our asset allocation optimizes returns while managing risk:</p>
          <ul className="space-y-2">
            <li><span className="text-[#0A84FF]">•</span> <strong className="text-white">Stocks:</strong> Long-term growth and capital appreciation.</li>
            <li><span className="text-[#0A84FF]">•</span> <strong className="text-white">Bonds:</strong> Steady income and reduced portfolio volatility.</li>
            <li><span className="text-[#0A84FF]">•</span> <strong className="text-white">Real Estate:</strong> Diversification and potential inflation hedge.</li>
            <li><span className="text-[#0A84FF]">•</span> <strong className="text-white">Commodities:</strong> Further diversification and inflation protection.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="px-6 py-5 hover:bg-[#2C2C2E] transition-all duration-300 ease-in-out">
          <span className="text-lg font-medium text-white">Risk Management</span>
        </AccordionTrigger>
        <AccordionContent className="px-6 py-5 bg-[#2C2C2E] text-[#A1A1A6]">
          <p className="mb-4">We employ several techniques to protect your investments:</p>
          <ul className="space-y-2">
            <li><span className="text-[#0A84FF]">•</span> <strong className="text-white">Diversification:</strong> Spreading investments across various assets.</li>
            <li><span className="text-[#0A84FF]">•</span> <strong className="text-white">Regular Rebalancing:</strong> Maintaining desired asset allocation.</li>
            <li><span className="text-[#0A84FF]">•</span> <strong className="text-white">Stop-Loss Orders:</strong> Automated selling at predetermined prices.</li>
            <li><span className="text-[#0A84FF]">•</span> <strong className="text-white">Hedging:</strong> Using derivatives to offset potential losses.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}