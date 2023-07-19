

let arr=[];
let id=0;
let addButton=document.getElementsByClassName("userbtn")[0];
let viewContainer= document.getElementsByClassName("viewContainer")[0];
let successContainer= document.getElementsByClassName("SuccessMessage")[0];
let errorContainer= document.getElementsByClassName("ErrorMessage")[0];

function zero(){
    if(arr.length==0){
        viewContainer.innerHTML='';
        let message=document.createElement('p');
        message.className='default';
        message.innerText='You have 0 Employees';
        viewContainer.append(message);
    }
}
zero();


addButton.addEventListener('click',adduser);
function adduser(){
let Name = document.getElementById('Name').value
let Profession = document.getElementById('Profession').value
let Age = document.getElementById('Age').value

if(!Name || !Profession ||!Age){
    let error = document.createElement('p');
    error.className = 'ErrorMessage';
    error.innerText="Error: Please make sure that All the fields are filled before adding an Employee";
    
    errorContainer.innerText = '';
    successContainer.innerText = '';
    errorContainer.append(error);
    // error.remove();
    return;
}


let Success=document.createElement('p');
Success.className='SuccessMessage';
Success.innerText="Success: Congo Employee Added";
errorContainer.innerHTML='';
successContainer.innerHTML='';
successContainer.append(Success);

    // Success.remove();

id=id+1;
let info=document.createElement("div");
info.className='info';
info.innerHTML=`<div class="id">${id}.</div>
<div class="name">Name:${Name}</div>
<div class="profession">Profession:${Profession}</div>
<div class="age">Age:${Age}</div>
`
arr.push(info);
show();
zero();
}



function show(){
    viewContainer.innerHTML='';

    arr.forEach(element=>{
        let viewFlex=document.createElement('div');
        viewFlex.className='viewFlex';
        viewFlex.append(element);
        let DeleteContainer=document.createElement('div');
        let DeleteButton=document.createElement('button');
        DeleteButton.className='deleteButton';
        DeleteButton.innerText='Delete User'
        
        DeleteButton.addEventListener('click',()=>{
            arr=arr.filter(item=>item!=element);
            show();
            zero();
        })
        DeleteContainer.append(DeleteButton);
        viewFlex.append(DeleteContainer);
        viewContainer.append(viewFlex);

    })
}


