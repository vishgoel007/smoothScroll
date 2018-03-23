var interval;

function setScroll(targetLocation) {

    var initialLocation = document.documentElement.scrollTop;

    var downScroll = (initialLocation <= targetLocation);

    clearInterval(interval);

    interval = setInterval(function(){
        var currentLocation = document.documentElement.scrollTop;
        console.log('initial, current',initialLocation, currentLocation);


        var diff = targetLocation - currentLocation;
        var scrollLength = 5;

        if (diff < 0){
            scrollLength = -scrollLength;
        }

        if ((downScroll && currentLocation >= targetLocation) || (!downScroll && currentLocation <= targetLocation)){
            clearInterval(interval);
        }else{
            window.scrollBy(0, scrollLength);
        }

    }, 10);


}


function smoothScroll() {

    var navbar = document.querySelector('#main-menu ul');
    var navbarHeight = navbar.offsetHeight;
    console.log('navbarHeight:', navbarHeight);
    var liItems = navbar.querySelectorAll('li');
    console.log(liItems);

    liItems.forEach(function (ele) {

        ele.addEventListener('click', function () {

            var targetSectionId = this.dataset.sectionid;
            targetSectionId = targetSectionId.split('#').join('');

            if(document.getElementById(targetSectionId) != null){
                var targetSectionOffset = document.getElementById(targetSectionId).offsetTop;
                console.log(targetSectionOffset);

            }

            if(targetSectionId === 'home') setScroll(targetSectionOffset);
            else setScroll(targetSectionOffset - navbarHeight)

        });

    });

}

window.addEventListener('load', smoothScroll);
