const BASE_URL = 'https://xjcanww7p7.execute-api.eu-west-1.amazonaws.com/poc/customer';
const X_API_KEY = 'uguUUP7cul8pKSAK8AP1Ea72kvkDkcWN8nDRlucx'

//DONT DO THIS EVER AGAIN

const handler = async (req, res) => {

    //This needs to come from a user input
    const Lastname = req.body.Lastname
    const EmailAddress = req.body.EmailAddress

    let postBody = {
      "Lastname": Lastname,
      "EmailAddress": EmailAddress    
    }

    const options = {
      method: 'POST',
      headers: {
        'x-api-key' : X_API_KEY,
        'Accept': '*/*'
      },
      body: JSON.stringify(postBody)
    }

    try {
      const response = await fetch(`${BASE_URL}/search`, options)
      const data = await response.json();
      return res.end(JSON.stringify({'success':data}));
    } catch (error) {
      return res.end(JSON.stringify({'error':error.message}));
    }
    

}

export default handler;