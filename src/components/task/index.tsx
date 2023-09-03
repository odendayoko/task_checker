import React from "react";
import { Select } from "../select";
import "./style.css";

export const Task = () => {
  return (
    <div className="task" style={{ backgroundColor: "white" }}>
      <span className="task_date">2021-01-01</span>
      <div className="task_text_contents">
        <h3 className="task_title">サンプルタイトル</h3>
        <p className="task_sentence">サンプルの内容</p>
      </div>
      <div className="task_input_contents">
        <Select />
      </div>
    </div>
  );
};