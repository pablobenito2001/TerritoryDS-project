export const generateID = (except: number[]): number => {
    let result: number;
    do{
        const num = Math.random() * 100;
        const array: Uint32Array = new Uint32Array(num);
        self.crypto.getRandomValues(array);
        result = array[Math.floor(Math.random() * num)];
    }while(except.some((elem: number) => elem === result));

    return result;
};