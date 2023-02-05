<?php

namespace App\Http\Controllers;

use App\Mail\OnBoardUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $validateData = Validator::make($request->all(),
            [
                'name' => ['required', 'max:191'],
                'email' => ['required', 'email', 'unique:users,email'],
                'password' => ['required', 'min:8', 'confirmed']
            ]);

            if($validateData->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                    'errors' => $validateData->errors()
                ], Response::HTTP_UNAUTHORIZED);
            }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => User::encryptPassword($request->password)
            ]);

            Mail::to($user->email)->send(new OnBoardUser($user));

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], Response::HTTP_OK);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function login(Request $request)
    {
        try {
            $validateData = Validator::make($request->all(),
            [
                'email' =>  ['required', 'email'],
                'password' => ['required']
            ]);

            if($validateData->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                    'errors' => $validateData->errors()
                ], Response::HTTP_UNAUTHORIZED);
            }

            if(!Auth::attempt($request->only(['email', 'password']))){
                return response()->json([
                    'status' => false,
                    'message' => 'Invalid Credenitals',
                ], Response::HTTP_UNAUTHORIZED);
            }

            $user = User::where('email', $request->email)->first();

            return response()->json([
                'status' => true,
                'message' => 'User Logged In Successfully',
                'user'  =>  $user,
                'token' => $user->createToken(Str::slug($user->name))->plainTextToken
            ], Response::HTTP_OK);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function me(Request $request)
    {
        try {
            $user = $request->user();
            return response()->json([
                'status' => true,
                'user' => $user
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function logout(Request $request)
    {
        try {
            $request->user()->tokens()->delete();
            return response()->json([
                'status' => false,
                'message' => 'Logout Successfully'
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
