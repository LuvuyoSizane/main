using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;
using Simple_API_Assessment.Data;
using Simple_API_Assessment.Data.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Register
builder.Services.AddDbContext<DataContext>(options => 
options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnections"))
) ;

builder.Services.AddTransient<IApplicantRepository, ApplicantRepo>();

builder.Services.AddControllers().AddNewtonsoftJson(
                options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore).AddNewtonsoftJson(
                options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
builder.Services.AddCors();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options => options.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

//Seed Database
DataInitializer.Seed(app);

app.Run();
