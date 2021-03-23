<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->smallInteger('id')->primary();
            $table->string('login',25);
            $table->string('password',500);
            $table->string('nombre',40);
            $table->string('apellidos',40);
            $table->string('img',100);
            $table->enum('rol',['invitado','usuario','gestor','administrador']);
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
        Schema::dropIfExists('usuarios');
    }
}