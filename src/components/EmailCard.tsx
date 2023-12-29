"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { sendEmail } from "../../public/sendEmail";
import { Button } from "./ui/button";

const handleButtonClick = () => {
  sendEmail();
};

const EmailCard = () => {
  return (
    <div className="w-[300px] hover:scale-110 duration-300">
      <Card className="w-[300px] h-[220px]">
        <CardHeader>
          <CardTitle>Email us</CardTitle>
          <CardDescription>Send us an Email anytime</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">sme@mail.com</Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="bg-accentsme mt-6 hover:scale-105 duration-300"
            onClick={handleButtonClick}
          >
            Send
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EmailCard;
