"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { roasterFormSchema } from "@/containers/forms/validators/newRoasterValidator";
import Input from "@/components/Input";
import Select from "@/components/Select";

export default function NewRoasterForm({ data }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<any>({
    resolver: zodResolver(roasterFormSchema, {}, { raw: true }),
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log("data from new roaster form", data);
    try {
    } catch (error) {
      console.log("Error submitting new roaster", error);
    }
  };

  return <form onSubmit={handleSubmit(onSubmit)}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:max-w-screen-lg"
  >
    <Input label="Name" {...register("name")} error={errors.name?.message} required/>
    <Input
  label="Address"
  {...register("location.address")}
  error={errors.location?.address?.message}
  required
/>

<Input
  label="Latitude"
  {...register("location.geo.lat", { valueAsNumber: true })}
  error={errors.location?.geo?.lat?.message}
  required
/>

<Input
  label="Longitude"
  {...register("location.geo.long", { valueAsNumber: true })}
  error={errors.location?.geo?.long?.message}
  required
/>

<Input
  label="Email"
  {...register("contactInfo.email")}
  error={errors.contactInfo?.email?.message}
  required
/>

<Input
  label="Phone Number"
  {...register("contactInfo.phoneNumber")}
  error={errors.contactInfo?.phoneNumber?.message}
  required
/>

<Input
  label="Website"
  {...register("website")}
  error={errors.website?.message}
  required
/>

<Input
  label="Instagram URL"
  {...register("socialMedia.instagram.url")}
  error={errors.socialMedia?.instagram?.url?.message}
  required
/>

<Input
  label="Instagram Handle"
  {...register("socialMedia.instagram.handle")}
  error={errors.socialMedia?.instagram?.handle?.message}
  required
/>
  </form>;
}
