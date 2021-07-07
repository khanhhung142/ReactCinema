import React from "react";
import ReactLoading from "react-loading";
export default function LoadingPage() {
  return (
    <div className="center-screen">
      <ReactLoading type={"bars"} color={"#fb4226"} height={100} width={100} />
    </div>
  );
}
