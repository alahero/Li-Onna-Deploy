import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ContactInfo } from '@/components/contact-info';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Encuentra LI-ONNA en C. de Recoletos, 1, Barrio Salamanca, Madrid. Teléfono, email, horarios y cómo llegar.',
  openGraph: {
    title: 'Contacto — LI-ONNA',
    description:
      'Dirección, horarios y contacto de LI-ONNA en Barrio Salamanca, Madrid.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        <ContactInfo />
      </main>

      <Footer />
    </>
  );
}
