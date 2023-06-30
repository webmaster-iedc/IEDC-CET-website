import React, { useState } from 'react';

const FAQSection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqData = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
    },
  ];

  const handleQuestionClick = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  return (
    <div className="mb-4 space-y-3 text-white w-3/4 self-center">
      {faqData.map((faq, index) => (
        <div key={index} className="p-2 bg-[#334155] text-white rounded-md shadow-md ">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <button
                className="text-left w-full focus:outline-none"
                onClick={() => handleQuestionClick(index)}
              >
                <span className="font-bold">{faq.question}</span>
              </button>
            </div>
            <div>
              <button
                className=""
                onClick={() => handleQuestionClick(index)}
              >
                {expandedQuestion === index ? <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13.3477H21" stroke="#9BA9B3" stroke-width="5.14286" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    : <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 3.34766V23.3477M3 13.3477H23" stroke="#9BA9B3" stroke-width="5.14286" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>}
              </button>
            </div>
          </div>
          {expandedQuestion === index && (
            <div className="py-3">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
