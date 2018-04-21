function convertToPostData(data) {
  // let formData = new FormData();
  // Object.keys(data)
  //     .map((key) => {
  //         formData.append(`"${key}"`, JSON.stringify(data[key]));
  //     });

  return data ? JSON.stringify(data) : null;

  // return Object.keys(data).map(function(k) {
  //     return (encodeURIComponent(k) + '=' + encodeURIComponent(data[k]));
  // }).join('&');
}

function convertDataToQuery(data) {
  return Object.keys(data)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');
}

export { convertDataToQuery, convertToPostData };
