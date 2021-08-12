<?php

namespace app\admin\model\customer;

use app\common\model\TimeModel;

class Bank extends TimeModel
{

    protected $name = "customer_bank";

    protected $deleteTime = false;


    //银行卡
    public function customer()
    {
        return $this->belongsTo(Customerdata::class,'customer_id','id');
    }

}