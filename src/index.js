import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import sdata from "./sdata";

// console.log(sdata[0].sname);

ReactDOM.render(
  <>
    <h1 className="heading_style"> List of top 5 Netflix Series in 2024</h1>
    {sdata.map((val, index) => {
      console.log(index);
      return (
        <Card
        key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
      );
    })}
    {/* <Card
      imgsrc={sdata[0].imgsrc}
      title={sdata[0].title}
      sname={sdata[0].sname}
      link={sdata[0].link}
    />

    <Card
      imgsrc={sdata[1].imgsrc}
      title={sdata[1].title}
      sname={sdata[1].sname}
      link={sdata[1].link}
    />

    <Card
      imgsrc={sdata[2].imgsrc}
      title={sdata[2].title}
      sname={sdata[2].sname}
      link={sdata[2].link}
    />

    <Card
      imgsrc={sdata[3].imgsrc}
      title={sdata[3].title}
      sname={sdata[3].sname}
      link={sdata[3].link}
    />

    <Card
      imgsrc={sdata[4].imgsrc}
      title={sdata[4].title}
      sname={sdata[4].sname}
      link={sdata[4].link}
    /> */}
  </>,
  document.getElementById("root")
);
