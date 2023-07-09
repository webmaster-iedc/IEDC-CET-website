import React, { useState } from 'react';

const FAQSection = ({faqData}, {sectionRef}) => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  

  const handleQuestionClick = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  return (
    <div  ref={sectionRef} className="mt-24 space-y-3 text-white md:w-2/3 w-3/4 self-center">
        <h2 class="text-center text-5xl font-bold">FAQs</h2>
        <hr className="mt-2 border-t-2 w-36 mx-auto pb-20  border-red-700" />
          {faqData.map((faq, index) => (
            <div key={index} className="py-3 px-7 bg-[#0D0F10] text-white rounded-md shadow-md">
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
                    className="flex align-center"
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
