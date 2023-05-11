export const LocalStorage = {
    putData: <T>(data: T, name: string) => {
        const json = JSON.stringify(data)
        localStorage.setItem(name, json);
    },
    getData: <T>(name: string): T[] => {
        if (localStorage.getItem(name)) {
            return JSON.parse(localStorage.getItem(name) || "")
        }else{
            return []
        }
    }
}