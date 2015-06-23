<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['texto'];

//Validate first
if(empty($name)||empty($visitor_email)) 
{
    echo "Nome e email são obrigatorios!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Email incorreto!";
    exit;
}

$email_subject = "Mensagem para o Forum";
$email_body = "O forum recebeu uma mensagem de $name.\n".
    "Conteudo\n $message".
    
$to = "contato@fne.com.br";//<== update the email address
$headers = "From: $visitor_email \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 