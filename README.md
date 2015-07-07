LINK FOR WORKING DESIGN POOL URL IS AS FOLLOWS:
http://adspool3.yakshna.com

AGILE DELIVERY SERVICES FOR DESIGN POOL-1 BY
YAKSHNA SOLUTIONS, INC. (YSI)
07/06/2015

I. DESIGN AND DEVELOPMENT APPROACH FOR FULL STACK POOL PROTOTYPE

Yakshna technologies identified the Product Manager who is cerified scrum master to lead on Agile delivery services. He was pulled from  current working project to lead on ADS prototype. Product Manager initiated 30 minutes stand up meeting for 4 days. He identified the team with labor categories Technical Architect,Dev Ops Engineer ,Front end web developer, Visual Designer to work on development pool prototype.Team has expertise in open source technologies like HTML, CSS, JQuery, AJAX. Team discussed the RFQ and the other documents .Team did review of Questions and Answers documents provided by the agency and did brainstorming session,Identified the user needs.After couple of discussions,team came up with High Level Requirement document.Refer document for requirements YSI_ADS_SRS_Dev_ Pool in the Repository.And team identified the data set Food to be shown on user interface which is taken from www.open.fda.gov website.Data elements were discussed in the meeting which need to be displayed on interface from Food dataset. Data elements Recall number, Recall Firm, Address, Description, Status were finalized to be shown in the list for full stack category.

Design Phase:Team started putting up the high level design document to prepare the Development pool prototype.Open source Technologies were identified HTML5, CSS 3, Jquery,AJAX,Bootstrap,Javascript for responsive design.HTML page had been designed by Visual designer to display the Food details on the static user interface and responsive design was made to support multiple devices like mobile devices,desktops,laptops etc.
Development Phase: After the completion of static design, team started the development of the pool with search functionality of food.After user enter any search criteria user will be displayed with details of matching food in the list format. Unit test was written by the team for positive and negative scenarios to test the functionality.Refer the document  in the repository for unit test of development pool:
 YSI_ADS_Unit_Test_Full_Stack_Pool. 
Three test criteria were handled in full stack pool: one for correct search criteria entered by user then list will be shown matching with matching records,second with incorrect search criteria then user will be shown message 'No matching records found',Third test performed of user clicks search button without entering any search criteria then user will be displayed message 'Search value can not be empty'

SVN tool was used for configuration management and maintaining the iterations of the code.Product manager reviewed the design and code and gave the review comments which were followed by team. Couple of iterations were made to the code after incorporation of review comments and bug fixes of unit test.Testing Phase : After the completion of development, testing phase was initiated by the team.Execution of test cases was maintained in Tool called Jira. Test cases was written and test cycle executed and defect log were generated..Refer Test documents :Test Plan,Test case report,Defect Report in the repository for more details  : 
YSI_ADS_System_Defect_Report_Full_Stack_Pool,
YSI_ADS_System_TestCase_Report_Full_Stack_Pool,
YSI_ADS_System_TestPlan_Full_Stack_Pool,
YSI_ADS_System_TestReport_Full_Stack_Pool,
YSI_ADS_Test_Automation_Run_Report_Full_Stack_pool_Iteration1,
YSI_ADS_Test_Automation_Run Report_Full_Stack_Pool_Iteration2,
YSI_ADS_Test_Automation_Run_Report_Full Stack_Pool_Iteration3,
YSI_ADS_Test_Automation_Run_Report_Full_Stack_Pool


II.  HOW TO INSTALL DEVELOPMENT POOL PROTOTYPE ON WINDOWS PLATFORM

1. Create an application pool in the IIS interface from application pools section
2. In the add application pool dialog box give any name and select any .net framework since the source code will work in any framework
3. Select integrated pipeline mode and click ok to create the application pool
4. Give permission to the IIS identity which is running the application pool to the source code folder
5. Create a website in IIS interface by right clicking in the sites node
6. In the add website dialog box provide site name, root path to the source files, host header names if any
7. Select the application pool name from the step 3
8. Select the newly created website name and from the right pane select Default Document
9. In the default document list check and make sure index.html is present
10. Access the domain and check and make sure the website is giving the index.html as the response.

III. HOW TO INSTALL DEVELOPMENT POOL PROTOTYPE ON LINUX PLATFORM
Refer document in the repository : YSI_ADS_Installation_Guide_Full_Stack_Pool_3

IV. MINIMUM SYSTEM REQUIREMENTS 

¥ Windows or Linux OS, Internet Connectivity
¥ Minimum 64 MB of RAM
¥ Internet Explorer 9.0 or above, Chrome 38 or above and Firefox 35 or above

V. KNOWN RISKS

Data will be shown to user fetched from API from www.open.fda.gov website.If this site goes down and does not return dataset then user interface will not show up the data.Prototype has dependency on the dataset returned from website.  The prototype is not developed to comply with Section 508 requirements due to time constraint.
