import { initializeApp } from "firebase/app";

interface FirebaseConfig {
  databaseURL: string;
}

const firebaseConfig: FirebaseConfig = {
  databaseURL: "DATABASE_URL",
};

export const app = initializeApp(firebaseConfig);
