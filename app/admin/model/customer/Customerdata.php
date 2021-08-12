<?php

namespace app\admin\model\customer;

use app\admin\model\SystemAdmin;
use app\common\model\TimeModel;

class Customerdata extends TimeModel
{

    protected $name = "customer_customerdata";

    protected $deleteTime = false;

    
    
    public function getRegisteredTypeList()
    {
        return ['0'=>'未知','1'=>'职员邀请','2'=>'正常注册',];
    }

    public function getStatusList()
    {
        return ['0'=>'未知','1'=>'待提交','2'=>'待审核','3'=>'待复审','4'=>'待复审','5'=>'待打款','6'=>'使用中','7'=>'已逾期','8'=>'已结束','9'=>'普通',];
    }

    //银行卡
    public function bank()
    {
        return $this->hasMany(Bank::class,'customer_id','id');
    }
    //通讯录
    public function book()
    {
        return $this->hasMany(Bank::class,'customer_id','id');
    }
    //审核人
    public function audit()
    {
        return $this->belongsTo(SystemAdmin::class,'audit_id','id');
    }
    //客服
    public function service()
    {
        return $this->belongsTo(SystemAdmin::class,'service_id','id');
    }
}