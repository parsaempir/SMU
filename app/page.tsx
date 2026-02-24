import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Results from '@/components/home/Results';
import Process from '@/components/home/Process';
import Blog from '@/components/home/Blog';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" dir="rtl">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Results />
        <Process />
        <Blog />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
