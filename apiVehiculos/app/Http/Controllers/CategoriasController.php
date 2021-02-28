<?php

namespace App\Http\Controllers;

use App\Models\vehiculos;
use App\Models\categorias;
use App\Http\Controllers\Controller;
use App\Http\Requests\storeCategoriasPost;
use Illuminate\Http\Request;

class CategoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function getVehiculos($id){
        $vehiculos = Categorias::with('vehiculos')->where('categoria', '=', $id)->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Vehiculos de la Categoria '. $id ,
            'code' => 401,
            'data' => $vehiculos
        ]);
    }

    public function getDetalleVehiculos($id){
        $vehiculos = vehiculos::where('id', '=', $id)->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Vehiculo '. $id ,
            'code' => 401,
            'data' => $vehiculos[0]
        ]);
    }
    
    public function index()
    {
        $categorias = categorias::all();
        return  response()->json([
            'status' => 'success',
            'message' => 'Categorias del Concesionario',
            'code' => 401,
            'data' => $categorias
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(storeCategoriasPost $request)
    {
        //
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Models\categorias  $categorias
     * @return \Illuminate\Http\Response
     */
    public function show(categorias $categorias)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\categorias  $categorias
     * @return \Illuminate\Http\Response
     */
    public function edit(categorias $categorias)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\categorias  $categorias
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, categorias $categorias)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\categorias  $categorias
     * @return \Illuminate\Http\Response
     */
    public function destroy(categorias $categorias)
    {
        //
    }
}
