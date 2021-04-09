﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

// using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;
// using System.Text.Unicode;
using System.Net;
using System.IO;

namespace aspnetapp.Pages
{
    class WeatherForecast
    {
        public DateTimeOffset Date { get; set; }
        public int TemperatureC { get; set; }
        public string Summary { get; set; }
    }

    public class ApiModel : PageModel
    {

        public string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};

        WeatherForecast w = new WeatherForecast() { Date = DateTime.Now, TemperatureC = 30, Summary = "Hot" };

        public string jsonString = null;
      //  public string outstring = JsonSerializer.Serialize(cars);
        private readonly ILogger<PrivacyModel> _logger;

        public ApiModel(ILogger<PrivacyModel> logger)
        {
            _logger = logger;
            
        }

        public void OnGet()
        {

            
            HttpWebRequest myReq =
            (HttpWebRequest)WebRequest.Create("https://harvest-thermal.com/about");
            WebResponse response = myReq.GetResponse();
           // WeatherForecast w = new WeatherForecast() { Date = DateTime.Now, TemperatureC = 30, Summary = "Hot" };
           Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);
            jsonString = reader.ReadToEnd();
            reader.Close();
          // jsonString = JsonSerializer.Serialize(w);
            // cars = {"Volvo", "BMW", "Ford", "Mazda"}
        }
    }
}