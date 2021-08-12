<?php

namespace app\admin\model\customer;

use app\common\model\TimeModel;

class Order extends TimeModel
{

    protected $name = "customer_order";

    protected $deleteTime = false;

    
    
    public function getOrderStatusList()
    {
        return ['0'=>'未知','1'=>'待审核','2'=>'待打款','3'=>'使用中','4'=>'已逾期','5'=>'被驳回',];
    }

    public function getRemitTypeList()
    {
        return ['0'=>'未知','1'=>'线下','2'=>'线上',];
    }

    public function getModeTypeList()
    {
        return ['0'=>'未知','1'=>'是','2'=>'否',];
    }

    //客户
    public function customer()
    {
        return $this->belongsTo(Customerdata::class,'customer_order_id','id');
    }
    //客户账户
    public function bank()
    {
        return $this->belongsTo(Bank::class,'bank_id','id');
    }
    //生成订单号的方法
    public static function findAvailableNo()
    {
        // 订单流水号前缀
        $prefix = date('YmdHis');
        for ($i = 0; $i < 10; $i++) {
            // 随机生成 6 位的数字
            $no = $prefix.str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);
            // 判断是否已经存在
            if (!self::where('order_code', $no)->find()) {
                return $no;
            }
        }
        \Log::warning('find order no failed');

        return false;
    }
    //写入前
    public static function onBeforeWrite($model)
    {
        // 如果模型的 no 字段为空
        if (!$model->order_code) {
            // 调用 findAvailableNo 生成订单流水号
            $model->order_code ='JK'. static::findAvailableNo();
            // 如果生成失败，则终止创建订单
            if (!$model->order_code) {
                return false;
            }
        }
    }

}