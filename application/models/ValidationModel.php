<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ValidationModel extends CI_Model {

    private static $tableName = 'validations';
    
    function __construct() {
        parent::__construct();
        $this->load->database();
    }
    
    public function getValidations($queryString) {
        $queryText = "select query_text, validation_level, validation_text, code from validations where code = 'open_close_dates'";
        $queryTextResponse = $this->db->query($queryText);
        $queryTextResult = $queryTextResponse->result()[0];
        $replacedParamsQuery = str_replace("close__date","'".$queryString['closeDate']."'",str_replace("open__date","'".$queryString['openDate']."'",$queryTextResult->query_text));
        $mainQuery = $this->db->query($replacedParamsQuery);
        if ($mainQuery->result()) {
            return json_encode($queryTextResponse->result()[0]);
        } else {
            return [];
        }
    }

}