using System.Collections.Generic;
namespace Devopslution.Domain.Services.Technologies
{
    public class TechnologyRepository : ITechnologyRepository
    {
        public IEnumerable<ITechnology> GetAll()
        {
            List<ITechnology> techs = new List<ITechnology>()
            {
                new Technology()
                {
                    Id =1,
                    Name =".Net Core",
                    ImageUrl ="NetCoreLogo.svg",
                },
                new Technology()
                {
                    Id =2,
                    Name ="C#",
                    ImageUrl ="CSharpLogo.svg",
                }, 
                new Technology()
                {
                    Id =3,
                    Name ="Git",
                    ImageUrl ="GitLogo.svg",
                }, 
                new Technology()
                {
                    Id =4,
                    Name ="GitHub",
                    ImageUrl ="GitHubLogo.svg",
                },               
               
                new Technology()
                {
                    Id =5,
                    Name ="Node.js",
                    ImageUrl ="Node.jsLogo.svg",
                },
                new Technology()
                {
                    Id =6,
                    Name ="NPM",
                    ImageUrl ="NpmLogo.svg",
                },
                new Technology()
                {
                    Id =7,
                    Name ="Webpack",
                    ImageUrl ="WebpackLogo.svg",
                },
                new Technology()
                {
                    Id =8,
                    Name ="TypeScript",
                    ImageUrl ="TypeScriptLogo.svg",
                },
                new Technology()
                {
                    Id =9,
                    Name ="Babel.js",
                    ImageUrl ="BabelJsLogo.svg",
                },
                new Technology()
                {
                    Id =10,
                    Name ="Sass",
                    ImageUrl ="SassLogo.svg",
                },
                 new Technology()
                {
                    Id =11,
                    Name ="Azure Devops",
                    ImageUrl ="SassLogo.svg",
                },
               
            };
            foreach (var tech in techs)
            {
                tech.ImageUrl = "/techs/" + tech.ImageUrl;
            }
            return techs;
        }
    }
}