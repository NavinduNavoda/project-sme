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

const Contactcard = () => {
  return (
    <div className="w-[300px] hover:scale-110 duration-300">
      <Card className="w-[300px] h-[220px]">
        <CardHeader>
          <CardTitle>Call now</CardTitle>
          <CardDescription>Connect by Phone</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">+94 777041895</Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="tel: +94777041895">
            <Button className="bg-accentsme mt-6 hover:scale-105 duration-500">
              Call now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Contactcard;
