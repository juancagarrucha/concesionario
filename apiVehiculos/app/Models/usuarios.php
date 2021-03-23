<?php

namespace App\Models;

use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuarios extends Authenticatable
{
      use HasFactory, Notifiable;
      use HasApiTokens;
      protected $table = 'usuarios';
     // protected $primarykey = 'user_id';
      protected $primarykey = 'id';
     // protected $fillable = ['user_id', 'rol','name','surname', 'email', 'password', 'image'   ];
     protected $fillable = ['id','login','password','nombre','apellidos','img','rol'];

  
      protected $casts = [
          'id' => 'integer',
      ];
  
      public function clientes(){
          //foranea de cliente, primaria de usuario
          //return $this->hasOne(cliente::class, 'userid', 'user_id');
          return $this->hasOne(clientes::class, 'userid', 'id');
      }
}