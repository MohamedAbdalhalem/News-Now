"use client";
import { useState } from "react";
import { getFirebaseToken } from "@/firebase";
export default function NotificationBanner() {
  const [showNotificationBanner, setShowNotificationBanner] = useState(true);
  const handleGetFirebaseToken = () => {
    getFirebaseToken()
      .then((firebaseToken) => {
        console.log("Firebase token: ", firebaseToken);
        if (firebaseToken) {
          setShowNotificationBanner(false);
        }
      })
      .catch((err) =>
        console.error(
          "An error occured while retrieving firebase token. ",
          err,
        ),
      );
  };
  return (
    <div>
      {showNotificationBanner && (
        <div className="alert fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-4 rounded-lg px-4 py-3 text-sm w-[90%] max-w-md shadow-lg">
          <div className="flex items-center gap-2">
            <span>The app needs permission to enable push notifications.</span>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={handleGetFirebaseToken} className="btn btn-sm">
              Allow
            </button>
            <button
              onClick={() => setShowNotificationBanner(false)}
              className="btn btn-sm btn-ghost btn-square"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
