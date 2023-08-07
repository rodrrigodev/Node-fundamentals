// What's # in front of database ?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
// https://dev.to/smitterhane/private-class-fields-in-javascript-es2022-3b8

export class Database {
    #database = {}

    select(table){
        const data = this.#database[table] ?? []
        
        return data
    }

    insert(table, data){
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        return data
    }
}