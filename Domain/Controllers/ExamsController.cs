using Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;


namespace Domain.Controllers
{
    public class ExamsController : Controller
    {
        // GET: Exams
        public ActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> UpdateExams(List<Models.Exam> exams)
        {
            var repository = new ExamRepository();
            return Json(repository.UpdateExams(exams), JsonRequestBehavior.AllowGet);
        }
    }
}