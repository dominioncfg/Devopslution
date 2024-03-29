﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Devopslution.Domain.Services.Technologies;

namespace Devopslution.Web
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddTransient<ITechnologyRepository,TechnologyRepository>();
            services.AddTransient<ITechnologyService,TechnologyService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                //Webpack Setup
                WebpackDevMiddlewareOptions opt = new WebpackDevMiddlewareOptions();
                opt.ConfigFile = "webpack.config.Development";
                app.UseWebpackDevMiddleware(opt);
            }
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }
    }
}
