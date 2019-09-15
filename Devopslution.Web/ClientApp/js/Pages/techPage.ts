import ITechnologyRepository from '../Repositories/ITechnologyRepository'
import TechnologyRepository from '../Repositories/TechnologyRepository'
import ITechnology from '../Models/ITechnology'
import Technology from '../Models/Technology'

export default class TechnologyPage {
    private async getTechs(): Promise<ITechnology[]> {
        var apiUrl = "/api/techs";
        let techRepo: ITechnologyRepository = new TechnologyRepository(apiUrl);
        let technologies: ITechnology[] = await techRepo.getAll();
        return technologies;
    }
    private drawTechs(techs: ITechnology[]) {
        let techsContainer = document.getElementById("techsContainer");

        let haveTech = techs != null && techs.length > 0;
        let containerExist = techsContainer != null;

        console.log(haveTech);
        console.log(containerExist);
        if (haveTech && containerExist) {
            
            //***Empty
            while (techsContainer!.firstChild) {
                techsContainer!.removeChild(techsContainer!.firstChild);
            }

            //**Add Each Item
            techs.forEach(tech => {
                //**Cretate Element
                let itemContainer  = document.createElement("div");
                let imageContainer  = document.createElement("a");
                let textContainer  = document.createElement("a");
                let titleElement  = document.createElement("h1");
                let imageElement  = document.createElement("div");
                
                //**Content
                titleElement.innerText = tech.name;
                itemContainer.setAttribute("data-id",tech.id.toString());
                imageElement.style.backgroundImage = "url('" + tech.imageUrl +"')";

                //**Classes
                itemContainer.classList.add("tech__item");
                imageContainer.classList.add("tech__image");
                textContainer.classList.add("tech__title");


                //**References
                textContainer.appendChild(titleElement);
                imageContainer.appendChild(imageElement);
                itemContainer.appendChild(imageContainer);
                itemContainer.appendChild(textContainer);
                techsContainer!.appendChild(itemContainer);
            });
        }

    }
    async run() {
        try {
            let techs = await this.getTechs();
            this.drawTechs(techs);
        } catch (error) {
            let errorContainer = document.getElementById("jsContent");
            if (errorContainer != null) {
                errorContainer.innerHTML = error.toString();
            }

        }
    }

}


