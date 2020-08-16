<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('short_title',1000);
            $table->string('short_des',1000);
            $table->string('small_img',1000);
            $table->string('long_title',1000);
            $table->text('long_des',5000);
            $table->string('total_lecture',5000);
            $table->string('total_student',1000);
            $table->text('skill_all',5000);
            $table->string('video_url',1000);
            $table->string('courses_link',1000);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
