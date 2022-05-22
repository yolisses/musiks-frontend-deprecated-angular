export function bigNumberString(value:number):string{
    const identifiers = ['','k','m','b']

    let divider = 1
    for (let i = 0; i<  identifiers.length; i++){
        const nextDivider = divider * 1000
        if(value < nextDivider){
            const quantizedValue = Math.floor((value * 10)/divider)/10
            return quantizedValue + identifiers[1]
        }
        divider = nextDivider
    }
    return ''
}