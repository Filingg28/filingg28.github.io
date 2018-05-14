<?php

$recepient = "danilkovalyov2805@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);

$message = "Имя: $name \nТелефон: $email \n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");