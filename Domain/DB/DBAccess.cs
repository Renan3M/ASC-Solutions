using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using System.Data;
using Domain.Models;
using System.Data.SQLite;
using System.ComponentModel;

namespace Domain.DB
{
    // Unfortunately SQLite does not support procedures, so query could be exposed to SQL Injection and others security issues. 
    public class DBAccess
    {
        public static List<Student> GetStudents()
        {
            using (IDbConnection connection = new SQLiteConnection(Helper.CnnVal()))
            {
                return connection.Query<Student>($"select * from Student", new DynamicParameters()).ToList();
            }
        }

        public static int UpdateClasses(List<Student> list)
        {
            using (IDbConnection connection = new SQLiteConnection(Helper.CnnVal()))
            {
                return connection.Execute("update Student set class = @class where Id = @id", list);
            }
        }

        public static List<Exam> GetGrades()
        {
            using (IDbConnection connection = new SQLiteConnection(Helper.CnnVal()))
            {
                return connection.Query<Exam>($"select * from Grades", new DynamicParameters()).ToList();
            }
        }

        public static int UpdateExams(List<Exam> list)
        {
            using (IDbConnection connection = new SQLiteConnection(Helper.CnnVal()))
            {
                return connection.Execute($"update grades set " +
                     $"firstGrade = @firstGrade, " +
                     $"secondGrade = @secondGrade, " +
                     $"thirdGrade = @thirdGrade, " +
                     $"recGrade = @recGrade, " +
                     $"finalGrade = @finalGrade, " +
                     $"approved = @approved " +
                     $"where Id = @id", list);
            }
        }
    }
}