import { UserInterface } from "@/types/user";
import React from "react";
import Button from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { EditorInputs } from "@/types/inputs";
import { updateUserProfile } from "@/api/auth";
import { useAuth } from "@/context/AuthUserContext";

interface Props {
  user: UserInterface | null;
  closeEditor: () => void;
}

export default function UserEditor({ user, closeEditor }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditorInputs>();

  const handleCancel = () => {
    closeEditor();
  };

  const onSubmit: SubmitHandler<EditorInputs> =async (data) => {
    await updateUserProfile(data)
    
    closeEditor()
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} action="">
      <div className="flex gap-6 justify-between">
        <label htmlFor="lastname">Nom :</label>
        <input
          type="text"
          id="lastname"
          {...register("lastname", { required: true })}
          defaultValue={user?.lastname}
          className="w-3/4"
        />
      </div>
      <div className="flex gap-6 justify-between">
        <label htmlFor="lastname">Prénom :</label>
        <input
          type="text"
          id="firstname"
          {...register("firstname", { required: true })}
          defaultValue={user?.firstname}
          className="w-3/4"
        />
      </div>
      <div className="flex gap-6 justify-between">
        <label htmlFor="lastname">Adresse :</label>
        <input
          type="text"
          id="adress"
          {...register("adress", { required: true })}
          defaultValue={user?.adress}
          className="w-3/4"
        />
      </div>
      <div className="flex gap-6 justify-between">
        <label htmlFor="lastname">Ville :</label>
        <input
          type="text"
          id="city"
          {...register("city", { required: true })}
          defaultValue={user?.city}
          className="w-3/4"
        />
      </div>
      <div className="flex w-full gap-10 justify-center pt-10">
        <Button
          type="button"
          action={handleCancel}
          theme="alert"
          className="w-full"
        >
          Annuler
        </Button>
        <Button type="submit" className="w-full">
          Valider
        </Button>
      </div>
    </form>
  );
}
