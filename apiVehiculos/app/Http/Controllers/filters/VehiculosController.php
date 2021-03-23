<?php

namespace App\Http\Controllers\filters;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\vehiculos;

class VehiculosController extends Controller
{
    public function filtros(Request $request) {
        // $generos = json_decode($request->input('data'));
         $data = json_decode($request->input('data'), true);
         $vehiculos = $data['precios'];
         $categorias = $data['categorias'];
         $vehiculos = vehiculos::select("*")
                                 ->whereIn('Categoria', $categorias)
                                 ->where('Precio', '>', $vehiculos[0])
                                 ->where('Precio', '<', $vehiculos[1])
                                 ->get();
         return  response()->json([
         'status' => 'success',
         'message' => 'Vehiculos filtrados' ,
         'data' => $vehiculos,
         'code' => 401,
         ]);
     }
}
