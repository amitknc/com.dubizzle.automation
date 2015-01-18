Feature: "As a user I want the list of least expensive apartment to rent in marina which have at least two bathrooms" 


@RegressionTests @SmokeTests 
Scenario Outline: Get list of least expensive apartment in marina
	When I go to "<Website>"
	And I click on 'Apartment/Flat for Rent' link
	And I select sort by "<SortBy>"
	And I select 'Neighborhoods' as "<Area>" 
	And I click on 'Advanced Option' in search window
	And I select minimum bathrooms as two
	And I click on 'Search' button
	Then result page should display least expensive apartment in order which has at least two bathrooms
	When I go to last item from result set
	Then I verify it has two bathrooms
	
	Examples: 
		|Website 						| Area 		|SortBy					|
		|http://dubai.dubizzle.com/		|Marina		|Price Lowest to Highest|		
		|http://dubai.dubizzle.com/ 	|Dubai hills|Oldest to Newest		|
	 
	
	
	
	
	 
	
