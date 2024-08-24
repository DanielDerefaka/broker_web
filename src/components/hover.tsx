"use client"

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "A New Approach",
    description:
      "Trade with your live account. Win the challenge! - get funded. No success? - no charges.",
    link: "",
  },
  {
    title: "Unlimited Attempts",
    description:
      "With our real account verification, take as many attempts as you need to pass the challenge. We believe in your potential.",
    link: "",
  },
  {
    title: "Zero Risk Verification",
    description:
      "Our real account verification eliminates the financial risk associated with the challenge. Your success won't cost you.",
    link: "",
  },
  {
    title: "Exceptional Profit Sharing",
    description:
      "We offer an industry-leading profit split of 80%. Your skill set deserves to be rewarded highly.",
    link: "",
  },
  {
    title: "Unparalleled Support",
    description:
      "Get top-notch, round-the-clock support from our dedicated team of trading professionals. We're always just a chat or a call away.",
    link: "",
  },
  {
    title: "+1000 Trading Instruments",
    description:
      "Access a wide range of markets from Stocks, Crypto, Indices to FX. We have something for everyone.",
    link: "",
  },
];
