<?php

namespace App\Http\Controllers;

use App\ContactModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function onContactSend(Request $request){

        $contactArray=json_decode($request->getContent(),true);

        $name=$contactArray['name'];
        $email=$contactArray['email'];
        $msg=$contactArray['msg'];

//        $name=$request->input('name');
//        $email=$request->input('email');
//        $msg=$request->input('msg');

//        $data=array();
//        $data['name']=$name;$data['email']=$email;$data['message']=$msg;

        $result=ContactModel::insert(['name'=>$name,'email'=>$email,'message'=>$msg]);
        if($result==true)
        {
            return 1;
        }else{
            return 0;
        }



    }
}
