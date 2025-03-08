import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ComPats = () => {
  const compats: string[] = [
    "Your Mom",
    "Your Sister",
    "Your Sister's Bestie",
    "Your English Madam",
    "Your Ex",
    "Your Ex's Bestie",
  ];

  return (
    <div>
      <h1 className="text-5xl text-center">Community Parteners</h1>
      <br />
      <div className="flex gap-[2rem] flex-wrap justify-center">
        {compats.map((name, index) => (
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

export default ComPats;
