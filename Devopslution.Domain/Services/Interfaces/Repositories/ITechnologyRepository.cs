using System.Collections.Generic;
namespace Devopslution.Domain
{
    public interface ITechnologyRepository
    {
        IEnumerable<ITechnology> GetAll();
    }
}