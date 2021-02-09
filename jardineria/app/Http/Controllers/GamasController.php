<?php

namespace App\Http\Controllers;

use App\Models\gamas;
use App\Http\Controllers\Controller;
use App\Http\Requests\storeGamasPost;
use Illuminate\Http\Request;

class GamasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function getProductos($id){
        $productos = Gama::with('productos')->where('Gama', '=', $id)->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Productos de la Gama '. $id ,
            'code' => 401,
            'data' => $productos
        ]);
    }

    public function index()
    {
       // $gamas = gama::with('productos')->get();
        $gamas = gamas::all();
        return  response()->json([
            'status' => 'success',
            'message' => 'Gamas de la Jardinería',
            'code' => 401,
            'data' => $gamas
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
    public function store(storeGamasPost $request)
    {
        //
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Models\gamas  $gamas
     * @return \Illuminate\Http\Response
     */
    public function show(gamas $gamas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\gamas  $gamas
     * @return \Illuminate\Http\Response
     */
    public function edit(gamas $gamas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\gamas  $gamas
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, gamas $gamas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\gamas  $gamas
     * @return \Illuminate\Http\Response
     */
    public function destroy(gamas $gamas)
    {
        //
    }
}
