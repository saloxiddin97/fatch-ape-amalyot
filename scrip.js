let card=document.querySelector('div')
fetch('https://fakestoreapi.com/products?limit=10')
.then((res)=>res.json())
.then((data)=>{
console.log(data);
for(item of data){
card.innerHTML += `
<div>

<p>${item.id}</p>


<img src="${item.image}" alt="">
<p>${item.description}</p>
</div>
`
}
})