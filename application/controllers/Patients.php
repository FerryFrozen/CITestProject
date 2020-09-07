<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Patients extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('patientModel');
    }

    public function getPatient() {
        parse_str(substr(strrchr($_SERVER['REQUEST_URI'], "?"), 1), $_GET);
        header('Content-Type: application/json');
        echo json_encode($this->patientModel->getByFioAndBd($_GET));
    }

}