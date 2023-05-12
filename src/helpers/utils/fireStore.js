import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { auth } from '../../firebase/config';

// Crea un documento cual la ID es la UID con el nombre de usuario.
const addUsername = async(username) => {
  const userUID = auth.currentUser.uid;
  const docRef = doc(db, "users", userUID);
  try {
    await setDoc(docRef, { username });
    console.log("Usuario creado.");
  } catch (error) {
    console.log(error);
  }
}

// Añade un valor al usuario actual.
const addNewValue = async(value) => {
  const userUID = auth.currentUser.uid;
  const docRef = doc(db, "users", userUID);
  try {
    await setDoc(docRef, {value}, {merge: true})
    console.log("Valor: " + value + " añadido a: " + userUID);
  } catch (error) {
    console.log(error);
  }
}

export {addUsername, addNewValue};