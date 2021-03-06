$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UIfunctionaltests/testcases/Dubzzile.feature");
formatter.feature({
  "id": "\"as-a-user-i-want-the-list-of-least-expensive-apartment-to-rent-in-marina-which-have-at-least-two-bathrooms\"",
  "description": "",
  "name": "\"As a user I want the list of least expensive apartment to rent in marina which have at least two bathrooms\"",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 8470235000,
  "status": "passed"
});
formatter.scenario({
  "id": "\"as-a-user-i-want-the-list-of-least-expensive-apartment-to-rent-in-marina-which-have-at-least-two-bathrooms\";get-list-of-least-expensive-apartment-in-marina;;2",
  "tags": [
    {
      "name": "@RegressionTests",
      "line": 4
    },
    {
      "name": "@SmokeTests",
      "line": 4
    }
  ],
  "description": "",
  "name": "Get list of least expensive apartment in marina",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"http://dubai.dubizzle.com/\"",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \u0027Apartment/Flat for Rent\u0027 link",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I select sort by \"Price Lowest to Highest\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I select \u0027Neighborhoods\u0027 as \"Marina\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I click on \u0027Advanced Option\u0027 in search window",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I select minimum bathrooms as two",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "result page should display least expensive apartment in order which has at least two bathrooms",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I go to last item from result set",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "I verify it has two bathrooms",
  "keyword": "Then ",
  "line": 15
});
formatter.match({
  "arguments": [
    {
      "val": "http://dubai.dubizzle.com/",
      "offset": 9
    }
  ],
  "location": "AppTest.I_go_to(String)"
});
formatter.result({
  "duration": 8337391000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Apartment_Flat_for_Rent_link()"
});
formatter.result({
  "duration": 10508414000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price Lowest to Highest",
      "offset": 18
    }
  ],
  "location": "AppTest.I_select_sort_by_Price_Lowest_to_Highest(String)"
});
formatter.result({
  "duration": 14255833000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marina",
      "offset": 29
    }
  ],
  "location": "AppTest.I_select_Neighborhoods_as(String)"
});
formatter.result({
  "duration": 11098110000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Advanced_Option_in_search_window()"
});
formatter.result({
  "duration": 5336641000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_select_minimum_bathrooms_as_two()"
});
formatter.result({
  "duration": 4983234000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Search_button()"
});
formatter.result({
  "duration": 6266900000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.result_page_should_display_least_expensive_apartment_in_order_which_has_at_least_two_bathrooms()"
});
formatter.result({
  "duration": 137000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_go_to_last_item_from_result_set()"
});
formatter.result({
  "duration": 9203860000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_verify_it_has_two_bathrooms()"
});
formatter.result({
  "duration": 3402964000,
  "status": "passed"
});
formatter.after({
  "duration": 4298753000,
  "status": "passed"
});
formatter.before({
  "duration": 12893267000,
  "status": "passed"
});
formatter.scenario({
  "id": "\"as-a-user-i-want-the-list-of-least-expensive-apartment-to-rent-in-marina-which-have-at-least-two-bathrooms\";get-list-of-least-expensive-apartment-in-marina;;3",
  "tags": [
    {
      "name": "@RegressionTests",
      "line": 4
    },
    {
      "name": "@SmokeTests",
      "line": 4
    }
  ],
  "description": "",
  "name": "Get list of least expensive apartment in marina",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"http://dubai.dubizzle.com/\"",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \u0027Apartment/Flat for Rent\u0027 link",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I select sort by \"Oldest to Newest\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I select \u0027Neighborhoods\u0027 as \"Dubai hills\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I click on \u0027Advanced Option\u0027 in search window",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I select minimum bathrooms as two",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "result page should display least expensive apartment in order which has at least two bathrooms",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I go to last item from result set",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "I verify it has two bathrooms",
  "keyword": "Then ",
  "line": 15
});
formatter.match({
  "arguments": [
    {
      "val": "http://dubai.dubizzle.com/",
      "offset": 9
    }
  ],
  "location": "AppTest.I_go_to(String)"
});
formatter.result({
  "duration": 3051023000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Apartment_Flat_for_Rent_link()"
});
formatter.result({
  "duration": 9059004000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oldest to Newest",
      "offset": 18
    }
  ],
  "location": "AppTest.I_select_sort_by_Price_Lowest_to_Highest(String)"
});
formatter.result({
  "duration": 15179823000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dubai hills",
      "offset": 29
    }
  ],
  "location": "AppTest.I_select_Neighborhoods_as(String)"
});
formatter.result({
  "duration": 11248227000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Advanced_Option_in_search_window()"
});
formatter.result({
  "duration": 5356775000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_select_minimum_bathrooms_as_two()"
});
formatter.result({
  "duration": 4134030000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Search_button()"
});
formatter.result({
  "duration": 5148065000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.result_page_should_display_least_expensive_apartment_in_order_which_has_at_least_two_bathrooms()"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_go_to_last_item_from_result_set()"
});
formatter.result({
  "duration": 7755038000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_verify_it_has_two_bathrooms()"
});
formatter.result({
  "duration": 3179558000,
  "status": "failed",
  "error_message": "junit.framework.AssertionFailedError: Something went wrong\n\tat junit.framework.Assert.fail(Assert.java:57)\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\n\tat junit.framework.TestCase.assertTrue(TestCase.java:192)\n\tat UIfunctionaltests.testcases.stepdef.AppTest.I_verify_it_has_two_bathrooms(AppTest.java:84)\n\tat ✽.Then I verify it has two bathrooms(UIfunctionaltests/testcases/Dubzzile.feature:15)\n"
});
formatter.after({
  "duration": 4540097000,
  "status": "passed"
});
});