package UIfunctionaltests.testcases;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format = { "pretty", "html:target/cucumber",
		"json:target/cucumber.json" }, tags = { "@RegressionTests" })
public class RunTest {
	
}