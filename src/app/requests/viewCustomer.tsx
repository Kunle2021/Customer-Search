const X_API_KEY = 'uguUUP7cul8pKSAK8AP1Ea72kvkDkcWN8nDRlucx'
const BASE_URL = 'https://xjcanww7p7.execute-api.eu-west-1.amazonaws.com/poc/customer';

async function viewCustomer(id: string){
    console.log(`Row ${ id }`);

    //Load data on the page (View.tsx)
    const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'x-api-key' : X_API_KEY,
        },
      }
  
      // const url = '/api/handleCustomer'
      const response = await fetch(`${BASE_URL}/${id}`, options)
      const data = await response.json();
    //   console.log(data);
  
      return data;
}

export default viewCustomer;