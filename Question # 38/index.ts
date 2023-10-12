function describe_city(city: string, country: string = "Unknown"): void {
    console.log(city + " is in " + country + ".");
  }
  
  // Call the function for three different cities
  describe_city("Karachi", "Pakistan");
  describe_city("Tokyo", "Japan");
  describe_city("New York"); // Uses default country "Unknown"
  