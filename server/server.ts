import axios from 'axios'

class Server
{
    constructor(){}

    async GetResults()
    {
        try
        {
            const topUsersList = await axios.get('http://90.156.209.13:7000/get')
            return topUsersList.data
        }
        catch(e)
        {
            console.log(e)
        }
    }
    async SendResults(data : any)
    {
        try
        {
            const sendUserResults = await axios.post('http://90.156.209.13:7000/set', data)
            return sendUserResults.data
        }
        catch(e)
        {
            console.log(e)
        }
    }
}

export const server = new Server()