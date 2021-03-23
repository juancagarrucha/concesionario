<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vehiculos extends Model
{
    use HasFactory;
    protected $table = 'vehiculos';
    protected $primarykey = 'id';
    protected $fillable = ['id','nombre','marca','categoria','img','precio'];
   

    public function miscategorias(){
        return $this->hasOne(categorias::class, 'nombre','categoria');
    }

}
