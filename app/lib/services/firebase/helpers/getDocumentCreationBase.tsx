import { serverTimestamp } from "firebase/firestore";

const getDocumentCreationBase = (_id: string | number) => {
  const now = serverTimestamp();
  return {
    _createdAt: now,
    _id,
    _isUpdated: false,
    _updatedAt: now,
  };
};

export default getDocumentCreationBase;
