import Chance from 'chance';

export const GeneratePersonalToken = () => {
    let token = ""
    const chance = new Chance()
    const letters = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K']
    while(token.length < 10)
    {
        token += String(chance.integer({min: 0, max: 100}))
        token += String(letters[chance.integer({min: 0, max: letters.length - 1})])
    }

    return token
}