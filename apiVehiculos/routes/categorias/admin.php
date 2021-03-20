<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriasController;
use App\Http\Controllers\filters\VehiculosController;

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('categorias', [CategoriasController::class, 'index']);
        Route::get('vehiculos/{id}/detalle', [CategoriasController::class,'getDetalleVehiculos']);
        Route::get('categorias/{id}/vehiculos', [CategoriasController::class,'getVehiculos']);   
         
    });

    Route::group(['middleware' => 'auth:api'], function () {
        Route::group(['middleware' => 'rol.admin'], function () {
            Route::post('vehiculos', [VehiculosController::class,'store']);
            Route::put('vehiculos/{vehiculo}', [VehiculosController::class,'update']);
            Route::get('vehiculos/{id}/remove', [VehiculosController::class,'destroy']);
           
                
    });

    

});

Route::post('vehiculos/filters', [VehiculosController::class, 'filtros']); 
