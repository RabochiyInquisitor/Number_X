export const QuickSort = (array : any, key : string) : any => {
    if(array.length <= 1)
        return array

    let pivot = Number(array[(array.length -1)][key])
    if(key.slice(-4) == "Time")
        pivot = Number(array[array.length -1][key].split(':')[0]) * 60 +  Number(array[array.length -1][key].split(':')[1])
    let left = []
    let right = []

    
    
    for(let i = 0; i < array.length - 1; i++)
    {
        if(key.slice(-4) == "Time")
        {
            if(Number(array[i][key].split(":")[0]) * 60 < pivot)
                left.push(array[i])
            else
                right.push(array[i])
        }
        else
        {
            if(Number(array[i][key]) < pivot)
                right.push(array[i])
            else
                left.push(array[i])
        }
    }

    return [...QuickSort(left, key), array[array.length - 1], ...QuickSort(right, key)]

    
}