

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Image from "next/image";
import { LeadSearchForm } from "../../forms/leadSearchForm";
import viewCustomer from "@/app/requests/viewCustomer";


import getCustomers from "../../requests/getCustomers";

//Pass the Lead data through the params onto this page
export default async function CustomerDetails({params,}: 
    {params: Promise<{customerId: string}>;}) 
    {
      //Next Steps when you click on the button needs to pass values into a Table
      // const data = await viewCustomer("1");
      // console.log(data)
      let customer = null;
  
      const customerId = (await params).customerId
      console.log(customerId + " This is on the Lead Page");
  
      try {
        customer = await viewCustomer("1");
        //This is not working (value not being passed after redirect)
        console.log(customer);
      } catch (error) {
        console.error('Error fetching customer:', error);
      }
  
      //Need to style this page using ShadCn then we are done.
    
      return (
          <div className="py-4">
            <div className="pl-8">
                <div><Image
                            src="/MB.png"
                            width={300}
                            height={300}
                            alt="MB Logo"
                          />
                        </div>
            </div>
            <div className="p-8">
              <h1 className="mb-6 text-3xl font-bold">Lead Details</h1>
              {/* <div>{customer.Firstname}</div> */}
              {/* <customerSearchForm customer ={customer}/> */}
              <LeadSearchForm customer ={customer}/>
            </div>
          </div>
          
      );
    }
  