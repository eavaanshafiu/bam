// import { useState, useEffect } from 'react'
// import { query, onSnapshot, collection, orderBy } from "firebase/firestore";
// import { db } from './config';

// function useFirestore(collectionName) {
//     const [docs, setDocs] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         //function to get data 
//         const getData = async () => {
//             try {
//                 const q = query(collection(db, collectionName), orderBy('addedOn', 'desc'));
//                 const unsubscribe = onSnapshot(q, (querySnapshot) => {
//                     const files = [];
//                     querySnapshot.forEach((doc) => {
//                         const fileUrl = doc.data().fileUrl;
//                         const addedOn = doc.data().addedOn.toDate();
//                         files.push({ fileUrl, addedOn });
//                     });
//                     setDocs(files);
//                     setIsLoading(false);
//                 });
//             } catch (error) {
//                 console.log(error)
//                 setIsLoading(false);
//             }
//         }

//         getData();
//     }, [collectionName])

//     return {
//         docs, isLoading
//     }
// }

// export default useFirestore
