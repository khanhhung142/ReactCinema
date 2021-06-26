import React, { useState } from "react";
import { Modal  } from "reactstrap";
export default function PopupVideo({ trailer }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  return (
    <div>
      <div className="play-button" onClick={toggle}>
        <i class="fa fa-play"></i>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg" >
        <div className="videoContainer">
          <iframe
            src={`${trailer}?autoplay=1`} // Lập tức khởi chiếu video khi được kích hoạt
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}
