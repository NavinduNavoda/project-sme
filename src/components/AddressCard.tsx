import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const AddressCard = () => {
  return (
    <div className="w-[300px] hover:scale-110 duration-300">
      <Card className="w-[300px] h-[220px]">
        <CardHeader>
          <CardTitle>Visit us</CardTitle>
          <CardDescription>
            Here's our address. Feel free to visit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 ">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework" className="l leading-snug">
                  15/4,1/1 Mission Road 2nd lane, pittakotte.
                </Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="https://maps.app.goo.gl/g6q6ZWLdo93qjXPx6" target="blank">
            <Button className=" bg-accentsme hover:scale-105 duration-300">
              Maps
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddressCard;
