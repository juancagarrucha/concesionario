<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class clientes extends Model
{
    use HasFactory;
    protected $table = 'clientes';
    protected $primarykey = 'Codigo';

    public function usuarios(){
        //foranea de cliente, primaria de usuario
        //return $this->hasOne(cliente::class, 'userid', 'user_id');
        return $this->hasOne(usuarios::class, 'id', 'userid');
    }
}