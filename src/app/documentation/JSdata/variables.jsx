import React from "react";
import { Text } from "../../../ui";
import s from "../styles.module.css";

export const VariablesBody = () => (
  <>
    <div>
      var a;
      <Text size="s" color="green2">
        {"// variable"}
      </Text>
    </div>
    <div>
      var b = "init";
      <Text size="s" color="green2">
        {"// string"}
      </Text>
    </div>
    <div>
      var c = "Hi" + " " + "Joe";
      <Text size="s" color="green2">
        {"// = 'Hi Joe'"}
      </Text>
    </div>
    <div>
      var d = 1 + 2 + "3";
      <Text size="s" color="green2">
        {"// = '33'"}
      </Text>
    </div>
    <div>
      var e = [2,3,5,8];
      <Text size="s" color="green2">
        {"// array"}
      </Text>
    </div>
    <div>
      var f = false;
      <Text size="s" color="green2">
        {"// boolean"}
      </Text>
    </div>
    <div>
      var g = /()/;
      <Text size="s" color="green2">
        {"// RegEx"}
      </Text>
    </div>
    <div>
      var h = function(){};
      <Text size="s" color="green2">
        {"// function object"}
      </Text>
    </div>
    <div>
      const PI = 3.14;
      <Text size="s" color="green2">
        {"// constant"}
      </Text>
    </div>
    <div>
      var a = 1, b = 2, c = a + b;
      <Text size="s" color="green2">
        {"// one line"}
      </Text>
    </div>
    <div>
      let z = 'zzz';
      <Text size="s" color="green2">
        {"// block scope local variable"}
      </Text>
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Operators
    </Text>
    <div>a = b + c - d;</div>
    <div>a = b * (c / d); </div>
    <div>x = 100 % 48;</div>
    <div>a++; b--; </div>
    <Text size="m" color="green1" className={s.blockName}>
      Bitwise operators
    </Text>
    <div>& AND</div>
    <div>| OR</div>
    <div>~ NOT</div>
    <div>^ XOR </div>
    <div>{"<<	left shift"}</div>
    <div>{">>	right shift "}</div>
    <div>{">>>	zero fill right shift"}</div>
    <Text size="m" color="green1" className={s.blockName}>
      Arithmetic
    </Text>
    <div>a * (b + c) </div>
    <div>person.age</div>
    <div>person[age]</div>
    <div>!(a == b) </div>
    <div>a != b </div>
    <div>typeof a</div>
    <div>{"x << 2  x >> 3"}</div>
    <div>a = b</div>
    <div>a == b </div>
    <div>a != b</div>
    <div>a === b </div>
    <div>a !== b</div>
    <div>{"a < b   a > b"}</div>
    <div>a += b</div>
    <div>a && b </div>
    <div>a || b </div>
  </>
);
