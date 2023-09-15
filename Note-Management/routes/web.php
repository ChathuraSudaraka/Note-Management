<?php

use App\Http\Controllers\NoteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


// AUth routes
Route::post('/register', [UserController::class, 'create']);
Route::post('/login', [UserController::class, 'login']);

// Note routes
Route::get('/notes', [NoteController::class, 'get']);
Route::post('/note/save', [NoteController::class, 'save']);

Route::view('/{path?}', 'welcome');
