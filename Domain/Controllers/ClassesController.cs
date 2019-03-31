﻿using Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Domain.Controllers
{
    public class ClassesController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> GetStudents()
        {
            var repository = new StudentRepository();
            
            return Json(repository.GetStudents(), JsonRequestBehavior.AllowGet);
        }

        public async Task<ActionResult> UpdateClasses(List<Models.Student> students)
        {
           var repository = new StudentRepository();
           return Json(repository.UpdateClasses(students), JsonRequestBehavior.AllowGet);
        }
    }
}