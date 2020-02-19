import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hackerNews";
import { Story } from "../components/Story";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(res => setStoryIds(res));
  }, []);
  return storyIds.map(storyId => <Story storyId={storyId} key={storyId} />);
};
