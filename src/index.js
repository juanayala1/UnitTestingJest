const animals = ['gato', 'perro', 'tigre', 'leon', 'pantera'];

const randomString = () =>{
const string = animals[Math.floor(Math.random() * animals.length)];
return string;
}


const reverseString2 = str =>{
    return new Promise((resolve, reject) =>{
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    });
};


module.exports = {randomString, reverseString2};
