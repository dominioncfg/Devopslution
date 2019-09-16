using System.Collections.Generic;
namespace Devopslution.Domain.Services.Technologies
{
    public interface ITechnologyService
    {
        IEnumerable<ITechnology> GetAll();
    }
}