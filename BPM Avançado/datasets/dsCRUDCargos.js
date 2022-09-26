function createDataset(fields, constraints, sortFields) {

  var dataset = DatasetBuilder.newDataset();

  //* COLUNAS
  dataset.addColumn("CARGOS");

  //? LINHAS
  dataset.addRow(new Array("Analista de Sistemas"));
  dataset.addRow(new Array("Analista de Suporte"));

  return dataset;
}