import React from "react";
import Button from "./Button";
import { logOut } from "@/api/auth";
import Container from "./Container";
import { UserInterface } from "@/types/user";

interface Props {
  user: UserInterface | null;
}

export default function MyAccount({ user }: Props) {
  const handleLogOut = async () => {
    await logOut();
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
          <p>Nom : {user?.lastname}</p>
          <p>Prénom : {user?.firstname}</p>
          <p>Adresse : {user?.adress}</p>
          <p>Ville : {user?.city}</p>
          <p>Adresse Email : {user?.email}</p>
        </Container>
        <Container
          title="Mon historique de réservation :"
          color="gray"
          className="w-full lg:w-1/2"
        >
          <p>Aucune réservation n&apos;a encore été efféctuée</p>
        </Container>
      </div>
      <Container>

      </Container>
      <div className="flex w-full">
        <Button
          type="button"
          action={handleLogOut}
          theme="alert"
          className="w-60 m-auto mb-20"
        >
          Se deconnecter
        </Button>
      </div>
    </div>
  );
}
