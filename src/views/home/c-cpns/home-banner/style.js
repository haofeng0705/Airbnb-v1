import styled from "styled-components";
// import coverImg from "@/assets/img/cover_01.jpeg"
// vite 引入静态资源的方式, 不支持 require
const imgUrl = new URL('@/assets/img/cover_01.jpeg', import.meta.url).href


export const BannerWrapper = styled.div`
  height: 529px;
  background: url(${imgUrl}) center/cover;
`
