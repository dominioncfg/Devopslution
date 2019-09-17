namespace Devopslution.Domain.Services.Technologies
{
    public class Technology : ITechnology
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
    }
}