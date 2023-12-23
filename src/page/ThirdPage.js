import React from "react";
export default function ThirdPage(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.setCurrentPage("success");
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        name="form"
        className="d-flex flex-column align-items-center justify-content-center p-3 w-100"
      >
        <h3 className="mb-4">Confirm Details</h3>
        <div className="w-100 d-flex mb-2">
          <div className="d-flex flex-column me-1">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              id="date"
              className="p-1"
              value={props.appointmentData.selected_date}
              readOnly
            />
          </div>
          <div className="d-flex flex-column ms-1">
            <label htmlFor="time">Time</label>
            <input
              type="text"
              id="time"
              className="p-1"
              value={props.appointmentData.selected_time}
              readOnly
            />
          </div>
        </div>
        <div className="w-100 d-flex">
          <div className="d-flex flex-column me-1">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              className="p-1"
              value={props.appointmentData.first_name}
              readOnly
            />
          </div>
          <div className="d-flex flex-column ms-1">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              className="p-1"
              value={props.appointmentData.last_name}
              readOnly
            />
          </div>
        </div>
        <div className="w-100 d-flex flex-column mt-2">
          <label htmlFor="phonenumber">Contact Number</label>
          <input
            type="tel"
            id="phonenumber"
            className="p-1"
            placeholder="+91"
            value={props.appointmentData.phone_number}
            readOnly
          />
        </div>
        <div className="w-100 d-flex flex-column m-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            className="p-1"
            value={props.appointmentData.address}
            readOnly
          />
        </div>
        <div className="w-100 d-flex">
          <div className="d-flex flex-column me-1">
            <label htmlFor="address">City</label>
            <input
              type="text"
              id="city"
              className="p-1"
              value={props.appointmentData.city}
              readOnly
            />
          </div>
          <div className="d-flex flex-column ms-1">
            <label htmlFor="city">State</label>
            <input
              type="text"
              id="state"
              className="p-1"
              value={props.appointmentData.state}
              readOnly
            />
          </div>
        </div>
        <div className="w-100 d-flex flex-column m-2">
          <label htmlFor="appointmentfor">Appointment For</label>
          <input
            type="text"
            id="appointmentfor"
            className="p-1"
            value={props.appointmentData.appointment_For}
            readOnly
          />
        </div>
        <div className="m-2 d-flex justify-content-between w-100">
          <button
            type="button"
            className="btn btn-outline-dark"
            htmlFor="slotform"
            onClick={() => {
              props.setCurrentPage("secondpage");
            }}
          >
            Prev
          </button>
          <button type="submit" className="btn btn-outline-dark" htmlFor="form">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
