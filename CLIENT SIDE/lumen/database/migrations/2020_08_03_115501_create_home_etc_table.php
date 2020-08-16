<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeEtcTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_etc', function (Blueprint $table) {
            $table->id();
            $table->string('home_title',1000);
            $table->string('home_subtitle',1000);
            $table->text('tech_des',5000);
            $table->string('total_project',1000);
            $table->string('total_client',1000);
            $table->text('video_des',5000);
            $table->string('video_url',1000);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('home_etc');
    }
}
