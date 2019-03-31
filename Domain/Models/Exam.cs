using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Domain.Models
{
    public class Exam
    {
        [Key]
        public int Id { get; set; }
        public float FirstGrade { get; set; }
        public float SecondGrade { get; set; }
        public float ThirdGrade { get; set; }
        public float RecGrade { get; set; }
        public float FinalGrade { get; set; }
        public string studentName { get; set; }
        public int studentId { get; set; }
        public bool Approved { get; set; }

    }
}