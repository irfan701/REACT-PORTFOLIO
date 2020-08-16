<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClientReviewModel extends Model
{
    public $table='client_review';
    public $primaryKey='id';
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
