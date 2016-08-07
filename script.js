var even=[2,4,6,8,10,12,14,16,18,20];
alert(even);
alert("array length= " + even.length);
alert("first= "+even[1] +" third= "+even[3] +" sixth= "+even[6] );
alert("index of 10= "+even.indexOf(10));
even.pop();
even.pop();
alert(even);

var numbers=[2,"two",5,"five",8,"eight",11,"eleven",14,"fourteen"];
alert(numbers);

var participants=[first={name:"ayman", height:170, eyecolor:"green"},second={name:"safi", height:170, eyecolor:"brown"}
				 , third={name:"rafat", height:188, eyecolor:"black"}];
participants.shift();
participants.unshift(lecturer={name:"dotan", height:180, eyecolor:"black"});
var eyec={color1:"green", color2:"brown", color3:"black"};

first.eyecolor=eyec.color1;
second.eyecolor=eyec.color2;
third.eyecolor=eyec.color3;
lecturer.eyecolor=eyec.color3;
