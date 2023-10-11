//imports
import React, { Component } from 'react';

export class Experience {
    constructor(title, body, values){
        this.title=title; //Title of the experience
        this.body=body; //content of the experience (text)
        this.values=values; //Array of value objects for the value tags

        this.location=''; // Initialize 'location' as an empty string
        this.date=''; // Initialize 'date' as an empty string

        this.textContent = ''; // Initialize 'textContent' as an empty string, Same as Body
        this.imageName = '';  // Initialize 'imageSrc' as an empty string
        this.reflection=''; // Initialize 'reflection' as an empty string
    }
    //Possible useful method functions for new Experience
    setTitle(title) {
        this.title=title;
    }
    setBody(body) {
        this.body=body;
    }
    addValue(Value) {
        this.values.push(Value);
    }
    setImage(imageName) {
        this.imageName=imageName;
    }
    addReflection(reflection) {
        this.reflection=reflection;
    }
    setLocation(location) {
        this.location=location;
    }
    setDate(date) {
        this.date=date;
    }
}

export class Value {
    constructor(title, definition){
        this.title=title;
        this.definition=definition;
        this.hasBeenUsed=false;
        this.timesUsedThisMonth=0;

        this.numExperiences=0;
        this.color=''; // Initialize 'color' as an empty string
    }

    //Possible useful method functions
    //To handle the times used this month, for the reflections page, and to reset the times used for each month
    incrementTimesUsed() {
        this.timesUsedThisMonth++;
    }
    clearTimesUsed() {
        this.timesUsedThisMonth=0;
    }
    //To handle the has been used, for the reflections page, and so the app can know which haven't been used
    toggleHasBeenUsed() {
        this.hasBeenUsed=!this.hasBeenUsed;
    }
    setColor(color) {
        this.color=color;
    }
    incrementNumExperiences() {
        this.numExperiences++;
    }
    setNumExperiences(num) {
        this.numExperiences=num;
    }
}

// const testExp = new Experience(
//     "My Experience", 
    
//     "this is my experience", 
//     [
//         {
//             id: '0',
//             title: 'Friendship'
//         },
//         {
//             id: '1',
//             title: 'Generosity'
//         },
//         {
//             id: '2',
//             title: 'Love'
//         },
//     ]);

// const testVal = new Value(
//     "Friendship",
//     "The state of being friends",
//     0,
//     false
// );
