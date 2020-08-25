const isRequired = value => { throw new Error(`${value} argument is required!`) };

function somefunction(name = isRequired('name')) {

    console.log(`My name is ${name}`);
}

somefunction('Matheus');

somefunction();