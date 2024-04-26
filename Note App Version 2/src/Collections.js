export default class Collections {
    static collectionInstance = null;
    name = "";
    documents = [];

    constructor(name) {
        if(Collections.collectionInstance) {
            console.log('Cannot create more than one');
            return Collections.collectionInstance;
        }
        else {
            if(name !== "") {
                Collections.collectionInstance = this;
                this.name = name;
            }
            else {
                // Error prevents constructor from creating an 
                // instance which is the desired case here.
                throw new Error("Cannot instantiate a collection with an empty string or array");
            }
        }
    }

    setCollection(data) {
        this.documents = data;
        localStorage.setItem(this.name, JSON.stringify(this.documents)); 
    }

    getDocuments() {
        this.documents = JSON.parse(localStorage.getItem(this.name));
        if(this.documents == undefined) return [];
        return this.documents;
    }

    save(object) {
        this.append(object);
        localStorage.setItem(this.name, JSON.stringify(this.documents));      
    };

    clear() {
        localStorage.removeItem(this.name);
    };

    removeAt(index) {
        // I decided not to remove notes(data) from the 
        // document to ensure data integrity, so that the
        // cache::this.documents reflects what is in the storage
        // and has the same size as the storage since the id of 
        // notes are dependent on the size of the document.
        // I hope, I am right for implementing this function this way.

        this.documents[index] = {
            ...this.documents[index], 
            title: "<deleted>", 
            content: ""
        };

        localStorage.setItem(this.name, JSON.stringify(this.documents)); // Update localstorage
    }

    append(obj) {
        this.documents.push(obj);
    }

    insertAt(index, obj) {
        this.documents[index] = obj;
        localStorage.setItem(this.name, JSON.stringify(this.documents));
    }

    getSize() {
        return this.documents.length;
    }
} 