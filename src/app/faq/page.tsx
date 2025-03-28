import React from "react";

const faqs = [
  {
    question: "What types of chairs do you offer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "Do your chairs come with a warranty?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "Can I try a chair before purchasing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "What will be delivered? And When?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How do I clean and maintain my Comforty chair?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-[82px] mb-[130px] ">
      <h1 className="text-[48px] font-bold text-center mb-6">Questions Looks Here</h1>
      <p className="text-center text-gray-600 mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#F7F7F7] w-[100%] p-4 rounded-[4px]   border hover:shadow-lg transition"
          >
            <h2 className="text-[18px] font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
