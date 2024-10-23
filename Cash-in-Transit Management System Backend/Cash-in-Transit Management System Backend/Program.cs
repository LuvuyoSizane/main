using Cash_in_Transit_Management_System_Backend;
using Data_Access_Layer.Interfaces;
using Data_Access_Layer.Repository;
using Business_Access_Layer.Interfaces;
using Business_Access_Layer.Service;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;
using Shared.Data;
using Shared.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register DbContext
builder.Services.AddDbContext<AppDBContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnections"))
);

// Register repositories and services
builder.Services.AddTransient<IAuthenticationRepository, AuthenticationRepository>();
builder.Services.AddTransient<IAuthenticationService, AuthenticationService>();

builder.Services.AddTransient<IManagementRepository, ManagementRepository>();
builder.Services.AddTransient<IManagementService, ManagementService>();


builder.Services.AddTransient<ISchedulingRepository, SchedulingRepository>();
builder.Services.AddTransient<ISchedulingService, SchedulingService>();

builder.Services.AddTransient<IRouteRepository, RouteRepository>();
builder.Services.AddTransient<IRouteService, RouteService>(); 


builder.Services.AddTransient<IIncidentRepository, IncidentRepository>();
builder.Services.AddTransient<IIncidentService, IncidentService>();
// Configure JSON serialization
builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
    options.SerializerSettings.ContractResolver = new DefaultContractResolver();
});

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        builder => builder.WithOrigins("http://localhost:3000") // Replace with your React app's URL
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowReactApp");
app.UseHttpsRedirection();

app.UseAuthentication(); // Ensure authentication middleware is added
app.UseAuthorization();

app.MapControllers();

// Seed Database
DataInitializer.Seed(app);

app.Run();
