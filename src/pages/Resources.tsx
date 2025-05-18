
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const videos = [
  {
    id: 1,
    title: "Introduction to Logic Puzzles",
    channel: "Kids Logic Fun",
    thumbnail: "/resources/video1.jpg",
    url: "https://youtube.com/watch?v=example1",
    duration: "8:24",
    ageRange: "8-9"
  },
  {
    id: 2,
    title: "How to Solve Sudoku for Beginners",
    channel: "Puzzle Masters",
    thumbnail: "/resources/video2.jpg",
    url: "https://youtube.com/watch?v=example2",
    duration: "12:05",
    ageRange: "9-11"
  },
  {
    id: 3,
    title: "Pattern Recognition for Kids",
    channel: "Brain Boosters",
    thumbnail: "/resources/video3.jpg",
    url: "https://youtube.com/watch?v=example3",
    duration: "6:45",
    ageRange: "8-10"
  },
  {
    id: 4,
    title: "Logic Grid Puzzles Explained",
    channel: "Mind Teasers",
    thumbnail: "/resources/video4.jpg",
    url: "https://youtube.com/watch?v=example4",
    duration: "14:30",
    ageRange: "10-11"
  }
];

const books = [
  {
    id: 1,
    title: "Logic Puzzles for Kids",
    author: "Sarah Johnson",
    cover: "/resources/book1.jpg",
    description: "A collection of fun and engaging logic puzzles specifically designed for children.",
    ageRange: "8-10",
    link: "https://example.com/book1"
  },
  {
    id: 2,
    title: "Brain Teasers: The Ultimate Collection",
    author: "Michael Roberts",
    cover: "/resources/book2.jpg",
    description: "Over 200 brain teasers and logic puzzles to keep young minds active and engaged.",
    ageRange: "9-11",
    link: "https://example.com/book2"
  },
  {
    id: 3,
    title: "Fun with Logic: A Kids Guide",
    author: "Emma Thompson",
    cover: "/resources/book3.jpg",
    description: "A colorful guide introducing basic logic concepts through fun activities and puzzles.",
    ageRange: "8-9",
    link: "https://example.com/book3"
  }
];

const competitions = [
  {
    id: 1,
    title: "Junior Logic Olympiad",
    organizer: "International Logic Association",
    image: "/resources/comp1.jpg",
    description: "Annual competition for young logic enthusiasts with prizes for different age categories.",
    date: "March 15, 2024",
    registration: "Open"
  },
  {
    id: 2,
    title: "Mind Masters Challenge",
    organizer: "Educational Fun Ltd",
    image: "/resources/comp2.jpg",
    description: "Online logic competition with weekly challenges and monthly prizes.",
    date: "Ongoing",
    registration: "Always open"
  },
  {
    id: 3,
    title: "National Puzzle Championship",
    organizer: "National Puzzle Association",
    image: "/resources/comp3.jpg",
    description: "Prestigious competition with regional qualifiers and a grand national final.",
    date: "May 22-23, 2024",
    registration: "Opening soon"
  }
];

const Resources = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-logic-blue">Learning Resources</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Discover helpful videos, books, and competitions to boost your logical thinking skills.
      </p>

      <Tabs defaultValue="videos" className="mb-12">
        <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="competitions">Competitions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos">
          <h2 className="text-2xl font-bold mb-6">Educational Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="books">
          <h2 className="text-2xl font-bold mb-6">Recommended Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="competitions">
          <h2 className="text-2xl font-bold mb-6">Logic Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitions.map(competition => (
              <CompetitionCard key={competition.id} competition={competition} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Additional Resources */}
      <div className="bg-blue-50 rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">More Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">For Parents</h3>
            <p className="mb-4">Resources to help your child develop their logical reasoning skills at home:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Guide to supporting your child's logical development</li>
              <li>Activities you can do together at home</li>
              <li>How to recognize and nurture logical thinking skills</li>
            </ul>
            <Button className="bg-logic-blue hover:bg-logic-blue/90">
              Parent Resources
            </Button>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">For Teachers</h3>
            <p className="mb-4">Classroom materials and teaching resources:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Lesson plans focused on logical reasoning</li>
              <li>Group activities and games for the classroom</li>
              <li>Assessment tools to measure logical thinking progress</li>
            </ul>
            <Button className="bg-logic-green hover:bg-logic-green/90">
              Teacher Resources
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

const VideoCard = ({ video }: { video: typeof videos[0] }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="relative">
        <img 
          src={video.thumbnail || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"} 
          alt={video.title}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-1 line-clamp-2">{video.title}</h3>
        <p className="text-gray-500 text-sm mb-2">{video.channel}</p>
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="text-xs">Ages {video.ageRange}</Badge>
          <Button size="sm" variant="outline" className="text-logic-blue border-logic-blue">
            Watch
          </Button>
        </div>
      </div>
    </Card>
  );
};

const BookCard = ({ book }: { book: typeof books[0] }) => {
  return (
    <Card className="overflow-hidden flex flex-col md:flex-row hover:shadow-lg">
      <div className="md:w-1/3">
        <img 
          src={book.cover || "https://images.unsplash.com/photo-1501854140801-50d01698950b"} 
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="font-bold text-lg mb-1">{book.title}</h3>
        <p className="text-gray-500 mb-2">by {book.author}</p>
        <p className="text-sm mb-3">{book.description}</p>
        <div className="flex justify-between items-center">
          <Badge>Ages {book.ageRange}</Badge>
          <Button size="sm" className="bg-logic-yellow hover:bg-logic-yellow/90">
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );
};

const CompetitionCard = ({ competition }: { competition: typeof competitions[0] }) => {
  const isOpen = competition.registration === "Open" || competition.registration === "Always open";
  
  return (
    <Card className="overflow-hidden">
      <img 
        src={competition.image || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"} 
        alt={competition.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="font-bold text-lg mb-1">{competition.title}</h3>
        <p className="text-gray-500 text-sm mb-3">Organized by {competition.organizer}</p>
        <p className="text-sm mb-4">{competition.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm"><strong>Date:</strong> {competition.date}</p>
            <Badge className={isOpen ? "bg-green-500" : "bg-yellow-500"}>
              {competition.registration}
            </Badge>
          </div>
          <Button className="bg-logic-purple hover:bg-logic-purple/90">
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Resources;
