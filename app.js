const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = "OTQzOTg2ODY2MjM4MTQwNDY3.Yg7CRw.KVFcMjpuGNdgMYeA2UXpMMDXBWY";

const recipe = require ("./Recipes");
const matcher = require ('./matcher') ; // to use the matcher module here
const colors = require('colors');
require("math");
Matrix=require("matrix");
var meals=["Apple Frangipan Tart","Apple & Blackberry Crumble","Apam balik","Ayam Percik","Bakewell tart","Bread and Butter Pudding","Beef Wellington","Baingan Bharta","Beef Brisket Pot Roast","Beef Sunday Roast","Beef stroganoff","Broccoli & Stilton soup","Bean & Sausage Hotpot","Banana Pancakes","Beef Dumpling Stew","Beef and Mustard Pie","Beef and Oyster pie","Blackberry Fool","Battenberg Cake","Beef Bourguignon","Brie wrapped in prosciutto & brioche","BeaverTails","Brown Stew Chicken","Beef Lo Mein","Baked salmon with fennel & tomatoes","Budino Di Ricotta","Breakfast Potatoes","Bitterballen (Dutch meatballs)","BBQ Pork Sloppy Joes","Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber","Big Mac","Bigos (Hunters Stew)","Boxty Breakfast","Beef Rendang","Chocolate Gateau","Chicken Enchilada Casserole","Cream Cheese Tart","Christmas Pudding Flapjack","Chicken Handi","Chicken Alfredo Primavera","Chicken Fajita Mac and Cheese","Cajun spiced fish tacos","Crock Pot Chicken Baked Tacos","Chicken Karaage","Coq au vin","Chilli prawn linguine","Clam chowder","Creamy Tomato Soup","Chicken & mushroom Hotpot","Chicken Couscous","Chocolate Avocado Mousse","Choc Chip Pecan Pie","Chocolate Raspberry Brownies","Chickpea Fajitas","Chicken Ham and Leek Pie","Chicken Parmentier","Carrot Cake","Chelsea Buns","Chocolate Souffle","Chinon Apple Tarts","Chicken Marengo","Canadian Butter Tarts","Chicken Basquaise","Callaloo Jamaican Style","Chicken Congee","Chocolate Caramel Crispy","Chakchouka","Cashew Ghoriba Biscuits","Corba","Christmas Pudding Trifle","Christmas cake","Corned Beef and Cabbage","Crispy Sausages and Greens","Chicken Quinoa Greek Salad","Chick-Fil-A Sandwich","Coddled pork with cider","Cevapi Sausages","Croatian lamb peka","Croatian Bean Stew","Chivito uruguayo","Dal fry","Dundee cake","Duck Confit","Eton Mess","Eccles Cakes","English Breakfast","Escovitch Fish","Egg Drop Soup","Egyptian Fatteh","Fish pie","French Lentils With Garlic and Thyme","Fettucine alfredo","Full English Breakfast","French Onion Soup","Flamiche","French Omelette","Fish Stew with Rouille","Fennel Dauphinoise","Fruit and Cream Cheese Breakfast Pastries","French Onion Chicken with Roasted Carrots & Mashed Potatoes","Ful Medames","Feteer Meshaltet","Fish fofos","Fresh sardines","Garides Saganaki","Grilled Mac and Cheese Sandwich","General Tso's Chicken","Gigantes Plaki","Grilled Portuguese sardines","Honey Teriyaki Salmon","Hot Chocolate Fudge","Hot and Sour Soup","Home-made Mandazi","Honey Balsamic Chicken with Crispy Broccoli & Potatoes","Honey Yogurt Cheesecake","Ham hock colcannon","Irish stew","Jam Roly-Poly","Jerk chicken with rice & peas","Jamaican Beef Patties","Japanese gohan rice","Japanese Katsudon","Kapsalon","Kentucky Fried Chicken","Katsu Chicken curry","Key Lime Pie","Kidney Bean Curry","Kedgeree","Kung Pao Chicken","Kung Po Prawns","Kafteji","Keleya Zaara","Kumpir","Krispy Kreme Donut","Koshari","Lamb tomato and sweet spices","Lamb Biryani","Lamb Rogan josh","Laksa King Prawn Noodles","Lamb Tagine","Lasagne","Lamb and Potato pie","Lancashire hotpot","Leblebi Soup","Lasagna Sandwiches","Lamb and Lemon Souvlaki","Lamb Tzatziki Burgers","Mediterranean Pasta Salad","Massaman Beef curry","Mushroom & Chestnut Rotolo","Matar Paneer","Minced Beef Pie","McSinghs Scotch pie","Madeira Cake","Montreal Smoked Meat","Ma Po Tofu","Mbuzi Choma (Roasted Goat)","Mince Pies","Moussaka","Mulukhiyah","Mustard champ","Moroccan Carrot Soup","Mee goreng mamak","Mushroom soup with buckwheat","Nutty Chicken Curry","New York cheesecake","Nanaimo Bars","Nasi lemak","Osso Buco alla Milanese","Oxtail with broad beans","Pad See Ew","Potato Gratin with Chicken","Poutine","Pilchard puttanesca","Pork Cassoulet","Pancakes","Pumpkin Pie","Peanut Butter Cheesecake","Peach & Blueberry Grunt","Parkin Cake","Pear Tarte Tatin","Proven al Omelette Cake","Prawn & Fennel Bisque","Pate Chinois","Pouding chomeur","Peanut Butter Cookies","Pizza Express Margherita","Paszteciki (Polish Pasties)","Pierogi (Polish Dumplings)","Polskie Nale\u015bniki (Polish Pancakes)","Piri-piri chicken and slaw","Portuguese prego with green piri-piri","Portuguese barbecued pork (Febras assadas)","Portuguese fish stew (Caldeirada de peixe)","Portuguese custard tarts","Rigatoni with fennel sausage sauce","Rocky Road Fudge","Recheado Masala Fish","Ribollita","Roasted Eggplant With Tahini, Pine Nuts, and Lentils","Rock Cakes","Ratatouille","Rappie Pie","Red Peas Soup","Roast fennel and aubergine paella","Polish Chicken Soup","Rogaliki (Polish Croissant Cookies)","Roti john","Spaghetti Bolognese","Spicy Arrabiata Penne","Smoky Lentil Chili with Squash","Sticky Toffee Pudding Ultimate","Spicy North African Potato Salad","Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt","Salmon Prawn Risotto","Salted Caramel Cheescake","Spinach & Ricotta Cannelloni","Squash linguine","Spanish Tortilla","Steak and Kidney Pie","Sticky Toffee Pudding","Summer Pudding","Summer Pistou","Split Pea Soup","Sugar Pie","Steak Diane","Sweet and Sour Pork","Szechuan Beef","Shrimp Chow Fun","Salmon Avocado Salad","Salmon Eggs Eggs Benedict","Shakshuka","Smoked Haddock Kedgeree","Stamppot","Spaghetti alla Carbonara","Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots","Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini","Strawberry Rhubarb Pie","Stuffed Lamb Tomatoes","Spring onion and prawn empanadas","Spring onion and prawn empanadas","Teriyaki Chicken Casserole","Tandoori chicken","Thai Green Curry","Toad In The Hole","Turkey Meatloaf","Tuna Nicoise","Tahini Lentils","Three Fish Pie","Tarte Tatin","Three-cheese souffles","Tourtiere","Tunisian Orange Cake","Tunisian Lamb Soup","Tuna and Egg Briks","Traditional Croatian Goulash","Vegan Lasagna","Vegan Chocolate Cake","Vietnamese Grilled Pork","Venetian Duck Ragu","Vegetarian Casserole","Vegetarian Chilli","Vegetable Shepherd's Pie","White chocolate creme brulee","Walnut Roll","Yaki Udon"]

var listnum=[]
const prefix = "";

client.on('message', message => {
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

matcher (message , cb => {
if( Object.keys(cb).length === 0 ) {
message.reply(`I do not understand ${message}`) ;
 }
else {


    if (cb.entities[0]==="bye"|cb.entities[0]==="exit"){message.reply("Bye, have a nice day");}
    else if (cb.entities[0]==="help"){message.reply("If you have some problems, please contact our customer support at : 012030405060");}
    else if(cb.entities.groups.recipe != undefined) {
        let Rec= recipe(cb.entities.groups.recipe);
        Rec.then(result=>{
        console.log(result.meals[0]);
        message.reply("Instructions : "+result.meals[0].strInstructions);} )}

    else if (cb.entities.groups.recipeing != undefined)
    {

    let Rec= recipe(cb.entities.groups.recipeing);
            Rec.then(result=>{
            console.log(result.meals[0]);
            message.reply("Ingredients : "+result.meals[0].strIngredient1+", "+result.meals[0].strIngredient2+", "+result.meals[0].strIngredient3+", "+result.meals[0].strIngredient4+", "+result.meals[0].strIngredient5+", "+result.meals[0].strIngredient6);} )
    }
    else if (cb.entities.groups.recipevideo != undefined)
            {
            let Rec= recipe(cb.entities.groups.recipevideo);
                    Rec.then(result=>{
                    console.log(result.meals[0].strYoutube);
                    message.reply("link : "+result.meals[0].strYoutube);} )
            }
    else if (cb.entities.groups.recomm != undefined)
                {
                var listmeals=[]
                for (let i=0;i<5;i++){
                var n=Math.floor(Math.random() * meals.length);
                listnum.push(n);
                listmeals.push(meals[n])}
                var txt="Please rate those meals (ex : 1,5,3,4,4):"+"\n"+listmeals[0]
                for (let i=1;i<5;i++){txt=txt+", "+listmeals[i]}
                message.reply(txt)



                }
    else if(cb.entities.groups.rate !=undefined){
    var list=message.toString().split(",")
    for(let i=0;i<list.length;i++){list[i]=parseInt(list[i])}


    luser=[]
    for(var j=0; j<267; j++) {
        luser[j] = 0;
        }
    for (let i=0;i<listnum.length;i++){luser[listnum[i]]=list[i]}

    var matrix = [];
    for(var i=0; i<100; i++) {
        matrix[i] = [];
        for(var j=0; j<267; j++) {
            matrix[i][j] = Math.floor(Math.random()*6);

        }}
    matrix[100]=luser



    for(var i=0; i<101; i++) {
    matrix[i]=normalize_array(matrix[i])
    }
    var results=best_pred(100, matrix , 5)
    txt2="We recommend "+meals[results[0]]
    for (let i=1;i<results.length;i++){txt2=txt2+", "+meals[results[i]]}
    message.reply(txt2)


    }

 }})});



client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "hello") {
    message.reply(`Hello ${message.author} !`);
  }

});

function dotp(x, y) {
  function dotp_sum(a, b) {
    return a + b;
  }
  function dotp_times(a, i) {
    return x[i] * y[i];
  }
  return x.map(dotp_times).reduce(dotp_sum, 0);
}

function cosinesim(A,B){
  var similarity = dotp(A, B) / (Math.sqrt(dotp(A,A)) * Math.sqrt(dotp(B,B)));
  return similarity;
}

//normalisation

function normalize_array(arr) {

  normalize = function(val, max, min) {
    return(val - min) / (max - min);
  }

  max = Math.max.apply(null, arr)
  min = Math.min.apply(null, arr)

  hold_normed_values=[]
  arr.forEach(function(this_num) {
    hold_normed_values.push(normalize(this_num, max, min))
  })

  return(hold_normed_values)

}

//find similar users



function find_similar_users(user, user_matrix)
{

    l=[]
    for(var i=0; i<100; i++) {
if(i!=user){l.push(ob={'id':i,"note":cosinesim(user_matrix[user],user_matrix[i])})}}
sortedl=l
var sorted_list = sortedl.sort(function(a, b) {
	return b.note - a.note;
});
    return sorted_list.slice(0,5);

    }


function prediction(user,meal,utility_mat)
{
    list=[]
    let sim_users = find_similar_users(user , utility_mat)

    for (let i=0;i<sim_users.length;i++){list.push(sim_users[i].id)}

    let sum_rankings = 0.0
    for (i in list)
    {
    sum_rankings = sum_rankings + utility_mat[i][meal]
    }
    return sum_rankings/5
}



function best_pred(user , utility_mat)
    {pred=[]
    for (let i=0;i<266;i++)
        {
        pred.push(ob={'id':i,"prediction":prediction (100, i, utility_mat)})}
    var sorted_pred = pred.sort(function(a, b) {
    	return b.prediction - a.prediction;
    });
    sorted_pred=sorted_pred.slice(0,5)
    sorted_pred_list=[]
    for (let i=0;i<sorted_pred.length;i++)
        {
        sorted_pred_list.push(sorted_pred[i].id)}
    return sorted_pred_list}


client.login(token)