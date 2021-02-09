<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GamasController;


Route::group(['middleware' => 'auth:api'], function () {
    Route::get('gamas', [GamasController::class, 'index']);
    Route::get('gamas/{id}/productos', [GamasController::class,'getProductos']);
});