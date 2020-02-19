import React, { useState, useEffect } from "react";
import { getStory } from "../services/hackerNews";

export const Story = ({ storyId }) => {
  // const [story, setStory] = useState({});

  // useEffect(() => {
  //   getStory(storyId).then(res => res && res.url && setStory(res));
  // }, []);
  return <p>I am a Story {JSON.stringify(storyId)} </p>;
};
