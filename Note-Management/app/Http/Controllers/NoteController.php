<?php

namespace App\Http\Controllers;

use App\Models\Notes;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function get(Request $request)
    {
        $user = json_decode($request->session()->get('user'));
        $notes = Notes::where('user_id', $user->_id)->get();

        return response()->json([
            'notes' => $notes
        ]);
    }

    public function save(Request $request)
    {
        $user = json_decode($request->user);
        Notes::create([
            'title' => $request->title,
            'description' => $request->description,
            'user_id' => $user->_id,
        ]);

        return redirect()->back();
    }
}