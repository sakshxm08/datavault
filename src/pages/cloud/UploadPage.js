import { CloudUpload } from "@mui/icons-material";
import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  // getDownloadURL,
} from "firebase/storage";
import { app, auth } from "../../firebase";
// import { BiExpand } from "react-icons/bi";
// import { MdOutlineDelete } from "react-icons/md";
// import { Tooltip } from "@mui/material";
import { ImagePreview } from "../../components/ImagePreview";
import { useAuthState } from "react-firebase-hooks/auth";
// import { CircularProgress } from "@mui/material";
import { CircularProgress } from "@mui/material";

export const UploadPage = () => {
  const [file, setFile] = useState([]);
  const [user] = useAuthState(auth);
  let [loader, setLoader] = useState(false);
  let output = { files: [], filesURL: [] };
  const onFileChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      e.target.files[i]["imgURL"] = URL.createObjectURL(e.target.files[i]);
      output["files"].push(e.target.files[i]);
      setFile(output["files"]);
    }
  };

  const deleteFile = (file) => {
    setFile((files) => files.filter((item) => item !== file));
  };
  // const upload = () => {
  //   const storage = getStorage(app);
  //   const storageRef = ref(storage, `public/${file.name}`);
  //   uploadBytesResumable(storageRef, file).then((snapshot) => {
  //     console.log("Uploaded a blob or file!" + snapshot);
  //   });
  //   uploadBytesResumable(storageRef, file).on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log(`${progress} % done.`);
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("paused");
  //           break;
  //         case "running":
  //           console.log("running");
  //           break;
  //         default:
  //           console.log("default");
  //       }
  //     },
  //     (err) => {
  //       switch (err.code) {
  //         case "storage/unauthorized":
  //           console.log("error - unauthorized");

  //           break;
  //         case "storage/canceled":
  //           console.log("error - cancelled");

  //           break;

  //         // ...

  //         case "storage/unknown":
  //           console.log("unknown error");
  //           // Unknown error occurred, inspect error.serverResponse
  //           break;
  //         default:
  //           console.log("error");
  //       }
  //     },
  //     () => {
  //       // Upload completed successfully, now we can get the download URL
  //       getDownloadURL(
  //         uploadBytesResumable(storageRef, file).snapshot.ref
  //       ).then((downloadURL) => {
  //         console.log("File available at", downloadURL);
  //       });
  //     }
  //   );
  // };
  const upload = () => {
    setLoader(true);
    const storage = getStorage(app);
    for (let j = 0; j < file.length; j++) {
      const storageRef = ref(storage, `${user.email}/images/${file[j].name}`);
      uploadBytesResumable(storageRef, file[j])
        .then((snapshot) => {
          console.log("uploaded");
        })
        .then(() => {
          setLoader(false);
          setFile([]);
        });
      uploadBytesResumable(storageRef, file[j]).on(
        "state_changed",
        (snapshot) => {
          // setProgress(
          //   Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          // );
          switch (snapshot.state) {
            case "paused":
              console.log("paused");
              break;
            case "running":
              console.log("running");
              break;
            default:
              console.log("default");
          }
        }
      );
    }
  };

  return (
    <div className="mt-14 xl:px-20 px-10 py-10">
      <div className="flex flex-col lg:flex-row gap-4 xl:gap-10 mt-10">
        <div class="shadow-lg w-full lg:w-1/2 bg-white dark:bg-gray-700 rounded-2xl  px-6 py-10 flex flex-col justify-center items-center gap-4 lg:gap-10">
          <h1 className="text-3xl font-extrabold font-titleFont text-sky-950 dark:text-sky-50">
            Select Files
          </h1>
          <label
            htmlFor="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-48 lg:h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-800 hover:bg-gray-100 dark:border-gray-600  dark:hover:bg-gray-900 duration-200"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <span className=" text-sky-600 dark:text-sky-800">
                <CloudUpload sx={{ fontSize: 72 }} />
              </span>
              <p class="mb-2 text-base text-center text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={onFileChange}
              multiple
            />
          </label>
        </div>
        <div class="shadow-lg w-full lg:w-1/2 bg-white  dark:bg-gray-700 rounded-2xl px-6 py-10 flex flex-col  gap-6">
          <h1 className="text-3xl font-extrabold font-titleFont text-sky-950 dark:text-sky-50 flex items-center gap-2">
            Files to be Uploaded{" "}
            {file.length ? (
              <span className="font-bodyFont text-2xl font-medium">{`(${file.length})`}</span>
            ) : (
              <></>
            )}
          </h1>
          <div className="border dark:border-gray-500 h-96 rounded-2xl overflow-auto">
            {file.length ? (
              <div className="grid grid-cols-1 p-3 gap-x-2 gap-y-4">
                {file.map((item) => (
                  <div className="relative">
                    <ImagePreview
                      item={item}
                      key={item.name}
                      deleteFile={() => {
                        deleteFile(item);
                      }}
                      opacity={loader ? 20 : 100}
                    />

                    {loader && (
                      <div className="absolute rounded-lg flex items-center justify-center  top-0 dark:bg-sky-900/30 bg-gray-300/40 w-full h-full">
                        <CircularProgress size={30} color="info" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex justify-center items-center text-2xl font-medium text-gray-400">
                No files chosen
              </div>
            )}
          </div>
          <button
            className="border rounded-xl font-bold  font-titleFont tracking-wider border-sky-800 dark:border-sky-400 text-sky-800 dark:text-sky-400 hover:bg-sky-800 dark:hover:bg-sky-400 hover:text-sky-50 dark:hover:text-sky-950 duration-200 py-2"
            onClick={upload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};
