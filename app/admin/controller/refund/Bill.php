<?php

namespace app\admin\controller\refund;

use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;
use think\App;

/**
 * @ControllerAnnotation(title="还款")
 */
class Bill extends AdminController
{

    use \app\admin\traits\Curd;

    public function __construct(App $app)
    {
        parent::__construct($app);

        $this->model = new \app\admin\model\bill\Refund();
        
        $this->assign('getRefundStatusList', $this->model->getRefundStatusList());

    }
    
}