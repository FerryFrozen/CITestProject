<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CaseTypes extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('caseTypeModel');
    }

    public function index() {
        echo "index";
    }

    public function all() {
        $response = $this->caseTypeModel->getFromDB();
        header('Content-Type: application/json');
        echo $response;
    }

}