import axios from 'axios'

class Server
{
    constructor(){}

    async GetResults()
    {
        try
        {
            const topUsersList = await axios.get('http://192.168.1.105:7000/get')
            return topUsersList.data
        }
        catch(e)
        {
            console.log(e)
        }
    }
    async SendResults()
    {
        try
        {
            const sendUserResults = await axios.post('http://192.168.1.105:7000/set')
            return sendUserResults.data
        }
        catch(e)
        {
            console.log(e)
        }
    }
}

export const server = new Server()