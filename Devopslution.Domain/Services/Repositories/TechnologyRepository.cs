using System.Collections.Generic;
namespace Devopslution.Domain
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
                    Name ="",
                    ImageUrl ="",
                }
            };

            return techs;
        }
    }
}