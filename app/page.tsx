import Footer from '@/components/Footer/footer';
import Greetings from '@/components/greetings/greeting';
import HomeComponent from '@/components/home/home';

export default function Home() {
  return (
    <main>
      <HomeComponent />
      <Greetings />
      <Footer />
    </main>
  );
}
