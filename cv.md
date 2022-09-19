![sergej miroshnichenko](images/iam.png)

# Miroshnichenko Sergej


####  Junior Front-end Developer
__________________________________________________________ 




## Contact information :


- ***City:***   Kyiv
- ***Phone:***   +38 096 4470574
- ***E-mail:***   sergej.miroshnichenko.kr@gmail.com
- ***Telegram:***  @Sergej Miroshnichenko
- ***Discord:***  Sergej (@sergejmiroshnichenko)

- [Github](https://github.com/sergejmiroshnichenko)
- [LinkedIn](https://www.linkedin.com/in/sergej-miroshnichenko-%F0%9F%87%BA%F0%9F%87%A6-03a049223/)
- [Facebook](https://www.facebook.com/profile.php?id=100011421697708&sk=about)


## About myself :



My goal is to get practical experience in front-end development to further realize myself in this field.I like front-end because you can implement any idea and see it in a browser.  And also in the future I want my developments to benefit people.
When I having worked in a bank as a Branch Manager for 10 years I received experience in business negotiations, feedback, teamwork, hardworking and also responsibility for timely results.

  --------------
## Skills and Proficiency :


- HTML5,
- CSS3,SCSS
- Figma
- Git, 
- Github, Gitlab
- JavaScript (ES6+)
- Gulp 
- Bootstrap
- React, React-router
- Redux
- React Hooks Form
- Material UI


--------------
## Code example :


##### Given an array/list [ ] of n integers , find maximum triplet sum in the array Without duplications Notes :Array/list size is at least 3 .Array/list numbers could be a mixture of positives , negatives and zeros .Repetition of numbers in the array/list could occur , So (duplications are not included when summing)


```
function maxTriSum(numbers) {

   const res = numbers.sort((a, b) => b - a);

   return ([...new Set(res)].slice(0, 3).reduce((acc, value) => acc + value));

}

maxTriSum([8,6,4,8,3,9,4,2,6,4,2,3,2,0,1]);     
```



#####  Given an array/list [ ] of n integers , find maximum triplet sum in the array Without duplications Notes :Array/list size is at least 3 .Array/list numbers could be a mixture of positives , negatives and zeros .Repetition of numbers in the array/list could occur , So (duplications are not included when summing)


```
function myLanguages(results) {

  const p = Object.entries(results).filter(([key, value]) => value >= 60);

  return [].concat(...p).filter(item => typeof (item) === 'string').sort((a,b) => results[b] - results[a]);
}

myLanguages({ Chinese: 11,
    Lithuanian: 42,
    Latvian: 34,
    Swedish: 89,
    Hungarian: 61,
    Turkish: 69 });

```
#####  Write a weather widget using Open Meteo API. When downloading the page, ask the user about the city. [geocoding-api.open-meteo.com](https://geocoding-api.open-meteo.com/v1/search?name=NAME). Make a weather report for the specified city and display the information in the widget on the page Use icon fonts library to display the status of the weather [erikflowers.github.io/weather-icons](https://erikflowers.github.io/weather-icons/) .  If an error occurs, then display the text of the error in the modal window.


```
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function fetchCityLocation(cityName) {
    return fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`)
        .then((rsp) => {
            if (rsp.ok) { return rsp.json() }
            throw new Error("Couldn't catch city")
        })
        .then((data) => data.results[0])
        .catch((err) => {
            throw new Error(err)
        })
}
function fetchWeatherByLocation(longitude, latitude) {
    return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
        .then((rsp) => {
            if (rsp.ok) { return rsp.json() }
            throw new Error("Couldn't catch city")
        })
        .then((weather) => {
            const {
                hourly: {
                    temperature_2m: temperature = []
                } = {}
            } = weather;

            return temperature[temperature.length - 1];
        })
        .catch((err) => {
            throw new Error(err)
        })
}
function renderWeather(city){
    let cityEl = document.querySelector(".city");
    let temperatureEl = document.querySelector(".temperature");

    return function(temperature) {
        cityEl.innerText = city;
        temperatureEl.innerText = temperature;
    }
}
const city = prompt("Input your city!");

if (city) {
    fetchCityLocation(city)
        .then(({latitude, longitude}) => fetchWeatherByLocation(longitude, latitude))
        .then(renderWeather(city))
}
```

## Work experience :


Branch manager AT Commercial Bank Privatbank, Kyiv |
August 2011 - August 2021

[codewars](https://www.codewars.com/users/sergejmiroshnichenko)


## Education :


- THE ROLLING SCOPES
  SCHOOL
  JS/FE PRE-SCHOOL (JAVASCRIPT) |
  December 2021 - March 2022

- DAN-IT Education, Kyiv
  Front-end Development |
  June 2021 - February 2022

- [Udemy. Ivan Petrichenko. Full course on JavaScript + React - from scratch to result](https://www.udemy.com/course/javascript_full/)

- Krivoy Rog National University,
  Expert, Business Economics |
  September 2013 - June 2016

- Krivoy Rog National University,
  Expert, Faculty of Information Technology, Control Systems and Automatics | September 2005 - June 2010

--------------