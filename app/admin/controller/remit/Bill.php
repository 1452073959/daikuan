<?php

namespace app\admin\controller\remit;

use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;
use think\App;

/**
 * @ControllerAnnotation(title="打款")
 */
class Bill extends AdminController
{

    use \app\admin\traits\Curd;

    public function __construct(App $app)
    {
        parent::__construct($app);

        $this->model = new \app\admin\model\bill\Remit();
        
        $this->assign('getRemitStatusList', $this->model->getRemitStatusList());

        $this->assign('getRemitTypeList', $this->model->getRemitTypeList());

    }

    
}