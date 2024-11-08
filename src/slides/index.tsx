import { useEffect, useState } from 'react';
import { Slide } from '../components/Slide';
import { ImageCollage } from '../components/ImageCollage';
import { MetricsChart } from '../components/MetricsChart';
import { processCSVData } from '../utils/processData';
import FirstSlide from '../components/FirstSlide';

interface DataType {
  DateTime: string;
  als_en: number;
  als_de: number;
  als_fr: number;
  icebucket: number;
}

const MetricsChartSlide = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    fetch('/data/wikipediaPageViews.csv')
      .then(response => response.text())
      .then(csvData => {
        const processedData = processCSVData(csvData);
        setData(processedData);
      })
      .catch(error => console.error('Error fetching CSV data:', error));
  }, []);

  return (
    <MetricsChart data={data} initialDateRange={{ start: '2012-01-01', end: '2016-09-30' }} />
  );
};

export const slides = [
    {
        id: 1,
        title: "Understanding ALS",
        content: <FirstSlide />
    },
    {
        id: 2,
        title: "The Challenge",
        content: (
            <Slide>
                <h2 className="text-3xl font-bold mb-6">The Ice Bucket Challenge 🧊</h2>
                <ImageCollage />
            </Slide>
        )
    },
    {
        id: 3,
        title: "Impact Metrics",
        content: (
            <Slide>
                <h2 className="text-3xl font-bold mb-6">Wikipedia Page Views 📈</h2>
                <MetricsChartSlide />
            </Slide>
        )
    },
    {
        id: 4,
        title: "Fundraising Success",
        content: (
            <Slide>
                <h2 className="text-3xl font-bold mb-6">Fundraising 💰</h2>
                <p className="mt-4 text-lg">The campaign raised over $115 million in summer 2014, compared to $2.5 million in the same period of 2013.</p>
            </Slide>
        )
    },
    {
        id: 5,
        title: "Success Factors",
        content: (
            <Slide>
                <h2 className="text-3xl font-bold mb-6">Why It Worked 🌟</h2>
                <div className="prose lg:prose-xl">
                    <ul>
                        <li key="1">Simple and clear call to action 📢</li>
                        <li key="2">Social proof through celebrity participation 🌐</li>
                        <li key="3">Emotional connection to the cause ❤️</li>
                        <li key="4">Perfect timing during summer ☀️</li>
                        <li key="5">Shareable and entertaining content 🎥</li>
                        <li key="6">Competitive and challenging nature 🏆</li>
                    </ul>
                </div>
            </Slide>
        )
    },
    {
        id: 6,
        title: "UGC Marketing",
        content: (
            <Slide>
                <h2 className="text-3xl font-bold mb-6">User Generated Content: A Marketing Perspective 📣</h2>
                <div className="prose lg:prose-xl">
                    <ul>
                        <li key="1">Authentic engagement 🤝</li>
                        <li key="2">Viral spread through social networks 🌐</li>
                        <li key="3">Celebrity participation amplification 🌟</li>
                        <li key="4">Personal storytelling impact 📖</li>
                        <li key="5">Cost-effective campaign execution 💸</li>
                    </ul>
                </div>
            </Slide>
        )
    },
    {
        id: 7,
        title: "More Examples",
        content: (
            <Slide>
                <h2 className="text-3xl font-bold mb-6">More Examples of UGC Campaigns 📊</h2>
                <div className="prose lg:prose-xl">
                    <ul>
                        <li key="1">Coca-Cola’s <strong>"Share a Coke" 🥤</strong></li>
                        <li key="2">Lay’s <strong>"Do Us a Flavor" 🍟</strong></li>
                        <li key="3">GoPro <strong>"Be a Hero" 📷</strong></li>
                        <li key="4">Dove’s <strong>"Real Beauty" 💄</strong></li>
                        <li key="5">Apple’s <strong>"Shot on iPhone" 📱</strong></li>
                        <li key="6"><strong>#Redone 🎥</strong></li>
                    </ul>
                </div>
            </Slide>
        )
    },
    {
        id: 8,
        title: "Thank You",
        content: (
            <Slide>
                <div className="thank-you-slide">
                    <div className="thank-you-languages">
                        <p className="rotate-150" style={{ gridColumn: 1, gridRow: 1 }}>Thank You</p>
                        <p className="rotate-45" style={{ gridColumn: 2, gridRow: 2 }}>Gracias</p>
                        <p className="rotate-90" style={{ gridColumn: 3, gridRow: 3 }}>Merci</p>
                        <p className="rotate-135" style={{ gridColumn: 4, gridRow: 4 }}>Danke</p>
                        <p className="rotate-180" style={{ gridColumn: 5, gridRow: 5 }}>Grazie</p>
                        <p className="rotate-225" style={{ gridColumn: 1, gridRow: 5 }}>ありがとう</p>
                        <p className="rotate-270" style={{ gridColumn: 2, gridRow: 4 }}>谢谢</p>
                        <p className="rotate-315" style={{ gridColumn: 3, gridRow: 2 }}>감사합니다</p>
                        <p className="rotate-30" style={{ gridColumn: 4, gridRow: 1 }}>धन्यवाद</p>
                        <p className="rotate-60" style={{ gridColumn: 5, gridRow: 3 }}>ধন্যবাদ</p>
                        <p className="rotate-120" style={{ gridColumn: 1, gridRow: 3 }}>આભાર</p>
                        <p className="rotate-150" style={{ gridColumn: 2, gridRow: 1 }}>நன்றி</p>
                        <p className="rotate-210" style={{ gridColumn: 3, gridRow: 5 }}>ధన్యవాదాలు</p>
                        <p className="rotate-240" style={{ gridColumn: 4, gridRow: 2 }}>شكرا</p>
                        <p className="rotate-300" style={{ gridColumn: 5, gridRow: 4 }}>Спасибо</p>
                        <p className="rotate-330" style={{ gridColumn: 1, gridRow: 2 }}>Obrigado</p>
                        <p className="rotate-15" style={{ gridColumn: 2, gridRow: 3 }}>Kiitos</p>
                        <p className="rotate-75" style={{ gridColumn: 3, gridRow: 4 }}>Dank u</p>
                        <p className="rotate-105" style={{ gridColumn: 4, gridRow: 5 }}>Tack</p>
                    </div>
                </div>
            </Slide>
        )
    },
    {
        content: (
            <div>
                <h2 className="text-3xl font-bold mb-6">References</h2>
                <ul>
                    <li>🔗 <a href="https://www.wikishark.com/?text_search=&values=4615356%2C7709432%2C13310809%2C35526534&search=&year=0&validate=1&view=2&gtype=0&factors=" target="_blank" rel="noopener noreferrer">Wikishark</a></li>
                    <li>🔗 <a href="https://www.researchgate.net/publication/372498477_Social_Media_Marketing_Performance_Analysis_of_the_Ice_Bucket_Challenge" target="_blank" rel="noopener noreferrer">ResearchGate</a></li>
                    <li>🔗 <a href="https://www.als.org/understanding-als/what-is-als" target="_blank" rel="noopener noreferrer">ALS Association</a></li>
                    <li>🔗 <a href="https://www.cpajournal.com/2017/08/16/redeeming-value-social-media-ice-bucket-challenge-invigorated-als-association/" target="_blank" rel="noopener noreferrer">CPA Journal</a></li>
                </ul>
            </div>
        )
    }
];