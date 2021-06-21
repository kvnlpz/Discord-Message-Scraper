

  fetch('https://discord.com/api/v9/channels/=========BLANK FOR NOW============/messages?limit=100', { 
   method: 'get', 
   headers: new Headers({
     'Authorization': '--------------BLANK FOR NOW------------------------------', 
     'x-super-properties': '=====================BLANK FOR NOW==================='

   }),
 })
    .then(response => response.json())
    .then(data => exportData(data));


    function exportData(data){
      const filename = 'data.txt';
      const jsonStr = JSON.stringify(data);
      let mystring = "LATEST MESSAGES: \n\n\n\n";
                for (var i in data) {
                    mystring += data[i]["author"]["username"] + ": " + data[i]['content'] + "\n";
                }
      let element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + mystring);
      element.setAttribute('download', filename);
 
      element.style.display = 'none';
      document.body.appendChild(element);

        element.click();

       document.body.removeChild(element);
    }
