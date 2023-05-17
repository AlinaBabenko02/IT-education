import React from "react";
import { Text } from "../../ui";
import s from "./styles.module.css";

export const ForParents = () => (
  <div className={s.root}>
    <img src="family.svg" alt="" width={250} />
    <Text size="h1" color="green1">
      Welcome, Parents!
    </Text>
    <Text size="m">
      We are excited to have you here on our site dedicated to teaching your
      children the programming language, Javascript. In this digital age, it is
      becoming increasingly important for children to learn coding skills that
      will help them in their future careers and everyday life.
      <br />
      Javascript is a popular and versatile programming language that is used to
      create dynamic websites, web applications, and games. With Javascript,
      your child can create fun and interactive projects, develop
      problem-solving skills, and enhance their logical thinking abilities.
      <br />
      Our program is designed to make learning Javascript easy and engaging for
      children. We use visual and interactive tools that allow children to learn
      at their own pace and have fun while doing it.
      <br />
      By learning Javascript, your child will develop skills that will benefit
      them not only in the field of computer science but in many other areas as
      well. Coding promotes critical thinking, problem-solving, and creativity,
      all of which are valuable skills that will serve them well in their
      academic and professional lives.
    </Text>
    <Text size="m" color="red1">
      We believe that every child has the potential to learn to code and unleash
      their creativity. We are here to support you and your child every step of
      the way on their coding journey. Thank you for choosing our program, and
      we look forward to working with you and your child.
    </Text>
  </div>
);
