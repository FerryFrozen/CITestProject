<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cases extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('caseModel');
    }

    public function index() {
        $this->load->view('cases_view');
    }

    public function getFiltered() {
        parse_str(substr(strrchr($_SERVER['REQUEST_URI'], "?"), 1), $vasya);
        header('Content-Type: application/json');
        echo json_encode($this->caseModel->getFromDBFiltered($vasya));
    }

    public function create() {
        echo print_r($this->input->post(),true);
    }

    public function delete() {
        return "delete";
    }
}