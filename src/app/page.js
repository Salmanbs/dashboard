"use client";
import Image from "next/image";
import styles from "./page.module.css";
import LoginForm from "src/component/Loginpage/Loginpage";
import { googleicon, appleicon } from "src/Assets/commonsvg";
// import { googleTapRedirect } from "@/api/Mainclient";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const { data: session } = useSession();

  const googlelogin = () => {
    // const url = googleTapRedirect();
    // window.location.href = url;
  };

  const applefunc = () => {
    alert("use Google Login");
  };

  if (session) {
    router.push("/dashboard");
    return null;
  }
  //  else {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftsection}>
        <h1>Board.</h1>
      </div>
      <div className={styles.rightsection}>
        <div className={styles.loginsections}>
          <h1>Sign In</h1>
          <span>Sign in to your account</span>
          <div className={styles.loginbtndiv}>
            <button onClick={() => signIn()}>
              {googleicon} Sign in with Google
            </button>
            <button onClick={applefunc}>{appleicon} Sign in with Apple</button>
          </div>
          <LoginForm />
          <div className={styles.btmsec}>
            <span>
              Don’t have an account? <a>Register here</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
  //  }
}
