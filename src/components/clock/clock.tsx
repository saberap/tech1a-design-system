import { Dispatch, ForwardRefRenderFunction, useEffect, useState } from "react";

import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

type ClockType = "time" | "jalali" | "georgian";

interface BaseClockProps {
  currentDateTime: Date;
  type: ClockType;
}

export type ClockProps = BaseClockProps;

const Clock: ForwardRefRenderFunction<unknown, ClockProps> = (props, ref) => {
  const { type, currentDateTime } = props;

  const [activeInterval, setActiveInterval] =
    useState<NodeJS.Timer | null>(null);

  const insertedTime = +new Date(currentDateTime);
  const localTime = +Date.now();
  const timeDiff = insertedTime - localTime;

  const getCurrentTime = (type: ClockType) => {
    const timeElement = document.getElementById("time");
    const realTime = +Date.now() + timeDiff;
    const d = new Date(realTime);

    const s = d.getSeconds();
    const m = d.getMinutes();
    const h = d.getHours();

    if (timeElement) {
      let timeString = "";
      let time =
        ("0" + h).substr(-2) +
        ":" +
        ("0" + m).substr(-2) +
        ":" +
        ("0" + s).substr(-2);
      if (type === "time") timeString = time;

      if (type === "jalali") {
        timeString =
          dayjs(d).locale("fa").calendar("jalali").format("ddd D MMMM") +
          " - " +
          time;
      }

      if (type === "georgian") {
        timeString =
          dayjs(d).format("ddd D MMMM") +
          " - " +
          time;
      }

      timeElement.textContent = timeString;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getCurrentTime(type);
    }, 1000);
  }, []);

  return <span id="time"></span>;
};

export default Clock;
