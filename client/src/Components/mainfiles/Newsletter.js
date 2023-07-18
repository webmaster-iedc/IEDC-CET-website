import React, { useState } from "react";
import {db} from "../../Config/Firebase";
import {collection,addDoc} from "firebase/firestore";

function Newsletter() {
  const [email, setEmail] = useState("");
  const emailsCollectionRef=collection(db,"emails");
  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit=async(e)=>{
    e.preventDefault();
    try{
      await addDoc(emailsCollectionRef,{email:email});
      setEmail("");
    }catch(err){
      console.error(err)
    }
  }
	return (
    <div className="sm:p-3  self-center flex flex-col justify-center items-center gap-7">
      <h1 className="text-center text-white text-4xl font-bold ">Subscribe to our Newsletter</h1>
      <form className="flex justify-center items-center gap-2" onSubmit={handleEmailSubmit}>
        <input
          type="email"
          placeholder="Enter your email.."
          value={email}
          onChange={handleInput}
					className="px-4 py-2 rounded"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;