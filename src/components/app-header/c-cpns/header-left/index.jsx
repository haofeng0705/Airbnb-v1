import IconLogo from "@/assets/svg/icon_logo";
import React, { memo } from "react";
import { LeftWrapper } from "./style";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  function logoClickHandel() {
    navigate("/home");
  }
  return (
    <LeftWrapper>
      <div className="logo" onClick={logoClickHandel}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
