"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { roasterFormSchema } from "@/containers/forms/validators/newRoasterValidator";
import { SubmitHandler, useForm } from "react-hook-form";
// TODO implent new roaster form
function NewRoaster() {
  const form = useForm<z.infer<typeof roasterFormSchema>>({
    resolver: zodResolver(roasterFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = (values: z.infer<typeof roasterFormSchema>) => {
    console.log("valuyes", values);
  };
  return (
    // <div className="w-1/3 items-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>The roaster or shops name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
    // </div>
  );
}

export default NewRoaster;
