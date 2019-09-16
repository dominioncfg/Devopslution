using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Devopslution.Domain.Services.Technologies;

namespace Devopslution.Web
{

    [Route("api/techs")]
    [ApiController]
    public class TechnologyApiController : ControllerBase
    {
        private readonly ITechnologyService technologyRepository;

        public TechnologyApiController(ITechnologyService techsRepo)
        {
            technologyRepository = techsRepo;
        }
        public IEnumerable<ITechnology> Get()
        {
            return technologyRepository.GetAll();
        }

    }
}