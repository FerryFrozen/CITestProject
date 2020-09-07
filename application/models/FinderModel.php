<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class FinderModel extends CI_Model {

    private static $tableName = 'finders';

    private static $codeForTest = 'CaseTypes';
    
    function __construct() {
        parent::__construct();
        $this->load->database();
    }
    
    public function getByCode($queryString) {
        $queryText = 'select query_text from finders where code = \''.$queryString['finderCode'].'\'';
        $queryTextResponse = $this->db->query($queryText);
        $queryTextResult = $queryTextResponse->result()[0]->query_text;
        $mainResult = $this->db->query($queryTextResult);
        return json_encode($mainResult->result());
    }

}