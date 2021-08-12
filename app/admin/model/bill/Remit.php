<?php

namespace app\admin\model\bill;

use app\common\model\TimeModel;

class Remit extends TimeModel
{

    protected $name = "remit_bill";

    protected $deleteTime = false;

    
    
    public function getRemitStatusList()
    {
        return ['0'=>'未知','1'=>'未打款','2'=>'已打款',];
    }

    public function getRemitTypeList()
    {
        return ['1'=>'平台放款',];
    }


}