import React, { useState } from "react";
import FirstPage from "../page/FirstPage";
import SecondPage from "../page/SecondPage";
import ThirdPage from "../page/ThirdPage";
import SuccessPage from "../page/SuccessPage";
export default function Form() {
  const [nextDates, setNextDates] = useState(5);
  const [currentPage, setCurrentPage] = useState("firstpage");
  const [appointmentData, setAppointmentData] = useState({});
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center bg-light bg-opacity-25 p-3 w-75 border border-dark"
      style={{ height: "80vh", overflow: "hidden" }}
    >
      <h2 className="mt-2">Appointment Booking</h2>
      {currentPage === "firstpage" ? (
        <FirstPage
          setCurrentPage={setCurrentPage}
          setAppointmentData={setAppointmentData}
          appointmentData={appointmentData}
          nextDates={nextDates}
          setNextDates={setNextDates}
        />
      ) : null}
      {currentPage === "secondpage" ? (
        <SecondPage
          setCurrentPage={setCurrentPage}
          setAppointmentData={setAppointmentData}
          appointmentData={appointmentData}
        />
      ) : null}
      {currentPage === "thirdpage" ? (
        <ThirdPage
          setCurrentPage={setCurrentPage}
          setAppointmentData={setAppointmentData}
          appointmentData={appointmentData}
        />
      ) : null}
      {currentPage === "success" ? <SuccessPage /> : null}
    </div>
  );
}
