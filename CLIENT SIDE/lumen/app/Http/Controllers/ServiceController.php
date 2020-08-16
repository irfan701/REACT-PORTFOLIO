<?php

namespace App\Http\Controllers;

use App\ServiceModel;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    function onSelect(){

      $result=ServiceModel::all();
      return $result;
    }
}
