export function downloadExcelFromBase64(base64Data, fileName = 'download.xls') {
  const blob = new Blob([Uint8Array.from(atob(base64Data), c => c.charCodeAt(0))], {
    type: 'application/vnd.ms-excel'
  });
  const blobURL = URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');
  downloadLink.href = blobURL;
  downloadLink.download = fileName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

export function downloadCSVFromBase64(base64Data, fileName = 'download.csv') {
  const blob = new Blob([Uint8Array.from(atob(base64Data), c => c.charCodeAt(0))], {
    type: 'text/csv'
  });
  const blobURL = URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');
  downloadLink.href = blobURL;
  downloadLink.download = fileName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

export const BASE_URL = 'https://cmpjbiz-v2.onrender.com';
