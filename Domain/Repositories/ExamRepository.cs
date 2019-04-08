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

namespace Domain.Repositories
{
    public class ExamRepository
    {
        private List<Exam> _grades;
        public List<Exam> grades {
            get {
                if (this._grades == null)
                {
                    this._grades = DB.DBAccess.GetGrades();
                }
                return this._grades;
            }
            set{
                if (value != null || value?.Count != 0)
                {
                    this._grades = value;
                    DB.DBAccess.UpdateExams(value);
                }
            }}

        public List<Exam> GetGrades() {
            return this.grades;
        }

        public int SetGrades(List<Exam> newGrades)
        {
            this.grades = newGrades;
            return 1;
        }
    }
}