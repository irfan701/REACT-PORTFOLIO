<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HomeEtcModel extends Model
{
    public $table='home_etc';
    public $primaryKey='id';
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
