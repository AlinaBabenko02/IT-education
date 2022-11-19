import React from "react";
import { Text } from "../../../ui";
import s from "../styles.module.css";

export const DataTypesBody = () => (
  <>
    <div>
      var age = 18;
      <Text size="s" color="green2">
        {"// number"}
      </Text>
    </div>
    <div>
      var name = "Jane";
      <Text size="s" color="green2">
        {"// string"}
      </Text>
    </div>
    <div>
      var name ={' {first:"Jane", last:"Doe"};'}
      <Text size="s" color="green2">
        {"// object"}
      </Text>
    </div>
    <div>
      var truth = false;
      <Text size="s" color="green2">
        {"// boolean"}
      </Text>
    </div>
    <div>
      var sheets = ["HTML","CSS","JS"];
      <Text size="s" color="green2">
        {"// array"}
      </Text>
    </div>
    <div>
      var a; typeof a;
      <Text size="s" color="green2">
        {"// undefined"}
      </Text>
    </div>
    <div>
      var a = null;
      <Text size="s" color="green2">
        {"// null"}
      </Text>
    </div>

    <Text size="m" color="green1" className={s.blockName}>
      Objects
    </Text>
    <div>
      var student = {"{"}
      <br />
      firstName:"Jane",
      <br /> lastName:"Doe",
      <br />
      age:18, <br /> height:170, <br />
      fullName : function() {"{"} <br />
      return this.firstName + " " + this.lastName; <br />
      {"}"} <br />
      {"}"};
    </div>
    <div>student.age = 19; </div>
    <div>student[age]++; </div>
    <div>name = student.fullName();</div>
  </>
);
