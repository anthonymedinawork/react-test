import React from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

/**
 * Start:
 * - Fork the repo
 * - Read and complete the objectives
 * - Send the forked repo link to whoever provided you with the assessment
 *
 * Objective:
 * - Create a form that includes the following inputs:
 *    * message, author and a submit button
 * - Once the user clicks on the submit button, it will
 *   add the message to the end of the current list
 *
 * BONUS:
 * - Match styling of the current components
 * - Add validation to prevent user from submitting a form without
 *   a name or author
 *
 * Additional Information:
 * - Attack it however you want, e.g., use Formik or any other npm package
 */
// Functional component
const Message = (props) => {
  return (
    <div className="message-container">
      <p>"{props.text}"</p>
      <div className="details-container">
        <small>
          Sent by <b>{props.sentBy}</b>
        </small>
      </div>
    </div>
  );
};

// Main App component
// renders a list of Messages using data from messages.json
const App = (props) => {
  return (
    <div>
      <h2>Message List</h2>
      {props.messages.map((message, i) => (
        <Message
          key={`message-${i}`}
          text={message.text}
          sentBy={message.sentBy}
        />
      ))}
    </div>
  );
};

render(<App messages={data.messages} />, document.getElementById("root"));
