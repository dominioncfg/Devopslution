using System.Collections.Generic;
using System;
namespace Devopslution.Domain.Services.Technologies
{
    public class TechnologyService: ITechnologyService
    {
        private readonly ITechnologyRepository TechRepo;
        public TechnologyService(ITechnologyRepository techRepo)
        {
            this.TechRepo= techRepo;

        }
        public IEnumerable<ITechnology> GetAll()
        {
            if(TechRepo==null)
            {
                throw new System.ArgumentNullException("techRepo","The Repo is required.");
            }        
           return TechRepo.GetAll();
        }
    }
}