import { useState, useEffect } from "react";
import Box from "./Box";

function Home() {
  const launchDate = new Date("10/25/2025 17:00:00");
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = launchDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      let values = { days, hours, minutes, seconds };
      values = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, value < 10 ? "0" + value : value])
      );

      return values;
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [remaining, setRemaining] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="main timer">
      <section className="timer__container">
        <h1 className="timer__title">We're launching soon</h1>
        <ul className="timer__body">
          <Box value={remaining.days} type="Days" />
          <Box value={remaining.hours} type="hours" />
          <Box value={remaining.minutes} type="minutes" />
          <Box value={remaining.seconds} type="seconds" />
        </ul>
      </section>
    </main>
  );
}

export default Home;

// 34
