const patternDict = [{
pattern : '\\b(?<greeting>Hi|Hello|Hey)\\b'
,intent : "Hello"
} ,
{pattern :"\\b(bye|exit|stop)\\b"
,intent : "Exit"},

{pattern :"\\b(help|assistance|support)\\b"
,intent : "Help"},

{pattern : "\\b(ingredient|ingredients)\\sdo\\si\\sneed\\sto\\s(make|do|cook|prepare)((\\s)(a|an|one|the))?\\s(?<recipeing>[A-Za-z]+(\\s[A-Za-z]+)?)\\b"
,intent : "ingredients"},
//what ingredients do i need to make a pizza?

{pattern : "\\b(instruction|instructions|step|steps)\\sto\\s(make|do|cook)\\s(a|an|one|the)\\s(?<recipe>[A-Za-z]+(\\s[A-Za-z]+)?)\\b"
,intent : "instruction"},
//How to make a pizza?

{pattern : "\\b(video|videos|youtube)\\sto\\s(make|do|cook|prepare)((\\s)(a|an|one|the))?\\s(?<recipevideo>[A-Za-z]+(\\s[A-Za-z]+)?)\\b"
,intent : "video"},
//what is the youtube video to make a pizza?

{pattern : "\\b(?<recomm>(dishes|meals))\\sdo\\syou\\s(recommend|suggest|advise)\\b"
,intent : "recommandation"},

{pattern : "(?<rate>[0-5]),([0-5]),([0-5]),([0-5]),([0-5])"
,intent : "rates"}];


module.exports = patternDict ;