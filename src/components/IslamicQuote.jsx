import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const IslamicQuote = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  // Local fallback quotes
  const localQuotes = [
    "اللهم اجعل القرآن ربيع قلوبنا 🌙 (O Allah, make the Qur'an the spring of our hearts)",
    "إن مع العسر يسرا — Indeed, with hardship comes ease (Qur'an 94:6)",
    "خيركم من تعلم القرآن وعلمه — The best of you are those who learn the Qur'an and teach it",
    "توكلت على الله — I put my trust in Allah",
    "لا تقنطوا من رحمة الله — Do not despair of the mercy of Allah (Qur'an 39:53)"
  ];

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Try fetching from API
        const response = await fetch("https://quotes-api-self.vercel.app/api/quote");
        const data = await response.json();

        if (data?.quote) {
          setQuote(data.quote + " — " + data.author);
        } else {
          // If API fails, pick a local random quote
          const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
          setQuote(randomQuote);
        }
      } catch (error) {
        // Always fallback if error
        const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        setQuote(randomQuote);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">🌙 Daily Islamic Quote</h1>
        {loading ? <Spinner /> : <p className="quote">{quote}</p>}
      </div>
    </div>
  );
};

export default IslamicQuote;
