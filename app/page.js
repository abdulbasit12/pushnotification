'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { getMessaging, getToken } from "firebase/messaging";
import { useState } from "react";
import { getApp, getApps, initializeApp } from 'firebase/app'
import { firebaseConfig } from "@/config/config";

export default function Home() {

  const [token, setToken] = useState('')

  const handlePermission = async () => {
    let notification = await Notification.requestPermission()
    if (notification == 'granted') {
      const app = !getApps()?.length ? initializeApp(firebaseConfig) : getApp();
      const messaging = getMessaging(app);
      let token = await getToken(messaging, { vapidKey: 'BPDYBWtNyXZWNzee60W9RGUgh21To66OCz9ozjd0uI75d4G6GaUS3B-FXde8NQqalnXogq-jRqyDRxkh1WPM2vU' });
      setToken(token)
      if (token) {
        // let topic = await subscribeToTopic(btoaPayload({ token }))
      }
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
          <a
            rel="noopener noreferrer"
            className={styles.secondary}
            onClick={handlePermission}
          >
            Enable Notifications
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
      <div style={{ maxWidth: '100%', wordBreak:'break-all' }}>
        {token}
      </div>
    </div>
  );
}
