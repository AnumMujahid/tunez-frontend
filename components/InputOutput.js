import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ReactComponent as Music1 } from "../public/music1.svg";
import { ReactComponent as Music2 } from "../public/music2.svg";
import { ReactComponent as Music3 } from "../public/music3.svg";

const InputOutput = () => {
  const [textValue, setTextValue] = useState("");
  const [audioSrc, setAudioSrc] = useState("");
  const [textList, setTextList] = useState([]);
  const [audioList, setAudioList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const music = [
    { color: "bg-[#99EBAD]", image: <Music1 /> },
    { color: "bg-[#A2E5DE]", image: <Music2 /> },
    { color: "bg-[#FFD3D4]", image: <Music3 /> },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!textValue.length) {
      toast.error("Please enter description for music you want to generate.");
      return;
    }
    setIsLoading(true);
    const url = "https://anummujahid-tunez-backend.hf.space/generate_music";
    const data = {
      text: "Howdy!",
    };
    const jsonBody = JSON.stringify(data);
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      let response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: jsonBody,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.blob();
      setAudioSrc(URL.createObjectURL(data));
      setTextList([...textList, textValue]);
      setAudioList([...audioList, URL.createObjectURL(data)]);
      setTextValue("");
    } catch (error) {
      toast.error("An error occurred while generating music.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="inputoutput"
      className="container mx-auto px-4 py-20 bg-black flex flex-col items-center justify-center"
    >
      <h1 className="uppercase text-4xl font-black text-left text-white pb-10">
        Generate Music
      </h1>
      <div className="md:w-1/2 bg-white px-4 pb-4 pt-2 rounded-md">
        <h2 className="text-black text-base font-semibold mb-4">
          Describe Music
        </h2>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="Describe music you want to create ..."
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-md mr-2"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 text-sm rounded-md"
          >
            Generate
          </button>
        </form>
      </div>
      {isLoading && (
        <div className="w-10 h-10 border-t-4 border-b-4 border-white rounded-full animate-spin mt-8"></div>
      )}
      <div className="flex mt-20 justify-between items-center">
        <div>
          {audioList.length &&
            audioList.map((audio, index) => (
              <div
                key={`audio${index}`}
                className="flex items-center gap-4 mb-8"
              >
                <div
                  className={`w-20 h-20 flex items-center justify-center ${
                    index % 3 == 0
                      ? music[0].color
                      : index % 3 == 1
                      ? music[1].color
                      : music[2].color
                  } rounded-md`}
                >
                  {index % 3 == 0
                    ? music[0].image
                    : index % 3 == 1
                    ? music[1].image
                    : music[2].image}
                </div>
                <div>
                  <h2 className="text-white text-sm mb-2 ml-4">
                    {textList[index]}
                  </h2>
                  <audio controls className="bg-black">
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export { InputOutput };
