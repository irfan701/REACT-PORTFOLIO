<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FooterModel extends Model
{
    public $table='footer';
    public $primaryKey='id';
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
