export default {
    fetchingLocal: async <T>(url: string): Promise<T> => {
        const json = await fetch(`/data/${url}.json`)
        const elem = await (json.json() as Promise<T>)
        return elem
    }
}