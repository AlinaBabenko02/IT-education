import React from "react";
import { Text } from "../../../ui";
import s from "../styles.module.css";

export const ArraysBody = () => (
  <>
    <div>var dogs = ["Bulldog", "Beagle", "Labrador"];</div>
    <div>var dogs = new Array("Bulldog", "Beagle", "Labrador");</div>
    <div>alert(dogs[1]);</div>
    <div> dogs[0] = "Bull Terier";</div>
    <Text size="m" color="green1" className={s.blockName}>
      Methods
    </Text>
    <div>
      dogs.toString();
      <Text size="s" color="green2">
        {"// convert to string: results 'Bulldog,Beagle,Labrador'"}
      </Text>
    </div>
    <div>
      dogs.join(" * ");
      <Text size="s" color="green2">
        {"// join: 'Bulldog * Beagle * Labrador'"}
      </Text>
    </div>
    <div>
      dogs.pop();
      <Text size="s" color="green2">
        {"// remove last element"}
      </Text>
    </div>
    <div>
      dogs.push("Chihuahua");
      <Text size="s" color="green2">
        {"// string length"}
      </Text>
    </div>
    <div>
      dogs[dogs.length] = "Chihuahua";
      <Text size="s" color="green2">
        {"// the same as push"}
      </Text>
    </div>
    <div>
      dogs.shift();
      <Text size="s" color="green2">
        {"// remove first element"}
      </Text>
    </div>
    <div>
      dogs.unshift("Chihuahua");
      <Text size="s" color="green2">
        {"// add new element to the beginning"}
      </Text>
    </div>
    <div>
      delete dogs[0];
      <Text size="s" color="green2">
        {"// change element to undefined (not recommended)"}
      </Text>
    </div>
    <div>
      dogs.splice(2, 0, "Pug", "Boxer");
      <Text size="s" color="green2">
        {"// add elements (where, how many to remove, element list)"}
      </Text>
    </div>
    <div>
      var animals = dogs.concat(cats,birds);
      <Text size="s" color="green2">
        {"// join two arrays (dogs followed by cats and birds)"}
      </Text>
    </div>
    <div>
      dogs.slice(1,4);
      <Text size="s" color="green2">
        {"// elements from [1] to [4-1]"}
      </Text>
    </div>
    <div>
      dogs.sort();
      <Text size="s" color="green2">
        {"// sort string alphabetically"}
      </Text>
    </div>
    <div>
      dogs.reverse();
      <Text size="s" color="green2">
        {"// sort string in descending order"}
      </Text>
    </div>
    <div>
      x.sort(function(a, b){"{"}return a - b{"}"});
      <Text size="s" color="green2">
        {"// numeric sort"}
      </Text>
    </div>
  </>
);
