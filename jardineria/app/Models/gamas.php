<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class gamas extends Model
{
    use HasFactory; 
    protected $table = 'gamas';
    protected $primarykey = 'Gama';
    protected $fillable = ['Gama','Descripcion','Imagen'];

    public function productos(){
        return $this->hasMany(producto::class, 'Gama', 'Gama');
    }
}