import { HomepageClient } from '@/components/homepage-client';

export const metadata = {
  title: 'FUTUR Festival — Coming to Mexico',
  description: 'FUTUR Festival is coming to Mexico. Register now to be the first to know.',
  openGraph: {
    title: 'FUTUR Festival — Coming to Mexico',
    description: 'FUTUR Festival is coming to Mexico. Register now.',
    url: 'https://futurfestival.mx',
    siteName: 'FUTUR Festival',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomepageClient />;
}
