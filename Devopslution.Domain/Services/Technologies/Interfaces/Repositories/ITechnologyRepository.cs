using System.Collections.Generic;
namespace Devopslution.Domain.Services.Technologies
{
    public interface ITechnologyRepository
    {
        IEnumerable<ITechnology> GetAll();
    }
}