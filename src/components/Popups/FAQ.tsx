"use client"

// import { faq } from "@/constants/FAQPage";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faq = [
  {
    q: "What software do you use?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        <li className="font-semibold">Illustration: <span className="text-amber-500 dark:text-cyan-200 underline">Clip Studio Paint EX</span></li>
        <li className="font-semibold">Animation: <span className="text-amber-500 dark:text-cyan-200 underline">Clip Studio Paint EX</span>, <span className="font-normal">Adobe Animate</span></li>
        <li><span className="font-semibold">3D:</span> blender 2.83 LTS</li>
        <li>Feel free to check the rest of the tools i use in the Work window!</li>
      </ul>
    )
  },
  {
    q: "Are your commissions open?",
    a: "For commission work, contact me via my work email."
  },
  {
    q: "What's your setup?",
    a: "I use a custom PC with a drawing tablet and dual monitors."
  },
  {
    q: "Where do you get your sound effects?",
    a: "From various royalty-free libraries and custom recordings."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faq.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="rounded-lg overflow-hidden border border-amber-100 dark:border-indigo-600 shadow-flat"
          >
            {/* Question */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center p-4 text-left bg-amber-50 dark:bg-linear-to-br dark:from-wave-from dark:to-wave-from/50 dark:bg-black dark:text-white transition"
            >
              <span className="text-sm md:text-base font-medium tracking-wide">
                {item.q}
              </span>

              <ChevronDown
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                  }`}
                size={18}
              />
            </button>

            {/* Answer */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 py-3 text-sm text-gray-700 dark:text-white bg-amber-50/20 dark:bg-background">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}