"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "1",
    question: "What is SmartAutoTech.ai?",
    answer:
      "SmartAutoTech.ai is an AI-powered diagnostic platform designed for automotive repair shops. It helps Assistants troubleshoot vehicle issues faster by providing structured, step-by-step guidance based on the problem description and vehicle details.",
  },
  {
    id: "2",
    question: "How does the AI diagnostic system work?",
    answer:
      "The AI system analyzes the problem description and vehicle information you provide, then generates targeted diagnostic steps to help identify the issue efficiently.",
  },
  {
    id: "3",
    question: "What can I ask the AI Assistant?",
    answer:
      "You can ask the AI Assistant about diagnostic procedures, troubleshooting steps, maintenance guidelines, and common issues related to vehicle repair and maintenance.",
  },
  {
    id: "4",
    question: "Is my data safe when chatting with an AI?",
    answer:
      "Yes, your data is secure. We implement industry-standard encryption and security protocols to protect all information shared during AI-powered sessions.",
  },
  {
    id: "5",
    question: "Can the AI Assistant learn from conversations?",
    answer:
      "The AI system improves over time through aggregated insights, but all conversations are anonymized and handled according to our privacy policy.",
  },
  {
    id: "6",
    question: "What are the limitations of the AI Assistant?",
    answer:
      "While the AI Assistant is highly capable, it should complement professional expertise. Always refer to manufacturer specifications and consult with certified Assistants for critical repairs.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div className="h-px w-6 sm:w-10 bg-red-500" />
            <span className="text-xs sm:text-sm font-semibold text-red-500 uppercase tracking-wider">
              FAQ
            </span>
            <div className="h-px w-6 sm:w-10 bg-red-500" />
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-snug sm:leading-tight">
            Everything You Need to Know Before You Subscribe
          </h1>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            We&apos;ve answered the most common questions from repair shop
            owners and technicians.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-gray-200 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-gray-700 font-semibold text-sm sm:text-base shrink-0">
                    {index + 1}.
                  </span>
                  <span className="text-gray-900 font-semibold text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pt-3 sm:pt-4 pl-6 sm:pl-10 text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
