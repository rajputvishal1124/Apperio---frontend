import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { createPrescription } from "../../redux/action/patient";
import {
  clearPrescriptionError,
  clearPrescriptionMsg,
} from "../../redux/slice/prescription";
import toast from "react-hot-toast";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const PrescriptionForm = ({ appointedPatient, authData }) => {
  const dispatch = useDispatch();
  const [diagnosis, setDiagnosis] = useState([{ diagnosis: "" }]);
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://3.111.107.118:7587/api/medicines/search?q=${searchTerm}`
      );
      const data = await response.json();
      setSuggestions(data.searchResults);
      console.log(data.searchResults); // Assuming the API returns an array of suggestions
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const diagnosisFormChange = (index, event) => {
    let data = [...diagnosis];
    data[index][event.target.name] = event.target.value;
    setDiagnosis(data);
  };

  const removeDiagnosisFields = (index) => {
    let data = [...diagnosis];
    data.splice(index, 1);
    setDiagnosis(data);
  };
  const addDiagnosisFields = () => {
    let object = {
      diagnosis: "",
    };
    setDiagnosis([...diagnosis, object]);
  };

  const [advice, setAdvice] = useState([{ advice: "" }]);

  const adviceFormChange = (index, event) => {
    let data = [...advice];
    data[index][event.target.name] = event.target.value;
    setAdvice(data);
  };

  const removeAdviceFields = (index) => {
    let data = [...advice];
    data.splice(index, 1);
    setAdvice(data);
  };
  const addAdviceFields = () => {
    let object = {
      advice: "",
    };
    setAdvice([...advice, object]);
  };

  const [medicine, setMedicine] = useState([
    {
      medName: "",
      dosage: "",
      duration: 0,
      quantity: "",
      timing: "",
      formulation_type: "",
    },
  ]);

  const medicineFormChange = (index, event) => {
    let data = [...medicine];
    data[index][event.target.name] = event.target.value;
    setMedicine(data);
    console.log(medicine);
  };

  const removeMedicineFields = (index) => {
    let data = [...medicine];
    data.splice(index, 1);
    setMedicine(data);
  };
  const addMedicineFields = () => {
    let object = {
      medName: "",
      dosage: 0,
      duration: 0,
      quantity: 0,
      timing: "",
      formulation_type: "",
    };

    setMedicine([...medicine, object]);
  };

  const [labTest, setLabTest] = useState([{ labTest: "" }]);

  const labTestFormChange = (index, event) => {
    let data = [...labTest];
    data[index][event.target.name] = event.target.value;
    setLabTest(data);
  };

  const removeLabTestFields = (index) => {
    let data = [...labTest];
    data.splice(index, 1);
    setLabTest(data);
  };
  const addLabTestFields = () => {
    let object = {
      labTest: "",
    };
    setLabTest([...labTest, object]);
  };

  const [procedureConducted, setProcedureConducted] = useState([
    { procedureConducted: "" },
  ]);

  const procedureConductedFormChange = (index, event) => {
    let data = [...procedureConducted];
    data[index][event.target.name] = event.target.value;
    setProcedureConducted(data);
  };

  const removeProcedureConductedFields = (index) => {
    let data = [...procedureConducted];
    data.splice(index, 1);
    setProcedureConducted(data);
  };
  const addProcedureConductedFields = () => {
    let object = {
      procedureConducted: "",
    };
    setProcedureConducted([...procedureConducted, object]);
  };

  useEffect(() => {
    console.log(appointedPatient);
  }, [appointedPatient]);

  const { isLoading, isMessage, isError, prescriptionData } = useSelector(
    (state) => state.prescription
  );

  useEffect(() => {
    if (isMessage) {
      toast.success(isMessage);
      dispatch(clearPrescriptionMsg());
    }
  }, [isMessage]);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
      dispatch(clearPrescriptionError());
    }
  }, [isError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: authData?._id,
      doctorName: authData?.name,
      cheifComplaint: appointedPatient?.problemCategory,
      name: appointedPatient?.name,
      procedureConducted: procedureConducted,
      phone: appointedPatient?.phone,
      diagnosis: diagnosis,
      labTest: labTest,
      advice: advice,
      medicine: medicine,
    };
    console.log(data);

    !isLoading && dispatch(createPrescription(data));
  };

  return (
    <div className="grid sm:grid-cols-2 w-full gap-x-8 px-6 font-IBM my-0 flex-1 h-fit">
      <p className="col-span-2 font-IBM font-semibold text-xl my-5 text-sidebar-font">
        Prescription{" "}
      </p>
      <div className="my-2">
        <label
          htmlFor="patient_name"
          className="block mb-2 text-sm font-medium text-sidebar-font"
        >
          Doctor Name :
        </label>
        <input
          type="text"
          id="doctorName"
          value={authData?.name}
          className="rounded bg-input border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
          placeholder="Enter Your Patient Name"
        />
      </div>
      <div className="my-2">
        <label
          htmlFor="phone"
          class="block mb-2 text-sm font-medium text-sidebar-font"
        >
          Chief Complaint :
        </label>
        <input
          type="text"
          id="cheifComplaint"
          name="cheifComplaint"
          value={appointedPatient?.problemCategory}
          className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
          placeholder="Enter Your +91"
        />
      </div>

      <div className="my-2">
        <label
          htmlFor="patient_name"
          className="block mb-2 text-sm font-medium text-sidebar-font"
        >
          Patient Name :
        </label>
        <input
          type="text"
          id="doctorName"
          className="rounded bg-input border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
          placeholder="Enter Your Patient Name"
          value={appointedPatient?.name}
        />
      </div>
      <div className="my-2">
        <label
          htmlFor="patient_name"
          className="block mb-2 text-sm font-medium text-sidebar-font"
        >
          Phone Number :
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
          placeholder="Enter Your +91"
          onKeyDown={(event) => {
            if (!/[0-9\+\-]/.test(event.key) && event.key !== "Backspace") {
              event.preventDefault();
            }
          }}
          value={appointedPatient?.phone}
        />
      </div>
      <div className="my-2 sm:col-span-2">
        <label
          htmlFor="patient_name"
          className="block mb-2 text-sm font-medium text-sidebar-font"
        >
          Diagnosis :
        </label>
        {diagnosis.map((input, index) => {
          return (
            <div key={index} className="flex gap-2 my-2">
              <input
                name="diagnosis"
                placeholder="Diagnosis Detail"
                className="rounded bg-input  border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                value={input.diagnosis}
                onChange={(event) => diagnosisFormChange(index, event)}
              />

              {index != 0 && (
                <button
                  onClick={() => removeDiagnosisFields(index)}
                  className=" bg-violet/75 hover:bg-violet text-sidebar p-2 rounded-full"
                >
                  <DeleteIcon />
                </button>
              )}
            </div>
          );
        })}
        <button
          onClick={addDiagnosisFields}
          className="bg-slate-200 w-full text-sm p-1 font-medium"
        >
          + Add More..
        </button>
      </div>
      <div className="my-2 sm:col-span-2">
        <label
          htmlFor="procedureConducted"
          className="block mb-2 text-sm font-medium text-sidebar-font"
        >
          Procedure Conducted :
        </label>
        {procedureConducted.map((input, index) => {
          return (
            <div key={index} className="flex gap-2 my-2">
              <input
                name="procedureConducted"
                placeholder="Procedure Conducted"
                className="rounded bg-input  border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                value={input.procedureConducted}
                onChange={(event) => procedureConductedFormChange(index, event)}
              />

              {index != 0 && (
                <button
                  onClick={() => removeProcedureConductedFields(index)}
                  className=" bg-violet/75 hover:bg-violet text-sidebar p-2 rounded-full"
                >
                  <DeleteIcon />
                </button>
              )}
            </div>
          );
        })}
        <button
          onClick={addProcedureConductedFields}
          className="bg-slate-200 w-full text-sm p-1 font-medium"
        >
          + Add More..
        </button>
      </div>
      <div className="my-2 sm:col-span-2">
        <label
          htmlFor="labTest"
          className="block mb-2 text-sm font-medium text-sidebar-font"
        >
          Lab Test :
        </label>
        {labTest.map((input, index) => {
          return (
            <div key={index} className="flex gap-2 my-2">
              <input
                name="labTest"
                placeholder="Lab Test"
                className="rounded bg-input  border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                value={input.labTest}
                onChange={(event) => labTestFormChange(index, event)}
              />

              {index != 0 && (
                <button
                  onClick={() => removeLabTestFields(index)}
                  className=" bg-violet/75 hover:bg-violet text-sidebar p-2 rounded-full"
                >
                  <DeleteIcon />
                </button>
              )}
            </div>
          );
        })}
        <button
          onClick={addLabTestFields}
          className="bg-slate-200 w-full text-sm p-1 font-medium"
        >
          + Add More..
        </button>
      </div>
      <div className="my-2 sm:col-span-2">
        <label
          htmlFor="advice"
          className="block mb-2 text-sm font-medium text-sidebar-font"
        >
          Advice :
        </label>
        {advice.map((input, index) => {
          return (
            <div key={index} className="flex gap-2 my-2">
              <input
                name="advice"
                placeholder="Enter Advice"
                className="rounded bg-input  border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                value={input.advice}
                onChange={(event) => adviceFormChange(index, event)}
              />

              {index != 0 && (
                <button
                  onClick={() => removeAdviceFields(index)}
                  className=" bg-violet/75 hover:bg-violet text-sidebar p-2 rounded-full"
                >
                  <DeleteIcon />
                </button>
              )}
            </div>
          );
        })}
        <button
          onClick={addAdviceFields}
          className="bg-slate-200 w-full text-sm p-1 font-medium"
        >
          + Add More..
        </button>
      </div>
      <div className="my-2 col-span-2">
        <label
          htmlFor="medicine"
          className="block mb-2 text-sm font-medium text-sidebar-font"
        >
          Medicines :
        </label>
        {medicine.map((input, index) => {
          return (
            <div key={index} className="grid grid-cols-2 gap-2 my-2">
              <div>
                <label
                  htmlFor="medName"
                  className="block mb-2 text-sm font-medium text-sidebar-font"
                >
                  Medicine Name
                </label>
                {/* <input
                  name="medName"
                  placeholder="Enter Medicine Name"
                  className="rounded bg-input  border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                  value={input.medName}
                  onChange={(event) => medicineFormChange(index, event)}
                /> */}
                <div className="relative">
                  <input
                    name="medName"
                    placeholder="Enter Medicine Name"
                    className="rounded bg-input  border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                    value={input.medName}
                    onChange={(event) => medicineFormChange(index, event)}
                    onKeyDown={(e) => {
                      fetchSuggestions(e.target.value);
                    }}
                  />

                  {suggestions?.length > 0 && (
                    <div className="absolute w-full  max-h-52 border bg-white overflow-auto shadow-md top-12">
                      {suggestions?.map((x) => (
                        <div
                          className="py-2 px-4 hover:bg-input"
                          onClick={() => {
                            let data = [...medicine];
                            data[index].medName = x.display_name;
                            data[index].formulation_type = x.formulation_type;
                            setMedicine(data);
                            setSuggestions([]);
                          }}
                        >
                          <div className="font-semibold ">
                            {x?.display_name}
                          </div>
                          <div className="text-sm"> Generic : {x?.generic}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="timing"
                  className="block mb-2 text-sm font-medium text-sidebar-font"
                >
                  Timing
                </label>
                {input.formulation_type.includes("TABLET") ? (
                  <select
                    name="timing"
                    className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                    onChange={(event) => medicineFormChange(index, event)}
                  >
                    <option value="" disabled selected>
                      Select Timing
                    </option>
                    <option value="Before Food in Morning & Night">
                      Before Food in Morning & Night
                    </option>
                    <option value="After Food in Morning & Night">
                      After Food in Morning & Night
                    </option>
                    <option value="Before Food at Morning">
                      Before Food at Morning
                    </option>
                    <option value="After Food at Morning">
                      After Food at Morning
                    </option>
                    <option value="Before Food at Night">
                      Before Food at Night
                    </option>
                    <option value="After Food at Night">
                      After Food at Night
                    </option>
                  </select>
                ) : (
                  <input
                    type="text"
                    name="timing"
                    placeholder="Enter Timing"
                    className="rounded bg-input  border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                    value={input.timing}
                    onChange={(event) => medicineFormChange(index, event)}
                  />
                )}
              </div>
              {(input.formulation_type.includes("DROPS") ||
                input.formulation_type.includes("TABLET")) && (
                <div>
                  <label
                    htmlFor="dosage"
                    className="block mb-2 text-sm font-medium text-sidebar-font capitalize"
                  >
                    {input.formulation_type.toLowerCase()} Per Dosage
                  </label>
                  <input
                    type="number"
                    name="dosage"
                    placeholder="Enter Dosage"
                    className="rounded bg-input  border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                    value={input.dosage}
                    onChange={(event) => medicineFormChange(index, event)}
                  />
                </div>
              )}
              <div>
                <label
                  htmlFor="dosage"
                  className="block mb-2 text-sm font-medium text-sidebar-font"
                >
                  Formulation Type
                </label>
                <input
                  type="text"
                  name="formulation_type"
                  placeholder="Enter TABLET, DROPS "
                  className="rounded bg-input  border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                  value={input.formulation_type}
                  onChange={(event) => medicineFormChange(index, event)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="duration"
                    className="block mb-2 text-sm font-medium text-sidebar-font"
                  >
                    Duration
                  </label>
                  <input
                    type="number"
                    name="duration"
                    placeholder="Enter Duration"
                    className="rounded bg-input  border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                    value={input.duration}
                    onChange={(event) => medicineFormChange(index, event)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-sm font-medium text-sidebar-font"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Enter Quantity"
                    className="rounded bg-input  border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
                    value={input.quantity}
                    onChange={(event) => medicineFormChange(index, event)}
                  />
                </div>
              </div>

              {index != 0 && (
                <button
                  onClick={() => removeMedicineFields(index)}
                  className=" bg-violet/75 w-fit h-fit mt-auto hover:bg-violet text-sidebar p-2 rounded-full"
                >
                  <DeleteIcon />
                </button>
              )}
            </div>
          );
        })}
        <button
          onClick={addMedicineFields}
          className="bg-slate-200 w-full text-sm p-1 font-medium"
        >
          + Add More..
        </button>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full col-span-2 lg:w-2/5  mx-auto py-2 bg-violet text-white my-4 cursor-pointer"
      >
        {!isLoading ? (
          "Submit"
        ) : (
          <div className="w-8 h-8 rounded-full animate-spin border-y-4 mx-auto border-solid border-white border-t-transparent shadow-md"></div>
        )}{" "}
      </button>
    </div>
  );
};

export default PrescriptionForm;
