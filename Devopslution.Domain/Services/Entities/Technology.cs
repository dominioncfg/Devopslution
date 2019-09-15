namespace Devopslution.Domain
{
    public class Technology : ITechnology
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
    }
}