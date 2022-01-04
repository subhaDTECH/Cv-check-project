const data=[
    {
        name:'subha Duley',
        age:20,
        city:"kolkata",
        language:"python",
        fermwork:"Django",
        image:"https://randomuser.me/api/portraits/med/men/72.jpg"
    },
    {
        name:'Ambuj Kumar',
        age:22,
        city:"Bihar",
        language:"C++",
        fermwork:"Express",
        image:"https://randomuser.me/api/portraits/med/men/74.jpg"
    },
    {
        name:'Avi Kumar',
        age:30,
        city:"Bnagalore",
        language:"java",
        fermwork:"Node Js",
        image:"https://randomuser.me/api/portraits/med/men/85.jpg"
    },
    {
        name:'Ankita Kumari',
        age:21,
        city:"Mumbia",
        language:"C",
        fermwork:"Flaux",
        image:"https://randomuser.me/api/portraits/med/women/75.jpg"
    },
    {
        name:'Rohit',
        age:19,
        city:"Delhi",
        language:"Go",
        fermwork:"Express",
        image:"https://randomuser.me/api/portraits/med/men/75.jpg"
    }
]

const btn=document.getElementById('btn');
btn.addEventListener('click',nextCV);

// craete iterator 

function CViterator(profiles){

    let nextIndex=0;
    return {
        next:function(){
            return nextIndex < profiles.length ?
            {
                value:profiles[nextIndex++],
                done:false
            }
            : 
            {
                done:true
            }
        }
    }
}


// call the iterator and get the candidate data 
let candidates=CViterator(data)
console.log(candidates)
function nextCV(){
 let imagediv=  document.getElementById('image');
 let profilediv=document.getElementById('profile');
 let currentcandidate=candidates.next().value;
 console.log(currentcandidate)
 if(currentcandidate!=undefined){
    imagediv.innerHTML=`<img src="${currentcandidate.image}" alt="not"> `;
    profilediv.innerHTML=`<ul class="list-group">
    <li class="list-group-item bg-info">Name : ${currentcandidate.name}</li>
    <li class="list-group-item">Age: ${currentcandidate.age}</li>
    <li class="list-group-item">City :${currentcandidate.city}</li>
    <li class="list-group-item">Language :${currentcandidate.language}</li>
    <li class="list-group-item">fermwork : ${currentcandidate.fermwork}</li>
   </ul>`
   

 }else{
     alert("end of profile")
     window.location.reload();
 }

 



}