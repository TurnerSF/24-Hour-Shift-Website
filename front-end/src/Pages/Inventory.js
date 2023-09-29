import React, { useState } from "react";
import pic from "../pic.jpg";
import ClothingPopup from "./ClothingPopup";

function Inventory() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [details, setDetails] = useState({
    itemName: "",
    title: "",
    price: "",
    imageSrc: "",
  });

  const handleCardClick = (e) => {
    const card = e.currentTarget;
    const itemName = card.querySelector(".card-title").innerText;
    const title = card.querySelector(".card-text:nth-child(2)").innerText;
    const price = card.querySelector(".card-text:nth-child(3)").innerText;
    const imageSrc = card.querySelector(".card-img-top").getAttribute("src");

    setDetails({
      itemName,
      title,
      price,
      imageSrc,
    });
    setButtonPopup(true); // Open the popup
  };

  return (
    <div className="container">
      <div className="row p-4 mt-4">
        <div className="col-3 mb-5">
          <div
            className="card border-0"
            style={{ width: "16rem" }}
            onClick={handleCardClick}
          >
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Tee
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0" style={{ width: "16rem" }} onClick={handleCardClick}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Jacket
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0" style={{ width: "16rem" }} onClick={handleCardClick}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Long-sleeve
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0" style={{ width: "16rem" }} onClick={handleCardClick}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Shorts
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
        <div className="col-3 mb-5">
          <div className="card border-0" style={{ width: "16rem" }} onClick={handleCardClick}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Tee
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0" style={{ width: "16rem" }} onClick={handleCardClick}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Tee
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0" style={{ width: "16rem" }} onClick={handleCardClick}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Tee
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0" style={{ width: "16rem" }} onClick={handleCardClick}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Tee
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0" style={{ width: "16rem" }} onClick={handleCardClick}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Tee
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0" style={{ width: "16rem" }} onClick={handleCardClick}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Tee
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0" style={{ width: "16rem" }} onClick={handleCardClick}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Tee
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0" style={{ width: "16rem" }} onClick={handleCardClick}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title card border-0 card-font-title">
                24 Logo Tee
              </h5>
              <p class="card-text card-font-desciption">description</p>
              <p class="card-text card-font-desciption">Price</p>
            </div>
          </div>
        </div>
      </div>
      <ClothingPopup show={buttonPopup} setShow={setButtonPopup} details={details}/>
    </div>
  );
}

export default Inventory;
