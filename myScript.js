    
    let table = document.createElement("table");
    document.body.appendChild(table);
	  
    const api = "https://api.github.com/search/repositories?q=";
    
    document.querySelector(".b-1").onclick = () => {
		let query = document.querySelector(".i-1");
	  let url = api + query.value;


    fetch(url)
	    .then((response) => {
	    return response.json();
	    })
	    .then((data) => {
       let Arr = data.items;

  	Object.entries(Arr[0]).forEach(([key,value]) => {
 
  		let row = table.insertRow();
  	    let cell1 = row.insertCell(0);
  	    let cell2 = row.insertCell(1);
  	    cell1.textContent = key;
  	    cell2.textContent = value;


  	   
       let cell3 = row.insertCell(2);
       let element1 = document.createElement("button");
       element1.setAttribute('type','button');
       element1.innerHTML = "Добавити в обране";
       cell3.appendChild(element1); 

       element1.onclick = () => {
       	localStorage.setItem(key, value);

       }
  	})

	})	
	}

   function DataOut() {
   
  for (let i = 0; i < localStorage.length; i++)  {
 
  	let storageRow = table.insertRow();
  	let storageCell1  = storageRow.insertCell(0);
  	let storageCell2 = storageRow.insertCell(1);
  	    storageCell1.textContent =  localStorage.key(i);
  	    storageCell2.textContent = localStorage.getItem(localStorage.key(i));
  	     } };
  	DataOut();
