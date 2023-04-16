// Задание 1

const xmlParser= new DOMParser();
       let xml=`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`; 

const xmlDOM= xmlParser.parseFromString(xml,'text/xml');
const student= xmlDOM.querySelectorAll('student');
const name=xmlDOM.querySelectorAll('name');
 const second=xmlDOM.querySelectorAll('second');
const first=xmlDOM.querySelectorAll('first');
 const prof=xmlDOM.querySelectorAll('prof');
 const age=xmlDOM.querySelectorAll('age');
 const lang=name[0].getAttribute('lang');

const obj= {
    list:[
    
    ]
}

for(var i=0;i<student.length;i++){
  obj.list.push(  {
            name:0,
            prof:0,
            age:0,
            lang:0,
        });
  obj.list[i].name=`${first[i].textContent} ${second[i].textContent}`;
  obj.list[i].prof=`${prof[i].textContent}`;
  obj.list[i].age=`${age[i].textContent}`;
  obj.list[i].lang=name[i].getAttribute('lang');

}
