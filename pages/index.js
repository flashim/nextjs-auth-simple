import Head from "next/head";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data: session } = useSession();
  const { data: token, status } = useSession();

  const localSuperset = "http://localhost:8088/login/";
  const hostedSuperset = "https://20.219.35.210:8088/login/okta?next=";
  //const hostedSuperset = "https://20.219.35.210:8088/";

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {!session?.user ? (
            <>
              <p>
                <button onClick={signIn}>OKTA SignIn</button>
              </p>
            </>
          ) : (
            <>
              <div>
                {session?.user?.email} ({session?.user?.name})
                <button
                  onClick={() => {
                    signOut({ redirect: false });
                  }}
                >
                  Signout
                </button>
              </div>

              <hr />
              <a href={hostedSuperset}>click to Open</a>
              <hr />
              <p>Object</p>
              <hr />
              <object
                type="text/html"
                data={hostedSuperset}
                style={{ width: "1000px", height: "500px" }}
              ></object>

              <hr />
              <div>
                <embed
                  src={hostedSuperset}
                  type="text/html"
                  style={{ width: "1000px", height: "500px" }}
                />
              </div>

              <hr />
              <p>iFrame</p>
              <hr />

              <iframe
                src={hostedSuperset}
                width="1000px"
                height="500px"
              ></iframe>
            </>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
