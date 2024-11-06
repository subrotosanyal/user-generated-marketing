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
                    </ul>
                </div>
            </Slide>
        )
    }
];