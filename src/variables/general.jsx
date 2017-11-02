// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
    'Sign contract for "What are conference organizers afraid of?"',
    'Lines From Great Russian Literature? Or E-mails From My Boss?',
    'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit'
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = [
    "ID", "NAME", "SALARY", "COUNTRY", "CITY"
];
const tbody = [
    [ "Dakota Rice" , "$36,738" , "Niger" , "Oud-Turnhout" ] ,
    [ "Minerva Hooper" , "$23,789" , "Curaçao" , "Sinaai-Waas" ] ,
    [ "Sage Rodriguez" , "$56,142" , "Netherlands" , "Baileux" ] ,
    [ "Philip Chaney" , "$38,735" , "Korea, South" , "Overland Park" ] ,
    [ "Doris Greene" , "$63,542" , "Malawi" , "Feldkirchen in Kärnten" ] ,
    [ "Mason Porter" , "$78,615" , "Chile" , "Gloucester" ]
];

module.exports = {
    tasks, // tasks list for Tasks card in Dashboard view
    thead, // data for <thead> of table in Tables view
    tbody // data for <tbody> of table in Tables view
};
