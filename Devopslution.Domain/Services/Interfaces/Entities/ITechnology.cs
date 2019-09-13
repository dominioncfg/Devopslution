namespace Devopslution.Domain
{
    public interface ITechnology
    {
        long Id { get; set; }
        string Name { get; set; }
        string ImageUrl { get; set; }
    }
}