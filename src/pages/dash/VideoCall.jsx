import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAppointedPatientById,
  getPatientPrescription,
  updateVideoCallStatus,
} from "../../redux/action/patient";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PrescriptionForm from "./PrescriptionForm";
import VideoZego from "./Video";

const VideoCall = () => {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading: appointLoading, appointedPatient } = useSelector(
    (state) => state.activeCall
  );
  const { isLoading: prescLoading } = useSelector(
    (state) => state.prescription
  );
  const { authData } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(appointLoading);
  }, []);

  const videoCallStart = React.useMemo(
    () => (
      <VideoZego
        authData={authData}
        appointedPatient={appointedPatient}
        roomId={roomId}
        appointLoading={appointLoading}
        dispatch={dispatch}
        prescLoading={prescLoading}
      />
    ),
    []
  );

  const [pres, setPres] = useState(false);

  return (
    <div className=" flex justify-center relative">
      {authData?.type == "doctor" && (
        <div
          className={`absolute flex z-20  cursor-pointer text-sidebar-font overflow-auto  gap-4 right-0 duration-500 transition-all   m-auto  ${
            pres
              ? "w-[80%] h-[92vh]  bg-white shadow-lg"
              : "w-7 h-[92vh]  justify-center hover:text-white"
          }   flex-col`}
        >
          <>
            <div
              className="absolute left-0 flex z-40 flex-col gap-4 bg-violet/50 hover:bg-violet hover:text-white transition-all duration-300  justify-center"
              style={{
                height: "inherit",
              }}
              onClick={() => setPres(!pres)}
            >
              <span
                className="mx-auto font-semibold"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                {" "}
                PRESCRIPTION
              </span>
              <KeyboardDoubleArrowRightIcon className="mx-auto w-fit h-fit" />
            </div>
            {pres && (
              <div className="ml-6 overflow-auto">
                <PrescriptionForm
                  appointedPatient={appointedPatient}
                  authData={authData}
                />
              </div>
            )}
          </>
        </div>
      )}
      {/* {authData != null && appointedPatient != null && (
        <div ref={myMeeting} className="w-11/12 h-[92vh]"></div>
      )} */}
      {authData != null && appointedPatient != null && videoCallStart}
      {/* {presRef.current == true && authData?.type === "doctor" && ( */}
    </div>
  );
};

export default VideoCall;
