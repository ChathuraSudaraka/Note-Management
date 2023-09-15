<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Notes extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'notes';

    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'user_id',
    ];

    public function user() 
    {
        return $this->belongsTo(User::class);
    }
}
