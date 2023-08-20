import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("From SignIn component", userDocRef);
  };
  return (
    <div>
      <h1>sign-in Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google PopUp</button>
    </div>
  );
};

export default SignIn;
