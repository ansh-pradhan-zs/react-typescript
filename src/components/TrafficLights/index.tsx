import { useEffect, useState } from "react";
import styles from "./trafficLights.module.css";

enum LightStates {
  red = "red",
  yellow = "yellow",
  green = "green",
}

const TrafficLights = () => {
  const [activeLight, setActiveLight] = useState<LightStates>(LightStates.red);
  const [timeoutDuration, setTimeoutDuration] = useState<number>(0);

  //   useEffect(() => {
  //     setActiveLight(LightStates.red);
  //     setTimeoutDuration(5000);
  //   }, []);

  //   useEffect(() => {
  //     const timeoutId = setTimeout(() => {
  //       if (timeoutDuration === 5000) {
  //         setActiveLight(LightStates.yellow);
  //         setTimeoutDuration(2000);
  //       } else if (timeoutDuration === 2000) {
  //         setActiveLight(LightStates.green);
  //         setTimeoutDuration(3000);
  //       } else if (timeoutDuration === 3000) {
  //         setActiveLight(LightStates.red);
  //         setTimeoutDuration(5000);
  //       }
  //     }, timeoutDuration);

  //     return () => clearTimeout(timeoutId);
  //   }, [activeLight, timeoutDuration]);

  // ? this is using settimeout

  // setTimeout(() => {
  //   setTimeoutDuration(5000);
  //   if (timeoutDuration === 5000) {
  //     setActiveLight(LightStates.yellow);
  //     setTimeoutDuration(2000);
  //   } else if (timeoutDuration === 2000) {
  //     setActiveLight(LightStates.green);
  //     setTimeoutDuration(3000);
  //   } else if (timeoutDuration === 3000) {
  //     setActiveLight(LightStates.red);
  //     setTimeoutDuration(5000); // ? this is looping condition
  //   }
  // }, timeoutDuration);

  const intervalId = setInterval(() => {
    setTimeoutDuration(5000);
    if (timeoutDuration === 5000) {
      setActiveLight(LightStates.yellow);
      setTimeoutDuration(2000);
    } else if (timeoutDuration === 2000) {
      setActiveLight(LightStates.green);
      setTimeoutDuration(3000);
    } else if (timeoutDuration === 3000) {
      setActiveLight(LightStates.red);
      setTimeoutDuration(5000); // ? this is looping condition
    }
    clearInterval(intervalId);
  }, timeoutDuration);

  return (
    <main className={styles.main_container}>
      <div className={styles.lights_container}>
        <div
          className={`${styles.red} ${
            activeLight === LightStates.red ? "" : styles.opacity
          }`}
        ></div>
        <div
          className={`${styles.yellow} ${
            activeLight === LightStates.yellow ? "" : styles.opacity
          }`}
        ></div>
        <div
          className={`${styles.green} ${
            activeLight === LightStates.green ? "" : styles.opacity
          }`}
        ></div>
      </div>
    </main>
  );
};

export default TrafficLights;
