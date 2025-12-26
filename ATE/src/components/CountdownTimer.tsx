import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-primary font-bold px-4 py-2 bg-primary/10 rounded-lg">Event Started</div>;
  }

  return (
    <div className="flex gap-2">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center bg-background/80 backdrop-blur-sm rounded-lg p-2 min-w-[50px] md:min-w-[60px] border border-border/50 shadow-sm">
          <span className="text-lg md:text-xl font-bold text-primary font-mono">
            {value.toString().padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase text-muted-foreground tracking-wider">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;