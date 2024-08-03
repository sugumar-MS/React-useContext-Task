// Section.jsx

import React, { useState, useContext } from "react";
import { DataContext } from "./ContextData";

function Section() {
  const [Price1, SetPrice1] = useState(0);
  const [Price2, SetPrice2] = useState(0);
  const [Price3, SetPrice3] = useState(0);
  const [Price4, SetPrice4] = useState(0);
  const [Price5, SetPrice5] = useState(0);

  const { Data } = useContext(DataContext);

  if (!Data || Data.length === 0) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md col-sm col-lg border mt-5 d-flex justify-content-evenly gap-2 bg-info-subtle">
          {/* CARD-1 */}
          <div className="card mt-3 mb-3 p-3" style={{ width: "30rem", height: "43rem" }}>
            <img src={Data[0].image} className="border border-black card-img-top" alt="img-iphone9" style={{ height: "250px" }} />
            <hr />
            <span className="cardtitle">
              <b>{Data[0].title}</b>
            </span>
            <br />
            <span>
              <b>Description:</b>
              <br />
              {Data[0].description}
            </span>
            <br />
            <span>
              <b>Stock:</b> {Data[0].stock} nos
            </span>
            <hr />
            <div className="cardtext d-flex justify-content-between">
              <div className="p-2">Price: ${Data[0].price}</div>
              <div className="p-2">
                <label>Quantity: </label>
                <select onChange={(e) => SetPrice1(e.target.value * Data[0].price)} name="selectbutton" id="selectbutton">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="card-text">
              <div className="d-flex justify-content-between">
                <span>SUBTOTAL</span>
                <span>${Price1}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>
            </div>
            <hr />
            <div className="cardfooter d-flex justify-content-between">
              <span>TOTAL</span>
              <span>${Price1}</span>
            </div>
          </div>

          {/* CARD-2 */}
          <div className="card mt-3 mb-3 p-3" style={{ width: "30rem", height: "43rem" }}>
            <img src={Data[1].image} className="border border-black card-img-top" alt="img-iPhone X" style={{ height: "250px" }} />
            <hr />
            <span className="cardtitle">
              <b>{Data[1].title}</b>
            </span>
            <br />
            <span>
              <b>Description:</b>
              <br />
              {Data[1].description}
            </span>
            <br />
            <span>
              <b>Stock:</b> {Data[1].stock} nos
            </span>
            <hr />
            <div className="cardtext d-flex justify-content-between">
              <div className="p-2">Price: ${Data[1].price}</div>
              <div className="p-2">
                <label>Quantity: </label>
                <select onChange={(e) => SetPrice2(e.target.value * Data[1].price)}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="card-text">
              <div className="d-flex justify-content-between">
                <span>SUBTOTAL</span>
                <span>${Price2}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>
            </div>
            <hr />
            <div className="cardfooter d-flex justify-content-between">
              <span>TOTAL</span>
              <span>${Price2}</span>
            </div>
          </div>
        </div>

        <div className="col border mt-2 d-flex justify-content-evenly gap-2 bg-success">
          {/* CARD-3 */}
          <div className="card mt-3 p-3" style={{ width: "30rem", height: "43rem" }}>
            <img src={Data[2].image} className="border border-black card-img-top" alt="img-Samsung Universe 9" style={{ height: "250px" }} />
            <hr />
            <span className="cardtitle">
              <b>{Data[2].title}</b>
            </span>
            <br />
            <span>
              <b>Description:</b>
              <br />
              {Data[2].description}
            </span>
            <br />
            <span>
              <b>Stock:</b> {Data[2].stock} nos
            </span>
            <hr />
            <div className="cardtext d-flex justify-content-between">
              <div className="p-2">Price: ${Data[2].price}</div>
              <div className="p-2">
                <label>Quantity:</label>
                <select onChange={(e) => SetPrice3(e.target.value * Data[2].price)}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="card-text">
              <div className="d-flex justify-content-between">
                <span>SUBTOTAL</span>
                <span>${Price3}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>
            </div>
            <hr />
            <div className="cardfooter d-flex justify-content-between">
              <span>TOTAL</span>
              <span>${Price3}</span>
            </div>
          </div>

          {/* CARD-4 */}
          <div className="card mt-3 p-3" style={{ width: "30rem", height: "43rem" }}>
            <img src={Data[3].image} className="border border-black card-img-top" alt="img-OPPOF19" style={{ height: "250px" }} />
            <hr />
            <span className="cardtitle">
              <b>{Data[3].title}</b>
            </span>
            <br />
            <span>
              <b>Description:</b>
              <br />
              {Data[3].description}
            </span>
            <br />
            <span>
              <b>Stock:</b> {Data[3].stock} nos
            </span>
            <hr />
            <div className="cardtext d-flex justify-content-between">
              <div className="p-2">Price: ${Data[3].price}</div>
              <div className="p-2">
                <label>Quantity:</label>
                <select onChange={(e) => SetPrice4(e.target.value * Data[3].price)}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="card-text">
              <div className="d-flex justify-content-between">
                <span>SUBTOTAL</span>
                <span>${Price4}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>
            </div>
            <hr />
            <div className="cardfooter d-flex justify-content-between">
              <span>TOTAL</span>
              <span>${Price4}</span>
            </div>
          </div>
        </div>

        <div className="col border mt-2 d-flex justify-content-evenly gap-2 bg-secondary">
          {/* CARD-5 */}
          <div className="card mt-3 p-3" style={{ width: "30rem", height: "43rem" }}>
            <img src={Data[4].image} className="border border-black card-img-top" alt="img-Huawei P30" style={{ height: "250px" }} />
            <hr />
            <span className="cardtitle">
              <b>{Data[4].title}</b>
            </span>
            <br />
            <span>
              <b>Description:</b>
              <br />
              {Data[4].description}
            </span>
            <br />
            <span>
              <b>Stock:</b> {Data[4].stock} nos
            </span>
            <hr />
            <div className="cardtext d-flex justify-content-between">
              <div className="p-2">Price: ${Data[4].price}</div>
              <div className="p-2">
                <label>Quantity:</label>
                <select onChange={(e) => SetPrice5(e.target.value * Data[4].price)}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="card-text">
              <div className="d-flex justify-content-between">
                <span>SUBTOTAL</span>
                <span>${Price5}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>
            </div>
            <hr />
            <div className="cardfooter d-flex justify-content-between">
              <span>TOTAL</span>
              <span>${Price5}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
