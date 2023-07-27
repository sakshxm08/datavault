import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { app } from "../firebase";

export const Menubar = () => {
  const [file, setFile] = useState([]);
  const [fileURL, setFileURL] = useState([]);

  const upload = (e) => {
    let output = { files: [], fileURLs: [] };
    for (let i = 0; i < e.target.files.length; i++) {
      output["files"].push(e.target.files[i]);
      setFile(output["files"]);
      output["fileURLs"].push(URL.createObjectURL(e.target.files[i]));
      setFileURL(output["fileURLs"]);
    }
  };
  const uploadToFirebase = () => {
    const storage = getStorage(app);
    for (let j = 0; j < file.length; j++) {
      const storageRef = ref(storage, `try/${file[j].name}`);
      uploadBytesResumable(storageRef, file[j]).then((snapshot) => {
        console.log("uploaded");
      });
      uploadBytesResumable(storageRef, file[j]).on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`${progress} % done.`);
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
    <div className="mt-10 ml-10">
      <input type="file" name="file" id="file" onChange={upload} multiple />
      {fileURL.length ? (
        fileURL.map((item) => {
          return (
            <>
              <img
                src={item}
                alt=""
                className="aspect-video w-48 object-cover"
              />
              <div>{item}</div>
            </>
          );
        })
      ) : (
        <div>No files</div>
      )}
      <button
        className="border border-sky-950 p-2 hover:bg-gray-200 mt-10"
        onClick={uploadToFirebase}
      >
        Upload
      </button>
    </div>
  );
};
