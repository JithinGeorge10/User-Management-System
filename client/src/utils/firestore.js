import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../firebase/config";
import {addDoc, collection, getDocs, getFirestore, orderBy, query, where} from '@firebase/firestore'
const db = getFirestore(app);

export async function uploadImagesToFireStore(image,name,userid) {
    try {
        console.log(image);
        const storage = getStorage();
        const storageRef = ref(storage, `images/${image.name}`)
        await uploadBytes(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
        let url = await getDownloadURL(storageRef);
        console.log(url)

        await addDoc(collection(db, "userDetails"), {
            userid,
            name,
            url,
            createdAt: new Date().toDateString(),
        });
    } catch (error) {
        throw new Error(error.message)
    }
}


export async function fetchUserDetails(userId) {
    try {
      const userImagesRef = collection(db, "userDetails");
      const q = query(userImagesRef, where("userid", "==", userId), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const userDetails = [];
      querySnapshot.forEach((doc) => {
        userDetails.push(doc.data());
      });
   
      return userDetails;
    } catch (error) {
      throw new Error(error.message);
    }
  }