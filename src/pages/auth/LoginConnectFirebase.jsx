import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

export default function login() {
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Username:</label>
        <input type="text" ref={messageRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
