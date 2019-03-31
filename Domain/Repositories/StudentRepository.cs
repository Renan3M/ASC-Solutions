using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using System.Data;
using Domain.Models;
using System.Data.SQLite;

namespace Domain.Repositories
{
    public class StudentRepository
    {


        public List<Student> GetStudents()
        {
            using (IDbConnection connection = new SQLiteConnection(Helper.CnnVal()))
            { 
                var output = connection.Query<Student>($"select * from Student", new DynamicParameters()).ToList();
                return output;
            }
        }

        public int UpdateClasses(List<Student> list)
        {
            using (IDbConnection connection = new SQLiteConnection(Helper.CnnVal()))
            {
                var output = connection.Execute("update Student set class = @class where Id = @id", list);
                return output;
            }
        }
    }
}