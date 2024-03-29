<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriasController;
use App\Http\Controllers\VehiculosController;
use App\Http\Controllers\UsuariosController;
use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('categorias', CategoriasController::class);
Route::resource('usuarios', UsuariosController::class);
Route::resource('vehiculos', VehiculosController::class);

Route::post('login', [AuthController::class, 'login']);
Route::post('registro', [AuthController::class, 'signup']);

Route::post('categorias', [CategoriasController::class, 'categorias']);

Route::group(['middleware' => 'auth:api'], function () {

    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('user', [AuthController::class, 'getUser']);
    Route::group(['middleware' => 'rol.admin'], function () {
        Route::get('vehiculos/{id}/remove', [VehiculosController::class,'destroy']);
            
});


});
Route::post('agregarc', [CategoriasController::class, 'agregarc']);
Route::post('agregarvehiculo', [VehiculosController::class, 'agregarvehiculo']);