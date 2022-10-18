import React from "react";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

const Main = () => {
  const [userInput, setUserInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container h-screen flex justify-center items-center ">
      <div className="text-center">
        <h1 className="text-2xl font-medium mb-4">
          The Simple
          <span className="text-yellow-400 span"> URL Shortener</span>
        </h1>
        <div>
          <input
            type="text"
            autocomplete="off"
            placeholder="Enter the link"
            name="text"
            className="input m-4 ml-10"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <button
            className="ml-6"
            onClick={() => {
              fetchData();
            }}
          >
            {" "}
            Submit URL
          </button>
          <div className="mt-5 ml-5">
            {shortenedLink}
            <CopyToClipboard text={shortenedLink}>
              <button className="copy ml-3">Copy URL to Clipboard</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
