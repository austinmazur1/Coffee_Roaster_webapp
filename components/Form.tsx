"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
// import { FormSchemaInputType, formSchema, titleOptions } from '@/schemas/schema';
import {
  beanFormSchema,
  roastLevelOptions,
  brewMethodOptions,
} from "@/schemas/beanFormSchema";
import Checkbox from "./Checkbox";
import { useEffect } from "react";

export default function Form({ data }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<any>({
    resolver: zodResolver(beanFormSchema, {}, { raw: true }),
  });
  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log('data',data)
    const formData = new FormData();

    console.log('PRE_formdata', formData)
    for (const field of Object.keys(data) as Array<keyof typeof data>) {
          formData.append(`${field}`, `${data[field]}`);
        }

        console.log('formdata', formData)
  
    await fetch('/api/roasters/', { body: formData, method: 'POST' });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:max-w-screen-lg"
    >
      <Select
        label="Roaster"
        options={data}
        {...register("roaster")}
        error={errors.roaster?.message}
        required
      />
      <Input
        label="Name"
        // options={titleOptions} //Enums
        {...register("name")}
        error={errors.name?.message}
        required
      />

      <Input
        label="Origin"
        {...register("origin")}
        error={errors.origin?.message}
        required
      />

      <Input
        label="Process"
        {...register("process")}
        error={errors.process?.message}
        required
      />

      <Input
        label="Elevation"
        {...register("elevation")}
        error={errors.elevation?.message}
        required
      />

      <Input
        label="Notes"
        {...register("notes")}
        error={errors.notes?.message}
        required
      />

      <Select
        label="Roast Level"
        options={roastLevelOptions}
        {...register("roastLevel")}
        error={errors.roastLevel?.message}
        required
      />

      <Select
        label="Brew Methods"
        options={brewMethodOptions}
        {...register("brewMethods")}
        type="url"
        error={errors.brewMethods?.message}
        required
      />

      <button
        type="submit"
        className="col-span-full px-6 py-3 uppercase font-bold bg-green-500 hover:bg-green-400 rounded-sm transition-all shadow-md"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
