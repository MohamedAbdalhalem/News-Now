import { initializeApp } from "firebase/app";
import {
  getToken,
  getMessaging,
  onMessage,
  isSupported,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCL5e9zm4Cx27NiyM9WB5bH0fEby-mDyyI",
  authDomain: "news-notifications-79291.firebaseapp.com",
  projectId: "news-notifications-79291",
  storageBucket: "news-notifications-79291.firebasestorage.app",
  messagingSenderId: "662436129386",
  appId: "1:662436129386:web:27f73d0a90dd3d22b1f813",
};

const firebaseApp = initializeApp(firebaseConfig);

// Only create messaging on the client, and only if the browser supports it
const getMessagingInstance = async () => {
  if (typeof window === "undefined") return null;
  const supported = await isSupported();
  if (!supported) return null;
  return getMessaging(firebaseApp);
};

export const getOrRegisterServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    return window.navigator.serviceWorker
      .getRegistration("/firebase-push-notification-scope")
      .then((serviceWorker) => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register(
          "/firebase-messaging-sw.js",
          {
            scope: "/firebase-push-notification-scope",
          },
        );
      });
  }
  throw new Error("The browser doesn't support service worker.");
};

export const getFirebaseToken = async () => {
  const messaging = await getMessagingInstance();
  if (!messaging)
    throw new Error("Firebase messaging is not supported in this environment.");

  const serviceWorkerRegistration = await getOrRegisterServiceWorker();
  return getToken(messaging, {
    vapidKey: process.env.REACT_APP_VAPID_KEY,
    serviceWorkerRegistration,
  });
};

export const onForegroundMessage = async (callback: (payload: any) => void) => {
  const messaging = await getMessagingInstance();
  if (!messaging) return;
  onMessage(messaging, callback);
};
