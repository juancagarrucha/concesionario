<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class categorias extends Model
{
    use HasFactory; 
    protected $table = 'categorias';
    protected $primarykey = 'nombre';
    protected $fillable = ['nombre','descripcion','img'];

    public function vehiculos(){
        return $this->hasMany(vehiculos::class, 'categoria', 'nombre');
    }
}