<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class PatientModel extends CI_Model {

    private static $tableName = 'finders';

    private static $codeForTest = 'CaseTypes';
    
    function __construct() {
        parent::__construct();
        $this->load->database();
    }
    
    public function getByFioAndBd($queryString) {
        $query = "select id, fio, birth_date from patients where fio = '".$queryString['fio']."' and birth_date = '".$queryString['bd']."'";
        $result = $this->db->query($query);
        return json_encode($result->result());
    }

}