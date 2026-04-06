import { redirect } from 'next/navigation';

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
  redirect('https://futurfestival.mx/');
}
