import React, { useState } from "react";

function NoteApp() {
  const [fontName, setFontName] = useState("Arial");
  const [fontSize, setFontSize] = useState("16px"); // Default to 16px
  const [linkUrl, setLinkUrl] = useState("");
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
  ];

  const handleFontNameChange = (event) => {
    setFontName(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleLinkButtonClick = () => {
    const userLink = prompt("Enter a URL");
    if (userLink) {
      setLinkUrl(userLink);
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const textStyle = {
    fontFamily: fontName,
    fontSize: fontSize,
    fontWeight: isBold ? "bold" : "normal",
    fontStyle: isItalic ? "italic" : "normal",
    textDecoration: isUnderline ? "underline" : "none",
  };

  var csrfToken = window.Laravel.csrfToken;
  var user = JSON.stringify(window.Laravel.user);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-zinc-950">
      <div className="container mx-auto py-5">
        <div className="bg-white mx-5 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Notes
              </a>
            </h1>
            <div className="space-x-4">
              <a
                href="/history"
                id="createLink"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md"
              >
                Notes
              </a>
              <button
                id="bold"
                className={`bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md ${
                  isBold ? "bg-blue-700" : ""
                }`}
                onClick={toggleBold}
              >
                <b>B</b>
              </button>
              <button
                id="italic"
                className={`bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md ${
                  isItalic ? "bg-blue-700" : ""
                }`}
                onClick={toggleItalic}
              >
                <i>I</i>
              </button>
              <button
                id="underline"
                className={`bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md ${
                  isUnderline ? "bg-blue-700" : ""
                }`}
                onClick={toggleUnderline}
              >
                <u>U</u>
              </button>
            </div>
          </div>
          <div className="mb-4">
            <select
              id="fontName"
              className="border border-gray-300 p-2 rounded-md"
              value={fontName}
              onChange={handleFontNameChange}
            >
              {fontList.map((font, index) => (
                <option key={index} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <select
              id="fontSize"
              className="border border-gray-300 p-2 rounded-md"
              value={fontSize}
              onChange={handleFontSizeChange}
            >
              {fontList
                .filter((font) => font.endsWith("px"))
                .map((font, index) => (
                  <option key={index} value={font}>
                    {font}
                  </option>
                ))}
            </select>
          </div>
          <form action="/note/save" method="POST">
            <input type="hidden" name="_token" value={csrfToken} />
            <input type="hidden" name="user" value={user} />
            <div className="mb-4">
                <lable for="title">Title</lable>
              <input
                type="text"
                name="title"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
                <label for="description">Description</label>
              <textarea
                title="Note Editor"
                id="text-input"
                name="description"
                className="border border-gray-300 p-2 rounded-md w-full h-72"
                value={text}
                onChange={handleTextChange}
                style={textStyle}
              ></textarea>
            </div>
            {linkUrl && (
              <div className="mb-4">
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {linkUrl}
                </a>
              </div>
            )}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NoteApp;
