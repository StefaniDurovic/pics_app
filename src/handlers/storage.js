import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase.config";

// object that has all the functions for the Firebase storage
export const Storage = {
  uploadFile: (media) => {
    return new Promise(async (resolve) => {
      try {
        // creates reference to the files in storage
        const mediaRef = ref(storage, `imageFiles/${media.title}`);
        uploadBytes(mediaRef, media.file).then((snapshot) => {
          resolve({ path: snapshot.metadata.fullPath, name: media.title });
        });
      } catch (e) {
        console.error(e);
      }
    });
  },
  // this "media" parameter is what we get after resolving uploadFile, because in UploadForm downloadFile is chained to uploadFile(and both return Promises). Therefore this media.path is the path we get from the metadata of the uploaded file. 
  downloadFile: (media) => {
    return new Promise(async (resolve) => {
        try {
            const mediaRef = ref(storage, media.path);
            const fileURL = getDownloadURL(mediaRef);
            resolve(fileURL);
        } catch(e) {
            console.error(e);
        }
    })
    }
  };
