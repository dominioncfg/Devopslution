import ITechnology from './ITechnology'
export default class Technology implements ITechnology{
    id: number;
    name: string;
    imageUrl:string;
    constructor(id: number,name: string,imageUrl: string,) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
}