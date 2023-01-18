import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

const firebaseCerts: ServiceAccount = {
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  projectId: process.env.FIREBASE_PROJECT_ID,
};

export const initFirebase = () =>
  admin.initializeApp({
    credential: admin.credential.cert(firebaseCerts),
  });
