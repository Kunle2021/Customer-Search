"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
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

//Import my interfaces
import {Customer} from '@/app/interfaces/customer'

// type SampleProps = { customer: any}
//Could this be an interface to better access other values
type SampleProps = {
    customer: Customer;
}

//Validation not doing this right now (will do later)

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function CustomerForm({customer} : SampleProps){
    // 1. Define your form.
    // const form = useForm<z.infer<typeof formSchema>>({
    //   resolver: zodResolver(formSchema),
    //   defaultValues: {
    //     username: "",
    //   },
    // })
    const form = useForm({
        defaultValues: {
            firstname: "",
        },
    })

  // 2. Define a submit handler. -- this was in the onsubmit to trigger validation 
  //values: z.infer<typeof formSchema>
  function onSubmit(values : string) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
       <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
      <form onSubmit={() => console.log("Updating Values....")} className="space-y-8">
        <div className="px-4 sm:px-0">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder={customer.Firstname} {...field} />
              </FormControl>
              <FormDescription>
                Customer
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button type="submit">Submit</Button>
      </form>
      </div>
    </Form>
  )
}


