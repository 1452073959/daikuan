<?php

namespace app\admin\model\bill;

use app\common\model\TimeModel;

class Refund extends TimeModel
{

    protected $name = "refund_bill";

    protected $deleteTime = false;

    
    
    public function getRefundStatusList()
    {
        return ['2'=>'完成',];
    }


}