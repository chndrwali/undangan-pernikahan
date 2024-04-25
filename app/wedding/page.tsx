import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Wedding = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex items-center">
        <Tabs defaultValue="quotes" className="w-[400px]">
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
          <TabsContent value="thanks">Thanks</TabsContent>
          <TabsList>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="salam">Salam</TabsTrigger>
            <TabsTrigger value="bride">Bride</TabsTrigger>
            <TabsTrigger value="groom">Groom</TabsTrigger>
            <TabsTrigger value="event">Event</TabsTrigger>
            <TabsTrigger value="events">Event</TabsTrigger>
            <TabsTrigger value="maps">Maps</TabsTrigger>
            <TabsTrigger value="rsvp">RSPV</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="gift">Gift</TabsTrigger>
            <TabsTrigger value="protocol">Protocol</TabsTrigger>
            <TabsTrigger value="thanks">Thanks</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
};

export default Wedding;
