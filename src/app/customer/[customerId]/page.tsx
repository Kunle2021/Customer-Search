import viewCustomer from "@/app/requests/viewCustomer";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { CustomerForm} from '@/app/forms/customerForm'
import { CustomerSearchForm } from "@/app/forms/customerSearchForm";
import Image from "next/image";

//Will probably need to redirect back 

// export async function getServerSideProps() {
  
// }


export default async function CustomerDetails({params,}: 
  {params: Promise<{customerId: string}>;}) 
  {
    //Next Steps when you click on the button needs to pass values into a Table
    // const data = await viewCustomer("1");
    // console.log(data)
    let customer = null;

    const customerId = (await params).customerId
    // console.log(customerId);

    try {
      customer = await viewCustomer(customerId);
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
            <h1 className="mb-6 text-3xl font-bold">Customer Search</h1>
            {/* <div>{customer.Firstname}</div> */}
            {/* <customerSearchForm customer ={customer}/> */}
            <CustomerSearchForm customer ={customer}/>
          </div>
        </div>
        
    );
  }
  