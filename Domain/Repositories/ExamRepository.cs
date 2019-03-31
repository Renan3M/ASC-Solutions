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
    public class ExamRepository
    {


        public List<Exam> GetGrades()
        {
            using (IDbConnection connection = new SQLiteConnection(Helper.CnnVal()))
            {
                var output = connection.Query<Exam>($"select * from Grades", new DynamicParameters()).ToList();
                return output;
            }
        }

        public int UpdateExams(List<Exam> list)
        {
            using (IDbConnection connection = new SQLiteConnection(Helper.CnnVal()))
            {
               // var output = connection.Execute("INSERT INTO Grades(firstGrade, secondGrade, thirdGrade, recGrade, finalGrade, studentId, studentName) VALUES(@firstGrade, @secondGrade, @thirdGrade, @recGrade, @finalGrade, @studentId, @studentName)",list);
                
                var output = connection.Execute($"update Grades set " +
                                                $"firstGrade = @firstGrade, " +
                                                $"secondGrade = @secondGrade, " +
                                                $"thirdGrade = @thirdGrade, " +
                                                $"recGrade = @recGrade, " +
                                                $"finalGrade = @finalGrade, " +
                                                $"studentId = @studentId, " +
                                                $"studentName = @studentName  " +
                                                $"where Id = @id", list);
                                                                 
                return output;
            }
        }
    }
}