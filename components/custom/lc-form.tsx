"use client"
import { zodResolver } from "@hookform/resolvers/zod"

import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
// import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  ProblemID: z.coerce.number().positive(),
})

export function LCForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ProblemID: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    router.push(`/problems/${values.ProblemID}`)
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="ProblemID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Problem ID</FormLabel>
              <FormControl>
                <Input placeholder="enter the problem id" {...field} />
              </FormControl>
              <FormDescription>
                Get ready to brainstorm on the whiteboard for your chosen
                problem.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
