import React, { memo, useEffect } from "react";
import hyRequest from "@/services";
import { useState } from "react";

const Home = memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState({});

  // 网络请求的代码
  useEffect(async () => {
    setHighScore(await hyRequest.get({ url: "/home/highscore" }));
  }, []);

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {/* 可选链 */}
        {highScore.list?.map((item) => {
          return <li key={item.id}>${item.price}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;
