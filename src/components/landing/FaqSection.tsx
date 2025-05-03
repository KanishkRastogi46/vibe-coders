"use client";

import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

export function FAQsSection() {
  return (
    <section id="faqs" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about AutoDev
          </p>
        </div>

        <div className="max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the image-to-code feature work?</AccordionTrigger>
              <AccordionContent>
                Simply upload a screenshot or image of a website, and our AI will analyze the visual elements and generate the corresponding HTML, CSS, and JavaScript code. You can then edit, customize, and deploy the code directly from our platform.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Is AutoDev suitable for beginners?</AccordionTrigger>
              <AccordionContent>
                Absolutely! AutoDev is designed to be user-friendly for developers of all skill levels. Beginners can use the code generation features to learn and understand code structure, while experienced developers can leverage our tools to speed up their workflow.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>What programming languages are supported?</AccordionTrigger>
              <AccordionContent>
                AutoDev currently supports JavaScript, HTML, CSS, Python, Java, C++, Ruby, and more. We're continuously expanding our language support based on user feedback and demands.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I collaborate with my team on projects?</AccordionTrigger>
              <AccordionContent>
                Yes, AutoDev offers real-time collaboration features allowing multiple team members to work on the same project simultaneously. You can share, edit, and execute code together, making it perfect for team projects and pair programming.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Is there a free plan available?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a free tier that includes basic code generation, execution, and limited use of our image-to-code feature. For more advanced features and higher usage limits, check out our premium plans.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>How secure is my code on AutoDev?</AccordionTrigger>
              <AccordionContent>
                Security is our top priority. All your code is encrypted both in transit and at rest. We use industry-standard security practices to ensure your intellectual property remains protected. Additionally, you retain full ownership of all code you create or generate on our platform.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}