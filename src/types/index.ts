export interface Slide {
  id: number;
  title: string;
  content: JSX.Element;
}

export interface MetricData {
  name: string;
  value: number;
}