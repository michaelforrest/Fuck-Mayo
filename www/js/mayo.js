var MY_THINGS = ["burger","cheeseburger","chicken burger","sandwich","club sandwich","BLT","baguette","salad","croque monsieur","toastie","bloomer","sarnie","cheese & ham sandwich" ,"jam sandwich","marmite sandwich","roll","cheese and ham roll","cheese and tomato roll","steak sandwich","pulled pork sandwich","BBQ burger","Angus beef burger","minute steak sandwich" ,"steakwich","salad","chicken tikka sandwich","roast chicken sandwich","beef sandwich","kebab","shish kebab","prawn sandwich","chip buttie","buttie","pleasant snack","otherwise enjoyable sandwich"];
var GROSS_THINGS = ["goose piss","cat sick","wasps","barbed wire","KY jelly","phlegm","dehydrated piss","piss","shit","loose stools","rat teeth","toenails","toilet duck","marmite","blood piss","foot cream","anusol","E45 cream","bleach","Daz","xenomorphic hull-destroying acid","battery acid","cat AIDS","uranium","Thames water","ketchup","horseradish","pipe cleaners","detergent","kidney stones","jissom","knee fluid","eye gunk","bin juice","pigeon beaks","dog eggs","the H1N1 virus","the norovirus","cunt paste","twat batter","spunk","my nutsack","vaginal residue","my Dad’s ashes","Cheeky Vimto","Rohypnol","brake fluid","small pox","nappy shit","cock vomit"];
var YOUR_THINGS = ["Gucci handbag","fucking lasagne","pie","trendy hat","back pocket","foolish backpack","ridiculous salad","shitting breakfast","awful bag","Samsonite","Shoreditch plimsolls","cunting mouth","wanky supper","soup","Cup-o-soup","Pot Noodle","cup of tea","coffee","Lucozade","coke","spaghetti bolognese","spaghetti carbonara","beef bourgignon","coq au cocking vin","Weight Watchers meal for one","Happy Meal","Frosties","satchel","purse","crack","child’s eyes","dog’s food bowl","fucking fish tank","mum","dad","sister","twatty shoes","skinny fucking trousers","biscuit tin","Thai curry","Chicken korma","vindaloo","dad's gout medication","Christmas dinner","Ugg boots","nice bubble bath","man purse","nice light snack","hot water bottle","jewellery box","mum's wide-on","chuffing rim"];
$(function(){$my_thing = $("#my_thing");$gross_thing = $("#gross_thing");$your_thing = $("#your_thing");
	var random = function(array){ var count = array.length; return array[Math.floor(Math.random() * count)];  }
	var makeAnother = function(){
		$my_thing.text(random(MY_THINGS));
		$gross_thing.text(random(GROSS_THINGS));
		$your_thing.text(random(YOUR_THINGS));
		return false;
	};
	makeAnother();
$("#reload").click(makeAnother);
})