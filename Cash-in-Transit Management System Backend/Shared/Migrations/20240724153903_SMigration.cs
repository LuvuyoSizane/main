using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Shared.Migrations
{
    /// <inheritdoc />
    public partial class SMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Personneld",
                table: "Routes");

            migrationBuilder.RenameColumn(
                name: "VehicleID",
                table: "Routes",
                newName: "vehicleId");

            migrationBuilder.RenameColumn(
                name: "PickupID",
                table: "Routes",
                newName: "pickupId");

            migrationBuilder.RenameColumn(
                name: "DeliveryID",
                table: "Routes",
                newName: "deliveryId");

            migrationBuilder.AlterColumn<int>(
                name: "vehicleId",
                table: "Routes",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "pickupId",
                table: "Routes",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "deliveryId",
                table: "Routes",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<int>(
                name: "personnelId",
                table: "Routes",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Routes_deliveryId",
                table: "Routes",
                column: "deliveryId");

            migrationBuilder.CreateIndex(
                name: "IX_Routes_personnelId",
                table: "Routes",
                column: "personnelId");

            migrationBuilder.CreateIndex(
                name: "IX_Routes_pickupId",
                table: "Routes",
                column: "pickupId");

            migrationBuilder.CreateIndex(
                name: "IX_Routes_vehicleId",
                table: "Routes",
                column: "vehicleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Routes_Deliveries_deliveryId",
                table: "Routes",
                column: "deliveryId",
                principalTable: "Deliveries",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Routes_Pickups_pickupId",
                table: "Routes",
                column: "pickupId",
                principalTable: "Pickups",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Routes_Users_personnelId",
                table: "Routes",
                column: "personnelId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Routes_Vehicles_vehicleId",
                table: "Routes",
                column: "vehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Routes_Deliveries_deliveryId",
                table: "Routes");

            migrationBuilder.DropForeignKey(
                name: "FK_Routes_Pickups_pickupId",
                table: "Routes");

            migrationBuilder.DropForeignKey(
                name: "FK_Routes_Users_personnelId",
                table: "Routes");

            migrationBuilder.DropForeignKey(
                name: "FK_Routes_Vehicles_vehicleId",
                table: "Routes");

            migrationBuilder.DropIndex(
                name: "IX_Routes_deliveryId",
                table: "Routes");

            migrationBuilder.DropIndex(
                name: "IX_Routes_personnelId",
                table: "Routes");

            migrationBuilder.DropIndex(
                name: "IX_Routes_pickupId",
                table: "Routes");

            migrationBuilder.DropIndex(
                name: "IX_Routes_vehicleId",
                table: "Routes");

            migrationBuilder.DropColumn(
                name: "personnelId",
                table: "Routes");

            migrationBuilder.RenameColumn(
                name: "vehicleId",
                table: "Routes",
                newName: "VehicleID");

            migrationBuilder.RenameColumn(
                name: "pickupId",
                table: "Routes",
                newName: "PickupID");

            migrationBuilder.RenameColumn(
                name: "deliveryId",
                table: "Routes",
                newName: "DeliveryID");

            migrationBuilder.AlterColumn<int>(
                name: "VehicleID",
                table: "Routes",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "PickupID",
                table: "Routes",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "DeliveryID",
                table: "Routes",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Personneld",
                table: "Routes",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
