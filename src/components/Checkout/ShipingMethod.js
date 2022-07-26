import React from "react";
import Input from "../commons/Input";

export default function ShipingMethod() {
  return (
    <div className="shiping-method">
      <div className="shiping-method__shiping-info">
        <h5>2. Shipping Method</h5>
        <Input className = "wrapper" input= {{type: "radio", id: "standard", name: "shipingMethod", defaultChecked: "checked"}} label = "Standard Shipping (4-8 business days via USPS) FREE"/>
        <Input className = "wrapper" input= {{type: "radio", id: "express", name: "shipingMethod"}} label = "Express Delivery (2-5 business days via USPS) $17.95"/>
        <Input className = "wrapper" input= {{type: "radio", id: "nextDay", name: "shipingMethod"}} label = "Next Day Delivery (Next business days via FedEx) $53.61"/>
      </div>
    </div>
  )
}
