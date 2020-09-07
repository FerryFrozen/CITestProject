<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Finders extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('finderModel');
    }

    public function getFinder() {
        parse_str(substr(strrchr($_SERVER['REQUEST_URI'], "?"), 1), $_GET);
        header('Content-Type: application/json');
        echo json_encode($this->finderModel->getByCode($_GET));
    }

}