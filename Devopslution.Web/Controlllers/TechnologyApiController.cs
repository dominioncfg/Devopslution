using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Devopslution.Domain;

namespace Devopslution.Web
{

    [Route("api/techs")]
    [ApiController]
    public class TechnologyApiController : ControllerBase
    {
        private readonly ITechnologyRepository technologyRepository;

        public TechnologyApiController(ITechnologyRepository techsRepo)
        {
            technologyRepository = techsRepo;
        }
        public IEnumerable<ITechnology> Get()
        {
            return technologyRepository.GetAll();
        }

    }
}