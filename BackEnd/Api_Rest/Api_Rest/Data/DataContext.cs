using Api_Rest.Models;
using Microsoft.EntityFrameworkCore;

namespace Api_Rest.Data
{
    public class DataContext :DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {          
        }
        
        public DbSet<ContasAPagar> ContasAPagar { get; set; }
    }
}
