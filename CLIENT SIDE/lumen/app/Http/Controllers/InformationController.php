<?php

namespace App\Http\Controllers;

use App\InformationModel;
use Illuminate\Http\Request;

class InformationController extends Controller
{
    function onSelect(){

        $result=InformationModel::all();
        return $result;
    }
}
