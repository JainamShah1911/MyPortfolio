angular.module('myPortfolio').controller('portfolioController', ['$scope', function($scope) {
    
    $scope.name = 'JS';
    
    $scope.experience = [
        
        {
            "title":"Software Engineer",
            "company":"Hilin Life Products",
            "info":"https://www.knowhen.com/about-us",
            "thumbnail":"http://i.picresize.com/images/2016/11/13/PHeW.png",
            "location":"Newark, New Jersey",
            "fromDate": "June, 2016",
            "toDate": "Present"
        },
      
        {
            "title":"Software Developer",
            "company":"Schmitt & Associates",
            "info":"http://www.sna-tech.com/about/",
            "thumbnail":"http://www.sna-tech.com/wp-content/uploads/2014/08/logo_final_72.png",
            "location":"Newark, New Jersey",
            "fromDate": "November, 2016",
            "toDate": "Present"
        }
    ]; 
    
    $scope.projects = [
        
        {
            "title":"Knowhen.com",
            "company":"Hilin Life Products",
            "info":"https://www.knowhen.com/",
            "thumbnail":"http://i.picresize.com/images/2016/11/13/PHeW.png",
            "description":"• Knowhen.com is the brand site by Hilin Life Products Inc.<br>• Developed the full stack framework for the site.<br>• Designed Wireframes and prototypes using Axure.<br>• Developed product purchase & authorization module using Authorize.net API.<br>• Modified Meta tags to improve the site`s SEO scores.",
            "fromDate": "June, 2016",
            "toDate": "Present"
        },
      
        {
            "title":"knowhenblog.com",
            "company":"Hilin Life Products",
            "info":"https://www.knowhen.com/blog/",
            "thumbnail":"http://i.picresize.com/images/2016/11/13/PHeW.png",
            "description":"• Knowhenblog.com is the blog steered by knowhen.com<br>• Developed the blog UI for hosting articles and the backend using Joomla.<br>• Integrated social platform plugins with commenting options.",
            "fromDate": "June, 2016",
            "toDate": "Present"
        },
        
        {
            "title":"Store Locator",
            "company":"Hilin Life Products",
            "info":"https://www.knowhen.com/",
            "thumbnail":"http://i.picresize.com/images/2016/11/13/PHeW.png",
            "description":"• Store Locator is developed using Google Map API that will guide customers to their nearest stores with knowhen poducts.<br>• Also they can get navigate to the specific store using Google Direction API.<br>• platform is designed using Google`s Places, Geolocation, Direction, Maps APIs and joomla Plugin for location.",
            "fromDate": "August, 2016",
            "toDate": "October, 2016"
        },
        
        {
            "title":"Automated Order Processing",
            "company":"Hilin Life Products",
            "info":"https://www.knowhen.com/",
            "thumbnail":"http://i.picresize.com/images/2016/11/13/PHeW.png",
            "description":"• Automated order processing on Knowhen.com using python scripts with Selenium Web Driver and USPS Developer API.<br>• Once we receive a new order on knowhen.com, system will schedule USPS Pick up and will send an email with the tracking Information to the customer.",
            "fromDate": "June, 2016",
            "toDate": "July, 2016"
        },
        
        {
            "title":"Library Management System",
            "company":"NJIT",
            "info":"#",
            "thumbnail":"http://www.logicearth.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png",
            "description":"• Developed a PHP and JS based Online Library Management System.<br>• Wrote Complex SQL queries to output multiple required scenarios.<br>• Built Custom UI using CSS3 and HTML5 templates.",
            "fromDate": "January, 2016",
            "toDate": "May, 2016"
        },
        
        {
            "title":"MyWeather by AppLads – Android Application",
            "company":"NJIT",
            "info":"#",
            "thumbnail":"http://www.logicearth.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png",
            "description":"• Built a slick & smooth Android Weather Application on Hybrid Ionic Framework.<br>• Animated & swift UI for about 300 cities weather info based on user location.",
            "fromDate": "January, 2016",
            "toDate": "May, 2016"
        },
        
        {
            "title":"Novice Galaxy – Online Job Portal for Fresher`s",
            "company":"ITM Universe",
            "info":"#",
            "thumbnail":"http://www.logicearth.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png",
            "description":"• Built a PHP and JS based Online Job Portal for Fresher`s.<br>• A 2-Way Handshake platform for both, employee as well the employers.<br>• A welcome login page for users with categorization based on General Aptitude Test constructed by employers.<br>• A forum with tips and tricks for career guidance and resume builder.<br>• SQL database storage for all the records of both, employee and the employers.",
            "fromDate": "June, 2014",
            "toDate": "June, 2015"
        },
        
        {
            "title":"Global Blood Donor Dashboard",
            "company":"ITM Universe",
            "info":"#",
            "thumbnail":"http://www.logicearth.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png",
            "description":"• A Multi-information database of Nation-Level Blood Donors.<br>• Development based on PHP front end and SQL backend.<br>• Categorization of blood groups based on States, Sex and Age groups.<br>• Report generation for Admins.",
            "fromDate": "September, 2011",
            "toDate": "January, 2012"
        },
        
        {
            "title":"Secure Chat Application",
            "company":"ITM Universe",
            "info":"#",
            "thumbnail":"http://www.logicearth.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png",
            "description":"• Developed a Secure LAN Based Chat Application.<br>• Development based on Java Server Socket Programming.<br>• A secure chat communication for user connected on single server.",
            "fromDate": "June, 2011",
            "toDate": "December, 2011"
        }
    ];    
    
    $scope.certi = [
        
        {
            "title":"CCNA EXPLORATION: Network Fundamentals – CISCO Certification",
            "authority":"Cisco",
            "thumbnail":"http://vignette1.wikia.nocookie.net/logopedia/images/6/64/Cisco_logo.svg/revision/latest?cb=20121125052409"
        },
      
        {
            "title":"Java training from Oracle: Completed Web Component Development with Servlets & JSP`s Java EE 6",
            "authority":"Oracle",
            "thumbnail":"https://upload.wikimedia.org/wikipedia/en/8/8d/Sun_Oracle_logo.png"
        }
    ];
    
    $scope.resumePDF = 'assets/resume/JainamShah_Resume.pdf';
    $scope.resumeIMG = 'assets/resume/Jainam Shah.jpg';
                                                                

}]);