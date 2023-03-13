import React, { useState } from "react";
import SelectInputDiv from "../components/SelectInputDiv";
import SelectInput from "../components/SelectInput";
import FrameImg from "../img/Frame.svg";
import DateInput from "../components/DateInput";
import UserImg from "../img/user.svg";
import ClassImg from "../img/class.svg";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../redux/book/actions";

const Form = () => {
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.books);
  const [formData, setFormData] = useState({
    desFrom: "",
    desTo: "",
    journeyDate: "",
    guests: "",
    classType: "",
  });
  const { desFrom, desTo, journeyDate, guests, classType } = formData;
  //Format date
  const date = new Date(journeyDate);
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear().toString().substr(-2)}`;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (desFrom === desTo) {
      alert("Destination from & destination to can't same!");
      return false;
    } else if (bookingData.length === 3) {
      alert("You can't book more than three tickets!");
      return false;
    }
    dispatch(bookFlight(desFrom, desTo, formattedDate, guests, classType));
  };
  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
          {/* <!-- From --> */}
          <SelectInputDiv title="Destination From" icon={FrameImg}>
            <SelectInput
              onChange={(e) => {
                setFormData({ ...formData, desFrom: e.target.value });
              }}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Saidpur</option>
              <option>Cox's Bazar</option>
            </SelectInput>
          </SelectInputDiv>

          {/* <!-- To --> */}
          <SelectInputDiv title="Destination To" icon={FrameImg}>
            <SelectInput
              onChange={(e) => {
                setFormData({ ...formData, desTo: e.target.value });
              }}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Saidpur</option>
              <option>Cox's Bazar</option>
            </SelectInput>
          </SelectInputDiv>

          {/* <!-- Date --> */}
          <div className="des-from">
            <p>Journey Date</p>
            <DateInput
              onChange={(e) => {
                setFormData({ ...formData, journeyDate: e.target.value });
              }}
            />
          </div>

          {/* <!-- Guests --> */}
          <SelectInputDiv title="Guests" icon={UserImg}>
            <SelectInput
              onChange={(e) => {
                setFormData({ ...formData, guests: e.target.value });
              }}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
            </SelectInput>
          </SelectInputDiv>

          {/* <!-- class --> */}
          <SelectInputDiv
            title="className"
            icon={ClassImg}
            className="!border-r-0"
          >
            <SelectInput
              onChange={(e) => {
                setFormData({ ...formData, classType: e.target.value });
              }}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Business</option>
              <option>Economy</option>
            </SelectInput>
          </SelectInputDiv>
          <Button>Book</Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
