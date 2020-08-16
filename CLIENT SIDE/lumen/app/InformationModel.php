<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InformationModel extends Model
{
    public $table='information_etc';
    public $primaryKey='id';
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;

}
