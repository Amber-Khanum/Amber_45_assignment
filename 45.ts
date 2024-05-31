function cars_info(manufacturer:string, model:string, ...option:{ [key : string] : string | boolean } []):
object {
    let carinfo = {
        manufacturer,
        model,
        ...Object.assign( {}, ...option)
    }
    return carinfo;
};

console.log( cars_info('Toyota', 'Mark X', {color: 'White'}, {suspensions: true}) );