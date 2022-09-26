$(document).ready(function () {

})

const pickDate = () => {
  let data = $("[name^='BIRTHDATE___']")
  debugger;
  FLUIGC.calendar(data)

};

function setSelectedZoomItem(selectedItem) {
  if (selectedItem.inputId.indexOf('ZOOM_USER___') == 0) {
    let i = selectedItem.inputId.split("___")[1];
    $('#_EMAIL___' + i).val(selectedItem.mail);
  }
}

const addChild = (table) => {
  wdkAddChild(table);
  pickDate();
  $("#tabela").show(500);
  MaskEvent.init()
}

const removeChild = (row) => {
  fnWdkRemoveChild(row);
}