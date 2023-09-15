import { Box, Stack } from "@mui/material";
import React from "react";
// import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  // console.log(videos);
  return (
    <>
      <Stack flexWrap="wrap" direction="row" justifyContent="start" gap={2}>
        {videos.map((item, index) => {
          return (
            <Box key={index}>
              {item.id.videoId && <VideoCard video={item} />}
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default Videos;
