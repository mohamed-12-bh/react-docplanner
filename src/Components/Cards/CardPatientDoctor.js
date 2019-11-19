import React from "react";
import "./DoctorPatient.css";

const CardPatientDoctor = ({ name, select, image, title, doctor }) => {
  return (
    <div>
      <div className={doctor ? "card" + " " + "card-doctor" : "card"}>
        <p className="transparent">{name}</p>
        <h3 className="patient_doctors"> {title} </h3>

        {select && (
          <select className="btn-patient">
            {select.map(el => (
              <option className="btn-patient">{el}</option>
            ))}
          </select>
        )}
        <img
          className={
            doctor
              ? "img-patient-doctors" + " " + "img-doctors"
              : "img-patient-doctors" + " " + "img-patient"
          }
          src={image}
          alt="..."
        />
      </div>
    </div>
  );
};

export default CardPatientDoctor;
