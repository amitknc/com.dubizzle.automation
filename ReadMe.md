Dubizzle-Automation

Dubizzle.com is automated using Selenium webdriver, Cucumber JVM as automation framework, PageObject design pattern and Maven is used as build tool.

Once the test is completed the result will be available under target folder.

SetUp Details

Download Chrome driver from below location https://code.google.com/p/chromedriver/downloads/list?can=1&q=

Copy Chrome driver file in the below location

\src\test\resources

Execution Details

Run the below mvn command to start the test execution

To run the Regression test on uat (Firefox browser)

mvn clean test -Denvironment=uat -Dbrowser=firefox -Dcucumber.options="--tags @RegressionTests" exec:java

To run the Regression test on uat (Chrome browser)

mvn clean test -Denvironment=uat -Dbrowser=chrome -Dcucumber.options="--tags @RegressionTests" exec:java

Test Report for Sauce Lab execution:

Go to https://saucelabs.com/login
Enter username : kumaramitnc and Password: Kumar1234
Sort by end.
you can watch video of test by clicking link.


Test Report for local execution

To execute in local u need to set  flag executeLocal=Y in uat.properties

Cucumber report will be generated and available in the below location,

Cucumber Report /target/cucumber/index.html

Cucumber Jenkins Report /target/cucumber-html-reports/feature-overview.html