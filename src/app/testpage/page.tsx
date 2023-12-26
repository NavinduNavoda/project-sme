"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const ButtonWithTimer: React.FC = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes in seconds

  const handleClick = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setTimer(180);
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isButtonDisabled) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isButtonDisabled]);

  useEffect(() => {
    if (timer === 0) {
      setIsButtonDisabled(false);
    }
  }, [timer]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
    return formattedTime;
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        disabled={isButtonDisabled}
        className="bg-accentsme rounded-[2px] hover:bg-accentsmehover hover:scale-110 duration-300"
      >
        Resend OTP
      </Button>

      {isButtonDisabled && <p>Wait {formatTime(timer)} minutes</p>}
    </div>
  );
};

export default ButtonWithTimer;
