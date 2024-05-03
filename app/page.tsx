import Footer from '@/components/Footer/footer';
import Gallery from '@/components/gallery/galerry';
import Greetings from '@/components/greetings/greeting';
import HomeComponent from '@/components/home/home';
import Location from '@/components/location/location';

export default function Home() {
  return (
    <main>
      <HomeComponent />
      <Greetings />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}
