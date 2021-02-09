<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->string('CodigoProducto')->primary();
            $table->string('Nombre',100);
            $table->string('Gama',100);
            $table->string('Proveedor',100);
            $table->string('Descripcion',10000);
            $table->smallInteger('CantidadEnStock');
            $table->double('PrecioVenta', 5, 2);
            $table->double('PrecioProveedor', 5, 2);
            $table->string('img',40);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
}
