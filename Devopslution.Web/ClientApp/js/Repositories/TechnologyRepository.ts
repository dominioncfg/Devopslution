
import ITechnology from '../Models/ITechnology'
import Technology from '../Models/Technology'
import ITechnologyRepository from './ITechnologyRepository'

export default class TechnologyRepository implements ITechnologyRepository {
    apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }
    
    async getAll(): Promise<ITechnology[]> {
        return await new Promise<ITechnology[]>((resolve) => {
            fetch(this.apiUrl).then(response => response.json()).then(responseObject => 
                { 
                    let  result: ITechnology[] = [];
                    if(responseObject.length>0)
                    {
                        responseObject.forEach((item:any)=> {
                            let id = item.id;
                            let name = item.name;
                            let imageUrl = item.imageUrl;
                            let tech: Technology = new Technology(id,name,imageUrl);
                            result.push(tech);
                        });

                    }
                    resolve(result); 
                });
        },)
    }
}