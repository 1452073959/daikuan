<?php

namespace app\admin\controller\customer;

use app\admin\model\SystemAdmin;
use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;
use think\App;

/**
 * @ControllerAnnotation(title="customer_customerdata")
 */
class Customerdata extends AdminController
{

    use \app\admin\traits\Curd;

    public function __construct(App $app)
    {
        parent::__construct($app);

        $this->model = new \app\admin\model\customer\Customerdata();
        
        $this->assign('getRegisteredTypeList', $this->model->getRegisteredTypeList());

        $this->assign('getStatusList', $this->model->getStatusList());

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
                ->withJoin(['audit','service'], 'LEFT')
                ->count();
            $list = $this->model
                ->where($where)
                ->withJoin(['audit','service'], 'LEFT')
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

    /**
     * @NodeAnotation(title="分配审核")
     */
    public function audit()
    {
        $post = $this->request->param('id');
        $list=SystemAdmin::field('name,username,id')->where('auth_ids',9)->select();

        $d = array();
        foreach ($list as $k => $v1) {
            $d[$k]['name'] = $v1['name'];
            $d[$k]['value'] = $v1['id'];
        }
        $this->assign([
            'data_id'=>$post,
            'audit'=>$d
        ]);
        return $this->fetch();
    }

    public function postaudit()
    {
        $post = $this->request->post();
       $res= $this->model->find($post['data_id']);
        if ($res['audit_id'] != '') {
            echo "<script>alert('该客户已分配过!')</script>";
            echo "<script>window.parent.location.reload()</script>";
            return;
        }
        $res->audit_id=$post['audit_id'];
        $res->save();
        echo "<script>alert('分配成功')</script>";
        echo "<script>window.parent.location.reload()</script>";
    }


    /**
     * @NodeAnotation(title="分配客服")
     */
    public function service()
    {
        $post = $this->request->param('id');
        $list=SystemAdmin::field('name,username,id')->where('auth_ids',7)->select();

        $d = array();
        foreach ($list as $k => $v1) {
            $d[$k]['name'] = $v1['name'];
            $d[$k]['value'] = $v1['id'];
        }
        $this->assign([
            'data_id'=>$post,
            'audit'=>$d
        ]);
        return $this->fetch();
    }

    public function postservice()
    {
        $post = $this->request->post();
        $res= $this->model->find($post['data_id']);
        if ($res['service_id'] != false) {
            echo "<script>alert('该客户已分配过!')</script>";
            echo "<script>window.parent.location.reload()</script>";
            return;
        }
        $res->service_id=$post['service_id'];
        $res->save();
        echo "<script>alert('分配成功')</script>";
        echo "<script>window.parent.location.reload()</script>";
    }
    
}