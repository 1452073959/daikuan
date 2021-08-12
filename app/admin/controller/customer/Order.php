<?php

namespace app\admin\controller\customer;

use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;
use think\App;

/**
 * @ControllerAnnotation(title="订单")
 */
class Order extends AdminController
{

    use \app\admin\traits\Curd;

    public function __construct(App $app)
    {
        parent::__construct($app);

        $this->model = new \app\admin\model\customer\Order();
        
        $this->assign('getOrderStatusList', $this->model->getOrderStatusList());

        $this->assign('getRemitTypeList', $this->model->getRemitTypeList());

        $this->assign('getModeTypeList', $this->model->getModeTypeList());

    }
    /**
     * @NodeAnotation(title="列表")
     */
    public function index()
    {
        if ($this->request->isAjax()) {
            if (input('selectFields')) {
                return $this->selectList();
            }
            list($page, $limit, $where) = $this->buildTableParames();
            $count = $this->model
                ->where($where)
                ->withJoin(['customer','bank'], 'LEFT')
                ->count();
            $list = $this->model
                ->where($where)
                ->withJoin(['customer','bank'], 'LEFT')
                ->page($page, $limit)
                ->order($this->sort)
                ->select();
            $data = [
                'code'  => 0,
                'msg'   => '',
                'count' => $count,
                'data'  => $list,
            ];
            return json($data);
        }
        return $this->fetch();
    }
    
}