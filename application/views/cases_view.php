<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="application/styles/style.css">
    <script src="application/js/main.js" type= "module" defer></script>
    <title>SEMINAR</title>
</head>
<body>
    <div class="header">
        <h1>Случаи обслуживания</h1>
        <span>&times;</span>
    </div>
    <div class="main">

        <div class="content">
            <div class="table-wrapper">
                <div class="btn-tabs">
                    <button class="btn case-add">Добавить</button>
                    <button class="btn case-delete">Удалить</button>
                </div>
                <div class="cases">
                    <table>
                        
                    </table>                    
                </div>
            </div>
        </div>
    </div>
    
    <div class="validation-wrapper hide">

    </div>
</body>
</html>