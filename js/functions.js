/**
 * 2014-05-19 23:22
 * Phoenix Nemo <i at phoenixlzx dot com>
 * License MIT | http://opensource.org/licenses/MIT
 */

function init() {

    chrome.topSites.get(function(topSitesArray) {

        var sites = [],
            i = 0;

        if (topSitesArray.length >= 8) {

            for (i = 0; i <= 7; i++) {

                sites.push('<li><a href="' + topSitesArray[i].url + '" class="top">' + topSitesArray[i].title + '</a></li>');

            }

        } else {

            for (i = 0; i < topSitesArray.length ; i++) {

                sites.push('<li><a href="' + topSitesArray[i].url + '" class="top">' + topSitesArray[i].title + '</a></li>');

            }

        }

        $('ul#topSites').append(sites);

        // set background
        var images = [
            '001.jpg',
            '002.jpg',
            '003.jpg',
            '004.jpg',
            '005.jpg',
	    '006.jpg',
	    '007.jpg',
	    '008.jpg'
        ];
        $('body').css({'background-image': 'url(/img/bg/' + images[Math.floor(Math.random() * images.length)] + ')' });

    });

}

init();
