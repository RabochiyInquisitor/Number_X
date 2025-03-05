import Chance from 'chance';


export const Generate = (level: string) => {
    const chance = new Chance()
    const able_operations = ['+', '-'];
    if (level == "Easy") 
    {
        const current_operation = able_operations[chance.integer({min: 0, max: able_operations.length - 1})];

        const first_number = chance.integer({min: 10, max: 20}) 
        
        const second_number = chance.integer({min: 1, max: 10})

        switch (current_operation) {
            case '+': {
                return [first_number + second_number, String(first_number) + current_operation + String(second_number)];
            }
            case '-': {
                return [first_number - second_number, String(first_number) + current_operation + String(second_number)];
            }
            default: {
                return {a: 0, b: 0, c: 0};
            }
        }
    }
    else if (level == "Middle") 
    {
        const current_operation = able_operations[chance.integer({min: 0, max: able_operations.length - 1})];

        const first_number = chance.integer({min: 100, max: 200}) 
        
        const second_number = chance.integer({min: 50, max: 100})

        switch (current_operation) {
            case '+': {
                return [first_number + second_number, String(first_number) + current_operation + String(second_number)];
            }
            case '-': {
                return [first_number - second_number, String(first_number) + current_operation + String(second_number)];
            }
            default: {
                return {a: 0, b: 0, c: 0};
            }
        }
    }
    else if (level == "Hard") 
    {
        const current_operation = able_operations[chance.integer({min: 0, max: able_operations.length - 1})];

        const first_number = chance.integer({min: 500, max: 800}) 

        const second_number = chance.integer({min: 200, max: 500})

        switch (current_operation) {
            case '+': {
                return [first_number + second_number, String(first_number) + current_operation + String(second_number)];
            }
            case '-': {
                return [first_number - second_number, String(first_number) + current_operation + String(second_number)];
            }
            default: {
                return {a: 0, b: 0, c: 0};
            }
        }
    }
}