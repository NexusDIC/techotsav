import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

const Sponsors = () => {
  const sponsors: string[] = [
    "Your Mom",
    "Your Sister",
    "Your Sister's Bestie",
    "Your English Madam",
    "Your Ex",
    "Your Ex's Bestie",
  ];

  return (
    <div>
      <h1 className="text-5xl text-center">Sponsors</h1>
      <br />
      <div className="flex gap-[2rem] flex-wrap justify-center">
        {sponsors.map((name, index) => (
          <Card key={index} className="w-1/4">
            <CardHeader>
              <CardTitle>{name}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Sponsors;
