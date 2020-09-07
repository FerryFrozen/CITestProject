<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CaseModel extends CI_Model {

    private static $tableName = 'cases';
    
    function __construct() {
        parent::__construct();
        $this->load->database();
    }
    
    public function getFromDBFiltered($queryString) {

        $query = "select
                            c.id as uid,
                            ct.name as caseType,
                            c.open_date as openDate,
                            c.close_date as closeDate,
                            p.fio as patientFio,
                            p.birth_date as patientBd,
                            c.comment
                    from cases c
                    join patients p on c.patient = p.id
                    join case_type ct on c.case_type_id = ct.id
                    where true";

        if (array_key_exists('caseType',$queryString) && $queryString['caseType'] != '') {
            $query = $query." and ct.id = ".$queryString['caseType'];
        }

        if (array_key_exists('fromDate',$queryString) && $queryString['fromDate'] != '') {
            $query = $query." and c.open_date >= '".$queryString['fromDate']."'::date";
        }
                    
        $queryResult = $this->db->query($query);
        return json_encode($queryResult->result());
    }

}