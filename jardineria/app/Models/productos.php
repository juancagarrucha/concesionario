<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productos extends Model
{
    use HasFactory;
    protected $table = 'productos';
    protected $primarykey = 'CodigoProdcuto';
    protected $fillable = ['CodigoProducto','Nombre','Gama','Proveedor','Descripcion','CantidadEnStock','PrecioVenta','PrecioProveedor','img'];
   

    public function migama(){
        return $this->belongsTo(gama::class, 'Gama','Gama');
    }

}
