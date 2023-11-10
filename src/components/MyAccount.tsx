import React, { useState } from "react";
import Button from "./Button";
import { logOut } from "@/api/auth";
import Container from "./Container";
import { UserInterface } from "@/types/user";
import Announcement from "./Announcement";
import UserEditor from "./UserEditor";
import { useAuth } from "@/context/AuthUserContext";

interface Props {
  user: UserInterface | null;
}

export default function MyAccount({ user }: Props) {
  const [editorMode, setEditorMode] = useState(false);
  
  const handleLogOut = async () => {
    await logOut();
  };

  const handleEdit = () => {
    setEditorMode(true);
  };

  const handleCloseEdit = () => {
    setEditorMode(false);
  };

  return (
    <div>
      <h1 className="text-center md:text-left font-bold text-2xl pt-2 pb-10 px-10 md:px-0">
        Mon compte
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <Container
          title="Mes informations personnelles :"
          color="gray"
          className="w-full lg:w-1/2"
        >
          {!editorMode ? (
            <>
              <p>Nom : {user?.lastname}</p>
              <p>Prénom : {user?.firstname}</p>
              <p>Adresse : {user?.adress}</p>
              <p>Ville : {user?.city}</p>
              <p>Adresse Email : {user?.email}</p>
              <Button type="button" action={handleEdit} className="mt-10">
                Modifier
              </Button>
            </>
          ) : (
            <UserEditor user={user} closeEditor={handleCloseEdit} />
          )}
        </Container>
        <Container
          title="Mon historique de réservation :"
          color="gray"
          className="w-full lg:w-1/2"
        >
          <p>Aucune réservation n&apos;a encore été efféctuée</p>
        </Container>
      </div>
      <div className="flex w-full">
        <Button
          type="button"
          action={handleLogOut}
          theme="alert"
          className="w-60 m-auto my-20"
        >
          Se deconnecter
        </Button>
      </div>
    </div>
  );
}
