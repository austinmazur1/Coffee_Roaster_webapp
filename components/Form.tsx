"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
import {
  beanFormSchema,
  roastLevelOptions,
  brewMethodOptions,
} from "@/schemas/beanFormSchema";
import Checkbox from "./Checkbox";

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

 for (const field of Object.keys(data)) {
    if (typeof data[field] === 'object') {
      formData.append(field, JSON.stringify(data[field])); // Serialize nested objects
    } else {
      formData.append(field, data[field]);
    }
  }
  
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
        label="Country"
        {...register("origin.country")}
        error={errors.origin?.country?.message}
        required
      />
      <Input
        label="Region"
        {...register("origin.region")}
        error={errors.origin?.region?.message}
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
