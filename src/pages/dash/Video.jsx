import React, { useEffect, useRef } from "react";
import {
  getAppointedPatientById,
  getPatientPrescription,
  updateVideoCallStatus,
} from "../../redux/action/patient";
import { useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useSelector } from "react-redux";

const VideoZego = ({
  authData,
  appointedPatient,
  roomId,
  dispatch,
  // appointLoading,
  // prescLoading,
}) => {
  const navigate = useNavigate();

  const root = useRef();
  const { isLoading: appointLoading } = useSelector(
    (state) => state.activeCall
  );
  const { isLoading: prescLoading } = useSelector(
    (state) => state.prescription
  );
  useEffect(() => {
    console.log(appointLoading);
    console.log(prescLoading);
  }, [appointLoading, prescLoading, dispatch]);

  useEffect(() => {
    if (root) {
      const appId = 1652387913;
      const serviceSecret = "1c55ae9c8a4763c0f832358b73ab4622";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId,
        serviceSecret,
        roomId,
        authData._id, //UserID
        authData.name
      );
      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: root.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showPreJoinView: false,
        onJoinRoom: () => {
          appointedPatient?.checked != "True" &&
            dispatch(
              updateVideoCallStatus({
                id: appointedPatient._id,
                status:
                  authData?.type == "doctor" ? "Ongoing" : "Patient Joined",
              })
            );
        },
        onLeaveRoom: () => {
          zc.destroy();
          root.current.style.display = "none";

          authData?.type == "doctor" &&
            navigate("/dash/operator/patient/appointment");
          appointedPatient?.checked == "True" &&
            dispatch(
              updateVideoCallStatus({
                id: appointedPatient._id,
                status: "Completed",
              })
            );
          authData?.type == "manager" &&
            dispatch(getAppointedPatientById(appointedPatient._id)).then(
              (x) => {
                console.log(x.payload?.appointedPatient?.checked);
                x.payload?.appointedPatient?.checked == "True"
                  ? dispatch(
                      getPatientPrescription(
                        x.payload.appointedPatient?.prescriptionId
                      )
                    ).then(() => {
                      navigate("/dash/operator/prescription");
                    })
                  : navigate("/dash/operator/patient/appointment");
              }
            );
        },
      });
    }
  }, []);

  // let myMeeting = async (element) => {
  //   const appId = 1652387913;
  //   const serviceSecret = "1c55ae9c8a4763c0f832358b73ab4622";
  //   const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
  //     appId,
  //     serviceSecret,
  //     roomId,
  //     authData._id, //UserID
  //     authData.name
  //   );
  //   const zc = ZegoUIKitPrebuilt.create(kitToken);
  //   zc.joinRoom({
  //     container: element,
  //     scenario: {
  //       mode: ZegoUIKitPrebuilt.OneONoneCall,
  //     },
  //     showPreJoinView: false,
  //     onJoinRoom: () => {
  //       appointedPatient?.checked != "True" &&
  //         dispatch(
  //           updateVideoCallStatus({
  //             id: appointedPatient._id,
  //             status: authData?.type == "doctor" ? "Ongoing" : "Patient Joined",
  //           })
  //         );
  //     },
  //     onLeaveRoom: () => {
  //       authData?.type == "doctor" &&
  //         navigate("/dash/operator/patient/appointment");
  //       appointedPatient?.checked == "True" &&
  //         dispatch(
  //           updateVideoCallStatus({
  //             id: appointedPatient._id,
  //             status: "Completed",
  //           })
  //         );
  //       authData?.type == "manager" &&
  //         dispatch(getAppointedPatientById(appointedPatient._id)).then((x) => {
  //           console.log(x.payload.appointedPatient?.checked);
  //           x.payload.appointedPatient?.checked == "True" &&
  //             dispatch(
  //               getPatientPrescription(
  //                 x.payload.appointedPatient?.prescriptionId
  //               )
  //             ).then(() => {
  //               navigate("/dash/operator/prescription");
  //             });
  //         });
  //     },
  //   });
  // };
  return (
    <>
      {authData?.type == "manager" && (appointLoading || prescLoading) && (
        <div class="flex flex-row gap-4 h-[80vh] justify-center items-center">
          <div className="w-12 h-12 rounded-full animate-spin border-y-8 border-solid border-green-500 border-t-transparent shadow-md"></div>
        </div>
      )}
      <div ref={root} className="w-11/12 h-[92vh]"></div>
    </>
  );
};

export default VideoZego;
