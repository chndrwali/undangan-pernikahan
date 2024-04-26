import ThanksPage from '@/components/thanks/thanksPage';
import PageWrap from '@/components/ui/pageWrap';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Wedding = () => {
  return (
    <PageWrap>
      <div className="relative z-10">
        <Tabs defaultValue="quotes" className="flex flex-col items-center">
          <TabsContent value="quotes">Quotes</TabsContent>
          <TabsContent value="salam">Salam</TabsContent>
          <TabsContent value="bride">Bride</TabsContent>
          <TabsContent value="groom">Groom</TabsContent>
          <TabsContent value="event">Event</TabsContent>
          <TabsContent value="events">Events</TabsContent>
          <TabsContent value="maps">Maps</TabsContent>
          <TabsContent value="rsvp">RSVP</TabsContent>
          <TabsContent value="gallery">Gallery</TabsContent>
          <TabsContent value="gift">Gift</TabsContent>
          <TabsContent value="protocol">Protocol</TabsContent>
          <TabsContent value="thanks">
            <ThanksPage />
          </TabsContent>

          <TabsList>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="salam">Salam</TabsTrigger>
            <TabsTrigger value="bride">Bride</TabsTrigger>
            <TabsTrigger value="groom">Groom</TabsTrigger>
            <TabsTrigger value="event">Event</TabsTrigger>
            <TabsTrigger value="thanks">Thanks</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </PageWrap>
  );
};

export default Wedding;
