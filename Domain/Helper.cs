using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace Domain
{
    public class Helper
    {
        public static string CnnVal(string name = "Default")
        {
            return ConfigurationManager.ConnectionStrings[name].ConnectionString;
        }
    }
}