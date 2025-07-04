// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

import firebase from "firebase/compat/app";

export const CollectionRegistry = {
  Test: "tests",
} as const;

export interface Entity {
  _id: string;
  _createdAt: firebase.firestore.Timestamp;
  _updatedAt: firebase.firestore.Timestamp;
  _createdBy: string;
  _updatedBy: string;
  _isUpdated: boolean;
  name: string;
}

export interface Test extends Entity {
  testField: string;
}
