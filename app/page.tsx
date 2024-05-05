import Footer from '@/components/Footer/footer';
import Gallery from '@/components/gallery/galerry';
import Greetings from '@/components/greetings/greeting';
import HomeComponent from '@/components/home/home';
import Location from '@/components/location/location';
import Quotes from '@/components/quotes/quotes';

export default function Home() {
  return (
    <main>
      <HomeComponent />
      <Greetings />
      <Quotes />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}
