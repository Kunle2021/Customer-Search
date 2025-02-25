"use client"

import { ColumnDef } from "@tanstack/react-table"

import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Customer = {
  Id: string
  Title: string
  Firstname: string
  LastName: string
  EmailAddress: string
  Postcode: string
  Created: string
  Modified: string
}

//This Table Row Id needs to be hidden (Done)

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "Id",
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: "Title",
    header: "Title",
  },
  {
    accessorKey: "Firstname",
    header: "Firstname",
  },
  {
    accessorKey: "Lastname",
    header: "Lastname",
  },
  {
    accessorKey: "EmailAddress",
    header: "EmailAddress",
  },
  {
    accessorKey: "Postcode",
    header: "Postcode",
  },
  {
    accessorKey: "Created",
    header: "Created",
    //This cause a hydration Error (not sure why at the moment - same as below)
    // cell: ({row}) => {
    //   const date = new Date(row.getValue('Created'))
    //   const formatted = date.toLocaleDateString()
    //   return <div className="font-medium">{formatted}</div>
    // }
  },
  {
    accessorKey: "Modified",
    header: "Modified",
    // cell: ({row}) => {
    //   const date = new Date(row.getValue('Modified'))
    //   const formatted = date.toLocaleDateString()
    //   return <div className="font-medium">{formatted}</div>
    // }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customer = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(customer.Id)}
            >
              Copy customer ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer
            </DropdownMenuItem>
            {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]

