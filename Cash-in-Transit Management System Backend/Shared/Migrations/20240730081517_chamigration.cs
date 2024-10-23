using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Shared.Migrations
{
    /// <inheritdoc />
    public partial class chamigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PersonnelId",
                table: "Routes");

            migrationBuilder.AddColumn<int[]>(
                name: "PersonnelIds",
                table: "Routes",
                type: "integer[]",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PersonnelIds",
                table: "Routes");

            migrationBuilder.AddColumn<int>(
                name: "PersonnelId",
                table: "Routes",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
