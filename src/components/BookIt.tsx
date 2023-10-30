"use client";
import { useAuth } from "@/context/AuthUserContext";
import { auth } from "@/firebase/config";
import { Hotel } from "@/types/data-firebase";
import {
  addDaysToDate,
  dateConvert,
  getDefaultEndDate,
  getDefaultStartDate,
} from "@/utils/date";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  hotel: Hotel;
  className?: string;
}

interface Inputs {
  startDateInput: string;
  endDateInput: string;
  otherPersInput: string;
}

export default function BookIt({ hotel, className }: Props) {
  const [startDate, setStartDate] = useState<Date>(
    new Date(getDefaultStartDate())
  );
  const [endDate, setEndDate] = useState<Date>(new Date(getDefaultEndDate()));
  const {
    register,
    resetField,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const {authUser, authUserIsLoading} = useAuth()
  const router = useRouter()

  const otherPers = +watch("otherPersInput", "0");

  const duration =
    (endDate.getTime() - startDate.getTime()) / (3600 * 1000 * 24);

  const price = hotel.price * duration + otherPers * 20;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (authUser && authUserIsLoading === false) {
      console.log(data)
      alert("reservation effectuée")
    } else {
      router.push("/Account")
    }
     
    
  };

  const onChangeStartDate = (e: any) => {
    const start = new Date(e.target.value);
    const end = new Date(addDaysToDate(e.target.value, 1));
    setStartDate(start);
    resetField("endDateInput");
    setEndDate(end);
    setValue("endDateInput", dateConvert(end));
  };

  const onChangeEndDate = (e: any) => {
    const end = new Date(e.target.value);
    setEndDate(end);
  };

  return (
    <div className={`${className}`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex  flex-col items-center md:flex-row gap-6 justify-between md:items-start bg-white rounded-2xl p-6 "
      >
        <div className="flex flex-col gap-4">
          <p>Période :</p>
          <div className="flex">
            <label htmlFor="startDate" className="w-20">
              arrivé :
            </label>
            <input
              {...register("startDateInput")}
              id="startDate"
              type="date"
              className="border px-1"
              defaultValue={dateConvert(startDate)}
              min={dateConvert(new Date(getDefaultStartDate()))}
              onChange={onChangeStartDate}
            />
          </div>
          <div className="flex">
            <label htmlFor="endDate" className="w-20">
              départ :
            </label>
            <input
              {...register("endDateInput")}
              id="endDate"
              type="date"
              className="border px-1"
              defaultValue={dateConvert(endDate)}
              min={dateConvert(addDaysToDate(startDate, 1))}
              onChange={onChangeEndDate}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="other-pers">Nombre de personne : </label>
            <select
              id="other-pers"
              {...register("otherPersInput")}
              defaultValue={"0"}
            >
              <option value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
            </select>
          </div>
          <p className="font-bold">Prix : {price.toFixed(2)}€</p>
          <button
            type="submit"
            className="bg-blue-600 w-full py-2 rounded-2xl text-white font-bold"
          >
            Réserver
          </button>
        </div>
      </form>
      </div>
  );
}
