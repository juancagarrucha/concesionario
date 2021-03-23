<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\usuarios;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;



class AuthController extends Controller
{
       public function signup(Request $request)
    {
        $rules = [
            'id'        => 'required|integer',
            'login'     => 'required',
            'password'      => 'required',
            'nombre'    => 'required',
            'apellidos' => 'required',
            'img'       => 'required',
            'rol'       => 'required',
        ];
        $input = $request->all();
        $validator = Validator::make($input, $rules);
        if ($validator->fails()){
            return response()->json([
                'status' => 'error',
                'errors'=> $validator->errors()
            ], 200);
        }
        $user = usuarios::create(array(
            'id'        => $request->input('id'),
            'login'     => $request->input('login'),
            'password' => Hash::make($request->input('password')),
            'nombre'    => $request->input('nombre'),
            'apellidos' => $request->input('apellidos'),
            'img'       => $request->input('img'),
            'rol'       => $request->input('rol')
        ));

        $user['id'] = (int)($request->input('id'));
        $user->save();

        $tokenAuth = $user->createToken('task api');
        $token = $tokenAuth->accessToken;
        $tokenAuth->token->user_id = $user['id'];
        $tokenAuth->token->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Usuario creado!'], 201);
    }

    public function login(Request $request){

        $request->validate([
            'login' => 'required|string',
            'password' => 'required|string'
        ]);

        $credentials = request(['login', 'password']);
        
        if(!Auth::attempt($credentials)){
            return response()->json([
                'status' => 'error',
                'message' => 'Credenciales Incorrectas', 'code' => 401
            ]);
        }
        
        $user = Auth::user();
        //  dd($user);

        $tokenAuth = $user->createToken('Personal Access Token');
        //dd ($tokenAuth);
        $token = $tokenAuth->accessToken;

        $tokenAuth->token->user_id = $user['id'];

        $tokenAuth->token->expires_at = Carbon::now()->addWeeks(1);

        $tokenAuth->token->save();

        $usuario = usuarios::with('clientes')->find($user->id);

        return response()->json([
            'status' => 'success',
            'user' => $usuario,
            'token' => [
                'access_token' => $token,
                'token_type' => 'Bearer ',
                'expires_at' => Carbon::parse($tokenAuth->token->expires_at)->toDateTimeString()
        ]

        ]);

    }
    public function getUser(Request $request) {
      //$user = $request->user();
        $user = Auth::user();
       // echo $user->id;
       // $usuario = User::where('id', $user->id)->with('cliente')->get();
        //$usuario = User::with('cliente')->find($user->id);
        return  response()->json([
            'status' => 'success',
            'message' => 'Datos del usuario',
            'code' => 401,
            'user' => $user
        ]);
    }

    public function logout(Request $request){
        //elimina el token de oauth_access_token.
        $request->user()->token()->revoke();
        return  response()->json([
            'message' => 'Sesión finalizada con éxito',
        
            ]);
        }
}

