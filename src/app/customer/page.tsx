import { DataTable } from "./data-table";
import {Customer, columns} from './columns'
import getCustomers from "../requests/getCustomers";
import Image from "next/image";

export default async function Page() {

  //Next Steps when you click on the button needs to pass values into a Table
  const data = await getCustomers();

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
          <h1 className="mb-2 text-3xl font-bold">Customer Search</h1>
          <DataTable columns={columns} data={data}/>
        </div>
      </div>
      
  );
}


