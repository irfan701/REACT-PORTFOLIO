<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInformationEtcTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('information_etc', function (Blueprint $table) {
            $table->id();
            $table->text('about',5000);
            $table->text('refund',5000);
            $table->text('terms',5000);
            $table->text('privacy',5000);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('information_etc');
    }
}
