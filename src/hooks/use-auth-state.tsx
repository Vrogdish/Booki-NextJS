import { auth, db } from "@/firebase/config";
import { UserInterface } from "@/types/user";
import { User, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useAuthState() {
  const [authUser, setAuthUser] = useState<UserInterface | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

  const formatUserProfile = (user: UserInterface) => ({
    uid: user.uid,
    email: user.email,
  });

  const getUserProfil = async (user: UserInterface) => {
    if (auth.currentUser) {
      const compactUserProfile = user;
      onSnapshot(doc(db, "users", auth.currentUser.uid), async (doc) => {
        if (doc.exists()) {
          const res = doc.data();
          compactUserProfile.firstname = res.firstname;
          compactUserProfile.lastname = res.lastname;
          compactUserProfile.adress = res.adress;
          compactUserProfile.city = res.city;
        }
        setAuthUser(compactUserProfile);
        setAuthUserIsLoading(false);
      });
    }
  };

  const authStateChanged = async (authState: User | UserInterface | null) => {
    if (!authState) {
      setAuthUser(null);
      setAuthUserIsLoading(false);
      return;
    }

    setAuthUserIsLoading(true);
    const formatedProfil = formatUserProfile(authState);
    await getUserProfil(formatedProfil);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    authUser,
    authUserIsLoading,
  };
}
