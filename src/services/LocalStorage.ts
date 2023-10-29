export const LocalStorage = {
    putData: <T>(data: T, name: string) => {
        const json = JSON.stringify(data)
        localStorage.setItem(name, json);
    },
    getData: (name: string) => {
        if (localStorage.getItem(name)) {
            let ret = JSON.parse(localStorage.getItem(name) || "");
            return ret;
        }else{
            return []
        }
    }
}