"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type assert
var username;
username = 'afelipelds';
username = 'felipe';
var userName;
userName = 'afelipelds 345';
/**type with < > */
var message = username.length > 5 ? "hello to world " + username : "Your Username It's too short";
console.log('message ', message);
var obtainJustUSername = userName.substring(0, 10);
console.log('obtainJustUSername ', obtainJustUSername);
/**type with as */
var helloUSer;
helloUSer = 'Hello my dear Friend';
var newGreeting = helloUSer.split(' ', 1);
console.log('newGreeting ', newGreeting);
