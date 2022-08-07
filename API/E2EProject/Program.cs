using System;
using Microsoft.Extensions.DependencyInjection;

namespace E2EProject
{
    public class Program
    {
        public static void Main(string[] arg)
        {
            IServiceCollection services = new ServiceCollection();
            Startup startup = new();
            startup.ConfigureService(services);
        }
    }
}