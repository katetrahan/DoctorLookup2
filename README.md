# _Doctor Lookup_

## Planning

Configuration/dependencies
  * npm, gulp, bower
  * defined in gulpfile/package.json
  * npm = lets us run JS from the command licenses
  * gulp = automates development tasks
  * bower = frontend package manager
  * BetterDoctor API

Specs
  * Spec 1: 'should correctly make API call'.
  * Spec 2: 'should correctly parse data from the API response'.
  * Spec 3: 'should be able to accept a user medical issue/name of doctor'.
  * Spec 4: 'should output doctor information(info stored in API)'.
  * Spec 5: 'should return error message stating the error'.
  * Spec 6: 'should return message if no doctors are found in that area'.

#### _An application where users may enter a medical issue and receive a list of doctors in Portland._

#### By _**Kate Trahan**_

## Description

_This is an application that uses JavaScript and the BetterDoctor API to take user input referring to symptoms they or someone they know have been experiencing. The application returns a list of doctors and related information based on the symptoms entered by the user. Created 2/16/2018._

### Specs
| Behavior | Input | Output |
| :-------------     | :------------- | :-------------
| **Accepts person's symptoms**| "runny nose" | "runny nose" |
| **Calls API correctly in order to find correct data**| "" | "" |
| **Returns list of doctors based on search query**| "runny nose" | "Dr.FixRunnyNose"|
| **Returns related information about doctor** |"Dr.FixRunnyNose"| "first:Ron, last:FixRunnyNose, address:1000 doctor street, Portland, phone:(503)000-0000"|
| **Returns error message** |""|"404"|
| **Returns message if there are no doctors who fit the search query** |""| "We are sorry, there are no doctors in the area who fit this search"|

## Functionality to be included in the future
* _Expand to search areas other than Portland_
* _Add reviews_
* _Add "top rated" feature_

## Setup/Installation Requirements

* _Clone repository to your machine from GitHub_
* _Open cloned repository in Atom_
* _type npm install in terminal_
* _type bower install in terminal_
* _type gulp build in terminal_
* _type gulp serve in terminal_

## Known Bugs

_No known issues._

## Support and contact details

_If you have any issues or have questions, ideas or concerns please email kathrynceciliatrahan@gmail.com or contribute to the code_

## Technologies Used

* _JavaScript_
* _Atom_
* _Node_
* _Gulp_
* _Bower_
* _Jasmine_
* _Karma_
* _BetterDoctorAPI_

### License
Copyright (C) 2017 Kate Trahan

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
