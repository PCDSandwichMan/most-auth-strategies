import React from "react";
import "./oAuthButton.scss";

interface IOAuthButtonProps {
  buttonData: {
    label: string;
    img: string;
    bgColor: string;
    authLink: string;
  };
  handleAuth: (authLink: string) => void;
}

export const OAuthButton: React.FC<IOAuthButtonProps> = ({
  buttonData: { label, img, bgColor, authLink },
  handleAuth,
}) => {
  return (
    <div
      onClick={() => handleAuth(authLink)}
      style={{ background: bgColor }}
      className="button"
    >
      <div className="button__img">
        <img src={img} alt="company logo" />
      </div>
      <h4>{label}</h4>
    </div>
  );
};
