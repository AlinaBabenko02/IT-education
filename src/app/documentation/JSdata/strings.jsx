import React from "react";
import { Text } from "../../../ui";

export const StringsBody = () => (
  <>
    <div>
      var len = abc.length;
      <Text size="s" color="green2">
        {"// string length"}
      </Text>
    </div>
    <div>
      abc.indexOf("lmno");
      <Text size="s" color="green2">
        {"// find substring, -1 if doesn't contain "}
      </Text>
    </div>
    <div>
      abc.lastIndexOf("lmno");
      <Text size="s" color="green2">
        {"// last occurance"}
      </Text>
    </div>
    <div>
      abc.slice(3, 6);
      <Text size="s" color="green2">
        {"// cuts out def, negative values count from behind"}
      </Text>
    </div>
    <div>
      abc.replace("abc","123");
      <Text size="s" color="green2">
        {"// find and replace, takes regular expressions"}
      </Text>
    </div>
    <div>
      abc.toUpperCase();
      <Text size="s" color="green2">
        {"// convert to upper case"}
      </Text>
    </div>
    <div>
      abc.toLowerCase();
      <Text size="s" color="green2">
        {"// convert to lower case"}
      </Text>
    </div>
    <div>
      abc.concat(" ", str2);
      <Text size="s" color="green2">
        {"// abc + ' '' + str2"}
      </Text>
    </div>
    <div>
      abc.charAt(2);
      <Text size="s" color="green2">
        {"// last // character at index: 'c'"}
      </Text>
    </div>
    <div>
      abc[2];
      <Text size="s" color="green2">
        {"// unsafe, abc[2] = 'C' doesn't work"}
      </Text>
    </div>
    <div>
      abc.charCodeAt(2);
      <Text size="s" color="green2">
        {"// character code at index: 'c' -> 99"}
      </Text>
    </div>
    <div>
      abc.split(",");
      <Text size="s" color="green2">
        {"// splitting a string on commas gives an array"}
      </Text>
    </div>
    <div>
      abc.split("");
      <Text size="s" color="green2">
        {"// splitting on characterse"}
      </Text>
    </div>
    <div>
      128.toString(16);
      <Text size="s" color="green2">
        {"// number to hex(16), octal (8) or binary "}
      </Text>
    </div>
  </>
);
