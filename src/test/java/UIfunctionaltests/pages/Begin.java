package UIfunctionaltests.pages;

import java.awt.Toolkit;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.dubizzle.automation.ReadFromPropertiesFile;
import com.saucelabs.saucerest.SauceREST;

import cucumber.api.Scenario;

public class Begin {
	public static WebDriver driver;
	public static Scenario scenario;
	public String sessionId;

	// public static String exeEnvironment = System.getProperty("environment");
	public static String exeEnvironment = "uat";
	public String exeBrowserName = System.getProperty("browserName");
	public String exePlatfom = System.getProperty("platform");
	public static final String CHROME_LOCATION = "/src/test/resources/chromedriver";
	public static ReadFromPropertiesFile readFromPropertiesFile = new ReadFromPropertiesFile(
			getExeEnvironment());

	public static WebDriver getDriver() {
		return driver;
	}

	public static Scenario getScenario() {
		return scenario;
	}

	public static String getExeEnvironment() {
		return exeEnvironment;
	}

	public static FirefoxDriver setFirefoxDriver() {
		return new FirefoxDriver();
	}

	public static ChromeDriver setChromeDriver() {
		return new ChromeDriver();
	}

	public Begin() {
		// Empty constructor
	}

	public void prepare(Scenario scenario) throws Exception {
		if (readFromPropertiesFile.readPropertiesFile("executeLocal")
				.equalsIgnoreCase("y")) {
			executeOnLocal();

		} else {
			executeOnSauce(scenario);
		}
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

	}

	public void executeOnLocal() {
		try {
			System.out.println("Executing on local system");
			// Code to read scenario and feature name

			if (readFromPropertiesFile.readPropertiesFile("browser")
					.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.firefox.profile", "default");
				driver = setFirefoxDriver();
				driver.manage().window().maximize();
				driver.manage().deleteAllCookies();
				System.out.println("Opening browser "
						+ readFromPropertiesFile.readPropertiesFile("browser"));

			}
			if (readFromPropertiesFile.readPropertiesFile("browser")
					.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver",
						System.getProperty("user.dir") + CHROME_LOCATION);
				Toolkit toolkit = Toolkit.getDefaultToolkit();
				Dimension screenResolution = new Dimension((int) toolkit
						.getScreenSize().getWidth(), (int) toolkit
						.getScreenSize().getHeight());
				driver = new ChromeDriver();
				driver.manage().window().setSize(screenResolution);
				System.out.println("Opening browser "
						+ readFromPropertiesFile.readPropertiesFile("browser"));
			}
			if (readFromPropertiesFile.readPropertiesFile("browser")
					.equalsIgnoreCase("safari")) {
				driver = new SafariDriver();
				driver.manage().deleteAllCookies();
				System.out.println("Opening browser "
						+ readFromPropertiesFile.readPropertiesFile("browser"));
			}

		} catch (Exception e) {
			System.out
					.println("Unable to execute on local. Please check the configuration "
							+ e.getMessage());
		}
	}

	public void executeOnSauce(Scenario scenario) {
		// Choose the browser, version, and platform to test
		try {

			// Choose the browser, version, and platform to test
			DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			capabilities.setCapability("version", "37");
			capabilities.setCapability("platform", Platform.WIN8);
			// Create the connection to Sauce Labs to run the tests
			driver = new RemoteWebDriver(
					new URL(
							"http://kumaramitnc:deafb01d-5a5b-4a3c-afa6-b15834f13bbd@ondemand.saucelabs.com:80/wd/hub"),
					capabilities);
		} catch (Exception e) {
			System.out
					.println("Unable to execute on Sauce Labs. Please check the Sauce lab configuration "
							+ e.getMessage());
		}
	}

	public void cleanUp(Scenario scenario) throws InterruptedException {
		String jobId = ((RemoteWebDriver) driver).getSessionId().toString();
		SauceREST client = new SauceREST(
				readFromPropertiesFile.readPropertiesFile("userName"),
				readFromPropertiesFile.readPropertiesFile("accessKey"));
		Map<String, Object> sauceJob = new HashMap<String, Object>();
		sauceJob.put("Name", "Scenario: ");

		// Add Screen shot for failure
		if (scenario.isFailed()) {
			try {

				if (readFromPropertiesFile.readPropertiesFile("executeLocal")
						.equalsIgnoreCase("y")) {
					byte[] screenshot = ((TakesScreenshot) driver)
							.getScreenshotAs(OutputType.BYTES);
					scenario.embed(screenshot, "image/png");
				} else {
					client.jobFailed(jobId);
				}

			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				System.err.println(somePlatformsDontSupportScreenshots
						.getMessage());
			}

		} else {
			if (!readFromPropertiesFile.readPropertiesFile("executeLocal")
					.equalsIgnoreCase("y")) {
				client.jobPassed(jobId);
			}
		}
		if (!readFromPropertiesFile.readPropertiesFile("executeLocal")
				.equalsIgnoreCase("y")) {
			client.updateJobInfo(jobId, sauceJob);
		}

		System.out.println("Closing browser ");
		System.out.println("*****************************************");
		driver.close();
		driver.quit();
		driver = null;
	}

	public void explicitWaitUntilVisibilityOfWebelement(WebElement webelement) {
		try {
			WebDriverWait wait = new WebDriverWait(driver, 30);
			wait.until(ExpectedConditions.visibilityOf(webelement));
			wait = null;
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Unable to load " + webelement + " Page due to "
					+ e.getMessage());
		}
	}

}
