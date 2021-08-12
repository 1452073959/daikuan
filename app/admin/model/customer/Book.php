<?php

namespace app\admin\model\customer;

use app\common\model\TimeModel;

class Book extends TimeModel
{

    protected $name = "customer_book";

    protected $deleteTime = false;


    //通讯录
    public function customer()
    {
        return $this->belongsTo(Customerdata::class,'customer_id','id');
    }

}