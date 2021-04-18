using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TursArg.Models;

namespace TursArg.Controllers
{
    public class CIUDADESController : ApiController
    {
        private BDTursArgEntities1 db = new BDTursArgEntities1();

        // GET: api/CIUDADES
        public IQueryable<CIUDADES> GetCIUDADES()
        {
            return db.CIUDADES;
        }

        // GET: api/CIUDADES/5
        [ResponseType(typeof(CIUDADES))]
        public IHttpActionResult GetCIUDADES(int id)
        {
            CIUDADES cIUDADES = db.CIUDADES.Find(id);
            if (cIUDADES == null)
            {
                return NotFound();
            }

            return Ok(cIUDADES);
        }

        // PUT: api/CIUDADES/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCIUDADES(int id, CIUDADES cIUDADES)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cIUDADES.codPostal)
            {
                return BadRequest();
            }

            db.Entry(cIUDADES).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CIUDADESExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CIUDADES
        [ResponseType(typeof(CIUDADES))]
        public IHttpActionResult PostCIUDADES(CIUDADES cIUDADES)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CIUDADES.Add(cIUDADES);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cIUDADES.codPostal }, cIUDADES);
        }

        // DELETE: api/CIUDADES/5
        [ResponseType(typeof(CIUDADES))]
        public IHttpActionResult DeleteCIUDADES(int id)
        {
            CIUDADES cIUDADES = db.CIUDADES.Find(id);
            if (cIUDADES == null)
            {
                return NotFound();
            }

            db.CIUDADES.Remove(cIUDADES);
            db.SaveChanges();

            return Ok(cIUDADES);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CIUDADESExists(int id)
        {
            return db.CIUDADES.Count(e => e.codPostal == id) > 0;
        }
    }
}