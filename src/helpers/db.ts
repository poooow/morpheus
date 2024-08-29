import axios from 'axios'

const csvUrl = process.env.REACT_APP_DRUGLIST_URL || ''

export async function fetchDrugList() {

  return await axios.get(csvUrl)
    .then((response) => {
      const parsedCsvData = parseCSV(response.data)
      return parsedCsvData
    })
    .catch((error) => {
      console.error('Error fetching CSV data:', error)
    })
}

function parseCSV(csvText: string) {
  const rows = csvText.split(/\r?\n/);
  const headers = rows[0].split(',');
  const data = [];

  for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(',');
      const rowObject: {[key: string]: string} = {};
      for (let j = 0; j < headers.length; j++) {
          rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
  }
  return data;
}