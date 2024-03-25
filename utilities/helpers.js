module.exports = {

  getvalue: function (object, field) { 
    return object[field]; 
  },

  format_date: date => {
    const formattedDate = new Date(date);
    const month = formattedDate.getMonth() + 1;
    const day = formattedDate.getDate();
    const year = formattedDate.getFullYear();
    return `${month}/${day}/${year}`;
  },
  
  eq: function (value1, value2) {
    return value1 === value2;
  }
}