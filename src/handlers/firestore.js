import {doc, setDoc, serverTimestamp, collection, getDocs} from 'firebase/firestore';
import { db } from '../lib/firebase.config';


// object that has all the functions for the Firestore
export const Firestore = {
    readDocs: (...args) => {
        const [collection_name] = args
        let docs = []
        // creates reference to the files in database
        let ref = collection(db, "images")
        return new Promise(async resolve  => {
        try {
            const snapshot = await getDocs(ref)
            snapshot.forEach(doc => {
                const picData = {...doc.data(), id: doc.id}
                docs.push(picData)
            })
            resolve(docs)
        } catch(e) {
            console.log(e)
        }
    })

    },
    writeDoc: (...args) => {
        const [inputs, collection_name] = args;
        const randomIndex = Math.floor(Math.random() * 1000000000)
        return new Promise(async resolve => {
            try{
                const docRef = doc(db, 'images', `${randomIndex}`);
                await setDoc(docRef, { title: inputs.title, path: inputs.path, createdAt: serverTimestamp(), user: inputs.user});
                resolve('New doc successfully inserted!')
            } catch(e) {
                console.log(e)
            }
        })
    }
}
