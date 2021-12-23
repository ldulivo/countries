# countries
Get country information

# WEB (Frontend)
Frontend created with React.Js

# API
The RESTful API provides information about countries.

**Get a complete list of all countries.**
```
http://localhost:8000/api
```

**Filter by initial letter.**

_Example letter a:_
```
http://localhost:8000/api?firstChar=A
```

**Sort by category.**

* countryCode
* countryName
* currencyCode
* population
* fipsCode
* isoNumeric
* capital
* continentName
* continent
* areaInSqKm
* languages
* isoAlpha3
* geonameId

_Example for category country name (countryName):_
```
http://localhost:8000/api?orderBy=countryName
```

_You can combine the filters:_
```
http://localhost:8000/api?firstChar=A&orderBy=countryName
```

**View for continent.**

_For example see countries by European continent:_
```
http://localhost:8000/api/continent/europe
```

_View by continents and add filters:_
```
http://localhost:8000/api/continent/europe?firstChar=A&orderBy=countryName
```

**Information for a specific country.**
```
http://localhost:8000/api?countryFind=Italy
```

**Returns a list of initial letters of each country ordered alphabetically without repeating the same letter.**
```
http://localhost:8000/api/list
```

```
"A",
"Å",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"Y",
"Z"
```

**Returns a list with the names of the existing continents ordered alphabetically without repeating the same continent.**
```
http://localhost:8000/api/list?search=continentName
```

```
"Africa",
"Antarctica",
"Asia",
"Europe",
"North America",
"Oceania",
"South America"
```
