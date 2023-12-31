interface Database {
    get(id: string): string;
    set(id: string, value: string): void
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void
}

class InMemoryDatabase implements Database {
    protected db: Record<string, string> = {};
    get(id: string): string {
        return this.db[id];
    }
    set(id: string, value: string): void {
        this.db[id] = value
    }
}

// set db to protected so that descendant classes have access as well 
class PersistentMemoryDB extends InMemoryDatabase implements Persistable{
    saveToString(): string {
        return JSON.stringify(this.db)
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState)
    }
}

const myDB = new PersistentMemoryDB()
myDB.set("foo", "bar")
// make db private so that it can not me set this way
// myDB.db["foo"] = "baz"
console.log(myDB.get("foo"))
const saved = myDB.saveToString()
myDB.set("foo", "db1 - bar")
console.log(myDB.get("foo"))

const myDB2 = new PersistentMemoryDB()
myDB2.restoreFromString(saved)
console.log(myDB2.get("foo"))