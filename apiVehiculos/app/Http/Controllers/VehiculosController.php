<?php

namespace App\Http\Controllers;

use App\Models\vehiculos;
use App\Http\Controllers\Controller;
use App\Http\Requests\storeVehiculosPost;
use Illuminate\Http\Request;

class VehiculosController extends Controller
{

    public function destroy($id){
       $data = vehiculos::destroy('id','=', $id);
       return  response()->json([
        'status' => 'success',
        'message' => 'Vehiculo '. $id .' borrado correctamente ',
        'code' => 401,
        'data' => $data
    ]);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vehiculos = vehiculos::with('miscategorias')->get();
        return  response()->json($vehiculos);

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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\vehiculos  $vehiculos
     * @return \Illuminate\Http\Response
     */
    public function show(vehiculos $vehiculos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\vehiculos  $vehiculos
     * @return \Illuminate\Http\Response
     */
    public function edit(vehiculos $vehiculos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\vehiculos  $vehiculos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, vehiculos $vehiculos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\vehiculos  $vehiculos
     * @return \Illuminate\Http\Response
     */
    
}
