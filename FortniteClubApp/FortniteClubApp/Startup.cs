using FortniteClubApp.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FortniteClubApp
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {

            // Adding Identity Services to application 
            //services.AddDbContext<IdentityDataContext>(options =>
            //{
            //    var connectionString = configuration.GetConnectionString("IdentityDataContext");
            //    options.UseSqlServer(connectionString);
            //});



            services.AddIdentity<IdentityUser, IdentityRole>(); // Adding Identity Services to application 

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            
            app.UseExceptionHandler("/error.html"); // Add this page in order to work

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use(async (context, next) =>
            {
                if (context.Request.Path.Value.Contains("invalid"))
                    throw new Exception("ERROR!");

                await next();
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute("Default",
                    "{controller=Home}/{action=Index}/{id?}"
                );
            });

            app.UseIdentity(); // Adding Identity Services to application 

            app.UseFileServer();
        }
    }
}
