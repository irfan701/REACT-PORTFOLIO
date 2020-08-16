<?php

namespace App\Http\Controllers;
use App\ClientReviewModel;
use Illuminate\Http\Request;

class ClientReviewController extends Controller
{
    function onAllSelect(){
        $result= ClientReviewModel::all();
        return $result;
    }
}
