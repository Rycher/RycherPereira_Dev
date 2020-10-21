using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Api_Rest.Data;
using Api_Rest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api_Rest.Controllers
{
    [ApiController]
    [Route("ContasAPagar")]
    public class ContasAPagarController : ControllerBase
    {

        [HttpGet]
        [Route("GetAll")]

        public async Task<ActionResult<List<ContasAPagar>>> Get([FromServices] DataContext context)
        {
            var contas = await context.ContasAPagar.ToListAsync();
            return contas;
        }

        [HttpGet]
        [Route("GetByCpf/{cpf}")]

        public async Task<ActionResult<List<ContasAPagar>>> GetCPF([FromServices] DataContext context, string cpf)
        {
            if (ModelState.IsValid)
            {
                var contas = await context.ContasAPagar
                 //.Include(x => x.Cpf)
                 .AsNoTracking()
                 .Where(x => x.Cpf == cpf)
                 .ToListAsync();
                return contas;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


        [HttpPost]
        [Route("")]

        public async Task<ActionResult<ContasAPagar>> Post([FromServices] DataContext context,
       [FromBody] ContasAPagar model)
        {
            if (ModelState.IsValid)
            {
                context.ContasAPagar.Add(model);
                await context.SaveChangesAsync();
                return model;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
