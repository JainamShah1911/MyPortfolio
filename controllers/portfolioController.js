angular.module('myPortfolio').controller('portfolioController', ['$scope', function($scope) {
    
    $scope.name = 'JS';
    
    $scope.experience = [
        {
            "title":"Software Developer",
            "company":"Schmitt & Associates Technologies",
            "info":"http://www.sna-tech.com/about/",
            "thumbnail":"http://sna-tech.com/wp-content/uploads/2014/08/logo_final_72_white.png",
            "location":"Newark, New Jersey",
            "fromDate": "Jan, 2017",
            "toDate": "Present",
            "work": "<b>Technology / Framework / Tools :<b><br>Scala, Java, Play framework, AngularJS, Angular4, Amazon AWS, Java Beans, HTML, Javascript, Jquery, CSS, Bootstrap, Material Design, Angular CLI, Snap CI, Circle CI, MySQL, API Calls and formatting(Google Maps, Twitter, FEMA), Android<br><b>Accomplishments:<b><br>• Working on all domains of the firm as a Full Stack Engineer.<br>•  Currently developing an interface called CurrantGrid with Scala Web framework & Angular JS.<br>• The backend of the system is being developed using JavaBean Play Framework.<br>• Working on a template in Angular 4 Using Material Design for UI.<br>• Implemented Twitter-based social network using Twitter API.<br>• Manipulating Google map markers and get them set to a particular latitude-longitude position using Google MAP API<br>• Implementation of user role-based page permissions on a website using the dynamic deadbolt.<br>• Writing complex queries using java bean and play framework.<br>•  Using of REST API of FEMA database to get data from government database to my local database.<br>•  Working on Android application with Google Map API and AWS integration.<br>"
        },
        {
            "title":"Software Engineer",
            "company":"Hilin Life Products Inc",
            "info":"https://www.knowhen.com/about-us",
            "thumbnail":"assets/thumbnails/JainamShah_Hilinlife.png",
            "location":"Newark, New Jersey",
            "fromDate": "June, 2016",
            "toDate": "Jan, 2017"
        }
    ]; 
    
    
    $scope.projects = [
        
        {
            "title":"CurrantGrid",
            "company":"S & A Technologies",
            "info":"https://app.currantgrid.com/",
            "thumbnail":"assets/thumbnails/JainamShah_knowhen.png",
            "description":"• CurrantGRID Incident Management System.<br>• Capable of delivering support for disaster response and recovery, command center operations, and VOST, as well as everyday municipal management.<br>• Integrating the latest technologies to leverage social reporting, workflow and team management, and GPS-enabled mapping – all the tools a modern OEM facility needs. CurrantGRID is available anywhere from any device.",
            "fromDate": "Jan, 2017",
            "toDate": "Present"
        },

	{
            "title":"Knowhen.com",
            "company":"Hilin Life Products",
            "info":"https://www.knowhen.com/",
            "thumbnail":"assets/thumbnails/JainamShah_knowhen.png",
            "description":"• Knowhen.com is the brand site by Hilin Life Products Inc.<br>• Developed the full stack framework for the site.<br>• Designed Wireframes and prototypes using Axure.<br>• Developed product purchase & authorization module using Authorize.net API.<br>• Modified Meta tags to improve the site`s SEO scores.",
            "fromDate": "June, 2016",
            "toDate": "Present"
        },
      
        {
            "title":"knowhenblog.com",
            "company":"Hilin Life Products",
            "info":"https://www.knowhen.com/blog/",
            "thumbnail":"assets/thumbnails/JainamShah_knowhenBlog.png",
            "description":"• Knowhenblog.com is the blog steered by knowhen.com<br>• Developed the blog UI for hosting articles and the backend using Joomla.<br>• Integrated social platform plugins with commenting options.<br><br><br><br>",
            "fromDate": "June, 2016",
            "toDate": "Present"
        },
        
        {
            "title":"Store Locator",
            "company":"Hilin Life Products",
            "info":"https://www.knowhen.com/",
            "thumbnail":"assets/thumbnails/JainamShah_storeLocator.png",
            "description":"• Store Locator is developed using Google Map API that will guide customers to their nearest stores with products.<br>• Also they can navigate to the specific store using Google Direction API.<br>• platform is designed using Google`s Places, Geolocation, Direction, Maps APIs and joomla Plugin for location.",
            "fromDate": "August, 2016",
            "toDate": "October, 2016"
        },
        
        {
            "title":"Automated Order Processing",
            "company":"Hilin Life Products",
            "info":"https://www.knowhen.com/",
            "thumbnail":"assets/thumbnails/JainamShah_order.png",
            "description":"• Automated order processing on Knowhen.com using python scripts with Selenium Web Driver and USPS Developer API.<br>• Once we receive a new order on knowhen.com, system will schedule USPS Pick up and will send an email with the tracking Information to the customer.",
            "fromDate": "June, 2016",
            "toDate": "July, 2016"
        },
        
        {
            "title":"Library Management System",
            "company":"NJIT",
            "info":"https://web.njit.edu/~pkn7/LMSv2/",
            "thumbnail":"assets/thumbnails/JainamShah_libraryManagement.png",
            "description":"• Developed a PHP and JS based Online Library Management System.<br>• Wrote Complex SQL queries to output multiple required scenarios.<br>• Built Custom UI using CSS3 and HTML5 templates.<br><br><br><br>",
            "fromDate": "January, 2016",
            "toDate": "May, 2016"
        },
        
        {
            "title":"MyWeather by AppLads – Android Application",
            "company":"NJIT",
            "info":"#",
            "thumbnail":"assets/thumbnails/JainamShah_AppLads.png",
            "description":"• Built a slick & smooth Android Weather Application on Hybrid Ionic Framework.<br>• Animated & swift UI for about 300 cities weather info based on user location.<br><br><br><br><br>",
            "fromDate": "January, 2016",
            "toDate": "May, 2016"
        },
        
        {
            "title":"Novice Galaxy – Online Job Portal for Fresher`s",
            "company":"ITM Universe",
            "info":"#",
            "thumbnail":"assets/thumbnails/JainamShah_novice.png",
            "description":"• Built a PHP and JS based Online Job Portal for Fresher`s.<br>• A 2-Way Handshake platform for both, employee as well the employers.<br>• A welcome login page for users with categorization based on General Aptitude Test constructed by employers.<br>• A forum with tips and tricks for career guidance and resume builder.<br>• SQL database storage for all the records of both, employee and the employers.",
            "fromDate": "June, 2014",
            "toDate": "June, 2015"
        },
        
        {
            "title":"Global Blood Donor Dashboard",
            "company":"ITM Universe",
            "info":"#",
            "thumbnail":"assets/thumbnails/JainamShah_bloodDonation.png",
            "description":"• A Multi-information database of Nation-Level Blood Donors.<br>• Development based on PHP front end and SQL backend.<br>• Categorization of blood groups based on States, Sex and Age groups.<br>• Report generation for Admins.",
            "fromDate": "September, 2011",
            "toDate": "January, 2012"
        },
        
        {
            "title":"Secure Chat Application",
            "company":"ITM Universe",
            "info":"#",
            "thumbnail":"assets/thumbnails/JainamShah_Chat.png",
            "description":"• Developed a Secure LAN Based Chat Application.<br>• Development based on Java Server Socket Programming.<br>• A secure chat communication for user connected on single server.",
            "fromDate": "June, 2011",
            "toDate": "December, 2011"
        }
    ];    
    
    $scope.certi = [
        
        {
            "title":"CCNA EXPLORATION: Network Fundamentals – CISCO Certification",
            "authority":"Cisco",
            "thumbnail":"assets/thumbnails/JainamShah_Cisco.png"
        },
      
        {
            "title":"Java training from Oracle: Completed Web Component Development with Servlets & JSP`s Java EE 6",
            "authority":"Oracle",
            "thumbnail":"assets/thumbnails/JainamShah_oracle.png"
        }
    ];
    
    $scope.resumePDF = 'assets/resume/JainamShah_Resume.pdf';
    $scope.resumeIMG = 'assets/resume/Jainam Shah.jpg';
                                                                

}]);