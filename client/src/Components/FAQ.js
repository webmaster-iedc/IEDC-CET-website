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
    <div className="mb-4 space-y-2 text-white w-3/4 self-center">
      {faqData.map((faq, index) => (
        <div key={index} className="p-2 text-white rounded-md border border-gray-200 py-3">
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
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => handleQuestionClick(index)}
              >
                {expandedQuestion === index ? '-' : '+'}
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
