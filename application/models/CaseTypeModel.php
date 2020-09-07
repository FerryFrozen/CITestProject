<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CaseTypeModel extends CI_Model {

    private static $tableName = 'case_type';
    
    function __construct() {
        parent::__construct();
        $this->load->database();
    }
    
    public function getFromDB() {
        $query = $this->db->query('select * from '.CaseTypeModel::$tableName);
        return json_encode($query->result());
    }

}