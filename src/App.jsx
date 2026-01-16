import { useState } from "react";
import faqs from "./data";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { PiStarFourFill } from "react-icons/pi";

const App = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleQuestions = (id) => {
    if (isOpen === id) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-100 p-4 font-sans">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl md:p-10">
        <h4 className="mb-8 flex items-center gap-4 text-4xl font-bold text-slate-800">
          <PiStarFourFill className="text-purple-600" />
          FAQs
        </h4>

        <div className="space-y-6">
          {faqs.map((item) => {
            return (
              <div
                key={item.id}
                className="border-b border-slate-100 pb-5 last:border-0"
              >
                <div
                  className="flex cursor-pointer items-center justify-between gap-4 transition-all hover:text-purple-600"
                  onClick={() => toggleQuestions(item.id)}
                >
                  <span className="text-lg font-semibold text-slate-700">
                    {item.question}
                  </span>
                  <span className="text-3xl text-purple-600">
                    {isOpen === item.id ? <CiCircleMinus /> : <CiCirclePlus />}
                  </span>
                </div>

                {isOpen === item.id && (
                  <div className="mt-4 text-slate-500 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
