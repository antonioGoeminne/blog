import type { ServiceAccount } from 'firebase-admin'
import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { Firestore, getFirestore } from 'firebase-admin/firestore'

let firestore: Firestore | undefined = undefined

const activeApps = getApps()
const serviceAccount = {
  type: 'service_account',
  ...JSON.parse(import.meta.env.FIREBASE_SERVICEACCOUNTKEY || '{}')
}

export const app =
  activeApps.length === 0
    ? initializeApp({
        credential: cert(serviceAccount as ServiceAccount)
      })
    : activeApps[0]

if (app) {
  firestore = getFirestore(app)
}

export { firestore }
