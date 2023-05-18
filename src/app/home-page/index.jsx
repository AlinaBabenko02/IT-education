import React from "react";
import { Link } from "react-router-dom";
import { Text, Button } from "../../ui";
import s from "./styles.module.css";

export const HomePage = () => (
  <div className={s.root}>
    <div className={s.header}>
      <Text color="black" size="h1" className={s.headerText}>
        Hi dear friend! My name is Kitty.
      </Text>
      <img src="cat.svg" alt="cat" />
    </div>

    <div className={s.block}>
      <img src="laptop.svg" alt="laptop" />
      <Text color="black" size="l">
        The modern world is built on technology. And it is thanks to programming
        that it has become so. All games, applications, sites and the Internet
        itself were created by programmers. And it all looks like magic!
      </Text>
    </div>

    <div className={s.blockJS}>
      <Text color="orange1" size="l">
        I'm clever cat-programmer and i want to share my knowleges with you! I
        suggest starting with &nbsp;
      </Text>
      <Text color="black" size="l" className={s.js}>
        JavaScript
      </Text>
    </div>
    <Text color="black" size="l" className={s.blockJS}>
      JS is one of the most popular programming languages. With it, you can do
      anything. And I want to teach you the basics of this language. If you are
      interested then follow me!
    </Text>
    <Link to="/trip" style={{ margin: "auto" }}>
      <Button className={s.rootButton}>Start learning Trip</Button>
    </Link>
  </div>
);
