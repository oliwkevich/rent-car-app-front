import React from "react";
import "../../styles/FindCarForm.css";
import { Form, FormGroup } from "reactstrap";

export const FindCarForm = () => {
  return (
    <form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From adress" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="To adress" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input
            type="time"
            className="journey__time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>
        <FormGroup className="select__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </form>
  );
};
