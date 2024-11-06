import { Slide } from '../components/Slide';
import { ImageCollage } from '../components/ImageCollage';
import { MetricsChart } from '../components/MetricsChart';

const wikiPageViews = [
  { name: 'July 2014', value: 50000 },
  { name: 'August 2014', value: 2500000 },
  { name: 'September 2014', value: 1500000 }
];

const fundraisingData = [
  { name: '2013', value: 2500000 },
  { name: '2014 (Campaign)', value: 115000000 },
  { name: '2015', value: 40000000 }
];

export const slides = [
  {
    id: 1,
    title: "Understanding ALS",
    content: (
      <Slide>
        <h2 className="text-3xl font-bold mb-6">What is ALS?</h2>
        <div className="prose lg:prose-xl">
          <p>Amyotrophic Lateral Sclerosis (ALS), also known as Lou Gehrig's disease, is a progressive neurodegenerative disease that affects nerve cells in the brain and spinal cord, causing loss of muscle control.</p>
          <ul>
            <li>Affects motor neurons</li>
            <li>Progressive muscle weakness</li>
            <li>Impacts physical function</li>
            <li>Average life expectancy 2-5 years</li>
          </ul>
        </div>
      </Slide>
    )
  },
  {
    id: 2,
    title: "The Challenge",
    content: (
      <Slide>
        <h2 className="text-3xl font-bold mb-6">The Ice Bucket Challenge</h2>
        <ImageCollage />
        <p className="mt-6 text-lg">A viral sensation that swept across social media, challenging people to dump ice water on their heads and donate to ALS research.</p>
      </Slide>
    )
  },
  {
    id: 3,
    title: "UGC Marketing",
    content: (
      <Slide>
        <h2 className="text-3xl font-bold mb-6">User Generated Content: A Marketing Perspective</h2>
        <div className="prose lg:prose-xl">
          <ul>
            <li>Authentic engagement</li>
            <li>Viral spread through social networks</li>
            <li>Celebrity participation amplification</li>
            <li>Personal storytelling impact</li>
            <li>Cost-effective campaign execution</li>
          </ul>
        </div>
      </Slide>
    )
  },
  {
    id: 4,
    title: "Impact Metrics",
    content: (
      <Slide>
        <h2 className="text-3xl font-bold mb-6">Wikipedia Page Views</h2>
        <MetricsChart data={wikiPageViews} />
        <p className="mt-4 text-lg">Dramatic increase in ALS awareness measured through Wikipedia traffic.</p>
      </Slide>
    )
  },
  {
    id: 5,
    title: "Fundraising Success",
    content: (
      <Slide>
        <h2 className="text-3xl font-bold mb-6">Fundraising Impact</h2>
        <MetricsChart data={fundraisingData} />
        <p className="mt-4 text-lg">The campaign raised over $115 million in summer 2014, compared to $2.5 million in the same period of 2013.</p>
      </Slide>
    )
  },
  {
    id: 6,
    title: "Success Factors",
    content: (
      <Slide>
        <h2 className="text-3xl font-bold mb-6">Why It Worked</h2>
        <div className="prose lg:prose-xl">
          <ul>
            <li>Simple and clear call to action</li>
            <li>Social proof through celebrity participation</li>
            <li>Emotional connection to the cause</li>
            <li>Perfect timing during summer</li>
            <li>Shareable and entertaining content</li>
            <li>Competitive and challenging nature</li>
          </ul>
        </div>
      </Slide>
    )
  }
];