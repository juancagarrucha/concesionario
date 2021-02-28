<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriasController;


    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('categorias', [CategoriasController::class, 'index']);
        Route::get('categorias/{id}/vehiculos', [CategoriasController::class,'getVehiculos']);      
    });

    Route::group(['middleware' => 'auth:api'], function () {
        Route::group(['middleware' => 'rol.admin'], function () {
            Route::post('/categorias/new', [CategoriasController::class, 'store']);

    });

});

    Route::get('vehiculos/{id}/detalle', [CategoriasController::class,'getDetalleVehiculos']);