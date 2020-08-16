<?php


$router->get('/chartData',['middleware'=>'auth','uses'=>'ChartDataController@onAllSelect']);

$router->get('/clientReview',['middleware'=>'auth','uses'=>'ClientReviewController@onAllSelect']);

$router->post('/ContactSend',['middleware'=>'auth','uses'=>'ContactController@onContactSend']);


$router->get('/courseHome',['middleware'=>'auth','uses'=>'CourseController@onSelectFour']);
$router->get('/courseAll',['middleware'=>'auth','uses'=>'CourseController@onSelectAll']);
$router->get('/courseDetail/{id}',['middleware'=>'auth','uses'=>'CourseController@onSelectDetails']);


$router->get('/footer',['middleware'=>'auth','uses'=>'FooterController@onSelect']);

$router->get('/information',['middleware'=>'auth','uses'=>'InformationController@onSelect']);

$router->get('/services',['middleware'=>'auth','uses'=>'ServiceController@onSelect']);


$router->get('/projectHome',['middleware'=>'auth','uses'=>'ProjectController@onSelect3']);
$router->get('/projectAll',['middleware'=>'auth','uses'=>'ProjectController@onSelectAll']);
$router->get('/projectDetail/{id}',['middleware'=>'auth','uses'=>'ProjectController@onSelectDetail']);


$router->get('/videoHome',['middleware'=>'auth','uses'=>'HomeEtcController@onSelectVideo']);
$router->get('/totalProjectClient',['middleware'=>'auth','uses'=>'HomeEtcController@onSelectProjectClient']);
$router->get('/techDes',['middleware'=>'auth','uses'=>'HomeEtcController@onSelectTechDes']);
//$router->get('/homeTopTitle','HomeEtcController@onSelectTopHomeTitle')->middleware('Auth');
$router->get('/homeTopTitle',['middleware'=>'auth','uses'=>'HomeEtcController@onSelectTopHomeTitle']);