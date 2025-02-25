const X_API_KEY = 'uguUUP7cul8pKSAK8AP1Ea72kvkDkcWN8nDRlucx'
const BASE_URL = 'https://xjcanww7p7.execute-api.eu-west-1.amazonaws.com/poc/customer';

import {Customer} from '../customer/columns'
//Firstly call the API 
//There will be two endpoints that need to be returned

//Move the below into a new function 
async function getCustomers(): Promise<Customer[]> {

    // let postBody = {
    //   "Lastname": "Lord",
    //   "EmailAddress": "chris.lord@rapp.com"    
    // }

    const Lastname = "Lord"
    const EmailAddress = "chris.lord@rapp.com"

    //This is the request body that is being past as params into the fetch
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key' : X_API_KEY,
      },
      // body: JSON.stringify(postBody)
      body: JSON.stringify({"Lastname": "", "EmailAddress": ""})
      //Using double quoutes in Json is important
    }

    // const url = '/api/handleCustomer'
    const response = await fetch(`${BASE_URL}/search`, options)
    const data = await response.json();
    // console.log(data);

    return data;
}

export default getCustomers;