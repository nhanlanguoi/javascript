
function taotieude(){
    const dulieu = document.querySelector('.p').value;
    const nas = `<p>${dulieu}</p>`;
    document.querySelector('.dv1').innerHTML += nas;
    console.log(document.querySelector('.dv1').innerHTML);
}
const k = [];

function taotieude1() {

let tolist = "";
for(var i = 0 ;i< k.length;i++){
    const t = k[i];
    const html = `<p>${t.name}<span style = "padding-left:50px">${t.name1}</span> <button onclick ="k.splice(${i},1) ;taotieude1(); ">delete</button></p>`;
    tolist += html;
}
console.log(tolist);
document.querySelector('.dv1').innerHTML = tolist;
}

function addto(){
    const name = document.querySelector('.p').value;
    const name1 = document.querySelector('.p1').value;
    k.push({
        // name:name,
        // dat:name1,
        name,
        name1,
    });
    document.querySelector('.p').value = '';
    taotieude1();
}


        




