<?php

namespace App\Http\Controllers;

use App\CourseModel;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    function onSelectFour(){

        $result=CourseModel::limit(4)->get();
        return $result;

    }
    function onSelectAll(){

        $result=CourseModel::all();
        return $result;
    }
    function onSelectDetails($id){

        $result=CourseModel::where(['id'=>$id])->get();
        return $result;


    }

}
