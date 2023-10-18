console.log('Extension applied on this page');

//reduce padding of activity-items
var activityItems = document.getElementsByClassName('activity-item');
for(var i = 0; i < activityItems.length; i++){
    activityItems[i].style.paddingTop = '8px';
    activityItems[i].style.paddingBottom = '8px';
    activityItems[i].style.border = '0px';
}

//make activityiconcontainers smaller to reduce overall height of individual objects
var activityIconContainers = document.getElementsByClassName('activityiconcontainer');
for(var i = 0; i < activityIconContainers.length; i++){
    activityIconContainers[i].style.width = '30px';
    activityIconContainers[i].style.height = '30px';
}

//remove padding-bottom of entire sections
var sections = document.getElementsByClassName('section');
for(var i = 0; i < sections.length; i++){
    sections[i].style.paddingBottom = '0px';
}