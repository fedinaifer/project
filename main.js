function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}
var id = generateID();

var loseweightdiet = ['salad','eggs','rice','fish','fruits'];
var gainmusclediet = ['tuna','eggs','meat','chicken','oatmeal'];

var dietimages = ['salad.', 'eggs.', 'rice.', 'fish.', 'fruits.', 'oatmeal.', 'chicken.', 'meat.', 'tuna.'];

function GetFit(id, personName, programName, dietList) {
  return {
      id: id,
	  personName: personName,
      programName: programName,
	  dietList: dietList
  }
}


$(document).ready(function() {
    $('#get-started').click(function() {
        $(this).fadeOut(300, function() {
            $('#menus').fadeIn(300);
        });
    });
});

$(document).ready(function() {
    $('.menu').click(function() {
		
        var personName = $('#username').val();
        var dietList;
        if (personName=== '') {
            alert('Please enter your name.');
            return;
        }
        var programName = $(this).find('h2').text();
      
	    if (programName === "Lose weight") {
			dietList = loseweightdiet;
		}
		else {
			dietList = gainmusclediet;
		}
        var id = generateID();
        var fit = GetFit(id, personName, programName, dietList);
		//console.log(fit);
		
		$('#menus').fadeOut(300, function() {
            var dietListul = document.getElementById('diet-list');
			var personNamep = document.getElementById('person-name');
            dietListul.innerHTML = '';

            for (var i = 0; i < dietList.length; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = dietList[i];
                dietListul.appendChild(listItem);
            }
			personNamep.textContent = personNamep.textContent + ' ' + personName;
			$(personNamep).add(dietListul).fadeIn(300);
        });
		
    });
});


 
