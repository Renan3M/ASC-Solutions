using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Domain.DB
{
    public class ASContext : DbContext
    {
        DbSet<Models.Student> Students { get; set; }
    }
}