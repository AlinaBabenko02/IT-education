import React from "react";
import { Text } from "../../../ui";
import s from "../styles.module.css";

export const DatesBody = () => (
  <>
    <div>var d = new Date();</div>
    <div>Date("2017-06-23");</div>
    <div>Date("2017");</div>
    <div>Date("2017-06-23T12:00:00-09:45");</div>
    <div>Date("June 23 2017"); </div>
    <div>Date("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)");</div>
    <Text size="m" color="green1" className={s.blockName}>
      Get Times
    </Text>
    <div>getDate(); </div>
    <div>getDay(); </div>
    <div>getFullYear(); </div>
    <div>getHours();</div>
    <div>getMilliseconds();</div>
    <div>getMinutes(); </div>
    <div>getMonth(); </div>
    <div>getSeconds(); </div>
    <div>getTime(); </div>
    <Text size="m" color="green1" className={s.blockName}>
      Setting part of a date
    </Text>
    setDate(); setFullYear(); setHours(); setMilliseconds(); setMinutes();
    setMonth(); setSeconds(); setTime();
  </>
);
