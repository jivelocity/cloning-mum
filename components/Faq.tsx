
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Container from "@/components/ui/Container";

const Faq = () => {

    const faqs = [
        {
            question: "How fast do you deliver the designs?",
            answer: "It usually takes 2-3 days for a first draft. However, some requests may take longer depending on the complexity of the design."
        },
        {
            question: "Is there a limit to how many request I can have?",
            answer: "There is no limit. Once subscribed, you will be able to add as you'd like to your queue, and they will be delivered one by one."
        },
        {
            question: "Can I pause or cancel my subscription anytime?",
            answer: "You can pause or cancel your subscription anytime in 2-clicks.  We understand that you may not always have enough design work to fill up the entire month.  In that case, pausing your subscription is the perfect option for you. You'll be able to use your remaining days when you'll have more design work to be done. "
        },
        {
            question: "What is the workflow?",
            answer: "We use Trello as request system. Simply make a request in Trello and let us manage the rest.  We like to keep the communication effective with tools like Slack, Teams or Loom.  The design will be done in Figma. There, you'll be able to view, comment and approve the designs.  If you are lost with those tools, don't worry we'll set you up in minutes. "
        }
    ]

  return (
    <Container id="faq" className="max-w-7xl flex flex-col justify-center w-full py-16">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm font-semibold text-stone-600 uppercase mb-4">faq</p>
        <h1 className="text-primary text-3xl text-center">
                You might have questions.<br/>
            <span className="font-noir">
                We have the answers.
            </span>
        </h1>
      </div>

        <Accordion type='single' collapsible className="w-full space-y-4 mt-12">
            {faqs.map((faq,i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-[#151514] rounded py-4 px-6 ">
                    <AccordionTrigger>
                        <h3 className="text-start font-semibold text-base md:text-lg"><span className="mr-4">✦</span>{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-stone-300">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </Container>
  )
}

export default Faq;
