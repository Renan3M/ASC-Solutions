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
            private List<Student> _students;
            public List<Student> students
            {
                get
                {
                    if (this._students == null)
                    {
                        this._students = DB.DBAccess.GetStudents();
                    }
                    return this._students;
                }
                set
                {
                    if (value != null || value?.Count != 0)
                    {
                        this._students = value;
                        DB.DBAccess.UpdateClasses(value);
                    }
                }
            }

            public List<Student> GetStudents()
            {
                return this.students;
            }

            public int SetStudents(List<Student> newStudents)
            {
                this.students = newStudents;
                return 0;
            }
    }
}