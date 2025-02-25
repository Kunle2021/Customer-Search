"use client"

//Import my interfaces
import {Customer} from '@/app/interfaces/customer'
import { Button } from "@/components/ui/button"
import { PaperClipIcon } from '@heroicons/react/20/solid'
import onClickLeads from '../onclick/onClickLeads'


// type SampleProps = { customer: any}
//Could this be an interface to better access other values
type SampleProps = {
    customer: Customer;
}

//Validation not doing this right now (will do later)
//How can I make this editable and maybe part of a form (could this also be validated)

export function CustomerSearchForm({customer} : SampleProps){

  return (
    <div>
        <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">Customer Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Customer and Lead details.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Customer</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{`${customer.Title} ${customer.Firstname} ${customer.Lastname}`}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{`${customer.AddressLine1}, ${customer.Town}${
            customer.County ? ', ' + customer.County : ''
          }, ${customer.Postcode}${customer.Country ? ', ' + customer.Country : ''}`}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Email Address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{customer.EmailAddress}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Phone Number</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{customer.Telephone}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Notes</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Leads</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Lead Campaign</span>
                      <span className="shrink-0 text-gray-400">{customer.Leads?.[0].CommunicationCode}</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => onClickLeads(customer.Id.toString())}>
                    View Lead
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
          {/* <div className=''>
            <Button type="submit">Update Details</Button>
          </div> */}
        </dl>
      </div>
    </div>
    </div>
  )
}


