"use client";

import React, { useState, useEffect } from "react";
interface DotLottiePlayerProps {
  src?: string;
  style?: React.CSSProperties;
}

const DotLottiePlayer: React.FC<DotLottiePlayerProps> = ({
  src = "https://cdn.prod.website-files.com/65030bfd09557ada51fe30e2/6523f62b062f504545a79ef6_lnivztg5.lottie",
  style = {
    width: "auto",
    height: "300px",
  },
}) => {
  useEffect(() => {
    import("@aarsteinmedia/dotlottie-player");
  }, []);

  return (
    <dotlottie-player
      class="your-class-name"
      src={src}
      autoplay=""
      loop=""
      style={style}
    />
  );
};

export default DotLottiePlayer;
