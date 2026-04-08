<?php

use App\Http\Controllers\Api\ContentItemController;
use Illuminate\Support\Facades\Route;

Route::get('site-content', [ContentItemController::class, 'index']);
Route::get('site-content/{key}', [ContentItemController::class, 'show']);
Route::post('site-content', [ContentItemController::class, 'store']);
Route::post('site-content/bulk', [ContentItemController::class, 'bulk']);
Route::delete('site-content/{key}', [ContentItemController::class, 'destroy']);
