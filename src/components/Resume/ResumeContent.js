import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>

      {
        props?.title == 'TATA STEEL, Jamshedpur' &&
        <a href="https://www.tatasteel.com/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
          TATA STEEL WEBSITE
        </a>
      }
    </div>
  );
}

export default ResumeContent;
