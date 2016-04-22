/**ignore at merge**/
//:import sdk.releases.Current
qubit.opentag.Utils.namespace('intentmedia.allproductpaths.v1.local');
intentmedia.allproductpaths.v1.local.Config = {
  "parameters": [
     {
      "name": "Intent Media Site Name",
      "description": "Unique site id provided by Intent Media; all caps, no spaces, no special characters e.g. 'MYSITE_US'",
      "token": "site_name",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"test_site\""
    },
     {
      "name": "Intent Media Page ID",
      "description": "Unique page id provided by Intent Media; e.g. 'flight.home'.  Must be combination of Product (flight, hotel, car or package) and Page (home, list, details or confirmation)",
      "token": "page_id",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"hotel.list\""
    },
     {
      "name": "Site country",
      "description": "2 letter ISO country code of the website version that was loaded; e.g. 'us'",
      "token": "site_country",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"US\""
    },
     {
      "name": "Site language",
      "description": "2 letter ISO code for the language the website page is rendered in; e.g. 'en'",
      "token": "site_language",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"en\""
    },
     {
      "name": "Site currency",
      "description": "3 letter ISO currency code for the transaction",
      "token": "site_currency",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"USD\""
    },
     {
      "name": "Dispay format type",
      "description": "Device-specific version of the website that was loaded; e.g. DESKTOP or MOBILE",
      "token": "display_format_type",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"DESKTOP\""
    },
     {
      "name": "User member id",
      "description": "Unique registered user id to identify logged-in users",
      "token": "user_member_id",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Visitor id",
      "description": "Unique user id persistent at least across the entire booking transaction session",
      "token": "visitor_id",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Referrer source",
      "description": "Specific site where the user came from - Google/Bing, etc.",
      "token": "referrer_source",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Referrer channel",
      "description": "Which marketing channel acquired the user - (SEM/SEO/Meta, etc.)",
      "token": "referrer_channel",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Active member profile",
      "description": "Member profile contains data beyond initial account creation default (i.e. loyalty points, preferred airline, written reviews, etc.)",
      "token": "active_member_profile",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Tag path",
      "description": "Mandatory value for the tag path - default value is '//a.cdn.intentmedia.net/javascripts/v1/intent_media_core.js",
      "token": "tag_path",
      "uv": "",
      "defaultValue": "//a.cdn.intentmedia.net/javascripts/v1/intent_media_core.js",
      "inputVariable": "\"//a.cdn.intentmedia.net/javascripts/v1/intent_media_core.js\""
    },
     {
      "name": "Show on-page ads",
      "description": "Controls whether the existing on-page ads (intercard and rail) are shown or not - Y/N",
      "token": "show_onpage_ads",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Show exit units",
      "description": "Controls whether the existing exit units are shown or not - Y/N",
      "token": "show_exit_units",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "High value",
      "description": "Intent Media system value",
      "token": "is_hv",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Low value",
      "description": "Intent Media system value",
      "token": "is_lv",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Travel start date",
      "description": "Required format YYYYMMDD",
      "token": "travel_date_start",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"20150808\""
    },
     {
      "name": "Travel end date",
      "description": "Required format YYYYMMDD",
      "token": "travel_date_end",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"20150818\""
    },
     {
      "name": "Travelers",
      "description": "Total number of travelers (adults+children+seniors)",
      "token": "travelers",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"2\""
    },
     {
      "name": "Adults",
      "description": "Number of adult travelers",
      "token": "adults",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Children",
      "description": "Number of children travelers",
      "token": "children",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Seniors",
      "description": "Number of senior travelers",
      "token": "seniors",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Trip type",
      "description": "Flights only - roundtrip/oneway (do not traffic tag on multicity searches)",
      "token": "trip_type",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Flight class of service",
      "description": "Class of airline ticket - FirstClass/BusinessClass/EconomyClass/PremiumClass",
      "token": "flight_class_of_service",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Flight origin",
      "description": "3 letter airport code - Origin",
      "token": "flight_origin",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Flight destination",
      "description": "3 letter airport code - Destination",
      "token": "flight_destination",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Hotel city",
      "description": "City of searched, selected or booked hotel property (in English language)",
      "token": "hotel_city",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"Orlando\""
    },
     {
      "name": "Hotel country",
      "description": "2 letter ISO country code of searched, selected or booked hotel property",
      "token": "hotel_country",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"US\""
    },
     {
      "name": "Hotel state",
      "description": "2 letter ISO state code of searched, selected or booked hotel property - US & Canada only",
      "token": "hotel_state",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"FL\""
    },
     {
      "name": "Hotel rooms",
      "description": "Number of hotel rooms booked",
      "token": "hotel_rooms",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"1\""
    },
     {
      "name": "Number of opaque listings",
      "description": "Number of opaque listings in search results - list page only, set to 0 if all are retail",
      "token": "number_of_opaque_listings",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car trip type",
      "description": "roundtrip/oneway",
      "token": "car_trip_type",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car pickup location type",
      "description": "Valid values: AIRPORT, CITY",
      "token": "car_pickup_location_type",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car pickup airport",
      "description": "3 letter airport code if pickup location is airport",
      "token": "car_pickup_airport",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car pickup city",
      "description": "City name if pickup location is city",
      "token": "car_pickup_city",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car pickup state",
      "description": "2 letter ISO state code for state if pickup location is city - US & Canada only",
      "token": "car_pickup_state",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car pickup country",
      "description": "2 letter ISO country code if pickup location is city",
      "token": "car_pickup_country",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car pickup time",
      "description": "Pickup time per pickup timezone - 0000-2359",
      "token": "car_pickup_time",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car dropoff location type",
      "description": "Valid values: AIRPORT, CITY",
      "token": "car_dropoff_location_type",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car dropoff airport",
      "description": "3 letter airport code if dropoff location is airport",
      "token": "car_dropoff_airport",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car dropoff city",
      "description": "City name if dropoff location is city",
      "token": "car_dropoff_city",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car dropoff state",
      "description": "2 letter ISO state code for state if dropoff location is city - US & Canada only",
      "token": "car_dropoff_state",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car dropoff country",
      "description": "2 letter ISO country code if pickup location is city",
      "token": "car_dropoff_country",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car dropoff time",
      "description": "Dropoff time per dropoff timezone - 0000-2359",
      "token": "car_dropoff_time",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Package type",
      "description": "Indicate the combination of products included in the package - e.g. FLIGHT+HOTEL/HOTEL+CAR/FLIGHT+CRUISE/etc.",
      "token": "package_type",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Total conversion value",
      "description": "Confirmation page only. Total conversion value of the hotel, car, flight or package booking - no currency symbol, 2 decimal places",
      "token": "total_conversion_value",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Order id",
      "description": "Confirmation page only. Order ID of the booking",
      "token": "order_id",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Flight carrier code",
      "description": "Confirmation page only. Airline code of booked flight",
      "token": "flight_carrier_code",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Hotel property id",
      "description": "ID of selected or booked hotel property",
      "token": "hotel_property_id",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Hotel market id",
      "description": "Market ID of searched, selected or booked hotel property",
      "token": "hotel_market_id",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Hotel brand code",
      "description": "Chain code for hotel brand in user's search, or of selected/booked property",
      "token": "hotel_brand_code",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Hotel value in package",
      "description": "Package Purchase amount of the hotel only - no currency symbol, 2 decimal places",
      "token": "hotel_value_in_package",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Conversion type",
      "description": "Type of hotel product that was purchased (if applicable) - OPAQUE/RETAIL",
      "token": "conversion_type",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Promotional code",
      "description": "Was there a promotion code applied? Y/N",
      "token": "promo_code",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car class",
      "description": "Car class - ECONOMY/COMPACT/INTERMEDIATE/STANDARD/FULL-SIZE/PREMIUM/LUXURY/SUV/MINI-VAN/CONVERTIBLE/PICKUP-TRUCK",
      "token": "car_class",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Car rental agency",
      "description": "The name of the car rental agency the user purchased with on the confirmation page - Enterprise/Avis/National/Budget/Hertz/Advantage/Dollar/Alamo/Fox/Ace/Thrifty/Alamo/Payless/E-Z",
      "token": "car_rental_agency",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Site reporting value 1",
      "description": "Intent Media System Value",
      "token": "site_reporting_value_01",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Site reporting value 2",
      "description": "Intent Media System Value",
      "token": "site_reporting_value_02",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Site reporting value 3",
      "description": "Intent Media System Value",
      "token": "site_reporting_value_03",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Site reporting value 4",
      "description": "Intent Media System Value",
      "token": "site_reporting_value_04",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Site reporting value 5",
      "description": "Intent Media System Value",
      "token": "site_reporting_value_05",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Site reporting value 6",
      "description": "Intent Media System Value",
      "token": "site_reporting_value_06",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Site reporting value 7",
      "description": "Intent Media System Value",
      "token": "site_reporting_value_07",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Custom value 1",
      "description": "Intent Media System Value",
      "token": "custom_01",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Custom value 2",
      "description": "Intent Media System Value",
      "token": "custom_02",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Custom value 3",
      "description": "Intent Media System Value",
      "token": "custom_03",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Custom value 4",
      "description": "Intent Media System Value",
      "token": "custom_04",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Custom value 5",
      "description": "Intent Media System Value",
      "token": "custom_05",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Custom value 6",
      "description": "Intent Media System Value",
      "token": "custom_06",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Custom value 7",
      "description": "Intent Media System Value",
      "token": "custom_07",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Custom value 8",
      "description": "Intent Media System Value",
      "token": "custom_08",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Custom value 9",
      "description": "Intent Media System Value",
      "token": "custom_09",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Custom value 10",
      "description": "Intent Media System Value",
      "token": "custom_10",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Rail target div id",
      "description": "The id of the div where the Intent Media Rail will be inserted",
      "token": "IntentMediaRail",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Intercard target div id",
      "description": "The id of the div where the Intent Media Intercard will be inserted",
      "token": "IntentMediaIntercard",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    },
     {
      "name": "Footer target div id",
      "description": "The id of the div where the Intent Media Footer will be inserted",
      "token": "IntentMediaFooter",
      "uv": "",
      "defaultValue": "",
      "inputVariable": "\"\""
    }
  ]
};