function validateForm(form) {
  var msg = ""
  msg += "Preencha os campos <b>obrigatórios</b>: <br><br>"
  var email = form.getValue('ZOOM_USER');
  if (email == null || email == '') {
    msg += 'O campo e-mail é obrigatório <br>';
  }
  if (form.getValue('BIRTHDATE') == null || form.getValue('BIRTHDATE') == '') {
    msg += 'O campo data de nascimento é obrigatório <br>';
  }
  if (form.getValue("AGE") == null || form.getValue("AGE") == '0') {
    msg += 'O campo idade é obrigatório <br>';
  }

  if (msg != "") {
    throw msg;
  }
}