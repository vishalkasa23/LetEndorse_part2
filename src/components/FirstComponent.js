import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyForm.css";
const FirstComponent = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const [offerData, setOfferData] = useState({
    offerCode: "",
    offerTitle: "",
    offerDescription: "",
    offerType: "",
    discount: "",
    applicableOn: "",
    minimumoffer: "",
    startDate: "",
    expirationDate: "",
    customerCount: "",
    maxdiscount: "",
    OfferusePerCustomer: "",
    usagepercustomer: "",
    totalcustomer: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOfferData((prevOfferData) => ({
      ...prevOfferData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!offerData.offerCode) {
      alert("Please enter an offer code.");
      return;
    }

    if (!offerData.offerTitle) {
      alert("Please enter an offer title.");
      return;
    }

    if (!offerData.offerDescription) {
      alert("Please enter an offer description.");
      return;
    }

    if (!offerData.offerType) {
      alert("Please select an offer type.");
      return;
    }

    if (offerData.offerType === "percentage" && !offerData.discount) {
      alert("Please enter a discount percentage.");
      return;
    }

    if (!offerData.applicableOn) {
      alert("Please select a target for the offer.");
      return;
    }
    if (!offerData.minimumoffer) {
      alert("Please select minimum offer.");
      return;
    }
    if (Number(offerData.minimumoffer) < 0) {
      alert("Minimum order can't be less than 0");
      return;
    }
    if (offerData.expirationDate < offerData.startDate) {
      alert("expiration can't be before start date");
      return;
    }
    localStorage.setItem("offerData", JSON.stringify(offerData));
    console.log(offerData);
    setOfferData({
      offerCode: "",
      offerTitle: "",
      offerDescription: "",
      offerType: "",
      discount: "",
      applicableOn: "",
      minimumoffer: "",
      startDate: "",
      expirationDate: "",
      customerCount: "",
      maxdiscount: "",
      OfferusePerCustomer: "",
      usagepercustomer: "",
      totalcustomer: ""
    });
    navigate("/second", { state: { offerData } });
  };  
  const handleClick = () => {
    setData("Data from First Component");
    navigate("/second", { state: { data } });
  };

  return (
    <div>
        <form onSubmit={handleSubmit} className="form-container">
      <h2>Create Offer</h2>
      <div className="form-field">
        <label>Offer Code:</label>
        <input
          type="text"
          name="offerCode"
          maxLength={8}
          value={offerData.offerCode}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label>Offer Title:</label>
        <input
          type="text"
          name="offerTitle"
          maxLength={60}
          value={offerData.offerTitle}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label>Offer Description:</label>
        <input
          type="text"
          name="offerDescription"
          maxLength={140}
          value={offerData.offerDescription}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label>Offer Type:</label>
        <select
          name="offerType"
          value={offerData.offerType}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="percentage">Percentage Discount</option>
          <option value="flat">Flat Discount</option>
          <option value="gift">Free Gift</option>
        </select>
      </div>
      {offerData.offerType === "percentage" && (
        <div className="form-field">
          <label>Discount %:</label>
          <input
            type="number"
            name="discount"
            value={offerData.discount}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="form-field">
        <label>Applicable On:</label>
        <select
          name="applicableOn"
          value={offerData.applicableOn}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="all">All orders</option>
          <option value="above">Orders above certain amount</option>
          <option value="select">Select services</option>
        </select>
      </div>
      <div className="form-field">
        <label>Minimum Order value:</label>
        <input
          type="number"
          name="minimumoffer"
          maxLength={60}
          value={offerData.minimumoffer}
          onChange={handleChange}
        />
      </div>
      {offerData.offerType === "percentage" && (
        <div className="form-field">
          <label>Maximum Discount:</label>
          <input
            type="number"
            name="maxdiscount"
            value={offerData.maxdiscount}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="form-field">
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={offerData.startDate}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-field">
        <label>
          Expiration Date:
          <input
            type="date"
            name="expirationDate"
            value={offerData.expirationDate}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-field">
        <label>Number of customers:</label>
        <div className="radio-switch">
          <label>
            <input
              type="radio"
              name="customerCount"
              value="limited"
              checked={offerData.customerCount === "limited"}
              onChange={handleChange}
            />
            <span>Limited</span>
          </label>
          <label>
            <input
              type="radio"
              name="customerCount"
              value="unlimited"
              checked={offerData.customerCount === "unlimited"}
              onChange={handleChange}
            />
            <span>Unlimited</span>
          </label>
        </div>
      </div>
      <div className="form-field">
        <label>Offer use Per Customer:</label>
        <div className="radio-switch">
          <label>
            <input
              type="radio"
              name="OfferusePerCustomer"
              value="limited"
              checked={offerData.OfferusePerCustomer === "limited"}
              onChange={handleChange}
            />
            <span>Limited</span>
          </label>
          <label>
            <input
              type="radio"
              name="OfferusePerCustomer"
              value="unlimited"
              checked={offerData.OfferusePerCustomer === "unlimited"}
              onChange={handleChange}
            />
            <span>Unlimited</span>
          </label>
        </div>
      </div>
      {offerData.customerCount === "limited" && (
        <div className="form-field">
          <label>Total customers:</label>
          <input
            type="number"
            name="totalcustomer"
            value={offerData.totalcustomer}
            onChange={handleChange}
          />
        </div>
      )}
      {offerData.OfferusePerCustomer === "limited" && (
        <div className="form-field">
          <label>Usage per customer:</label>
          <input
            type="number"
            name="usagepercustomer"
            value={offerData.usagepercustomer}
            onChange={handleChange}
          />
        </div>
      )}

      <button type="submit" className="submit-btn">
        Create Offer
      </button>
    </form>
    </div>
  );
};

export default FirstComponent;
