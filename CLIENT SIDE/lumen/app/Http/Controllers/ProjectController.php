<?php

namespace App\Http\Controllers;

use App\ProjectModel;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    function onSelect3(){
        $result=ProjectModel::limit(3)->get();
        return $result;
    }

    function onSelectAll(){
        $result=ProjectModel::all();
        return $result;
    }

    function onSelectDetail($id){

        $result=ProjectModel::where(['id'=>$id])->get();
        return $result;
    }
}
