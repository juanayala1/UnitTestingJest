const text = "Hola Mundo";
const fruits = ['Manzana', 'Melon', 'Pera', 'Banano'];

test('Debe contener un texto', () =>{
    expect(text).toMatch(/Mundo/);
})

test('Tenemos una banana?', ()=>{
    expect(fruits).toContain('Banano');
})

test('Mayor que', ()=>{
    expect(10).toBeGreaterThan(9);
})

test('Verdadero', ()=>{
    expect(true).toBeTruthy();
})

const reverseString = (str, callBack) =>{
    callBack(str.split("").reverse().join(""))
};

test("Probar un CallBack", () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    })
})

const reverseString2 = str =>{
    return new Promise((resolve, reject) =>{
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    });
};

test("Promar una promesa", () =>{
    return reverseString2('Hola').then(string =>{
        expect(string).toBe('aloH');
    })
    });

test("Probar async/await", async () => { 
    const string = await reverseString2('hola');
    expect(string).toBe('aloh');
});

// /* Funciones que se van a después de una prueba */
// afterEach(() => console.log('Después de cada prueba'));
// afterAll(()=> console.log('Después de todas las pruebas'));

// /* Funciones que se van a antes de una prueba */
// beforeEach(()=>console.log('Antes de cada prueba'));
// beforeAll(()=> console.log('Antes de todas las pruebas'));

