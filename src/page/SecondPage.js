import React from "react";
export default function SecondPage(props) {
  let appointmentFor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function handleNext(event) {
    event.preventDefault();
    props.setCurrentPage("thirdpage");
  }
  return (
    <div>
      <form
        onSubmit={handleNext}
        name="detailsform"
        className="d-flex flex-column align-items-center justify-content-center p-3 w-100"
      >
        <h3 className="mb-4">Other Details</h3>
        <div className="w-100 d-flex">
          <div className="d-flex flex-column me-1">
            <label htmlFor="firstname">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="firstname"
              className="p-1"
              defaultValue={props.appointmentData.first_name}
              required
              onChange={(event) => {
                props.setAppointmentData({
                  ...props.appointmentData,
                  first_name: event.target.value,
                });
              }}
            />
          </div>
          <div className="d-flex flex-column ms-1">
            <label htmlFor="lastname">
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="lastname"
              className="p-1"
              defaultValue={props.appointmentData.last_name}
              required
              onChange={(event) => {
                props.setAppointmentData({
                  ...props.appointmentData,
                  last_name: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="w-100 d-flex flex-column mt-2">
          <label htmlFor="phonenumber">
            Contact Number <span className="text-danger">*</span>
          </label>
          <input
            type="tel"
            id="phonenumber"
            className="p-1"
            placeholder="+91"
            defaultValue={props.appointmentData.phone_number}
            required
            onChange={(event) => {
              props.setAppointmentData({
                ...props.appointmentData,
                phone_number: "+91"+event.target.value,
              });
            }}
          />
        </div>
        <div className="w-100 d-flex flex-column m-2">
          <label htmlFor="address">
            Address <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="address"
            className="p-1"
            defaultValue={props.appointmentData.address}
            required
            onChange={(event) => {
              props.setAppointmentData({
                ...props.appointmentData,
                address: event.target.value,
              });
            }}
          />
        </div>
        <div className="w-100 d-flex">
          <div className="d-flex flex-column me-1">
            <label htmlFor="address">
              City <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="city"
              className="p-1"
              defaultValue={props.appointmentData.city}
              required
              onChange={(event) => {
                props.setAppointmentData({
                  ...props.appointmentData,
                  city: event.target.value,
                });
              }}
            />
          </div>
          <div className="d-flex flex-column ms-1">
            <label htmlFor="city">
              State <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="state"
              className="p-1"
              defaultValue={props.appointmentData.state}
              required
              onChange={(event) => {
                props.setAppointmentData({
                  ...props.appointmentData,
                  state: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="w-100 d-flex flex-column m-2">
          <label htmlFor="appointmentfor">
            Appointment For <span className="text-danger">*</span>
          </label>
          <select
            className="p-1"
            name="apointmentfor"
            id="appointmentfor"
            onChange={(event) => {
              props.setAppointmentData({
                ...props.appointmentData,
                appointment_For: event.target.value,
              });
            }}
            defaultValue={props.appointmentData.appointment_For}
            required
          >
            {appointmentFor.map((appointmentFor) => {
              return (
                <option value={appointmentFor} key={appointmentFor}>
                  {appointmentFor}
                </option>
              );
            })}
          </select>
        </div>
        <div className="m-2 d-flex justify-content-between w-100">
          <button
            type="button"
            className="btn btn-outline-dark"
            htmlFor="slotform"
            onClick={() => {
              props.setCurrentPage("firstpage");
            }}
          >
            Prev
          </button>
          <button
            type="submit"
            className="btn btn-outline-dark"
            htmlFor="detailsform"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
