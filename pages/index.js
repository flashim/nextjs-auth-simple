import Head from "next/head";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data: session } = useSession();

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
              <p>Please sign in here. version 1.4</p>
              <button onClick={signIn}>Sign in</button>
            </>
          ) : (
            <>
              <div>{session?.user?.name}</div>
              <div>{session?.user?.email}</div>
              <button
                onClick={() => {
                  signOut({ redirect: false });
                }}
              >
                Signout
              </button>
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
