import Footer from '@/components/Footer/footer';
import Gallery from '@/components/gallery/galerry';
import Greetings from '@/components/greetings/greeting';
import HomeComponent from '@/components/home/home';

export default function Home() {
  return (
    <main>
      <HomeComponent />
      <Greetings />
      <Gallery />
      <Footer />
    </main>
  );
}
