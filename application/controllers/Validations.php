<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Validations extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('validationModel');
    }

    public function validate() {
        echo $this->validationModel->getValidations($this->input->post());
    }

}